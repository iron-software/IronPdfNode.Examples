# HTML to PDF NodeJS

***Based on <https://ironpdf.com/tutorials/html-to-pdf/>***


IronPDF excels in transforming HTML, CSS, and JavaScript into high-quality PDF documents, a feature widely revered as its most impressive and popular capability. This guide provides a thorough introduction for Node developers on how to integrate HTML to PDF conversion features into their applications using IronPDF.

IronPDF, a high-level API library, enables developers to seamlessly integrate sophisticated PDF manipulation functions into software solutions with ease and efficiency. IronPDF supports [various programming languages](https://ironsoftware.com/nodejs/licensing/). For comprehensive guidance on creating PDFs in [.NET](https://ironsoftware.com/tutorials/html-to-pdf/), [Java](https://ironsoftware.com/java/tutorials/html-to-pdf/), and [Python](https://ironsoftware.com/python/tutorials/html-to-pdf/), refer to the official [documentation pages](https://ironsoftware.com/docs/). This tutorial focuses specifically on its application within Node.js projects.

## Getting Started

### Installing IronPDF for Node.js

Begin by integrating the IronPDF library into your Node.js project. Execute the following NPM command within your project directory to install the IronPDF package:

```shell
npm install @ironsoftware/ironpdf
```

Alternatively, [install the IronPDF package manually](https://ironpdf.com/nodejs/#download-modal) from the provided link.

### Manually Installing the IronPDF Engine (Optional)

To optimize performance, IronPDF in Node.js may require an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64).

You can manually [download and install the Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) suitable for your operating system. While the `@ironpdf` package automatically handles the installation upon initial use, manual installation can be beneficial in environments with restricted internet access.

### Licensing (Optional)

By default, generated PDFs feature a watermark. This can be removed by applying a valid license key. You can acquire a license key by visiting the [licensing page](https://ironpdf.com/nodejs/licensing/). For trial purposes, feel free to [request a trial key](https://ironpdf.com/trial-license).

To apply the license key and disable watermarking, adjust the `licenseKey` property on the `IronPdfGlobalConfig` object as shown below:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

let config = IronPdfGlobalConfig.getConfig();
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

[Purchase a license](https://ironpdf.com/nodejs/licensing/) for full access, or get in touch for a trial key. Remember to update other [global configuration settings](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) prior to invoking library functionalities to optimize performance and functionality.

In the next sections, ensure these configurations are in a separate JavaScript file, named `config.js`, which will be imported in projects utilizing IronPDF functionalities:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');
// Further code here...
```

From here, the guide will delve into the various methods for converting HTML to PDF using IronPDF, assuming that all configurations have been set as described.

```shell
npm install @ironsoftware/ironpdf
```

You can also download and install the IronPDF package [manually](https://ironpdf.com/nodejs/#download-modal).

### Install the IronPDF Engine Manually (optional)

IronPDF for Node.js currently requires an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64) to function correctly.

Install the IronPDF Engine binary by [installing the appropriate package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) for your operating system:

Installing the IronPDF Engine is optional, as `@ironpdf` will automatically handle the download and installation of the necessary binary from NPM when you first run it. However, manually installing this binary is crucial in scenarios where internet access is limited or unavailable.

### Apply a License Key (optional)

Initially, IronPDF will watermark the documents it generates or modifies with a background title.

![Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)
**Obtain a license key at [ironpdf.com/nodejs/licensing/](https://ironpdf.com/nodejs/licensing/) to produce PDF documents without watermarks.**

To prevent the watermarking of documents, you need to set the `licenseKey` property in the `IronPdfGlobalconfig` object using a valid license key. Below is the code example for this configuration:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

var config = IronPdfGlobalConfig.getConfig();
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

[Purchase a license key](https://ironpdf.com/nodejs/licensing/) from our licensing page, or [obtain a free trial license key](https://ironpdf.com/trial-license).

The license key and other [global configuration settings](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) should be configured before using other library functions to ensure optimal performance and functionality.

The next sections of this guide will proceed under the assumption that a license key has been applied and configured in a separate JavaScript module named _config.js_. This module is imported wherever IronPDF functionality is utilized:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');
// ...
```

Paraphrased section:

```shell
npm install @ironsoftware/ironpdf
```

You can also choose to [manually download and install](https://ironpdf.com/nodejs/#download-modal) the IronPDF package.

### Optional Manual Installation of the IronPDF Engine

The operation of IronPDF for Node.js depends on the existence of an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64). While optional, manual installation of this binary could be crucial in environments with constrained or unreliable internet access.

To manually install the IronPDF Engine, choose and [install the suitable package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) based on your operating system.

Even though manual installation isn't always necessary—because `@ironpdf` automatically fetches and installs the required binary from NPM during its initial run—there are scenarios where manual control over this process is beneficial. This includes settings with limited internet connectivity, where automatic downloads are impractical or impossible.

### Optional: Applying a License Key

IronPDF, by default, places a watermark with its title on all PDFs it generates or modifies.

![Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)

**To create watermark-free PDF documents, acquire a license key at [ironpdf.com/nodejs/licensing/](https://ironpdf.com/nodejs/licensing/).**

To generate PDFs without this default watermark, it is necessary to assign a valid license key to the `licenseKey` property within the global `IronPdfGlobalconfig` object. The required code for this configuration is as follows:

Here is the paraphrased section of the article:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

// Retrieve the configuration for IronPdf
let settings = IronPdfGlobalConfig.getConfig();
// Set your license key
settings.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

Purchase your license key directly from our [licensing page](https://ironpdf.com/nodejs/licensing/), or get in touch with us to obtain a [complimentary trial license key](https://ironpdf.com/trial-license).

It is essential to configure the license key and other [global settings](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) before leveraging other IronPDF library functions. This preliminary setup ensures optimal performance and functionality when using the library.

In the subsequent sections of this guide, we will operate under the assumption that a license key has been obtained and configured within a distinct JavaScript file named `config.js`. This file is imported into our project any time we need to activate IronPDF features.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');
// Subsequent operations to serve your PDF needs
```

## HTML to PDF Conversion

IronPDF's Node.js release offers three distinct methods to convert HTML content into PDF documents:

1. From an HTML code string
2. From a local HTML file
3. From a web URL

Let's delve into each method to understand how they can be applied effectively.

### Convert from HTML Code String

Using `PdfDocument.fromHtml`, you can convert a string of HTML directly into a PDF. This method is highly versatile, accommodating data from various sources such as file streams, web page templates, or dynamically generated HTML content.

Below is an example illustrating how to convert HTML text into a PDF:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generate a PDF from an HTML string
const pdf = await PdfDocument.fromHtml("<h1>Welcome to IronPDF!</h1>");

// Save the generated PDF to disk
await pdf.saveAs("example-html-to-pdf.pdf");
```

Here, the `PdfDocument.fromHtml` method is invoked with a simple HTML string which includes an `<h1>` tag. This method returns a promise that resolves to a `PdfDocument` instance, which represents the newly created PDF. Finally, the PDF is saved to the local storage with `saveAs`.

### Convert from a Local HTML File

`PdfDocument.fromHtml` can also take a path pointing to a local HTML file, allowing you to convert saved HTML documents directly to PDF format.

Let's use a local sample HTML file for conversion:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Create a PDF from an existing HTML file
const pdf = await PdfDocument.fromHtml("/path/to/sample.html");

// Output the PDF to the selected directory
await pdf.saveAs("local-html-to-pdf.pdf");
```

This subtle modification enables you to transform any HTML file stored locally into a PDF file just by specifying the file path in the same `PdfDocument.fromHtml` method.

### Convert from a Website URL

IronPDF simplifies the process of converting web pages into PDFs by allowing URLs as input through the `PdfDocument.fromUrl` method.

Using the below example, convert a web page from a URL to PDF:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert an online web page to a PDF document
const pdf = await PdfDocument.fromUrl("https://example.com");

// Save the web-generated PDF
await pdf.saveAs("url-to-pdf.pdf");
```

With `PdfDocument.fromUrl`, IronPDF fetches the HTML content from the specified URL and renders it into a high-quality PDF, which is then saved locally.

Each of these methods thereby provides a direct and effective way to generate PDF documents from HTML content using IronPDF in a Node.js environment.

### Generating a PDF from HTML Code

The `PdfDocument.fromHtml` function provides the capability to create PDF documents directly from HTML strings. This feature is particularly versatile as it can utilize HTML data obtained from various sources, including text files, data streams, HTML templates, or dynamically generated HTML content.

Below is a practical example of how to apply the `PdfDocument.fromHtml` function:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generating a PDF from a simple HTML string "Hello world!"
const pdf = await PdfDocument.fromHtml("<h1>IronPDF Welcomes You!</h1>");

// Saving the generated PDF to the local storage.
await pdf.saveAs("example-html-to-pdf.pdf");
```

In this snippet, we use the `PdfDocument.fromHtml` method, passing it a basic HTML string with an `<h1>` tag, and initiate the PDF generation process. This function returns a promise which, upon resolution, gives back a `PdfDocument` instance representing the PDF document created from the specified HTML content. After creating the PDF, the document can then be saved to the file system using the `saveAs` method.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generating a PDF from a simple HTML string
const pdfDocument = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");

// Storing the newly created PDF on your local drive.
await pdfDocument.saveAs("html-string-to-pdf.pdf");
```

In the demonstrated example, we utilize the `PdfDocument.fromHtml` method with a simple HTML string, specifically using a `<h1>` tag to create a headline element.

The `PdfDocument.fromHtml` method asynchronously returns a `PdfDocument` object, encapsulating a generated PDF file from the provided HTML content. This object is pivotal within IronPDF, underpinning many of its primary capabilities in PDF generation and modification, thereby supporting a wide array of PDF-related functionalities.

To store the resulting PDF on disk, the method `saveAs` is applied to the `PdfDocument` instance. Below is an illustration of the PDF file.

![Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-3.webp)

**The PDF file created from the HTML snippet "`<h1>Hello from IronPDF!</h1>`" visually resembles typical web page content, presenting a straightforward demonstration of HTML-to-PDF conversion.**

### Generating a PDF from an HTML Document File

The `PdfDocument.fromHtml` function is versatile, handling not only HTML strings but also full HTML documents located on your system.

Let's explore how to generate a PDF from a local HTML document. We are using [this example HTML page](https://filesamples.com/samples/code/html/sample2.html) for our demonstration.

![Figure 3](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-4.webp)

**View our sample HTML as rendered in Google Chrome. You can download this page and others for testing from the File Samples website: <https://filesamples.com/samples/code/html/sample2.html>**

Here, we demonstrate how to transform this entire HTML document into a PDF. Instead of an HTML string, this time we input a valid file path into the `PdfDocument.fromHtml` method, as illustrated in the example below:

```node
import {PdfDocument} from "@ironsoftware/ironpdf"; // Importing PdfDocument class from IronPDF
import('./config.js'); // Import configuration settings

// Convert an HTML file into a PDF document
const pdfDocument = await PdfDocument.fromHtml("./sample2.html");

// Store the created PDF in the project's directory
await pdfDocument.saveAs("html-file-to-pdf-1.pdf");
```

Please examine the PDF content below. You'll see that IronPDF faithfully maintains not only the visual layout of the original HTML document but also the interactivity of its links, forms, and other dynamic elements.

![Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)

**This PDF was produced using the method described above. Notice its striking similarity to the original web appearance.**

A closer look at the sample page's source code reveals its complexity, incorporating a diverse range of HTML elements like paragraphs, unordered lists, line breaks, horizontal rules, hyperlinks, images, etc., and some scripting used for functionality such as setting cookies.

IronPDF excels at handling even more intricate web content than previously demonstrated. To showcase these capabilities, consider the following web page:

![Figure 5](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-6.webp)

**This is an article about the Puppeteer Node Library, well-known for its capability to manage Chrome programmatically via a headless browser instance.**

The depicted article explores the Puppeteer Node Library, which facilitates the automation of various browser tasks by Node developers, both server-side and client-side—including server-side HTML to PDF conversion.

The forthcoming example will transform a stored version of this page—complete with its descriptive assets such as CSS files, images, and scripts—into an exact PDF copy.

The following code is premised on having the page file "sample4.html" stored in the project's directory:

Here is the paraphrased section of the article with updated paths:

```node
// Process a more intricate HTML document for PDF conversion.
PdfDocument.fromHtml("./sample4.html").then(async (pdf) => {
    await pdf.saveAs("html-file-to-pdf-2.pdf");
});
```

Here is the paraphrased section with resolved URL paths:

-----
The image below displays the output generated by the preceding code example.

![Figure 6](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-7.webp)

**The visual quality seen in Google Chrome is maintained when the page is transformed into a PDF, ensuring rich visuals even for web pages with extensive CSS and JavaScript.**

### Convert Web Pages to PDF with IronPDF

IronPDF excels at transforming not just HTML strings or local files but also entire web pages into PDF documents. Its robust capabilities mean you can fetch and style HTML content directly from live URLs.

For practical illustration, let’s take the Wikipedia page about the PDF format, which can be found at [https://en.wikipedia.org/wiki/PDF](https://en.wikipedia.org/wiki/PDF).

![Figure 7](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-8.webp)
**View of the Wikipedia entry on PDFs, as displayed in a web-conforming browser.**

To transform this web page into a PDF, apply the following code snippet:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');

// Convert the Wikipedia page into a detailed PDF document.
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Store the produced PDF on your local disk.
await pdf.saveAs("wikipedia-pdf.pdf");
```

In the above example, you will use the `PdfDocument.fromUrl` method. This function takes the URL of a web page as input and accurately replicates its content into a PDF. IronPDF handles all the heavy lifting, pulling the HTML from the provided URL and rendering it into a visually faithful PDF rendition, without the need for intermediate HTML or text files.

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)
**Take a look at the resulting PDF from the `PdfDocument.fromUrl` function on the Wikipedia article — it maintains a high fidelity to the format of the original web page.**

Here's your paraphrased section with updated comments and relative URLs resolved:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');  // Load IronPDF specific configuration settings.

// Create a pixel-perfect PDF from a given URL. 
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Store the generated PDF locally.
await pdf.saveAs("url-to-pdf.pdf");
```

In the example above, we demonstrated how to leverage `PdfDocument.fromUrl` to effortlessly transform a webpage into a PDF. IronPDF efficiently captures and processes the HTML from the specified URL, facilitating a smooth transition to PDF format without the necessity for pre-existing HTML documents or strings.

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)

**The PDF output created by utilizing `PdfDocument.fromUrl` on a Wikipedia article closely mirrors the appearance of the original webpage.**

### Generating a PDF from a ZIP File

The `PdfDocument.fromZip` method enables the conversion of HTML files contained within ZIP archives into PDFs.

Imagine we possess a ZIP file titled `html-zip.zip` in our project folder, outlined as follows:

```plaintext
html-zip.zip
├─ index.html
├─ style.css
├─ logo.png
```

The `index.html` includes the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello world!</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello from IronPDF!</h1>
    <a href="https://ironpdf.com/nodejs/">
      <img src="logo.png" alt="IronPDF for Node.js">
    </a>
  </body>
</html>
```

Alongside, the `style.css` presents five CSS rules:

```css
@font-face {
  font-family: 'Gotham-Black';
  src: url('gotham-black-webfont.eot?') format('embedded-opentype'), 
       url('gotham-black-webfont.woff2') format('woff2'), 
       url('gotham-black-webfont.woff') format('woff'), 
       url('gotham-black-webfont.ttf') format('truetype'), 
       url('gotham-black-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 200px auto auto;
  color: white;
  background-color: black;
  text-align: center;
  font-family: "Helvetica";
}

h1 {
  font-family: "Gotham-Black";
  font-size: 32pt;
  margin-bottom: 70px;
}

img {
  width: 400px;
  height: auto;
}

p {
  font-size: smaller;
  text-decoration: underline;
}
```

Lastly, `logo.png` depicts the IronPDF product logo:

![Figure 9](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)
**The sample image inside a hypothetical HTML zip file.**

When invoking the `fromZip` method, specify a valid path to the zip file as the first argument, while the second argument includes a JSON object designating the `mainHtmlFile` property with the name of the HTML file you wish to convert from the zip:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert the HTML from the ZIP file
PdfDocument.fromZip("./html-zip.zip", {
    mainHtmlFile: "index.html"
}).then(async (pdf) => {
    return await pdf.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)
**PDF Creation using the `PdfDocument.fromZip` function. This function successfully renders the HTML code contained in the ZIP file, with its contained assets.**

```txt
html-zip.zip
├─ index.html
├─ style.css
├─ logo.png
```

The `index.html` file is structured as follows:

Here is a paraphrased version of the HTML section you provided:

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Message</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Greetings from IronPDF!</h1>
    <a href="https://ironpdf.com/nodejs/">
      <img src="logo.png" alt="IronPDF for Node.js">
    </a>
  </body>
</html>
```

Here's the paraphrased section of the article:

-----
The `style.css` file specifies five CSS rules:

```css
@font-face {
    font-family: 'Gotham-Black';
    src: url('gotham-black-webfont.eot?') format('embedded-opentype'), 
         url('gotham-black-webfont.woff2') format('woff2'),
         url('gotham-black-webfont.woff') format('woff'), 
         url('gotham-black-webfont.ttf') format('truetype'), 
         url('gotham-black-webfont.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    color: white;
    background-color: black;
    text-align: center;
    font-family: "Helvetica";
}

h1 {
    font-family: "Gotham-Black";
    margin-bottom: 70px;
    font-size: 32pt;
}

img {
    width: 400px;
    height: auto;
}

p {
    text-decoration: underline;
    font-size: smaller;
}
```

Lastly, the file `logo.png` represents our official product logo:

![Figure 9](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)

**The image provided is a sample from a hypothetical HTML zip file.**

When utilizing the `fromZip` method, input a valid file path to the zipped archive as the first argument, along with a JSON object that designates the `mainHtmlFile` attribute, specifying the main HTML file within the zip archive you wish to convert.

The step-by-step conversion of the `index.html` file located within the zip archive is carried out as follows:

Below is the paraphrased section of the article with links and paths resolved to `ironpdf.com`:

-----
```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert HTML from a ZIP archive to a PDF document
PdfDocument.fromZip("https://ironpdf.com/html-zip.zip", {
    mainHtmlFile: "index.html"
}).then(async (pdfDocument) => {
    return await pdfDocument.saveAs("html-from-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)

**Generating a PDF using `PdfDocument.fromZip`. This method effectively processes HTML content from a ZIP archive, including associated resources.**

## Advanced Customization for HTML to PDF Conversion

The interface [`ChromePdfRenderOptions`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html) provides Node.js developers the tools to adjust the way IronPDF handles HTML when rendering PDFs. This functionality is crucial for fine-tuning the visual output of the PDFs and for managing particular scenarios unique to HTML-to-PDF conversions.

To start with, when IronPDF creates new PDF documents, it uses a set of basic settings found in `ChromePdfRenderOptions`. You can fetch and view these initial configuration values using the method `defaultChromePdfRenderOptions`, allowing you to see and then modify the default render options to better suit specific requirements.

```node
// Fetching the default configuration for Chrome PDF rendering options.
var options = defaultChromePdfRenderOptions();
```

This portion of the document quickly covers the most common scenarios for converting HTML to PDF that need adjustments made through the `ChromePdfRenderOptions` interface.

Each part of this section begins by detailing the default settings and explains how to customize them to fulfill specific requirements.

### Tailoring Your PDF Output

Customizing the output of your PDFs is a powerful feature of IronPDF, allowing you to add bespoke headers, footers and manipulate other rendering options to your documents. Below is an exploration of how you can personalize your PDFs.

#### Implementing Custom Headers and Footers

IronPDF provides the flexibility to insert custom text-based headers and footers in your PDFs. This example shows how you could generate a PDF from the Google homepage, incorporating personalized header and footer text, complete with a dividing line and different fonts for each.

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

const options = defaultChromePdfRenderOptions();

// Configuring a custom header with text
options.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Configuring a custom footer with text
options.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Creating a PDF from HTML, with custom header and footer
const pdf = await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options});
await pdf.saveAs("add-custom-headers-footers-1.pdf");
```

![Figure 11](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)
**A new PDF version of the Google homepage with custom header and footer incorporated.**

For a more enriched content in headers and footers, HTML can be used instead of mere text. In the following code snippet, HTML is used to create a bold, centered header and a footer containing a centered logo image.

```node
import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";
import('./config.js');

const options = defaultChromePdfRenderOptions();
options.htmlHeader = {
    htmlFragment: "<strong>https://www.google.com/</strong>",
    dividerLine: true,
    dividerLineColor: "blue",
    loadStylesAndCSSFromMainHtmlDocument: true,
};
options.htmlFooter = {
    htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
    dividerLine: true,
    loadStylesAndCSSFromMainHtmlDocument: true
};

// Render and create PDF from an HTML page using custom HTML header and footer
await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

![Figure 12](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)
**This PDF showcases how IronPDF can adapt HTML page customizations into PDF format effectively.**

#### Adjusting Margins, Page Size, Orientation, and Color

IronPDF also allows detailed customization of the page setup for PDFs, including margins, page size, orientation, and color settings which can significantly alter the appearance and layout. Below, the Google homepage is converted into a PDF with specified margins, page size in A5, landscape orientation, and in grayscale.

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

const options = defaultChromePdfRenderOptions();

// Customizing page margins, size, and orientation
options.margin = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
};
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;
options.grayScale = true;

// Converting webpage to PDF with custom page settings
const pdf = await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options});
await pdf.saveAs("set-margins-and-page-size.pdf");
```

Through this method, IronPDF enables tailoring of PDF generation to finely tune the resulting documents to meet specific presentation requirements or constraints.

#### Customizing Headers and Footers in PDFs

IronPDF allows you to personalize your PDFs by adding unique headers and footers with its `textHeader` and `textFooter` properties.

Below, you'll find an example where we generate a PDF from the Google homepage and enhance it with bespoke header and footer text. Divider lines are strategically placed to set apart these elements from the main content of the page. Furthermore, we employ different font styles for the header and the footer to emphasize these distinctions. 

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Create a custom Text-Based Header
options.textHeader = {
    centerText: "https://www.google.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Construct a custom Text-Based Footer
options.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Convert an HTML Page to a PDF with custom headers and footers
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("add-custom-headers-footers-1.pdf");
});
```

This script not only converts the specified web page into a PDF but also integrates custom headers and footers, thereby adding a professional touch to the resulting document.

```node
import { PdfDocument, defaultChromePdfRenderOptions, AffixFonts } from "@ironsoftware/ironpdf";
import('./config.js');

// Retrieve initial Chrome PDF rendering configurations
var options = defaultChromePdfRenderOptions();

// Customize the PDF Header
options.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Customize the PDF Footer
options.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Generate a PDF based on the contents of a URL
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    // Save the generated PDF with custom headers and footers
    return await pdf.saveAs("add-custom-headers-footers-1.pdf");
});
```

Here's the paraphrased section of the article:

---

The resulting PDF is displayed below:

![Figure 11](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)

**This new PDF, derived from the Google homepage, incorporates custom headers and footers for a refined presentation.**

To enhance your control over how headers and footers are positioned and styled, you have the option to use HTML instead of plain text.

The next example demonstrates how to enrich the header and footer using HTML. In this instance, we ensure the URL in the header is bold and centered, while in the footer, a logo is centrally placed to enhance visual appeal.

```node
import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default Chrome PDF rendering options
let renderOptions = defaultChromePdfRenderOptions();

// Configure HTML-based header with dynamic styling and strong emphasis on URL
renderOptions.htmlHeader = {
    htmlFragment: "<strong>https://www.google.com/</strong>",
    dividerLine: true,
    dividerLineColor: "blue",
    loadStylesAndCSSFromMainHtmlDocument: true,
};

// Configure HTML footer embedding an image with styling considerations
renderOptions.htmlFooter = {
    htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
    dividerLine: true,
    loadStylesAndCSSFromMainHtmlDocument: true
};

// Generate a PDF from the specified URL with custom headers and footers defined above
await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdf) => {
    return await pdf.saveAs("custom-html-headers-footers.pdf");
});
```

The following image illustrates the outcome of the modifications made.

![Figure 12](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)

**IronPDF for Node.js is capable of implementing custom features to your HTML documents during their conversion into PDF format.**

### Defining Custom Margins, Page Sizes, Orientations, and Colors

IronPDF allows developers to configure custom margins, choose specific page sizes and orientations, and even define color schemes for new PDF documents created from HTML content. This flexibility ensures that the output PDFs are tailored to meet specific requirements and standards for a variety of applications.

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Configure custom page margins in millimeters
options.margin = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
};

// Set the paper size, fit mode, and orientation for the PDF
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;

// Optionally, enable grayscale for the PDF output
options.grayScale = true;

// Convert a web page to a PDF with these custom settings
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("custom-margin-size-orientation-color-pdf.pdf");
});
```

In the code sample above, IronPDF is used to convert the home page of Google into a PDF file. This example sets up a landscape A5 paper size with generous margins and opts for grayscale rendering. Such configurations are beneficial for creating consistent, professionally formatted documents for business presentations, reports, or archival purposes.

Here's the paraphrased section of the article with all relative URL paths resolved:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default Chrome PDF rendering options
let renderOptions = defaultChromePdfRenderOptions();

// Customize page margins in millimeters for the PDF document
renderOptions.margin = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
};
// Set the paper size to A5 and configure it to fit the page contents
renderOptions.paperSize = PaperSize.A5;
renderOptions.fitToPaperMode = FitToPaperModes.FitToPage;
// Set the orientation of the page to landscape
renderOptions.paperOrientation = PdfPaperOrientation.Landscape;
// Enable grayscale to print the PDF in black and white
renderOptions.grayScale = true;

