# How to Compress PDF Files in Node.js

> Full guide: [How to Compress PDF Files Using Node.js](https://ironpdf.com/nodejs/how-to/nodejs-compress-pdf/?utm_source=github)

Large PDF files slow down file transfers, inflate storage costs, and degrade performance in document-heavy applications. IronPDF for Node.js provides the `compressSize` method, which reduces embedded image quality and optionally rescales images to their visible dimensions in the document, often cutting file size by 50% or more without changing the document structure.

## Quickstart

Install the package, load a PDF, and call `compressSize` with a quality value between 1 and 100:

```shell
npm install @ironsoftware/ironpdf
```

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Load an existing PDF
const pdf = await PdfDocument.fromFile("report.pdf");

// Compress embedded images to 60% JPEG quality
await pdf.compressSize(60);

// Save the result
await pdf.saveAs("report-compressed.pdf");
```

## Why PDF File Size Matters

PDF size affects two operational concerns: delivery speed and storage cost. A 20 MB report sent over an API endpoint adds measurable latency on mobile connections. In batch pipelines handling thousands of documents daily, even a 30% size reduction compounds into meaningful storage savings.

`compressSize` targets the dominant contributor to large PDF files: embedded images. Text and vector graphics compress well at the PDF object level during rendering, but raster images embedded at original resolution account for most of the excess weight in typical business documents. Reducing JPEG quality from the default to 60-85% yields the greatest size reduction for the least visible quality loss.

## How compressSize Works

`compressSize` takes two parameters: `imageQuality` (required, integer 1-100) and `scaleToVisibleSize` (optional, boolean). When `scaleToVisibleSize` is `false` (the default), the method re-encodes each embedded JPEG at the target quality. When it is `true`, it also downsamples images to match their visible size in the PDF layout, reducing resolution for images rendered small on the page.

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Load the source document
const pdf = await PdfDocument.fromFile("product-catalog.pdf");

// Compress images to 90% quality and scale down to visible size
await pdf.compressSize(90, true);

// Save the optimized document
await pdf.saveAs("product-catalog-optimized.pdf");
```

Scaling is particularly effective for PDFs generated from high-DPI scans, or from HTML templates that embed images at full resolution regardless of display size. Enabling it can reduce file size more than adjusting quality alone, without visible degradation at typical print or screen resolutions.

The method modifies the `PdfDocument` object in place. To preserve the original, save to a separate path.

### Choosing a quality setting

- **90-100** — Near-lossless. Use when the document will be printed or viewed at full zoom.
- **80-89** — High quality, noticeably smaller file. A good default for business documents.
- **60-79** — Medium quality. Fine for screen display, web delivery, and email attachments.
- **Below 60** — Low quality. Suited to preview thumbnails and archival copies.

## Measuring the Result

Read the file size before and after with the Node.js `fs` module, then compute the ratio:

```js
import { PdfDocument } from "@ironsoftware/ironpdf";
import { statSync } from "fs";

const inputPath = "annual-report.pdf";
const outputPath = "annual-report-compressed.pdf";

const beforeBytes = statSync(inputPath).size;

const pdf = await PdfDocument.fromFile(inputPath);
await pdf.compressSize(75);
await pdf.saveAs(outputPath);

const afterBytes = statSync(outputPath).size;
const reduction = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1);

console.log(`Before: ${(beforeBytes / 1024).toFixed(1)} KB`);
console.log(`After:  ${(afterBytes / 1024).toFixed(1)} KB`);
console.log(`Reduced by ${reduction}%`);
```

`fs.statSync` returns a `Stats` object carrying `size` in bytes. In production pipelines, log this ratio per document to spot outliers where compression did not help — typically scans already compressed at source.

## Compressing a Batch

The example below processes an array of file paths concurrently with `Promise.all`, letting the event loop handle multiple compression operations without blocking:

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

async function compressPdfFiles(inputPaths, quality = 80) {
	const results = await Promise.all(
		inputPaths.map(async (inputPath) => {
			const pdf = await PdfDocument.fromFile(inputPath);
			await pdf.compressSize(quality);

			const outputPath = inputPath.replace(".pdf", "-compressed.pdf");
			await pdf.saveAs(outputPath);

			return { input: inputPath, output: outputPath };
		})
	);

	return results;
}

const files = ["report-q1.pdf", "report-q2.pdf", "report-q3.pdf"];
const compressed = await compressPdfFiles(files, 75);
compressed.forEach((r) => console.log(`Saved: ${r.output}`));
```

Each `fromFile` and `compressSize` call is independent, so they are safe to parallelize. For very large batches, chunk the array to stay within memory limits.

## Combining Compression With Rendering

Compression fits into a larger processing chain. A common pattern is to generate a PDF from HTML, then compress before delivery:

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Render HTML to PDF
const pdf = await PdfDocument.fromHtml(
	"<h1>Invoice #1042</h1><p>Amount due: $540.00</p>"
);

// Compress before saving -- reduces image weight from Chrome-rendered content
await pdf.compressSize(85);

// Save the final document
await pdf.saveAs("invoice-1042.pdf");
```

Chromium-rendered pages often embed background images and CSS-referenced assets at full resolution, so compressing afterwards reliably reduces the size of HTML-sourced PDFs.

For documents that also need a digital signature, sign **after** compressing. Signing locks the byte stream, and further modification invalidates the signature. When combining several documents, merge them with `PdfDocument.mergePdf()` before compressing — compressing the merged result is more efficient than compressing each file and re-merging.

## Where This Example Differs From the Guide

Both names below were checked against `@ironsoftware/ironpdf` 2026.8.1 by importing the package and inspecting its exports:

| The guide shows | The package ships |
|---|---|
| `new ChromePdfRenderer()` and `renderer.renderHtmlAsPdf(html)` | No such export. `ChromePdfRenderer` is the C# class name; in Node the Chromium renderer is reached through `PdfDocument.fromHtml(html)`. |
| `PdfDocument.merge()` | `PdfDocument.mergePdf(pdfs)` |

## Running This Example

```shell
npm install
node src/program.js
```

`src/program.js` runs section 5, which renders its own PDF before compressing it. Sections 1-4 read a PDF from disk, so point them at a file you have first.
