import {run as section1} from "./section1.js";
import {run as section2} from "./section2.js";
import {run as section3} from "./section3.js";
import {run as section4} from "./section4.js";
import {run as section5} from "./section5.js";

// Section 5 runs as-is: it renders its own PDF before compressing it.
// Sections 1-4 read a PDF from disk, so point them at a file you have first.
section5().catch(console.error);
// section1().catch(console.error);
// section2().catch(console.error);
// section3().catch(console.error);
// section4().catch(console.error);
