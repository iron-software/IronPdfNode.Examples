import {PdfDocument} from "@ironsoftware/ironpdf";
import fs from 'fs';

(async () => {
    // Image file path
    const filePath = 'iron.png';

    // Read bytes from a file using fs.readFile
    fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let binaryString = '';
    data.forEach((byte) => {
        binaryString += String.fromCharCode(byte);
      });

    // Convert the binary string to base64
    const base64String = btoa(binaryString);

    // Insert base64 to img element
    const imgHtml = `<img src='data:image/png;base64,${base64String}'>`;

    // Render HTML content with the embedded image to a PDF
    const pdf = PdfDocument.fromHtml(imgHtml).then(
        (returnedPdf)=>{
            // Save the PDF
            returnedPdf.saveAs("embedded_example_1.pdf")
        });
    });
})();