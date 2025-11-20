# How to Convert a PDF to an Image File

***Based on <https://ironpdf.com/how-to/nodejs-pdf-to-image/>***


To transform PDF documents into images, the `rasterizeToImageFiles` function of IronPDF's NodeJS library offers a flexible solution. This method supports a variety of image formats including JPG, PNG, and others. Whether you need to convert entire PDFs into images or just specific pages, IronPDF places comprehensive controls at your fingertips.

_Dive deeper to explore the process of converting PDFs into images using IronPDF for Node.js!_

## Installing IronPDF with NPM

```shell
npm install @ironsoftware/ironpdf
```
**Acquire the IronPDF Node.js package from NPM to facilitate the conversion of PDFs into various image formats like PNG, JPG, GIF, and more.**

## PDF to Image Conversion

Imagine you have a [one-page sample PDF](https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf) that contains placeholder text.

![How to Convert a PDF to an Image File, Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-1.webp)
**This image shows the sample PDF opened in a viewer. You can obtain this and other test PDFs from [Learning Container](https://www.learningcontainer.com/).**

The following source code snippet demonstrates converting a PDF into a PNG image.

```nodejs
import { PdfDocument } from "@ironsoftware/ironpdf";

// Convert PDF to PNG asynchronously using promises
PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/sample-pdf-file.png");
    return pdf;
});
```

The `PdfDocument.fromFile` method loads the document into the Node library, generating a `PdfDocument` instance that represents our PDF file. Once the `Promise` resolves, the `PdfDocument` is passed to the `rasterizeToImageFiles` method, which then creates an image from the PDF at the specified location.

![How to Convert a PDF to an Image File, Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-2.webp)
**From the code above, IronPDF efficiently converts our example PDF into a PNG image, illustrating the simplicity and power of just a few lines of code.**

Feel free to apply the code to other PDFs of varying complexity and size for testing, using sample files from Learning Container.

Next, we delve into more refined image conversion methods.

## Advanced Image Conversion Techniques

### Converting PDF to JPEG

By changing the file name extension in the destination path, `rasterizeToImageFiles` can convert PDFs into JPG format instead of PNG by default.

```nodejs
// Directly convert PDF to JPG
pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.jpg");
```

Alternatively, you can enforce a specific image type regardless of the file extension using the `ImageType` setting:

```nodejs
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Enforce JPEG format regardless of file extension
const options = {
   type: ImageType.JPG
};
PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.png", options);
    return pdf;
});
```

### Multi-page PDF to Image Conversion

For PDFs with multiple pages, `rasterizeToImageFiles` can process each page into a distinct image file.

![How to Convert a PDF to Images, Figure 3](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-3.webp)
**A visual of a PDF with two pages.**

Below is how to convert a two-page PDF into two separate images:

```nodejs
import { PdfDocument } from "@ironsoftware/ironpdf";

// Generate images for each page of a two-page PDF
PdfDocument.fromFile("./multipage-pdf.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-pdf/multipage-pdf-page.png");
});
```

![How to Convert a PDF to Images, Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-4.webp)
**This approach results in a separate image for each PDF page.**

### Selective Page Conversion

You can specify certain pages for conversion by setting the `fromPages` parameter:

```nodejs
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Selectively convert pages to BMP images
const options = {
    type: ImageType.BMP,
    fromPages: [0, 3, 5, 8]  // Pages to be converted
};
PdfDocument.fromFile("./sample-pdf-with-images.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-selective-pdf/multipage-pdf-page.bmp", options);
});
```

![How to Convert a PDF to Images, Figure 5](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-5.webp)
**The conversion strictly adheres to the specified pages, as illustrated above.**

<h3>Begin Your Journey with IronPDF</h3>

## Further Insights

### API Documentation

Explore detailed explanations and more functionalities by visiting the [API reference for the `PdfDocument` class](https://ironsoftware.com/csharp/ocr/examples/javascript-integration/#api-reference).

### Practical Examples

- [**Converting a PDF to Images with IronPDF**](https://ironsoftware.com/csharp/ocr/examples/pdf-to-image/): A variant of the `rasterizeToImageFiles` usage.
- [**Transforming Images into PDFs with IronPDF**](https://ironsoftware.com/csharp/ocr/examples/image-to-pdf/): Learn how to compile multiple images into a single PDF document.