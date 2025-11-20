***Based on <https://ironpdf.com/examples/barcode-htmltopdf/>***

Barcodes can be seamlessly integrated into PDF documents, whether they are newly created or pre-existing ones. You can utilize the `stampBarcode` method to embed a barcode into a PDF. This method primarily requires the data that the barcode will represent.

In addition to the mandatory input, a customizable barcode configuration option is available. This option allows for adjustments in various settings:

- **`barcodeType`**: Defines the type of barcode encoding to use.
- **`behindExistingContent`**: Enable this to place the barcode behind existing content. Note that if the existing content is not transparent, the barcode might not be visible.
- **`horizontalAlignment`**: Controls the barcode's horizontal placement on the page.
- **`horizontalOffset`**: The shift along the horizontal axis, where 0 represents no shift, positive values move to the right, and negative values to the left.
- **`verticalAlignment`**: Manages vertical positioning of the barcode on the page.
- **`verticalOffset`**: Adjusts the barcode's position vertically; positive values move it down, and negative values move it up.
- **`hyperlink`**: Enables a clickable hyperlink on stamped elements.
- **`maxHeight`**: Restricts the maximum height of the barcode stamp.
- **`maxWidth`**: Sets the maximum width limit for the barcode stamp.
- **`minHeight`**: Determines the minimum height of the barcode stamp.
- **`minWidth`**: Sets the minimum width for the barcode stamp.
- **`opacity`**: Adjusts the transparency of the barcode, with 0 being completely transparent and 100 being fully opaque.
- **`renderDelay`**: Delays the stamping process for a specified number of milliseconds to accommodate the rendering of JavaScript, Ajax, or animations.
- **`rotation`**: Rotates the barcode stamp clockwise, anywhere from 0 to 360 degrees.
- **`scale`**: Scales the size of the barcode stamp by a specified percentage.
- **`timeout`**: Specifies the maximum rendering time in seconds.
- **`heightPx`**: Defines the barcode's height in pixels.
- **`widthPx`**: Specifies the barcode's width in pixels.

For detailed guidance on managing PDFs and barcodes, you can visit the [IronPDF Documentation](https://ironpdf.com/docs/). To explore additional libraries from Iron Software, such as [IronBarcode for barcode generation](https://ironsoftware.com/csharp/barcode/), which can enhance your project capabilities, click on the link provided.

[Learn to Add Barcodes to PDFs with IronPDF for Node.js](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/barcode-htmltopdf)