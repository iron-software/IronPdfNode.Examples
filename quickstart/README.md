# IronPDF for Node.js - Comprehensive PDF Manipulation in Node.js Scripts

***Based on <https://ironpdf.com/docs/docs/>***


IronPDF is a robust PDF management library that streamlines the task of programmatically generating and editing PDFs in Node.js environments.

Developed by Iron Software, IronPDF is part of a suite of efficient, advanced document management tools that the company offers.

IronPDF is also accessible for different programming environments, including [.NET (C# and VB.NET)](https://ironpdf.com/), [Java PDF Library](https://ironpdf.com/java/), and [Python PDF Library](https://ironpdf.com/python/).

## Core Functionalities of IronPDF for Node.js

1. Create PDFs from HTML, CSS, JavaScript, images, and other content types
2. Enhance PDFs with headers, footers, attachments, watermarks, digital signatures, and bookmarks
3. Protect PDF documents with encryption, digital signatures, metadata, and access restrictions
4. Support for multithreading and asynchronous tasks to ensure superior performance in critical applications

IronPDF offers over [50 sophisticated functionalities](https://ironpdf.com/features/) dedicated to the generation, styling, and modification of PDF files.

## Setting Up IronPDF for Node.js

1. **Node.js Installation**: First, ensure that you have the latest version of Node.js, which can be installed from the [official Node.js website](https://nodejs.org/en).
2. **IronPDF Package Installation**: Use the following NPM command to install the IronPDF package:

   ```shell
   npm i @ironsoftware/ironpdf
   ```

3. **Install the `IronPDF Engine`**: Depending on your operating system, install the appropriate IronPDF binary:

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

   _IronPDF will endeavor to automatically download and install the correct binary for your system when your Node.js project is executed for the first time. If this automated process is blocked, manual installation of the binary might be necessary using the above commands._

4. **License Key Activation (optional)**: Within your Node.js project, apply a valid license key by setting the `IronPdfGlobalConfig.licenseKey`:

_(Note: If you encounter a warning asking to set "type": "module" in your package.json, please do so at the top level of the file.)_

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

(async () => {
    const IronPdfConfig = {
        licenseKey: "IRONPDF-MYLICENSE-KEY-1EF01",
    };

    IronPdfGlobalConfig.setConfig(IronPdfConfig);
})();
```

5. **Enable Debug Mode (optional)**: Activate debug mode by setting the `IronPdfGlobalConfig.debugMode` property to true, which will also generate a log file in the directory:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";
(async () => {
    var config = IronPdfGlobalConfig.getConfig();
    config.debugMode = true;
})();
```

## Utilizing IronPDF in Node.js

### HTML to PDF Conversion

Using `PdfDocument.fromHtml`, you can transform HTML content into PDF files. This function works with HTML strings or paths to HTML documents.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

/* Convert an HTML String to a PDF */
PdfDocument.fromHtml("<h1>Welcome to your PDF</h1><p><small>Powered by IronPDF for Node.js!</small></p>")
.then((pdf) => {
    pdf.saveAs("./created-pdf-from-string.pdf");
});

/* Convert an HTML File to a PDF */
PdfDocument.fromHtml("./example.html")
.then((pdf) => {
    pdf.saveAs("./created-pdf-from-file.pdf");
});
```

### URL to PDF Conversion

`PdfDocument.fromUrl` captures content from a specified URL and converts it to a PDF document.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
await pdf.saveAs("./web-page-to-pdf.pdf");
```

## Licensing & Support Options

To deploy IronPDF in a production environment, you may [purchase a license key](https://ironpdf.com/licensing). For a test run, consider applying for a [free trial license](https://ironpdf.com/trial-license).

For additional support and queries, please refer to our [support team](https://ironpdf.com/#live-chat-support).