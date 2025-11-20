***Based on <https://ironpdf.com/examples/remove-page-from-pdf/>***

To delete one or several pages from a PDF file, you should use the `removePage` function. After modifications, the `saveAs` method of IronPDF—a robust .NET library equipped for the creation, editing, and manipulation of PDF documents—can be employed to export the altered PDF. Additional information about IronPDF and its capabilities is available on the [IronPDF official website](https://ironpdf.com).

### Explanation:
- **IronPdf**: This section employs IronPdf, which is a library designed for manipulating PDF files in .NET environments. Ensure this library is integrated into your project before proceeding.

- **PdfDocument.FromFile(inputPath)**: This function initializes a `PdfDocument` object by loading a PDF from the specified file path.

- **RemovePage(0)**: Executes on the `PdfDocument` object to eliminate the first page of the PDF. The page index begins at 0, where `0` denotes the initial page.

- **SaveAs(outputPath)**: This method is used to save the modifications made to the `PdfDocument` object at the path defined by `outputPath`.

- **Console.WriteLine**: Outputs a message to the console to notify the completion and location of the adjusted PDF.

Be sure to substitute `"input.pdf"` and `"output.pdf"` with the actual paths to your files.

[Explore GitHub Examples for Removing PDF Pages with IronPDF](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/remove-page-from-pdf)