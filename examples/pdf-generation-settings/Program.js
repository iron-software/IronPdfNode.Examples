import {PdfDocument, WaitForType, CssMediaType, FitToPaperModes, PdfPaperOrientation, PaperSizeUnit} from "@ironsoftware/ironpdf";

(async () => {
    // Many rendering options to use to customize!
    const options = {
        paperSize: {
            unit: PaperSizeUnit.Inch,
            width: 12.5,
            height: 20,
        },
        printHtmlBackgrounds: true,
        paperOrientation: PdfPaperOrientation.Landscape,
        title: "My PDF Document Name",
        waitFor: {
            type: WaitForType.RenderDelay,
            maxWaitTime: 50, // in milliseconds
        },
        cssMediaType: CssMediaType.Screen,
        fitToPaperMode: FitToPaperModes.FitToPage,
        createPdfFormsFromHtml: true,

        // Supports margin customization
        margin: {
            top: 40, // millimeters
            left: 20, // millimeters
            right: 20, // millimeters
            bottom: 40, // millimeters
        },

        // Can set FirstPageNumber if you have a cover page
        firstPageNumber: 1, // use 2 if a cover page will be appended
    };

    // Render HTML page to PDF
    const pdf = await PdfDocument.fromUrl("https://angular.io/", { renderOptions: options });
    
    // Save the PDF
    await pdf.saveAs("my-content.pdf");
})();