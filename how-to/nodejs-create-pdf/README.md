# How to Create PDF Files in Node.js

> Full guide: [How to Create PDF Files in Node.js](https://ironpdf.com/nodejs/how-to/nodejs-create-pdf/?utm_source=github)

Creating PDF files programmatically in Node.js requires a library that handles HTML rendering accurately, supports modern CSS, and fits Node's async patterns. IronPDF uses a Chromium-based rendering engine to convert HTML into PDFs that match Chrome's print output, supporting full CSS, inline JavaScript, and responsive layouts.

This guide covers the whole workflow: installation, generating PDFs from HTML strings, HTML files, and URLs, configuring output options, and applying headers, footers, and encryption.

## Quickstart

```shell
npm install @ironsoftware/ironpdf
```

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

const pdf = await PdfDocument.fromHtml("<h1>Hello, PDF!</h1><p>Generated with IronPDF.</p>");
await pdf.saveAs("output.pdf");
```

The package works on Node.js 12.0 or higher across Windows, Linux, macOS, and Docker, on both x64 and ARM64. The IronPDF Engine binary downloads on first run; in offline or CI environments, pre-install the platform-specific engine package instead.

## Creating a PDF From an HTML String

`PdfDocument.fromHtml()` accepts any valid HTML, including inline `<style>` blocks, external fonts, and layout systems like CSS Grid or Flexbox. The Chromium renderer resolves all resources before generating the PDF.

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
	<style>
		body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
		.header { background: #2b4c8c; color: white; padding: 24px 32px; }
		.header h1 { margin: 0; font-size: 22px; }
		.body { padding: 32px; }
		table { width: 100%; border-collapse: collapse; margin-top: 16px; }
		th { background: #f0f4fb; text-align: left; padding: 8px 12px; }
		td { padding: 8px 12px; border-bottom: 1px solid #e0e0e0; }
	</style>
</head>
<body>
	<div class="header"><h1>Invoice #INV-2025-0042</h1></div>
	<div class="body">
		<p>Date: ${new Date().toLocaleDateString()}</p>
		<table>
			<tr><th>Item</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr>
			<tr><td>IronPDF Enterprise License</td><td>1</td><td>$499.00</td><td>$499.00</td></tr>
			<tr><td>Priority Support (1 year)</td><td>1</td><td>$199.00</td><td>$199.00</td></tr>
		</table>
		<p style="text-align:right; margin-top:16px;"><strong>Total: $698.00</strong></p>
	</div>
</body>
</html>`;

// Generate the PDF from the HTML string
const pdf = await PdfDocument.fromHtml(htmlContent);
await pdf.saveAs("invoice.pdf");
```

`fromHtml()` returns a `PdfDocument`. Call `saveAs()` with the output path to write the file. Both are asynchronous.

### From an HTML file

`fromHtml()` also takes a path to an `.html` file:

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Load an HTML file and render it as a PDF
const pdf = await PdfDocument.fromHtml("./templates/report-template.html");
await pdf.saveAs("./output/report.pdf");
```

The renderer resolves relative asset paths from the HTML file's directory, so local CSS and image references work without extra configuration.

### From a URL

`PdfDocument.fromUrl()` renders a live web page. The renderer loads the page as a full browser session, executing JavaScript and applying CSS before capturing the output.

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Render a live webpage to PDF
const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
await pdf.saveAs("ironpdf-homepage.pdf");
```

## Configuring Output Settings

Pass a second argument with a **`renderOptions`** property to `fromHtml()`, `fromFile()`, or `fromUrl()`.

```js
import { PdfDocument, PaperSize, PdfPaperOrientation, WaitForType } from "@ironsoftware/ironpdf";

const config = {
	renderOptions: {
		paperSize: PaperSize.A4,
		margin: { top: 25, bottom: 25, left: 20, right: 20 },
		paperOrientation: PdfPaperOrientation.Portrait,
		printHtmlBackgrounds: true,
		waitFor: { type: WaitForType.RenderDelay, delay: 250 },
	},
};

const pdf = await PdfDocument.fromHtml("<h1>Configured PDF</h1>", config);
await pdf.saveAs("configured-output.pdf");
```

The options that matter most:

- `paperSize` — a `PaperSize` enum value (`A4`, `Letter`, `Legal`, and the rest)
- `paperOrientation` — `PdfPaperOrientation.Portrait` or `.Landscape`
- `printHtmlBackgrounds` — include CSS background colours and images
- `margin` — a `{ top, right, bottom, left }` object in millimetres, or `{ default: n }` for all four
- `waitFor` — how long to wait before capture on JavaScript-heavy pages

### Headers and footers

`htmlHeader` and `htmlFooter` take an object whose `htmlFragment` is a standalone HTML snippet.

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

const config = {
	renderOptions: {
		htmlHeader: {
			htmlFragment: "<div style='text-align:center; font-size:12px; color:#666;'>Quarterly Report - Confidential</div>",
			dividerLine: true,
		},
		htmlFooter: {
			htmlFragment: "<div style='text-align:right; font-size:10px;'>Page {page} of {total-pages}</div>",
			dividerLine: true,
		},
	},
};

const pdf = await PdfDocument.fromHtml("<h1>Q3 Financial Summary</h1><p>See attached tables.</p>", config);
await pdf.saveAs("report-with-headers.pdf");
```

IronPDF substitutes `{page}` and `{total-pages}` at render time, along with `{url}`, `{date}`, `{time}`, `{html-title}` and `{pdf-title}`.

## Security and Permissions

Passwords, permissions and encryption are each set with their own method:

```js
import { PdfDocument, PdfEncryptionType } from "@ironsoftware/ironpdf";

const pdf = await PdfDocument.fromHtml("<h1>Confidential Document</h1>");

await pdf.setUserPassword("view-password");
await pdf.setOwnerPassword("admin-password");
await pdf.setPermission({
	AllowAnnotations: false,
	AllowPrint: true,
	AllowExtractContent: false,
});
await pdf.setEncryptionType(PdfEncryptionType.Aes_256);

await pdf.saveAs("secured-document.pdf");
```

Restricting a permission only takes effect once an owner password is set. The available keys are `AllowAccessibilityExtractContent`, `AllowAnnotations`, `AllowAssembleDocument`, `AllowExtractContent`, `AllowFillForms`, `AllowPrintFullQuality`, `AllowModify`, `AllowPrint`, `AllowAll` and `None`.

## Merging and Manipulating Existing PDFs

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Merge two PDF files into one
const merged = await PdfDocument.mergePdf([
	await PdfDocument.fromFile("./report-part1.pdf"),
	await PdfDocument.fromFile("./report-part2.pdf"),
]);

await merged.saveAs("./complete-report.pdf");
```

`mergePdf()` takes an array and returns one document; page order follows array order. Related operations on `PdfDocument` include `removePage()`, `stampHtml()`, `replaceText()` and `extractText()`.

## Where This Example Differs From the Guide

Every name below was checked against `@ironsoftware/ironpdf` 2026.8.1 by importing the package and inspecting its exports, then by running the corrected code.

**`PdfPaperSize.A4` throws.** `PdfPaperSize` is a TypeScript type alias, not a runtime value, so it is `undefined` when the code executes. The runtime enum is `PaperSize`.

**A flat config object is silently discarded.** Render settings have to nest under `renderOptions`. Passed flat, as the guide shows them, a request for A3 landscape returns a 210 × 297 mm A4 portrait page and no error is raised.

| The guide shows | The package ships |
|---|---|
| `PdfPaperSize.A4` | `PaperSize.A4` |
| `fromHtml(html, { paperSize, marginTop, landscape, printBackground })` | `fromHtml(html, { renderOptions: { ... } })` |
| `marginTop` / `marginBottom` / `marginLeft` / `marginRight` | `margin: { top, bottom, left, right }` |
| `landscape: true` | `paperOrientation: PdfPaperOrientation.Landscape` |
| `printBackground: true` | `printHtmlBackgrounds: true` |
| `renderDelay: 500` | `waitFor: { type: WaitForType.RenderDelay, delay: 500 }` |
| `pdf.securePdf({ ... })` | No such method. `setUserPassword()`, `setOwnerPassword()`, `setPermission()`, `setEncryptionType()` |
| `allowUserAnnotations` / `allowUserPrinting` / `allowUserCopyPasteContent` | `AllowAnnotations` / `AllowPrint` / `AllowExtractContent` |
| `removePages()` | `removePage(pages)` |

The guide also loads an `.html` file through `PdfDocument.fromFile()`. That does work, but `fromFile` is typed and documented as opening a `.pdf`, and its second argument is a change-tracking mode rather than render options — so this example uses `fromHtml`, which accepts an HTML file path and takes `renderOptions`.

## Running This Example

```shell
npm install
node src/program.js
```

Edit `src/program.js` to uncomment the section you want to run.
