***Based on <https://ironpdf.com/examples/convert-pdf-to-grayscale/>***

Transforming a full-color PDF document to grayscale simplifies the PDF by emphasizing only the intensity of light, not the colors themselves.

The capability to create grayscale PDFs exists only when you're converting from HTML to PDF using [IronPDF's HTML to PDF Conversion Feature](https://ironpdf.com/tutorials/html-to-pdf/). In this process, the `PdfPrintOptions` object has a `GrayScale` attribute which can be set to either `true` or `false`. By setting this attribute to `true`, a grayscale PDF will be produced in lieu of a color PDF.

Here's an illustrative code example on how to convert an HTML document into a grayscale PDF using IronPDF in C#:

### Code Explanation
1. **Integration of IronPdf**: Import the IronPdf library to leverage its PDF rendering capabilities.
2. **Initialization of HtmlToPdf Renderer**: Instantiate the `HtmlToPdf` class to manage the transition from HTML to PDF format.
3. **Application of Render Options**: Utilize the `PdfPrintOptions` object to specify rendering settings, importantly setting the `GrayScale` to `true` to obtain a grayscale output.
4. **Conversion Process**: Execute `RenderHtmlAsPdf` to convert the HTML content into a PDF document.
5. **File Storage**: Store the newly created grayscale PDF at the predefined location "output.pdf".
6. **Output Notification**: Output a confirmation message in the console verifying the creation of the PDF.

This snippet clearly demonstrates leveraging IronPDF's HTML to PDF tools to transform an HTML file into a grayscale PDF.

[Explore Grayscale PDF Conversion Code on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/convert-pdf-to-grayscale)