import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
// Render a URL as a PDF
    const pdf = await PdfDocument.fromUrl("https://www.wikipedia.org/");

    // Add a background PDF
    const bgpdf = await PdfDocument.open("MyBackground.pdf");
    await pdf.addBackgroundFromAnotherPdf(bgpdf);

    // Add a foreground overlay PDF to the first page
    const fgpdf = await PdfDocument.open("MyForeground.pdf");
    await pdf.addForegroundFromAnotherPdf(fgpdf, 0, 0);
    
    // Save the merged PDF to a file
    await pdf.saveAs("Complete.pdf");
})();