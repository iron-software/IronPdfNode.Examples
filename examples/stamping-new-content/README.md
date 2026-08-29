# Stamping New Content

> Full guide: [Stamping New Content](https://ironpdf.com/nodejs/examples/stamping-new-content/)

Using HTML stamping, you can insert an HTML snippet that allows for detailed control over its appearance via inline CSS. Below is an example where images are embedded directly in the HTML and then stamped onto the document.

IronPDF provides a wide array of stamping options that include HTML, text, images, and barcodes. You can accurately set the position for each stamp by choosing both vertical and horizontal base locations. These can be fine-tuned with offsets for precise placement. Additionally, most types of stamps can be customized with opacity and rotation settings.

[Explore HTML Stamping Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/stamping-new-content)

## Code

```js
import {PdfDocument, HorizontalAlignment, VerticalAlignment} from "@ironsoftware/ironpdf";

(async () => {
    // Open existing PDF
    const pdf = await PdfDocument.fromFile("Sample.pdf");

    // Configure the HTML stamp
    const stampOptions = {
        horizontalAlignment: HorizontalAlignment.Center,
        verticalAlignment: VerticalAlignment.Bottom,
        behindExistingContent: false,
        opacity: 30
    };

    const html = "<img src='https://ironpdf.com/img/products/ironpdf-logo-text-dotnet.svg'/>"
    // Apply the stamp to the PDF
    await pdf.stampHtml(html, {htmlStampOptions: stampOptions});

    // Save the stamped PDF
    await pdf.saveAs("stamped_image.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
