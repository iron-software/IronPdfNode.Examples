***Based on <https://ironpdf.com/examples/viewport/>***

Regarding viewport settings, IronPDF offers features like CSS media and paper mode to enhance PDF rendering.

Through the CSS media feature of IronPDF, you can dictate the application of styles to HTML content when converted into a PDF. The possible settings for this feature are "screen" and "print":

- **Screen**: This setting applies styles that are best for viewing on digital screens, emphasizing aesthetics such as color schemes and layouts that are attractive on computer displays.
- **Print**: This setting gears the style application towards output suitable for physical printing, hence optimizing CSS rules to enhance readability and proper layout on printed media like paper.

In addition to these settings, the [IronPDF's Paper Sizing Options](https://ironpdf.com/examples/custom-pdf-paper-size/) adjust how content fits on the PDF pages and includes several configurations:

- `ContinuousFeed`: Ideal for continuous feed printers which print on paper rolls. It's commonly utilized in specific industrial print settings.
- `FitToHeight`: This setting scales the content to a specific height while preserving the aspect ratio, ensuring content visibility without any overflow.
- `FitToWidth`: Here, the content is adjusted to a predefined width, maintaining the aspect ratio, suitable for ensuring content does not exceed certain width limits.
- `FitToPage`: This configuration scales content to fill an entire page in both height and width, maintaining aspect ratios and ensuring the content fits neatly on one page.

Explore responsive PDF rendering in different scenarios by visiting the [Viewport Example for Responsive PDF Rendering](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/viewport).