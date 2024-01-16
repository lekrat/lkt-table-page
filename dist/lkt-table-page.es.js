import { defineComponent as R, useSlots as $, ref as c, computed as y, resolveComponent as k, openBlock as l, createElementBlock as n, unref as d, toDisplayString as b, createCommentVNode as o, renderSlot as m, createBlock as h, createSlots as x, renderList as B, withCtx as A, createVNode as O, nextTick as U } from "vue";
import j from "lkt-table";
import D from "lkt-paginator";
const E = { class: "lkt-table-page" }, K = { key: 0 }, q = { key: 0 }, z = {
  key: 1,
  class: "lkt-table-page-buttons"
}, F = {
  key: 2,
  class: "lkt-table-page-filters"
}, G = {
  key: 5,
  class: "lkt-table-page-empty"
}, H = { name: "LktTablePage", inheritAttrs: !1 }, I = /* @__PURE__ */ R({
  ...H,
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const u = $(), v = e, g = c(v.page), r = c([]), S = c(!0), i = c(!0), p = c(!1), V = y(() => v.columns.map((t) => t.key)), _ = y(() => {
      S.value;
      let t = [];
      for (let s in u)
        V.value.indexOf(s) !== -1 && t.push(s);
      return t;
    }), L = (t) => {
      r.value = t, i.value = !1, p.value = !0;
    }, T = () => U(() => i.value = !0);
    return (t, s) => {
      const P = k("lkt-loader"), C = k("lkt-table"), N = k("lkt-paginator");
      return l(), n("section", E, [
        e.title || d(u).title ? (l(), n("header", K, [
          e.title ? (l(), n("h2", q, b(e.title), 1)) : o("", !0),
          d(u).title ? m(t.$slots, "title", { key: 1 }) : o("", !0)
        ])) : o("", !0),
        d(u).buttons ? (l(), n("div", z, [
          m(t.$slots, "buttons")
        ])) : o("", !0),
        p.value && d(u).filters ? (l(), n("div", F, [
          m(t.$slots, "filters")
        ])) : o("", !0),
        i.value ? (l(), h(P, { key: 3 })) : o("", !0),
        !i.value && r.value.length > 0 ? (l(), h(C, {
          key: 4,
          modelValue: r.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => r.value = a),
          columns: e.columns
        }, x({ _: 2 }, [
          B(_.value, (a) => ({
            name: a,
            fn: A((f) => [
              m(t.$slots, a, {
                item: f.item,
                value: f.value,
                column: f.column
              })
            ])
          }))
        ]), 1032, ["modelValue", "columns"])) : o("", !0),
        !i.value && r.value.length === 0 ? (l(), n("div", G, b(e.noResultsText), 1)) : o("", !0),
        O(N, {
          modelValue: g.value,
          "onUpdate:modelValue": s[1] || (s[1] = (a) => g.value = a),
          resource: e.resource,
          filters: e.filters,
          onResults: L,
          onLoading: T
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
});
const W = {
  install: (e) => {
    e.component("lkt-table-page") === void 0 && e.component("lkt-table-page", I), e.component("lkt-table") === void 0 && e.use(j), e.component("lkt-paginator") === void 0 && e.use(D);
  }
};
export {
  W as default
};
