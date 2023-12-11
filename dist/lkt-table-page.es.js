import { defineComponent as x, useSlots as A, ref as u, computed as p, resolveComponent as m, openBlock as n, createElementBlock as r, unref as v, toDisplayString as B, createCommentVNode as a, renderSlot as y, createBlock as g, createSlots as N, renderList as T, withCtx as U, createVNode as $, nextTick as D } from "vue";
const E = { class: "lkt-table-page" }, K = { key: 0 }, O = { key: 0 }, R = {
  key: 1,
  class: "lkt-field-table__buttons"
}, j = { name: "LktTablePage", inheritAttrs: !1 }, q = /* @__PURE__ */ x({
  ...j,
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    title: { type: String, default: "" },
    columns: { type: Array, default: () => [] },
    filters: { type: Array, default: () => ({}) }
  },
  setup(e) {
    const i = A(), f = e, k = u(f.page), c = u([]), b = u(!0), s = u(!0), _ = p(() => f.columns.map((t) => t.key)), V = p(() => {
      b.value;
      let t = [];
      for (let l in i)
        _.value.indexOf(l) !== -1 && t.push(l);
      return t;
    }), h = (t) => {
      c.value = t, s.value = !1;
    }, S = () => D(() => s.value = !0);
    return (t, l) => {
      const C = m("lkt-loader"), L = m("lkt-table"), P = m("lkt-paginator");
      return n(), r("section", E, [
        e.title || v(i).buttons ? (n(), r("header", K, [
          e.title ? (n(), r("h2", O, B(e.title), 1)) : a("", !0),
          v(i).buttons ? (n(), r("div", R, [
            y(t.$slots, "buttons")
          ])) : a("", !0)
        ])) : a("", !0),
        s.value ? (n(), g(C, { key: 1 })) : a("", !0),
        s.value ? a("", !0) : (n(), g(L, {
          key: 2,
          modelValue: c.value,
          "onUpdate:modelValue": l[0] || (l[0] = (o) => c.value = o),
          columns: e.columns
        }, N({ _: 2 }, [
          T(V.value, (o) => ({
            name: o,
            fn: U((d) => [
              y(t.$slots, o, {
                item: d.item,
                value: d.value,
                column: d.column
              })
            ])
          }))
        ]), 1032, ["modelValue", "columns"])),
        $(P, {
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
}), F = {
  install: (e) => {
    e.component("lkt-table-page", q);
  }
};
export {
  F as default
};
