***Based on <https://ironpdf.com/examples/pdf-generation-settings/>***

A variety of settings can be adjusted when converting HTML content into rendered output, whether using HTML strings, local files, or URLs. The demonstrated configurations encompass several aspects such as choosing a custom paper size with adjustable units, activating HTML backgrounds, setting page orientation, defining the document's title, delaying the rendering to allow for resource loading, determining the CSS media type, opting for either simplex or duplex paper modes, integrating editable forms, tailoring margins, and incorporating pagination.

The CSS media types "screen" and "print" serve as guides for determining how styles are applied within HTML documents, depending on the medium utilized for display or print. Selecting "screen" as the media type configures the CSS for optimal viewing on digital screens, enhancing elements like color schemes and layouts to suit electronic displays. On the other hand, choosing "print" tailors the CSS to enhance the document's legibility and format effectiveness for printouts, thus ensuring the content translates well onto paper. In certain cases, configuring the CSS media type to "screen" is essential for displaying specific background images correctly.

The incorporation of a rendering delay primarily ensures that all JavaScript elements or fonts have ample time to load before the rendering takes place.

**Detailed Explanation:**

- **HTML Framework**: The structure adheres to modern HTML5 standards with organized `<head>` and `<body>` sections.
- **Metadata Management**: Contains meta tags that set the character encoding standards and define responsive design settings.
- **Styling Setup**:
  - **Base Body Style**: Applies a universal font family and margin settings.
  - **Screen Media Query**: Implements a lighter gray background and darker text suited for screen displays.
  - **Print Media Query**: Sets a white background with black text, ideal for printed outputs.

- **Practical Application**: The provided HTML and CSS setup is crafted to showcase how styles can be dynamically applied based on the content's viewing medium, whether on-screen or on paper.

[Learn More About Advanced PDF Generation Settings on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/pdf-generation-settings).