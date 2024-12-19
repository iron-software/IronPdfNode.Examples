***Based on <https://ironpdf.com/examples/javascript-html-to-pdf/>***

Any JavaScript contained within the HTML will be run as part of the PDF conversion process, whether sourced from a string, file, or a URL pointing to a PDF document.

To permit the execution of JavaScript, you should set the `enableJavaScript` property to `true`. In particular scenarios, such as when generating PDFs from web pages that include dynamic charts and graphs utilizing JavaScript, it might be necessary to also specify a `waitFor` property. This property allows adequate time for the JavaScript to execute fully, ensuring an accurate rendering.

For a step-by-step guide on how to enable JavaScript with IronPDF, please refer to the [JavaScript Code Examples page](https://ironpdf.com/examples/javascript-html-to-pdf/).