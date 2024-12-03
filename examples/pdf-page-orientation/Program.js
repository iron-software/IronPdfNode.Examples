import {PdfDocument, PdfPaperOrientation} from "@ironsoftware/ironpdf";

(async () => {
    const options = {
        // For NEW PDF Documents use PdfPaperOrientation
        // PdfPaperOrientation: To choose Landscape or Portrait Orientation in a new PDF document
        paperOrientation: PdfPaperOrientation.Landscape,
    };
 
    const newPdfFromHtml = PdfDocument.fromHtml("<h1> Hello World! </h1>", {renderOptions: options});
    const newPdfFromHtmlFile = PdfDocument.fromHtml("example.html", {renderOptions: options});
    const newPdfFromUrl = PdfDocument.fromUrl("https://ironpdf.com", {renderOptions: options});
    
    // For EXISTING PDFs use setRotation
    // setRotation : To rotate a PDF page and all of its contents
    const existingPdf = PdfDocument.fromFile("old_report.pdf");

    // Rotate specified page
    (await existingPdf).setRotation(90,{pdfPageSelection: [0]});

    // Rotate ALL pages
    (await existingPdf).setRotation(270,{pdfPageSelection: "all"});
    
    (await existingPdf).saveAs("rotated.pdf");
})();