***Based on <https://ironpdf.com/examples/multi-frame-tiff-to-pdf/>***

Transforming a TIFF image to a PDF is straightforward and can be achieved with just a single line of code.

Use the method `PdfGenerator.imageToPdf` to transform a TIFF, whether it consists of one or multiple pages, into a PDF file. This function is versatile, supporting various image formats including PNG, JPG, and JPEG, in addition to TIFF.

Moreover, the function is capable of handling an image buffer. This feature is particularly useful for processing images obtained from network sources.

The following C# example illustrates the process of converting a TIFF or any other supported image file into a PDF. The method `PdfDocument.ImageToPdf` captures the image data and seamlessly converts it to a PDF format, which is subsequently stored at a designated location on the disk.

[Explore how to Convert PDFs to Images using Python](https://ironpdf.com/python/how-to/python-pdf-to-image/)