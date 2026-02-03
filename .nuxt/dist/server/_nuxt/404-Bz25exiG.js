import { u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "/Users/yaman/Desktop/Metea Website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/yaman/Desktop/Metea Website/node_modules/hookable/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/unctx/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/yaman/Desktop/Metea Website/node_modules/defu/dist/defu.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/ufo/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404 - Page Not Found | Metea",
      meta: [
        { name: "robots", content: "noindex" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-light flex items-center justify-center px-4" }, _attrs))}><div class="text-center max-w-lg"><h1 class="display-huge gradient-text mb-4">404</h1><h2 class="display-small text-dark mb-4">Page not found</h2><p class="text-dark-muted mb-8 leading-relaxed"> Sorry, we couldn&#39;t find the page you&#39;re looking for. It might have been moved or doesn&#39;t exist. </p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${_scopeId}></path></svg><span${_scopeId}>Back to Home</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                })
              ])),
              createVNode("span", null, "Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="mailto:support@metea-app.com" class="btn-secondary"><span>Contact Support</span></a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=404-Bz25exiG.js.map
