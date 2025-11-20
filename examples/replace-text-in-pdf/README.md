***Based on <https://ironpdf.com/examples/replace-text-in-pdf/>***

The following code snippet shows how to substitute specific strings in any PDF, a capability that extends to both new and pre-existing documents.

To perform text substitution in a PDF, employ the `replaceText` method which necessitates three parameters: existing text to locate, the substitution text, and the page number where this switch should occur. For illustration, this example changes ".NET6" with ".NET7" on an identified page.

After you've altered the text, the updated PDF can be stored using the `SaveAs` method. For further details on managing and modifying PDFs, see the [IronPDF Features Page](https://ironpdf.com/features/).

You might also want to check out additional robust tools from Iron Software, including [IronOCR for OCR features](https://ironsoftware.com/csharp/ocr/), [IronBarcode for barcode creation and scanning](https://ironsoftware.com/csharp/barcode/), or visit [IronSoftware.com](https://ironsoftware.com/) for a comprehensive view of all products.

<a href="https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/replace-text-in-pdf" class="code_content__related-link__doc-cta-link">Explore the Replace Text in PDF Code Example on GitHub</a>