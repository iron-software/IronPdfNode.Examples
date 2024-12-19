# IronPDF for Node.js - Effortlessly Create, Edit, and Read PDFs

***Based on <https://ironpdf.com/docs/docs/>***


IronPDF streamlines the creation and customization of PDF documents through Node.js, offering a robust PDF library courtesy of Iron Software, which develops a suite of advanced and high-performance document processing tools.

IronPDF can also be used in other environments, including [.NET (C# and VB.NET)](https://ironpdf.com), [Java PDF Library](https://ironpdf.com/java/), and [Python PDF Library](https://ironpdf.com/python/).

## IronPDF's Key Features for Node.js

1. Create PDFs from various sources like HTML, CSS, JavaScript, images, and other file types
2. Enhance PDFs with headers, footers, attachments, digital signatures, watermarks, and bookmarks
3. Protect PDFs with passwords, digital signatures, metadata, and more for security
4. Support full multithreading and asynchronous tasks for top performance in crucial applications

IronPDF boasts over [50 advanced features](https://ironpdf.com/features/) for rich PDF creation and editing capabilities.

## Getting Started with IronPDF for Node.js

1. **Node.js Installation**: Ensure the latest Node.js is installed from the [official Node.js website](https://nodejs.org/en).
2. **IronPDF Package Installation**: Run the following command in your terminal to install IronPDF using NPM:

   ```shell
   npm i @ironsoftware/ironpdf
   ```

3. **IronPDF Engine Installation**: Install the engine specific to your OS as follows:

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

   _(IronPDF automatically attempts to download and install the correct binary for your system at the first run of your Node.js project. Should this be blocked by your system, refer to the commands above.)_

4. **License Key Application (optional)**: To unlock IronPDF's full capabilities, set the `IronPdfGlobalConfig.licenseKey` in your Node.js project:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

(async () => {
    // Set your license key
    const config = {
        licenseKey: "IRONPDF-MYLICENSE-KEY-1EF01",
    };

    IronPdfGlobalConfig.setConfig(config);
})();
```

5. **Debug Mode (optional)**: Enable debugging to generate a detailed log file:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";
(async () => {
    var config = IronPdfGlobalConfig.getConfig();
    config.debugMode = true;
})();
```

## Utilizing IronPDF in Node.js

### HTML to PDF Conversion

Utilize `PdfDocument.fromHtml` for transforming HTML into PDFs, whether it is raw HTML code or an HTML file.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

/* HTML string to PDF conversion */
PdfDocument.fromHtml("<h1>Hello world!</h1><p><small>A PDF by IronPDF for Node.js</small></p>")
.then((pdf) => {
    pdf.saveAs("./html-string-to-pdf.pdf");
});

/* HTML file to PDF conversion */
PdfDocument.fromHtml("./index.html")
.then((pdf) => {
    pdf.saveAs("./html-file-to-pdf.pdf");
});
```

### URL to PDF Conversion

Convert web page contents directly into a PDF using `PdfDocument.fromUrl`.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";

/* URL to PDF conversion */
const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
await pdf.saveAs("./url_to_pdf.pdf");
```

## Licensing & Support

[Obtain a license key for IronPDF](https://ironpdf.com/licensing) for production use, or try IronPDF with a [free trial license](https://ironpdf.com/trial-license).

For further assistance, please [reach out to our support](https://ironpdf.com/#live-chat-support).