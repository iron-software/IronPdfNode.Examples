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