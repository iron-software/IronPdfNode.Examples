# TIFF to PDF with Multi-Page Support

> Full guide: [TIFF to PDF with Multi-Page Support](https://ironpdf.com/nodejs/examples/multi-frame-tiff-to-pdf/?utm_source=github)

Transforming a TIFF image to a PDF is straightforward and can be achieved with just a single line of code.

Use the method `PdfGenerator.imageToPdf` to transform a TIFF, whether it consists of one or multiple pages, into a PDF file. It also accepts PNG, JPG and JPEG.

Moreover, the function is capable of handling an image buffer. This feature is particularly useful for processing images obtained from network sources.

The following example converts a TIFF, or any other supported image file, into a PDF. `PdfGenerator.imageToPdf` reads the image data and returns a PDF document, which is then written to disk.

[Explore how to Convert PDFs to Images using Python](https://ironpdf.com/python/how-to/python-pdf-to-image/?utm_source=github)

## Code

```js
import {PdfGenerator} from "@ironsoftware/ironpdf";

(async () => {
    // File path
    const filePaths = "multipage_tiff_example.tif";
    
    // Convert a TIFF with 1 or more pages to a PDF
    const pdf = await PdfGenerator.imageToPdf(filePaths)
    
    // Export to a file or Stream
    await pdf.saveAs("multi-page-pdf.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
