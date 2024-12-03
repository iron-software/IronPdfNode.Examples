***Based on <https://ironpdf.com/examples/merge-pdfs/>***

The above example demonstrates how to merge multiple PDF documents, each generated from distinct HTML sources, into a single cohesive PDF file.

In this instance, two separate PDF documents are created from individual HTML contents. These documents, `pdfdoc_a` and `pdfdoc_b`, are then merged into one unified document titled "merged" by using the `PdfDocument.mergePdf` function.

It’s important to note that this merging capability is not only applicable to newly created PDF files but also extends to pre-existing PDF documents through the same merging method.