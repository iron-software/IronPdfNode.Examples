import {PdfDocument, AffixFonts} from "@ironsoftware/ironpdf";

(async () => {
    // Configure render options
    const options = {
        firstPageNumber: 1, // Use 2 if a cover page will be appended

        // Add a header to every page
        textHeader: {
            dividerLine: true,
            centerText: "{html-title}",
            font: AffixFonts.Helvetica, // Use the font name or font file path
            fontSize: 12,
        },

        // Add a footer
        textFooter: {
            dividerLine: true,
            leftText: "{date} {time}",
            rightText: "{page} of {total-pages}",
            font: AffixFonts.Arial, // Use the font name or font file path
            fontSize: 10,
        },
        // Mergeable fields are: {page} {total-pages} {url} {date} {time} {html-title} & {pdf-title}

        margin: {
            top: 25, // Create 25mm space for the header
            bottom: 25, // Create 25mm space for the footer
        },
    };

    // Define HTML content
    const htmlContent = "<h1>Hello IronPDF</h1>";

    // Render HTML content to a PDF with headers and footers
    const pdf = await PdfDocument.fromHtml(htmlContent, {renderOptions: options });

    // Save the PDF with headers and footers
    await pdf.saveAs("header_footer.pdf");
})();