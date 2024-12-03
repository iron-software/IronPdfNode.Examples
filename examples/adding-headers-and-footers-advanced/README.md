***Based on <https://ironpdf.com/examples/adding-headers-and-footers-advanced/>***

Adding headers and footers to either new PDFs or those already in existence is easily accomplished with IronPDF.

Using the `addHtmlHeader` method allows you to insert a header, while the `addHtmlFooter` method lets you append a footer. These methods utilize an object featuring specific properties which include: `dividerLine`, `dividerLineColor`, `htmlFragment`, `loadStylesAndCSSFromMainHtmlDocument`, and `maxHeight`.

- **`dividerLine`**: Installs a line separating the header or footer from the rest of the document.
- **`dividerLineColor`**: Allows customization of the color of the divider line.
- **`htmlFragment`**: Defines the HTML content for the header or footer.
- **`loadStylesAndCSSFromMainHtmlDocument`**: This enables the incorporation of CSS styles from the primary HTML document when converting from HTML to PDF.
- **`maxHeight`**: Determines the maximum allowable height for the header and footer.

In addition, you're able to designate the second parameter, which is the page number where the header or footer should appear. This can be a specific page, several pages, or all pages using the term "all." If no page number is given, the header or footer will be added to every page.