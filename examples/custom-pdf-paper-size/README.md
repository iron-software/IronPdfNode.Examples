# Custom PDF Size

> Full guide: [Custom PDF Size](https://ironpdf.com/nodejs/examples/custom-pdf-paper-size/)

This example demonstrates how to set a specific paper size when converting HTML to a PDF file.

Start by using the `paperSize` attribute in the rendering options to specify a desired paper size, here set to a unique 5x5 inch size. Modify the width and height parameters as necessary to fit your requirements.

The method `PdfDocument.fromHtml` from the [IronPDF library](https://ironpdf.com) is then employed to transform the HTML into a PDF while incorporating the defined rendering options.

Once the PDF is rendered, save the document using the custom size with the `saveAs` method.

- `GenerateCustomSizedPdf` is a method that accepts `htmlContent` (HTML data for PDF conversion) and `outputPath` (where the PDF will be stored).
  
- `ChromePdfRenderer` is responsible for the HTML to PDF rendering.

- To define the unique paper size of 5x5 inches, a `PdfPaperSize` object is instantiated with the specific width and height measurements.

- The `renderer`'s `RenderingOptions` is configured to use this custom paper size.

- `RenderHtmlAsPdf` processes the HTML content into a PDF according to the set parameters.

- Lastly, `SaveAs` commits the newly created PDF file to the `outputPath`.

View and experiment with the custom PDF page size example on GitHub by following this [link](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/custom-pdf-paper-size).

## Code

```js
import {PdfDocument, PaperSizeUnit} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content
    const html = `<p>Lorem ipsum dolor sit amet...</p>`;

    // Configure render options
    const options = {
        // Set the paper size to custom (5x5 inches)
        paperSize: {
            unit: PaperSizeUnit.Inch,
            height: 5,
            width: 5,
        },
    };

    // Render HTML content to a PDF
    const pdf = await PdfDocument.fromHtml(html, { renderOptions: options });

    // Save the PDF with the custom paper size
    await pdf.saveAs("customPaperSize.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
