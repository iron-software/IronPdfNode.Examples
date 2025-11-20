import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Open a PDF or use an exisiting rendered PDF
const pdf = await PdfDocument.fromFile("source_doc.pdf");

    // Perform PDF Editing Tasks...
    
    // Convert to PDF/A-3b Document
await pdf.convertToPdfA();

    // Save the PDF/A-3b Document to File
    await pdf.saveAs("pdfa-compliant.pdf");
})();