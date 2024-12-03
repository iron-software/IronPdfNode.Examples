***Based on <https://ironpdf.com/examples/custom-pdf-paper-size/>***

The following code example demonstrates how to set a custom paper size when converting HTML content to a PDF file.

To specify a custom paper size in the rendering settings, utilize the `paperSize` attribute within the options object. This allows you to adjust the `width` and `height` properties to create a paper size of 5x5 inches or any other dimension you require.

Use the `PdfDocument.fromHtml` method provided by the [IronPDF library](https://ironpdf.com) to transform the HTML content into a PDF document, ensuring the custom rendering options are applied effectively.

Once converted, you can store the PDF file with its new custom paper dimensions by using the `saveAs` method.