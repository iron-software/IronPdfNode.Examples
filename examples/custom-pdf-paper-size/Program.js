import {PdfDocument, PaperSizeUnit} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content
    const html = `<p>Lorem ipsum dolor sit amet...</p>`;

    // Configure render options
    const options = {
        // Set the paper size to custom (5x5 inches)
        paperSize: {
            unit: PaperSizeUnit.Inch,
            height: 5,
            width: 5,
        },
    };

    // Render HTML content to a PDF
    const pdf = await PdfDocument.fromHtml(html, { renderOptions: options });

    // Save the PDF with the custom paper size
    await pdf.saveAs("customPaperSize.pdf");
})();