// Generate a PDF from the home page of Google
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdfDocument) => {
    // Save the generated PDF to your local system
    await pdfDocument.saveAs("set-margins-and-page-size.pdf");
});
```

In the above excerpt, we've configured IronPDF to produce a PDF of the Google homepage in grayscale. The layout is set to landscape, and we ensure a minimum margin of 50 millimeters around the content. Additionally, we have adjusted the settings to suit A5 paper dimensions.

### Generating PDFs from Dynamic Web Content

When dealing with web pages that don't render all content instantaneously—it may be prudent to delay the conversion process until specific conditions are met.

For example, there might be scenarios where content becomes visible only after a delayed script runs post-page load, or perhaps certain dynamic elements take time to fully render, appearing several seconds after the initial page load.

IronPDF caters to these scenarios with the `WaitFor` mechanism in its `ChromePdfRenderOptions`. This feature allows developers to specify when IronPDF's Chrome Rendering engine should capture the content of the page to ensure all desired elements are present.

The code below demonstrates setting IronPDF to pause for 20 seconds before processing our home page into a PDF format:
```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Configure the Chrome Renderer to pause for 20 seconds before capturing the web page as a PDF
var options = defaultChromePdfRenderOptions();
options.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000
}
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("waitfor-renderdelay.pdf");
});
```
This setup ensures that any dynamically loaded content that takes up to 20 seconds to appear is included in the PDF snapshot.

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Set up the renderer to delay PDF conversion by 20 seconds to allow
// complete loading of all page elements.
let renderOptions = defaultChromePdfRenderOptions();
renderOptions.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000 // delay time in milliseconds
};

// Generate a PDF from the web page, waiting for the specified duration
// to ensure all dynamic content is fully rendered.
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: renderOptions}).then(async (pdfDocument) => {
    // Save the rendered PDF to the local file system.
    return await pdfDocument.saveAs("waitfor-renderdelay.pdf");
});
```

