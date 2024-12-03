***Based on <https://ironpdf.com/examples/image-to-pdf/>***

To transform a single image into a PDF document, use the `PdfGenerator.imageToPdf` method by providing the image file path and then exporting the resultant PDF.

For converting several images into one PDF, the process entails a few more steps. Initially, you must obtain an array of the image file paths using the `readdir` method, targeting the specific directory storing the image files.

Following that, refine the list to include only file names ending in ".jpg" or ".jpeg." Place these names in an array named `jpegFiles`.

Next, create complete paths for these image files by concatenating the directory path with each file name, storing the results in the `filePaths` array.

To convert these images into a single PDF file, employ the `imageToPdf` method again, which can accept an array of image file paths.

Finally, compile the images into a PDF and save this as "composite.pdf."

For additional details on how to programmatically convert images to PDFs using the IronPDF library, explore the [IronPDF product page](https://ironpdf.com/).