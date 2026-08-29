# Text Find and Replace

> Full guide: [Text Find and Replace](https://ironpdf.com/nodejs/examples/replace-text-in-pdf/)

The following code snippet shows how to substitute specific strings in any PDF, a capability that extends to both new and pre-existing documents.

To perform text substitution in a PDF, employ the `replaceText` method which necessitates three parameters: existing text to locate, the substitution text, and the page number where this switch should occur. For illustration, this example changes ".NET6" with ".NET7" on an identified page.

After you've altered the text, the updated PDF can be stored using the `saveAs` method. For further details on managing and modifying PDFs, see the [IronPDF Features Page](https://ironpdf.com/features/).

You might also want to check out additional tools from Iron Software, including [IronOCR for OCR features](https://ironsoftware.com/csharp/ocr/), [IronBarcode for barcode creation and scanning](https://ironsoftware.com/csharp/barcode/), or visit [IronSoftware.com](https://ironsoftware.com/) for a comprehensive view of all products.

<a href="https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/replace-text-in-pdf" class="code_content__related-link__doc-cta-link">Explore the Replace Text in PDF Code Example on GitHub</a>

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Render new PDF document
    const pdf = await PdfDocument.fromHtml("<h1>.NET6</h1>");

    // Parameters
    const pageIndex = 0; // Page index (zero-based)
    const oldText = ".NET6"; // Old text to remove
    const newText = ".NET7"; // New text to add

    // Replace text on the specified page
    await pdf.replaceText(oldText, newText, pageIndex);

    // Save the modified PDF document
    await pdf.saveAs("newSample.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
