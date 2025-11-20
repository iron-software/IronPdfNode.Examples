***Based on <https://ironpdf.com/examples/digitally-sign-a-pdf/>***

Applying a digital signature to a PDF starts by uploading an existing PDF file.

To digitize a signature, utilize the `signDigitalSignature` method. This function will need the digital certificate's file path and the password used to authorize the document. You also have the option to add further details such as the signing reason and the geographical location.

Below is an example of implementing a digital signature with IronPDF in C#:

In this scenario:
- Begin by loading the PDF you need to sign using `PdfDocument.FromFile`.
- Next, use the `SignDigitalSignature` method to apply the digital signature, where you'll specify the path to your `.pfx` file (the digital certificate) and the password. Optional information about the signing reason and location may be provided as well.
- Conclude by saving the now signed PDF using the `SaveAs` method.

After the digital signature is in place, you can distribute the signed PDF file by using the `saveAs` method. This document is now securely authenticated.

For additional guidance on this functionality within IronPDF, visit the [IronPDF digital signature documentation](https://ironpdf.com/docs/).

[Explore Code: Digitally Sign a PDF with IronPDF](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/digitally-sign-a-pdf)