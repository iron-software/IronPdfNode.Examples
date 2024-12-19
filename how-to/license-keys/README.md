# Implementing an IronPDF License Key in Your Node.js Projects

***Based on <https://ironpdf.com/how-to/license-keys/>***


## Obtaining a License Key

Incorporating an IronPDF license key into your Node.js application ensures you can launch your software commercially, free of any overlay marks or usage limitations.

You can [acquire an IronPDF license on our website](https://ironpdf.com/nodejs/licensing/) or opt for a [30-day free trial of IronPDF](https://ironpdf.com/nodejs/licensing/).

## Configuring Your License Key

After installing IronPDF, it's important to configure it to recognize your license key through the `licenseKey` property within the global configuration object. Below is the implementation to correctly apply the license key:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

// Set the IronPDF license key
IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

## Need Assistance or Have Questions?

Our dedicated support team is always ready to help you with any questions or support you may need. Feel free to [reach out to our support staff](https://ironpdf.com#live-chat-support) anytime.