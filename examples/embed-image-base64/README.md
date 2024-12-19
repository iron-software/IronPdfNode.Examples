***Based on <https://ironpdf.com/examples/embed-image-base64/>***

To ensure HTML content is self-contained and doesn't need to fetch assets over the internet, images can be included directly within the HTML using base64 encoding. This involves converting the image to a base64 format.

The provided example utilizes the `fs.readFile` function to asynchronously read an image file from the system. After reading, the code converts the image data to a binary string through iteration. This string is then encoded into base64 using JavaScript's `btoa` function.

Next, an HTML `img` element is constructed, with its `src` attribute containing the base64 data. Using IronPDF's `PdfDocument.fromHtml` method, this HTML, including the base64 image, is transformed into a PDF document.

The final step involves saving the newly created PDF document.