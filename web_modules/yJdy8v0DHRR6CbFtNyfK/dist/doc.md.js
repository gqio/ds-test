import { a as litHtml, r as require, l as litElement } from '../../__require-f214fa60.js';
import { r as renderWith } from '../../index-6d22d2ca.js';
import { B as BaseSwatch } from '../../BaseSwatch-0300e27b.js';

var tokens = [
 {
  "value": "-9999",
  "original": {
   "value": "-9999"
  },
  "name": "z-index-deep",
  "attributes": {
   "category": "z-index",
   "type": "deep"
  },
  "path": [
   "z-index",
   "deep"
  ]
 },
 {
  "value": "1",
  "original": {
   "value": "1"
  },
  "name": "z-index-default",
  "attributes": {
   "category": "z-index",
   "type": "default"
  },
  "path": [
   "z-index",
   "default"
  ]
 },
 {
  "value": "100",
  "original": {
   "value": "100"
  },
  "name": "z-index-masked",
  "attributes": {
   "category": "z-index",
   "type": "masked"
  },
  "path": [
   "z-index",
   "masked"
  ]
 },
 {
  "value": "200",
  "original": {
   "value": "200"
  },
  "name": "z-index-mask",
  "attributes": {
   "category": "z-index",
   "type": "mask"
  },
  "path": [
   "z-index",
   "mask"
  ]
 },
 {
  "value": "300",
  "original": {
   "value": "300"
  },
  "name": "z-index-sticky",
  "attributes": {
   "category": "z-index",
   "type": "sticky"
  },
  "path": [
   "z-index",
   "sticky"
  ]
 },
 {
  "value": "400",
  "original": {
   "value": "400"
  },
  "name": "z-index-header",
  "attributes": {
   "category": "z-index",
   "type": "header"
  },
  "path": [
   "z-index",
   "header"
  ]
 },
 {
  "value": "500",
  "original": {
   "value": "500"
  },
  "name": "z-index-toast",
  "attributes": {
   "category": "z-index",
   "type": "toast"
  },
  "path": [
   "z-index",
   "toast"
  ]
 },
 {
  "value": "600",
  "original": {
   "value": "600"
  },
  "name": "z-index-dropdown",
  "attributes": {
   "category": "z-index",
   "type": "dropdown"
  },
  "path": [
   "z-index",
   "dropdown"
  ]
 },
 {
  "value": "700",
  "original": {
   "value": "700"
  },
  "name": "z-index-overlay",
  "attributes": {
   "category": "z-index",
   "type": "overlay"
  },
  "path": [
   "z-index",
   "overlay"
  ]
 },
 {
  "value": "800",
  "original": {
   "value": "800"
  },
  "name": "z-index-spinner",
  "attributes": {
   "category": "z-index",
   "type": "spinner"
  },
  "path": [
   "z-index",
   "spinner"
  ]
 },
 {
  "value": "900",
  "original": {
   "value": "900"
  },
  "name": "z-index-modal",
  "attributes": {
   "category": "z-index",
   "type": "modal"
  },
  "path": [
   "z-index",
   "modal"
  ]
 },
 {
  "value": "950",
  "original": {
   "value": "950"
  },
  "name": "z-index-popup",
  "attributes": {
   "category": "z-index",
   "type": "popup"
  },
  "path": [
   "z-index",
   "popup"
  ]
 }
];

const { html } = litHtml;class ZIndexSwatch extends BaseSwatch {
    renderSample(token) {
        return html `<h4 style="font-family:monospace">
      ${token.value}
    </h4>`;
    }
}

const { html: html$1 } = litElement;customElements.define("z-index-swatch", ZIndexSwatch);
    
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
    const story = () => html$1`<z-index-swatch
  .tokens=${tokens}
></z-index-swatch>`;
    const rootNode = document;
    const stories = [{ key: 'story', story: story, code: story }];
    for (const story of stories) {
      // eslint-disable-next-line no-template-curly-in-string
      const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
      storyEl.story = story.story;
      storyEl.code = story.code;
    }

export { story };
