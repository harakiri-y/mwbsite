import { _ as _sfc_main$1, a as __nuxt_component_2 } from "./FooterSection-BPmDHfwb.js";
import { u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nuxt/paths";
import "/Users/yaman/Desktop/Metea Website/node_modules/ofetch/dist/node.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/hookable/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/unctx/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/yaman/Desktop/Metea Website/node_modules/defu/dist/defu.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/ufo/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "imprint",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Imprint - Metea",
      meta: [
        { name: "description", content: "Metea Imprint - Legal notice and contact information." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_FooterSection = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-light" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main class="pt-32 pb-20"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center text-dark-muted hover:text-primary transition-colors mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg> Back to Home `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })
              ])),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="display-medium text-dark mb-4">Imprint</h1><p class="text-dark-muted">Legal Notice</p></div><div class="prose prose-lg max-w-none space-y-8"><section><h2 class="display-small text-dark mb-4">About Metea</h2><p class="text-dark-muted leading-relaxed"> Metea is a health and wellness app that analyzes your Apple Health data using AI to provide personalized insights for stress management, sleep optimization, and overall well-being. </p></section><section><h2 class="display-small text-dark mb-4">Contact</h2><p class="text-dark-muted leading-relaxed mb-4"> For questions, support, or inquiries, please contact us through the App Store: </p><div class="card p-6"><p class="text-dark leading-relaxed"><strong>App Support:</strong> Use the &quot;App Support&quot; link on the Metea App Store page<br><strong>Report a Problem:</strong> Use the &quot;Report a Problem&quot; feature in the App Store </p></div></section><section><h2 class="display-small text-dark mb-4">EU Dispute Resolution</h2><p class="text-dark-muted leading-relaxed mb-4"> The European Commission provides a platform for online dispute resolution (ODR): </p><p class="text-dark-muted leading-relaxed mb-4"><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline"> https://ec.europa.eu/consumers/odr </a></p></section><section><h2 class="display-small text-dark mb-4">Liability for Content</h2><p class="text-dark-muted leading-relaxed"> We make every effort to ensure the accuracy and completeness of information on this website. However, we cannot guarantee that all information is complete, accurate, or up-to-date at all times. We reserve the right to modify or remove content without prior notice. </p></section><section><h2 class="display-small text-dark mb-4">Liability for Links</h2><p class="text-dark-muted leading-relaxed"> This website may contain links to external websites. We have no influence over the content of these external sites and therefore cannot assume any liability for them. The respective provider or operator is always responsible for the content of linked pages. Linked pages were checked for possible legal violations at the time of linking. If we become aware of any legal violations, we will remove such links immediately. </p></section><section><h2 class="display-small text-dark mb-4">Copyright</h2><p class="text-dark-muted leading-relaxed"> The content and works on this website are protected by copyright. Any reproduction, processing, distribution, or commercialization beyond the scope of copyright law requires prior written consent. Downloads and copies of this site are only permitted for private, non-commercial use. If you become aware of a copyright infringement, please inform us so we can take appropriate action. </p></section></div></div></main>`);
      _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/imprint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=imprint-B2FsTlVg.js.map
