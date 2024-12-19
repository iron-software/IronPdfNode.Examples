***Based on <https://ironpdf.com/examples/set-custom-margins/>***

Adjusting the margins is a simple process with IronPDF.

First, configure the rendering settings and stipulate the margins for the content within your PDF. In this particular case, we've established a top margin and a bottom margin of 40 units each, with left and right margins set at 20 units each. These values determine the distance between the PDF content and the page boundaries.

Leverage the `PdfDocument.fromHtml` method to transform an HTML file into a PDF using the robust HTML-to-PDF conversion features of IronPDF. Ensure to include the custom margin settings in the `renderOptions` object during this process.

After the HTML has been effectively converted to a PDF, you can then proceed to export the newly created PDF file, utilizing the comprehensive document management capabilities of IronPDF.