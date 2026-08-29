# Convert a PDF to Images

> Full guide: [Convert a PDF to Images](https://ironpdf.com/nodejs/examples/rasterize-a-pdf-to-images/?utm_source=github)

The process of turning each page of a PDF into an individual image, such as JPEG or PNG, is known as rasterizing. This method is especially useful for tasks like extracting pages or images from PDFs to be displayed on a web page or integrated into other documents.

For rasterizing PDF documents into images, IronPDF's PDF to Image Converter is an excellent tool. It also provides the flexibility to choose the type of image format for the output. Each resulting image file will be labeled with "_pageNumber" to reflect the page number from the original PDF document.

Here’s how to turn a PDF into images with IronPDF for Node.js:

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Import existing PDF document
const pdf = await PdfDocument.fromFile("example.pdf");

    // Extract all pages to a folder as image files
    await pdf.rasterizeToImageFiles("image/image.png");

    // Extract all pages as image buffers
    const imageBuffers = pdf.rasterizeToImageBuffers();
})();
```

## Essential Details

- **IronPDF** is utilized for the conversion from PDF to images.
- The `fromFile` method is responsible for loading the PDF document into an `IronPdf.PdfDocument` object.
- `ImageSaveOptions` facilitates the customization of image formats and resolution.
- `rasterizeToImageFiles` function is used to convert each PDF page into separate image files, appropriately labeled by their page numbers.
- The images will be stored in the defined output directory.

Add the IronPDF package to your project first:

Here is a basic outline on using IronPDF to convert a PDF to a collection of images, which can be modified to meet particular requirements.

[Learn to Convert PDF to Images with Python](https://ironpdf.com/python/how-to/python-pdf-to-image/?utm_source=github)

## Running This Example

```shell
npm install
node src/program.js
```
