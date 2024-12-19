import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Extracting Image and Text content from Pdf Documents
    // Import existing PDF document
    const pdf = await PdfDocument.fromHtml("old_report.pdf");
    
    // Get all text to put in a search index
    const text = await pdf.extractText();
    
    // Get all Images
    const imagesBuffer = await pdf.extractRawImages();
    
    const pageCount = await pdf.getPageCount()
    // Or even find the precise text and images for each page in the document
    for (let index = 0; index < pageCount; index++) {
        text = await pdf.extractText([index]);
        imagesBuffer = await pdf.extractRawImages([index]);
    }
})();