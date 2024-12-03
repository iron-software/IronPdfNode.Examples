# IronPDF for Node.js - Harnessing PDF Capabilities in Node.js

***Based on <https://ironpdf.com/docs/docs/>***


IronPDF is a robust PDF library tailored to facilitate the generation and customization of PDF documents through Node.js programming.

Developed by Iron Software, this library is part of a suite of efficient and high-performance document processing tools.

IronPDF is also accessible for [.NET (C# and VB.NET)](https://ironpdf.com), [Java PDF Library](https://ironpdf.com/java/), and [Python PDF Library](https://ironpdf.com/python/).

## Primary Features of IronPDF for Node.js

1. Create PDFs using HTML, CSS, JavaScript, images, and various other file formats.
2. Enhance PDFs with headers, footers, attachments, digital watermarks, signatures, and bookmarks.
3. Protect PDF documents with passwords, digital signatures, metadata, and additional security measures.
4. Support full multithreading and asynchronous operations, ensuring optimal performance in critical applications.

IronPDF boasts more than [50 sophisticated functionalities](https://ironpdf.com/features/) for the creation, customization, and modification of PDF documents.

## Getting Started with IronPDF for Node.js

1. **Download Node.js**: Acquire the most recent version of Node.js from the [official Node.js website](https://nodejs.org/en).
2. **Install the `@ironpdf` package**: Execute the following command in your terminal to install IronPDF via NPM:

   ```shell
   npm install @ironsoftware/ironpdf
   ```

3. **Set up the `IronPDF Engine`**: Depending on your operating system, install the appropriate IronPDF engine:

   *For Windows x64*:

   ```shell
   npm install @ironsoftware/ironpdf-engine-windows-x64
   ```

   *For Windows x86*:

   ```shell
   npm install @ironsoftware/ironpdf-engine-windows-x86
   ```

   *For Linux x64*:

   ```shell
   npm install @ironsoftware/ironpdf-engine-linux-x64
   ```

   *For macOS x64*:

   ```shell
   npm install @ironsoftware/ironpdf-engine-macos-x64
   ```

   *For macOS/ARM*:

   ```shell
   npm install @ironsoftware/ironpdf-engine-macos-arm64
   ```

   _(Note: IronPDF should automatically download and install the right binary when your Node.js project runs for the first time. If this process is blocked, please follow the commands listed.)_

4. **Activate a License Key (optional)**: To utilize IronPDF in your Node.js project, assign a valid license key to the `IronPdfGlobalConfig.licenseKey` property:

   _(Encountering the below warning? Add "type": "module" as a primary entry in your package.json. This resolves an ES module loading issue flagged by Node.js.)_

   ```node
   import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

   (async () => {
       const config = {
           licenseKey: "YOUR-IRONPDF-LICENSE-KEY",
       };

       IronPdfGlobalConfig.setConfig(config);
   })();
   ```

5. **Enable Debugging (optional)**: To activate debugging mode in your project, set the `IronPdfGlobalConfig.debugMode` attribute to true. This creates a log file in your current directory:

   ```node
   import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";
   (async () => {
       var config = IronPdfGlobalConfig.getConfig();
       config.debugMode = true;
   })();
   ```

## Utilizing IronPDF in Node.js

### HTML to PDF Conversion

Convert HTML content directly to a PDF document using `PdfDocument.fromHtml`. This can handle both HTML strings or file paths to local HTML files.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

// Convert an HTML String to a PDF
PdfDocument.fromHtml("<h1>Welcome</h1><p>Powered by IronPDF for Node.js</p>")
.then((pdf) => {
    pdf.saveAs("./example-html-to-pdf.pdf");
});

// Convert an HTML File to a PDF
PdfDocument.fromHtml("./sample.html")
.then((pdf) => {
    pdf.saveAs("./sample-html-file-to-pdf.pdf");
});
```

### URL to PDF Conversion

Utilize `PdfDocument.fromUrl` to retrieve and convert the content of a web page into a PDF file.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
await pdf.saveAs("./webpage-to-pdf.pdf");
```

## Licensing & Support

[Acquire a license key for IronPDF](https://ironpdf.com/licensing) to use this library in a production environment. Alternatively, you can [apply for a free trial license](https://ironpdf.com/trial-license) to assess IronPDF's capabilities before purchasing.

For further assistance, please [reach out to our support team](https://ironpdf.com#live-chat-support).