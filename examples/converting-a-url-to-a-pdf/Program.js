import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Render the web URL to PDF
    const pdf = await PdfDocument.fromUrl("https://ironpdf.com/");

    // Export the PDF document
    await pdf.saveAs("url.pdf");
})();