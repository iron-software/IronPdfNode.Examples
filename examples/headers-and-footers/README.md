***Based on <https://ironpdf.com/examples/headers-and-footers/>***

Discover how to embed text headers and footers within a PDF document derived from HTML content.

To incorporate text headers and footers, you must define them within the rendering options. Set up the header content to include a dividing line, centered text showing the HTML document's title, font settings, and font size. In a parallel manner, configure the footer using the `textFooter` property. Employ placeholders such as `{page}`, `{total-pages}`, `{url}`, `{date}`, `{time}`, `{html-title}`, and `{pdf-title}` to customize the content dynamically.

Adjust the page margins to ensure proper space for both the header and footer.

Use the `PdfDocument.fromHtml` method to transform your HTML content into a PDF file. When doing so, provide the `renderOptions` configuration.

For comprehensive guides on converting HTML to PDFs, consult the [IronPDF Documentation](https://ironpdf.com/docs/).

Once processed, your PDF file — now furnished with headers and footers — will be stored as "header_footer.pdf."