The upcoming code sequence sets up IronPDF to delay the PDF conversion process until a specific element within a well-known [SEO text editor](https://surferseo.com/) is detected successfully.

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Set up the Chrome Renderer to delay PDF rendering until a specific HTML element is detected
options.waitFor = {
    type: WaitForType.HtmlElement,
    htmlQueryStr: "div.ProseMirror",
    maxWaitTime: 20000
};

// Generate a PDF from the specified URL, ensuring the specified HTML element is present
PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("waitfor-htmlelement.pdf");
});
```

## Generating PDFs from HTML Templates

In this concluding part of the tutorial, we'll put to use all the previously discussed concepts to achieve something highly practical—creating one or more PDFs from an HTML template.

The template we'll employ is illustrated below. Originally based on a widely accessible [invoice template](https://codepen.io/tjoen/pen/wvgvLX), it has been modified to incorporate placeholder tags such as {COMPANY-NAME}, {FULL-NAME}, {INVOICE-NUMBER}, and more for customizable content.

![Figure 13](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-14.webp)

**A model invoice template. Next, we will script additional JavaScript to dynamically populate this template before transforming it into a PDF.**

Prior to moving forward, you can [download](https://ironpdf.com/static-assets/pdf-nodejs/tutorials/html-to-pdf/html-template.zip) this HTML template and review it in your preferred Integrated Development Environment (IDE).

In the upcoming code snippet, we'll load this HTML template into a new `PdfDocument` instance, substitute the predefined placeholders with some sample data, and afterward save the `PdfDocument` instance to the file system.

Here's the paraphrased section of the article with appropriate adjustments, including resolving the relative URL paths:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');

/**
 * Fetches an HTML template file from a specified location on the file system.
 */
async function loadHtmlTemplate(path) {
    // This returns a promise that resolves with the loaded template
    return PdfDocument.fromFile(path);
}

/**
 * Persist a PDF document to a specified file path.
 */
async function savePdf(document, outputPath) {
    return document.saveAs(outputPath);
}

/**
 * Replaces specific placeholders within a PDF document using the PdfDocument.replaceText method.
 */
async function populateTemplateData(document, placeholder, value) {
    return document.replaceText(placeholder, value);
}

const invoiceTemplatePath = "./sample-invoice.html";
loadHtmlTemplate(invoiceTemplatePath).then(async (document) => { // Load the HTML template file
    await populateTemplateData(document, "{FULL-NAME}", "Lizbeth Presland");
    await populateTemplateData(document, "{ADDRESS}", "678 Manitowish Alley, Portland, OG");
    await populateTemplateData(document, "{PHONE-NUMBER}", "(763) 894-4345");
    await populateTemplateData(document, "{INVOICE-NUMBER}", "787");
    await populateTemplateData(document, "{INVOICE-DATE}", "August 28, 2023");
    await populateTemplateData(document, "{AMOUNT-DUE}", "13,760.13");
    await populateTemplateData(document, "{RECIPIENT}", "Celestyna Farmar"),
    await populateTemplateData(document, "{COMPANY-NAME}", "BrainBook");
    await populateTemplateData(document, "{TOTAL}", "13,760.13");
    await populateTemplateData(document, "{AMOUNT-PAID}", "0.00");
    await populateTemplateData(document, "{BALANCE-DUE}", "13,760.13");
    await populateTemplateData(document, "{ITEM}", "Training Sessions");
    await populateTemplateData(document, "{DESCRIPTION}", "60 Minute instruction");
    await populateTemplateData(document, "{RATE}", "3,440.03");
    await populateTemplateData(document, "{QUANTITY}", "4");
    await populateTemplateData(document, "{PRICE}", "13,760.13");
    return document;
}).then(async (document) => await savePdf(document, "html-template-to-pdf.pdf"));
```

