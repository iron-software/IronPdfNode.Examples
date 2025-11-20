***Based on <https://ironpdf.com/examples/image-to-pdf/>***

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

For additional information on processing images into PDFs with IronPDF, check the [IronPDF product page](https://ironpdf.com).

<a href="https://ironpdf.com/python/how-to/python-pdf-to-image/" class="code_content__related-link__doc-cta-link">Check Out the Python PDF to Image Conversion Guide</a>