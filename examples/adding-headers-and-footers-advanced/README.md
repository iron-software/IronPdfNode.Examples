***Based on <https://ironpdf.com/examples/adding-headers-and-footers-advanced/>***

Applying headers and footers to both new PDFs and existing documents is simple with IronPDF.

Utilize the `addHtmlHeader` method to insert a header and the `addHtmlFooter` to include a footer. These functions require a parameter designed as an object with several attributes: `dividerLine`, `dividerLineColor`, `htmlFragment`, `loadStylesAndCSSFromMainHtmlDocument`, and `maxHeight`.

- **`dividerLine`**: Inserts a dividing line following the header or before the footer.
- **`dividerLineColor`**: Allows for the customization of the divider's color.
- **`htmlFragment`**: Defines the HTML content for the header or footer.
- **`loadStylesAndCSSFromMainHtmlDocument`**: Facilitates the importing of CSS from the primary HTML document, useful when converting from HTML to PDF.
- **`maxHeight`**: Determines the maximum allowable height for the headers and footers.

Subsequently, you can determine the specific pages on which the header or footer should appear by using the second parameter, which denotes the page numbers. This can target a singular page, multiple pages, or every page using the term "all." If not specified, the header or footer will default to every page.