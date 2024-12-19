***Based on <https://ironpdf.com/examples/headers-and-footers/>***

Discover how to incorporate text headers and footers into a PDF file while converting HTML content.

Firstly, establish the desired text headers and footers by creating them in the rendering options object. For headers, set up the content with a divider, center-align the text to exhibit the HTML title, and adjust font preferences and size. For footers, use the `textFooter` property. Extend personalization by using placeholders such as `{page}`, `{total-pages}`, `{url}`, `{date}`, `{time}`, `{html-title}`, and `{pdf-title}`.

Adjust the document margins to fit both headers and footers seamlessly.

To transform your HTML into a PDF, use the `PdfDocument.fromHtml` method, applying the `renderOptions` as a parameter.

For more comprehensive guidance on converting HTML to PDFs, refer to the [IronPDF Documentation](https://ironpdf.com/docs/).

Finally, the produced PDF, adorned with your specified headers and footers, will be saved as "header_footer.pdf."