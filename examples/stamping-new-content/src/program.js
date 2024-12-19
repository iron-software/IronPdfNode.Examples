import {PdfDocument, HorizontalAlignment, VerticalAlignment} from "@ironsoftware/ironpdf";

(async () => {
    // Open existing PDF
    const pdf = await PdfDocument.fromFile("Sample.pdf");

    // Configure the HTML stamp
    const stampOptions = {
        horizontalAlignment: HorizontalAlignment.Center,
        verticalAlignment: VerticalAlignment.Bottom,
        behindExistingContent: false,
        opacity: 30
    };

    const html = "<img src='https://ironpdf.com/img/products/ironpdf-logo-text-dotnet.svg'/>"
    // Apply the stamp to the PDF
    await pdf.stampHtml(html, {htmlStampOptions: stampOptions});

    // Save the stamped PDF
    await pdf.saveAs("stamped_image.pdf");
})();