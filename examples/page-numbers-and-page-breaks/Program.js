import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const html = `
        <p> Hello Iron</p>
        <p> This is 1st Page </p>
        <div style='page-break-after: always;'></div>
        <p> This is 2nd Page</p>
        <div style='page-break-after: always;'></div>
        <p> This is 3rd Page</p>
    `;

    // Configure render options
    const options = {
        htmlHeader: {
            htmlFragment: "<center><i>{page} of {total-pages}<i></center>",
            dividerLine: true,
            maxHeight: 15,
        }
    };

    const pdf = await PdfDocument.fromHtml(html, {renderOptions: options});

    // Save the PDF
    await pdf.saveAs("pageNumber.pdf");
})();