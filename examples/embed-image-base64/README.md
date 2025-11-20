***Based on <https://ironpdf.com/examples/embed-image-base64/>***

To facilitate the offline use of HTML content that includes images, it's useful to embed the images directly into the HTML code as base64 encoded strings. This process involves loading the image and converting it into a base64 format.

Here is a comprehensive tutorial on how to read an image file, convert it to a base64-encoded string, embed it into an HTML document, and subsequently create a PDF from this HTML using IronPDF.

### Explanation:

1. **Image to Base64 Encoding:**
   - `encodeImageToBase64(filePath)`: This function reads the image file and transforms it into a base64-encoded string asynchronously.
   - It employs `fs.readFile` to access the image data. Upon successful reading, it encodes the data into a base64 string and completes the process.

2. **HTML Content Preparation:**
   - `createHtmlContent(base64Data)`: This method prepares the HTML content by incorporating the base64-encoded image within an `<img>` tag.

3. **PDF Creation:**
   - `generatePdf(filePath)`: This primary function manages the workflow by initially invoking `encodeImageToBase64` and subsequently `createHtmlContent`. It proceeds to create a PDF using `IronPdf`.
   - Utilizes `IronPdf.PdfDocument.fromHtml` to convert the HTML content into a PDF document.
   - The PDF is then saved using `pdf.saveAs`.

4. **Execution:**
   - The `generatePdf` function is executed with a specified path to the image file.

This guide seamlessly integrates the processes of reading an image, encoding it to base64 for HTML incorporation, and producing a PDF with IronPDF.

[Explore the Complete Base64 Image Embedding Example](https://ironpdf.com/IronPdfNode.Examples/tree/main/examples/embed-image-base64)