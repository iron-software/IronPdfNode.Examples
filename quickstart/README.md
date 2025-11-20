# IronPDF for Node.js - Create, Edit, and Read PDFs in Node.js Scripts

***Based on <https://ironpdf.com/docs/docs/>***


IronPDF offers a robust PDF library designed to streamline the creation and customization of PDF documents programmatically with Node.js.

Developed by Iron Software, IronPDF is part of a suite of high-end document processing libraries that are continually evolving to meet developer needs.

For additional platform support, IronPDF is also compatible with [C# and VB.NET in .NET](https://ironpdf.com/), [Java PDF Library](https://ironpdf.com/java/), and [Python PDF Library](https://ironpdf.com/python/).

## Key Features of IronPDF for Node.js

1. Create PDFs using HTML, CSS, JavaScript, images, and various other file formats.
2. Enhance PDF documents with headers, footers, attachments, digital signatures, watermarks, and bookmarks.
3. Protect your PDF documents with encryption, passwords, digital signatures, and metadata.
4. Supports full multithreading and asynchronous operations to maximize performance in essential applications.

Explore more than [50 advanced functionalities for PDF manipulation](https://ironpdf.com/features/) that IronPDF offers.

## Getting Started with IronPDF for Node.js

1. **Install Node.js**: Begin by downloading and installing the latest version of Node.js from the [official Node.js website](https://nodejs.org/en).
2. **Install the `@ironpdf` package**: Execute the following command in your terminal to install IronPDF via NPM:

   ```shell
   npm i @ironsoftware\/ironpdf
   ```

3. **Install the `IronPDF Engine`**: Download the suitable binary for your operating system:

   *For Windows x64*:

   ```bash
   npm install @ironsoftware/ironpdf-engine-windows-x64
   ```

   *For Windows x86*:

   ```bash
   npm install @ironsoftware/ironpdf-engine-windows-x86
   ```

   *For Linux x64*:

   ```bash
   npm install @ironsoftware/ironpdf-engine-linux-x64
   ```

   *For macOS x64*:

   ```bash
   npm install @ironsoftware/ironpdf-engine-macos-x64
   ```

   *For macOS/ARM*:

   ```bash
   npm install @ironsoftware/ironpdf-engine-macos-arm64
   ```

   _(IronPDF will automatically attempt to download and set up the appropriate binary for your system when you run your Node.js project for the first time. If your system blocks this, you'll need to manually use the above commands.)_

4. **Apply a License Key (optional)**: To use IronPDF in your Node.js project, configure the `IronPdfGlobalConfig.licenseKey` with a valid license key:

   ```javascript
   // Import the configuration module
   import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

   (async () => {
       // Set up a license key in the configuration object
       const IronPdfConfig = {
           licenseKey: "IRONPDF-MYLICENSE-KEY-1EF01",
       };

       // Update the global settings with your configuration
       IronPdfGlobalConfig.setConfig(IronPdfConfig);
   })();
   ```

   _(Note: If you see the following warning, please include `"type": "module"` at the top level of your `package.json` file to resolve it.)_

5. **Enable Debug Mode (optional)**: Activate debugging in your Node.js project to track issues more efficiently. This also generates a log file in your project directory:

   ```javascript
   // Import the configuration module
   import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

   (async () => {
       // Fetch the current configuration
       let config = IronPdfGlobalConfig.getConfig();
       // Turn on debug mode
       config.debugMode = true;
   })();
   ```

## Using IronPDF for Node.js

### Convert HTML to PDF

Utilize `PdfDocument.fromHtml` to transform raw HTML content into high-quality PDFs. This can be used with both HTML strings and file paths.

```javascript
// Import the necessary module
import { PdfDocument } from "@ironsoftware/ironpdf";

/* Transform HTML text into a PDF */
PdfDocument.fromHtml("<h1>Welcome to IronPDF!</h1><p><small>This PDF is generated using IronPDF for Node.js</small></p>")
.then((pdf) => {
    // Output the created PDF to a file
    pdf.saveAs("./example-html-to-pdf.pdf");
});

/* Turn an HTML document into a PDF */
PdfDocument.fromHtml("./sample.html")
.then((pdf) => {
    // Output the created PDF to a file
    pdf.saveAs("./document-html-to-pdf.pdf");
});
```

### Convert URL to PDF

`PdfDocument.fromUrl` captures a webpage's content from its URL and converts it to PDF format.

```javascript
// Import the necessary module
import { PdfDocument } from "@ironsoftware/ironpdf";

/* Fetch and convert a web page to a PDF */
(async () => {
   const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
   // Store the PDF to a local file
   await pdf.saveAs("./webpage-to-pdf.pdf");
})();
```

## Licensing & Support Available

[Acquire a production license for IronPDF](https://ironpdf.com/licensing), or [apply for a free trial](https://ironpdf.com/trial-license) to evaluate IronPDF before purchasing.

For further assistance and queries, please reach out to [our support team](https://ironpdf.com/#live-chat-support).