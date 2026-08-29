# PDF Compression

> Full guide: [PDF Compression](https://ironpdf.com/nodejs/examples/pdf-compression/?utm_source=github)

IronPDF provides a solution for efficiently compressing PDF documents. A principal technique in this process involves downsizing the embedded images in the PDF file using the `compressSize` method available on the PDF object.

Adjusting JPEG image quality is a critical factor in compression. The quality can be set on a scale where 100% ensures almost no loss of quality, and 1% produces images of significantly lower quality. Typically, quality settings about 90% yield high-quality results, settings between 80% and 90% are acceptable for medium-quality needs, and settings in the range of 70% to 80% create lower-quality images. Lowering the quality setting below 70% may result in a noticeable decrease in image clarity; however, it also greatly diminishes the PDF's file size.

It is advisable to test different quality settings to discover an optimal balance between file size and image clarity that meets your specific needs. The effectiveness of quality decrement varies with the type of image being compressed, with some images potentially losing more clarity than others.

Below is an example demonstrating how to use IronPDF to compress a PDF file by modulating the quality of the embedded images:

In this workflow:
- The appropriate IronPDF namespace is first imported.
- We then outline the `CompressPdf` function, which requires the path to the input and output PDF files, along with a percentage to define the image quality.
- The `PdfDocument.fromFile` method is invoked to load the PDF from its file location.
- The `CompressImages` method is used for adjusting the quality of images within the document.
- The altered PDF is then saved to the new location using the `saveAs` method.

By varying the `imageQuality` value, you can directly influence the compression effect and resulting file size of your PDF document.

[Explore PDF Compression Examples on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/pdf-compression)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Load the existing PDF document
    const pdf = await PdfDocument.fromFile("my-content.pdf");

    // Compress images with quality parameter (1-100)
    await pdf.compressSize(60);
    // Save the compressed PDF
    await pdf.saveAs("document_compressed.pdf");

    // Compress images and scale down based on visible size in the PDF document
    await pdf.compressSize(90, true);
    // Save the scaled and compressed PDF
    await pdf.saveAs("document_scaled_compressed.pdf");
});
```

## Running This Example

```shell
npm install
node src/program.js
```
