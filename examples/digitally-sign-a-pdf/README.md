***Based on <https://ironpdf.com/examples/digitally-sign-a-pdf/>***

Adding a digital signature to a PDF starts by loading an existing PDF document.

To embed a digital signature, the `signDigitalSignature` method is employed. This function necessitates the path to the digital certificate and the corresponding password essential for the signature process. You can also provide additional details such as the signing reason and the geographical location.

After the digital signature is in place, utilize the `saveAs` method to output the document. The resulting file is secured with your signature.

For further instructions on leveraging this functionality with IronPDF, please refer to [IronPDF's digital signature guidance](https://ironpdf.com/docs/).