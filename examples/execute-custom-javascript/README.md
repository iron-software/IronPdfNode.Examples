# Execute Custom JavaScript

> Full guide: [Execute Custom JavaScript](https://ironpdf.com/nodejs/examples/execute-custom-javascript/?utm_source=github)

Easily adjust the look of HTML elements in your applications using JavaScript and IronPDF, a popular library from Iron Software. This library excels in transforming HTML into PDF files and supports a variety of web technologies including JavaScript, CSS, and more.

Begin by crafting your JavaScript snippet. For instance, let's consider a scenario where we want to change the font color of all `H1` elements to red.

Then, construct an instance of the rendering options and make sure to enable JavaScript by setting the `enableJavaScript` property to `true`. Embed the JavaScript script we previously wrote into the `javascript` property of the options object.

Proceed to convert the HTML content into a PDF document using the `PdfDocument.fromHtml` method. Don’t forget to include the rendering options you set up as the second argument.

Conclude by saving the generated PDF file, which will show the H1 tags in red, under the name 'executed_js.pdf'.

Discover more about IronPDF and other exceptional libraries such as [IronBarcode](https://ironpdf.com/csharp/barcode/?utm_source=github), [IronOCR](https://ironpdf.com/csharp/ocr/?utm_source=github), and more by visiting the [Iron Software official website](https://ironpdf.com?utm_source=github).

[Explore the Execute Custom JavaScript Code Example Now!](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/execute-custom-javascript)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Define the JavaScript code to change text color to red
    const javascriptCode = "document.querySelectorAll('h1').forEach(function(el){el.style.color='red';})";

    // Create rendering options object
    const renderOptions = {
        enableJavaScript: true,
        javascript: javascriptCode,
    };

    // HTML content to be rendered
    const htmlContent = "<h1>Happy New Year!</h1>";

    // Render HTML content to a PDF
    const pdf = await PdfDocument.fromHtml(htmlContent, { renderOptions: renderOptions });

    // Save the PDF with the executed JavaScript
    await pdf.saveAs("executed_js.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
