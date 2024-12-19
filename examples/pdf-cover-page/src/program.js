import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    /* Cover Page */
    // Create a sample cover page using fromHtml method
    const coverHtml = "<h1>This is Cover Page</h1>";
    const cover = await PdfDocument.fromHtml(coverHtml);

    /* Main Document */
    // As we have a Cover Page, we're going to start the page numbers at 2.
    // Downloaded & Converted to PDF in Just One Line!
    const pdfUrl = "https://www.nuget.org/packages/IronPdf/";
    const pdf = await PdfDocument.fromUrl(pdfUrl, { firstPageNumber: 2 });

    // Only ONE Line command to merge two PDFs.
    const combinedPdf = await PdfDocument.mergePdf([cover, pdf]);

    // Save the merged PDF
    await combinedPdf.saveAs("combined.pdf");
})();