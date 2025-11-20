import {PdfDocument, WaitForType} from "@ironsoftware/ironpdf";

(async () => {
    // Configure render options
    const options = {
        enableJavaScript: true,
        // Wait for Javascript
        waitFor: {
            type: WaitForType.JavaScript,
            maxWaitTime: 500,
        },
    };
    
    const pdf = await PdfDocument.fromUrl("https://angular.io/", { renderOptions: options });

    // Export the PDF document
await pdf.saveAs("angular.pdf");
})();