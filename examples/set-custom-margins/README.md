***Based on <https://ironpdf.com/examples/set-custom-margins/>***

Adjusting margins with IronPDF is a simple and efficient process.

Start by initializing the rendering options and setting the desired margins for your PDF. For instance, in the provided example, we have set a top margin of 40 units and equal left and right margins of 20 units each, with a bottom margin also at 40 units. These margins determine the spacing between the content and the pages' boundaries throughout the PDF.

Use the `PdfDocument.fromHtml` method to transform an HTML file into a PDF using IronPDF's robust HTML-to-PDF conversion capabilities. The rendering options, which encapsulate the custom margins, should be incorporated within the `renderOptions` object.

After converting the HTML into a PDF, you can export the PDF, leveraging IronPDF's extensive document conversion functionalities.

Below is a practical code snippet that illustrates how to configure margins:

### Code Explanation:

1. **Import IronPDF**: Include necessary using directives to utilize IronPDF functionalities.
2. **Initialize HtmlToPdf**: Instantiate an `HtmlToPdf` object to manage the conversion of HTML content to PDF.
3. **Configure Margins**: Create a `PdfPrintOptions` object to set the margins for the PDF. These margins are crucial as they determine the content's positioning relative to the edges of the paper.
4. **Set Print Options**: Apply the `PdfPrintOptions`, which include the margin settings, to the `renderer.PrintOptions`.
5. **HTML Content**: Formulate your HTML content within a string, ready to be transformed into the PDF format.
6. **Render HTML to PDF**: Employ `RenderHtmlAsPdf` method on the renderer, supplying the HTML text. This will yield a `PdfDocument`.
7. **Save PDF**: Utilize `SaveAs` to commit the newly created `PdfDocument` to a file, specifying your preferred storage location.

These steps illustrate how you can tailor the margins in your PDF documents, aiding you in crafting well-structured PDFs through IronPDF.

[Explore IronPDF Custom Margin Code Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/set-custom-margins)