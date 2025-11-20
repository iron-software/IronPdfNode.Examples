import {PdfDocument, CssMediaType, FitToPaperModes} from "@ironsoftware/ironpdf";

(async () => {
    const options = {
        // Choose Screen or Print CSS media
        cssMediaType: CssMediaType.Screen,
        
        // Set paper mode to automatic fit to physical paper
        fitToPaperMode: FitToPaperModes.FitToPage,
    };

    // Render an HTML file
const pdf = await PdfDocument.fromHtml("Responsive.html", {renderOptions: options});

await pdf.saveAs("pdf-from-html.pdf");
})();