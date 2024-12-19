import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const html_a = `<p> [PDF_A] </p>
    <p> [PDF_A] 1st Page </p>
    <div style='page-break-after: always;'></div>
    <p> [PDF_A] 2nd Page</p>`;

    const html_b = `<p> [PDF_B] </p>
    <p> [PDF_B] 1st Page </p>
    <div style='page-break-after: always;'></div>
    <p> [PDF_B] 2nd Page</p>`;

    // Render HTML content to PDF documents
    const pdfdoc_a = await PdfDocument.fromHtml(html_a);
    const pdfdoc_b = await PdfDocument.fromHtml(html_b);

    // Merge the two PDF documents
    const merged = await PdfDocument.mergePdf([pdfdoc_a, pdfdoc_b]);

    // Save the merged PDF
    await merged.saveAs("Merged.pdf");  
})();