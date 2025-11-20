***Based on <https://ironpdf.com/examples/javascript-html-to-pdf/>***

All JavaScript code embedded in HTML, be it delivered as a string, from a file, or via a URL, will execute when converted to a PDF document.

You can allow JavaScript execution by setting the `enableJavaScript` property to true. If your HTML includes elements like charts and graphs that rely on JavaScript, you might also need to adjust the `waitFor` property to give the scripts adequate time to run.

For step-by-step guidance on how to activate JavaScript in IronPDF, refer to the [JavaScript Code in IronPDF tutorial](https://ironpdf.com/examples/javascript-html-to-pdf/).

### Enabling JavaScript in IronPDF: A Quick Guide

Below is a straightforward guide to enabling JavaScript execution using IronPDF:

- **EnableJavaScript**: Activates JavaScript execution within the HTML, critical for accurately rendering dynamic elements such as charts and graphs.
- **RenderDelay**: This parameter allows you to define a delay (measured in milliseconds) that holds off the PDF rendering until JavaScript has finished running. This feature is vital for ensuring animations or asynchronous operations in JavaScript are completely loaded.

For more examples and in-depth discussion on managing various JavaScript scenarios with IronPDF, see the [JavaScript Code Examples page](https://ironpdf.com/examples/javascript-html-to-pdf/).

[Explore JavaScript to PDF Examples on GitHub Now!](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/javascript-html-to-pdf)