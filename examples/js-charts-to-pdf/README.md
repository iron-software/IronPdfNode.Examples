# Rendering Charts in PDFs

> Full guide: [Rendering Charts in PDFs](https://ironpdf.com/nodejs/examples/js-charts-to-pdf/?utm_source=github)

To correctly render charts utilizing JavaScript, it's essential to provide adequate time for JavaScript execution. The following example elucidates how to set up this process:

In the provided code, JavaScript execution is facilitated through the `enableJavaScript` setting. The `waitFor` setting postpones the conversion process to ensure JavaScript has the necessary time to run. This particular setup utilizes `WaitForType.JavaScript`, which pauses until the `window.ironpdf.notifyRender` function within the JavaScript is triggered or the maximum allotted time has elapsed.

Furthermore, by setting the CSS media option, it ensures that the layout and appearance of the HTML are optimized for display settings.

[Explore JS Charts to PDF Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/js-charts-to-pdf)

## Code

```js
import {PdfDocument, WaitForType, CssMediaType} from "@ironsoftware/ironpdf";

(async () => {
    const htmlWithJs = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8' />
            <title>C3 Bar Chart</title>
        </head>
        <body>
            <div id='chart' style='width: 950px;'></div>
            <script src='https://d3js.org/d3.v4.js'></script>
            <!-- Load c3.css -->
            <link href='https://cdnjs.cloudflare.com/ajax/libs/c3/0.5.4/c3.css' rel='stylesheet'>
            <!-- Load d3.js and c3.js -->
            <script src='https://cdnjs.cloudflare.com/ajax/libs/c3/0.5.4/c3.js'></script>
            <script>
                Function.prototype.bind = Function.prototype.bind || function (thisp) {
                    var fn = this;
                    return function() {
                        return fn.apply(thisp, arguments);
                    };
                };
                var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        columns: [
                            ['data1', 30, 200, 100, 400, 150, 250],
                            ['data2', 50, 20, 10, 40, 15, 25]
                        ]
                    }
                });
                // Set delay
                setTimeout(function() {
                    window.ironpdf.notifyRender();
                }, 1000);
            </script>
        </body>
    </html>`;

    // Configure rendering options
    const options = {
        enableJavaScript: true,
        waitFor: {
            type: WaitForType.JavaScript,
            maxWaitTime: 1000, // 1000 milliseconds delay
        },
        cssMediaType: CssMediaType.Screen,
    };

    // Render HTML content to a PDF
    const pdf = await PdfDocument.fromHtml(htmlWithJs, { renderOptions: options })

    await pdf.saveAs("js-chart.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
