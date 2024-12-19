<section class="e22ba268 ph2 ph0-ns ml0-ns mr3-ns black-80" id="tabpanel-readme" aria-labelledby="package-tab-readme" role="tabpanel" data-attribute="">
<article>

Paraphrased Section:

-----

![Build Passed](https://camo.githubusercontent.com/2920a67f31140f5ded965f5aa60bec6c7bba9845545a3bd99c31192a4cc223fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6275696c642d25323025453225394325393325323033313538253230746573747325323070617373656425323028302532306661696c6564292532302d3130374331303f6c6f676f3d76697375616c73747564696f)
![Windows Compatibility](https://camo.githubusercontent.com/4c1f2a3927a0c0db490dd617df8f04d4f8cf16f0db1fc691e2abaecaa807b478/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d77696e646f7773)
![macOS Compatibility](https://camo.githubusercontent.com/a7c2bac7216e874a47cf425683eccc909c5975c853c262ab21e10afd6e85631a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6170706c65)
![Linux Compatibility](https://camo.githubusercontent.com/a754f6db6b10f740b3ff9dbe658bacfd30f792a2bec86f074e16df23124667dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d6c696e7578266c6f676f436f6c6f723d7768697465)
![Docker Compatibility](https://camo.githubusercontent.com/15f959fcff5db750437c330dbdda6c44f6be608c372baa673de4207a9fae739e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322538302538452532302d2532302545322539432539332d3130374331303f6c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)
![Live Chat Support](https://camo.githubusercontent.com/f504b053ad43015d996953328c6e4065b2f4b82f27759e36f4f380a46784fa5e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c697665253230436861743a2d32342f352d707572706c653f6c6f676f3d676f6f676c6563686174266c6f676f436f6c6f723d7768697465)

-----

Here's the paraphrased section:

# IronPDF - Streamlining PDF Operations in Node.js Projects

![](https://raw.githubusercontent.com/iron-software/iron-nuget-assets/main/IronPDF-nodejs-readme/nuget-trial-banner-large.png)

IronPDF, proudly crafted and supported by Iron Software, empowers Software Engineers with tools to generate, modify, and retrieve content from PDF documents efficiently.

## Capabilities

[](#capabilities)

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

[](#utilizing-ironpdf)

IronPDF leverages a robust Chrome Engine to convert HTML strings, files, and online URLs into PDF documents within Node.js environments. Given the intensive nature of the rendering process, it is advised to perform these operations on the server-side. This approach allows frontend frameworks such as ReactJs and Angular to transfer the heavy rendering tasks to the server and then retrieve the final PDF to display on the client side.

Here's the paraphrased section on how to install IronPDF:

-----

## Installation Instructions

[](#installation-instructions)

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

[](#windows-x64-installation-instructions)

For npm users:

```bash
npm install @ironsoftware/ironpdf-engine-windows-x64
```

For yarn users:

```bash
yarn add @ironsoftware/ironpdf-engine-windows-x64
```

### For the Windows x86 Architecture

[](#for-windows-x86)

To install using npm:

```bash
npm install @ironsoftware/ironpdf-engine-windows-x86
```

To install using yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-windows-x86
```

### For 64-bit Linux Systems

[](#for-64-bit-linux-systems)

To install using npm, execute:

```bash
npm install @ironsoftware/ironpdf-engine-linux-x64
```

Alternatively, to install using yarn, run:

```bash
yarn add @ironsoftware/ironpdf-engine-linux-x64
```

### For macOS x64 Installation

[](#for-macos-x64-installation)

Install using npm:

```bash
npm install @ironsoftware/ironpdf-engine-macos-x64
```

Or, using yarn:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-x64
```

### macOS Arm Installation

[](#macos-arm-installation)

For installation via npm, execute:

```bash
npm install @ironsoftware/ironpdf-engine-macos-arm64
```

For installation using yarn, run:

```bash
yarn add @ironsoftware/ironpdf-engine-macos-arm64
```

## Usage

[](#usage)

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

[](#feature-overview)

[![IronPDF Capabilities](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png)](https://ironpdf.com/iron-nuget-assets/main/IronPDF-nodejs-readme/features-table.png)

## Licensing & Support Options

For additional assistance and information, feel free to reach out to us via email at: <support@ironsoftware.com>

## Readme Overview

### Pertinent Keywords

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
```

### Searchable Keywords

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
```

