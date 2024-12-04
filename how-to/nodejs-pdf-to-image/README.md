***Based on <https://ironpdf.com/how-to/nodejs-pdf-to-image/>***

await PdfDocument.fromFile("./multipage-pdf.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-pdf/multipage-pdf-page.png");
});

![Transforming PDF to Images, Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-4.webp)
**The above method generated an image for each page from the two-page PDF using the `rasterizeToImageFiles` method.**

### Selective Page-to-Image Conversion

You can opt to rasterize specific pages from a PDF document instead of converting the entire document. The following example demonstrates turning only specified pages of a [large PDF with multiple pages](https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-with-images.pdf) into bitmap images.

```node
import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

// Rasterize selective pages of a PDF into BMP images.
const selectiveOptions = {
    type: ImageType.BMP,
    fromPages: [0, 3, 5, 8]  // Choosing pages with images.
};
await PdfDocument.fromFile("./sample-pdf-with-images.pdf").then((pdf) => {
    pdf.rasterizeToImageFiles("./images/multipage-selective-pdf/multipage-pdf-page.bmp", selectiveOptions);
});

![Transforming PDF to Images, Figure 5](https://ironpdf.com/static-assets/ironpdf-nodejs/how-to/nodejs-pdf-to-image/nodejs-pdf-to-image-5.webp)
**This image display's IronPDF's capability to execute a PDF-to-Image conversion on only the specifically indicated pages outlined in the `selectiveOptions`.**

## Additional Resources

### API Documentation

Refer to the [detailed API guide on the `PdfDocument` class](https://ironsoftware.com/csharp/ocr/examples/javascript-integration/#api-reference) and its `rasterizeToImageFiles` method to further understand how to customize the tool to fit specific needs.

### Code Samples

- [**Converting a PDF into Images Using IronPDF**](https://ironsoftware.com/csharp/ocr/examples/pdf-to-image/): Explore different uses of the `rasterizeToImageFiles` method.
- [**Transforming Images into PDF Files with IronPDF**](https://ironsoftware.com/csharp/ocr/examples/image-to-pdf/): Find out how to convert multiple images into a unified PDF document.