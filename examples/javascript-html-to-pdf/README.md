***Based on <https://ironpdf.com/examples/javascript-html-to-pdf/>***

Any JavaScript embedded within the HTML will run during the conversion phase to PDF, applicable whether the HTML originates from a string, a file, or a URL.

To facilitate the execution of JavaScript, you must set the `enableJavaScript` property to `true`. Additionally, for certain scenarios like rendering charts and graphs that rely on JavaScript, it's recommended to set a `waitFor` property. This property delays the conversion process, allowing adequate time for the JavaScript to execute fully.

For step-by-step guidance on [activating JavaScript in IronPDF](https://ironpdf.com/examples/javascript-html-to-pdf/), refer to the [JavaScript Code Examples page](https://ironpdf.com/examples/javascript-html-to-pdf/).