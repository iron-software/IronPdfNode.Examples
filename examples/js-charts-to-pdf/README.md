***Based on <https://ironpdf.com/examples/js-charts-to-pdf/>***

When rendering charts that require JavaScript, it's crucial to allocate enough time for the JavaScript to run. In the example provided, JavaScript execution is permitted through the `enableJavaScript` option.

To pause the rendering process until the JavaScript has finished executing, the `waitFor` parameter is utilized. By setting it to `WaitForType.JavaScript`, the process will either wait for the `window.ironpdf.notifyRender` function to be triggered within the JavaScript, or until a preset maximum wait time expires.

Furthermore, by setting the CSS media parameter, the appearance and formatting of the HTML content will be optimized to match screen-specific settings.