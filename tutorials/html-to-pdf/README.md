# HTML to PDF NodeJS

***Based on <https://ironpdf.com/tutorials/html-to-pdf/>***


_Converting high-quality PDFs from raw HTML, CSS, and JavaScript is a standout feature of IronPDF, immensely popular for its efficiency and fidelity. This guide provides a thorough introduction for Node developers to exploit IronPDF for integrating HTML to PDF conversion capabilities into their projects._

_IronPDF is an advanced API library that enables developers to quickly and effortlessly integrate rich PDF processing features into their applications. Available across [various programming environments](https://ironpdf.com/nodejs/licensing/), IronPDF offers extensive documentation on PDF generation in platforms such as [.NET](https://ironpdf.com/tutorials/html-to-pdf/), [Java](https://ironpdf.com/java/tutorials/html-to-pdf/), and [Python](https://ironpdf.com/python/tutorials/html-to-pdf/). This tutorial specifically addresses its application within Node.js projects._

___

## Initial Setup

### Install the IronPDF Library for Node.js

To integrate the IronPDF library into your Node.js project, execute the following NPM installation command in your project directory:

```shell
npm install @ironsoftware/ironpdf
```

Alternatively, you have the option to [download and install the IronPDF package manually](https://ironpdf.com/download-modal).

### Optional: Manual Installation of the IronPDF Engine

For optimal functionality in Node.js applications, IronPDF may require a specific binary referred to as the [IronPDF Engine](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64).

To manually install the necessary IronPDF Engine binary, follow the steps detailed on the [official package page](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) that corresponds to your operating system.

While the `@ironpdf` package typically downloads and installs the required engine binary automatically during its initial run, manual installation is crucial in environments with limited or no internet connectivity.

### Optional: Configuring a License Key

By default, IronPDF generates documents stamped with a watermark. However, you can remove this watermark by entering a valid license key into the `licenseKey` property of the `IronPdfGlobalConfig` object. Below is how you can configure this in your project:

```javascript
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Retrieve the global configuration object
var config = IronPdfGlobalConfig.getConfig();

// Set your acquired license key
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

To acquire a license key, visit the [licensing page](https://ironpdf.com/nodejs/licensing/) or [contact us for a trial key](https://ironpdf.com/trial-license).

It's important to set your license key and any other [configuration parameters](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html) before utilizing library functionalities to ensure optimal performance.

Next, we presume you have configured a separate JavaScript file named _config.js_ for settings, as shown:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js';  // Ensure you import the config settings

// The rest of your code follows...
```

This setup ensures all aspects of the IronPDF library are correctly initialized for use in your Node.js application.

### Setting Up IronPDF for Node.js Projects

To integrate the IronPDF library into your Node.js application, execute the following NPM command within your project directory:

```shell
npm install @ironsoftware/ironpdf
```

```shell
npm install @ironsoftware/ironpdf
```

You also have the option to [manually download and install](https://ironpdf.com/download-modal) the IronPDF package.

### Optional Manual Installation of the IronPDF Engine

For Node.js implementations, IronPDF necessitates the use of an [IronPDF Engine binary](https://www.npmjs.com/package/@ironsoftware/ironpdf-engine-windows-x64) to function effectively.

To manually install this component, select and [install the relevant package](https://www.npmjs.com/package/@ironsoftware/ironpdf#for-windows-x64) that matches your operating system's requirements.

The manual installation of the IronPDF Engine is optional. By default, the `@ironpdf` package will handle the download and installation of the necessary binaries from NPM during its initial execution. However, in environments with limited or unreliable internet access, manually installing the IronPDF Engine is recommended to ensure uninterrupted functionality.

### Implementing a License Key (Optional)

IronPDF naturally appends a distinguished background watermark to every document it creates or edits by default.

![Figure 1](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-2.webp)

**Secure a licence key from [ironpdf.com/nodejs/licensing/](https://ironpdf.com/nodejs/licensing/) to produce watermark-free PDF documents.**

To eliminate this default watermark from your PDF documents, you'll need to input a valid license key into the `licenseKey` field of the global `IronPdfGlobalConfig` object. Below is the code snippet to achieve this:

Here is the paraphrased section of your article, with proper markdown formatting and resolved URL paths:

```javascript
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Retrieve the global configuration object
var config = IronPdfGlobalConfig.getConfig();

// Assign the license key to enable IronPDF
config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

[Acquire a license key](https://ironpdf.com/nodejs/licensing/) from our licensing page, or get in touch to [receive a trial license key for free](https://ironpdf.com/trial-license).

Before using other features of the library, it's crucial to set the license key [alongside other global configuration parameters](https://ironpdf.com/nodejs/object-reference/api/interfaces/IronPdfConfig.html). This ensures optimal performance and functionality of the library.

In the following parts of this guide, we'll proceed under the assumption that a license key is already configured and stored in a separate JavaScript file named `config.js`. This configuration file is imported into any script where IronPDF's capabilities are utilized.

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Load the configuration settings
// Additional code...
```

## HTML to PDF Conversion Techniques

The Node.js version of the IronPDF library presents three distinct strategies to transform HTML content into PDF documents:

1. From HTML code as a text string
2. From an HTML file stored locally
3. From a webpage accessible via a URL

This segment offers a detailed walkthrough of each method to create PDFs.

### Generating a PDF from HTML Content as a String

The method `PdfDocument.fromHtml` enables the creation of PDF documents directly from HTML strings. This approach is highly versatile because it allows you to utilize HTML content from diverse sources, including text files, data streams, HTML templates, or dynamically created HTML.

Below is an example that illustrates how to effectively utilize the `PdfDocument.fromHtml` method:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Ensure the configuration script is imported

// Generate a PDF from the HTML content "Hello world!"
const pdf = await PdfDocument.fromHtml("<h1>Welcome to IronPDF!</h1>");

// Save the newly created PDF document to the file system.
await pdf.saveAs("example-html-to-pdf.pdf");
```

In the example above, we pass an HTML string containing a header tag to the `PdfDocument.fromHtml` method. This method processes the HTML string and creates a PDF document, which we then save using the `saveAs` method. This demonstrates the straightforward process of converting basic HTML into a PDF file using IronPDF.

Here is your paraphrased section with enhanced comments in the code for clarity, and the relative URL paths have been resolved:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Load the configuration settings for IronPDF

// Generate a PDF document from provided HTML content "<h1>Hello from IronPDF!</h1>"
const pdfDocument = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");

// Persist the generated PDF to the local file system with a specified file name.
await pdfDocument.saveAs("html-string-to-pdf.pdf");
```

In the example provided, we utilize the method `PdfDocument.fromHtml` with a simple HTML text that includes a headline tag to demonstrate how to create a PDF. This method invokes a promise that delivers an instance of the `PdfDocument` class upon resolution. This class represents a PDF document crafted from any given HTML content and remains fundamental to numerous functionalities within IronPDF, notably in vital PDF creation and manipulation tasks.

Once the PDF is generated, we employ the `saveAs` method to persist the document to a storage device. Displayed below is the PDF that was created.

![Figure 2](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-3.webp)

**The PDF rendered from the HTML string "<h1>Hello from IronPDF!</h1>" showcases that the output PDF reliably mirrors the format of the original web content.**

### Convert a Local HTML Document to PDF

The `PdfDocument.fromHtml` function is versatile, allowing for PDF generation not only from HTML strings but also directly from paths to HTML files on your local system.

For this example, we use this [sample web page](https://filesamples.com/samples/code/html/sample2.html).

![Figure 3](https://ironpdf.static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-4.webp)

**View our example HTML page in Google Chrome. You can download this and related pages from the File Samples website at [this link](https://filesamples.com/samples/code/html/sample2.html).**

The code snippet below demonstrates converting the entire HTML document to a PDF by employing `PdfDocument.fromHtml` with the path to our local HTML file:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

// Convert an HTML file into a PDF document
const pdf = await PdfDocument.fromHtml("./sample2.html");

// Save the generated PDF to a directory relative to our project
await pdf.saveAs("html-file-to-pdf-1.pdf");
```

As illustrated, we invoke the `PdfDocument.fromHtml` method with a local file path pointing to our HTML document, easily generating a PDF representation of the HTML content. IronPDF ensures that the final PDF not only visually matches the original HTML file but also maintains functional elements like hyperlinks and forms.

![Figure 4](https://ironpdf.static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)

**Observe the PDF created from the HTML file above. It strikingly resembles the source document, maintaining layout and interactivity where applicable.**

Here is the paraphrased section of the article with the relative URL paths resolved appropriately:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Include the configuration script

// Generate a PDF from a local HTML file
const pdfDocument = await PdfDocument.fromHtml("./sample2.html");

// Save the generated PDF in the project directory
await pdfDocument.saveAs("html-file-to-pdf-1.pdf");
```

Below is the content of the PDF output. It's evident that IronPDF faithfully maintains both the visual and functional aspects of the original HTML page, including interactive features such as links and forms.

![Figure 4](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-5.webp)

**Upon reviewing the produced PDF, you'll find it mirrors the initial appearance remarkably, as seen in the previous image comparison.**

Should you scrutinize the HTML source for the sample, you’ll realize its complexity, which integrates various HTML elements like paragraphs, lists, line breaks, rules, as well as multimedia elements like images, and even scripts, such as those used for cookie management.

IronPDF expertly handles even more intricate web content beyond our current examples. For instance, let's explore the following page:

![Figure 5](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-6.webp)

**Here's an insightful article on Puppeteer, a Node library lauded for its control over Chrome via a headless browser, aiding Node developers in automating various browser tasks, including server-side HTML to PDF conversions.**

The article described employs multiple resources including CSS, images, and JavaScript, showcasing a more sophisticated layout. Next, we’ll transform a stored version of this site (together with its associated resources) into an impeccably precise PDF.

Assuming that this web page is located within our project directory under the name "sample4.html":

The given code illustration takes into account that the page and its resources are stored locally and illustrates how they can be converted into an accurate PDF representation.

Here is the paraphrased section of the article with resolved relative URL paths:

```javascript
import { PdfDocument } from '@ironsoftware/ironpdf';
import './config.js'; // Importing configuration settings

// Generate a PDF from a more intricate HTML document.
PdfDocument.fromHtml("./sample4.html").then(async (pdfDocument) => {
    // Save the generated PDF to the file system.
    return await pdfDocument.saveAs("html-file-to-pdf-2.pdf");
});
```

The image below displays the outcome of the previously mentioned code example.

![Figure 6](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-7.webp)

**If the rendering appears fine in Google Chrome, you can expect the same high-quality results in the PDF, inclusive of intricate CSS and JavaScript designs.**

### Generating PDFs from Web URLs

IronPDF offers the flexibility to transform HTML from various sources beyond just raw strings or local files. It is capable of fetching and converting web-based HTML directly from URLs into PDF documents.

Let's consider converting the Wikipedia page about the PDF format available at [https://en.wikipedia.org/wiki/PDF](https://en.wikipedia.org/wiki/PDF).

![Figure 7](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-8.webp)
**Here's how the Wikipedia page on PDFs appears in a web browser that adheres to web standards.**

The following code snippet illustrates how to transform this Wikipedia article into a PDF document:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

// Convert a web page to a high-quality PDF
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");

// Save the PDF to the local file system
await pdf.saveAs("wikipedia-pdf-article.pdf");
```

In this example, `PdfDocument.fromUrl` is employed to effortlessly convert the content of the specified URL into a PDF. This method seamlessly handles the retrieval and rendering of the web page into a PDF format without needing intermediary HTML files or markup strings.

![Figure 8](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)
**Observe the rendered PDF generated from the Wikipedia URL. Note its fidelity to the original webpage's layout and styling.**

Here is the paraphrased section, with the relative URL paths resolved to `ironpdf.com`:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Configuration script imported


// Turn a Web Page into an exact PDF copy.
const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");


// Write the file to disk.
await pdf.saveAs("url-to-pdf.pdf");
```

In the example provided, we utilize the `PdfDocument.fromUrl` method to efficiently transform a webpage into a PDF document. The process is simple and streamlined, requiring no additional HTML files or markup texts. IronPDF handles the extraction and conversion of the HTML from the specified URL, ensuring a seamless rendering into PDF format.

![Figure 8](https://www.ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-9.webp)

**The produced PDF, generated using `PdfDocument.fromUrl` on a Wikipedia article, closely mirrors the appearance of the original webpage.**

```plaintext
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

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

// Render the HTML from a zip archive
PdfDocument.fromZip("./html-zip.zip", {
  mainHtmlFile: "index.html"
}).then(async (pdf) => {
  return await pdf.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)
**PDF Creation using the `PdfDocument.fromZip` function. This function successfully renders the HTML code contained in the ZIP file, with its contained assets.**

```plaintext
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

Here is the paraphrased section of the HTML code:

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
      <img src="logo.png" alt="IronPDF Node.js Library">
    </a>
  </body>
</html>
```

```css
@font-face {
  font-family: "Gotham-Black";
  src: url("gotham-black-webfont.eot?") format("embedded-opentype"), 
       url("gotham-black-webfont.woff2") format("woff2"), 
       url("gotham-black-webfont.woff") format("woff"), 
       url("gotham-black-webfont.ttf") format("truetype"), 
       url("gotham-black-webfont.svg") format("svg");
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

```css
@font-face {
  font-family: 'Gotham-Black';
  src: url('gotham-black-webfont.eot?') format('embedded-opentype'),
       url('gotham-black-webfont.woff2') format('woff2'), 
       url('gotham-black-webfont.woff') format('woff'), 
       url('gotham-black-webfont.ttf') format('truetype'), 
       url('gotham-black-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;  /* Use fonts with no specific emphasis */
  font-display: swap;  /* Allow font swapping */
}

body {
  display: flex;  /* Flexible box layout */
  flex-direction: column;  /* Stack elements vertically */
  justify-content: center; /* Center content vertically within the container */
  margin-left: auto;  /* Center the body horizontally */
  margin-right: auto;
  margin-top: 200px;  /* Spacing at the top of the body */
  margin-bottom: auto;
  color: white;  /* Text color */
  background-color: black;  /* Background color */
  text-align: center;  /* Align text centrally */
  font-family: "Helvetica";  /* Typography style */
}

h1 {
  font-family: "Gotham-Black"; /* Header font style */
  margin-bottom: 70px; /* Space below the header */
  font-size: 32pt; /* Font size for the header */
}

img {
  width: 400px;  /* Fixed width for images */
  height: auto;  /* Adjust height proportionately */
}

p {
  text-decoration: underline;  /* Underline paragraph text */
  font-size: smaller;  /* Smaller font size for paragraph text */
}
```

Lastly, the `logo.png` file represents the logo of our product:

![Figure 9](https://www.ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-10.webp)

**This is a sample image found within a fictitious HTML zip archive.**

To utilize the `fromZip` method, input the correct path to the zip file as the primary argument and include a JSON object that specifies the `mainHtmlFile` key. This key should contain the name of the primary HTML file within the zip that you wish to transform into a PDF.

Using a similar process, we transform the `index.html` file located within the specified zip folder:

Here's the paraphrased section of the article, including the resolution of relative URL paths:

```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import configuration settings

// Generate a PDF from the contents of a zip file
PdfDocument.fromZip("./html-zip.zip", {
  mainHtmlFile: "index.html"
}).then(async (pdf) => {
  return await pdf.saveAs("html-zip-to-pdf.pdf");
});
```

![Figure 10](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-11.webp)

**Generating PDFs with the `PdfDocument.fromZip` method. This method effectively converts HTML code and associated resources from a ZIP archive into a PDF document.**

## Advanced HTML to PDF Generation Options

The interface [`ChromePdfRenderOptions`](https://www.ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html) provides Node.js developers with the capability to tailor the HTML rendering process within the IronPDF library. It offers detailed control over how PDFs look before they are rendered and addresses particular challenges in HTML-to-PDF conversions.

IronPDF starts by rendering PDFs with a set of default `ChromePdfRenderOptions`. To access and modify these default settings, you can use the `defaultChromePdfRenderOptions` function. This allows developers to customize the PDF's appearance from the outset, ensuring precise adherence to their specific requirements.

```javascript
import { defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";

// Obtain default settings for ChromePdfRenderOptions
var options = defaultChromePdfRenderOptions();
```

Let's explore the common scenarios for HTML-to-PDF conversions where the `ChromePdfRenderOptions` interface plays a crucial role.  We'll start each example with the default settings of the options and tailor them as necessary to meet specific rendering requirements.

### Tailoring PDF Output

The `ChromePdfRenderOptions` class allows developers to configure the appearance and functionality of the PDF documents generated by IronPDF. These options offer precise control over how HTML content is converted into PDFs, catering to specific needs and scenarios.

#### Incorporating Custom Headers and Footers

You can enhance your PDFs with bespoke headers and footers using the properties `textHeader` and `textFooter`. The following example demonstrates this by adding distinctive headers and footers to the PDF version of the Google search homepage. It uses divider lines for separation and distinct fonts for clarity.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, AffixFonts } from "@ironsoftware/ironpdf";
import './config.js';  // Ensure configuration is loaded

// Initialize render options to the default
var options = defaultChromePdfRenderOptions();

// Establishing a header with custom text
options.textHeader = {
  centerText: "https://www.adobe.com",
  dividerLine: true,
  font: AffixFonts.CourierNew,
  fontSize: 12,
  leftText: "URL to PDF"
};

// Setting up a custom footer
options.textFooter = {
  centerText: "IronPDF for Node.js",
  dividerLine: true,
  fontSize: 14,
  font: AffixFonts.Helvetica,
  rightText: "HTML to PDF in Node.js"
};

// Generating a PDF from a URL
PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("custom-headers-footers.pdf");
});
```

This script outputs a PDF with added text in the header and footer, as depicted below:

![Custom Headers and Footers Example](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)
**Notice the custom text in the header and footer of this PDF generated from the Google home page.**

To further customize the header and footer of your PDFs, you can also use HTML content instead of plain text. The next code snippet incorporates richer content using HTML for both the header and footer, enhancing the visual appeal of your document.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";
import './config.js'; // Ensure configuration is loaded

// Fetch the default rendering options
var options = defaultChromePdfRenderOptions();

// Create an HTML-based header
options.htmlHeader = {
  htmlFragment: "<strong>https://www.google.com/</strong>",
  dividerLine: true,
  dividerLineColor: "blue",
  loadStylesAndCSSFromMainHtmlDocument: true,
};

// Construct an HTML-based footer
options.htmlFooter = {
  htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
  dividerLine: true,
  loadStylesAndCSSFromMainHtmlDocument: true
};

// Generate a PDF from a URL
await PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("html-based-headers-footers.pdf");
});
```

The result is a visually enhanced PDF with styled headers and footers as shown below:

![HTML Headers and Footers Example](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)
**This example demonstrates the application of HTML content for customizing headers and footers in a PDF document.**

#### Custom Page Settings: Margins, Sizes, Orientation, and Color Mode

IronPDF also enables the adjustment of PDF page settings such as margins, sizes, orientation, and color mode for tailored document appearances.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation } from "@ironsoftware/ironpdf";
import './config.js';  // Ensure configuration is loaded

// Initialize Chrome PDF rendering options to their defaults
var options = defaultChromePdfRenderOptions();

// Setting custom margins and paper layout
options.margin = {
  top: 50,  // top margin
  bottom: 50,  // bottom margin
  left: 60,  // left margin
  right: 60  // right margin
};
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;
options.grayScale = true;

// Rendering a PDF from a URL with specific settings
PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("custom-page-settings.pdf");
});
```

This example configures custom margins and applies grayscale to enhance readability, setting the document to fit A5 paper size in landscape orientation.

#### Customizing Headers and Footers in PDF Documents

The `textHeader` and `textFooter` attributes allow the addition of tailored header and footer text to your PDF documents. 

Below is an illustration describing how to generate a PDF from the Google search homepage featuring bespoke headers and footers. Divider lines are employed to segregate these sections from the main content, and varied fonts are used to enhance the distinction between them.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, AffixFonts } from "@ironsoftware/ironpdf";
import './config.js'; // Load the configuration script

// Set initial render settings to defaults
var options = defaultChromePdfRenderOptions();

// Configure a custom text header in the PDF
options.textHeader = {
  centerText: "https://www.adobe.com", // Center text
  dividerLine: true, // Add a divider line below the text
  font: AffixFonts.CourierNew, // Use Courier New font
  fontSize: 12, // Set font size to 12
  leftText: "URL to PDF" // Text on the left
};

// Configure a custom text footer in the PDF
options.textFooter = {
  centerText: "IronPDF for Node.js", // Center text
  dividerLine: true, // Add a divider line above the text
  fontSize: 14, // Set font size to 14
  font: AffixFonts.Helvetica, // Use Helvetica font
  rightText: "HTML to PDF in Node.js" // Text on the right
};

// Create a PDF from a web URL using the specified render options
PdfDocument.fromUrl('https://www.google.com/', { renderOptions: options }).then(async (pdf) => {
  // Save the PDF with custom headers and footers
  return await pdf.saveAs("add-custom-headers-footers-1.pdf");
});
```

The resulting PDF is displayed below:

![Figure 11](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-12.webp)

**This PDF has been freshly generated from the Google homepage and now includes custom headers and footers.**

For greater flexibility in customizing the headers and footers, raw HTML can be used instead of just plain text.

The following code snippet demonstrates the integration of intricate HTML content in both the header and footer sections. The header bolds and centrally aligns the website URL, while the footer centers a logo image.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";
import './config.js'; // Ensure the configurations are imported

// Initialize render options using defaults
var options = defaultChromePdfRenderOptions();

// Set up an HTML header with a bold and center-aligned page URL
options.htmlHeader = {
  htmlFragment: "<strong>https://www.google.com/</strong>",
  dividerLine: true,
  dividerLineColor: "blue",
  loadStylesAndCSSFromMainHtmlDocument: true,
};

// Set up an HTML footer with a centered logo.
options.htmlFooter = {
  htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
  dividerLine: true,
  loadStylesAndCSSFromMainHtmlDocument: true
};

// Render a PDF from the specified URL using customized rendering options
await PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

This tweak enriches the visual aesthetics and functionality of the PDF’s header and footer, enhancing its professional appearance and alignment with branding requirements.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";
import './config.js'; // Load the configuration script

// Set up initial render options with default settings
let options = defaultChromePdfRenderOptions();

// Establish a detailed HTML header
options.htmlHeader = {
  htmlFragment: "<strong>https://www.google.com/</strong>",
  dividerLine: true,
  dividerLineColor: "blue",
  loadStylesAndCSSFromMainHtmlDocument: true,
};

// Set up a detailed HTML footer
options.htmlFooter = {
  htmlFragment: "<img src='logo.png' style='width: 150px; margin: auto; display: block;' alt='IronPDF for Node.js'>",
  dividerLine: true,
  loadStylesAndCSSFromMainHtmlDocument: true
};

// Convert a webpage to a PDF using customized render options
await PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("add-html-headers-footers.pdf");
});
```

The following image illustrates the outcome of these modifications.

![Figure 12](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-13.webp)

**With IronPDF for Node.js, you can seamlessly integrate unique customizations into your HTML during the PDF conversion process.**

#### Configuration for Margins, Page Dimensions, Orientation, and Color

IronPDF allows users to configure detailed aspects such as page margins, dimensions, orientations, and colors for newly generated PDF documents.

Here's the paraphrased section with relative URLs resolved appropriately:

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation } from "@ironsoftware/ironpdf";
import './config.js'; // Bringing in the configuration script

// Establish default settings for the render options
let options = defaultChromePdfRenderOptions();

// Define the margins for the pages in millimeters
options.margin = {
  top: 50,
  bottom: 50,
  left: 60,
  right: 60
};

// Adjust paper size, fit mode, orientation, and greyscale options
options.paperSize = PaperSize.A5;
options.fitToPaperMode = FitToPaperModes.FitToPage;
options.paperOrientation = PdfPaperOrientation.Landscape;
options.grayScale = true;

// Generate a PDF from the homepage of Google
PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
  // Save the resultant PDF with configured settings
  return await pdf.saveAs("set-margins-and-page-size.pdf");
});
```

In the previously shown example, we set up IronPDF to create a PDF rendition of the Google homepage, ensuring it's in grayscale, adopts a landscape layout, and maintains a margin of at least 50 millimeters. Additionally, we adjusted the settings to fit the visual content perfectly onto A5-sized paper.

### Generating PDFs from Dynamic Website Content

When dealing with web pages that load content dynamically, for example, those that display content several seconds after the initial page load or those that need special client-side script execution, you might find it necessary to delay the PDF generation process. This ensures that the final PDF captures all desired web content after it's fully rendered. 

In scenarios like these, IronPDF for Node.js provides the `WaitFor` mechanism within the `ChromePdfRenderOptions`. This feature allows developers to specify conditions under which the conversion should proceed, ensuring that dynamic content is fully rendered before IronPDF initiates the PDF creation process.

A practical example would be generating a PDF from a homepage that only completes its content loading 15 seconds post-load. The following example demonstrates how to configure IronPDF to wait for 20 seconds before it begins converting the webpage into a PDF document:

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

// Setup Chrome rendering options with a 20-second delay 
var options = defaultChromePdfRenderOptions();
options.waitFor = {
  type: WaitForType.RenderDelay,
  delay: 20000 // Pause for 20 seconds
}

// Convert the webpage into a PDF after the delay
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", { renderOptions: options }).then(async (pdf) => {
  return await pdf.saveAs("delayed-rendering.pdf");
});
``` 

This snippet effectively instructs the IronPDF Chrome Rendering engine to delay PDF generation, capturing the webpage's content only after the designated wait time.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

// Set the settings for the PDF renderer to delay for 20 seconds before starting the PDF conversion.
var options = defaultChromePdfRenderOptions();
options.waitFor = {
  type: WaitForType.RenderDelay,
  delay: 20000 // Delay in milliseconds
}

// Generate a PDF from the webpage with a controlled render delay.
PdfDocument.fromUrl("https://ironpdf.com/nodejs/", { renderOptions: options }).then(async (pdf) => {
    // Save the PDF file after the conversion is complete.
    return await pdf.saveAs("waitfor-renderdelay.pdf");
});
```

The following code snippet sets up IronPDF to pause until it can successfully select an element from a well-known [SEO text editor](https://surferseo.com/).

Below is the paraphrased section of the article with all relative URL paths resolved to `ironpdf.com`.

```javascript
import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import './config.js'; // Import configuration settings

// Setup the Chrome Renderer to pause for up to 20 seconds until a specific HTML element is detected
var options = defaultChromePdfRenderOptions();
options.waitFor = {
  type: WaitForType.HtmlElement,
  htmlQueryStr: "div.ProseMirror",
  maxWaitTime: 20000, // Wait for up to 20 seconds
};

// Start PDF conversion from a URL with specified rendering options
PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", { renderOptions: options }).then(async (pdf) => {
  // Save the generated PDF once it's ready
  return await pdf.saveAs("waitfor-htmlelement.pdf");
});
```

This version maintains the original's intent and instructions, while using varied language and structure to achieve a natural and engaging flow.

## Generating PDFs from HTML Templates

In this concluding part of the guide, we're going to utilize all the concepts previously discussed to perform a highly useful task: creating one or multiple PDFs from an HTML template.

We are starting with a template adapted from this [publicly accessible invoice template](https://codepen.io/tjoen/pen/wvgvLX) which includes placeholders like `{COMPANY-NAME}`, `{FULL-NAME}`, `{INVOICE-NUMBER}`, etc., allowing us to dynamically replace these tags with actual data.

![Figure 13](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-14.webp)
**This is a sample invoice template. We'll be adding dynamic content to this template with JavaScript prior to generating our PDFs.**

The forthcoming code snippet will demonstrate how we load the HTML template into a new `PdfDocument` object, modify its placeholder tags with some preset test data, and subsequently save the `PdfDocument` object to our file system.

Here is the paraphrased section in Markdown, with links and image paths resolved to `ironpdf.com`:


```javascript
import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script


/**
 * Fetches an HTML template from the local system.
 */
async function retrieveHtmlTemplate(path) {
  // Returns a promise that resolves with the loaded template
  return PdfDocument.fromFile(path);
}


/**
 * Saves a PDF to a specified location.
 */
async function savePdfDocument(pdf, outputPath) {
  return pdf.saveAs(outputPath);
}


/**
 * Replaces text placeholders within the PDF with actual values.
 */
async function updatePdfContent(pdf, placeholder, realValue) {
  return pdf.replaceText(placeholder, realValue);
}


// Define the path to the invoice template
const invoiceTemplatePath = "./sample-invoice.html";


// Load the HTML template, replace placeholders, and export as PDF
retrieveHtmlTemplate(invoiceTemplatePath).then(async (doc) => {
    // Inject real data into placeholders
    await updatePdfContent(doc, "{FULL-NAME}", "Lizbeth Presland");
    await updatePdfContent(doc, "{ADDRESS}", "678 Manitowish Alley, Portland, OG");
    await updatePdfContent(doc, "{PHONE-NUMBER}", "(763) 894-4345");
    await updatePdfContent(doc, "{INVOICE-NUMBER}", "787");
    await updatePdfContent(doc, "{INVOICE-DATE}", "August 28, 2023");
    await updatePdfContent(doc, "{AMOUNT-DUE}", "13,760.13");
    await updatePdfContent(doc, "{RECIPIENT}", "Celestyna Farmar");
    await updatePdfContent(doc, "{COMPANY-NAME}", "BrainBook");
    await updatePdfContent(doc, "{TOTAL}", "13,760.13");
    await updatePdfContent(doc, "{AMOUNT-PAID}", "0.00");
    await updatePdfContent(doc, "{BALANCE-DUE}", "13,760.13");
    await updatePdfContent(doc, "{ITEM}", "Training Sessions");
    await updatePdfContent(doc, "{DESCRIPTION}", "60 Minute instruction");
    await updatePdfContent(doc, "{RATE}", "3,440.03");
    await updatePdfContent(doc, "{QUANTITY}", "4");
    await updatePdfContent(doc, "{PRICE}", "13,760.13");
    return doc;
}).then(async (doc) => await savePdfDocument(doc, "html-template-to-pdf.pdf"));
```
```

This revised section reflects a more natural language and adjusts function and variable names for clarity while maintaining the overall functionality and structure of the original JavaScript code example.

The preceding code outlines three asynchronous helper functions to streamline the process of PDF generation from an HTML template:

- `getTemplateHtml`: This function deploys the `PdfDocument.fromHtml` method to populate a newly instantiated `PdfDocument` object with an HTML template.

- `addTemplateData`: Utilizing the `PdfDocument.replaceText` method, this function replaces a designated placeholder (labeled as a key) with a specified data value.

- `generatePdf`: This function writes a `PdfDocument` object to a specified file path.

Additionally, the constant `template` is used to reference the path where the HTML template is stored. The resultant PDF, demonstrated below, successfully integrates the real data into predefined placeholders, maintaining the original CSS styles and layout integrity.

![Figure 14](https://ironpdf.com/static-assets/ironpdf-nodejs/tutorials/html-to-pdf/html-to-pdf-15.webp)

**The newly generated PDF document from an HTML template, wherein placeholders have been adequately filled with actual data, seamlessly maintaining the expected CSS styling and layout as originally designed.**

## Additional Resources

While this guide introduces the core capabilities of IronPDF, there's much more to explore to fully leverage its high-level API features. Delve into these resources to expand your expertise:

1. **[The `PdfGenerator` class](https://ironpdf.com/nodejs/object-reference/api/classes/PdfGenerator.html):** This specialized utility class is designed for constructing `PdfDocument` instances from various sources including HTML content, URLs, and Zip files. This provides a robust alternative to the more traditional PDF rendering methods available in the `PdfDocument` class.

2. **[`HttpLoginCredentials`](https://ironpdf.com/nodejs/object-reference/api/interfaces/ChromePdfRenderOptions.html):** For projects requiring PDF generation from web pages with access restrictions, such as cookie-dependent or password-protected sites, this documentation is particularly valuable.

