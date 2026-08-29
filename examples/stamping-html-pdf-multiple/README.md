# Adding HTML Content Efficiently

> Full guide: [Adding HTML Content Efficiently](https://ironpdf.com/nodejs/examples/stamping-html-pdf-multiple/)

IronPDF provides a range of stamp types, including HTML, text, image, and barcode options. Users can designate each stamp's placement using vertical and horizontal coordinates, and further refine their position to the pixel level with vertical and horizontal offsets.

To apply HTML stamps, you can use a piece of HTML code with complete inline CSS support for styling. For detailed guidance on using HTML stamps, check out the [IronPDF Stamping Guide](https://ironpdf.com/docs/).

If simpler styling suffices, text stamping is a rapid alternative to HTML, avoiding the need for web-based font resources. To understand more about the capabilities of text stamping, visit the [IronPDF Text Stamping Documentation](https://ironpdf.com/docs/).

Image stamping is perfect for adding logos quickly to your PDFs. Each image stamp can be modified in terms of rotation and transparency, and can be used as a watermark. For further information on using images and creating watermark stamps, review the [IronPDF Watermark Tutorial](https://ironpdf.com/docs/).

Barcode stamping introduces barcodes to your PDFs for an additional layer of functionality. To learn how to create and customize barcodes in your documents, refer to the [IronPDF Barcode Stamping Instructions](https://ironpdf.com/docs/).

To see practical applications of HTML stamping, you can [Explore HTML Stamping Examples on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/stamping-html-pdf-multiple).

## Code

```js
import {PdfDocument, HorizontalAlignment, VerticalAlignment, MeasurementUnit, BarcodeType} from "@ironsoftware/ironpdf";

(async () => {
    // Import existing PDF
    const pdf = await PdfDocument.fromFile("unstamped.pdf");

    // Define HTML stamp options
    const htmlStampOptions = {
        verticalOffset: {
            unit: MeasurementUnit.pixel,
            value: -200,
        },
        horizontalOffset: {
            unit: MeasurementUnit.pixel,
            value: -200,
        },
    };

    await pdf.stampHtml("<h1>Html stamp</h1>", {htmlStampOptions: htmlStampOptions})

    // Define text stamp options
    const textStampOptions = {
        fontFamily: "Bungee Spice",
        useGoogleFont: true,
        fontSize: 30,
    };

    await pdf.stampText("Hello World! Stamp One Here!", {imageStampOptions: textStampOptions})

    // Define image stamp options
    const imageStampOptions = {
        minWidth: {
            unit: MeasurementUnit.Percentage,
            value: 250,
        },
        minHeight: {
            unit: MeasurementUnit.Percentage,
            value: 250,
        },
    };

    await pdf.stampImage("logo.png", {imageStampOptions: imageStampOptions})

    // Define barcode stamp options
    const barcodeStampOptions = {
        barcodeType: BarcodeType.code39,
        maxHeight: {
            unit: MeasurementUnit.Percentage,
            value: 5,
        },
        verticalAlignment: VerticalAlignment.Bottom,
        horizontalAlignment: HorizontalAlignment.Left,
    };

    await pdf.stampBarcode("IronPDF", {options: barcodeStampOptions})

    // Save the stamped PDF
    await pdf.saveAs("Stamped.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
