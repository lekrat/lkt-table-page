import { defineComponent as $, useSlots as A, ref as n, computed as b, resolveComponent as k, openBlock as l, createElementBlock as u, unref as c, toDisplayString as h, createCommentVNode as o, renderSlot as m, createBlock as S, createSlots as B, renderList as O, withCtx as U, createVNode as j, nextTick as D } from "vue";
const E = { class: "lkt-table-page" }, K = { key: 0 }, q = { key: 0 }, z = {
  key: 1,
  class: "lkt-table-page-buttons"
}, F = {
  key: 2,
  class: "lkt-table-page-filters"
}, G = {
  key: 5,
  class: "lkt-table-page-empty"
}, H = /* @__PURE__ */ $({
  __name: "LktTablePage",
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) }
  },
  setup(t, { expose: V }) {
    const r = A(), p = t, v = n(p.page), i = n([]), R = n(!0), d = n(!0), g = n(!1), y = n(null), _ = b(() => p.columns.map((e) => e.key)), C = b(() => {
      R.value;
      let e = [];
      for (let a in r)
        _.value.indexOf(a) !== -1 && e.push(a);
      return e;
    }), L = (e) => {
      Array.isArray(e) && (i.value = e), d.value = !1, g.value = !0;
    }, T = () => D(() => d.value = !0);
    return V({
      doRefresh: () => {
        y.value.doRefresh();
      }
    }), (e, a) => {
      const x = k("lkt-loader"), N = k("lkt-table"), P = k("lkt-paginator");
      return l(), u("section", E, [
        t.title || c(r).title ? (l(), u("header", K, [
          t.title ? (l(), u("h2", q, h(t.title), 1)) : o("", !0),
          c(r).title ? m(e.$slots, "title", { key: 1 }) : o("", !0)
        ])) : o("", !0),
        c(r).buttons ? (l(), u("div", z, [
          m(e.$slots, "buttons")
        ])) : o("", !0),
        g.value && c(r).filters ? (l(), u("div", F, [
          m(e.$slots, "filters")
        ])) : o("", !0),
        d.value ? (l(), S(x, { key: 3 })) : o("", !0),
        !d.value && i.value.length > 0 ? (l(), S(N, {
          key: 4,
          modelValue: i.value,
          "onUpdate:modelValue": a[0] || (a[0] = (s) => i.value = s),
          columns: t.columns
        }, B({ _: 2 }, [
          O(C.value, (s) => ({
            name: s,
            fn: U((f) => [
              m(e.$slots, s, {
                item: f.item,
                value: f.value,
                column: f.column
              })
            ])
          }))
        ]), 1032, ["modelValue", "columns"])) : o("", !0),
        !d.value && i.value.length === 0 ? (l(), u("div", G, h(t.noResultsText), 1)) : o("", !0),
        j(P, {
          ref_key: "paginator",
          ref: y,
          modelValue: v.value,
          "onUpdate:modelValue": a[1] || (a[1] = (s) => v.value = s),
          resource: t.resource,
          filters: t.filters,
          onResults: L,
          onLoading: T
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), M = {
  install: (t) => {
    t.component("lkt-table-page") === void 0 && t.component("lkt-table-page", H);
  }
};
export {
  M as default
};
