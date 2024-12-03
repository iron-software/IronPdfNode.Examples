***Based on <https://ironpdf.com/examples/security-and-metadata/>***

IronPDF offers functionality for encrypting and decrypting, editing metadata, and setting permissions related to annotations, copying, pasting content, form fields, and printing capabilities.

To access a password-protected PDF, employ the `open` method and enter the password as the second argument. To set metadata, you must first create a new map, populate it with key-value pairs that represent the desired metadata, and then use the `overrideMetadata` method to replace the existing metadata.

The `removePasswordsAndEncryption` method eliminates any existing passwords from the document. With the `makePdfDocumentReadOnly` method, the PDF is converted to read-only mode, encrypting the content with 128-bit encryption and prohibiting actions such as copying, pasting, making annotations, and editing forms.

Alter permissions by constructing a permission object with defined settings and applying it using the `setPermission` method.

Finally, the `saveAs` method allows you to specify both `ownerPassword` and `userPassword` in the object you pass to it, setting these passwords as needed.

For additional details on the capabilities and applications of IronPDF, refer to the [IronPDF product page](https://ironpdf.com) or discover more about other products from Iron Software on their [website](https://ironsoftware.com).