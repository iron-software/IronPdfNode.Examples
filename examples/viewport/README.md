***Based on <https://ironpdf.com/examples/viewport/>***

Discussing viewport settings, there are CSS media and paper mode considerations.

IronPDF provides a CSS media feature that lets you define how styles should be applied to HTML content for PDF conversion. You can choose between two modes:

- **Screen**: This mode is designed for digital displays, optimizing styles such as colors and layouts to enhance readability and appearance on devices like computer monitors.
- **Print**: This option configures the browser to employ styles suitable for physical printing. It optimizes CSS rules to ensure content is clear and properly formatted for output on paper.

Additionally, IronPDF includes a paper mode setting which adjusts how content is rendered onto PDF pages. The options for paper mode, detailed in [IronPDF's Paper Sizing Options](https://ironpdf.com/examples/custom-pdf-paper-size/), include:

- `ContinuousFeed`: Ideal for continuous feed printers which print on a continuous roll of paper, often used in industrial print settings.
- `FitToHeight`: This setting scales content to fit the designated height of the paper, preserving the content’s aspect ratio to prevent any overflow.
- `FitToWidth`: Similar to `FitToHeight`, this setting adjusts the content to fit within the specified width of the paper, also maintaining the aspect ratio.
- `FitToPage`: This option scales the content to fit the page, considering both height and width, ensuring that the content is fully visible on a single page while preserving the original aspect ratio.