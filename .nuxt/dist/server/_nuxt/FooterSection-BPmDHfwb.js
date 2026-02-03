import { _ as __nuxt_component_1, a as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = ref(false);
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-500", unref(scrolled) ? "glass py-4" : "py-6"]
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Metea Logo" class="w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"${_scopeId}><span class="text-xl font-bold text-dark" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}"${_scopeId}>Metea</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Metea Logo",
                class: "w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
              }),
              createVNode("span", {
                class: "text-xl font-bold text-dark",
                style: { "font-family": "var(--font-display)" }
              }, "Metea")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-10"><a href="/#features" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">Features</a><a href="/#how-it-works" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">How It Works</a><a href="/#preview" class="hover-underline text-dark-muted hover:text-dark transition-colors duration-300">App Preview</a><a href="/#download" class="btn-primary text-sm py-2.5 px-6"> Download </a></div><button class="md:hidden p-2 rounded-lg hover:bg-dark/5 transition-colors duration-300">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden glass rounded-2xl mt-4 p-6"><div class="flex flex-col space-y-4"><a href="/#features" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">Features</a><a href="/#how-it-works" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">How It Works</a><a href="/#preview" class="text-dark-muted hover:text-dark transition-colors duration-300 py-2">App Preview</a><div class="pt-4"><a href="/#download" class="btn-primary w-full justify-center"> Download </a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative py-20 bg-dark text-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"><div class="lg:col-span-2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center space-x-3 mb-6 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Metea Logo" class="w-10 h-10 rounded-xl bg-white p-0.5 transition-transform duration-300 group-hover:scale-110"${_scopeId}><span class="text-xl font-bold" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}"${_scopeId}>Metea</span>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Metea Logo",
            class: "w-10 h-10 rounded-xl bg-white p-0.5 transition-transform duration-300 group-hover:scale-110"
          }),
          createVNode("span", {
            class: "text-xl font-bold",
            style: { "font-family": "var(--font-display)" }
          }, "Metea")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-white/50 mb-8 max-w-sm leading-relaxed"> Your health, intelligently analyzed. Connect Apple Health with AI power for personalized insights. </p><div class="flex space-x-3"><a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a><a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a></div></div><div><h4 class="font-semibold mb-6" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Product</h4><ul class="space-y-3"><li><a href="/#features" class="text-white/50 hover:text-white transition-colors duration-300 hover-underline">Features</a></li><li><a href="/#how-it-works" class="text-white/50 hover:text-white transition-colors duration-300 hover-underline">How It Works</a></li><li><a href="/#preview" class="text-white/50 hover:text-white transition-colors duration-300 hover-underline">App Preview</a></li><li><a href="/#download" class="text-white/50 hover:text-white transition-colors duration-300 hover-underline">Download</a></li></ul></div><div><h4 class="font-semibold mb-6" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Legal</h4><ul class="space-y-3"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "text-white/50 hover:text-white transition-colors duration-300 hover-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/imprint",
    class: "text-white/50 hover:text-white transition-colors duration-300 hover-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Imprint`);
      } else {
        return [
          createTextVNode("Imprint")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms",
    class: "text-white/50 hover:text-white transition-colors duration-300 hover-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of Service`);
      } else {
        return [
          createTextVNode("Terms of Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="https://apps.apple.com/app/metea" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-white transition-colors duration-300 hover-underline">Support</a></li></ul></div></div><div class="divider bg-white/10 mb-8"></div><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-white/40 text-sm"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Metea. All rights reserved. </p><a href="#" class="inline-flex items-center px-4 py-2 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"><svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg><span class="text-sm text-white/70">On the App Store</span></a></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _sfc_main$1 as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=FooterSection-BPmDHfwb.js.map
