***Based on <https://ironpdf.com/examples/pdfa/>***

IronPDF offers the ability to export PDF files to the PDF/A-3b standard. This standard is a focused subset of the ISO PDF specification, tailored for the long-term storage of document archives, guaranteeing that they remain unaltered over time.

IronPDF also supports Google's efforts to improve PDF archiving and accessibility, and complies with Section 508 standards for such documents. In 2021, IronPDF adopted the Google Chromium HTML rendering engine for converting HTML to PDF. This enhances the software by integrating [the accessibility optimisations that Google has implemented for creating PDFs](https://blog.chromium.org/2020/07/using-chrome-to-generate-more.html).

The `convertToPdfA` method in IronPDF enables the conversion of standard PDF documents to meet archival standards, readying them for export. Below is an example showcasing how to utilize IronPDF for this conversion:

### Detailed Steps:
- Start by importing the `IronPdf` namespace.
- Create a `PdfDocument` instance to manage PDF functionalities.
- Load an existing PDF from `"example.pdf"` into the `pdf` variable.
- Apply the `ConvertToPdfA()` method to change the document to conform to the PDF/A-3b standards.
- The document is then saved as `"example_pdfA.pdf"`, and a confirmation message is output to the console.

To execute this sample, make sure IronPDF is installed in your project.

[Explore the PDF/A Conversion Code Example Now!](https://ironpdf.com/github/IronPdfNode.Examples/tree/main/examples/pdfa)