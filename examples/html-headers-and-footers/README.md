# Add HTML Headers & Footers

> Full guide: [Add HTML Headers & Footers](https://ironpdf.com/nodejs/examples/html-headers-and-footers/?utm_source=github)

Set up headers and footers for PDF documents using IronPDF's capabilities, a suite from Iron Software designed for sophisticated PDF creation and editing.

To craft the content for the header, include an HTML snippet and a horizontal line, configuring the maximum permitted height using the PDF rendering features of IronPDF. Likewise, manage the footer content through the `htmlHeader` property from IronPDF.

It's critical to adjust the margins since the heights of the header and footer aren't auto-calculated, which can cause them to cover the primary HTML content inadvertently.

For more elaboration on implementing headers and footers or to look at additional functionalities, visit the [IronPDF Official Website](https://ironpdf.com?utm_source=github).

Access further code examples on HTML headers and footers in IronPDF through this GitHub link: [Explore HTML Headers & Footers Code Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/html-headers-and-footers).

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Configure render options
    const renderOptions = {
        firstPageNumber: 1, // Use 2 if a cover page will be appended

        // Build a footer using html to style the text
        // mergeable fields are:
        // {page} {total-pages} {url} {date} {time} {html-title} & {pdf-title}
        htmlFooter: {
            maxHeight: 15, //millimeters
            htmlFragment: "<center><i>{page} of {total-pages}</i></center>",
            dividerLine: true,
        },

        // Build a header using an image asset
        htmlHeader: {
            maxHeight: 15, //millimeters
            htmlFragment: "<img src='logo.png'>",
        },

        // Use sufficient margin.bottom to ensure that the htmlFooter does not overlap with the main PDF page content.
        margin: {
            top: 25, // Create 25mm space for the header
            bottom: 25, // Create 25mm space for the footer
        },
    };

    // The guide's snippet stops at the options object and never applies it.
    // Render a document with those options and save it.
    const pdf = await PdfDocument.fromHtml(
        "<h1>Report</h1><p>Body content.</p>",
        { renderOptions }
    );

    await pdf.saveAs("html-headers-and-footers.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
