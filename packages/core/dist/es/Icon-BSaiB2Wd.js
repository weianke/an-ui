import { _ as l, w as p } from "./utils-BuqXhZTU.js";
import { defineComponent as r, computed as t, createElementBlock as c, openBlock as i, mergeProps as m, createVNode as y, unref as B, normalizeProps as f, guardReactiveProps as u } from "vue";
import { FontAwesomeIcon as d } from "@fortawesome/vue-fontawesome";
import { o as I } from "./vendor-pdHaCqlf.js";
const v = /* @__PURE__ */ r({
  name: "AnIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(e) {
    const o = e, n = t(() => I(o, ["type", "color"])), a = t(() => ({ color: o.color ?? void 0 }));
    return (s, b) => (i(), c("i", m({
      class: ["er-icon", { [`er-icon--${e.type}`]: e.type }],
      style: a.value
    }, s.$attrs), [
      y(B(d), f(u(n.value)), null, 16)
    ], 16));
  }
}), _ = /* @__PURE__ */ l(v, [["__scopeId", "data-v-fe6c0d0f"]]), w = p(_);
export {
  w as A,
  _ as I
};
