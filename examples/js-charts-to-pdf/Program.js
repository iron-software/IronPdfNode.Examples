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