import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Render new PDF document
    const pdf = await PdfDocument.fromHtml("<h1>.NET6</h1>");

    // Parameters
    const pageIndex = 0; // Page index (zero-based)
    const oldText = ".NET6"; // Old text to remove
    const newText = ".NET7"; // New text to add

    // Replace text on the specified page
    await pdf.replaceText(oldText, newText, pageIndex);

    // Save the modified PDF document
    await pdf.saveAs("newSample.pdf");
})();