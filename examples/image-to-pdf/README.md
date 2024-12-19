***Based on <https://ironpdf.com/examples/image-to-pdf/>***

Transforming a single image into a PDF can be effortlessly accomplished by providing the image's file path to the `PdfGenerator.imageToPdf` method and then exporting the generated PDF document.

When dealing with multiple images, the process involves a few more steps due to the need for handling several files. Initially, employ the `readdir` method to acquire the list of image files from a specified directory path.

After obtaining the list, filter out only the file names that end in ".jpg" or ".jpeg". These filtered names should be stored in an array called `jpegFiles`.

For each file name in the `jpegFiles` array, create the complete path by concatenating the directory path with the file name. Place these complete paths into another array named `filePaths`.

Proceed by using the `imageToPdf` method again, which now converts all images located at the paths specified in the `filePaths` array into a single PDF document.

The final step is to save this newly created PDF, which includes all the images, under the name "composite.pdf."

For further details on how to programmatically convert images to PDFs using the IronPDF library, please visit the [IronPDF product page](https://ironpdf.com).