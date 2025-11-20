***Based on <https://ironpdf.com/examples/encryption-and-decryption/>***

This example illustrates how to update metadata, transform a PDF to read-only mode, adjust permissions, and modify the document's encryption password with the robust C# .NET library provided by IronPDF.

Start by loading an existing PDF through the `open` method. This function can also access password-protected files if you supply the password as its second argument, ensuring solid management of secure files.

To update metadata, begin by initializing a dictionary and populate it with metadata key-value pairs, such as the author and keywords. Use the `overrideMetadata` method from IronPDF to effectively implement these metadata updates on the PDF.

Proceed to strip away any previous passwords and encryption by employing the `removePasswordsAndEncryption` method from IronPDF. Then, make the PDF read-only by establishing a new password using the `makePdfDocumentReadOnly` method, solidifying the document's security and integrity.

Set up the permissions for the PDF using a newly defined permissions object. This should delineate allowed and disallowed activities such as annotations, content extraction, form filling, and printing. Pass this object to the `setPermission` method to accurately manage the document's usage capabilities.

Lastly, update or establish a new document encryption password to "my-password" and save the altered PDF as "secured.pdf". This example underlines the capabilities of IronPDF in ensuring the security and management of documents in application development.

```csharp
// Include the required namespace from IronPdf.
using IronPdf;

class EncryptPdfExample
{
    static void Main()
    {
        // Load an existing PDF file, enter password if the document is secured.
        var pdfDocument = IronPdf.PdfDocument.FromFile("original.pdf", "secure-password");

        // Set up new metadata for the PDF.
        var metadataInfo = new Dictionary<string, string>
        {
            { "Author", "Updated Author" },
            { "Keywords", "PDF, Edit, Metadata" }
        };

        // Update the PDF's metadata with the newly defined information.
        pdfDocument.OverrideMetadata(metadataInfo);

        // Clear all existing passwords and encryption settings.
        pdfDocument.RemovePasswordsAndEncryption();

        // Configure the PDF to be read-only by setting a new password.
        pdfDocument.MakePdfDocumentReadOnly("new-read-only-password");

        // Define new permissions for the PDF document.
        var documentPermissions = new PdfPermissions
        {
            AllowAnnotations = false,
            AllowContentExtraction = false,
            AllowFormFilling = true,
            AllowPrinting = false,
            AllowDocumentAssembly = false
        };
        pdfDocument.SetPermissions(documentPermissions);

        // Set a new encryption password for the document.
        pdfDocument.SaveAs("secured-update.pdf", "new-password"); // Save the document with updated security settings.
    }
}
```

[Explore more about PDF Encryption & Decryption with IronPDF](https://ironpdf.com/examples/encryption-and-decryption)