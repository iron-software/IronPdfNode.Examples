# Converting PDF Pages to Images

***Based on <https://ironpdf.com/examples/rasterize-a-pdf-to-images/>***


The process of turning each page of a PDF into an individual image, such as JPEG or PNG, is known as rasterizing. This method is especially useful for tasks like extracting pages or images from PDFs to be displayed on a web page or integrated into other documents.

For rasterizing PDF documents into images, IronPDF's PDF to Image Converter is an excellent tool. It also provides the flexibility to choose the type of image format for the output. Each resulting image file will be labeled with "_pageNumber" to reflect the page number from the original PDF document.

Here’s how you can leverage IronPDF to transform a PDF into images using C#:

## Essential Details

- **IronPDF** is utilized for the conversion from PDF to images.
- The `FromFile` method is responsible for loading the PDF document into an `IronPdf.PdfDocument` object.
- `ImageSaveOptions` facilitates the customization of image formats and resolution.
- `RasterizeToImageFiles` function is used to convert each PDF page into separate image files, appropriately labeled by their page numbers.
- The images will be stored in the defined output directory.

Make sure to incorporate the IronPDF library in your project to access these capabilities. You can add it via the NuGet Package Manager:

Here is a basic outline on using IronPDF to convert a PDF to a collection of images, which can be modified to meet particular requirements.

[Learn to Convert PDF to Images with Python](https://ironpdf.com/python/how-to/python-pdf-to-image/)