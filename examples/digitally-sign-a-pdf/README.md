# Digital Signatures

> Full guide: [Digital Signatures](https://ironpdf.com/nodejs/examples/digitally-sign-a-pdf/?utm_source=github)

Applying a digital signature to a PDF starts by uploading an existing PDF file.

To digitize a signature, utilize the `signDigitalSignature` method. This function will need the digital certificate's file path and the password used to authorize the document. You also have the option to add further details such as the signing reason and the geographical location.

Below is an example of applying a digital signature with IronPDF for Node.js:

In this scenario:
- Begin by loading the PDF you need to sign using `PdfDocument.fromFile`.
- Next, use the `signDigitalSignature` method to apply the digital signature, where you'll specify the path to your `.pfx` file (the digital certificate) and the password. Optional information about the signing reason and location may be provided as well.
- Conclude by saving the now signed PDF using the `saveAs` method.

After the digital signature is in place, you can distribute the signed PDF file by using the `saveAs` method. This document is now securely authenticated.

For additional guidance on this functionality within IronPDF, visit the [IronPDF digital signature documentation](https://ironpdf.com/docs/?utm_source=github).

[Explore Code: Digitally Sign a PDF with IronPDF](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/digitally-sign-a-pdf)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Step 1. Import a PDF
const pdf = await PdfDocument.open("sample.pdf");

    // Step 2. Sign the PDF with digital certificate
    await pdf.signDigitalSignature({
        certificatePath: "IronSoftware.pfx",
        certificatePassword: "123456",
        signingReason: "To show how to sign a PDF",
        signingLocation: "Chicago, USA",
        signatureImage: {
            SignatureImagePath: "logo.png"
        }
    });

    //Step 3. The PDF is not signed until saved to file.
await pdf.saveAs("signed.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
