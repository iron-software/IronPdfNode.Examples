***Based on <https://ironpdf.com/examples/execute-custom-javascript/>***

Modify the appearance of HTML content using JavaScript with IronPDF effortlessly. IronPDF is part of the suite of products from Iron Software, renowned for its powerful features that include the conversion of HTML to PDF while fully supporting JavaScript, CSS, and additional technologies.

Start the process by crafting the JavaScript you intend to use. For our demonstration, we will adjust the text color of all H1 tags to red.

Then, initiate a rendering options object and ensure the `enableJavaScript` property is activated by setting it to true. Incorporate the JavaScript script you created earlier into the `javascript` property of this configuration object.

Proceed to use the `PdfDocument.fromHtml` method to transform your HTML content into a PDF file. Include your `renderOptions` object as an argument in this method.

Finish by saving the newly created PDF, which now reflects the JavaScript effects—such as turning text color to red—as 'executed_js.pdf'.

For further information on the capabilities of IronPDF or to explore other products from Iron Software like [IronBarcode](https://ironsoftware.com/csharp/barcode/), [IronOCR](https://ironsoftware.com/csharp/ocr/), among others, please visit the Iron Software [official website](https://ironsoftware.com).