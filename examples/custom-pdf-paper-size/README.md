***Based on <https://ironpdf.com/examples/custom-pdf-paper-size/>***

This code snippet demonstrates how to specify a custom paper size when converting HTML content to a PDF document.

Start by setting the `paperSize` attribute in the rendering options to define your custom dimensions. Here, we configure it to a unique 5x5-inch size. Modify the width and height parameters according to the paper size you need.

Use the `PdfDocument.fromHtml` function from the [IronPDF library](https://ironpdf.com) to transform HTML content into a PDF file, making sure to apply the previously defined rendering options.

Once the conversion is complete, employ the `saveAs` function to store the PDF file, ensuring it retains the custom paper size settings.