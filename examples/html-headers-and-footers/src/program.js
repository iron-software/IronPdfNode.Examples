const {PdfDocument} = require("@ironsoftware/ironpdf");

(async () => {
    // Configure render options
    const renderOptions = {
        firstPageNumber: 1, // Use 2 if a cover page will be appended

        // Build a footer using html to style the text
        // mergeable fields are:
        // {page} {total-pages} {url} {date} {time} {html-title} & {pdf-title}
        htmlFooter: {
            maxHeight: 15, //millimeters
            htmlFragment: "<center><i>{page} of {total-pages}<i></center>",
            dividerLine: true,
        },

        // Build a header using an image asset
        htmlHeader: {
            maxHeight: 15, //millimeters
            htmlFragment: "<img src='logo.png'>",
        },

        // Use sufficient MarginBottom to ensure that the HtmlFooter does not overlap with the main PDF page content.
        margin: {
            top: 25, // Create 25mm space for the header
            bottom: 25, // Create 25mm space for the footer
        },
    };
})();