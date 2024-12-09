<section class="e22ba268 ph2 ph0-ns ml0-ns mr3-ns black-80" id="tabpanel-readme" aria-labelledby="package-tab-readme" role="tabpanel" data-attribute="">
<article>

![Build Status: 3158 tests passed](https://camo.githubusercontent.com/2920a67f31140f5ded965f5aa60bec6c7bba9845545a3bd99c31192a4cc223fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6275696c642d25323025453225394325393325323033313538253230746573747325323070617373656425323028302532306661696c6564292532302d3130374331303f6c6f676f3d76697375616c73747564696f)

![Windows Compatibility](https://camo.githubusercontent.com/4c1f2a3927a0c0db490dd617df8f04d4f8cf16f0db1fc691e2abaecaa807b478/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d77696e646f7773)

![macOS Compatibility](https://camo.githubusercontent.com/a7c2bac7216e874a47cf425683eccc909c5975c853c262ab21e10afd6e85631a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6170706c65)

![Linux Compatibility](https://camo.githubusercontent.com/a754f6db6b10f740b3ff9dbe658bacfd30f792a2bec86f074e16df23124667dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6c696e7578266c6f676f436f6c6f723d7768697465)

![Docker Compatibility](https://camo.githubusercontent.com/15f959fcff5db750437c330dbdda6c44f6be608c372baa673de4207a9fae739e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)

![Online Support Availability: 24/5](https://camo.githubusercontent.com/f504b053ad43015d996953328c6e4065b2f4b82f27759e36f4f380a46784fa5e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c697665253230436861743a2d32342f352d707572706c653f6c6f676f3d676f6f676c6563686174266c6f676f436f6c6f723d7768697465)
```

Here's the paraphrased section of the article:

-----
# IronPDF - Manage PDF Documents with Node.js

[![IronPDF NPM Trial Banner](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/nuget-trial-banner-large.png)](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/nuget-trial-banner-large.png)

IronPDF is an advanced library crafted by Iron Software, designed to enable software developers to create, modify, and extract content from PDF files efficiently.

## Capabilities

[](#capabilities)

IronPDF is highly proficient in:

  * Creating PDF documents from HTML, URLs, JavaScript, CSS, and various image formats.
  * Incorporating headers, footers, and digital signatures.
  * Manipulating PDF documents by merging, splitting, adding, copying, and deleting pages.
  * Enhancing performance through comprehensive multithreading and asynchronous processing support.

### Cross-Platform Support for IronPDF:

[IronPDF](#cross-platform-support-for-ironpdf) is engineered to work seamlessly across various platforms, ensuring a flexible integration with:

  * Node.js versions 12.0 and above
  * Operating Systems: Windows, Linux, MacOS
  * Containerization with Docker

![IronPDF Platform Compatibility](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/cross-platform-compatibility.png)

## Utilizing IronPDF

[](#utilizing-ironpdf)

IronPDF is a robust library for Node.js that harnesses the capabilities of a powerful Chrome Engine to generate PDFs from HTML content, files, or web URLs. Given that PDF rendering is resource-intensive, it's advisable to handle this process on the server-side. Frontend technologies such as ReactJs and Angular can be used to transmit rendering tasks to the server, which performs the heavy lifting. The results are then sent back to the frontend for display.

Here's the paraphrased section with the URL paths resolved:

-----

## Setup Instructions

[](#setup-instructions)

For npm users:

```bash
npm install @ironsoftware/ironpdf
```

For yarn users:

```bash
yarn add @ironsoftware/ironpdf
```

IronPdf necessitates the IronPDF Engine binary, which automatically downloads upon initial execution. Alternatively, you can opt to manually install it as an npm package for optimal configuration (this is optional but recommended).

> **_IMPORTANT:_** It's crucial to ensure that the IronPDF Engine version aligns with your IronPDF library version.

### Installation for Windows x64 Systems

[](#installation-for-windows-x64-systems)

To install using npm, execute:

```sh
npm install @ironsoftware/ironpdf-engine-windows-x64
```

Alternatively, for yarn users:

```sh
yarn add @ironsoftware/ironpdf-engine-windows-x64
```

### For Windows x86

[](#for-windows-x86)

Installation via npm:

```bash
npm install @ironsoftware/ironpdf-engine-windows-x86
```

Installation via yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-windows-x86
```

### For Linux x64

[](#for-linux-x64)

Installation with npm:

```bash
npm install @ironsoftware/ironpdf-engine-linux-x64
```

Installation with yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-linux-x64
```

### macOS x64 Installation

[](#macos-x64-installation)

For installations on macOS x64, you can use npm:

```bash
npm install @ironsoftware/ironpdf-engine-macos-x64
```

Alternatively, if you prefer Yarn, use:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-x64
```

### For macOS ARM

[](#for-macos-arm)

To install using npm, execute:

```bash
npm install @ironsoftware/ironpdf-engine-macos-arm64
```

For installation via yarn, use:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-arm64
```

## Usage

[](#usage)

Below is an example demonstrating how to convert HTML to PDF using IronPDF:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the IronPDF library

// Convert HTML content to PDF asynchronously
(async () => {
  // Convert an HTML string to PDF
  const pdf = await PdfDocument.fromHtml("<h1>Example Content</h1>");
  // Save the resulting PDF file
  await pdf.saveAs("output-from-html.pdf");
})();
```

Alternatively, you can convert content from a URL to PDF:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the IronPDF library

// Convert a webpage to PDF asynchronously
(async () => {
  // Fetch and convert the specified URL to a PDF
  const pdf = await PdfDocument.fromUrl("https://www.example.com");
  // Save the PDF to a file
  await pdf.saveAs("output-from-url.pdf");
})();
```

To add a stamp to an existing PDF:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the IronPDF library

// Stamping a PDF with an image asynchronously
(async () => {
  // Load the PDF you want to stamp
  const pdf = await PdfDocument.fromFile("existing-document.pdf");
  // Stamp it with HTML image
  await pdf.stampHtml("![](https://ironpdf.com/img/products/ironpdf-logo-text.svg)");
  // Save the stamped PDF
  await pdf.saveAs("stamped-output.pdf");
})();
```
This section provides straightforward code examples to encourage real-world application of IronPDF for creating, modifying, and enhancing PDF documents within Node.js projects.

Here is the paraphrased section, with URL paths resolved to `ironpdf.com`:

-----
 ## Features Overview

[](#features-overview)

[![IronPDF Feature Overview](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png)](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png) 

Explore the comprehensive feature set of IronPDF displayed in the table, depicting a wide range of functionalities available for enhancing your PDF operations within Node.js applications.

## Available Licensing and Support

[](#available-licensing-and-support)

Should you require additional assistance or if you have any questions, please feel free to reach out to us via email at: <support@ironsoftware.com>
```

## Readme

### Keywords

  * [IronPDF](https://ironpdf.com/search?q=keywords:IronPDF)
  * [pdf](https://ironpdf.com/search?q=keywords:pdf)
  * [html](https://ironpdf.com/search?q=keywords:html)
  * [document](https://ironpdf.com/search?q=keywords:document)
  * [chrome](https://ironpdf.com/search?q=keywords:chrome)
  * [invoice](https://ironpdf.com/search?q=keywords:invoice)
  * [headless-chrome](https://ironpdf.com/search?q=keywords:headless-chrome)
  * [html to pdf nodejs](https://ironpdf.com/search?q=keywords:"html to pdf nodejs")
  * [nodejs html to pdf](https://ironpdf.com/search?q=keywords:"nodejs html to pdf")
  * [node html to pdf](https://ironpdf.com/search?q=keywords:"node html to pdf")
  * [html to pdf node](https://ironpdf.com/search?q=keywords:"html to pdf node")
  * [html to pdf in nodejs](https://ironpdf.com/search?q=keywords:"html to pdf in nodejs")
  * [node js html to pdf](https://ironpdf.com/search?q=keywords:"node js html to pdf")
  * [nodejs generate pdf from html](https://ironpdf.com/search?q=keywords:"nodejs generate pdf from html")
  * [nodejs convert html to pdf](https://ironpdf.com/search?q=keywords:"nodejs convert html to pdf")
  * [nodejs create pdf from html](https://ironpdf.com/search?q=keywords:"nodejs create pdf from html")
  * [how to convert html to pdf in node js](https://ironpdf.com/search?q=keywords:"how to convert html to pdf in node js")
  * [convert html to pdf nodejs](https://ironpdf.com/search?q=keywords:"convert html to pdf nodejs")
  * [generate pdf from html nodejs](https://ironpdf.com/search?q=keywords:"generate pdf from html nodejs")
  * [node js generate pdf from html](https://ironpdf.com/search?q=keywords:"node js generate pdf from html")
  * [node js convert html to pdf](https://ironpdf.com/search?q=keywords:"node js convert html to pdf")
  * [html to pdf in node js](https://ironpdf.com/search?q=keywords:"html to pdf in node js")
  * [convert html to pdf node](https://ironpdf.com/search?q=keywords:"convert html to pdf node")
  * [html-pdf-node](https://ironpdf.com/search?q=keywords:html-pdf-node)
  * [node js pdf generator](https://ironpdf.com/search?q=keywords:"node js pdf generator")
  * [html to pdf nodejs without puppeteer](https://ironpdf.com/search?q=keywords:"html to pdf nodejs without puppeteer")
  * [convert html to pdf in node js](https://ironpdf.com/search?q=keywords:"convert html to pdf in node js")
  * [nodejs pdf generator from html](https://ironpdf.com/search?q=keywords:"nodejs pdf generator from html")
  * [node generate pdf from html](https://ironpdf.com/search?q=keywords:"node generate pdf from html")
  * [nodejs pdf generator](https://ironpdf.com/search?q=keywords:"nodejs pdf generator")
  * [html to pdf node.js](https://ironpdf.com/search?q=keywords:"html to pdf node.js")
  * [html to pdf node js](https://ironpdf.com/search?q=keywords:"html to pdf node js")
  * [html pdf node](https://ironpdf.com/search?q=keywords:"html pdf node")
  * [node pdf library](https://ironpdf.com/search?q=keywords:"node pdf library")
  * [nodejs pdf library](https://ironpdf.com/search?q=keywords:"nodejs pdf library")
  * [html-pdf nodejs](https://ironpdf.com/search?q=keywords:"html-pdf nodejs")
  * [html-pdf node](https://ironpdf.com/search?q=keywords:"html-pdf node")
  * [node.js html to pdf](https://ironpdf.com/search?q=keywords:"node.js html to pdf")
  * [sign pdf nodejs](https://ironpdf.com/search?q=keywords:"sign pdf nodejs")
  * [node create pdf from html](https://ironpdf.com/search?q=keywords:"node create pdf from html")
  * [node pdf api](https://ironpdf.com/search?q=keywords:"node pdf api")
  * [node convert html to pdf](https://ironpdf.com/search?q=keywords:"node convert html to pdf")
  * [node js pdf generator from html](https://ironpdf.com/search?q=keywords:"node js pdf generator from html")
  * [nodejs pdf viewer](https://ironpdf.com/search?q=keywords:"nodejs pdf viewer")
  * [html to pdf converter nodejs](https://ironpdf.com/search?q=keywords:"html to pdf converter nodejs")
  * [node pdf generator](https://ironpdf.com/search?q=keywords:"node pdf generator")
  * [generate pdf nodejs](https://ironpdf.com/search?q=keywords:"generate pdf nodejs")
  * [create pdf from html nodejs](https://ironpdf.com/search?q=keywords:"create pdf from html nodejs")
  * [nodejs pdf from html](https://ironpdf.com/search?q=keywords:"nodejs pdf from html")
  * [node js create pdf from html template](https://ironpdf.com/search?q=keywords:"node js create pdf from html template")
  * [node js download pdf from url](https://ironpdf.com/search?q=keywords:"node js download pdf from url")
  * [nodejs generate pdf from template](https://ironpdf.com/search?q=keywords:"nodejs generate pdf from template")
  * [convert html to pdf in nodejs](https://ironpdf.com/search?q=keywords:"convert html to pdf in nodejs")
  * [nodejs create pdf file](https://ironpdf.com/search?q=keywords:"nodejs create pdf file")
  * [generate pdf in nodejs](https://ironpdf.com/search?q=keywords:"generate pdf in nodejs")
  * [node js generate pdf from template](https://ironpdf.com/search?q=keywords:"node js generate pdf from template")
  * [pdf generator node js](https://ironpdf.com/search?q=keywords:"pdf generator node js")
  * [nodejs convert pdf to image](https://ironpdf.com/search?q=keywords:"nodejs convert pdf to image")
  * [generate pdf node js](https://ironpdf.com/search?q=keywords:"generate pdf node js")
  * [pdf conversion in node.js](https://ironpdf.com/search?q=keywords:"pdf conversion in node.js")
  * [create pdf in node js](https://ironpdf.com/search?q=keywords:"create pdf in node js")
  * [node pdf sdk](https://ironpdf.com/search?q=keywords:"node pdf sdk")

### Keywords

Explore these keywords to learn more about how IronPDF can enhance your Node.js applications:

- [IronPDF](https://ironpdf.com/search?q=keywords:IronPDF)
- [pdf](https://ironpdf.com/search?q=keywords:pdf)
- [html](https://ironpdf.com/search?q=keywords:html)
- [document](https://ironpdf.com/search?q=keywords:document)
- [chrome](https://ironpdf.com/search?q=keywords:chrome)
- [invoice](https://ironpdf.com/search?q=keywords:invoice)
- [headless-chrome](https://ironpdf.com/search?q=keywords:headless-chrome)
- [html to pdf nodejs](https://ironpdf.com/search?q=keywords:"html to pdf nodejs")
- Numerous variations of HTML to PDF conversions specifically tailored for Node.js developers:
  - [nodejs html to pdf](https://ironpdf.com/search?q=keywords:"nodejs html to pdf")
  - [node html to pdf](https://ironpdf.com/search?q=keywords:"node html to pdf")
  - Further explorations into PDF generation, handling, and manipulation in a Node.js environment:
    - [nodejs generate pdf from html](https://ironpdf.com/search?q=keywords:"nodejs generate pdf from html")
    - [nodejs convert html to pdf](https://ironpdf.com/search?q=keywords:"nodejs convert html to pdf")
  - And many more related topics covering different aspects and capabilities of using IronPDF in Node.js to manage and manipulate PDF files:
    - [nodejs pdf generator](https://ironpdf.com/search?q=keywords:"nodejs pdf generator")
    - [generate pdf in nodejs](https://ironpdf.com/search?q=keywords:"generate pdf in nodejs")
    - [nodejs pdf from html](https://ironpdf.com/search?q=keywords:"nodejs pdf from html")

This comprehensive list ensures developers can easily navigate and find resources for specific functions and features provided by IronPDF.

