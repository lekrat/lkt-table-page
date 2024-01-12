import { defineComponent as T, useSlots as x, ref as u, computed as v, resolveComponent as d, openBlock as n, createElementBlock as r, unref as g, toDisplayString as B, createCommentVNode as a, renderSlot as p, createBlock as b, createSlots as N, renderList as A, withCtx as O, createVNode as U, nextTick as $ } from "vue";
import j from "lkt-table";
import D from "lkt-paginator";
const E = { class: "lkt-table-page" }, K = { key: 0 }, R = { key: 0 }, q = {
  key: 1,
  class: "lkt-field-table__buttons"
}, z = { name: "LktTablePage", inheritAttrs: !1 }, F = /* @__PURE__ */ T({
  ...z,
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    title: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const i = x(), f = e, k = u(f.page), c = u([]), y = u(!0), s = u(!0), _ = v(() => f.columns.map((t) => t.key)), V = v(() => {
      y.value;
      let t = [];
      for (let l in i)
        _.value.indexOf(l) !== -1 && t.push(l);
      return t;
    }), h = (t) => {
      c.value = t, s.value = !1;
    }, S = () => $(() => s.value = !0);
    return (t, l) => {
      const L = d("lkt-loader"), P = d("lkt-table"), C = d("lkt-paginator");
      return n(), r("section", E, [
        e.title || g(i).buttons ? (n(), r("header", K, [
          e.title ? (n(), r("h2", R, B(e.title), 1)) : a("", !0),
          g(i).buttons ? (n(), r("div", q, [
            p(t.$slots, "buttons")
          ])) : a("", !0)
        ])) : a("", !0),
        s.value ? (n(), b(L, { key: 1 })) : a("", !0),
        s.value ? a("", !0) : (n(), b(P, {
          key: 2,
          modelValue: c.value,
          "onUpdate:modelValue": l[0] || (l[0] = (o) => c.value = o),
          columns: e.columns
        }, N({ _: 2 }, [
          A(V.value, (o) => ({
            name: o,
            fn: O((m) => [
              p(t.$slots, o, {
                item: m.item,
                value: m.value,
                column: m.column
              })
            ])
          }))
        ]), 1032, ["modelValue", "columns"])),
        U(C, {
          modelValue: k.value,
          "onUpdate:modelValue": l[1] || (l[1] = (o) => k.value = o),
          resource: e.resource,
          filters: e.filters,
          onResults: h,
          onLoading: S
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
});
const J = {
  install: (e) => {
    e.component("lkt-table-page") === void 0 && e.component("lkt-table-page", F), e.component("lkt-table") === void 0 && e.use(j), e.component("lkt-paginator") === void 0 && e.use(D);
  }
};
export {
  J as default
};
