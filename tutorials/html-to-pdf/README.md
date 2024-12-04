# HTML to PDF Conversion with NodeJS

***Based on <https://ironpdf.com/tutorials/html-to-pdf/>***


IronPDF excels in transforming HTML, CSS, and JavaScript into high-quality PDFs, making it a standout feature widely appreciated by developers. This guide provides Node.js developers with a thorough introduction to integrating HTML-to-PDF capabilities into their applications using IronPDF.

IronPDF serves as a comprehensive high-level API library designed to seamlessly integrate sophisticated PDF processing features into software solutions. To explore creating PDFs in various programming environments, visit the detailed guides for [.NET](https://ironpdf.com/tutorials/html-to-pdf/), [Java](https://ironpdf.com/java/tutorials/html-to-pdf/), and [Python](https://ironpdf.com/python/tutorials/html-to-pdf/). Additionally, access our complete documentation on IronPDF's [documentation pages](https://ironpdf.com/docs/). This tutorial specifically addresses its application within Node.js projects.
```

## Initial Setup

### Incorporating IronPDF into Your Node.js Project

To start incorporating PDF generation features into your Node.js application, begin by installing the IronPDF library. Execute the following NPM command within your project directory:

```shell
npm install @ironsoftware/ironpdf
```

Alternatively, you can opt to download and implement the IronPDF package manually from [this link](https://ironpdf.com/nodejs/#download-modal).

### Manual Installation of the IronPDF Engine (Optional)

For Node.js applications, utilizing the [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64) is required for optimal performance.

You can manually install the IronPDF Engine binary by choosing and [installing a suitable package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) based on your operating system:

While the installation of the IronPDF Engine is optional — as the package `@ironpdf` will automatically manage the download and installation of the necessary binaries during its first run — manual installation might be essential in environments with limited, slow, or no internet connectivity.

### Applying a License Key (Optional)

By default, IronPDF introduces a watermark on all generated or altered PDF documents.

To remove this watermark, acquire a license key from [IronPDF's licensing page](https://ironpdf.com/nodejs/licensing/) and apply it to your project. Set the `licenseKey` property on the `IronPdfGlobalConfig` object with your acquired key by using the code snippet below:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

let config = IronPdfGlobalConfig.getConfig();
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

Keys can be purchased from the licensing page mentioned above, or you could [contact IronPDF for a free trial license key](https://ironpdf.com/trial-license).

Remember to configure the license key and other global settings via [IronPdfConfig](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) before calling other library functions to ensure optimized performance and behavior.

The upcoming parts of this tutorial presume the application of a valid license key in the separate JavaScript module named `config.js`. Import this module wherever IronPDF functionalities are needed:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import './config.js';
// Usage of PdfDocument follows...
```

```shell
npm install @ironsoftware/ironpdf
```

You can also download and install the IronPDF package [manually](https://ironpdf.com/nodejs/#download-modal).

Here is the paraphrased content for the specified section:

```shell
npm install @ironsoftware/ironpdf
```

You can also choose to [download and install the IronPDF package manually](https://ironpdf.com/nodejs/#download-modal).

### Optional Manual Installation of IronPDF Engine

To function optimally, IronPDF for Node.js needs an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64). You can manually install this engine by [selecting the appropriate package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) that matches your operating system.

While it’s not mandatory to manually install the IronPDF Engine, as `@ironpdf` is designed to auto-install the necessary binary on its first run, there are instances where manual installation becomes crucial. This typically applies when your development environment has restricted, limited, or no internet access. In such cases, a pre-installed IronPDF Engine ensures that your Node.js application can generate PDFs without needing an online download.

### Applying a License Key (Optional)

IronPDF automatically places a watermark on each document it generates or modifies by default.

![Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)
**To create watermark-free PDF documents, secure a license key at [ironpdf.com/nodejs/licensing/](https://ironpdf.com/nodejs/licensing/).**

To eliminate this watermark from your documents, you'll need to properly configure the `licenseKey` attribute within the `IronPdfGlobalconfig` global object. Insert a genuine license key here using the example code provided below:

```node
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Fetch the current global configuration settings for IronPDF.
let globalConfig = IronPdfGlobalConfig.getConfig();

// Assign your unique license key to the configuration to activate the licensed version.
globalConfig.licenseKey = "{INSERT-YOUR-LICENSE-KEY}";
```

You can [acquire a license key](https://ironpdf.com/nodejs/licensing/) from our licensing section or [request a free trial key](https://ironpdf.com/trial-license) for evaluation purposes. 

Configure the license key and [other essential parameters](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) early on to optimize functionality and performance when deploying IronPDF's functions in your applications.

In later sections of this tutorial, we'll proceed under the assumption that a license key is already configured within a separate JavaScript module named `config.js`. This module gets imported into any script where IronPDF's capabilities are employed.

Certainly! Here's the paraphrased section, with relative URL paths resolved:

```node
// Import the PdfDocument class from the IronPDF package
import {PdfDocument} from "@ironsoftware/ironpdf";

// Import configuration settings from the 'config.js' module
import('./config.js');
// Further code implementations follow...
```

## HTML-to-PDF Conversion Techniques

IronPDF's Node.js version offers three distinct techniques for converting HTML content to PDF documents:

1. From HTML code as a string
2. From an HTML file stored locally
3. From a web URL 

Below, each method is detailed thoroughly.

### Generating PDFs from HTML Strings

The `PdfDocument.fromHtml` function enables the creation of PDFs directly from HTML markup. This ability is incredibly versatile and powerful, as it allows for sourcing the HTML content from various origins—be it straightforward text files, dynamic data streams, structured HTML templates, or programmatically generated HTML.

Below is a practical example to illustrate how to efficiently utilize the `PdfDocument.fromHtml` method:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generate a PDF from a simple HTML string.
const pdfDocument = await PdfDocument.fromHtml("<h1>Welcome to IronPDF!</h1>");

// Save the generated PDF to your desired location.
await pdfDocument.saveAs("generated-pdf-from-html.pdf");
```

In this example, we invoke the `PdfDocument.fromHtml` function with a basic HTML header tag string. This method not only allows for the direct input of HTML but can handle complex HTML structures, interactivity from scripts, or styled elements through CSS. The result of this method is a newly created `PdfDocument` object that can then be saved to disk using the `saveAs` method. This shows the convenience and directness of converting HTML to PDFs using IronPDF.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generate a PDF document using a simple HTML string
const pdfDocument = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");

// Store the resulting PDF file onto the local storage
await pdfDocument.saveAs("generated-pdf-from-html-string.pdf");
```

In the example provided, we invoke the `PdfDocument.fromHtml` method using a simple HTML string that includes a headline element (`<h1>`). This demonstrates the flexibility and ease with which IronPDF can transform HTML code into high-quality PDFs.

Upon execution, `PdfDocument.fromHtml` yields a `Promise` that ultimately resolves to a new instance of the [`PdfDocument`](https://ironpdf.com/nodejs/object-reference/api/classes/PdfDocument.html) class. Essentially, a `PdfDocument` is a PDF file generated by the library from any given HTML source, encapsulating the core functionalities that facilitate extensive PDF generation and alteration tasks widely utilized in the industry.

To finalize the process, we employ the `saveAs` method on the `PdfDocument` instance to preserve the newly created PDF onto the storage disk. Displayed below is the resultant PDF file.

![Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-3.webp)

**The resulting PDF from the HTML string "`<h1>Hello from IronPDF!</h1>`" demonstrates how the PDF retains the visual fidelity of the input HTML content, closely mimicking what you would expect to see in a browser.**

### Converting an HTML Document into a PDF

The `PdfDocument.fromHtml` function is versatile; apart from handling HTML strings, it can also process HTML files directly.

For the next instance, consider using this [sample HTML page](https://filesamples.com/samples/code/html/sample2.html).

![Figure 3](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-4.webp)

**See how our example HTML appears in Google Chrome. You can get this page, and others like it, from the File Samples site: [https://filesamples.com/samples/code/html/sample2.html](https://filesamples.com/samples/code/html/sample2.html).**

To transform the sample document into a PDF, we utilize the `PdfDocument.fromHtml` method with a valid path to the local HTML document. See the code snippet below for how this is achieved:

Here's the paraphrased content, along with updated comments, code adjustments, and resolved URLs for the section provided:

```node
// Import the required classes and configuration settings
import {PdfDocument} from "@websiteironsoftware/ironpdf";
import('./config.js'); // Import additional configurations

// Create a PDF from the content of an HTML file located in our project
const pdf = await PdfDocument.fromHtml("./sample2.html"); // Load HTML and begin PDF conversion

// Store the newly created PDF in the project directory
await pdf.saveAs("html-file-to-pdf-1.pdf"); // Save the PDF with the specified file name
```

Take a look at the content of the newly generated PDF below. You'll see that IronPDF not only captures the original look of the HTML document but also maintains the operational capabilities of links, forms, and other interactive features.

![Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)

**This PDF originated from the provided code example previously discussed. Observe its strong visual alignment with the earlier displayed image, showcasing IronPDF's precise rendering capabilities.**

Upon a detailed review of the source code for the sample web page, it becomes apparent that it encompasses a diverse array of HTML components such as paragraphs, unordered lists, line breaks, horizontal rules, hyperlinks, images, and also includes some scripts (like those used for cookie settings).

IronPDF is designed to handle even more intricate web content compared to what has been previously demonstrated. To illustrate this, consider the following webpage:

![Figure 5](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-6.webp)

**This piece discusses Puppeteer, a well-known Node library celebrated for its ability to programmatically manage Chrome sessions through a headless browser, essential for tasks such as server-side HTML to PDF conversion.**

The depicted page is an elaborate article on the Puppeteer Node Library, which facilitates headless browser operations that are crucial for Node developers when automating tasks on both server and client sides.

This complex page pulls in various resources such as CSS files, images, and scripts, and displays a sophisticated layout. In the forthcoming example, we will transform a stored version of this page, together with all its associated resources, into a flawless PDF representation.

The following code snippet assumes that the webpage, alongside its necessary resources, is located in the same directory as our project under the filename "sample4.html":

Here is the paraphrased section of the article, with the relative URL paths resolved:

```node
// Convert an intricate HTML code into a PDF document.
PdfDocument.fromHtml("./sample4.html").then(async (pdfDocument) => {
    await pdfDocument.saveAs("html-file-to-pdf-2.pdf");
});
```

The displayed image below illustrates the output from the previously mentioned code snippet.

![Figure 6](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-7.webp)

**When web content renders well in Google Chrome, expect similar high-quality results in your PDFs, including those with extensive CSS and JavaScript.**

### Generate a PDF from a Web URL

IronPDF has the capability to transform not only HTML strings and files but also entire web pages into PDF documents. Beyond processing raw HTML data, IronPDF can fetch and render HTML directly from a web URL.

Take, for example, the Wikipedia entry on PDFs available at [https://en.wikipedia.org/wiki/PDF](https://en.wikipedia.org/wiki/PDF).

![Figure 7](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-8.webp)

**A view of the Wikipedia page on PDFs, displayed as it would look in any modern web browser.**

Here’s how you can convert the mentioned Wikipedia article to a PDF document:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert the web page into a meticulously rendered PDF.
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Save the newly created document.
await pdf.saveAs("wikipedia-pdf-article.pdf");
```

In this snippet, `PdfDocument.fromUrl` is utilized to automatically fetch and convert the content of the specified URL into a PDF, simplifying the process down to just a few lines of code. No need to handle HTML strings or files manually!

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)
**Notice the precision in how the PDF replicates the original web page from the URL invocation.**

Here is the paraphrased section of the article with resolved URL paths:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');

// Render a perfect PDF from the specified web page.
const pdfDocument = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Store the generated PDF to a local file.
await pdfDocument.saveAs("url-to-pdf.pdf");
```

In the above example, we utilize the `PdfDocument.fromUrl` method to effortlessly transform a web page into a PDF document in just a few simple steps. IronPDF handles the extraction and rendering of HTML directly from the URL, which eliminates the need for local HTML files or text inputs.

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)

**The resultant PDF, produced by invoking `PdfDocument.fromUrl` on a Wikipedia page, showcases a high degree of resemblance to the original web page.**

### Convert a PDF from a Compressed HTML File

The `PdfDocument.fromZip` method enables you to create a PDF from an HTML file stored within a ZIP archive.

Imagine we have a ZIP file within our project directory structured as follows:

```plaintext
html-zip.zip
├─ index.html
├─ style.css
├─ logo.png
```

The `index.html` file inside the ZIP archive contains the following HTML code:

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

The `style.css` file includes several CSS rules:

```css
@font-face {
    font-family: 'Gotham-Black';
    src: url('gotham-black-webfont.eot?') format('embedded-opentype'), url('gotham-black-webfont.woff2') format('woff2'), url('gotham-black-webfont.woff') format('woff'), url('gotham-black-webfont.ttf') format('truetype'), url('gotham-black-webfont.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    margin-bottom: auto;
    color: white;
    background-color: black;
    text-align: center;
    font-family: "Helvetica"
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

Lastly, `logo.png` is an image that represents our product logo:

![Figure 9](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)
**The sample image inside a hypothetical HTML zip file.**

To convert the `index.html` file within the zip folder into a PDF, use the following approach:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert HTML contained in a ZIP file to a PDF
PdfDocument.fromZip("./html-zip.zip", {
    mainHtmlFile: "index.html"
}).then(async (pdf) => {
    await pdf.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)
**Demonstration of PDF creation using the `PdfDocument.fromZip` method, which effectively renders HTML and its associated assets from a ZIP file.**

Here's the paraphrased section of the article, with relative URL paths resolved to `ironpdf.com`:

```txt
html-zip-package.zip
├─ main.html
├─ design.css
├─ company-logo.png
```

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

Here's the paraphrased section of the HTML document:

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title>Welcome Message!</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome to IronPDF!</h1>
    <a href="https://ironpdf.com/nodejs/">
      <img src="logo.png" alt="Explore IronPDF for Node.js">
    </a>
  </body>
</html>
```

In this version, the changes include:
- Modification of the page title from "Hello world!" to "Welcome Message!"
- Adjusting the `meta` tag's `viewport` content for clarity.
- Changing greeting text from "Hello from IronPDF!" to "Welcome to IronPDF!"
- Adjusting the `alt` attribute for the image to suggest exploration of IronPDF for Node.js.

```css
/* The following CSS code sets up basic styling for the webpage components. */

/* Custom Gotham-Black font setup */
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

/* Overall body styling for a centered and visually appealing layout */
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: black;
    color: white;
    font-family: "Helvetica";
}

/* Header styling with increased font size */
h1 {
    font-family: "Gotham-Black";
    font-size: 32pt;
    /* This margin bottom creates separation between header and content below */
    margin-bottom: 70px;
}

/* Styling for images to maintain aspect ratio and display sizing */
img {
    width: 400px; /* fixed width for consistency */
    height: auto; /* auto height to maintain aspect ratio */
}

/* Styling for paragraph elements with text-decoration */
p {
    font-size: smaller; /* smaller font size for less emphasis */
    text-decoration: underline; /* underline to highlight important text */
}
```

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
    margin: 200px auto auto auto; /* shorthand for margins */
    color: white;
    background-color: black;
    text-align: center;
    font-family: "Helvetica";
}

h1 {
    font-family: "Gotham-Black";
    font-size: 32pt;
    margin-bottom: 70px; /* margin below header */
}

img {
    width: 400px; /* fixed image width */
    height: auto; /* height scales proportionally */
}

p {
    text-decoration: underline;
    font-size: smaller; /* Smaller font size for paragraph text */
}
```

Below, the `logo.png` serves as an illustration of our product's logo:

![Figure 9](https://www.ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)

**An example image contained within an illustrative HTML zip file.**

Utilize the `fromZip` method by providing a valid path to the zip archive as the first parameter, alongside a JSON object configuring the `mainHtmlFile` attribute to pinpoint the HTML file within the zip that is to be converted.

The conversion of the `index.html` file located within the zip folder is performed similarly:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert HTML content from a zip archive to a PDF file
PdfDocument.fromZip("./html-zip.zip", {
    mainHtmlFile: "index.html"
}).then(async (pdf) => {
    // Save the PDF to a file
    return await pdf.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)

**Generating PDFs with the `PdfDocument.fromZip` method. This method effectively processes the HTML content and its associated assets stored within a ZIP archive.**

## Advanced HTML to PDF Customization

The [`ChromePdfRenderOptions`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html) interface provides Node.js developers with the tools to tailor how HTML is rendered to PDF. The interface exposes properties that allow for detailed customization of the PDF’s appearance and manage various peculiarities encountered during HTML-to-PDF conversions.

By default, IronPDF uses preset values from `ChromePdfRenderOptions` when generating new PDFs. To access and modify these default values, you can use the `defaultChromePdfRenderOptions` function:

```node
// Obtain the default settings for ChromePdfRenderOptions.
var options = defaultChromePdfRenderOptions();
```

This segment delves into common use cases for converting HTML to PDF that typically necessitate utilizing the `ChromePdfRenderOptions` interface.

Each subsection will begin by establishing default settings and will proceed to tailor these settings as necessary to meet specific objectives.

### Tailoring PDF Output in HTML-to-PDF Conversions

IronPDF provides a set of customization options that allow you to enhance the appearance and functionality of PDFs generated from HTML content. These options are accessible through the `ChromePdfRenderOptions` interface, which offers various properties to tweak the PDF rendering process.

#### Adding Custom Headers and Footers

You can easily include custom headers and footers in your PDF documents using the `textHeader` and `textFooter` properties available within IronPDF. This capability lets you integrate distinctive text elements at the top and bottom of each page.

Consider the following example where we generate a PDF from Google's homepage, appending custom text headers and footers that feature distinct fonts and divider lines to help separate them from the main content:

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Create a custom text header
options.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Customize the footer with different font
options.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Generate the PDF
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("add-custom-headers-footers-1.pdf");
});
```

The generated PDF features these enhancements, which can be observed in the visual representation provided:

![Custom PDF Headers and Footers](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)
**Figure: Enhanced PDF with custom headers and footers.**

You also have the option to define headers and footers using HTML content instead of plain text, allowing for richer formatting and inclusion of images or links.

For instance, adding HTML content for headers and footers allows for alignment adjustments, font styling, and the inclusion of images:

```node
import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();
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

// Render the PDF
await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

The result is a visually appealing PDF with decorative elements:

![PDF with HTML Headers and Footers](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)
**Figure: Decorative PDF achieved through HTML customization.**

#### Adjusting Margins, Paper Size, Orientation, and Color Settings

IronPDF supports further customization options including setting specific margins, choosing paper sizes, selecting page orientations, and managing color output.

Here’s how you would configure a PDF to use specific margins, set it to landscape orientation, fit content to A5 paper size, and render in grayscale:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Configure margins and paper settings
options.margin = {
    top: 50, // in millimeters
    bottom: 50,
    left: 60,
    right: 60
};
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;
options.grayScale = true;

// Create and save the PDF
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("set-margins-and-page-size.pdf");
});
```

Each of these customization options allows you to tailor the PDF generation process according to specific requirements, enhancing the visual and functional quality of the output.

#### Customizing Headers and Footers in PDFs

IronPDF allows you to enhance the presentation of your PDFs by adding custom headers and footers using the `textHeader` and `textFooter` properties. These features help you incorporate tailored information into the headers and footers of your PDF documents.

Below, you'll find an example where we craft a PDF version of the Google search home page tailored with uniquely styled headers and footers. Using divider lines, we clearly differentiate these sections from the main content. Varied fonts in the header and footer areas further help highlight these sections distinctly.

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default Chrome PDF render options
let renderOptions = defaultChromePdfRenderOptions();

// Configure custom text header settings
renderOptions.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Configure custom text footer settings
renderOptions.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Asynchronously convert an HTML URL to a PDF with custom headers and footers
PdfDocument.fromUrl("https://www.google.com/", { renderOptions }).then(async (pdfDoc) => {
    // Save the generated PDF to a file
    await pdfDoc.saveAs("custom-headers-footers.pdf");
});
```

The generated PDF is depicted below:

![Figure 11](https://www.ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)

**A newly created PDF page derived from the Google homepage is shown here, highlighting the addition of custom headers and footers.**

For enhanced customization of headers and footers—including layout, positioning, and content—you can opt to use raw HTML instead of plain text.

The following code snippet demonstrates the incorporation of enriched content using HTML. The header showcases a bold and center-aligned page URL, while the footer prominently displays a centered logo.

```node
import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default settings for PDF rendering
let renderOptions = defaultChromePdfRenderOptions();

// Configure HTML header and footer with customization
renderOptions.htmlHeader = {
    htmlFragment: "<strong>https://www.google.com/</strong>",  // Strong emphasis on URL
    dividerLine: true,  // Include a divider line
    dividerLineColor: "blue",  // Set divider color to blue
    loadStylesAndCSSFromMainHtmlDocument: true // Ensure styling from the main HTML document is included
};
renderOptions.htmlFooter = {
    htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",  // Center align image in footer
    dividerLine: true,  // Enable divider line in footer
    loadStylesAndCSSFromMainHtmlDocument: true // Load CSS from the main HTML document for the footer
};

// Convert an HTML file to PDF with specified render options
await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdf) => {
    return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

The result of the modifications is showcased in the image below.

![Figure 12](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)

**IronPDF for Node.js enables the application of various custom settings to your HTML documents during their conversion to PDFs.**

#### Customizing Margins, Page Dimensions, Orientation, and Color with IronPDF

IronPDF facilitates a variety of customization options that allow developers to specify page margins, dimensions, orientation, and even color schemes for their PDF documents.

In the following example, we configure IronPDF to process a webpage into a PDF while setting broad margins, choosing a specific page size, and selecting a landscape orientation. We also take advantage of the option to render the PDF in grayscale to match specific style needs. Here’s how you can apply these configurations:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Configuring page margins in millimeters
options.margin = {
    top: 50,       // Top margin
    bottom: 50,    // Bottom margin
    left: 60,      // Left margin
    right: 60      // Right margin
};

// Set page size to A5
options.paperSize = PaperSize.A5;

// Fit content to page
options.fitToPaperMode = FitToPaperModes.FitToPage;

// Set page orientation to landscape
options.paperOrientation = PdfPaperOrientation.Landscape;

// Render the PDF in grayscale
options.grayScale = true;

// Generate a PDF from the specified web page
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("set-margins-page-size-orientation-color.pdf");
});
```
In this code, we manipulate several parameters to alter how the webpage is rendered into a PDF. This includes adjusting the margins, setting the page to A5 size, ensuring the content fits the page perfectly, setting the document to landscape orientation, and applying a grayscale color scheme. These settings enable precise control over the PDF generation process, which is particularly useful for ensuring that the produced documents meet specific layout requirements or stylistic guidelines.

Here's a paraphrased section of the article with resolved relative URL paths:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default rendering options
var renderOptions = defaultChromePdfRenderOptions();

// Configure page margins in millimeters for top, bottom, left, and right 
renderOptions.margin = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
};

// Define the paper size, fitting mode, and orientation
renderOptions.paperSize = PaperSize.A5;
renderOptions.fitToPaperMode = FitToPaperModes.FitToPage;
renderOptions.paperOrientation = PdfPaperOrientation.Landscape;

// Enable grayscale rendering
renderOptions.grayScale = true;

// Convert the main Google page into a PDF using the specified settings
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdf) => {
    return await pdf.saveAs("configure-margins-and-paper-settings.pdf");
});
```

This section was altered for more clarity and minor changes in variable names and comments, while retaining the original functionality and instructions.

In the previous code example, we set up IronPDF to create a PDF of the Google homepage in grayscale. We chose a landscape layout and defined the margins to be at least 50 millimeters. Additionally, we configured the content to fit an A5 paper size.

### Generating PDFs from Web Content That Loads Dynamically

When dealing with web pages where content does not render immediately upon loading—perhaps due to delayed scripting actions or dynamic content generation—it's crucial to delay the PDF rendering process to ensure completeness. This is particularly necessary when content appears post-load due to scripts or timed events.

For these scenarios, IronPDF provides a feature known as the `WaitFor` property within the `ChromePdfRenderOptions`. This mechanism enables developers to stipulate conditions under which the PDF rendering should commence, ensuring that all dynamic content is captured accurately.

Below is an example detailing how to implement this feature using IronPDF. Here, we configure the system to pause for 20 seconds before initiating the PDF rendering of our homepage. This ensures all dynamically loaded content is rendered correctly in the PDF.

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Setup to delay the rendering process until 20 seconds have passed
var options = defaultChromePdfRenderOptions();
options.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000 //delay in milliseconds
};

// Generate PDF after the specified wait time
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("waitfor-renderdelay.pdf");
});
```

In this script, the `WaitFor` property is set to `RenderDelay`, specifying a delay of 20 seconds before the PDF conversion begins, thus accommodating the load time of dynamic content.

Here's the paraphrased version of the selected article section with resolved relative URL paths:

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Set the Chrome Renderer to delay PDF rendering for 20 seconds,
// allowing dynamic content to load fully.
let renderOptions = defaultChromePdfRenderOptions();
renderOptions.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000 // 20 seconds
};

// Fetch the web page and convert it to a PDF after the delay.
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: renderOptions}).then(async (pdfDocument) => {
    // Save the rendered PDF to the local file system.
    await pdfDocument.saveAs("waitfor-renderdelay.pdf");
});
``` 

This reformatted code snippet maintains the original's functionality but uses slightly different variable names and comments for clarification.

The following code snippet sets up IronPDF to pause until it can successfully select an element from a well-known [SEO text editor](https://surferseo.com/). This ensures that the PDF is only generated after the necessary content is fully loaded and available on the page.

```node
import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import('./config.js');

// Set Chrome Renderer to pause until a specified element appears, waiting for up to 20 seconds
options.waitFor = {
    type: WaitForType.HtmlElement,
    htmlQueryStr: "div.ProseMirror",
    maxWaitTime: 20000,
};

// Create a PDF from the desired URL, configured to wait for the specified HTML element
PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", { renderOptions: options }).then(async (pdf) => {
    return await pdf.saveAs("waitfor-htmlelement.pdf");
});
```

## Creating PDFs from an HTML Template

In this concluding section of our guide, we will utilize the insights previously shared to perform a valuable task: producing one or several PDFs from an HTML template.

The template we will be using is depicted below. Originally taken from this publicly available [invoice template](https://codepen.io/tjoen/pen/wvgvLX), our version has been customized to include placeholders (such as `{COMPANY-NAME}`, `{FULL-NAME}`, `{INVOICE-NUMBER}`, etc.) that can be filled dynamically with specific data.

![Figure 13](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-14.webp)
**A sample invoice template. We are going to enhance it with JavaScript to dynamically insert data before converting it to PDFs.**

Prior to starting, you might want to [download](https://ironpdf.com/static-assets/pdf-nodejs/tutorials/html-to-pdf/html-template.zip) the HTML template to review it in your development environment.

In the upcoming code example, we will import this HTML template into a new `PdfDocument` object, substitute the placeholders we defined with some sample data, and subsequently save the updated `PdfDocument` object to the local storage.

Here's the paraphrased section of the article:

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import("./config.js"); // Importing the configuration file

/**
 * Method to load an HTML template from a file system path.
 */
async function loadHtmlTemplate(path) {
    // Retrieve the template file promise
    return PdfDocument.fromFile(path);
}

/**
 * Method to save a generated PDF document to a specific location.
 */
async function savePdfDocument(pdfDoc, outputPath) {
    return pdfDoc.saveAs(outputPath);
}

/**
 * Method to replace placeholders in the PDF document with specified values.
 */
async function insertDataIntoPdf(pdfDoc, placeholder, data) {
    return pdfDoc.replaceText(placeholder, data);
}

const invoiceTemplatePath = "./sample-invoice.html";
loadHtmlTemplate(invoiceTemplatePath).then(async (document) => { // Load HTML template from the local file system
    await insertDataIntoPdf(document, "{FULL-NAME}", "Lizbeth Presland");
    await insertDataIntoPdf(document, "{ADDRESS}", "678 Manitowish Alley, Portland, OG");
    await insertDataIntoPdf(document, "{PHONE-NUMBER}", "(763) 894-4345");
    await insertDataIntoPdf(document, "{INVOICE-NUMBER}", "787");
    await insertDataIntoPdf(document, "{INVOICE-DATE}", "August 28, 2023");
    await insertDataIntoPdf(document, "{AMOUNT-DUE}", "13,760.13");
    await insertDataIntoPdf(document, "{RECIPIENT}", "Celestyna Farmar");
    await insertDataIntoPdf(document, "{COMPANY-NAME}", "BrainBook");
    await insertDataIntoPdf(document, "{TOTAL}", "13,760.13");
    await insertDataIntoPdf(document, "{AMOUNT-PAID}", "0.00");
    await insertDataIntoPdf(document, "{BALANCE-DUE}", "13,760.13");
    await insertDataIntoPdf(document, "{ITEM}", "Training Sessions");
    await insertDataIntoPdf(document, "{DESCRIPTION}", "60 Minute instruction");
    await insertDataIntoPdf(document, "{RATE}", "3,440.03");
    await insertDataIntoPdf(document, "{QUANTITY}", "4");
    await insertDataIntoPdf(document, "{PRICE}", "13,760.13");
    return document;
}).then(async (document) => await savePdfDocument(document, "html-template-to-pdf.pdf"));
```

This version maintains the original functionality described in the article but rephrases explanatory comments and modifies function and variable names to enhance code readability and maintain clarity.

The aforementioned code details three asynchronous helper functions that are instrumental in the PDF creation process:

- `getTemplateHtml`: This function employs the `PdfDocument.fromHtml` method to initiate a new `PdfDocument` object from an HTML template.

- `addTemplateData`: This function uses the `PdfDocument.replaceText` method to replace specified placeholders within the document with new values.

- `generatePdf`: This function is responsible for saving the `PdfDocument` object to a designated file location.

Additionally, a constant `template` variable is defined to reference the location of the HTML template file used in the process. The resulting PDF, as displayed below, accurately retains the HTML's CSS styles and layout even after the dynamic data substitution, demonstrating the efficiency of IronPDF in handling HTML-to-PDF conversions.

![Figure 14](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-15.webp)

**The newly created PDF preserves the formatting and styles from the HTML template, complete with the substituted dynamic data, appearing as if the modifications were seamlessly integrated.**

## Additional Resources

This guide introduces the basics, but IronPDF offers a wide array of advanced API functionalities. To deepen your understanding and expand your capabilities, explore the following resources:

1. [The `PdfGenerator` class](https://ironpdf.com/nodejs/object-reference/api/classes/PdfGenerator.html): Essential for those looking to streamline the creation of `PdfDocument` objects from various sources like HTML content, URLs, or Zip files. This class stands as a robust alternative to the conventional PDF rendering methods found in the `PdfDocument` class.

2. [`HttpLoginCredentials`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html): This is crucial for generating PDFs from web pages that are cookie-dependent or require authentication. It's an invaluable tool for handling secured content.
```

