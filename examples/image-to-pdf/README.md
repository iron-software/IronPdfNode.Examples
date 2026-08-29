# Images To PDF

> Full guide: [Images To PDF](https://ironpdf.com/nodejs/examples/image-to-pdf/?utm_source=github)

To create a PDF document from a single image, use the `PdfGenerator.imageToPdf` method with the image file path as an input, then export the generated PDF.

When dealing with multiple images, an array of file paths is employed. Here is a detailed guide including a well-formulated code sample.

### Code Explanation

1. **Import Necessary Modules**:
   - `fs`: This is a core Node.js module for file system operations.
   - `path`: Another core module essential for manipulating file paths.
   - `PdfGenerator`: Part of the IronPDF library, this module is tasked with creating PDFs.

2. **Directory Access**:
   - `fs.readdir`: This function scans the specified `imageDirectoryPath`.
   - It then filters and returns files ending in `.jpg` or `.jpeg`.

3. **Construct Full File Paths**:
   - The paths of the image files are fully assembled using the `path.join` method.

4. **Image to PDF Conversion**:
   - Using the `PdfGenerator.imageToPdf` function, the collected image paths are transformed into a single PDF document.

5. **PDF Storage**:
   - The `saveAs` function is employed to store the newly created PDF under the name `composite.pdf`.

For additional information on processing images into PDFs with IronPDF, check the [IronPDF product page](https://ironpdf.com?utm_source=github).

<a href="https://ironpdf.com/python/how-to/python-pdf-to-image/?utm_source=github" class="code_content__related-link__doc-cta-link">Check Out the Python PDF to Image Conversion Guide</a>

## Code

```js
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
```

## Running This Example

```shell
npm install
node src/program.js
```
