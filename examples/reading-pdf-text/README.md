***Based on <https://ironpdf.com/examples/reading-pdf-text/>***

Retrieving text and images from documents is essential for data migration, particularly when transitioning between different document formats. By extracting these elements, you can maintain content in a format that's both easier to access and edit, minimizing the potential for data loss.

Images and text within a PDF can be extracted separately. The text is retrieved as a simple string, while images are pulled in an image buffer format, ready for further processing or export.

Utilize the `extractText` method for text extraction, and the `extractRawImages` method for isolating images from PDF files.

For step-by-step guidance on using these methods, please refer to the [IronPDF Documentation](https://ironpdf.com/docs/).