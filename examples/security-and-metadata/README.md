***Based on <https://ironpdf.com/examples/security-and-metadata/>***

IronPDF provides features for encrypting, decrypting, customizing metadata, and setting specific permissions on actions like annotations, copying and pasting content, handling form fields, and document printing capabilities.

To unlock a PDF that is secured with a password, utilize the `open` method and supply the password as its second argument. To modify metadata, construct a new dictionary with key-value pairs reflecting the desired metadata information. This dictionary is then passed into the `overrideMetadata` method to replace the existing metadata.

Use the `removePasswordsAndEncryption` method to eliminate passwords from the document. The `makePdfDocumentReadOnly` method locks the PDF, encrypting it with 128-bit security and preventing actions such as copying and pasting content, making annotations, and modifying form fields.

To set specific document permissions, start by constructing a permissions object with your desired settings and pass this object to the `setPermission` method.

Finally, the `saveAs` method can be used to apply `ownerPassword` and `userPassword` properties as needed for securing the document.

For additional insights into the functionalities and applications of IronPDF, visit the [IronPDF product page](https://www.ironpdf.com) or learn more about Iron Software's offerings on their [main website](https://www.ironsoftware.com).