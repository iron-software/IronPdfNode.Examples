# HTML Files to PDF

> Full guide: [HTML Files to PDF](https://ironpdf.com/nodejs/examples/file-to-pdf/)

### Transforming HTML into PDF with IronPDF

To transform HTML content into a PDF document, employ the `fromHtml` method supplied by the IronPDF suite from Iron Software. This method ensures the converted PDF contains all the content from the specified HTML file.

Here's how to implement this conversion in Node.js:

### Detailed Guide:

- **Namespace Incorporation**: Incorporate the namespace using `IronPdf;` to utilize the features of the IronPDF library.
- **Render the file**: `PdfDocument.fromHtml()` accepts a path to an `.html` file as well as an HTML string.
- **HTML to PDF Conversion**: Convert an HTML file into a PDF document using `renderer.RenderHtmlFileAsPdf(htmlFilePath);`.
- **PDF Serialization**: Utilize `pdf.SaveAs(outputPdfPath);` to store the rendered PDF at the defined file path.

### Saving the Converted PDF

Once the HTML is rendered into PDF format, the document can be preserved using the `SaveAs` method, storing it as 'output.pdf' either in the default directory or any custom path you define.

For additional insights on using IronPDF to craft and edit PDF documents, browse the extensive IronPDF documentation available on [Iron Software's official website](https://ironpdf.com/docs/).

[Explore detailed HTML to PDF conversion tutorials](https://ironpdf.com/nodejs/tutorials/html-to-pdf/)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Render the HTML file
    const pdf = await PdfDocument.fromHtml("example.html");

    // Export the PDF document
    await pdf.saveAs("output.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
