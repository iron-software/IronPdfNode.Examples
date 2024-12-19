***Based on <https://ironpdf.com/examples/js-charts-to-pdf/>***

When incorporating charts driven by JavaScript, ensuring adequate time for JavaScript to execute is crucial. In the provided example, JavaScript execution is facilitated by setting the `enableJavaScript` property to true.

The `waitFor` property is strategically employed to postpone the rendering until the JavaScript has fully executed. By selecting `WaitForType.JavaScript` as the method, the process will either continue when `window.ironpdf.notifyRender` is activated within the JavaScript, or it will timeout at the maximum specified wait duration.

Moreover, setting the CSS media property guarantees that the HTML content's presentation and layout conforms to the applicable screen configurations.