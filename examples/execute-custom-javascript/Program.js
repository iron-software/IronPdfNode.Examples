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