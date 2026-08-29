# PDF/UA

> Full guide: [PDF/UA](https://ironpdf.com/nodejs/examples/pdfua/)

PDF/UA (Portable Document Format/Universal Accessibility) is a globally recognized standard established for creating PDF files that are accessible to people with disabilities, notably those who use assistive technology like screen readers.

In the subsequent example, we illustrate the use of a conceptual `convertToPdfUA` method which transforms standard PDF documents into versions compliant with the PDF/UA criteria. Furthermore, we'll demonstrate the `saveAs` method that allows for the exporting of the PDF document.

[Explore PDF/UA Conversion Examples on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/pdfua)

## Code

```js
import {NaturalLanguages, PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Open a PDF or use an exisiting rendered PDF
const pdf = await PdfDocument.fromFile("source_doc.pdf");

    // Convert to PDF/UA
    await pdf.convertToPdfUA(NaturalLanguages.English);

    // Save the PDF/UA Document to File
    await pdf.saveAs("pdfua-compliant.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
