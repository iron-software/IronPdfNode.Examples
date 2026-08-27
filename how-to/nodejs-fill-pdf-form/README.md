# How to Populate PDF Forms with Node.js: A Step-by-Step Guide

> Full guide: [How to Populate PDF Forms with Node.js: A Step-by-Step Guide](https://ironpdf.com/nodejs/how-to/nodejs-fill-pdf-form/)


This guide will walk you through the process of populating PDF forms using Node.js, focusing on the utilization of IronPDF. IronPDF ships as a first-class npm package, `@ironsoftware/ironpdf`.

## Prerequisites

Before starting this tutorial, please ensure the following requirements are met:

1. **Node.js installed**: Confirm that Node.js is set up on your machine. It can be downloaded from the [Node.js official website](https://nodejs.org/).

2. **IronPDF license key**: You will need an IronPDF license key to fully access the capabilities of IronPDF's PDF manipulation features. A free trial or a full license can be acquired through the IronPDF [product page](https://ironpdf.com/nodejs/).

## Installation

Install the package from npm:

```shell
npm install @ironsoftware/ironpdf
```

## Filling PDF Forms

With IronPDF set up, you can proceed to fill out PDF forms. Here’s a straightforward example illustrating how to populate a PDF form.

```js
const { PdfDocument, IronPdfGlobalConfig } = require("@ironsoftware/ironpdf");

IronPdfGlobalConfig.getConfig().licenseKey = "IRONPDF-MYLICENSE-KEY-1EF01";

(async () => {
    // Load the PDF that carries the form
    const pdf = await PdfDocument.fromFile("./form.pdf");

    // Discover the field names if you do not already know them
    const fieldNames = await pdf.getFormFieldNames();
    console.log("Form fields:", fieldNames);

    // Fill each field by name
    await pdf.setFormFieldValue("firstName", "Jane");
    await pdf.setFormFieldValue("email", "jane@example.com");

    // Flatten to lock the values into the page content
    await pdf.flattenAllFormFields();

    await pdf.saveAs("./filled-form.pdf");
})();
```

For additional information on form population capabilities and other advanced PDF processing features, delve into the IronPDF [documentation](https://ironpdf.com/docs/) and discover how to effectively employ the library in a variety of contexts.

## Conclusion

IronPDF is a standout solution for handling PDF documents within Node.js environments, offering a vast array of features such as form population, document rendering, and more. Unleash the full capabilities of IronPDF by visiting the Iron Software official [features page](https://ironpdf.com/features/).

Leverage IronPDF in your projects now to simplify your PDF management tasks efficiently and effectively.