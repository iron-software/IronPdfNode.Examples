import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Load the existing PDF document
    const pdf = await PdfDocument.fromFile("my-content.pdf");

    // Compress images with quality parameter (1-100)
    await pdf.compressSize(60);
    // Save the compressed PDF
    await pdf.saveAs("document_compressed.pdf");

    // Compress images and scale down based on visible size in the PDF document
    await pdf.compressSize(90, true);
    // Save the scaled and compressed PDF
    await pdf.saveAs("document_scaled_compressed.pdf");
});