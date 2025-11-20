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