The updated script includes descriptive function names and additional comments to clarify the line of code's purpose further. URL paths and links were corrected as per the guidelines.

The section outlined above introduces three key asynchronous functions that streamline the process of generating a PDF document from an HTML template using the IronPDF library:

- **`getTemplateHtml`**: This function leverages the `PdfDocument.fromHtml` API to import an HTML document into a newly created `PdfDocument` instance. This is particularly useful for setting up the initial structure of your PDF based on an HTML template.

- **`addTemplateData`**: Utilizing the `PdfDocument.replaceText` method, this function efficiently replaces placeholders—identified by keys—within the HTML template with actual data values. This method is crucial for customizing the content of the PDF.

- **`generatePdf`**: This function is responsible for saving the configured `PdfDocument` object to a specified file path, thus finalizing the PDF creation process.

Additionally, a variable named `const template` is defined to store the path to the HTML template file. The resulting PDF, as demonstrated below, is generated from the HTML template by replacing the designated placeholders with actual data. Despite these textual substitutions, the resulting document maintains the original CSS styling and layout, as depicted in the image below from https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-15.webp.

**The new PDF document created from substituting placeholders defined in an HTML template with real data. This document retains the CSS styles and layout that we would expect if no such replacements ever took place.**

## Additional Resources

The overview provided in this guide is just an introduction to the robust capabilities of IronPDF's high-level API functionalities. Here are some additional topics you might explore to deepen your understanding and expertise:

1. [The `PdfGenerator` class](https://ironpdf.com/nodejs/object-reference/api/classes/PdfGenerator.html): This specialized utility class is designed for crafting `PdfDocument` instances using HTML, URLs, Zip files, and more. It serves as an excellent alternative to the PDF rendering approaches available directly through the `PdfDocument` class.

2. [`HttpLoginCredentials`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html): Essential for projects requiring PDF generation from web content with access restrictions like cookie requirements or password protection. This reference is invaluable for navigating such complexities.

