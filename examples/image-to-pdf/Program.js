import {PdfGenerator} from "@ironsoftware/ironpdf";
import fs from 'fs';

(async () => {
    // Specify the directory path
    const directoryPath = './images';

    // Read the contents of the directory
    fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter file names to include only .jpg and .jpeg extensions
    const jpegFiles = files.filter((file) =>
        file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );

    // Construct full file paths for the filtered files
    const filePaths = jpegFiles.map((file) => `${directoryPath}/${file}`);

    // Converts the images to a PDF and save it.
    const pdf = PdfGenerator.imageToPdf(filePaths).then(
        (returnedPdf)=> {
            returnedPdf.saveAs("composite.pdf");
        });
    
    // Also see PdfDocument.rasterizeToImageFiles() method to flatten a PDF to images or thumbnails
    });
})();