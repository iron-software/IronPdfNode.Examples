import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Import existing PDF document
const pdf = await PdfDocument.fromFile("example.pdf");

    // Extract all pages to a folder as image files
    await pdf.rasterizeToImageFiles("image/image.png");

    // Extract all pages as image buffers
    const imageBuffers = pdf.rasterizeToImageBuffers();
})();