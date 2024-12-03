import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Define the JavaScript code to change text color to red
    const htmlWithJavaScript = `<h1>This is HTML</h1>
    <script>
        document.write('<h1>This is JavaScript</h1>');
        window.ironpdf.notifyRender();
    </script>`;

    // Create rendering options object
    const renderOptions = {
        enableJavaScript: true,
    };

    // Render HTML content to a PDF
    const pdf = await PdfDocument.fromHtml(htmlWithJavaScript, { renderOptions });

    // Save the PDF with the executed JavaScript
    await pdf.saveAs("javascript-in-html.pdf");
})();