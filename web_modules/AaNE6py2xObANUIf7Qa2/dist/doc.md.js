import { l as litElement, r as renderWith } from '../../components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js';
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

var tokens = [
 {
  "value": "30%",
  "original": {
   "value": "30%"
  },
  "name": "opacity-30",
  "attributes": {
   "category": "opacity",
   "type": "30"
  },
  "path": [
   "opacity",
   "30"
  ]
 },
 {
  "value": "50%",
  "original": {
   "value": "50%"
  },
  "name": "opacity-50",
  "attributes": {
   "category": "opacity",
   "type": "50"
  },
  "path": [
   "opacity",
   "50"
  ]
 },
 {
  "value": "75%",
  "original": {
   "value": "75%"
  },
  "name": "opacity-75",
  "attributes": {
   "category": "opacity",
   "type": "75"
  },
  "path": [
   "opacity",
   "75"
  ]
 },
 {
  "value": "85%",
  "original": {
   "value": "85%"
  },
  "name": "opacity-85",
  "attributes": {
   "category": "opacity",
   "type": "85"
  },
  "path": [
   "opacity",
   "85"
  ]
 }
];

const { html,css } = litElement;class OpacitySwatch extends BaseSwatch {
    static get styles() {
        return [
            BaseSwatch.styles,
            css `
        .sample {
          background: linear-gradient(
              45deg,
              rgba(43, 40, 38, 0.1) 25%,
              transparent 0
            ),
            linear-gradient(-45deg, rgba(43, 40, 38, 0.1) 25%, transparent 0),
            linear-gradient(45deg, transparent 75%, rgba(43, 40, 38, 0.1) 0),
            linear-gradient(-45deg, transparent 75%, rgba(43, 40, 38, 0.1) 0);
          background-size: 12px 12px;
          background-position: 0 0, 0 6px, 6px -6px, -6px 0;
        }
      `,
        ];
    }
    renderSample(token) {
        return html `<div class="sample">
      <div
        style="opacity:${token.value};width:100%;height:100%;background:#008080"
      ></div>
    </div>`;
    }
}

const { html: html$1 } = litElement;customElements.define("opacity-swatch", OpacitySwatch);
    
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
    const story = () => html$1`<opacity-swatch
  .tokens=${tokens}
></opacity-swatch>`;
    const rootNode = document;
    const stories = [{ key: 'story', story: story, code: story }];
    for (const story of stories) {
      // eslint-disable-next-line no-template-curly-in-string
      const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
      storyEl.story = story.story;
      storyEl.code = story.code;
    }

export { story };
