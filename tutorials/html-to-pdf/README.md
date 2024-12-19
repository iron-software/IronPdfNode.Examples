# HTML to PDF with NodeJS

***Based on <https://ironpdf.com/tutorials/html-to-pdf/>***


_Converting HTML, CSS, and JavaScript into high-quality PDFs represents the most potent capability of IronPDF. This guide serves as a thorough introduction for Node developers aiming to integrate HTML to PDF functionalities within their applications using IronPDF._

_IronPDF stands out as a high-level API library designed to facilitate the integration of advanced and resilient PDF manipulation features into software applications swiftly and effortlessly. Available for [various programming languages](https://ironsoftware.com/nodejs/licensing/), IronPDF provides extensive guidelines on PDF creation across several platforms, including [.NET](https://ironsoftware.com/tutorials/html-to-pdf/), [Java](https://ironsoftware.com/java/tutorials/html-to-pdf/), and [Python](https://ironsoftware.com/python/tutorials/html-to-pdf/). Refer to the official [documentation](https://ironsoftware.com/docs/) for more specifics. This tutorial will focus on its application within Node.js projects._

___

## Beginning Your Journey

### Setting Up IronPDF in Your Node.js Project

To incorporate IronPDF into your Node.js project, start by installing the IronPDF package. Use the following NPM command in your preferred Node project environment:

```shell
npm install @ironsoftware/ironpdf
```

Alternatively, you can [manually download and install](https://ironsoftware.com/nodejs/#download-modal) the IronPDF package if needed.

### Installing the IronPDF Engine Manually (Optional)

IronPDF for Node.js relies on a specific [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64) for optimal functionality, tailored to your operating system.

You can directly [install the necessary package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) tailored for your setup. While the `@ironpdf` package will typically automatically fetch and set up this binary during its first run, manually installing the engine is essential in environments with limited or no internet access.

### Activating a License Key (Optional)

IronPDF, by default, embeds a watermark on all created or edited documents. You can remove this watermark by acquiring a license key and configuring it in your project.

![Figure 1](https://ironsoftware.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)
**To create watermark-free PDF documents, [acquire a license key](https://ironsoftware.com/nodejs/licensing/) suitable for your project.**

Setting up the `licenseKey` in the `IronPdfGlobalConfig` object is straightforward. Here’s how to do it:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

var config = IronPdfGlobalConfig.getConfig();
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

You can [purchase a license key](https://ironsoftware.com/nodejs/licensing/) directly or [request a free trial key](https://ironsoftware.com/trial-license) to test the functionalities without watermark limitations. Ensure you set these configurations before invoking other library functionalities for optimal performance.

The remainder of this tutorial will proceed under the assumption that you have configured a license key within a dedicated JavaScript file named _config.js_. This configuration file will be imported wherever IronPDF's functionalities are used:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');
// Further IronPDF functionalities here...
```

### Setting Up IronPDF Library for Node.js

To integrate IronPDF into your Node.js project, execute the NPM command provided below:

```shell
npm install @ironsoftware/ironpdf
```

```shell
npm install @ironsoftware/ironpdf
```

You also have the option to [download and install](https://ironpdf.com/nodejs/#download-modal) the IronPDF package manually.

### Optional Manual Installation of the IronPDF Engine

For proper functionality, Node.js implementations of IronPDF necessitate the inclusion of an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64). 

You can manually procure and install the necessary IronPDF Engine binary by selecting and [installing a compatible package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) suitable for your operating system. 

Although it's optional to manually install this engine—given that the `@ironpdf` package will default to automatically fetching and configuring the required binary via NPM during its first run—manual installation can become crucial in environments with limited, unreliable, or no internet connectivity.

### Optional License Key Application

IronPDF automatically applies a watermark to all created or altered documents, marked with a distinctive background title.

![Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)

**To create watermark-free PDF documents, acquire a license key at [ironpdf.com/nodejs/licensing/](https://ironpdf.com/nodejs/licensing/).**

To eliminate this default watermark, you need to input a valid license key into the `licenseKey` property found on the `IronPdfGlobalConfig` object. Below is an example of how you can implement this in your code:

```node
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

let config = IronPdfGlobalConfig.getConfig();
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

This code sample demonstrates the appropriate way to configure IronPDF to operate without embedding watermarks into your documents.

```node
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Retrieve the Global Configuration for IronPDF
let config = IronPdfGlobalConfig.getConfig();

// Insert your license key to remove watermarks
config.licenseKey = "{ENTER-YOUR-LICENSE-KEY}";
```

To unlock the full potential of IronPDF without watermark limitations, [purchase a license key](https://ironpdf.com/nodejs/licensing/) on our licensing portal, or reach out to us to [get a free trial license key](https://ironpdf.com/trial-license).

It's crucial to configure the [license key and other global settings](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) before employing any library functionalities. Doing so ensures optimal performance and correct operation of the software.

In the subsequent segments of this guide, we'll proceed under the assumption that a license key has been acquired and configured within a JavaScript module named `config.js`. This module is imported into any script where IronPDF's capabilities are required.
```

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js'); // Importing configuration settings
// Continue with additional code below
```

## HTML to PDF Conversion Techniques

The IronPDF Library for Node.js offers three distinct methods to create PDF documents from HTML sources:

1. From a string containing HTML code
2. From an HTML file stored locally
3. From an HTML page available online

Detailed explanations of each method are provided in the following subsections.

## Generating PDF from HTML Strings

The `PdfDocument.fromHtml` method enables the creation of PDF documents directly from HTML strings. This functionality stands out due to its versatility—HTML data can originate from various sources including file systems, data streams, or dynamically generated web content.

Below is a practical example showing how to implement the `PdfDocument.fromHtml` method:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Creating a PDF from HTML markup "Hello world!"
const pdf = await PdfDocument.fromHtml("<h1>Welcome to IronPDF!</h1>");

// Storing the PDF document onto the disk.
await pdf.saveAs("string-html-to-pdf.pdf");
```

This snippet initializes the PDF generation by passing a simple HTML markup string, `<h1>Welcome to IronPDF!</h1>`, to the `PdfDocument.fromHtml` method. It then saves the generated PDF document locally, demonstrating IronPDF's robust capabilities in translating HTML content into high-quality PDFs.

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generate a PDF document using the HTML markup "<h1>Hello from IronPDF!</h1>"
const pdfDocument = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");

// Write the newly created PDF file to the local disk.
await pdfDocument.saveAs("html-string-to-pdf.pdf");
```

In the example provided, we utilize the `PdfDocument.fromHtml` method, passing it a simple HTML markup string that contains a heading element. This method is instrumental in initiating the PDF generation process.

Upon execution, `PdfDocument.fromHtml` asynchronously returns a new instance of the `PdfDocument` class. This class is vital within IronPDF, serving as the building block for the majority of its functions, enabling extensive PDF creation and modification tasks.

After generating the PDF document, the `saveAs` method is called on the `PdfDocument` instance, allowing us to save the resultant file to our system. Below is the saved PDF file.

![Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-3.webp)

**The PDF produced from the HTML string "`<h1>Hello from IronPDF!</h1>`" closely mirrors the appearance of its web content origin.**

### Generating a PDF from an HTML Document

The `PdfDocument.fromHtml` method is designed to be versatile, allowing not only the conversion of HTML strings but also direct processing of HTML files saved locally.

For example, let's explore conversion using the following [sample web page](https://filesamples.com/samples/code/html/sample2.html).

![Figure 3](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-4.webp)

**View our sample HTML page in Google Chrome. You can access and download this page and similar samples from the File Samples website: <https://filesamples.com/samples/code/html/sample2.html>**

The next snippet demonstrates how to transform the full content of the sample HTML document into a PDF file. Rather than using an HTML string, here we utilize `PdfDocument.fromHtml` with a path to our local HTML file:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert an HTML document into a PDF
const pdf = await PdfDocument.fromHtml("./sample2.html");

// Save the PDF to the project folder.
await pdf.saveAs("html-file-to-pdf-1.pdf");
```

This execution not only keeps the visual integrity of the original HTML but also preserves interactive features such as links and forms. 

![Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)
**Observe the PDF generated from the above code. Notice how it maintains a striking resemblance to the HTML original**, showcasing IronPDF's capability to faithfully render complex web content, including diverse HTML elements like paragraphs, lists, images, and scripts.

Below is a paraphrased version of the provided Node.js code segment using IronPDF to generate a PDF from an HTML file:

```node
// Import necessary classes from the IronPDF library
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');  // Import configuration settings

// Generate a PDF from an HTML file located in the project's directory
const pdfDocument = await PdfDocument.fromHtml("./sample2.html");

// Store the newly created PDF in the project's directory
await pdfDocument.saveAs("html-file-to-pdf-1.pdf");
```

This code snippet demonstrates how to efficiently produce a PDF from a local HTML file and then save it within the same directory as the project. The modifications present the same process in a slightly altered, yet still clear manner.

Below, we depict the final appearance of the PDF just generated. Observe how IronPDF accurately maintains both the visual design and interactivity (links, forms, etc.) of the initial HTML page.

![Figure 4](https://ironsoftware.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)

**This PDF has been created from the previously provided code snippet. Please compare its layout to the earlier image to appreciate the precise similarity.**

Upon analyzing the HTML source of our example page, it's evident that the layout is intricate. It incorporates a diverse array of HTML elements (such as paragraphs, lists, line breaks, and horizontal rules) and various scripting elements (like those used for setting cookies).

IronPDF excels at interpreting more detailed web content, far exceeding simpler document conversions. To demonstrate its capabilities, let's examine the article detailed below:

![Figure 5](https://ironsoftware.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-6.webp)

**A discussion about Puppeteer, known for automating Chrome tasks using headless browser technology.**

Featured in this segment is an article focused on the Puppeteer Node library—a tool acclaimed for managing headless browser sessions which serve to automate myriad browser-related tasks in Node environments, including HTML to PDF conversions on servers.

This page not only utilizes a complex arrangement but also pulls resources from multiple assets like CSS, image files, and scripts. In our next demonstration, we'll transform a saved version of this article (including all related assets) into a perfectly-rendered PDF version.

The subsequent code assumes that the article is located within our project directory under the filename "sample4.html":

Here's the paraphrased version of the provided section, with updated relative URL paths where applicable:

```node
// Convert and save advanced HTML code to a PDF file.
PdfDocument.fromHtml("./sample4.html").then(async (pdf) => {
    return await pdf.saveAs("html-file-to-pdf-2.pdf");
});
```

The image below illustrates the output from the previously mentioned code example.

![Figure 6](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-7.webp)

**If it renders nicely in Google Chrome, the resulting PDF will also display beautifully. This conversion includes intricate CSS and JavaScript-based web designs.**

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert the specified web page to a pixel-perfect PDF file
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Save the generated document to your system
await pdf.saveAs("webpage-to-pdf.pdf");
```

Above that, we've used the `PdfDocument.fromUrl` function to transform the web page into a PDF document in just a few lines of code. `IronPDF` does the HTML fetching for you and renders it effortlessly. You don't need to have HTML files or text strings prepared!
 
![Figure 7](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-8.webp)
**This PDF was crafted from the Wikipedia entry for PDF, depicting a true-to-life reproduction of the original web page.**

Here's the paraphrased section of the article with links and images resolved to ironpdf.com:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Generate an exact PDF replica of the web page.
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Store the PDF file on disk.
await pdf.saveAs("url-to-pdf.pdf");
```

In the example demonstrated, the `PdfDocument.fromUrl` method simplifies the process of converting a web page into a PDF document, handling everything from fetching the HTML code to rendering the final PDF smoothly. This approach eliminates the need for managing HTML files or text strings directly.

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)

**The PDF created using `PdfDocument.fromUrl` for a Wikipedia article closely resembles the original web page in appearance.**

```txt
html-zip.zip
├─ index.html
├─ style.css
├─ logo.png
```

The index.html file contains the code:

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

style.css declares five CSS rules:

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

Lastly, logo.png depicts our product logo:

![Figure 9](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)
**The sample image inside a hypothetical HTML zip file.**

When calling the `fromZip` method, specify a valid path to the zip in the first argument, along with a JSON object that sets the `mainHtmlFile` property with the name of the HTML file from the zip that we want to convert.

We convert the index.html file inside the zip folder in like manner:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Render the HTML string
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

This snippet shows the HTML code contained in the index.html file.

Here's the paraphrased version of the HTML section provided:

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
      <img src="logo.png" alt="Explore IronPDF for Node.js">
    </a>
  </body>
</html>
```

Below are the five CSS rules specified in `style.css`:

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

In this stylesheet, five CSS rules are configured:

1. A foundation rule specifies the `Gotham-Black` font family with various font formats supported and standard attributes for display and style set to normal.
2. The styling for the `body` establishes a centered, flex-column layout with black background and white color text, using Helvetica font.
3. The styling for `h1` header tags assigns the `Gotham-Black` font, a significant bottom margin, and a notable font size.
4. Image (`img`) elements are set to a fixed width with automatic height adjustment.
5. Paragraph (`p`) elements are underscored with text-decoration and rendered in a smaller font size.

Below is the paraphrased CSS section:

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
    align-items: center; /* center items horizontally in modern layout */
    justify-content: center; /* center items vertically */
    margin: 200px auto auto auto; /* shorthand for margin top, right, bottom and left */
    color: white; /* white text color */
    background-color: black; /* black background color */
    text-align: center; /* Center the text within the body element */
    font-family: "Helvetica"; /* Set font family for the body */
}

h1 {
    font-family: "Gotham-Black"; /* Specify custom font */
    margin-bottom: 70px; /* Set bottom margin */
    font-size: 32pt; /* Set font size */
}

img {
    width: 400px; /* Set fixed width */
    height: auto; /* Height auto for responsive behavior */
}

p {
    text-decoration: underline; /* Underline paragraph text */
    font-size: smaller; /* Set font size smaller than the parent element’s font size */
}
```

Lastly, the logo.png image represents the IronPDF product logo:

![Figure 9](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)

**This is a sample image from a fictional HTML zip archive.**

When utilizing the `fromZip` method, provide a valid path to the zip archive as the first parameter. Additionally, include a JSON object specifying the `mainHtmlFile` to denote the HTML file within the zip that should be transformed into a PDF.

Following this method, we similarly convert the index.html located within the zip folder:

```node
import {PdfDocument} from "@ironsoftware/ironpdf";
import('./config.js');

// Convert an HTML file within a zip archive to a PDF document
PdfDocument.fromZip("./html-zip.zip", {
    mainHtmlFile: "index.html"
}).then(async (pdfDocument) => {
    await pdfDocument.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)

**Generating PDFs with the `PdfDocument.fromZip` Method. This method effectively processes the HTML content inside a ZIP archive, including all related resources.**

## Detailed HTML to PDF Customization Techniques

The [`ChromePdfRenderOptions`](https://www.ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html) interface provides Node.js developers the tools to fine-tune how HTML is rendered to PDF. This interface's properties allow for detailed customization of the PDF's appearance before the rendering process and help manage various HTML-to-PDF transformation scenarios.

When you first utilize IronPDF to generate PDFs, it operates with default settings predefined in `ChromePdfRenderOptions`. To review and modify these default settings, use the `defaultChromePdfRenderOptions` function:

```node
// Obtain default settings for ChromePdfRenderOptions.
var options = defaultChromePdfRenderOptions();
```

This segment swiftly navigates the most common scenarios for converting HTML to PDF that necessitate employing the `ChromePdfRenderOptions` interface.

Each part commences with the default settings and adjusts them appropriately to realize the desired results.

### Tailoring PDF Generation Output

The `ChromePdfRenderOptions` interface facilitates precise adjustments to how PDFs are rendered from HTML in Node.js environments. Below, we’ll explore how developers can customize the resulting PDFs using various settings available within this interface.

Let's start with an example where we add different headers and footers to our PDFs. Each header and footer utilizes unique configurations, such as font styles and divider lines, to achieve a desired aesthetic and functional distinction between the content of pages and these structural elements.

Here’s a code snippet demonstrating custom header and footer integration:

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

let renderOptions = defaultChromePdfRenderOptions();

// Define a custom header with text elements
renderOptions.textHeader = {
    centerText: "https://www.adobe.com",
    leftText: "Source: Web",
    dividerLine: true,
    font: AffixFonts.TimesRoman,
    fontSize: 14
};

// Define a custom footer
renderOptions.textFooter = {
    centerText: "Generated by IronPDF",
    rightText: "Node.js PDF Generation",
    dividerLine: true,
    fontSize: 12,
    font: AffixFonts.Helvetica
};

// Generate PDF with custom header and footer
PdfDocument.fromUrl("https://www.google.com/", {renderOptions}).then(async (pdf) => {
    await pdf.saveAs("custom-header-footer.pdf");
});
```

![Custom PDF Example](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)
**A PDF generated from the Google homepage featuring custom headers and footers.**

For more creative control, you can define headers and footers using HTML rather than basic text. This approach allows the incorporation of rich content like images and CSS styling:

```node
import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";
import('./config.js');

let htmlOptions = defaultChromePdfRenderOptions();

htmlOptions.htmlHeader = {
    htmlFragment: "<h1 style='color: navy;'>Google Homepage</h1>",
    dividerLine: true,
    dividerLineColor: "silver"
};

htmlOptions.htmlFooter = {
    htmlFragment: "<footer><em>Page rendered by IronPDF</em></footer>",
    dividerLine: true
};

// Render a PDF from Google homepage with HTML headers and footers
await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: htmlOptions}).then(async (pdf) => {
    await pdf.saveAs("html-custom-header-footer.pdf");
});
```

![Enhanced PDF Example](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)
**A PDF that includes detailed HTML-based headers and footers for enhanced presentation.**

### Adjusting Layout, Size, and Formatting

IronPDF also supports modifications to page layout settings, such as margins, paper size, orientation, and color options:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

let pageOptions = defaultChromePdfRenderOptions();

// Setup custom margins and page settings
pageOptions.margin = { top: 45, bottom: 45, left: 35, right: 35 };
pageOptions.paperSize = PaperSize.Legal;
pageOptions.fitToPaperMode = FitToPaperModes.NoScaling;
pageOptions.paperOrientation = PdfPaperOrientation.Portrait;
pageOptions.grayScale = true;

// Apply settings to generate a PDF
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: pageOptions}).then(async (pdf) => {
    await pdf.saveAs("formatted-pdf.pdf");
});
```

This snippet configures the PDF to adhere to specific print-ready standards, including legal-sized paper in portrait orientation with custom margins, rendered in grayscale. These examples underscore the robust customization capabilities of IronPDF for Node.js, enabling developers to tailor PDF outputs for varied technical needs.

#### Customizing Headers and Footers in PDFs

The properties `textHeader` and `textFooter` within IronPDF enable you to add personalized headers and footers to your new PDF documents.

For instance, in the following example, we transform the Google search home page into a PDF document that includes specially formatted headers and footers. These additions are clearly differentiated from the main content by divider lines. Furthermore, unique font choices are employed in each section to enhance their distinction:

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Set up a custom header that includes a center-aligned URL and a distinctive left-aligned label
options.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Configure a footer that displays a custom message and the right-aligned text
options.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF in Node.js"
};

// Generate a PDF from the HTML of the Google home page
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("add-custom-headers-footers-1.pdf");
});
```

This tailored approach in applying headers and footers enhances the professional appearance of your PDF, making it apt for various business and personal applications where branding and information clarity are crucial.

```node
import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default options for PDF rendering
var renderOptions = defaultChromePdfRenderOptions();

// Customize the header with text details
renderOptions.textHeader = {
    centerText: "https://www.adobe.com",
    dividerLine: true,
    font: AffixFonts.CourierNew,
    fontSize: 12,
    leftText: "URL to PDF"
};

// Define a footer with unique details
renderOptions.textFooter = {
    centerText: "IronPDF for Node.js",
    dividerLine: true,
    fontSize: 14,
    font: AffixFonts.Helvetica,
    rightText: "HTML to PDF with Node.js"
};

// Configure the PDF document from an HTML source
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdf) => {
    // Save the newly created PDF to a file
    return await pdf.saveAs("custom-headers-footers-in-pdf.pdf");
});
```

The resulting PDF from the source code can be seen below:

![Figure 11](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)

**This newly created PDF page originated from the Google homepage. Observe how the additional headers and footers are integrated.**

To enhance control over the header and footer's layout, positioning, and included content, instead of plain text, one can use raw HTML.

The following code segment demonstrates injecting more elaborate content into the header and footer using HTML. The header emphasizes and centers the page URL, while the footer features a centrally aligned logo.

```node
import { PdfDocument, defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";
import('./config.js');

// Initialize default rendering options
let renderOptions = defaultChromePdfRenderOptions();

// Customizing the HTML header
renderOptions.htmlHeader = {
    htmlFragment: "<strong>https://www.google.com/</strong>",
    dividerLine: true,
    dividerLineColor: "blue",
    loadStylesAndCSSFromMainHtmlDocument: true,
};

// Customizing the HTML footer
renderOptions.htmlFooter = {
    htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='align: center; width: 150px;'>",
    dividerLine: true,
    loadStylesAndCSSFromMainHtmlDocument: true
};

// Generating the PDF from an URL
await PdfDocument.fromUrl("https://www.google.com/", { renderOptions }).then(async (pdf) => {
    return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

The resultant image, displayed below, showcases the effect of these modifications.

![Figure 12](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)

**IronPDF for Node.js enables custom adjustments to your HTML content during the PDF conversion process.**

#### Customizing Margins, Page Dimensions, Orientation, and Color Settings

In order to tailor the margins, the dimensions of the pages, their orientation, and even the color output of a PDF, IronPDF provides an array of configurable options. These features allow developers to manipulate how the PDF appears when generated from web content. Here’s how to utilize these settings effectively:

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();

// Configure the top, bottom, left, and right margins in millimeters.
options.margin = {
    top: 50,
    bottom: 50,
    left: 60,
    right: 60
};

// Define the paper size, fitting mode, and orientation.
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;

// Set the document to be rendered in grayscale.
options.grayScale = true;

// Generate a PDF from the Google home page with the custom settings applied.
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("custom-margin-page-size.pdf");
});
```

In the example above, margins are set to ensure at least a 50 millimeter border around each page, which helps in framing the content neatly. The `PaperSize.A5` and `PdfPaperOrientation.Landscape` settings are selected to shape the document layout, while `FitToPaperModes.FitToPage` ensures the content scales appropriately to the A5 size. The `grayScale` setting is enabled, which can be useful for documents that do not require color, such as certain forms and official papers that need a more formal presentation. 

This versatile configuration mechanism not only enhances the visual appeal of the documents but also aligns them with precise formatting requirements for professional use.

```node
import {PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation} from "@ironsoftware/ironpdf";
import('./config.js');

// Initialization of default rendering options
let renderOptions = defaultChromePdfRenderOptions();

// Configure page margins in millimeters for each side.
renderOptions.margin = {
    top: 50,    // Top margin
    bottom: 50, // Bottom margin
    left: 60,   // Left margin
    right: 60   // Right margin
};

// Set up paper size and orientation 
renderOptions.paperSize = PaperSize.A5;
renderOptions.fitToPaperMode = FitToPaperModes.FitToPage;
renderOptions.paperOrientation = PdfPaperOrientation.Landscape;
renderOptions.grayScale = true; // Render PDF in grayscale

// Generate a PDF from the webpage at Google.com with specified render options
PdfDocument.fromUrl("https://www.google.com/", {renderOptions: renderOptions}).then(async (pdf) => {
    return await pdf.saveAs("custom-margin-and-size.pdf");
});
```

In the code snippet presented earlier, we've set up IronPDF to produce a PDF of the Google homepage. The settings adjust the document to be in grayscale, laid out in a landscape orientation, and include a minimum margin of 50 millimeters all around. Additionally, the output is tailored to comfortably fit the dimensions of A5-sized paper.

### Generating PDFs from Dynamic Web Content

When dealing with web pages that do not instantly display all their content upon loading—because some elements only appear after certain triggers or delays—it might be crucial to delay the PDF conversion process. This ensures that the rendered PDF captures the complete content as intended.

For example, a developer might need to create a PDF from a page where specific content is scripted to appear 15 seconds post-load. Or, in another scenario, content may be triggered by sophisticated client-side scripts.

To manage these situations, IronPDF offers the `WaitFor` property in the `ChromePdfRenderOptions`. This allows developers to specify a set of conditions under which the IronPDF engine will delay the conversion process until the desired content is fully available on the page.

Here's how to set up IronPDF to wait 20 seconds before capturing a website’s content to ensure all dynamic content is included:

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

var options = defaultChromePdfRenderOptions();
// Set IronPDF to delay rendering until 20 seconds have elapsed
options.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000  // Delay in milliseconds
};
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("wait-for-render-delay.pdf");
});
```

In the above code, IronPDF is configured to wait for a 20-second pause before starting the PDF rendering process. This feature is especially useful for pages that load dynamically, ensuring that all content is captured accurately in the PDF.

Here's the paraphrased content with URLs resolved to `ironpdf.com`:

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Set up the Chrome renderer to pause for 20 seconds before converting the web page to PDF.
let renderOptions = defaultChromePdfRenderOptions();
renderOptions.waitFor = {
    type: WaitForType.RenderDelay,
    delay: 20000 // The delay in milliseconds.
};

// Generate a PDF from the URL after the specified delay.
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", {renderOptions: renderOptions}).then(async (pdf) => {
    await pdf.saveAs("waitfor-renderdelay.pdf"); // Save the generated PDF to a file.
});
```

The following code snippet sets up IronPDF to delay the conversion of a web page into PDF format until a specific element from a well-known [SEO text editor](https://surferseo.com/) is detected on the page:

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Adjust the Chrome Renderer settings to pause until a particular HTML element is present
options.waitFor = {
    type: WaitForType.HtmlElement,
    htmlQueryStr: "div.ProseMirror",
    maxWaitTime: 20000,
}
PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("waitfor-htmlelement.pdf");
});
```

