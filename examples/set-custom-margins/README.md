***Based on <https://ironpdf.com/examples/set-custom-margins/>***

Adjusting margins is a straightforward process with IronPDF.

Start by configuring the rendering options and defining the margins for the PDF content. In our example, we set a top margin of 40 units, a left margin of 20 units, a right margin of 20 units, and a bottom margin of 40 units. These settings dictate the space between the content and the page boundaries in the PDF.

Use the `PdfDocument.fromHtml` method to transform an HTML file into a PDF using IronPDF's robust HTML-to-PDF functionality. Ensure to pass in the rendering options that include the customized margins within the `renderOptions` parameter.

After the HTML has been converted to a PDF document, you can proceed to export the PDF file, leveraging IronPDF's advanced document conversion capabilities.