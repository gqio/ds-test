import { a as litHtml, r as renderWith, l as litElement } from '../../components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js';
import { B as BaseSwatch } from '../../BaseSwatch-8e1e473f.js';

const modules = ['@lion/core','@lion/tabs','@thebespokepixel/es-tinycolor','@theme-ui/color-modes','@theme-ui/components','lit-element','lit-html','react','react-dom','theme-ui'];
function require(library) {
  const idx = modules.findIndex(
    (it) =>
      it === library ||
      it.replace(/^((@[^/]*\/)?[^/@]*)(@[^/]*)?(\/[^@]*)?$/, '$1$4') ===
        library // removes version pinned, if any
  );
  if (idx === -1) {
    console.error(`Import ${library} not found in project scope: ${modules}`);
  } else {
    return import('../../components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js').then(function (n) { return n.e; }).then((module) => module['packd_export_'+idx]);
  }
}

var radii = [
 {
  "value": "0",
  "original": {
   "value": "0"
  },
  "name": "border-radius-none",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "none"
  },
  "path": [
   "border",
   "radius",
   "none"
  ]
 },
 {
  "value": "0.125rem",
  "original": {
   "value": "0.125rem"
  },
  "name": "border-radius-sm",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "sm"
  },
  "path": [
   "border",
   "radius",
   "sm"
  ]
 },
 {
  "value": "0.25rem",
  "original": {
   "value": "0.25rem"
  },
  "name": "border-radius-default",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "default"
  },
  "path": [
   "border",
   "radius",
   "default"
  ]
 },
 {
  "value": "0.375rem",
  "original": {
   "value": "0.375rem"
  },
  "name": "border-radius-md",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "md"
  },
  "path": [
   "border",
   "radius",
   "md"
  ]
 },
 {
  "value": "0.5rem",
  "original": {
   "value": "0.5rem"
  },
  "name": "border-radius-lg",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "lg"
  },
  "path": [
   "border",
   "radius",
   "lg"
  ]
 },
 {
  "value": "9999px",
  "original": {
   "value": "9999px"
  },
  "name": "border-radius-full",
  "attributes": {
   "category": "border",
   "type": "radius",
   "item": "full"
  },
  "path": [
   "border",
   "radius",
   "full"
  ]
 }
];

const { html } = litHtml;class RadiiSwatch extends BaseSwatch {
    renderSample(token) {
        return html `<div
      class="sample"
      style="background:#00808080;border-radius:${token.value}"
    ></div>`;
    }
}

const { html: html$1 } = litElement;customElements.define("radii-swatch", RadiiSwatch);
    
try {
  customElements.define('mdjs-story', class extends HTMLElement {
    constructor(){
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<div id="root"><p>Loading...</p></div>';
    }
    set story(story){
      renderWith(require,story(),this.shadowRoot.querySelector('#root'));
    }
  });
} catch (e) {}
    
try {
  customElements.define('mdjs-preview', class extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
      <mdjs-story></mdjs-story>
      <details>
        <summary style="text-align: center;user-select: none;">
          show code
        </summary>
        <pre><code></code></pre>
      </details>`;
    }
    set story(story){
      this.querySelector('mdjs-story').story = story;
    }
    set code(code){
      this.querySelector('code').textContent = code;
    }
  });
} catch (e) {}
    const radiiStory = () => html$1`<radii-swatch
  .tokens=${radii}
></radii-swatch>`;
    const rootNode = document;
    const stories = [{ key: 'radiiStory', story: radiiStory, code: radiiStory }];
    for (const story of stories) {
      // eslint-disable-next-line no-template-curly-in-string
      const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
      storyEl.story = story.story;
      storyEl.code = story.code;
    }

export { radiiStory };
