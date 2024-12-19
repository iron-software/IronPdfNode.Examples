***Based on <https://ironpdf.com/examples/replace-text-in-pdf/>***

The following code snippet illustrates the process of replacing specified text within a PDF file. This functionality is essential for updating text in both newly created and pre-existing PDF documents.

To undertake text replacement within a PDF, make use of the `replaceText` method. This method demands three parameters: the text you intend to replace (`oldText`), the new text that will take its place (`newText`), and the index of the page (`pageIndex`) where the text replacement is to occur. In our example, the text ".NET6" is swapped for ".NET7" on a chosen page.

After the text update is complete, you can persist the changes to the PDF by employing the `saveAs` method. For additional insights into PDF manipulation and management techniques, refer to the [IronPDF Features Page](https://ironpdf.com/features).

Furthermore, Iron Software extends a variety of potent tools worth exploring, like [IronOCR for OCR functionality](https://ironsoftware.com/csharp/ocr/), [IronBarcode for barcode creation and decoding](https://ironsoftware.com/csharp/barcode/), and [ironsoftware.com](https://ironsoftware.com/) which hosts a comprehensive catalog of offerings.