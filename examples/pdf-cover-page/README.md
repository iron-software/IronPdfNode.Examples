# Attach a Cover Page

> Full guide: [Attach a Cover Page](https://ironpdf.com/nodejs/examples/pdf-cover-page/?utm_source=github)

A cover page significantly enhances the appeal and presentation of a PDF document, often being the first page that a viewer encounters. It typically contains key details such as the title of the document, author information, logos, and other branding elements. This page not only visually identifies the document but also boosts the brand presence for businesses and organizations.

Besides its aesthetic value, the cover page allows quick recognition and understanding of the document's content and origins, aiding in easier navigation. It also meets legal or compliance needs for specific document types, particularly in formal or legal settings.

Creating a separate cover page and incorporating it into a PDF document is straightforward. Additionally, you can add a cover page to an already existing PDF. Simply import the main PDF, create or integrate the cover page, and then utilize the `mergePdf` function to combine both PDFs into a single file.

The following example illustrates how to accomplish this task:

To customize this process for your documents, adapt the script to match your specific file paths and naming standards. This method is both effective and efficient for producing PDFs with professional-looking cover pages.

[Explore PDF Cover Page Code Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/pdf-cover-page)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    /* Cover Page */
    // Create a sample cover page using fromHtml method
    const coverHtml = "<h1>This is Cover Page</h1>";
    const cover = await PdfDocument.fromHtml(coverHtml);

    /* Main Document */
    // As we have a Cover Page, we're going to start the page numbers at 2.
    // Downloaded & Converted to PDF in Just One Line!
    const pdfUrl = "https://www.nuget.org/packages/IronPdf/";
    const pdf = await PdfDocument.fromUrl(pdfUrl, { firstPageNumber: 2 });

    // Only ONE Line command to merge two PDFs.
    const combinedPdf = await PdfDocument.mergePdf([cover, pdf]);

    // Save the merged PDF
    await combinedPdf.saveAs("combined.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
