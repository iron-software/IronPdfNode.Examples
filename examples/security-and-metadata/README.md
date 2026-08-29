# Passwords, Security & Metadata

> Full guide: [Passwords, Security & Metadata](https://ironpdf.com/nodejs/examples/security-and-metadata/?utm_source=github)

IronPDF provides powerful functionalities for PDF encryption, decryption, metadata manipulation, and permission settings including options for annotations, content copying and pasting, form fields, and printing access.

To access a password-protected PDF, use the `open` method and specify the password as the second argument. To alter metadata, instantiate a new map and populate it with key-value pairs representing the desired metadata. You can then apply this metadata to the PDF by calling the `overrideMetadata` method.

The `removePasswordsAndEncryption` method is designed to eliminate passwords from a PDF file. Meanwhile, the `makePdfDocumentReadOnly` method secures the PDF, encrypting it with 128-bit encryption and restricting the ability to copy and paste content, make annotations, or edit forms.

You can also establish specific permissions by creating a permission object with desired settings and passing it to the `setPermission` method.

For saving changes, the `saveAs` method allows you to set `ownerPassword` and `userPassword` attributes accordingly.

For a comprehensive understanding of what IronPDF can do, you can visit the [IronPDF product page](https://ironpdf.com?utm_source=github) or find out more about Iron Software at their [homepage](https://ironsoftware.com?utm_source=github).

[Explore Security & Metadata Examples on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/security-and-metadata) for practical implementations and further insights.

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Import a PDF document or create a new PDF from Html
    const pdf = await PdfDocument.open("encrypted.pdf", {
        // A password is a PdfPassword object, not a bare string: passing
        // "password" here fails validation with "Expected object, received string".
        password: { userPassword: "password" },
    });

    // Create an empty Map
    const newMetadata = new Map();

    // Add key-value pairs of metadata
    newMetadata.set("Author", "Satoshi Nakamoto");
    newMetadata.set("Keywords", "SEO, Friendly");

    await pdf.overrideMetadata(newMetadata);

    await pdf.removePasswordsAndEncryption();
    // Make PDF read-only
    await pdf.makePdfDocumentReadOnly("secret-key");

    // Configure permissions
    const permissions = {
        AllowAnnotations: false,
        AllowExtractContent: false,
        AllowFillForms: false,
        AllowPrint: true,
    };

    await pdf.setPermission(permissions);
    
    // Change or set the document encrpytion password
    await pdf.saveAs("secured.pdf", {
        ownerPassword: "top-secret",
        userPassword: "my-password",
    });
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
