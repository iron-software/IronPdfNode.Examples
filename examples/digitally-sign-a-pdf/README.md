***Based on <https://ironpdf.com/examples/digitally-sign-a-pdf/>***

Initiating a digital signature on a PDF file starts with importing the PDF you need to sign.

To execute the digital signature, invoke the `signDigitalSignature` method. This function mandates the path to the digital certificate and the password necessary for document signing. You can also add additional details like the signing reason and location.

After embedding the digital signature, the next step is to preserve the signed PDF. This is accomplished by calling the `saveAs` method. The resulting file is now digitally signed and secure.

For more comprehensive guidance on this method applied in IronPDF, refer to [IronPDF's digital signature documentation on their website](https://ironpdf.com/docs/).