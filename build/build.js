import { defineComponent as P, useSlots as R, ref as c, computed as g, resolveComponent as k, openBlock as l, createElementBlock as n, unref as d, toDisplayString as b, createCommentVNode as o, renderSlot as m, createBlock as h, createSlots as $, renderList as x, withCtx as B, createVNode as O, nextTick as U } from "vue";
const j = { class: "lkt-table-page" }, D = { key: 0 }, E = { key: 0 }, K = {
  key: 1,
  class: "lkt-table-page-buttons"
}, q = {
  key: 2,
  class: "lkt-table-page-filters"
}, z = {
  key: 5,
  class: "lkt-table-page-empty"
}, F = { name: "LktTablePage", inheritAttrs: !1 }, G = /* @__PURE__ */ P({
  ...F,
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) }
  },
  setup(t) {
    const u = R(), p = t, v = c(p.page), r = c([]), S = c(!0), i = c(!0), y = c(!1), V = g(() => p.columns.map((e) => e.key)), _ = g(() => {
      S.value;
      let e = [];
      for (let s in u)
        V.value.indexOf(s) !== -1 && e.push(s);
      return e;
    }), C = (e) => {
      Array.isArray(e) && (r.value = e), i.value = !1, y.value = !0;
    }, L = () => U(() => i.value = !0);
    return (e, s) => {
      const T = k("lkt-loader"), A = k("lkt-table"), N = k("lkt-paginator");
      return l(), n("section", j, [
        t.title || d(u).title ? (l(), n("header", D, [
          t.title ? (l(), n("h2", E, b(t.title), 1)) : o("", !0),
          d(u).title ? m(e.$slots, "title", { key: 1 }) : o("", !0)
        ])) : o("", !0),
        d(u).buttons ? (l(), n("div", K, [
          m(e.$slots, "buttons")
        ])) : o("", !0),
        y.value && d(u).filters ? (l(), n("div", q, [
          m(e.$slots, "filters")
        ])) : o("", !0),
        i.value ? (l(), h(T, { key: 3 })) : o("", !0),
        !i.value && r.value.length > 0 ? (l(), h(A, {
          key: 4,
          modelValue: r.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => r.value = a),
          columns: t.columns
        }, $({ _: 2 }, [
          x(_.value, (a) => ({
            name: a,
            fn: B((f) => [
              m(e.$slots, a, {
                item: f.item,
                value: f.value,
                column: f.column
              })
            ])
          }))
        ]), 1032, ["modelValue", "columns"])) : o("", !0),
        !i.value && r.value.length === 0 ? (l(), n("div", z, b(t.noResultsText), 1)) : o("", !0),
        O(N, {
          modelValue: v.value,
          "onUpdate:modelValue": s[1] || (s[1] = (a) => v.value = a),
          resource: t.resource,
          filters: t.filters,
          onResults: C,
          onLoading: L
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), I = {
  install: (t) => {
    t.component("lkt-table-page") === void 0 && t.component("lkt-table-page", G);
  }
};
export {
  I as default
};
