# Read PDF Text and Images in Node.js

> Full guide: [Read PDF Text and Images in Node.js](https://ironpdf.com/nodejs/examples/reading-pdf-text/?utm_source=github)

Facilitating data migration through the extraction of text and images from documents makes transitioning between formats smoother. It ensures content remains accessible and editable, mitigating the risk of data loss.

Text and images embedded within a PDF can be extracted separately. The text is pulled out as a conventional string, while images are retrieved in an image buffer format, ready for exportation or further manipulation.

To extract text, utilize the `extractText` method, and for image extraction, use the `extractRawImages` method.

Below is an enhanced and commented example of how to perform these tasks:

In this example:
- We employ the IronPDF library to open a specific PDF file.
- `extractText()` pulls the text out as a string, which is then written to the console.
- `extractRawImages()` returns the embedded images as buffers, each of which is then written to its own file.

For more extensive guidelines on these methods, be sure to check the [IronPDF Documentation](https://ironpdf.com/docs/?utm_source=github).

[Explore More on Reading PDF Text with IronPDF](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/reading-pdf-text)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Extracting Image and Text content from Pdf Documents
    // Import existing PDF document
    const pdf = await PdfDocument.fromFile("old_report.pdf");
    
    // Get all text to put in a search index
    const text = await pdf.extractText();
    
    // Get all Images
    const imagesBuffer = await pdf.extractRawImages();
    
    const pageCount = await pdf.getPageCount()
    // Or even find the precise text and images for each page in the document
    for (let index = 0; index < pageCount; index++) {
        text = await pdf.extractText([index]);
        imagesBuffer = await pdf.extractRawImages([index]);
    }
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
