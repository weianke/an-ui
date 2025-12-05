import { defineComponent as z, useSlots as A, ref as S, inject as w, computed as a, createBlock as B, openBlock as r, resolveDynamicComponent as D, unref as N, normalizeClass as R, withCtx as E, renderSlot as p, createCommentVNode as g, createVNode as O, normalizeStyle as h, provide as U, reactive as V, toRef as d, createElementBlock as j } from "vue";
import { _ as k, w as x } from "./utils-BuqXhZTU.js";
import { I as C } from "./Icon-BSaiB2Wd.js";
import { t as K } from "./vendor-pdHaCqlf.js";
const T = Symbol("buttonGroupContext"), P = /* @__PURE__ */ z({
  name: "AnButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    nativeType: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    icon: {},
    circle: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean },
    loadingIcon: {},
    autofocus: { type: Boolean },
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(t, { expose: o, emit: l }) {
    const e = t, G = l, I = A(), m = S(), i = w(T, void 0), s = a(() => i?.size ?? e.size ?? ""), u = a(() => i?.type ?? e.type ?? ""), c = a(
      () => e.disabled || i?.disabled || !1
    ), y = (n) => G("click", n), $ = K(y, e.throttleDuration), f = a(() => ({
      marginRight: I.default ? "6px" : "0px"
    }));
    return o({
      ref: m,
      disabled: c,
      size: s,
      type: u
    }), (n, b) => (r(), B(D(t.tag), {
      ref: m.value,
      class: R(["er-button", {
        [`er-button--${u.value}`]: u.value,
        [`er-button--${s.value}`]: s.value,
        "is-plain": t.plain,
        "is-round": t.round,
        "is-circle": t.circle,
        "is-disabled": c.value,
        "is-loading": t.loading
      }]),
      type: t.tag === "button" ? e.nativeType : void 0,
      disabled: c.value || t.loading ? !0 : void 0,
      autofocus: t.autofocus,
      onClick: b[0] || (b[0] = (v) => t.useThrottle ? N($)(v) : y(v))
    }, {
      default: E(() => [
        t.loading ? p(n.$slots, "loading", { key: 0 }, () => [
          O(C, {
            class: "loading-icon",
            icon: t.loadingIcon ?? "spinner",
            style: h(f.value),
            size: "1x",
            spin: ""
          }, null, 8, ["icon", "style"])
        ], !0) : g("", !0),
        t.icon && !t.loading ? (r(), B(C, {
          key: 1,
          icon: t.icon,
          size: "1x",
          style: h(f.value)
        }, null, 8, ["icon", "style"])) : g("", !0),
        p(n.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["type", "disabled", "class", "autofocus"]));
  }
}), X = /* @__PURE__ */ k(P, [["__scopeId", "data-v-a8884cac"]]), Y = { class: "er-button-group" }, q = /* @__PURE__ */ z({
  name: "AnButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(t) {
    const o = t;
    return U(
      T,
      V({
        size: d(o, "size"),
        type: d(o, "type"),
        disabled: d(o, "disabled")
      })
    ), (l, e) => (r(), j("div", Y, [
      p(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), F = /* @__PURE__ */ k(q, [["__scopeId", "data-v-0c04bbc3"]]), Q = x(X), W = x(F);
export {
  Q as A,
  W as a
};
