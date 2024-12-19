***Based on <https://ironpdf.com/examples/barcode-htmltopdf/>***

Barcodes can be embedded into newly created PDFs or attached to existing PDF documents by employing the `stampBarcode` method. This method primarily requires the value that the barcode should encapsulate.

In addition to the essential value, users can opt for a configuration object for the barcode with optional settings such as:

- **`barcodeType`**: Determines the encoding type for the barcode.
- **`behindExistingContent`**: If set to true, the barcode will be stamped behind existing content, which might render it invisible if the content is not transparent.
- **`horizontalAlignment`**: Specifies the barcode's horizontal placement relative to the page.
- **`horizontalOffset`**: Adjusts the horizontal position. A 0 value means no change. Positive values move it to the right, whereas negative values shift it to the left.
- **`verticalAlignment`**: Dictates the vertical placement of the barcode on the page.
- **`verticalOffset`**: Modifies the vertical position. Here, 0 implies no change; positive values move the stamp down, and negative values move it up.
- **`hyperlink`**: Enables the added barcode elements to include clickable hyperlinks.
- **`maxHeight`**: Defines the maximum height for the stamp.
- **`maxWidth`**: Sets the maximum width for the stamp.
- **`minHeight`**: Specifies the minimum height of the stamp.
- **`minWidth`**: Indicates the minimum width of the stamp.
- **`opacity`**: Controls the transparency of the stamp, where 0 is completely invisible and 100 is fully visible.
- **`renderDelay`**: Sets a delay in milliseconds to wait after rendering HTML before stamping, useful for dynamic content like JavaScript or animations.
- **`rotation`**: Rotates the stamp clockwise, with a range from 0 to 360 degrees.
- **`scale`**: Scales the stamp by a percentage, enlarging or reducing its size.
- **`timeout`**: Gives the maximum time in seconds to render the stamp.
- **`heightPx`**: Specifies the height in pixels for the barcode.
- **`widthPx`**: Defines the width in pixels for the barcode.

For further details on working with PDFs and barcodes, refer to the [IronPDF Documentation](https://ironpdf.com/docs/).
Discover additional libraries by Iron Software, like [IronBarcode for barcode creation](https://ironsoftware.com/csharp/barcode/), which can elevate your project's capabilities.