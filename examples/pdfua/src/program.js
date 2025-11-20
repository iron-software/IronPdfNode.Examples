import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Open a PDF or use an exisiting rendered PDF
const pdf = await PdfDocument.fromFile("source_doc.pdf");

    // Convert to PDF/UA
    await pdf.convertToPdfUA(NaturalLanguages.English);

    // Save the PDF/UA Document to File
    await pdf.saveAs("pdfua-compliant.pdf");
})();