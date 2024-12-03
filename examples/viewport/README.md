***Based on <https://ironpdf.com/examples/viewport/>***

In the context of viewport settings, IronPDF features both CSS media and paper mode options.

The CSS media option within IronPDF enables the specification of style application to HTML content during its conversion to a PDF. This option carries two settings, CSS media "screen" and "print":

- **Screen**: This setting is designed for content viewed on digital displays, applying styles that are visually appealing on devices like computer monitors, which may include vibrant colors and dynamic layouts.
- **Print**: This setting optimizes CSS for output to physical media, ensuring that styles are adjusted for clarity and proper layout when the content is printed on paper.

Additionally, IronPDF’s [Paper Sizing Options](https://ironpdf.com/examples/custom-pdf-paper-size/) provide various settings for how content should be arranged on PDF pages:

- `ContinuousFeed`: Ideal for continuous feed printers that operate with rolls of paper. It’s commonly utilized in settings requiring long, uninterrupted prints, such as industrial environments.
- `FitToHeight`: This setting adjusts the content to fit the designated height of the paper, preserving the content’s aspect ratio to prevent any overflow.
- `FitToWidth`: Here, the content is resized to match the paper's width constraints while keeping the aspect ratio intact, ensuring the content does not exceed the paper’s width.
- `FitToPage`: This option scales the content to efficiently fill the entire page, both height and width, while maintaining the aspect ratio, guaranteeing that the entire content is neatly contained within a single page.