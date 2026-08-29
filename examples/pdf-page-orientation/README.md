# Portrait & Landscape Orientation

> Full guide: [Portrait & Landscape Orientation](https://ironpdf.com/nodejs/examples/pdf-page-orientation/)

Understanding page orientation and rotation is essential, though they might seem similar, especially when considering a 90-degree rotation in landscape format.

The concept of page orientation pertains to the initial setup of a page — it can be vertically aligned, known as portrait, or horizontally aligned, known as landscape.

Conversely, page rotation involves modifying the page's angle, which allows altering its orientation based on specific requirements. This adjustment can be crucial for ensuring proper alignment or catering to particular viewing needs. Pages can generally be rotated by 90, 180, or 270 degrees.

For a comprehensive tutorial on adjusting page orientation when rendering PDFs, refer to [IronPDF's guide on setting page orientation](https://ironpdf.com/nodejs/examples/pdf-page-orientation/). It's important to note that changing a page’s orientation after a PDF has been created is not possible. However, rotating a page can be done on an existing PDF, although it cannot be altered during the rendering stage.

[View our PDF page orientation example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/pdf-page-orientation) to learn more about this feature.

## Code

```js
import {PdfDocument, PdfPaperOrientation} from "@ironsoftware/ironpdf";

(async () => {
    const options = {
        // For NEW PDF Documents use PdfPaperOrientation
        // PdfPaperOrientation: To choose Landscape or Portrait Orientation in a new PDF document
        paperOrientation: PdfPaperOrientation.Landscape,
    };
 
    const newPdfFromHtml = PdfDocument.fromHtml("<h1> Hello World! </h1>", {renderOptions: options});
    const newPdfFromHtmlFile = PdfDocument.fromHtml("example.html", {renderOptions: options});
    const newPdfFromUrl = PdfDocument.fromUrl("https://ironpdf.com", {renderOptions: options});
    
    // For EXISTING PDFs use setRotation
    // setRotation : To rotate a PDF page and all of its contents
    const existingPdf = PdfDocument.fromFile("old_report.pdf");

    // Rotate specified page
    (await existingPdf).setRotation(90,{pdfPageSelection: [0]});

    // Rotate ALL pages
    (await existingPdf).setRotation(270,{pdfPageSelection: "all"});
    
    (await existingPdf).saveAs("rotated.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
