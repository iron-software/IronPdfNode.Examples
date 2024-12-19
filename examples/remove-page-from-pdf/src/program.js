import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content
    const html = `
        <p> Hello Iron</p>
        <p> This is 1st Page </p>
        <div style='page-break-after: always;'></div>
        <p> This is 2nd Page</p>
        <div style='page-break-after: always;'></div>
        <p> This is 3rd Page</p>
        <div style='page-break-after: always;'></div>
        <p> This is 4th Page</p>
    `;

    // Create a PDF document from the HTML
    const pdf = await PdfDocument.fromHtml(html);

    // Remove pages 2 and 3 (page numbers are zero-based)
    pdf.removePage([1, 2]);

    // Save the modified PDF document
    await pdf.saveAs("page1And4.pdf");
})();