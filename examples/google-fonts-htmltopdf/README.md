# Custom Fonts in HTML to PDF

> Full guide: [Custom Fonts in HTML to PDF](https://ironpdf.com/nodejs/examples/google-fonts-htmltopdf/)

To ensure assets such as JavaScript, fonts, and network resources are properly rendered, a render delay should be defined using the `waitFor` class attribute. This provides the necessary load time for these important assets.

For embedding a custom font from Google Fonts into your HTML content, configure the render options by using the `waitFor` parameter. Set the wait-for type to `RenderDelay` and allocate a maximum of 500 milliseconds for this operation.

Once your HTML content is rendered, convert it into a PDF using the [IronPDF's PDF Generation Library](https://ironpdf.com). Inspecting the final PDF should reveal that the custom font is correctly implemented and visible.

Here's how to do it in Node.js:

Check out further examples and integrations via [Explore Google Fonts to PDF Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/google-fonts-htmltopdf).

## Code

```js
import {PdfDocument, WaitForType} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content with a custom font from Google Fonts
    const htmlWithFont = `
        <h1>Google Font</h1>
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
        <p style="font-family: 'Lobster', serif; font-size:30px;">Hello Google Fonts</p>
    `;

    // Configure render options
    const options = {
        // Delay render to finish font loading
        waitFor: {
            type: WaitForType.RenderDelay,
            maxWaitTime: 500,
        },
    };

    // Render HTML content with the custom font to a PDF
    const doc = await PdfDocument.fromHtml(htmlWithFont, { renderOptions: options });

    // Save the PDF
    await doc.saveAs("font.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
