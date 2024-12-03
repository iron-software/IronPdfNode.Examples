***Based on <https://ironpdf.com/examples/execute-custom-javascript/>***

Transform HTML content effectively using JavaScript with IronPDF, a prominent library from Iron Software, known for its exceptional ability to convert HTML to PDF. This tool also supports JavaScript, CSS, and other web technologies.

Begin by crafting the JavaScript code you wish to use. For demonstration purposes, let's adjust the text color of all H1 tags to red.

Construct a rendering options object next, and ensure the `enableJavaScript` property is set to true. Then, link the JavaScript code previously created to the `javascript` property of this object.

Employ the `PdfDocument.fromHtml` method to convert the HTML content into a PDF. Insert the `renderOptions` object as the second argument during this call.

Save the final PDF file, which now reflects the JavaScript modifications (in this case, red text color), and name it 'executed_js.pdf'.

For additional information on the functionalities of IronPDF or other libraries from Iron Software like [IronBarcode](https://ironpdf.com/csharp/barcode/), [IronOCR](https://ironpdf.com/csharp/ocr/), and more, check out the [official Iron Software website](https://ironpdf.com).