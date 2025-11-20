***Based on <https://ironpdf.com/examples/execute-custom-javascript/>***

Easily adjust the look of HTML elements in your applications using JavaScript and IronPDF, a popular library from Iron Software. This library excels in transforming HTML into PDF files and supports a variety of web technologies including JavaScript, CSS, and more.

Begin by crafting your JavaScript snippet. For instance, let's consider a scenario where we want to change the font color of all `H1` elements to red.

Then, construct an instance of the rendering options and make sure to enable JavaScript by setting the `enableJavaScript` property to `true`. Embed the JavaScript script we previously wrote into the `javascript` property of the options object.

Proceed to convert the HTML content into a PDF document using the `PdfDocument.FromHtml` method. Don’t forget to include the rendering options you set up as the second argument.

Conclude by saving the generated PDF file, which will show the H1 tags in red, under the name 'executed_js.pdf'.

Discover more about IronPDF and other exceptional libraries such as [IronBarcode](https://ironpdf.com/csharp/barcode/), [IronOCR](https://ironpdf.com/csharp/ocr/), and more by visiting the [Iron Software official website](https://ironpdf.com).

[Explore the Execute Custom JavaScript Code Example Now!](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/execute-custom-javascript)