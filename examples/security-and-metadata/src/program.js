import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Import a PDF document or create a new PDF from Html
    const pdf = await PdfDocument.open("encrypted.pdf", "password");

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