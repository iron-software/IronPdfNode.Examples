import {PdfGenerator} from "@ironsoftware/ironpdf";

(async () => {
    // File path
    const filePaths = "multipage_tiff_example.tif";
    
    // Convert a TIFF with 1 or more pages to a PDF
    const pdf = await PdfGenerator.imageToPdf(filePaths)
    
    // Export to a file or Stream
    await pdf.saveAs("multi-page-pdf.pdf");
})();