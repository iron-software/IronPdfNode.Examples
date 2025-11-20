***Based on <https://ironpdf.com/examples/adding-headers-and-footers-advanced/>***

Incorporating headers and footers into both new and existing PDFs can be effortlessly achieved using IronPDF. 

To add a header, utilize the `addHtmlHeader` method, whereas the `addHtmlFooter` method serves to append a footer. Both methods utilize a configuration object that encompasses several key properties: `dividerLine`, `dividerLineColor`, `htmlFragment`, `loadStylesAndCSSFromMainHtmlDocument`, and `maxHeight`.

- **`dividerLine`**: Introduces a line after the header or before the footer.
- **`dividerLineColor`**: Allows customization of the divider line color.
- **`htmlFragment`**: Determines the HTML content for the header or footer.
- **`loadStylesAndCSSFromMainHtmlDocument`**: Permits the use of CSS from the primary HTML document during the HTML to PDF conversion.
- **`maxHeight`**: Establishes a cap on the height for both the header and the footer.

Here is how you might apply headers and footers to your PDFs using IronPDF:

Further details can specify in the second parameter which involves designating the page number where the header or footer should appear. This can be set to a specific page, multiple pages, or to "all" pages. Absence of a specified page number will default the application of the header or footer to every page.

[Explore Advanced Header & Footer PDF Examples](https://ironpdf.com/examples/adding-headers-and-footers-advanced)