```node
import {PdfDocument, defaultChromePdfRenderOptions, WaitForType} from "@ironsoftware/ironpdf";
import('./config.js');

// Set up the Chrome Renderer to delay up to 20 seconds until a certain HTML element is visible
options.waitFor = {
    type: WaitForType.HtmlElement,
    htmlQueryStr: "div.ProseMirror",
    maxWaitTime: 20000,
}
PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", {renderOptions: options}).then(async (pdf) => {
    return await pdf.saveAs("waitfor-htmlelement.pdf");
});
```

## Generating PDFs from HTML Templates

In this final segment of our tutorial, we're going to integrate all previously discussed concepts to achieve a practical task: generating PDF documents from HTML templates.

The template we'll utilize is depicted below. Adapted from a widely available [invoice template](https://codepen.io/tjoen/pen/wvgvLX), this template is crafted to include placeholders like `{COMPANY-NAME}`, `{FULL-NAME}`, `{INVOICE-NUMBER}`, etc., which can be substituted with actual data.

![Figure 13](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-14.webp)

**Here's a sample invoice template, ready to be populated with dynamic data prior to PDF generation.**

Before progressing, feel free to [download](https://ironpdf.com/static-assets/pdf-nodejs/tutorials/html-to-pdf/html-template.zip) this HTML template and review it using your preferred development environment.

Next, we'll demonstrate how to load this template into a new `PdfDocument` instance, replace the specified placeholders with sample test data, and subsequently save the resultant `PdfDocument` to the file system.

```node
import { PdfDocument } from "@ironsoftware/ironpdf";
import('./config.js');

/**
 * Asynchronously loads an HTML template from the local storage.
 */
async function fetchHtmlTemplate(filePath) {
    // Asynchronously retrieve and return HTML file as a promise
    return PdfDocument.fromFile(filePath);
}

/**
 * Asynchronously save a PDF to a specified file location.
 */
async function savePdfDocument(pdf, savePath) {
    return pdf.saveAs(savePath);
}

/**
 * Asynchronous function to substitute placeholders in the PDF with actual data values.
 */
async function substituteTemplateContent(pdf, placeholder, actualValue) {
    return pdf.replaceText(placeholder, actualValue);
}

const invoiceTemplate = "./sample-invoice.html";
fetchHtmlTemplate(invoiceTemplate).then(async (document) => { // load the HTML template from a file
    await substituteTemplateContent(document, "{FULL-NAME}", "Lizbeth Presland");
    await substituteTemplateContent(document, "{ADDRESS}", "678 Manitowish Alley, Portland, OG");
    await substituteTemplateContent(document, "{PHONE-NUMBER}", "(763) 894-4345");
    await substituteTemplateContent(document, "{INVOICE-NUMBER}", "787");
    await substituteTemplateContent(document, "{INVOICE-DATE}", "August 28, 2023");
    await substituteTemplateContent(document, "{AMOUNT-DUE}", "13,760.13");
    await substituteTemplateContent(document, "{RECIPIENT}", "Celestyna Farmar");
    await substituteTemplateContent(document, "{COMPANY-NAME}", "BrainBook");
    await substituteTemplateContent(document, "{TOTAL}", "13,760.13");
    await substituteTemplateContent(document, "{AMOUNT-PAID}", "0.00");
    await substituteTemplateContent(document, "{BALANCE-DUE}", "13,760.13");
    await substituteTemplateContent(document, "{ITEM}", "Training Sessions");
    await substituteTemplateContent(document, "{DESCRIPTION}", "60 Minute instruction");
    await substituteTemplateContent(document, "{RATE}", "3,440.03");
    await substituteTemplateContent(document, "{QUANTITY}", "4");
    await substituteTemplateContent(document, "{PRICE}", "13,760.13");
    return document;
}).then(async (document) => await savePdfDocument(document, "html-template-to-pdf.pdf"));
```

The section above introduces three asynchronous utility functions to handle PDF creation and manipulation with IronPDF:

- `getTemplateHtml`: This function utilizes the `PdfDocument.fromHtml` method to bring an HTML template into a new `PdfDocument` object.
  
- `addTemplateData`: This function employs the method `PdfDocument.replaceText` to replace a specified placeholder, identified as a 'key', with a corresponding 'value' data.
  
- `generatePdf`: This function is responsible for saving the `PdfDocument` object at a specified file path.

Additionally, the passage defines a constant `template` which contains the path to the HTML template file. The created PDF from the explained process is depicted below.

![Figure 14](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-15.webp)

**The resulting PDF file, derived from replacing placeholders in an HTML template with actual data, retains the expected CSS styling and layout perfectly.**

## Further Exploration

The content covered in this tutorial introduces only the fundamentals of what you can achieve using the IronPDF library's advanced API. To expand your skills and discover more functionalities, consider delving into the following topics:

1. [The `PdfGenerator` class](https://ironpdf.com/nodejs/object-reference/api/classes/PdfGenerator.html): This class serves as a specialized utility for generating `PdfDocument` instances from various sources, including HTML content, URLs, and Zip archives. It provides an effective alternative method to the typical PDF rendering functions found in the `PdfDocument` class.

2. [`HttpLoginCredentials`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html): This feature is essential for creating PDFs from web pages that require authentication via cookies or password protection, offering crucial functionality for secure PDF generation.
```

