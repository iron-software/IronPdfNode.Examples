# Merge Two or More PDFs

> Full guide: [Merge Two or More PDFs](https://ironpdf.com/nodejs/examples/merge-pdfs/)

The script outlined here simplifies the combination of various PDF documents, derived from different HTML sources, into one consolidated PDF file.

Initially, you'll have separate PDF documents generated from distinct HTML content. The `PdfDocument.mergePdf` function is then employed to amalgamate these PDFs—specifically, `pdfdoc_a` and `pdfdoc_b`—into a unified file labelled "merged."

Merging is not limited to documents just produced: existing PDF files go through the same call.

### Detailed Overview

- **Importing Classes**: Integrate `PdfDocument` from the `@ironsoftware/ironpdf` package into your project.
- **Loading PDFs**: Use `PdfDocument.open(...)` for accessing and loading existing PDF files, a necessary step when you intend to merge already available documents.
- **Combining PDFs**: Execute `PdfDocument.mergePdf([pdfA, pdfB])` to fuse the two documents into one entity.
- **Exporting the Merged File**: Utilize `merged.saveAs("merged.pdf")` to output the final merged document. This function parallels the `merger.write(...)` method in Python for saving files.

This approach is ideal for amalgamating PDFs sourced from diverse origins or existing documents, simplifying the process of document management.

[Explore Code Example: Merge PDFs with IronPDF for Node.js](https://ironpdf.com/github.com/iron-software/IronPdfNode.Examples/tree/main/examples/merge-pdfs)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const html_a = `<p> [PDF_A] </p>
    <p> [PDF_A] 1st Page </p>
    <div style='page-break-after: always;'></div>
    <p> [PDF_A] 2nd Page</p>`;

    const html_b = `<p> [PDF_B] </p>
    <p> [PDF_B] 1st Page </p>
    <div style='page-break-after: always;'></div>
    <p> [PDF_B] 2nd Page</p>`;

    // Render HTML content to PDF documents
    const pdfdoc_a = await PdfDocument.fromHtml(html_a);
    const pdfdoc_b = await PdfDocument.fromHtml(html_b);

    // Merge the two PDF documents
    const merged = await PdfDocument.mergePdf([pdfdoc_a, pdfdoc_b]);

    // Save the merged PDF
    await merged.saveAs("Merged.pdf");  
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
