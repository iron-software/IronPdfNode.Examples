***Based on <https://ironpdf.com/examples/using-html-to-create-a-pdf/>***

Utilize the `fromHtml` function to transform HTML strings and files into PDF files. The produced PDF should mirror the output seen when using the print option in Google Chrome. Thanks to IronPDF's implementation of the Chrome rendering engine, your HTML-to-PDF conversions will be as precise as what you'd expect from Chrome itself.

IronPDF not only excels in rendering but also in PDF manipulation, offering a variety of powerful tools in one package. For instance, check out the [HTML stamping feature of IronPDF](https://ironpdf.com/examples/stamping-html-pdf-multiple/), which enables the rendering of HTML content into a PDF and then merging it with a primary document. This process adds HTML-based stamps either behind or in front of the main content to craft a final document.

### Overview of the C# Example

1. **Importing Libraries**: Reference the `IronPdf` namespace to access the functions necessary for HTML-to-PDF transformations.

2. **HTML Content Setup**: Define a simple HTML string that will later be converted into a PDF document.

3. **Initialize HtmlToPdf Renderer**: Create a new `HtmlToPdf` object which will manage the HTML to PDF conversion process.

4. **Convert HTML to PDF**: Execute the `RenderHtmlAsPdf` method on the `HtmlToPdf` instance using the defined HTML string to produce a PDF.

5. **Save the PDF File**: Utilize the `SaveAs` method to save the created PDF to a file named `output.pdf`.

6. **Completion Notification**: Display a console message to inform the user that the PDF file has been successfully generated and saved.

[Explore HTML to PDF Conversion in Node.js](https://ironpdf.com/nodejs/tutorials/html-to-pdf/ "Learn More")