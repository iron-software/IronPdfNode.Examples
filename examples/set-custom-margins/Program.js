import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const options = {
        margin: {
            top: 40,
            left: 20,
            right: 20,
            bottom: 40,
        },
    };
    // Render HTML file to PDF
    const pdf = await PdfDocument.fromHtml("my-content.html", { renderOptions: options });

    // Save the PDF
    await pdf.saveAs("my-content.pdf");
})();