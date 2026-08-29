# Node.js and IronPDF: Combining PDF Files into a Single Document

> Full guide: [Node.js and IronPDF: Combining PDF Files into a Single Document](https://ironpdf.com/nodejs/how-to/nodejs-merge-pdf/?utm_source=github)


IronPDF provides an array of functionalities for developers working with Node.js, including the ability to create, manipulate, and merge PDF files. For a deeper dive into what IronPDF offers or to start using it, you can consult the [IronPDF for Node.js Documentation](https://ironpdf.com/nodejs/docs/?utm_source=github).

For those interested in generating and decoding barcodes, explore the capabilities of [IronBarcode for Barcode Solutions](https://ironsoftware.com/csharp/barcode/?utm_source=github), which integrates smoothly with your applications.

When it comes to OCR technology, [IronOCR for Advanced OCR Functionalities](https://ironsoftware.com/csharp/ocr/?utm_source=github) stands out for its precision in extracting information from scanned documents.

For web data extraction, [IronWebScraper's Web Scraping Tools](https://ironsoftware.com/csharp/webscraper/?utm_source=github) offer reliable and efficient solutions for collecting data from various online sources.

Automating Excel tasks is simplified with [IronXL's Excel Library](https://ironsoftware.com/csharp/excel/?utm_source=github), compatible with various platforms for both reading and writing Excel documents.

[IronSecureDoc for Document Security](https://ironsoftware.com/csharp/securedoc/?utm_source=github) and [IronZIP for File Compression](https://ironsoftware.com/csharp/zip/?utm_source=github) provide advanced solutions for secure document handling and efficient data compression.

Discover the full range of Iron Software's libraries and products at the [Iron Software's Product Overview](https://ironsoftware.com/?utm_source=github) where you'll find comprehensive descriptions and practical applications to meet diverse development needs.

For printing functionalities, [IronPrint for Efficient Printing Solutions](https://ironsoftware.com/csharp/print/?utm_source=github) is an excellent resource.

Working with Word documents is simplified using [IronWord's Word Document Manipulation](https://ironsoftware.com/csharp/word/?utm_source=github), which ensures integration into your projects.

Additionally, [IronQR for QR Code Generation](https://ironsoftware.com/csharp/qr/?utm_source=github) makes implementing QR codes in your applications straightforward and efficient.

Utilizing these tools, developers can greatly enhance their applications, tailoring them to specific requirements.

## How to Merge Multiple PDFs into One with Node.js

This example demonstrates merging several PDF files into a single document using IronPDF in a Node.js environment.

```js
import { PdfDocument } from "@ironsoftware/ironpdf";

// Define the function to merge PDFs
async function mergePdfs(outputFilePath, inputFiles) {
	// Retrieve the PDF documents
	const pdfDocs = await Promise.all(inputFiles.map((file) => PdfDocument.fromFile(file)));

	// Combine the PDF documents
	const mergedPdf = await PdfDocument.mergePdf(pdfDocs);

	// Store the merged PDF at the designated output file path
	await mergedPdf.saveAs(outputFilePath);

	console.log(`Merged PDF is saved at ${outputFilePath}`);
}

const inputFiles = ["file1.pdf", "file2.pdf", "file3.pdf"];
const outputFilePath = "merged.pdf";

await mergePdfs(outputFilePath, inputFiles);
```

### Overview:

- **IronPDF Import**: We start by importing IronPDF via `require('ironpdf')`, equipping us with necessary PDF manipulation tools.

- **mergePdfs Function**: This asynchronous function accepts `outputFilePath` for storing the combined PDF and `inputFiles`, an array of files to merge.
  
- **PDF Document Retrieval**: Each PDF mentioned in `inputFiles` is loaded using `PdfDocument.fromFile`, and we handle the asynchronous nature of file loading with `Promise.all()`.
  
- **Combining PDFs**: We then merge the loaded documents into a single file with `PdfDocument.mergePdf`.
  
- **Storing the Combined PDF**: Finally, we save the combined PDF to the given `outputFilePath` using the `saveAs()` method.
  
- **Executed Example**: An immediately invoked function that executes `mergePdfs` with sample files and an output path.

Before running this script, ensure that you have set up both IronPDF and Node.js in your development environment.

## Running This Example

```shell
npm install
node src/program.js
```
