***Based on <https://ironpdf.com/examples/reading-pdf-text/>***

Retrieving text and images from documents is crucial during a transition between different document formats. This process allows content to be stored in formats that are both easier to manage and modify, thereby minimizing the potential for data loss.

You can independently extract both embedded images and text. When extracted, text is represented as a plain string, and images are stored in an image buffer format, ready for export or additional manipulation.

To extract text, use the `extractText` method, and for images, utilize the `extractRawImages` method from a PDF.

For comprehensive guidance on utilizing these methods, refer to the [IronPDF Documentation](https://ironpdf.com/docs/).