# PDF Encryption & Decryption

> Full guide: [PDF Encryption & Decryption](https://ironpdf.com/nodejs/examples/encryption-and-decryption/?utm_source=github)

This example illustrates how to update metadata, transform a PDF to read-only mode, adjust permissions, and modify the document's encryption password with IronPDF for Node.js.

Start by loading an existing PDF through the `open` method. This function can also access password-protected files if you supply the password as its second argument, ensuring solid management of secure files.

To update metadata, begin by initializing a dictionary and populate it with metadata key-value pairs, such as the author and keywords. Use the `overrideMetadata` method from IronPDF to effectively implement these metadata updates on the PDF.

Proceed to strip away any previous passwords and encryption by employing the `removePasswordsAndEncryption` method from IronPDF. Then, make the PDF read-only by establishing a new password using the `makePdfDocumentReadOnly` method, solidifying the document's security and integrity.

Set up the permissions for the PDF using a newly defined permissions object. This should delineate allowed and disallowed activities such as annotations, content extraction, form filling, and printing. Pass this object to the `setPermission` method to accurately manage the document's usage capabilities.

Lastly, update or establish a new document encryption password to "my-password" and save the altered PDF as "secured.pdf". This example underlines the capabilities of IronPDF in ensuring the security and management of documents in application development.

[Explore more about PDF Encryption & Decryption with IronPDF](https://ironpdf.com/examples/encryption-and-decryption/?utm_source=github)

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
    await pdf.saveAs("secured.pdf", {userPassword:"my-password"});
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
