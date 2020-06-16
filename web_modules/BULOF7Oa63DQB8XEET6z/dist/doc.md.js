import { a as litHtml, r as renderWith } from '../../components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js';
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

var shadows = [
 {
  "value": "0 0 0 1px rgba(0, 0, 0, 0.05)",
  "original": {
   "value": "0 0 0 1px rgba(0, 0, 0, 0.05)"
  },
  "name": "shadow-xs",
  "attributes": {
   "category": "shadow",
   "type": "xs"
  },
  "path": [
   "shadow",
   "xs"
  ]
 },
 {
  "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "original": {
   "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  },
  "name": "shadow-sm",
  "attributes": {
   "category": "shadow",
   "type": "sm"
  },
  "path": [
   "shadow",
   "sm"
  ]
 },
 {
  "value": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "original": {
   "value": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
  },
  "name": "shadow-default",
  "attributes": {
   "category": "shadow",
   "type": "default"
  },
  "path": [
   "shadow",
   "default"
  ]
 },
 {
  "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "original": {
   "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  "name": "shadow-md",
  "attributes": {
   "category": "shadow",
   "type": "md"
  },
  "path": [
   "shadow",
   "md"
  ]
 },
 {
  "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "original": {
   "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  },
  "name": "shadow-lg",
  "attributes": {
   "category": "shadow",
   "type": "lg"
  },
  "path": [
   "shadow",
   "lg"
  ]
 },
 {
  "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "original": {
   "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  "name": "shadow-xl",
  "attributes": {
   "category": "shadow",
   "type": "xl"
  },
  "path": [
   "shadow",
   "xl"
  ]
 },
 {
  "value": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "original": {
   "value": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  "name": "shadow-2-xl",
  "attributes": {
   "category": "shadow",
   "type": "2xl"
  },
  "path": [
   "shadow",
   "2xl"
  ]
 },
 {
  "value": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  "original": {
   "value": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
  },
  "name": "shadow-inner",
  "attributes": {
   "category": "shadow",
   "type": "inner"
  },
  "path": [
   "shadow",
   "inner"
  ]
 },
 {
  "value": "0 0 0 3px rgba(66, 153, 225, 0.5)",
  "original": {
   "value": "0 0 0 3px rgba(66, 153, 225, 0.5)"
  },
  "name": "shadow-outline",
  "attributes": {
   "category": "shadow",
   "type": "outline"
  },
  "path": [
   "shadow",
   "outline"
  ]
 },
 {
  "value": "none",
  "original": {
   "value": "none"
  },
  "name": "shadow-none",
  "attributes": {
   "category": "shadow",
   "type": "none"
  },
  "path": [
   "shadow",
   "none"
  ]
 }
];

const { html } = litHtml;class ShadowSwatch extends BaseSwatch {
    renderSample(token) {
        return html `<div
      class="sample"
      style="background:#00808040;box-shadow:${token.value}"
    ></div>`;
    }
}

const { html: html$1 } = litHtml;customElements.define("shadow-swatch", ShadowSwatch);
    
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
    const shadowStory = () => html$1`<shadow-swatch
  .tokens=${shadows}
></shadow-swatch>`;
    const rootNode = document;
    const stories = [{ key: 'shadowStory', story: shadowStory, code: shadowStory }];
    for (const story of stories) {
      // eslint-disable-next-line no-template-curly-in-string
      const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
      storyEl.story = story.story;
      storyEl.code = story.code;
    }

export { shadowStory };
