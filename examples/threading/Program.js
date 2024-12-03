import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const htmlStrings = ["<h1>Html#1</h1>", "<h1>Html#2</h1>", "<h1>Html#3</h1>"];

    // Use Promise.all to render HTML strings asynchronously
    const renderPromises = htmlStrings.map(async (html) => {
        const pdf = await PdfDocument.fromHtml(html);
        // Perform more action to the returned PDF
        return pdf;
    });

    // Wait for all rendering Promises to complete
    const pdfDocuments = await Promise.all(renderPromises);
    
    // Do something with the pdfDocuments
})();