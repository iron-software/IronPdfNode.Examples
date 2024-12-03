import {PdfDocument, WaitForType} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content with a custom font from Google Fonts
    const htmlWithFont = `
        <h1>Google Font</h1>
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
        <p style="font-family: 'Lobster', serif; font-size:30px;">Hello Google Fonts</p>
    `;

    // Configure render options
    const options = {
        // Delay render to finish font loading
        waitFor: {
            type: WaitForType.RenderDelay,
            maxWaitTime: 500,
        },
    };

    // Render HTML content with the custom font to a PDF
    const doc = await PdfDocument.fromHtml(htmlWithFont, { renderOptions: options });

    // Save the PDF
    await doc.saveAs("font.pdf");
})();