# How to Convert a PDF to an Image File

***Based on <https://ironpdf.com/how-to/nodejs-pdf-to-image/>***


To transform PDF files into images, leverage the `rasterizeToImageFiles` function provided by the IronPDF NodeJS library. This method offers a versatile framework for converting PDFs into various image formats such as JPG, PNG, and more. You can process every page of a PDF into individual JPEG or PNG images, or select specific pages for conversion. IronPDF ensures comprehensive control over this process.

Read on to discover the steps to execute PDF-to-image conversions using IronPDF for Node.js!

## Install IronPDF using NPM

**To start converting PDFs into PNG, JPG (or JPEG), GIF, and other image formats, initiate by installing IronPDF's Node.js module via NPM.**

## Converting PDF to Image Format

Consider working with a [one-page sample PDF document](https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf) that contains placeholder text.

![How to Convert a PDF to an Image File, Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-1.webp)
**This image shows the sample PDF file opened in a PDF viewer. You can download this PDF file and others for testing from [Learning Container](https://www.learningcontainer.com/).**

Below, the code snippet demonstrates converting the mentioned PDF document to a PNG image:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";

// Convert PDF File to a PNG Image
await PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/sample-pdf-file.png");
    return pdf;
});
```

Here, `PdfDocument.fromFile` loads the document into the IronPDF library. This method returns a [`PdfDocument` object](https://ironsoftware.com/csharp/ocr/examples/javascript-integration/) that represents the loaded PDF. We then engage a callback function upon successfully resolving the `PdfDocument` object.

Within the callback, we invoke the [`rasterizeToImageFiles` function](https://ironsoftware.com/csharp/ocr/examples/pdf-to-image/), specifying the output path and file format to transform our PDF into a PNG image.

![How to Convert a PDF to an Image File, Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-2.webp)
**This image showcases the PNG file created by IronPDF from the source code above, demonstrating the effectiveness of just a few lines of code!**

You are encouraged to test this example with other PDF files having varied sizes and complexity to gauge its versatility.

Upcoming sections delve into finer details of converting PDFs to different image formats.

## Advanced Image Conversion Options

### Convert PDF to JPEG

`rasterizeToImageFiles` defaults to the file type derived from the destination path's file extension.

For instance, to convert a PDF to a JPG file, modify the output file extension:

```node
// Change PDF conversion target from PNG to JPG
pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.jpg");
```

You could also predetermine the conversion format using the `ImageType` option, overriding the filename extension:

```node
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Set conversion type to JPG regardless of file path extension
const options = {
   type: ImageType.JPG
};
await PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.png", options);
    return pdf;
});
```

### Converting Multi-Page PDFs

Utilize the `rasterizeToImageFiles` method to transform each page of a multi-page PDF into a specific image format.

For instance, this code converts a [two-page PDF](https://www.africau.edu/images/default/sample.pdf) into two PNG images:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";

// Generate an image for each page of the PDF
await PdfDocument.fromFile("./multipage-pdf.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-pdf/multipage-pdf-page.png");
});
```

### Target Specific PDF Pages

You can specify the `fromPages` option to selectively convert only certain pages of a PDF.

This example converts select pages from a [large sample PDF](https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-with-images.pdf) into bitmaps:

```node
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Opt to convert only specified pages of the PDF to BMP images
const options = {
    type: ImageType.BMP,
    fromPages: [0, 3, 5, 8]
};
await PdfDocument.fromFile("./sample-pdf-with-images.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-selective-pdf/multipage-pdf-page.bmp", options);
});
```

## Further Reading

### API Reference

Explore the [API documentation](https://ironsoftware.com/csharp/ocr/examples/javascript-integration/#api-reference) concerning the `PdfDocument` class and its `rasterizeToImageFiles` methods to learn more about customizing your image conversions.

### Code Examples

- [**Convert a PDF to Images using IronPDF**](https://ironsoftware.com/csharp/ocr/examples/pdf-to-image/): Discover additional ways to use `rasterizeToImageFiles`.
- [**Convert Images to PDF Files using IronPDF**](https://ironsoftware.com/csharp/ocr/examples/image-to-pdf/): Learn how to transform images into a combined PDF document.