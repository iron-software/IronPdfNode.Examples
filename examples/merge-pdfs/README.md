***Based on <https://ironpdf.com/examples/merge-pdfs/>***

The script outlined here simplifies the combination of various PDF documents, derived from different HTML sources, into one consolidated PDF file.

Initially, you'll have separate PDF documents generated from distinct HTML content. The `PdfDocument.mergePdf` function is then employed to amalgamate these PDFs—specifically, `pdfdoc_a` and `pdfdoc_b`—into a unified file labelled "merged."

Moreover, the merging operation is versatile, extending beyond newly produced PDFs. It effectively converges existing PDF files as well using the same approach.

### Detailed Overview

- **Importing Classes**: Integrate `PdfDocument` from the `@ironsoftware/ironpdf` package into your project.
- **Loading PDFs**: Use `PdfDocument.open(...)` for accessing and loading existing PDF files, a necessary step when you intend to merge already available documents.
- **Combining PDFs**: Execute `PdfDocument.mergePdf([pdfA, pdfB])` to fuse the two documents into one entity.
- **Exporting the Merged File**: Utilize `merged.saveAs("merged.pdf")` to output the final merged document. This function parallels the `merger.write(...)` method in Python for saving files.

This approach is ideal for amalgamating PDFs sourced from diverse origins or existing documents, streamlining the process of document management.

[Explore Code Example: Merge PDFs with IronPDF for Node.js](https://ironpdf.com/github.com/iron-software/IronPdfNode.Examples/tree/main/examples/merge-pdfs)