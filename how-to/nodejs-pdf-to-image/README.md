# How to Convert a PDF to an Image File

***Based on <https://ironpdf.com/how-to/nodejs-pdf-to-image/>***


To convert PDF files into various image formats, such as JPG or PNG, developers can utilize the `rasterizeToImageFiles` method from the IronPDF NodeJS library. This function is versatile, allowing for the transformation of entire PDF documents or selected pages into different image types with ease. IronPDF provides comprehensive control over the conversion process.

Read on to discover the steps for converting PDF documents into images using IronPDF for Node.js.

## Install IronPDF using NPM

To begin using IronPDF for this purpose, install it via NPM by running:

```shell
npm i @ironsoftware/ironpdf
```

**After installation, you can start converting PDFs into formats like PNG, JPG, and others using IronPDF's Node.js library.**

## Converting PDF to Image Format

Consider a scenario where we have a [single-page PDF](https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf) loaded with placeholder content.

![PDF Page Display](https://ironsoftware.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-1.webp)
**This image displays the sample PDF file inside a viewer. To experiment with more PDF files, visit [Learning Container](https://www.learningcontainer.com/).**

Below is the code snippet used to convert this PDF document to a PNG image:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";

// Convert a PDF File to PNG
await PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/sample-pdf-file.png");
    return pdf;
});
```

This code employs the `PdfDocument.fromFile` method to load the PDF document into the Node library. This method retrieves a `PdfDocument` object representing the loaded file. The `rasterizeToImageFiles` method is invoked on this object to create an image from the PDF, specifying where the output image file should be saved.

![Generated PNG Image from PDF](https://ironsoftware.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-2.webp)
**IronPDF swiftly converts the sample PDF into a PNG image in just a few lines of code.**

Additional sample PDF files for testing are available via [Learning Container](https://www.learningcontainer.com/sample-pdf-files-for-testing/?expand_article=1).

Let’s explore some tailored options available for PDF-to-image conversions.

## Advanced Image Conversion Options

### Convert PDF to JPEG

The `rasterizeToImageFiles` method defaults to convert documents to the image format stipulated by the file name extension in the target path.

To transform our initial PDF to a JPEG, you can simply adjust the file extension in the output path:

```node
// Explicitly Convert PDF to JPG
const pdf = await PdfDocument.fromFile("./sample-pdf-file.pdf");
pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.jpg");
```

Alternatively, setting an `ImageType` in the options object can override the extension in the output file path, directing `rasterizeToImageFiles` to produce an image in the specified format:

```node
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Convert PDF to JPEG Using Specified ImageType
const options = { type: ImageType.JPG };
const pdf = await PdfDocument.fromFile("./sample-pdf-file.pdf");
pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.png", options);
```

This example still produces a JPEG image, despite the file path ending with `.png`.

### Converting PDF Files with Multiple Pages

To convert multi-page documents into individual images for each page:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";

// Convert Multiple Pages in a PDF to Separate Images
await PdfDocument.fromFile("./multipage-pdf.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-pdf/multipage-pdf-page.png");
});
```

![Conversion of Two-Page PDF](https://ironsoftware.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-3.webp)
**Resulting images from converting a two-page PDF: one image per page.**

### Convert Specific PDF Pages to Images

To rasterize specific pages from a PDF:

```node
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Selective PDF Page Conversion to BMP
const options = {
    type: ImageType.BMP,
    fromPages: [0, 3, 5, 8]
};
await PdfDocument.fromFile("./sample-pdf-with-images.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-selective-pdf/multipage-pdf-page.bmp", options);
});
```

![Selective Page Conversion to Images](https://ironsoftware.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-5.webp)
**Selected pages only have been transformed into BMP images according to specified options.**

### Get started with IronPDF

---

Explore further ways to harness IronPDF by reviewing its extensive [API documentation](https://ironsoftware.com/csharp/ocr/examples/javascript-integration/#api-reference) and other [code examples](https://ironsoftware.com/csharp/ocr/examples/pdf-to-image/). These resources provide deeper insights into adapting IronPDF for different PDF-related tasks.