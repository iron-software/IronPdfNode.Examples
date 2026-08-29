# Page Numbers and Page Breaks

> Full guide: [Page Numbers and Page Breaks](https://ironpdf.com/nodejs/examples/page-numbers-and-page-breaks/?utm_source=github)

When converting HTML to PDF, IronPDF handles page breaks flawlessly. 

In the context of HTML, a page break is a specific marker that advises either a web browser or a rendering engine to initiate a new page when displaying or printing content. This is particularly useful for managing the layout of printed documents or ensuring that particular sections start on a new page.

Additionally, the following code snippet adjusts the rendering settings to insert the page number at the bottom center of each page in the PDF. The format used for the page numbering is "`{page}` of `{total-pages}`", with a maximum height restriction of 15 units for the numbers.

For detailed information on effectively handling page breaks during your HTML to PDF conversions, visit the [detailed guide on IronPDF features](https://www.ironpdf.com/docs/?utm_source=github#features). IronPDF is just one element of Iron Software's comprehensive suite of file processing utilities, which also includes [barcode creation using IronBarcode](https://ironsoftware.com/csharp/barcode?utm_source=github), [managing Excel files with IronXL](https://ironsoftware.com/csharp/excel/?utm_source=github), and [performing optical character recognition via IronOCR](https://ironsoftware.com/csharp/ocr/?utm_source=github).

[Explore detailed code examples for implementing page numbers and breaks in PDFs](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/page-numbers-and-page-breaks)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const html = `
        <p> Hello Iron</p>
        <p> This is 1st Page </p>
        <div style='page-break-after: always;'></div>
        <p> This is 2nd Page</p>
        <div style='page-break-after: always;'></div>
        <p> This is 3rd Page</p>
    `;

    // Configure render options
    const options = {
        htmlHeader: {
            htmlFragment: "<center><i>{page} of {total-pages}</i></center>",
            dividerLine: true,
            maxHeight: 15,
        }
    };

    const pdf = await PdfDocument.fromHtml(html, {renderOptions: options});

    // Save the PDF
    await pdf.saveAs("pageNumber.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
