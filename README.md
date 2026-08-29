# IronPdfNode.Examples

Runnable JavaScript examples for [IronPDF for Node.js](https://ironpdf.com/nodejs/?utm_source=github), a PDF library that converts HTML to PDF with a real Chromium renderer and generates, edits, and extracts PDF content.

## Install

```bash
npm install @ironsoftware/ironpdf
```

## Quickstart

```javascript
import { PdfDocument, IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

IronPdfGlobalConfig.setConfig({ licenseKey: "YOUR-LICENSE-KEY" });

const pdf = await PdfDocument.fromHtml("<h1>Hello, PDF!</h1>");
await pdf.saveAs("hello.pdf");
```

`PdfDocument.fromHtml` also accepts a path to an HTML file. To render other sources, use `PdfDocument.fromUrl(url)` or `PdfDocument.fromImage(paths)`, and `PdfDocument.open(path)` to load an existing document.

Render settings go under a `renderOptions` key — `fromHtml(html, { renderOptions: { paperSize, margin, paperOrientation } })`. Settings passed at the top level are silently ignored, so a page that looks unstyled is usually a misplaced option rather than a failed render.

Without a license key, generated PDFs include a watermark.

## What's in this repo

Each folder contains a self-contained npm project. Run `npm install`, then `node src/program.js`:

- `examples/` — focused snippets demonstrating individual features
- `get-started/` — first projects covering license keys and remote `IronPdfEngine`
- `how-to/` — task-oriented guides for specific PDF operations
- `quickstart/` — an end-to-end project scaffold
- `tutorials/` — a longer HTML-to-PDF walkthrough

## Common tasks covered

- HTML string, HTML file, URL, and image to PDF conversion
- Merging, splitting, and removing pages from existing PDFs
- Headers, footers, page numbers, page breaks, backgrounds, and foregrounds
- Digital signatures, encryption, decryption, and permissions
- Text and image extraction from existing documents
- Rasterizing pages to images, grayscale conversion, and compression
- PDF/A and PDF/UA output
- Custom paper sizes, page orientation, and margins
- Rendering Angular output, embedded Base64 images, barcodes, Google Fonts, and JavaScript charts
- Printing, and running against a remote `IronPdfEngine`

## Platform support

Node.js 12.13 and above, with TypeScript type definitions included. Windows, macOS, Linux, Docker, Azure, and AWS. Every project here is ESM — `package.json` sets `"type": "module"` — so the examples use `import`, not `require`. See the [documentation](https://ironpdf.com/nodejs/docs/?utm_source=github) for environment-specific notes.

## Documentation and support

- Full documentation: [ironpdf.com/nodejs/docs](https://ironpdf.com/nodejs/docs/?utm_source=github)
- API reference: [ironpdf.com/nodejs/object-reference/api](https://ironpdf.com/nodejs/object-reference/api/?utm_source=github)
- npm package: [@ironsoftware/ironpdf](https://www.npmjs.com/package/@ironsoftware/ironpdf)
- Issues with these examples: file directly on this repository
- Product support: [support@ironsoftware.com](mailto:support@ironsoftware.com)

## About

This repository is maintained by [Iron Software](https://ironsoftware.com/?utm_source=github). IronPDF for Node.js is a commercial library — see [licensing](https://ironpdf.com/nodejs/licensing/?utm_source=github) for terms and trial details.
