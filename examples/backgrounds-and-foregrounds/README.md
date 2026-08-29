# Backgrounds & Foregrounds

> Full guide: [Backgrounds & Foregrounds](https://ironpdf.com/nodejs/examples/backgrounds-and-foregrounds/?utm_source=github)

Easily applying a background or foreground to a PDF, whether it's a new document or an existing one, is a straightforward process.

In the following code snippet, we start by generating a PDF from a designated URL. This file will serve as our primary document. Subsequently, we load a PDF file named "MyBackground.pdf" that will act as a background layer.

To implement the background, you simply need to provide the `addBackgroundFromAnotherPdf` method with the background PDF. This operation places the contents of "MyBackground.pdf" beneath the first document's content.

Furthermore, we load another document called "MyForeground.pdf" intended for use as a foreground overlay. The `addForegroundFromAnotherPdf` method is employed to place this overlay on the first page of the existing PDF, at page index 0, thereby appearing above the base content.

The final output, a merged PDF file that includes the original PDF, background, and foreground layers, is then saved as "Complete.pdf."

[Explore PDF Background & Foreground Examples Here](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/backgrounds-and-foregrounds)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
// Render a URL as a PDF
    const pdf = await PdfDocument.fromUrl("https://www.wikipedia.org/");

    // Add a background PDF
    const bgpdf = await PdfDocument.open("MyBackground.pdf");
    await pdf.addBackgroundFromAnotherPdf(bgpdf);

    // Add a foreground overlay PDF to the first page
    const fgpdf = await PdfDocument.open("MyForeground.pdf");
    await pdf.addForegroundFromAnotherPdf(fgpdf, 0, 0);
    
    // Save the merged PDF to a file
    await pdf.saveAs("Complete.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
