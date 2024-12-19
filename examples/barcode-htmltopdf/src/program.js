import {PdfDocument, BarcodeType} from "@ironsoftware/ironpdf";

(async () => {
    // Render HTML to PDF
    const pdf = await PdfDocument.fromHtml("<h1>Stamp Barcode</h1>");

    // Configure barcode options
    const barcodeOptions = {
        barcodeEncoding: BarcodeType.code39,
    };

    // Stamp barcode
    await pdf.stampBarcode("Hello World", barcodeOptions);

    // Export to a file
    await pdf.saveAs("bcTest.pdf");
})();