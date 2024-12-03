# Implementing an IronPDF License Key in Node.js Projects

***Based on <https://ironpdf.com/how-to/license-keys/>***


## Acquiring a License Key

To utilize IronPDF in your live projects without any usage limitations or branding watermarks, you must apply a license key.

You can [obtain an IronPDF license here](https://ironpdf.com/nodejs/licensing/) or opt for a [free 30-day trial license of IronPDF](https://ironpdf.com/nodejs/licensing/).

## Configuring Your License Key

After installing IronPDF, it’s necessary to configure the `licenseKey` in IronPDF's global settings as illustrated below:

```node
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Set your IronPDF license key
IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

## Assistance and Further Questions

Should you require help or have questions about IronPDF, our dedicated support team is eager to help. Feel free to [reach out to our support team here](https://ironpdf.com#live-chat-support).