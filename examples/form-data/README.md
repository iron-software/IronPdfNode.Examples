# PDF Forms

> Full guide: [PDF Forms](https://ironpdf.com/nodejs/examples/form-data/?utm_source=github)

You can convert HTML with form fields into a PDF, maintaining the form's functionality and data entry capability. This process involves creating an HTML form embedded with various input types, such as text boxes, radio buttons, and checkboxes, to facilitate user interactions.

To transform an HTML form into an editable PDF form:

1. Enable the `createPdfFormsFromHtml` setting by setting it to `true`. This ensures that the HTML form is converted into a PDF form with editable fields.

2. Convert the HTML content to a PDF document by using the `PdfDocument.fromHtml` method. Ensure to pass all necessary rendering options via an object parameter.

3. Once the PDF with form fields is created, save it as a new PDF file, "formField.pdf", using the `saveAs` method.

For additional guidance on creating PDF forms from HTML content, refer to the [IronPDF Product Page](https://ironpdf.com?utm_source=github) for comprehensive resources and examples.

Explore in-depth how to generate PDF forms from HTML by accessing our code examples through the following link:
[Explore Code Examples for Creating PDF Forms from HTML](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/form-data).

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content with editable form fields
    const formHtml = `
        <html>
            <body>
                <h2>Editable PDF Form</h2>
                <form>
                    First name: <br> <input type='text' name='firstname' value=''> <br>
                    Last name: <br> <input type='text' name='lastname' value=''> <br>
                    <br>
                    <p>Please specify your gender:</p>
                    <input type='radio' id='female' name='gender' value='Female'>
                    <label for='female'>Female</label> <br>
                    <br>
                    <input type='radio' id='male' name='gender' value='Male'>
                    <label for='male'>Male</label> <br>
                    <br>
                    <input type='radio' id='non-binary/other' name='gender' value='Non-Binary / Other'>
                    <label for='non-binary/other'>Non-Binary / Other</label>
                    <br>
                    <p>Please select all medical conditions that apply:</p>
                    <input type='checkbox' id='condition1' name='Hypertension' value='Hypertension'>
                    <label for='condition1'> Hypertension</label><br>
                    <input type='checkbox' id='condition2' name='Heart Disease' value='Heart Disease'>
                    <label for='condition2'> Heart Disease</label><br>
                    <input type='checkbox' id='condition3' name='Stoke' value='Stoke'>
                    <label for='condition3'> Stoke</label><br>
                    <input type='checkbox' id='condition4' name='Diabetes' value='Diabetes'>
                    <label for='condition4'> Diabetes</label><br>
                    <input type='checkbox' id='condition5' name='Kidney Disease' value='Kidney Disease'>
                    <label for='condition5'> Kidney Disease</label><br>
                </form>
            </body>
        </html>
    `;

    // Configure render options
    const options = {
        createPdfFormsFromHtml: true,
    };

    // Render HTML content to a PDF with editable forms
    const pdf = await PdfDocument.fromHtml(formHtml, { renderOptions: options });

    // Save the new PDF
    await pdf.saveAs("formField.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
