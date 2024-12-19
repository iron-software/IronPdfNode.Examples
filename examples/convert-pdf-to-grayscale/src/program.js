import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Configure render options
    const renderOptions = {
        // Set color to grayscale
        grayScale: true,
    };
    
    const pdf = await PdfDocument.fromHtml("my-content.html", { renderOptions });

    // Export the PDF document
    await pdf.saveAs("my-content.pdf");
})();