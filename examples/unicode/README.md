# Unicode & UTF-8 Support

> Full guide: [Unicode & UTF-8 Support](https://ironpdf.com/nodejs/examples/unicode/?utm_source=github)

IronPDF fully supports Unicode and UTF-8 encoding, enabling the creation of PDF documents that feature text in a variety of languages and character sets, including those requiring Unicode characters. UTF-8 is a prevalent encoding format capable of representing almost all characters from numerous languages, ideal for producing multilingual and international documents.

With IronPDF, you can create PDFs that incorporate text in multiple languages, complete with support for Unicode characters and UTF-8 encoding. This capability ensures that the text in your PDFs is displayed accurately, regardless of the language or character set employed.

Learn more about the features of IronPDF by visiting the [IronPDF official site](https://ironpdf.com/?utm_source=github) and discover its efficient handling of Unicode and UTF-8 encoding. For detailed information on the full suite of Iron Software's product libraries and their solutions, head over to the [Iron Software homepage](https://ironsoftware.com/?utm_source=github).

[Explore Unicode PDF examples for Node.js](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/unicode)

## Code

```js
import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const html = `<p>周態告応立待太記行神正用真最。音日独素円政進任見引際初携食。更火識将回興継時億断保媛全職。
    文造画念響竹都務済約記求生街東。天体無適立年保輪動元念足総地作靖権瀬内。
    失文意芸野画美暮実刊切心。感変動技実視高療試意写表重車棟性作家薄井。
    陸瓶右覧撃稿法真勤振局夘決。任堀記文市物第前兜純響限。囲石整成先尾未展退幹販山令手北結。</p>
    <p>
    أم يذكر النفط قبضتهم على, الصين وفنلندا ما حدى. تم لكل أملا المنتصر,
    ٣٠ حدى مارد القوى. شرسة للسيطرة قامفي. حتى أم يطول المحيط,
    زهاء وحلفاؤها من فعل. لم قامت الجو الساحلية وتم, ويعزى واقتصار قبل كل.
    </p>
    <p>
    ภคนทลาพาธสตารเซฟต แชมป มารเกตตงลมเหลวโยเกรต แลนดบาบนอมครม รสโซ แบรนดไคลแมกซ พซซาโมเดลเสอโครง มอบโซนรายชอ
    แอดมชชน ดอกเตอร พะเรอ มารคเจไดโมจราสเบอรร เอนทรานซออดชนศลปวฒนธรรมเปราะบาง โมจซเรยสวอลนตทรปลเมอร ทป วาไรตบกเมเปล
    </p>`;

    // Render HTML to PDF
    const pdf = await PdfDocument.fromHtml(html);

    // Save the PDF
    await pdf.saveAs("Unicode.pdf");
})();
```

## Running This Example

```shell
npm install
node src/program.js
```
