***Based on <https://ironpdf.com/examples/merge-pdfs/>***

The presented code demonstrates how you can consolidate several PDFs, each originating from distinct HTML sources, into one unified PDF document.

Initially, two separate PDF files are generated from different HTML inputs. The method `PdfDocument.mergePdf` is then employed to amalgamate these two individual PDF documents, referred to as `pdfdoc_a` and `pdfdoc_b`, into a single file named "merged."

This merging technique is versatile, accommodating not only newly created PDF documents but also pre-existing ones.