# Add Headers/Footers on Specific Pages

> Full guide: [Add Headers/Footers on Specific Pages](https://ironpdf.com/nodejs/examples/adding-headers-and-footers-advanced/?utm_source=github)

Incorporating headers and footers into both new and existing PDFs can be achieved using IronPDF. 

To add a header, utilize the `addHtmlHeader` method, whereas the `addHtmlFooter` method serves to append a footer. Both methods utilize a configuration object that encompasses several key properties: `dividerLine`, `dividerLineColor`, `htmlFragment`, `loadStylesAndCSSFromMainHtmlDocument`, and `maxHeight`.

- **`dividerLine`**: Introduces a line after the header or before the footer.
- **`dividerLineColor`**: Allows customization of the divider line color.
- **`htmlFragment`**: Determines the HTML content for the header or footer.
- **`loadStylesAndCSSFromMainHtmlDocument`**: Permits the use of CSS from the primary HTML document during the HTML to PDF conversion.
- **`maxHeight`**: Establishes a cap on the height for both the header and the footer.

Here is how you might apply headers and footers to your PDFs using IronPDF:

Further details can specify in the second parameter which involves designating the page number where the header or footer should appear. This can be set to a specific page, multiple pages, or to "all" pages. Absence of a specified page number will default the application of the header or footer to every page.

[Explore Advanced Header & Footer PDF Examples](https://ironpdf.com/examples/adding-headers-and-footers-advanced/?utm_source=github)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const multi_page_html = `
    <p> This is 1st Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 2nd Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 3rd Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 4th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 5th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 6th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 7th Page</p>`;

    // Create a PDF or Load an existing PDF using PdfDocument.fromFile
    const pdf = await PdfDocument.fromHtml(multi_page_html);

    // Create a header
    const header = {
        htmlFragment: "THIS IS HEADER {page} of {total-pages}",
    };

    // Get page count
    const pageCount = await pdf.getPageCount();

    // Create a Page Range 0 .. 7
    const allPageIndexes = Array.from({ length: pageCount }, (_, index) => index);

    // Example 1
    // Apply header to even page index only. (page number will be odd number because index starts at 0 but page number starts at 1)
    const evenPageIndexes = allPageIndexes.filter(number => number % 2 === 0);
    await pdf.addHtmlHeader(header, evenPageIndexes);
    await pdf.saveAs("EvenPages.pdf");
    
    // Example 2
    // Apply header to odd page index only. (page number will be even number because index starts at 0 but page number starts at 1)
    const oddPageIndexes = allPageIndexes.filter(number => number % 2 !== 0);
    await pdf.addHtmlHeader(header, oddPageIndexes);
    await pdf.saveAs("OddPages.pdf");
    
    // Example 3
    // Apply header to the last page only.
    const lastPageIndex = [pageCount - 1];
    await pdf.addHtmlHeader(header, lastPageIndex);
    await pdf.saveAs("LastPageOnly.pdf");
    
    // Example 4
    // Apply header to the first page only.
    const firstPageIndex = [0];
    await pdf.addHtmlHeader(header, firstPageIndex);
    await pdf.saveAs("FirstPageOnly.pdf");
    
    // Example 5
    // Skip the first page.
    const skipFirstPageIndexes5 = allPageIndexes.slice(1);
    await pdf.addHtmlHeader(header, skipFirstPageIndexes5);
    await pdf.saveAs("SkipFirstPage.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
