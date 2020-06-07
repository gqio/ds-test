import { a as litHtml, r as require, l as litElement } from '../../__require-a679080a.js';
import { r as renderWith } from '../../index-96b85fb1.js';
import { B as BaseSwatch } from '../../BaseSwatch-91ce4770.js';

var radii = [
 {
  "value": "0px",
  "original": {
   "value": "0"
  },
  "name": "size-border-radius-none",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "none"
  },
  "path": [
   "size",
   "border",
   "radius",
   "none"
  ]
 },
 {
  "value": "0.125px",
  "original": {
   "value": "0.125rem"
  },
  "name": "size-border-radius-sm",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "sm"
  },
  "path": [
   "size",
   "border",
   "radius",
   "sm"
  ]
 },
 {
  "value": "0.25px",
  "original": {
   "value": "0.25rem"
  },
  "name": "size-border-radius-default",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "default"
  },
  "path": [
   "size",
   "border",
   "radius",
   "default"
  ]
 },
 {
  "value": "0.375px",
  "original": {
   "value": "0.375rem"
  },
  "name": "size-border-radius-md",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "md"
  },
  "path": [
   "size",
   "border",
   "radius",
   "md"
  ]
 },
 {
  "value": "0.5px",
  "original": {
   "value": "0.5rem"
  },
  "name": "size-border-radius-lg",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "lg"
  },
  "path": [
   "size",
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
  "name": "size-border-radius-full",
  "attributes": {
   "category": "size",
   "type": "border",
   "item": "radius",
   "subitem": "full"
  },
  "path": [
   "size",
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
