import { l as litElement, a as litHtml, i as index$2, r as renderWith } from '../../components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js';
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

var colors = [
 {
  "value": "#000",
  "original": {
   "value": "#000"
  },
  "name": "color-base-black",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "black",
   "hex": "000000",
   "rgb": {
    "r": 0,
    "g": 0,
    "b": 0,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0,
    "l": 0,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0,
    "v": 0,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "black"
  ]
 },
 {
  "value": "#fff",
  "original": {
   "value": "#fff"
  },
  "name": "color-base-white",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "white",
   "hex": "ffffff",
   "rgb": {
    "r": 255,
    "g": 255,
    "b": 255,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0,
    "l": 1,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "white"
  ]
 },
 {
  "value": "#f7fafc",
  "shade": "gray",
  "original": {
   "value": "#f7fafc",
   "shade": "gray"
  },
  "name": "color-base-gray-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-100",
   "hex": "f7fafc",
   "rgb": {
    "r": 247,
    "g": 250,
    "b": 252,
    "a": 1
   },
   "hsl": {
    "h": 204.0000000000002,
    "s": 0.454545454545456,
    "l": 0.9784313725490197,
    "a": 1
   },
   "hsv": {
    "h": 204.0000000000002,
    "s": 0.019841269841269882,
    "v": 0.9882352941176471,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-100"
  ]
 },
 {
  "value": "#edf2f7",
  "shade": "gray",
  "original": {
   "value": "#edf2f7",
   "shade": "gray"
  },
  "name": "color-base-gray-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-200",
   "hex": "edf2f7",
   "rgb": {
    "r": 237,
    "g": 242,
    "b": 247,
    "a": 1
   },
   "hsl": {
    "h": 210.00000000000009,
    "s": 0.38461538461538486,
    "l": 0.9490196078431372,
    "a": 1
   },
   "hsv": {
    "h": 210.00000000000009,
    "s": 0.04048582995951414,
    "v": 0.9686274509803922,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-200"
  ]
 },
 {
  "value": "#e2e8f0",
  "shade": "gray",
  "original": {
   "value": "#e2e8f0",
   "shade": "gray"
  },
  "name": "color-base-gray-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-300",
   "hex": "e2e8f0",
   "rgb": {
    "r": 226,
    "g": 232,
    "b": 240,
    "a": 1
   },
   "hsl": {
    "h": 214.28571428571428,
    "s": 0.31818181818181823,
    "l": 0.9137254901960784,
    "a": 1
   },
   "hsv": {
    "h": 214.28571428571428,
    "s": 0.05833333333333336,
    "v": 0.9411764705882353,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-300"
  ]
 },
 {
  "value": "#cbd5e0",
  "shade": "gray",
  "original": {
   "value": "#cbd5e0",
   "shade": "gray"
  },
  "name": "color-base-gray-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-400",
   "hex": "cbd5e0",
   "rgb": {
    "r": 203,
    "g": 213,
    "b": 224,
    "a": 1
   },
   "hsl": {
    "h": 211.42857142857136,
    "s": 0.2530120481927712,
    "l": 0.8372549019607842,
    "a": 1
   },
   "hsv": {
    "h": 211.42857142857136,
    "s": 0.09375000000000004,
    "v": 0.8784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-400"
  ]
 },
 {
  "value": "#a0aec0",
  "shade": "gray",
  "original": {
   "value": "#a0aec0",
   "shade": "gray"
  },
  "name": "color-base-gray-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-500",
   "hex": "a0aec0",
   "rgb": {
    "r": 160,
    "g": 174,
    "b": 192,
    "a": 1
   },
   "hsl": {
    "h": 213.75,
    "s": 0.20253164556962025,
    "l": 0.6901960784313725,
    "a": 1
   },
   "hsv": {
    "h": 213.75,
    "s": 0.16666666666666666,
    "v": 0.7529411764705882,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-500"
  ]
 },
 {
  "value": "#718096",
  "shade": "gray",
  "original": {
   "value": "#718096",
   "shade": "gray"
  },
  "name": "color-base-gray-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-600",
   "hex": "718096",
   "rgb": {
    "r": 113,
    "g": 128,
    "b": 150,
    "a": 1
   },
   "hsl": {
    "h": 215.67567567567568,
    "s": 0.14979757085020248,
    "l": 0.5156862745098039,
    "a": 1
   },
   "hsv": {
    "h": 215.67567567567568,
    "s": 0.24666666666666673,
    "v": 0.5882352941176471,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-600"
  ]
 },
 {
  "value": "#4a5568",
  "shade": "gray",
  "original": {
   "value": "#4a5568",
   "shade": "gray"
  },
  "name": "color-base-gray-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-700",
   "hex": "4a5568",
   "rgb": {
    "r": 74,
    "g": 85,
    "b": 104,
    "a": 1
   },
   "hsl": {
    "h": 218.00000000000003,
    "s": 0.1685393258426966,
    "l": 0.34901960784313724,
    "a": 1
   },
   "hsv": {
    "h": 218.00000000000003,
    "s": 0.2884615384615384,
    "v": 0.40784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-700"
  ]
 },
 {
  "value": "#2d3748",
  "shade": "gray",
  "original": {
   "value": "#2d3748",
   "shade": "gray"
  },
  "name": "color-base-gray-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-800",
   "hex": "2d3748",
   "rgb": {
    "r": 45,
    "g": 55,
    "b": 72,
    "a": 1
   },
   "hsl": {
    "h": 217.77777777777777,
    "s": 0.23076923076923073,
    "l": 0.22941176470588237,
    "a": 1
   },
   "hsv": {
    "h": 217.77777777777777,
    "s": 0.37499999999999994,
    "v": 0.2823529411764706,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-800"
  ]
 },
 {
  "value": "#1a202c",
  "shade": "gray",
  "original": {
   "value": "#1a202c",
   "shade": "gray"
  },
  "name": "color-base-gray-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "gray-900",
   "hex": "1a202c",
   "rgb": {
    "r": 26,
    "g": 32,
    "b": 44,
    "a": 1
   },
   "hsl": {
    "h": 219.99999999999997,
    "s": 0.2571428571428571,
    "l": 0.13725490196078433,
    "a": 1
   },
   "hsv": {
    "h": 219.99999999999997,
    "s": 0.4090909090909091,
    "v": 0.17254901960784313,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "gray-900"
  ]
 },
 {
  "value": "#fff5f5",
  "shade": "red",
  "original": {
   "value": "#fff5f5",
   "shade": "red"
  },
  "name": "color-base-red-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-100",
   "hex": "fff5f5",
   "rgb": {
    "r": 255,
    "g": 245,
    "b": 245,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 1,
    "l": 0.9803921568627452,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.039215686274509776,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-100"
  ]
 },
 {
  "value": "#fed7d7",
  "shade": "red",
  "original": {
   "value": "#fed7d7",
   "shade": "red"
  },
  "name": "color-base-red-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-200",
   "hex": "fed7d7",
   "rgb": {
    "r": 254,
    "g": 215,
    "b": 215,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.9512195121951221,
    "l": 0.919607843137255,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.15354330708661418,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-200"
  ]
 },
 {
  "value": "#feb2b2",
  "shade": "red",
  "original": {
   "value": "#feb2b2",
   "shade": "red"
  },
  "name": "color-base-red-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-300",
   "hex": "feb2b2",
   "rgb": {
    "r": 254,
    "g": 178,
    "b": 178,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.9743589743589745,
    "l": 0.8470588235294118,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.2992125984251969,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-300"
  ]
 },
 {
  "value": "#fc8181",
  "shade": "red",
  "original": {
   "value": "#fc8181",
   "shade": "red"
  },
  "name": "color-base-red-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-400",
   "hex": "fc8181",
   "rgb": {
    "r": 252,
    "g": 129,
    "b": 129,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.9534883720930234,
    "l": 0.7470588235294118,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.48809523809523814,
    "v": 0.9882352941176471,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-400"
  ]
 },
 {
  "value": "#f56565",
  "shade": "red",
  "original": {
   "value": "#f56565",
   "shade": "red"
  },
  "name": "color-base-red-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-500",
   "hex": "f56565",
   "rgb": {
    "r": 245,
    "g": 101,
    "b": 101,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.878048780487805,
    "l": 0.6784313725490196,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.5877551020408163,
    "v": 0.9607843137254902,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-500"
  ]
 },
 {
  "value": "#e53e3e",
  "shade": "red",
  "original": {
   "value": "#e53e3e",
   "shade": "red"
  },
  "name": "color-base-red-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-600",
   "hex": "e53e3e",
   "rgb": {
    "r": 229,
    "g": 62,
    "b": 62,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.7625570776255707,
    "l": 0.5705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.7292576419213974,
    "v": 0.8980392156862745,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-600"
  ]
 },
 {
  "value": "#c53030",
  "shade": "red",
  "original": {
   "value": "#c53030",
   "shade": "red"
  },
  "name": "color-base-red-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-700",
   "hex": "c53030",
   "rgb": {
    "r": 197,
    "g": 48,
    "b": 48,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.6081632653061224,
    "l": 0.4803921568627451,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.7563451776649747,
    "v": 0.7725490196078432,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-700"
  ]
 },
 {
  "value": "#9b2c2c",
  "shade": "red",
  "original": {
   "value": "#9b2c2c",
   "shade": "red"
  },
  "name": "color-base-red-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-800",
   "hex": "9b2c2c",
   "rgb": {
    "r": 155,
    "g": 44,
    "b": 44,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.5577889447236181,
    "l": 0.3901960784313725,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.7161290322580645,
    "v": 0.6078431372549019,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-800"
  ]
 },
 {
  "value": "#742a2a",
  "shade": "red",
  "original": {
   "value": "#742a2a",
   "shade": "red"
  },
  "name": "color-base-red-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "red-900",
   "hex": "742a2a",
   "rgb": {
    "r": 116,
    "g": 42,
    "b": 42,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.4683544303797468,
    "l": 0.30980392156862746,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.6379310344827586,
    "v": 0.4549019607843137,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "red-900"
  ]
 },
 {
  "value": "#fffaf0",
  "shade": "orange",
  "original": {
   "value": "#fffaf0",
   "shade": "orange"
  },
  "name": "color-base-orange-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-100",
   "hex": "fffaf0",
   "rgb": {
    "r": 255,
    "g": 250,
    "b": 240,
    "a": 1
   },
   "hsl": {
    "h": 39.999999999999964,
    "s": 1,
    "l": 0.9705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 39.999999999999964,
    "s": 0.05882352941176472,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-100"
  ]
 },
 {
  "value": "#feebc8",
  "shade": "orange",
  "original": {
   "value": "#feebc8",
   "shade": "orange"
  },
  "name": "color-base-orange-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-200",
   "hex": "feebc8",
   "rgb": {
    "r": 254,
    "g": 235,
    "b": 200,
    "a": 1
   },
   "hsl": {
    "h": 38.88888888888888,
    "s": 0.9642857142857144,
    "l": 0.8901960784313725,
    "a": 1
   },
   "hsv": {
    "h": 38.88888888888888,
    "s": 0.2125984251968504,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-200"
  ]
 },
 {
  "value": "#fbd38d",
  "shade": "orange",
  "original": {
   "value": "#fbd38d",
   "shade": "orange"
  },
  "name": "color-base-orange-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-300",
   "hex": "fbd38d",
   "rgb": {
    "r": 251,
    "g": 211,
    "b": 141,
    "a": 1
   },
   "hsl": {
    "h": 38.18181818181817,
    "s": 0.9322033898305084,
    "l": 0.7686274509803921,
    "a": 1
   },
   "hsv": {
    "h": 38.18181818181817,
    "s": 0.4382470119521912,
    "v": 0.984313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-300"
  ]
 },
 {
  "value": "#f6ad55",
  "shade": "orange",
  "original": {
   "value": "#f6ad55",
   "shade": "orange"
  },
  "name": "color-base-orange-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-400",
   "hex": "f6ad55",
   "rgb": {
    "r": 246,
    "g": 173,
    "b": 85,
    "a": 1
   },
   "hsl": {
    "h": 32.79503105590063,
    "s": 0.8994413407821229,
    "l": 0.6490196078431373,
    "a": 1
   },
   "hsv": {
    "h": 32.79503105590063,
    "s": 0.6544715447154471,
    "v": 0.9647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-400"
  ]
 },
 {
  "value": "#ed8936",
  "shade": "orange",
  "original": {
   "value": "#ed8936",
   "shade": "orange"
  },
  "name": "color-base-orange-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-500",
   "hex": "ed8936",
   "rgb": {
    "r": 237,
    "g": 137,
    "b": 54,
    "a": 1
   },
   "hsl": {
    "h": 27.21311475409836,
    "s": 0.8356164383561644,
    "l": 0.5705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 27.21311475409836,
    "s": 0.7721518987341772,
    "v": 0.9294117647058824,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-500"
  ]
 },
 {
  "value": "#dd6b20",
  "shade": "orange",
  "original": {
   "value": "#dd6b20",
   "shade": "orange"
  },
  "name": "color-base-orange-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-600",
   "hex": "dd6b20",
   "rgb": {
    "r": 221,
    "g": 107,
    "b": 32,
    "a": 1
   },
   "hsl": {
    "h": 23.809523809523807,
    "s": 0.7470355731225297,
    "l": 0.49607843137254903,
    "a": 1
   },
   "hsv": {
    "h": 23.809523809523807,
    "s": 0.8552036199095022,
    "v": 0.8666666666666667,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-600"
  ]
 },
 {
  "value": "#c05621",
  "shade": "orange",
  "original": {
   "value": "#c05621",
   "shade": "orange"
  },
  "name": "color-base-orange-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-700",
   "hex": "c05621",
   "rgb": {
    "r": 192,
    "g": 86,
    "b": 33,
    "a": 1
   },
   "hsl": {
    "h": 20,
    "s": 0.7066666666666667,
    "l": 0.4411764705882353,
    "a": 1
   },
   "hsv": {
    "h": 20,
    "s": 0.828125,
    "v": 0.7529411764705882,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-700"
  ]
 },
 {
  "value": "#9c4221",
  "shade": "orange",
  "original": {
   "value": "#9c4221",
   "shade": "orange"
  },
  "name": "color-base-orange-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-800",
   "hex": "9c4221",
   "rgb": {
    "r": 156,
    "g": 66,
    "b": 33,
    "a": 1
   },
   "hsl": {
    "h": 16.097560975609756,
    "s": 0.6507936507936508,
    "l": 0.37058823529411766,
    "a": 1
   },
   "hsv": {
    "h": 16.097560975609756,
    "s": 0.7884615384615385,
    "v": 0.611764705882353,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-800"
  ]
 },
 {
  "value": "#7b341e",
  "shade": "orange",
  "original": {
   "value": "#7b341e",
   "shade": "orange"
  },
  "name": "color-base-orange-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "orange-900",
   "hex": "7b341e",
   "rgb": {
    "r": 123,
    "g": 52,
    "b": 30,
    "a": 1
   },
   "hsl": {
    "h": 14.193548387096774,
    "s": 0.607843137254902,
    "l": 0.3,
    "a": 1
   },
   "hsv": {
    "h": 14.193548387096774,
    "s": 0.7560975609756099,
    "v": 0.4823529411764706,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "orange-900"
  ]
 },
 {
  "value": "#fffff0",
  "shade": "yellow",
  "original": {
   "value": "#fffff0",
   "shade": "yellow"
  },
  "name": "color-base-yellow-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-100",
   "hex": "fffff0",
   "rgb": {
    "r": 255,
    "g": 255,
    "b": 240,
    "a": 1
   },
   "hsl": {
    "h": 60,
    "s": 1,
    "l": 0.9705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 60,
    "s": 0.05882352941176472,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-100"
  ]
 },
 {
  "value": "#fefcbf",
  "shade": "yellow",
  "original": {
   "value": "#fefcbf",
   "shade": "yellow"
  },
  "name": "color-base-yellow-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-200",
   "hex": "fefcbf",
   "rgb": {
    "r": 254,
    "g": 252,
    "b": 191,
    "a": 1
   },
   "hsl": {
    "h": 58.0952380952381,
    "s": 0.9692307692307693,
    "l": 0.8725490196078431,
    "a": 1
   },
   "hsv": {
    "h": 58.0952380952381,
    "s": 0.24803149606299213,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-200"
  ]
 },
 {
  "value": "#faf089",
  "shade": "yellow",
  "original": {
   "value": "#faf089",
   "shade": "yellow"
  },
  "name": "color-base-yellow-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-300",
   "hex": "faf089",
   "rgb": {
    "r": 250,
    "g": 240,
    "b": 137,
    "a": 1
   },
   "hsl": {
    "h": 54.690265486725664,
    "s": 0.9186991869918699,
    "l": 0.7588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 54.690265486725664,
    "s": 0.452,
    "v": 0.9803921568627451,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-300"
  ]
 },
 {
  "value": "#f6e05e",
  "shade": "yellow",
  "original": {
   "value": "#f6e05e",
   "shade": "yellow"
  },
  "name": "color-base-yellow-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-400",
   "hex": "f6e05e",
   "rgb": {
    "r": 246,
    "g": 224,
    "b": 94,
    "a": 1
   },
   "hsl": {
    "h": 51.31578947368421,
    "s": 0.8941176470588237,
    "l": 0.6666666666666667,
    "a": 1
   },
   "hsv": {
    "h": 51.31578947368421,
    "s": 0.6178861788617886,
    "v": 0.9647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-400"
  ]
 },
 {
  "value": "#ecc94b",
  "shade": "yellow",
  "original": {
   "value": "#ecc94b",
   "shade": "yellow"
  },
  "name": "color-base-yellow-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-500",
   "hex": "ecc94b",
   "rgb": {
    "r": 236,
    "g": 201,
    "b": 75,
    "a": 1
   },
   "hsl": {
    "h": 46.95652173913043,
    "s": 0.8090452261306533,
    "l": 0.6098039215686275,
    "a": 1
   },
   "hsv": {
    "h": 46.95652173913043,
    "s": 0.6822033898305084,
    "v": 0.9254901960784314,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-500"
  ]
 },
 {
  "value": "#d69e2e",
  "shade": "yellow",
  "original": {
   "value": "#d69e2e",
   "shade": "yellow"
  },
  "name": "color-base-yellow-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-600",
   "hex": "d69e2e",
   "rgb": {
    "r": 214,
    "g": 158,
    "b": 46,
    "a": 1
   },
   "hsl": {
    "h": 40,
    "s": 0.672,
    "l": 0.5098039215686274,
    "a": 1
   },
   "hsv": {
    "h": 40,
    "s": 0.7850467289719626,
    "v": 0.8392156862745098,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-600"
  ]
 },
 {
  "value": "#b7791f",
  "shade": "yellow",
  "original": {
   "value": "#b7791f",
   "shade": "yellow"
  },
  "name": "color-base-yellow-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-700",
   "hex": "b7791f",
   "rgb": {
    "r": 183,
    "g": 121,
    "b": 31,
    "a": 1
   },
   "hsl": {
    "h": 35.52631578947368,
    "s": 0.7102803738317757,
    "l": 0.4196078431372549,
    "a": 1
   },
   "hsv": {
    "h": 35.52631578947368,
    "s": 0.8306010928961749,
    "v": 0.7176470588235294,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-700"
  ]
 },
 {
  "value": "#975a16",
  "shade": "yellow",
  "original": {
   "value": "#975a16",
   "shade": "yellow"
  },
  "name": "color-base-yellow-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-800",
   "hex": "975a16",
   "rgb": {
    "r": 151,
    "g": 90,
    "b": 22,
    "a": 1
   },
   "hsl": {
    "h": 31.627906976744192,
    "s": 0.745664739884393,
    "l": 0.3392156862745098,
    "a": 1
   },
   "hsv": {
    "h": 31.627906976744192,
    "s": 0.8543046357615893,
    "v": 0.592156862745098,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-800"
  ]
 },
 {
  "value": "#744210",
  "shade": "yellow",
  "original": {
   "value": "#744210",
   "shade": "yellow"
  },
  "name": "color-base-yellow-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "yellow-900",
   "hex": "744210",
   "rgb": {
    "r": 116,
    "g": 66,
    "b": 16,
    "a": 1
   },
   "hsl": {
    "h": 30.000000000000007,
    "s": 0.7575757575757577,
    "l": 0.2588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 30.000000000000007,
    "s": 0.8620689655172413,
    "v": 0.4549019607843137,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "yellow-900"
  ]
 },
 {
  "value": "#f0fff4",
  "shade": "green",
  "original": {
   "value": "#f0fff4",
   "shade": "green"
  },
  "name": "color-base-green-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-100",
   "hex": "f0fff4",
   "rgb": {
    "r": 240,
    "g": 255,
    "b": 244,
    "a": 1
   },
   "hsl": {
    "h": 136.00000000000006,
    "s": 1,
    "l": 0.9705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 136.00000000000006,
    "s": 0.05882352941176472,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-100"
  ]
 },
 {
  "value": "#c6f6d5",
  "shade": "green",
  "original": {
   "value": "#c6f6d5",
   "shade": "green"
  },
  "name": "color-base-green-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-200",
   "hex": "c6f6d5",
   "rgb": {
    "r": 198,
    "g": 246,
    "b": 213,
    "a": 1
   },
   "hsl": {
    "h": 138.75,
    "s": 0.7272727272727276,
    "l": 0.8705882352941177,
    "a": 1
   },
   "hsv": {
    "h": 138.75,
    "s": 0.1951219512195122,
    "v": 0.9647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-200"
  ]
 },
 {
  "value": "#9ae6b4",
  "shade": "green",
  "original": {
   "value": "#9ae6b4",
   "shade": "green"
  },
  "name": "color-base-green-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-300",
   "hex": "9ae6b4",
   "rgb": {
    "r": 154,
    "g": 230,
    "b": 180,
    "a": 1
   },
   "hsl": {
    "h": 140.5263157894737,
    "s": 0.6031746031746031,
    "l": 0.7529411764705882,
    "a": 1
   },
   "hsv": {
    "h": 140.5263157894737,
    "s": 0.3304347826086957,
    "v": 0.9019607843137255,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-300"
  ]
 },
 {
  "value": "#68d391",
  "shade": "green",
  "original": {
   "value": "#68d391",
   "shade": "green"
  },
  "name": "color-base-green-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-400",
   "hex": "68d391",
   "rgb": {
    "r": 104,
    "g": 211,
    "b": 145,
    "a": 1
   },
   "hsl": {
    "h": 142.99065420560748,
    "s": 0.5487179487179487,
    "l": 0.6176470588235294,
    "a": 1
   },
   "hsv": {
    "h": 142.99065420560748,
    "s": 0.5071090047393365,
    "v": 0.8274509803921568,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-400"
  ]
 },
 {
  "value": "#48bb78",
  "shade": "green",
  "original": {
   "value": "#48bb78",
   "shade": "green"
  },
  "name": "color-base-green-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-500",
   "hex": "48bb78",
   "rgb": {
    "r": 72,
    "g": 187,
    "b": 120,
    "a": 1
   },
   "hsl": {
    "h": 145.04347826086956,
    "s": 0.4581673306772908,
    "l": 0.5078431372549019,
    "a": 1
   },
   "hsv": {
    "h": 145.04347826086956,
    "s": 0.6149732620320856,
    "v": 0.7333333333333333,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-500"
  ]
 },
 {
  "value": "#38a169",
  "shade": "green",
  "original": {
   "value": "#38a169",
   "shade": "green"
  },
  "name": "color-base-green-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-600",
   "hex": "38a169",
   "rgb": {
    "r": 56,
    "g": 161,
    "b": 105,
    "a": 1
   },
   "hsl": {
    "h": 148,
    "s": 0.4838709677419355,
    "l": 0.42549019607843136,
    "a": 1
   },
   "hsv": {
    "h": 148,
    "s": 0.6521739130434783,
    "v": 0.6313725490196078,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-600"
  ]
 },
 {
  "value": "#2f855a",
  "shade": "green",
  "original": {
   "value": "#2f855a",
   "shade": "green"
  },
  "name": "color-base-green-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-700",
   "hex": "2f855a",
   "rgb": {
    "r": 47,
    "g": 133,
    "b": 90,
    "a": 1
   },
   "hsl": {
    "h": 150,
    "s": 0.4777777777777778,
    "l": 0.35294117647058826,
    "a": 1
   },
   "hsv": {
    "h": 150,
    "s": 0.6466165413533834,
    "v": 0.5215686274509804,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-700"
  ]
 },
 {
  "value": "#276749",
  "shade": "green",
  "original": {
   "value": "#276749",
   "shade": "green"
  },
  "name": "color-base-green-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-800",
   "hex": "276749",
   "rgb": {
    "r": 39,
    "g": 103,
    "b": 73,
    "a": 1
   },
   "hsl": {
    "h": 151.875,
    "s": 0.45070422535211263,
    "l": 0.2784313725490196,
    "a": 1
   },
   "hsv": {
    "h": 151.875,
    "s": 0.6213592233009708,
    "v": 0.403921568627451,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-800"
  ]
 },
 {
  "value": "#22543d",
  "shade": "green",
  "original": {
   "value": "#22543d",
   "shade": "green"
  },
  "name": "color-base-green-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "green-900",
   "hex": "22543d",
   "rgb": {
    "r": 34,
    "g": 84,
    "b": 61,
    "a": 1
   },
   "hsl": {
    "h": 152.4,
    "s": 0.423728813559322,
    "l": 0.23137254901960785,
    "a": 1
   },
   "hsv": {
    "h": 152.4,
    "s": 0.5952380952380952,
    "v": 0.32941176470588235,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "green-900"
  ]
 },
 {
  "value": "#e6fffa",
  "shade": "teal",
  "original": {
   "value": "#e6fffa",
   "shade": "teal"
  },
  "name": "color-base-teal-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-100",
   "hex": "e6fffa",
   "rgb": {
    "r": 230,
    "g": 255,
    "b": 250,
    "a": 1
   },
   "hsl": {
    "h": 167.99999999999997,
    "s": 1,
    "l": 0.9509803921568627,
    "a": 1
   },
   "hsv": {
    "h": 167.99999999999997,
    "s": 0.0980392156862745,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-100"
  ]
 },
 {
  "value": "#b2f5ea",
  "shade": "teal",
  "original": {
   "value": "#b2f5ea",
   "shade": "teal"
  },
  "name": "color-base-teal-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-200",
   "hex": "b2f5ea",
   "rgb": {
    "r": 178,
    "g": 245,
    "b": 234,
    "a": 1
   },
   "hsl": {
    "h": 170.14925373134326,
    "s": 0.770114942528736,
    "l": 0.8294117647058823,
    "a": 1
   },
   "hsv": {
    "h": 170.14925373134326,
    "s": 0.2734693877551021,
    "v": 0.9607843137254902,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-200"
  ]
 },
 {
  "value": "#81e6d9",
  "shade": "teal",
  "original": {
   "value": "#81e6d9",
   "shade": "teal"
  },
  "name": "color-base-teal-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-300",
   "hex": "81e6d9",
   "rgb": {
    "r": 129,
    "g": 230,
    "b": 217,
    "a": 1
   },
   "hsl": {
    "h": 172.27722772277227,
    "s": 0.6688741721854304,
    "l": 0.7039215686274509,
    "a": 1
   },
   "hsv": {
    "h": 172.27722772277227,
    "s": 0.4391304347826087,
    "v": 0.9019607843137255,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-300"
  ]
 },
 {
  "value": "#4fd1c5",
  "shade": "teal",
  "original": {
   "value": "#4fd1c5",
   "shade": "teal"
  },
  "name": "color-base-teal-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-400",
   "hex": "4fd1c5",
   "rgb": {
    "r": 79,
    "g": 209,
    "b": 197,
    "a": 1
   },
   "hsl": {
    "h": 174.46153846153848,
    "s": 0.5855855855855855,
    "l": 0.5647058823529412,
    "a": 1
   },
   "hsv": {
    "h": 174.46153846153848,
    "s": 0.6220095693779905,
    "v": 0.8196078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-400"
  ]
 },
 {
  "value": "#38b2ac",
  "shade": "teal",
  "original": {
   "value": "#38b2ac",
   "shade": "teal"
  },
  "name": "color-base-teal-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-500",
   "hex": "38b2ac",
   "rgb": {
    "r": 56,
    "g": 178,
    "b": 172,
    "a": 1
   },
   "hsl": {
    "h": 177.04918032786887,
    "s": 0.5213675213675214,
    "l": 0.4588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 177.04918032786887,
    "s": 0.6853932584269663,
    "v": 0.6980392156862745,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-500"
  ]
 },
 {
  "value": "#319795",
  "shade": "teal",
  "original": {
   "value": "#319795",
   "shade": "teal"
  },
  "name": "color-base-teal-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-600",
   "hex": "319795",
   "rgb": {
    "r": 49,
    "g": 151,
    "b": 149,
    "a": 1
   },
   "hsl": {
    "h": 178.8235294117647,
    "s": 0.51,
    "l": 0.39215686274509803,
    "a": 1
   },
   "hsv": {
    "h": 178.8235294117647,
    "s": 0.6754966887417219,
    "v": 0.592156862745098,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-600"
  ]
 },
 {
  "value": "#2c7a7b",
  "shade": "teal",
  "original": {
   "value": "#2c7a7b",
   "shade": "teal"
  },
  "name": "color-base-teal-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-700",
   "hex": "2c7a7b",
   "rgb": {
    "r": 44,
    "g": 122,
    "b": 123,
    "a": 1
   },
   "hsl": {
    "h": 180.75949367088606,
    "s": 0.47305389221556887,
    "l": 0.32745098039215687,
    "a": 1
   },
   "hsv": {
    "h": 180.75949367088606,
    "s": 0.6422764227642277,
    "v": 0.4823529411764706,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-700"
  ]
 },
 {
  "value": "#285e61",
  "shade": "teal",
  "original": {
   "value": "#285e61",
   "shade": "teal"
  },
  "name": "color-base-teal-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-800",
   "hex": "285e61",
   "rgb": {
    "r": 40,
    "g": 94,
    "b": 97,
    "a": 1
   },
   "hsl": {
    "h": 183.15789473684208,
    "s": 0.41605839416058393,
    "l": 0.26862745098039215,
    "a": 1
   },
   "hsv": {
    "h": 183.15789473684208,
    "s": 0.5876288659793815,
    "v": 0.3803921568627451,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-800"
  ]
 },
 {
  "value": "#234e52",
  "shade": "teal",
  "original": {
   "value": "#234e52",
   "shade": "teal"
  },
  "name": "color-base-teal-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "teal-900",
   "hex": "234e52",
   "rgb": {
    "r": 35,
    "g": 78,
    "b": 82,
    "a": 1
   },
   "hsl": {
    "h": 185.10638297872342,
    "s": 0.4017094017094017,
    "l": 0.22941176470588237,
    "a": 1
   },
   "hsv": {
    "h": 185.10638297872342,
    "s": 0.573170731707317,
    "v": 0.3215686274509804,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "teal-900"
  ]
 },
 {
  "value": "#ebf8ff",
  "shade": "blue",
  "original": {
   "value": "#ebf8ff",
   "shade": "blue"
  },
  "name": "color-base-blue-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-100",
   "hex": "ebf8ff",
   "rgb": {
    "r": 235,
    "g": 248,
    "b": 255,
    "a": 1
   },
   "hsl": {
    "h": 201,
    "s": 1,
    "l": 0.9607843137254901,
    "a": 1
   },
   "hsv": {
    "h": 201,
    "s": 0.07843137254901966,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-100"
  ]
 },
 {
  "value": "#bee3f8",
  "shade": "blue",
  "original": {
   "value": "#bee3f8",
   "shade": "blue"
  },
  "name": "color-base-blue-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-200",
   "hex": "bee3f8",
   "rgb": {
    "r": 190,
    "g": 227,
    "b": 248,
    "a": 1
   },
   "hsl": {
    "h": 201.7241379310345,
    "s": 0.8055555555555558,
    "l": 0.8588235294117648,
    "a": 1
   },
   "hsv": {
    "h": 201.7241379310345,
    "s": 0.23387096774193544,
    "v": 0.9725490196078431,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-200"
  ]
 },
 {
  "value": "#90cdf4",
  "shade": "blue",
  "original": {
   "value": "#90cdf4",
   "shade": "blue"
  },
  "name": "color-base-blue-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-300",
   "hex": "90cdf4",
   "rgb": {
    "r": 144,
    "g": 205,
    "b": 244,
    "a": 1
   },
   "hsl": {
    "h": 203.40000000000003,
    "s": 0.8196721311475413,
    "l": 0.7607843137254902,
    "a": 1
   },
   "hsv": {
    "h": 203.40000000000003,
    "s": 0.4098360655737705,
    "v": 0.9568627450980393,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-300"
  ]
 },
 {
  "value": "#63b3ed",
  "shade": "blue",
  "original": {
   "value": "#63b3ed",
   "shade": "blue"
  },
  "name": "color-base-blue-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-400",
   "hex": "63b3ed",
   "rgb": {
    "r": 99,
    "g": 179,
    "b": 237,
    "a": 1
   },
   "hsl": {
    "h": 205.2173913043478,
    "s": 0.7931034482758622,
    "l": 0.6588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 205.2173913043478,
    "s": 0.5822784810126583,
    "v": 0.9294117647058824,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-400"
  ]
 },
 {
  "value": "#4299e1",
  "shade": "blue",
  "original": {
   "value": "#4299e1",
   "shade": "blue"
  },
  "name": "color-base-blue-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-500",
   "hex": "4299e1",
   "rgb": {
    "r": 66,
    "g": 153,
    "b": 225,
    "a": 1
   },
   "hsl": {
    "h": 207.16981132075472,
    "s": 0.7260273972602739,
    "l": 0.5705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 207.16981132075472,
    "s": 0.7066666666666667,
    "v": 0.8823529411764706,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-500"
  ]
 },
 {
  "value": "#3182ce",
  "shade": "blue",
  "original": {
   "value": "#3182ce",
   "shade": "blue"
  },
  "name": "color-base-blue-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-600",
   "hex": "3182ce",
   "rgb": {
    "r": 49,
    "g": 130,
    "b": 206,
    "a": 1
   },
   "hsl": {
    "h": 209.04458598726114,
    "s": 0.615686274509804,
    "l": 0.5,
    "a": 1
   },
   "hsv": {
    "h": 209.04458598726114,
    "s": 0.7621359223300971,
    "v": 0.807843137254902,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-600"
  ]
 },
 {
  "value": "#2b6cb0",
  "shade": "blue",
  "original": {
   "value": "#2b6cb0",
   "shade": "blue"
  },
  "name": "color-base-blue-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-700",
   "hex": "2b6cb0",
   "rgb": {
    "r": 43,
    "g": 108,
    "b": 176,
    "a": 1
   },
   "hsl": {
    "h": 210.6766917293233,
    "s": 0.6073059360730593,
    "l": 0.4294117647058824,
    "a": 1
   },
   "hsv": {
    "h": 210.6766917293233,
    "s": 0.7556818181818181,
    "v": 0.6901960784313725,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-700"
  ]
 },
 {
  "value": "#2c5282",
  "shade": "blue",
  "original": {
   "value": "#2c5282",
   "shade": "blue"
  },
  "name": "color-base-blue-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-800",
   "hex": "2c5282",
   "rgb": {
    "r": 44,
    "g": 82,
    "b": 130,
    "a": 1
   },
   "hsl": {
    "h": 213.4883720930233,
    "s": 0.49425287356321834,
    "l": 0.3411764705882353,
    "a": 1
   },
   "hsv": {
    "h": 213.4883720930233,
    "s": 0.6615384615384615,
    "v": 0.5098039215686274,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-800"
  ]
 },
 {
  "value": "#2a4365",
  "shade": "blue",
  "original": {
   "value": "#2a4365",
   "shade": "blue"
  },
  "name": "color-base-blue-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "blue-900",
   "hex": "2a4365",
   "rgb": {
    "r": 42,
    "g": 67,
    "b": 101,
    "a": 1
   },
   "hsl": {
    "h": 214.5762711864407,
    "s": 0.41258741258741255,
    "l": 0.2803921568627451,
    "a": 1
   },
   "hsv": {
    "h": 214.5762711864407,
    "s": 0.5841584158415841,
    "v": 0.396078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "blue-900"
  ]
 },
 {
  "value": "#ebf4ff",
  "shade": "indigo",
  "original": {
   "value": "#ebf4ff",
   "shade": "indigo"
  },
  "name": "color-base-indigo-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-100",
   "hex": "ebf4ff",
   "rgb": {
    "r": 235,
    "g": 244,
    "b": 255,
    "a": 1
   },
   "hsl": {
    "h": 212.99999999999991,
    "s": 1,
    "l": 0.9607843137254901,
    "a": 1
   },
   "hsv": {
    "h": 212.99999999999991,
    "s": 0.07843137254901966,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-100"
  ]
 },
 {
  "value": "#c3dafe",
  "shade": "indigo",
  "original": {
   "value": "#c3dafe",
   "shade": "indigo"
  },
  "name": "color-base-indigo-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-200",
   "hex": "c3dafe",
   "rgb": {
    "r": 195,
    "g": 218,
    "b": 254,
    "a": 1
   },
   "hsl": {
    "h": 216.61016949152545,
    "s": 0.9672131147540984,
    "l": 0.8803921568627451,
    "a": 1
   },
   "hsv": {
    "h": 216.61016949152545,
    "s": 0.2322834645669292,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-200"
  ]
 },
 {
  "value": "#a3bffa",
  "shade": "indigo",
  "original": {
   "value": "#a3bffa",
   "shade": "indigo"
  },
  "name": "color-base-indigo-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-300",
   "hex": "a3bffa",
   "rgb": {
    "r": 163,
    "g": 191,
    "b": 250,
    "a": 1
   },
   "hsl": {
    "h": 220.68965517241378,
    "s": 0.8969072164948454,
    "l": 0.8098039215686275,
    "a": 1
   },
   "hsv": {
    "h": 220.68965517241378,
    "s": 0.34800000000000003,
    "v": 0.9803921568627451,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-300"
  ]
 },
 {
  "value": "#7f9cf5",
  "shade": "indigo",
  "original": {
   "value": "#7f9cf5",
   "shade": "indigo"
  },
  "name": "color-base-indigo-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-400",
   "hex": "7f9cf5",
   "rgb": {
    "r": 127,
    "g": 156,
    "b": 245,
    "a": 1
   },
   "hsl": {
    "h": 225.25423728813556,
    "s": 0.8550724637681162,
    "l": 0.7294117647058824,
    "a": 1
   },
   "hsv": {
    "h": 225.25423728813556,
    "s": 0.4816326530612245,
    "v": 0.9607843137254902,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-400"
  ]
 },
 {
  "value": "#667eea",
  "shade": "indigo",
  "original": {
   "value": "#667eea",
   "shade": "indigo"
  },
  "name": "color-base-indigo-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-500",
   "hex": "667eea",
   "rgb": {
    "r": 102,
    "g": 126,
    "b": 234,
    "a": 1
   },
   "hsl": {
    "h": 229.0909090909091,
    "s": 0.7586206896551722,
    "l": 0.6588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 229.0909090909091,
    "s": 0.5641025641025641,
    "v": 0.9176470588235294,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-500"
  ]
 },
 {
  "value": "#5a67d8",
  "shade": "indigo",
  "original": {
   "value": "#5a67d8",
   "shade": "indigo"
  },
  "name": "color-base-indigo-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-600",
   "hex": "5a67d8",
   "rgb": {
    "r": 90,
    "g": 103,
    "b": 216,
    "a": 1
   },
   "hsl": {
    "h": 233.8095238095238,
    "s": 0.6176470588235295,
    "l": 0.6,
    "a": 1
   },
   "hsv": {
    "h": 233.8095238095238,
    "s": 0.5833333333333333,
    "v": 0.8470588235294118,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-600"
  ]
 },
 {
  "value": "#4c51bf",
  "shade": "indigo",
  "original": {
   "value": "#4c51bf",
   "shade": "indigo"
  },
  "name": "color-base-indigo-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-700",
   "hex": "4c51bf",
   "rgb": {
    "r": 76,
    "g": 81,
    "b": 191,
    "a": 1
   },
   "hsl": {
    "h": 237.39130434782606,
    "s": 0.4732510288065844,
    "l": 0.5235294117647059,
    "a": 1
   },
   "hsv": {
    "h": 237.39130434782606,
    "s": 0.6020942408376964,
    "v": 0.7490196078431373,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-700"
  ]
 },
 {
  "value": "#434190",
  "shade": "indigo",
  "original": {
   "value": "#434190",
   "shade": "indigo"
  },
  "name": "color-base-indigo-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-800",
   "hex": "434190",
   "rgb": {
    "r": 67,
    "g": 65,
    "b": 144,
    "a": 1
   },
   "hsl": {
    "h": 241.51898734177217,
    "s": 0.3779904306220096,
    "l": 0.40980392156862744,
    "a": 1
   },
   "hsv": {
    "h": 241.51898734177217,
    "s": 0.5486111111111112,
    "v": 0.5647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-800"
  ]
 },
 {
  "value": "#3c366b",
  "shade": "indigo",
  "original": {
   "value": "#3c366b",
   "shade": "indigo"
  },
  "name": "color-base-indigo-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "indigo-900",
   "hex": "3c366b",
   "rgb": {
    "r": 60,
    "g": 54,
    "b": 107,
    "a": 1
   },
   "hsl": {
    "h": 246.7924528301887,
    "s": 0.32919254658385094,
    "l": 0.3156862745098039,
    "a": 1
   },
   "hsv": {
    "h": 246.7924528301887,
    "s": 0.4953271028037383,
    "v": 0.4196078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "indigo-900"
  ]
 },
 {
  "value": "#faf5ff",
  "shade": "purple",
  "original": {
   "value": "#faf5ff",
   "shade": "purple"
  },
  "name": "color-base-purple-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-100",
   "hex": "faf5ff",
   "rgb": {
    "r": 250,
    "g": 245,
    "b": 255,
    "a": 1
   },
   "hsl": {
    "h": 269.9999999999999,
    "s": 1,
    "l": 0.9803921568627452,
    "a": 1
   },
   "hsv": {
    "h": 269.9999999999999,
    "s": 0.039215686274509776,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-100"
  ]
 },
 {
  "value": "#e9d8fd",
  "shade": "purple",
  "original": {
   "value": "#e9d8fd",
   "shade": "purple"
  },
  "name": "color-base-purple-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-200",
   "hex": "e9d8fd",
   "rgb": {
    "r": 233,
    "g": 216,
    "b": 253,
    "a": 1
   },
   "hsl": {
    "h": 267.5675675675676,
    "s": 0.9024390243902443,
    "l": 0.919607843137255,
    "a": 1
   },
   "hsv": {
    "h": 267.5675675675676,
    "s": 0.1462450592885376,
    "v": 0.9921568627450981,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-200"
  ]
 },
 {
  "value": "#d6bcfa",
  "shade": "purple",
  "original": {
   "value": "#d6bcfa",
   "shade": "purple"
  },
  "name": "color-base-purple-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-300",
   "hex": "d6bcfa",
   "rgb": {
    "r": 214,
    "g": 188,
    "b": 250,
    "a": 1
   },
   "hsl": {
    "h": 265.1612903225806,
    "s": 0.8611111111111112,
    "l": 0.8588235294117648,
    "a": 1
   },
   "hsv": {
    "h": 265.1612903225806,
    "s": 0.24799999999999991,
    "v": 0.9803921568627451,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-300"
  ]
 },
 {
  "value": "#b794f4",
  "shade": "purple",
  "original": {
   "value": "#b794f4",
   "shade": "purple"
  },
  "name": "color-base-purple-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-400",
   "hex": "b794f4",
   "rgb": {
    "r": 183,
    "g": 148,
    "b": 244,
    "a": 1
   },
   "hsl": {
    "h": 261.87499999999994,
    "s": 0.8135593220338987,
    "l": 0.7686274509803922,
    "a": 1
   },
   "hsv": {
    "h": 261.87499999999994,
    "s": 0.39344262295081966,
    "v": 0.9568627450980393,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-400"
  ]
 },
 {
  "value": "#9f7aea",
  "shade": "purple",
  "original": {
   "value": "#9f7aea",
   "shade": "purple"
  },
  "name": "color-base-purple-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-500",
   "hex": "9f7aea",
   "rgb": {
    "r": 159,
    "g": 122,
    "b": 234,
    "a": 1
   },
   "hsl": {
    "h": 259.8214285714286,
    "s": 0.7272727272727271,
    "l": 0.6980392156862745,
    "a": 1
   },
   "hsv": {
    "h": 259.8214285714286,
    "s": 0.4786324786324786,
    "v": 0.9176470588235294,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-500"
  ]
 },
 {
  "value": "#805ad5",
  "shade": "purple",
  "original": {
   "value": "#805ad5",
   "shade": "purple"
  },
  "name": "color-base-purple-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-600",
   "hex": "805ad5",
   "rgb": {
    "r": 128,
    "g": 90,
    "b": 213,
    "a": 1
   },
   "hsl": {
    "h": 258.5365853658536,
    "s": 0.5942028985507248,
    "l": 0.5941176470588235,
    "a": 1
   },
   "hsv": {
    "h": 258.5365853658536,
    "s": 0.5774647887323944,
    "v": 0.8352941176470589,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-600"
  ]
 },
 {
  "value": "#6b46c1",
  "shade": "purple",
  "original": {
   "value": "#6b46c1",
   "shade": "purple"
  },
  "name": "color-base-purple-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-700",
   "hex": "6b46c1",
   "rgb": {
    "r": 107,
    "g": 70,
    "b": 193,
    "a": 1
   },
   "hsl": {
    "h": 258.0487804878049,
    "s": 0.4979757085020242,
    "l": 0.5156862745098039,
    "a": 1
   },
   "hsv": {
    "h": 258.0487804878049,
    "s": 0.6373056994818652,
    "v": 0.7568627450980392,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-700"
  ]
 },
 {
  "value": "#553c9a",
  "shade": "purple",
  "original": {
   "value": "#553c9a",
   "shade": "purple"
  },
  "name": "color-base-purple-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-800",
   "hex": "553c9a",
   "rgb": {
    "r": 85,
    "g": 60,
    "b": 154,
    "a": 1
   },
   "hsl": {
    "h": 255.95744680851064,
    "s": 0.4392523364485981,
    "l": 0.41960784313725485,
    "a": 1
   },
   "hsv": {
    "h": 255.95744680851064,
    "s": 0.6103896103896104,
    "v": 0.6039215686274509,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-800"
  ]
 },
 {
  "value": "#44337a",
  "shade": "purple",
  "original": {
   "value": "#44337a",
   "shade": "purple"
  },
  "name": "color-base-purple-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "purple-900",
   "hex": "44337a",
   "rgb": {
    "r": 68,
    "g": 51,
    "b": 122,
    "a": 1
   },
   "hsl": {
    "h": 254.3661971830986,
    "s": 0.41040462427745666,
    "l": 0.3392156862745098,
    "a": 1
   },
   "hsv": {
    "h": 254.3661971830986,
    "s": 0.5819672131147541,
    "v": 0.47843137254901963,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "purple-900"
  ]
 },
 {
  "value": "#fff5f7",
  "shade": "pink",
  "original": {
   "value": "#fff5f7",
   "shade": "pink"
  },
  "name": "color-base-pink-100",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-100",
   "hex": "fff5f7",
   "rgb": {
    "r": 255,
    "g": 245,
    "b": 247,
    "a": 1
   },
   "hsl": {
    "h": 348.00000000000006,
    "s": 1,
    "l": 0.9803921568627452,
    "a": 1
   },
   "hsv": {
    "h": 348.00000000000006,
    "s": 0.039215686274509776,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-100"
  ]
 },
 {
  "value": "#fed7e2",
  "shade": "pink",
  "original": {
   "value": "#fed7e2",
   "shade": "pink"
  },
  "name": "color-base-pink-200",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-200",
   "hex": "fed7e2",
   "rgb": {
    "r": 254,
    "g": 215,
    "b": 226,
    "a": 1
   },
   "hsl": {
    "h": 343.0769230769231,
    "s": 0.9512195121951221,
    "l": 0.919607843137255,
    "a": 1
   },
   "hsv": {
    "h": 343.0769230769231,
    "s": 0.15354330708661418,
    "v": 0.996078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-200"
  ]
 },
 {
  "value": "#fbb6ce",
  "shade": "pink",
  "original": {
   "value": "#fbb6ce",
   "shade": "pink"
  },
  "name": "color-base-pink-300",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-300",
   "hex": "fbb6ce",
   "rgb": {
    "r": 251,
    "g": 182,
    "b": 206,
    "a": 1
   },
   "hsl": {
    "h": 339.13043478260875,
    "s": 0.8961038961038961,
    "l": 0.8490196078431372,
    "a": 1
   },
   "hsv": {
    "h": 339.13043478260875,
    "s": 0.2749003984063744,
    "v": 0.984313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-300"
  ]
 },
 {
  "value": "#f687b3",
  "shade": "pink",
  "original": {
   "value": "#f687b3",
   "shade": "pink"
  },
  "name": "color-base-pink-400",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-400",
   "hex": "f687b3",
   "rgb": {
    "r": 246,
    "g": 135,
    "b": 179,
    "a": 1
   },
   "hsl": {
    "h": 336.21621621621625,
    "s": 0.86046511627907,
    "l": 0.7470588235294118,
    "a": 1
   },
   "hsv": {
    "h": 336.21621621621625,
    "s": 0.45121951219512196,
    "v": 0.9647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-400"
  ]
 },
 {
  "value": "#ed64a6",
  "shade": "pink",
  "original": {
   "value": "#ed64a6",
   "shade": "pink"
  },
  "name": "color-base-pink-500",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-500",
   "hex": "ed64a6",
   "rgb": {
    "r": 237,
    "g": 100,
    "b": 166,
    "a": 1
   },
   "hsl": {
    "h": 331.0948905109489,
    "s": 0.7919075144508672,
    "l": 0.6607843137254902,
    "a": 1
   },
   "hsv": {
    "h": 331.0948905109489,
    "s": 0.5780590717299579,
    "v": 0.9294117647058824,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-500"
  ]
 },
 {
  "value": "#d53f8c",
  "shade": "pink",
  "original": {
   "value": "#d53f8c",
   "shade": "pink"
  },
  "name": "color-base-pink-600",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-600",
   "hex": "d53f8c",
   "rgb": {
    "r": 213,
    "g": 63,
    "b": 140,
    "a": 1
   },
   "hsl": {
    "h": 329.2,
    "s": 0.6410256410256412,
    "l": 0.5411764705882354,
    "a": 1
   },
   "hsv": {
    "h": 329.2,
    "s": 0.704225352112676,
    "v": 0.8352941176470589,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-600"
  ]
 },
 {
  "value": "#b83280",
  "shade": "pink",
  "original": {
   "value": "#b83280",
   "shade": "pink"
  },
  "name": "color-base-pink-700",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-700",
   "hex": "b83280",
   "rgb": {
    "r": 184,
    "g": 50,
    "b": 128,
    "a": 1
   },
   "hsl": {
    "h": 325.0746268656717,
    "s": 0.5726495726495727,
    "l": 0.4588235294117647,
    "a": 1
   },
   "hsv": {
    "h": 325.0746268656717,
    "s": 0.7282608695652174,
    "v": 0.7215686274509804,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-700"
  ]
 },
 {
  "value": "#97266d",
  "shade": "pink",
  "original": {
   "value": "#97266d",
   "shade": "pink"
  },
  "name": "color-base-pink-800",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-800",
   "hex": "97266d",
   "rgb": {
    "r": 151,
    "g": 38,
    "b": 109,
    "a": 1
   },
   "hsl": {
    "h": 322.3008849557522,
    "s": 0.5978835978835978,
    "l": 0.37058823529411766,
    "a": 1
   },
   "hsv": {
    "h": 322.3008849557522,
    "s": 0.7483443708609271,
    "v": 0.592156862745098,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-800"
  ]
 },
 {
  "value": "#702459",
  "shade": "pink",
  "original": {
   "value": "#702459",
   "shade": "pink"
  },
  "name": "color-base-pink-900",
  "attributes": {
   "category": "color",
   "type": "base",
   "item": "pink-900",
   "hex": "702459",
   "rgb": {
    "r": 112,
    "g": 36,
    "b": 89,
    "a": 1
   },
   "hsl": {
    "h": 318.1578947368421,
    "s": 0.5135135135135136,
    "l": 0.2901960784313725,
    "a": 1
   },
   "hsv": {
    "h": 318.1578947368421,
    "s": 0.6785714285714286,
    "v": 0.4392156862745098,
    "a": 1
   }
  },
  "path": [
   "color",
   "base",
   "pink-900"
  ]
 },
 {
  "value": "#1a202c",
  "original": {
   "value": "#1a202c"
  },
  "name": "color-gray-dark",
  "attributes": {
   "category": "color",
   "type": "grayDark",
   "hex": "1a202c",
   "rgb": {
    "r": 26,
    "g": 32,
    "b": 44,
    "a": 1
   },
   "hsl": {
    "h": 219.99999999999997,
    "s": 0.2571428571428571,
    "l": 0.13725490196078433,
    "a": 1
   },
   "hsv": {
    "h": 219.99999999999997,
    "s": 0.4090909090909091,
    "v": 0.17254901960784313,
    "a": 1
   }
  },
  "path": [
   "color",
   "grayDark"
  ]
 },
 {
  "value": "#1a202c",
  "original": {
   "value": "#1a202c"
  },
  "name": "color-text",
  "attributes": {
   "category": "color",
   "type": "text",
   "hex": "1a202c",
   "rgb": {
    "r": 26,
    "g": 32,
    "b": 44,
    "a": 1
   },
   "hsl": {
    "h": 219.99999999999997,
    "s": 0.2571428571428571,
    "l": 0.13725490196078433,
    "a": 1
   },
   "hsv": {
    "h": 219.99999999999997,
    "s": 0.4090909090909091,
    "v": 0.17254901960784313,
    "a": 1
   }
  },
  "path": [
   "color",
   "text"
  ]
 },
 {
  "value": "#fff",
  "original": {
   "value": "#fff"
  },
  "name": "color-background",
  "attributes": {
   "category": "color",
   "type": "background",
   "hex": "ffffff",
   "rgb": {
    "r": 255,
    "g": 255,
    "b": 255,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0,
    "l": 1,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0,
    "v": 1,
    "a": 1
   }
  },
  "path": [
   "color",
   "background"
  ]
 },
 {
  "value": "#2c5282",
  "original": {
   "value": "#2c5282"
  },
  "name": "color-primary",
  "attributes": {
   "category": "color",
   "type": "primary",
   "hex": "2c5282",
   "rgb": {
    "r": 44,
    "g": 82,
    "b": 130,
    "a": 1
   },
   "hsl": {
    "h": 213.4883720930233,
    "s": 0.49425287356321834,
    "l": 0.3411764705882353,
    "a": 1
   },
   "hsv": {
    "h": 213.4883720930233,
    "s": 0.6615384615384615,
    "v": 0.5098039215686274,
    "a": 1
   }
  },
  "path": [
   "color",
   "primary"
  ]
 },
 {
  "value": "#2a4365",
  "original": {
   "value": "#2a4365"
  },
  "name": "color-primary-hover",
  "attributes": {
   "category": "color",
   "type": "primaryHover",
   "hex": "2a4365",
   "rgb": {
    "r": 42,
    "g": 67,
    "b": 101,
    "a": 1
   },
   "hsl": {
    "h": 214.5762711864407,
    "s": 0.41258741258741255,
    "l": 0.2803921568627451,
    "a": 1
   },
   "hsv": {
    "h": 214.5762711864407,
    "s": 0.5841584158415841,
    "v": 0.396078431372549,
    "a": 1
   }
  },
  "path": [
   "color",
   "primaryHover"
  ]
 },
 {
  "value": "#4a5568",
  "original": {
   "value": "#4a5568"
  },
  "name": "color-secondary",
  "attributes": {
   "category": "color",
   "type": "secondary",
   "hex": "4a5568",
   "rgb": {
    "r": 74,
    "g": 85,
    "b": 104,
    "a": 1
   },
   "hsl": {
    "h": 218.00000000000003,
    "s": 0.1685393258426966,
    "l": 0.34901960784313724,
    "a": 1
   },
   "hsv": {
    "h": 218.00000000000003,
    "s": 0.2884615384615384,
    "v": 0.40784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "secondary"
  ]
 },
 {
  "value": "#cbd5e0",
  "original": {
   "value": "#cbd5e0"
  },
  "name": "color-muted",
  "attributes": {
   "category": "color",
   "type": "muted",
   "hex": "cbd5e0",
   "rgb": {
    "r": 203,
    "g": 213,
    "b": 224,
    "a": 1
   },
   "hsl": {
    "h": 211.42857142857136,
    "s": 0.2530120481927712,
    "l": 0.8372549019607842,
    "a": 1
   },
   "hsv": {
    "h": 211.42857142857136,
    "s": 0.09375000000000004,
    "v": 0.8784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "muted"
  ]
 },
 {
  "value": "#68d391",
  "original": {
   "value": "#68d391"
  },
  "name": "color-success",
  "attributes": {
   "category": "color",
   "type": "success",
   "hex": "68d391",
   "rgb": {
    "r": 104,
    "g": 211,
    "b": 145,
    "a": 1
   },
   "hsl": {
    "h": 142.99065420560748,
    "s": 0.5487179487179487,
    "l": 0.6176470588235294,
    "a": 1
   },
   "hsv": {
    "h": 142.99065420560748,
    "s": 0.5071090047393365,
    "v": 0.8274509803921568,
    "a": 1
   }
  },
  "path": [
   "color",
   "success"
  ]
 },
 {
  "value": "#4299e1",
  "original": {
   "value": "#4299e1"
  },
  "name": "color-info",
  "attributes": {
   "category": "color",
   "type": "info",
   "hex": "4299e1",
   "rgb": {
    "r": 66,
    "g": 153,
    "b": 225,
    "a": 1
   },
   "hsl": {
    "h": 207.16981132075472,
    "s": 0.7260273972602739,
    "l": 0.5705882352941176,
    "a": 1
   },
   "hsv": {
    "h": 207.16981132075472,
    "s": 0.7066666666666667,
    "v": 0.8823529411764706,
    "a": 1
   }
  },
  "path": [
   "color",
   "info"
  ]
 },
 {
  "value": "#f6e05e",
  "original": {
   "value": "#f6e05e"
  },
  "name": "color-warning",
  "attributes": {
   "category": "color",
   "type": "warning",
   "hex": "f6e05e",
   "rgb": {
    "r": 246,
    "g": 224,
    "b": 94,
    "a": 1
   },
   "hsl": {
    "h": 51.31578947368421,
    "s": 0.8941176470588237,
    "l": 0.6666666666666667,
    "a": 1
   },
   "hsv": {
    "h": 51.31578947368421,
    "s": 0.6178861788617886,
    "v": 0.9647058823529412,
    "a": 1
   }
  },
  "path": [
   "color",
   "warning"
  ]
 },
 {
  "value": "#fc8181",
  "original": {
   "value": "#fc8181"
  },
  "name": "color-danger",
  "attributes": {
   "category": "color",
   "type": "danger",
   "hex": "fc8181",
   "rgb": {
    "r": 252,
    "g": 129,
    "b": 129,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.9534883720930234,
    "l": 0.7470588235294118,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.48809523809523814,
    "v": 0.9882352941176471,
    "a": 1
   }
  },
  "path": [
   "color",
   "danger"
  ]
 },
 {
  "value": "#edf2f7",
  "original": {
   "value": "#edf2f7"
  },
  "name": "color-light",
  "attributes": {
   "category": "color",
   "type": "light",
   "hex": "edf2f7",
   "rgb": {
    "r": 237,
    "g": 242,
    "b": 247,
    "a": 1
   },
   "hsl": {
    "h": 210.00000000000009,
    "s": 0.38461538461538486,
    "l": 0.9490196078431372,
    "a": 1
   },
   "hsv": {
    "h": 210.00000000000009,
    "s": 0.04048582995951414,
    "v": 0.9686274509803922,
    "a": 1
   }
  },
  "path": [
   "color",
   "light"
  ]
 },
 {
  "value": "#1a202c",
  "original": {
   "value": "#1a202c"
  },
  "name": "color-dark",
  "attributes": {
   "category": "color",
   "type": "dark",
   "hex": "1a202c",
   "rgb": {
    "r": 26,
    "g": 32,
    "b": 44,
    "a": 1
   },
   "hsl": {
    "h": 219.99999999999997,
    "s": 0.2571428571428571,
    "l": 0.13725490196078433,
    "a": 1
   },
   "hsv": {
    "h": 219.99999999999997,
    "s": 0.4090909090909091,
    "v": 0.17254901960784313,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark"
  ]
 },
 {
  "value": "#4a5568",
  "original": {
   "value": "#4a5568"
  },
  "name": "color-text-muted",
  "attributes": {
   "category": "color",
   "type": "textMuted",
   "hex": "4a5568",
   "rgb": {
    "r": 74,
    "g": 85,
    "b": 104,
    "a": 1
   },
   "hsl": {
    "h": 218.00000000000003,
    "s": 0.1685393258426966,
    "l": 0.34901960784313724,
    "a": 1
   },
   "hsv": {
    "h": 218.00000000000003,
    "s": 0.2884615384615384,
    "v": 0.40784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "textMuted"
  ]
 },
 {
  "value": "#edf2f7",
  "original": {
   "value": "#edf2f7"
  },
  "name": "color-dark-text",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "text",
   "hex": "edf2f7",
   "rgb": {
    "r": 237,
    "g": 242,
    "b": 247,
    "a": 1
   },
   "hsl": {
    "h": 210.00000000000009,
    "s": 0.38461538461538486,
    "l": 0.9490196078431372,
    "a": 1
   },
   "hsv": {
    "h": 210.00000000000009,
    "s": 0.04048582995951414,
    "v": 0.9686274509803922,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "text"
  ]
 },
 {
  "value": "#000",
  "original": {
   "value": "#000"
  },
  "name": "color-dark-background",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "background",
   "hex": "000000",
   "rgb": {
    "r": 0,
    "g": 0,
    "b": 0,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0,
    "l": 0,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0,
    "v": 0,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "background"
  ]
 },
 {
  "value": "#90cdf4",
  "original": {
   "value": "#90cdf4"
  },
  "name": "color-dark-primary",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "primary",
   "hex": "90cdf4",
   "rgb": {
    "r": 144,
    "g": 205,
    "b": 244,
    "a": 1
   },
   "hsl": {
    "h": 203.40000000000003,
    "s": 0.8196721311475413,
    "l": 0.7607843137254902,
    "a": 1
   },
   "hsv": {
    "h": 203.40000000000003,
    "s": 0.4098360655737705,
    "v": 0.9568627450980393,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "primary"
  ]
 },
 {
  "value": "#bee3f8",
  "original": {
   "value": "#bee3f8"
  },
  "name": "color-dark-primary-hover",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "primaryHover",
   "hex": "bee3f8",
   "rgb": {
    "r": 190,
    "g": 227,
    "b": 248,
    "a": 1
   },
   "hsl": {
    "h": 201.7241379310345,
    "s": 0.8055555555555558,
    "l": 0.8588235294117648,
    "a": 1
   },
   "hsv": {
    "h": 201.7241379310345,
    "s": 0.23387096774193544,
    "v": 0.9725490196078431,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "primaryHover"
  ]
 },
 {
  "value": "#cbd5e0",
  "original": {
   "value": "#cbd5e0"
  },
  "name": "color-dark-secondary",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "secondary",
   "hex": "cbd5e0",
   "rgb": {
    "r": 203,
    "g": 213,
    "b": 224,
    "a": 1
   },
   "hsl": {
    "h": 211.42857142857136,
    "s": 0.2530120481927712,
    "l": 0.8372549019607842,
    "a": 1
   },
   "hsv": {
    "h": 211.42857142857136,
    "s": 0.09375000000000004,
    "v": 0.8784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "secondary"
  ]
 },
 {
  "value": "#4a5568",
  "original": {
   "value": "#4a5568"
  },
  "name": "color-dark-muted",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "muted",
   "hex": "4a5568",
   "rgb": {
    "r": 74,
    "g": 85,
    "b": 104,
    "a": 1
   },
   "hsl": {
    "h": 218.00000000000003,
    "s": 0.1685393258426966,
    "l": 0.34901960784313724,
    "a": 1
   },
   "hsv": {
    "h": 218.00000000000003,
    "s": 0.2884615384615384,
    "v": 0.40784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "muted"
  ]
 },
 {
  "value": "#2f855a",
  "original": {
   "value": "#2f855a"
  },
  "name": "color-dark-success",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "success",
   "hex": "2f855a",
   "rgb": {
    "r": 47,
    "g": 133,
    "b": 90,
    "a": 1
   },
   "hsl": {
    "h": 150,
    "s": 0.4777777777777778,
    "l": 0.35294117647058826,
    "a": 1
   },
   "hsv": {
    "h": 150,
    "s": 0.6466165413533834,
    "v": 0.5215686274509804,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "success"
  ]
 },
 {
  "value": "#3182ce",
  "original": {
   "value": "#3182ce"
  },
  "name": "color-dark-info",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "info",
   "hex": "3182ce",
   "rgb": {
    "r": 49,
    "g": 130,
    "b": 206,
    "a": 1
   },
   "hsl": {
    "h": 209.04458598726114,
    "s": 0.615686274509804,
    "l": 0.5,
    "a": 1
   },
   "hsv": {
    "h": 209.04458598726114,
    "s": 0.7621359223300971,
    "v": 0.807843137254902,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "info"
  ]
 },
 {
  "value": "#b7791f",
  "original": {
   "value": "#b7791f"
  },
  "name": "color-dark-warning",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "warning",
   "hex": "b7791f",
   "rgb": {
    "r": 183,
    "g": 121,
    "b": 31,
    "a": 1
   },
   "hsl": {
    "h": 35.52631578947368,
    "s": 0.7102803738317757,
    "l": 0.4196078431372549,
    "a": 1
   },
   "hsv": {
    "h": 35.52631578947368,
    "s": 0.8306010928961749,
    "v": 0.7176470588235294,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "warning"
  ]
 },
 {
  "value": "#c53030",
  "original": {
   "value": "#c53030"
  },
  "name": "color-dark-danger",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "danger",
   "hex": "c53030",
   "rgb": {
    "r": 197,
    "g": 48,
    "b": 48,
    "a": 1
   },
   "hsl": {
    "h": 0,
    "s": 0.6081632653061224,
    "l": 0.4803921568627451,
    "a": 1
   },
   "hsv": {
    "h": 0,
    "s": 0.7563451776649747,
    "v": 0.7725490196078432,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "danger"
  ]
 },
 {
  "value": "#cbd5e0",
  "original": {
   "value": "#cbd5e0"
  },
  "name": "color-dark-text-muted",
  "attributes": {
   "category": "color",
   "mode": "dark",
   "type": "textMuted",
   "hex": "cbd5e0",
   "rgb": {
    "r": 203,
    "g": 213,
    "b": 224,
    "a": 1
   },
   "hsl": {
    "h": 211.42857142857136,
    "s": 0.2530120481927712,
    "l": 0.8372549019607842,
    "a": 1
   },
   "hsv": {
    "h": 211.42857142857136,
    "s": 0.09375000000000004,
    "v": 0.8784313725490196,
    "a": 1
   }
  },
  "path": [
   "color",
   "dark",
   "textMuted"
  ]
 }
];

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const { LitElement,property,html,css } = litElement;class PaletteSwatch extends LitElement {
    static get styles() {
        return css `
      .card {
        display: grid;
        padding: 4px;
        width: 100px;
      }
      .sample {
        box-shadow: 2px 2px 8px lightgray;
        border-radius: 4px;
        height: 100px;
      }
      .legend {
        font-size: smaller;
        margin: 8px;
      }
    `;
    }
    get colorsByShades() {
        const result = this.colors.reduce((a, c) => {
            const shade = c.shade || "none";
            const currentShade = a[shade];
            if (!currentShade)
                a[shade] = [];
            a[shade].push(c);
            return a;
        }, {});
        return result;
    }
    renderColor(color) {
        return html `<div class="card">
      <div class="sample" style="background-color:${color.value}"></div>
      <span class="legend">${color.name}</span>
    </div>`;
    }
    renderShade(shade) {
        return html `
      <div style="display:flex;">
        ${shade.map(this.renderColor.bind(this))}
      </div>
    `;
    }
    render() {
        return html `
      ${Object.entries(this.colorsByShades).map(([k, v]) => this.renderShade(v))}
    `;
    }
}
__decorate([
    property(),
    __metadata("design:type", Array)
], PaletteSwatch.prototype, "colors", void 0);

const sheet = new CSSStyleSheet();
sheet.replaceSync(".sample {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  border-radius: 4px;\n  min-height: 150px;\n  box-shadow: 2px 2px 8px lightgray; }\n\n.accessibilityLevels {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  align-items: baseline;\n  grid-gap: 8px; }\n\n.passed {\n  border-bottom: 2px solid limegreen; }\n\n.failed {\n  border-bottom: 2px solid tomato; }\n");

const { html: html$1 } = litHtml;const { tinycolor } = index$2;class ColorSwatch extends BaseSwatch {
    static get styles() {
        return [BaseSwatch.styles, { styleSheet: sheet, cssText: sheet.text }];
    }
    renderAttributes(token) {
        const color = tinycolor(token.value);
        return html$1 `
      ${[
            color.toHexString(),
            color.toHslString(),
            color.toRgbString(),
            color.toHsvString(),
        ].map((a) => html$1 `<pre><code>${a}</code></pre>`)}
    `;
    }
    getReadability(fore, back, size) {
        if (tinycolor.isReadable(fore, back, { level: "AAA", size }))
            return "AAA";
        if (tinycolor.isReadable(fore, back, { level: "AA", size }))
            return "AA";
        return "";
    }
    renderAccessibilityOn(fore, back) {
        const contrast = tinycolor.readability(fore, back);
        const largeReadability = this.getReadability(fore, back, "large");
        const smallReadbility = this.getReadability(fore, back, "small");
        return html$1 ` <div
        style="font-size:large;color:${fore};"
        class="${largeReadability ? "passed" : "failed"}"
      >
        ${largeReadability || contrast.toFixed(2)}
      </div>
      <div
        style="font-size:smaller;color:${fore};padding-bottom:2px"
        class="${smallReadbility ? "passed" : "failed"}"
      >
        ${smallReadbility || contrast.toFixed(2)}
      </div>`;
    }
    renderSample(token, minWidth) {
        const color = tinycolor(token.value);
        const mostReadableColor = tinycolor.mostReadable(color, ["#000", "#fff"]);
        return html$1 ` <div
      class="sample"
      style="color:${mostReadableColor.toHexString()};background-color:${token.value}"
    >
      <div class="accessibilityLevels">
        ${this.renderAccessibilityOn("white", token.value)}
        ${this.renderAccessibilityOn("black", token.value)}
      </div>
    </div>`;
    }
}

const { html: html$2 } = litHtml;customElements.define("color-swatch", ColorSwatch);
customElements.define("color-palette", PaletteSwatch);
    
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
    const defaultScheme = () =>
  html$2`<color-swatch
    .tokens=${colors.filter((c) => c.attributes.type !== "base")}
  ></color-swatch> `;
const palette = () =>
  html$2`<br /><details
      ><summary style="font-size:larger">Palette</summary
      ><color-palette
        .colors=${colors.filter((c) => c.attributes.type === "base")}
      ></color-palette
    ></details>`;
    const rootNode = document;
    const stories = [{ key: 'defaultScheme', story: defaultScheme, code: defaultScheme }, { key: 'palette', story: palette, code: palette }];
    for (const story of stories) {
      // eslint-disable-next-line no-template-curly-in-string
      const storyEl = rootNode.querySelector(`[mdjs-story-name="${story.key}"]`);
      storyEl.story = story.story;
      storyEl.code = story.code;
    }

export { defaultScheme, palette };
