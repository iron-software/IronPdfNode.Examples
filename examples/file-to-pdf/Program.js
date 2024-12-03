import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Render the HTML file
    const pdf = await PdfDocument.fromHtml("example.html");

    // Export the PDF document
    await pdf.saveAs("output.pdf");
})();