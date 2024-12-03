***Based on <https://ironpdf.com/examples/barcode-htmltopdf/>***

Barcodes can be seamlessly integrated into both newly created and pre-existing PDF documents. Employ the `stampBarcode` method to insert a barcode into a PDF file. The primary requirement is the barcode value you wish to encode.

Additionally, you can utilize an optional configuration object for the barcode with the settings below:

- **`barcodeType`**: Specifies the type of barcode encoding.
- **`behindExistingContent`**: By setting this to true, the barcode is positioned behind the document's content, which may render it invisible if the content is not transparent.
- **`horizontalAlignment`**: Determines the barcode's horizontal positioning on the page.
- **`horizontalOffset`**: Adjusts the horizontal placement of the barcode. A value of zero means no offset. Positive values shift the barcode to the right, and negative values to the left.
- **`verticalAlignment`**: Sets the vertical positioning of the barcode on the page.
- **`verticalOffset`**: Adjusts the vertical placement. Positive values move the barcode downward, and negative values move it upward.
- **`hyperlink`**: Enables a hyperlink feature for the barcode when clicked.
- **`maxHeight`**: Defines the maximum height for the barcode.
- **`maxWidth`**: Specifies the maximum width for the barcode.
- **`minHeight`**: Sets the minimum height for the barcode.
- **`minWidth`**: Defines the minimum width for the barcode.
- **`opacity`**: Controls the opacity of the barcode, with 0 being completely transparent and 100 being fully opaque.
- **`renderDelay`**: Delays the rendering process by a specified number of milliseconds to accommodate JavaScript, Ajax, or animations.
- **`rotation`**: Rotates the barcode on the page, from 0 to 360 degrees.
- **`scale`**: Scales the size of the barcode, either enlarging or reducing it by a percentage.
- **`timeout`**: Sets a timeout in seconds for the rendering of the barcode.
- **`heightPx`**: The specific height of the barcode in pixels.
- **`widthPx`**: The barcode's width in pixels.

For further details about handling PDFs and embedding barcodes, refer to the [IronPDF Documentation](https://ironpdf.com/docs/).
Discover additional tools such as [IronBarcode for barcode generation](https://ironsoftware.com/csharp/barcode/), which can expand the functionality of your projects.