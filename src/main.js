import "regenerator-runtime/runtime.js";

import ShaderSketchElement from "./ShaderSketchElement";
import UpdateParentElement from "./UpdateParentElement";

customElements.define("fragment-shader", class extends UpdateParentElement {});
customElements.define("shader-uniform", class extends UpdateParentElement {});
customElements.define("shader-import", class extends UpdateParentElement {});
customElements.define("shader-texture", class extends UpdateParentElement {});
customElements.define("shader-canvas-texture", class extends UpdateParentElement {});
customElements.define("shader-typography", class extends UpdateParentElement {});
customElements.define("shader-sketch", ShaderSketchElement);