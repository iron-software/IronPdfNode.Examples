***Based on <https://ironpdf.com/examples/js-charts-to-pdf/>***

To correctly render charts utilizing JavaScript, it's essential to provide adequate time for JavaScript execution. The following example elucidates how to set up this process:

In the provided code, JavaScript execution is facilitated through the `enableJavaScript` setting. The `waitFor` setting postpones the conversion process to ensure JavaScript has the necessary time to run. This particular setup utilizes `WaitForType.JavaScript`, which pauses until the `window.ironpdf.notifyRender` function within the JavaScript is triggered or the maximum allotted time has elapsed.

Furthermore, by setting the CSS media option, it ensures that the layout and appearance of the HTML are optimized for display settings.

[Explore JS Charts to PDF Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/js-charts-to-pdf)