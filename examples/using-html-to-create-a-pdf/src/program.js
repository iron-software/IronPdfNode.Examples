import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Create a PDF from an HTML string
    const pdf = await PdfDocument.fromHtml("<h1>Hello World</h1>");

    // Export the PDF to a file
    await pdf.saveAs("output.pdf");

    // Advanced Example with HTML Assets
    // Load external HTML assets: Images, CSS, and JavaScript.
    const htmlContentWithAssets = "<img src='icons/iron.png'>";
    const advancedPdf = await PdfDocument.fromHtml(htmlContentWithAssets);

    // Save the PDF with loaded assets
    await advancedPdf.saveAs("html-with-assets.pdf");
})();