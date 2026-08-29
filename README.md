<section class="e22ba268 ph2 ph0-ns ml0-ns mr3-ns black-80" id="tabpanel-readme" aria-labelledby="package-tab-readme" role="tabpanel" data-attribute="">
<article>

![Build Passed](https://camo.githubusercontent.com/2920a67f31140f5ded965f5aa60bec6c7bba9845545a3bd99c31192a4cc223fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6275696c642d25323025453225394325393325323033313538253230746573747325323070617373656425323028302532306661696c6564292532302d3130374331303f6c6f676f3d76697375616c73747564696f)
![Windows Compatibility](https://camo.githubusercontent.com/4c1f2a3927a0c0db490dd617df8f04d4f8cf16f0db1fc691e2abaecaa807b478/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d77696e646f7773)
![macOS Compatibility](https://camo.githubusercontent.com/a7c2bac7216e874a47cf425683eccc909c5975c853c262ab21e10afd6e85631a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6170706c65)
![Linux Compatibility](https://camo.githubusercontent.com/a754f6db6b10f740b3ff9dbe658bacfd30f792a2bec86f074e16df23124667dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6c696e7578266c6f676f436f6c6f723d7768697465)
![Docker Compatibility](https://camo.githubusercontent.com/15f959fcff5db750437c330dbdda6c44f6be608c372baa673de4207a9fae739e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)
![Live Chat Support](https://camo.githubusercontent.com/f504b053ad43015d996953328c6e4065b2f4b82f27759e36f4f380a46784fa5e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c697665253230436861743a2d32342f352d707572706c653f6c6f676f3d676f6f676c6563686174266c6f676f436f6c6f723d7768697465)

-----

# IronPDF - Simplifying PDF Operations in Node.js Projects

![](https://raw.githubusercontent.com/iron-software/iron-nuget-assets/main/IronPDF-nodejs-readme/nuget-trial-banner-large.png)

IronPDF, proudly crafted and supported by Iron Software, allows Software Engineers with tools to generate, modify, and retrieve content from PDF documents efficiently.

## Capabilities
IronPDF stands out for its:

  * Ability to create PDFs using HTML, URLs, JavaScript, CSS, and various image formats
  * Functionality to include headers, footers, and signatures in documents
  * Tools for merging, splitting, adding, copying, and deleting PDF pages
  * Enhanced performance through comprehensive multithreading and asynchronous operations

### Cross-Platform Support and Compatibility for IronPDF:

IronPDF is fully compatible with multiple platforms, ensuring that developers can integrate its functionalities within various environments:

* Compatible with Node.js version 12.0 and above
* Supports operating systems including Windows, Linux, macOS, and container technology like Docker

![IronPDF Cross Platform Compatibility](https://ironpdf.com/IronPDF-nodejs-readme/cross-platform-compatibility.png)

## Utilizing IronPDF
IronPDF uses a Chrome Engine to convert HTML strings, files, and online URLs into PDF documents within Node.js environments. Given the intensive nature of the rendering process, it is advised to perform these operations on the server-side. This approach allows frontend frameworks such as ReactJs and Angular to transfer the heavy rendering tasks to the server and then retrieve the final PDF to display on the client side.

## Installation Instructions
To install using npm, execute the following command:

```bash
npm install @ironsoftware/ironpdf
```

Alternatively, you can use yarn:

```bash
yarn add @ironsoftware/ironpdf
```

IronPDF necessitates the IronPDF Engine binary. This is automatically downloaded upon the initial usage. However, for optimal performance, it is advised to pre-install it using npm (this step is optional but recommended).

> **_NOTE:_** Ensure that the versions of IronPDF and the IronPDF Engine binary are aligned and compatible.

### Windows x64 Installation Instructions
For npm users:

```bash
npm install @ironsoftware/ironpdf-engine-windows-x64
```

For yarn users:

```bash
yarn add @ironsoftware/ironpdf-engine-windows-x64
```

### For the Windows x86 Architecture
To install using npm:

```bash
npm install @ironsoftware/ironpdf-engine-windows-x86
```

To install using yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-windows-x86
```

### For 64-bit Linux Systems
To install using npm, execute:

```bash
npm install @ironsoftware/ironpdf-engine-linux-x64
```

Alternatively, to install using yarn, run:

```bash
yarn add @ironsoftware/ironpdf-engine-linux-x64
```

### For macOS x64 Installation
Install using npm:

```bash
npm install @ironsoftware/ironpdf-engine-macos-x64
```

Or, using yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-x64
```

### macOS Arm Installation
For installation via npm, execute:

```bash
npm install @ironsoftware/ironpdf-engine-macos-arm64
```

For installation using yarn, run:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-arm64
```

## Usage
Here are some examples of how to work with HTML-to-PDF conversions using IronPDF:

For converting an HTML string to a PDF, use the following code:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the necessary class

// Convert HTML to PDF
(async () => {
    // Convert the HTML content to a PDF
    const pdf = await PdfDocument.fromHtml("<h1>Example</h1>");
    // Save the generated PDF
    await pdf.saveAs("example-pdf.pdf");
})();
```

To convert a webpage to PDF, follow this snippet:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the necessary class

// URL to PDF
(async () => {
    // Convert the content of a URL to a PDF
    const pdf = await PdfDocument.fromUrl("https://www.example.com");
    // Save the PDF file
    await pdf.saveAs("webpage-pdf.pdf");
})();
```

For adding a stamp to a PDF:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf"; // Import the necessary class for PDF operations

// Stamp a PDF
(async () => {
    // Load an existing PDF
    const pdf = await PdfDocument.fromFile("example.pdf");
    // Apply an HTML stamp to the PDF
    await pdf.stampHtml("<img src='https://ironpdf.com/img/products/ironpdf-logo-text.svg'>");
    // Save the modified PDF
    await pdf.saveAs("stamped-example.pdf");
})();
```

These examples demonstrate how to utilize IronPDF for creating and modifying PDF files by converting from HTML strings, URLs, and adding stamps to existing documents.

## Feature Overview
[![IronPDF Capabilities](https://raw.githubusercontent.com/iron-software/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png)](https://raw.githubusercontent.com/iron-software/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png)

## Licensing & Support Options

For additional assistance and information, feel free to reach out to us via email at: <support@ironsoftware.com>

## Readme Overview

### Pertinent Keywords

* [IronPDF](https://www.npmjs.com/search?q=keywords:IronPDF)
* [pdf](https://www.npmjs.com/search?q=keywords:pdf)
* [html](https://www.npmjs.com/search?q=keywords:html)
* [document](https://www.npmjs.com/search?q=keywords:document)
* [chrome](https://www.npmjs.com/search?q=keywords:chrome)
* [invoice](https://www.npmjs.com/search?q=keywords:invoice)
* [headless-chrome](https://www.npmjs.com/search?q=keywords:headless-chrome)
* [html to pdf nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20nodejs%22)
* [nodejs html to pdf](https://www.npmjs.com/search?q=keywords:%22nodejs%20html%20to%20pdf%22)
* [node html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20html%20to%20pdf%22)
* [html to pdf node](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node%22)
* [html to pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20in%20nodejs%22)
* [node js html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20js%20html%20to%20pdf%22)
* [nodejs generate pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20generate%20pdf%20from%20html%22)
* [nodejs convert html to pdf](https://www.npmjs.com/search?q=keywords:%22nodejs%20convert%20html%20to%20pdf%22)
* [nodejs create pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20create%20pdf%20from%20html%22)
* [how to convert html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22how%20to%20convert%20html%20to%20pdf%20in%20node%20js%22)
* [convert html to pdf nodejs](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20nodejs%22)
* [generate pdf from html nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20from%20html%20nodejs%22)
* [node js generate pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20js%20generate%20pdf%20from%20html%22)
* [node js convert html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20js%20convert%20html%20to%20pdf%22)
* [html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20in%20node%20js%22)
* [convert html to pdf node](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20node%22)
* [html-pdf-node](https://www.npmjs.com/search?q=keywords:html-pdf-node)
* [node js pdf generator](https://www.npmjs.com/search?q=keywords:%22node%20js%20pdf%20generator%22)
* [html to pdf nodejs without puppeteer](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20nodejs%20without%20puppeteer%22)
* [convert html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20in%20node%20js%22)
* [nodejs pdf generator from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20generator%20from%20html%22)
* [node generate pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20generate%20pdf%20from%20html%22)
* [nodejs pdf generator](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20generator%22)
* [html to pdf node.js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node.js%22)
* [html to pdf node js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node%20js%22)
* [html pdf node](https://www.npmjs.com/search?q=keywords:%22html%20pdf%20node%22)
* [node pdf library](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20library%22)
* [nodejs pdf library](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20library%22)
* [html-pdf nodejs](https://www.npmjs.com/search?q=keywords:%22html-pdf%20nodejs%22)
* [html-pdf node](https://www.npmjs.com/search?q=keywords:%22html-pdf%20node%22)
* [node.js html to pdf](https://www.npmjs.com/search?q=keywords:%22node.js%20html%20to%20pdf%22)
* [sign pdf nodejs](https://www.npmjs.com/search?q=keywords:%22sign%20pdf%20nodejs%22)
* [node create pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20create%20pdf%20from%20html%22)
* [node pdf api](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20api%22)
* [node convert html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20convert%20html%20to%20pdf%22)
* [node js pdf generator from html](https://www.npmjs.com/search?q=keywords:%22node%20js%20pdf%20generator%20from%20html%22)
* [nodejs pdf viewer](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20viewer%22)
* [html to pdf converter nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20converter%20nodejs%22)
* [node pdf generator](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20generator%22)
* [generate pdf nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20nodejs%22)
* [create pdf from html nodejs](https://www.npmjs.com/search?q=keywords:%22create%20pdf%20from%20html%20nodejs%22)
* [nodejs pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20from%20html%22)
* [node js create pdf from html template](https://www.npmjs.com/search?q=keywords:%22node%20js%20create%20pdf%20from%20html%20template%22)
* [node js download pdf from url](https://www.npmjs.com/search?q=keywords:%22node%20js%20download%20pdf%20from%20url%22)
* [nodejs generate pdf from template](https://www.npmjs.com/search?q=keywords:%22nodejs%20generate%20pdf%20from%20template%22)
* [convert html to pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20in%20nodejs%22)
* [nodejs create pdf file](https://www.npmjs.com/search?q=keywords:%22nodejs%20create%20pdf%20file%22)
* [generate pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20in%20nodejs%22)
* [node js generate pdf from template](https://www.npmjs.com/search?q=keywords:%22node%20js%20generate%20pdf%20from%20template%22)
* [pdf generator node js](https://www.npmjs.com/search?q=keywords:%22pdf%20generator%20node%20js%22)
* [nodejs convert pdf to image](https://www.npmjs.com/search?q=keywords:%22nodejs%20convert%20pdf%20to%20image%22)
* [generate pdf node js](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20node%20js%22)
* [pdf conversion in node.js](https://www.npmjs.com/search?q=keywords:%22pdf%20conversion%20in%20node.js%22)
* [create pdf in node js](https://www.npmjs.com/search?q=keywords:%22create%20pdf%20in%20node%20js%22)
* [node pdf sdk](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20sdk%22)

### Searchable Keywords

* [IronPDF](https://www.npmjs.com/search?q=keywords:IronPDF)
* [pdf](https://www.npmjs.com/search?q=keywords:pdf)
* [html](https://www.npmjs.com/search?q=keywords:html)
* [document](https://www.npmjs.com/search?q=keywords:document)
* [chrome](https://www.npmjs.com/search?q=keywords:chrome)
* [invoice](https://www.npmjs.com/search?q=keywords:invoice)
* [headless-chrome](https://www.npmjs.com/search?q=keywords:headless-chrome)
* [html to pdf nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20nodejs%22)
* [nodejs html to pdf](https://www.npmjs.com/search?q=keywords:%22nodejs%20html%20to%20pdf%22)
* [node html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20html%20to%20pdf%22)
* [html to pdf node](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node%22)
* [html to pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20in%20nodejs%22)
* [node js html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20js%20html%20to%20pdf%22)
* [nodejs generate pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20generate%20pdf%20from%20html%22)
* [nodejs convert html to pdf](https://www.npmjs.com/search?q=keywords:%22nodejs%20convert%20html%20to%20pdf%22)
* [nodejs create pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20create%20pdf%20from%20html%22)
* [how to convert html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22how%20to%20convert%20html%20to%20pdf%20in%20node%20js%22)
* [convert html to pdf nodejs](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20nodejs%22)
* [generate pdf from html nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20from%20html%20nodejs%22)
* [node js generate pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20js%20generate%20pdf%20from%20html%22)
* [node js convert html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20js%20convert%20html%20to%20pdf%22)
* [html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20in%20node%20js%22)
* [convert html to pdf node](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20node%22)
* [html-pdf-node](https://www.npmjs.com/search?q=keywords:html-pdf-node)
* [node js pdf generator](https://www.npmjs.com/search?q=keywords:%22node%20js%20pdf%20generator%22)
* [html to pdf nodejs without puppeteer](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20nodejs%20without%20puppeteer%22)
* [convert html to pdf in node js](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20in%20node%20js%22)
* [nodejs pdf generator from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20generator%20from%20html%22)
* [node generate pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20generate%20pdf%20from%20html%22)
* [nodejs pdf generator](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20generator%22)
* [html to pdf node.js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node.js%22)
* [html to pdf node js](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20node%20js%22)
* [html pdf node](https://www.npmjs.com/search?q=keywords:%22html%20pdf%20node%22)
* [node pdf library](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20library%22)
* [nodejs pdf library](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20library%22)
* [html-pdf nodejs](https://www.npmjs.com/search?q=keywords:%22html-pdf%20nodejs%22)
* [html-pdf node](https://www.npmjs.com/search?q=keywords:%22html-pdf%20node%22)
* [node.js html to pdf](https://www.npmjs.com/search?q=keywords:%22node.js%20html%20to%20pdf%22)
* [sign pdf nodejs](https://www.npmjs.com/search?q=keywords:%22sign%20pdf%20nodejs%22)
* [node create pdf from html](https://www.npmjs.com/search?q=keywords:%22node%20create%20pdf%20from%20html%22)
* [node pdf api](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20api%22)
* [node convert html to pdf](https://www.npmjs.com/search?q=keywords:%22node%20convert%20html%20to%20pdf%22)
* [node js pdf generator from html](https://www.npmjs.com/search?q=keywords:%22node%20js%20pdf%20generator%20from%20html%22)
* [nodejs pdf viewer](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20viewer%22)
* [html to pdf converter nodejs](https://www.npmjs.com/search?q=keywords:%22html%20to%20pdf%20converter%20nodejs%22)
* [node pdf generator](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20generator%22)
* [generate pdf nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20nodejs%22)
* [create pdf from html nodejs](https://www.npmjs.com/search?q=keywords:%22create%20pdf%20from%20html%20nodejs%22)
* [nodejs pdf from html](https://www.npmjs.com/search?q=keywords:%22nodejs%20pdf%20from%20html%22)
* [node js create pdf from html template](https://www.npmjs.com/search?q=keywords:%22node%20js%20create%20pdf%20from%20html%20template%22)
* [node js download pdf from url](https://www.npmjs.com/search?q=keywords:%22node%20js%20download%20pdf%20from%20url%22)
* [nodejs generate pdf from template](https://www.npmjs.com/search?q=keywords:%22nodejs%20generate%20pdf%20from%20template%22)
* [convert html to pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22convert%20html%20to%20pdf%20in%20nodejs%22)
* [nodejs create pdf file](https://www.npmjs.com/search?q=keywords:%22nodejs%20create%20pdf%20file%22)
* [generate pdf in nodejs](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20in%20nodejs%22)
* [node js generate pdf from template](https://www.npmjs.com/search?q=keywords:%22node%20js%20generate%20pdf%20from%20template%22)
* [pdf generator node js](https://www.npmjs.com/search?q=keywords:%22pdf%20generator%20node%20js%22)
* [nodejs convert pdf to image](https://www.npmjs.com/search?q=keywords:%22nodejs%20convert%20pdf%20to%20image%22)
* [generate pdf node js](https://www.npmjs.com/search?q=keywords:%22generate%20pdf%20node%20js%22)
* [pdf conversion in node.js](https://www.npmjs.com/search?q=keywords:%22pdf%20conversion%20in%20node.js%22)
* [create pdf in node js](https://www.npmjs.com/search?q=keywords:%22create%20pdf%20in%20node%20js%22)
* [node pdf sdk](https://www.npmjs.com/search?q=keywords:%22node%20pdf%20sdk%22)
