# Add Classic Text Headers & Footers

> Full guide: [Add Classic Text Headers & Footers](https://ironpdf.com/nodejs/examples/headers-and-footers/)

Discover how to incorporate text headers and footers into your PDFs generated from HTML.

To integrate text headers and footers, configure them within the rendering settings. Establish the header's style by detailing its content, placement, font choice, and size. Similar attributes can be defined for the footer using the `textFooter` property. Enhance your headers and footers by including dynamic fields such as `{page}`, `{total-pages}`, `{url}`, `{date}`, `{time}`, `{html-title}`, and `{pdf-title}` to customize them as needed.

Adjust the document margins to ensure space for both the header and footer.

Employ the `PdfDocument.FromHtml` method for transforming HTML into a professionally styled PDF by including the `renderOptions` parameter.

For comprehensive guidance on this process, consult the [IronPDF Documentation](https://ironpdf.com/docs/).

The final PDF, titled "header_footer.pdf," incorporates all specified headers and footers.

[Explore the detailed example code on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/headers-and-footers) and see how headers and footers can be dynamically added to your PDF documents.

## Code

```js
import {PdfDocument, AffixFonts} from "@ironsoftware/ironpdf";

(async () => {
    // Configure render options
    const options = {
        firstPageNumber: 1, // Use 2 if a cover page will be appended

        // Add a header to every page
        textHeader: {
            dividerLine: true,
            centerText: "{html-title}",
            font: AffixFonts.Helvetica, // Use the font name or font file path
            fontSize: 12,
        },

        // Add a footer
        textFooter: {
            dividerLine: true,
            leftText: "{date} {time}",
            rightText: "{page} of {total-pages}",
            font: AffixFonts.Arial, // Use the font name or font file path
            fontSize: 10,
        },
        // Mergeable fields are: {page} {total-pages} {url} {date} {time} {html-title} & {pdf-title}

        margin: {
            top: 25, // Create 25mm space for the header
            bottom: 25, // Create 25mm space for the footer
        },
    };

    // Define HTML content
    const htmlContent = "<h1>Hello IronPDF</h1>";

    // Render HTML content to a PDF with headers and footers
    const pdf = await PdfDocument.fromHtml(htmlContent, {renderOptions: options });

    // Save the PDF with headers and footers
    await pdf.saveAs("header_footer.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
