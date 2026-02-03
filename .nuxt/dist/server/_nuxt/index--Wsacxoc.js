import { _ as _sfc_main$7, a as __nuxt_component_2 } from "./FooterSection-BPmDHfwb.js";
import { mergeProps, useSSRContext, defineComponent, createVNode, resolveDynamicComponent, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { a as _export_sfc, u as useHead } from "../server.mjs";
import { Heart, Brain, Activity, Moon, Users, Watch, LayoutGrid, Zap, TrendingUp, BarChart3, Sparkles, Bell, Shield } from "lucide-vue-next";
import "/Users/yaman/Desktop/Metea Website/node_modules/hookable/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/ofetch/dist/node.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/unctx/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/yaman/Desktop/Metea Website/node_modules/defu/dist/defu.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/ufo/dist/index.mjs";
import "/Users/yaman/Desktop/Metea Website/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0$1 = publicAssetsURL("/screenshot-1.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center overflow-hidden bg-light" }, _attrs))}><div class="absolute inset-0 pointer-events-none overflow-hidden"><div class="absolute top-1/4 right-1/4 w-[400px] h-[400px] opacity-30"><div class="orb w-full h-full"></div></div><div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div></div><div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"><div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"><div><div class="animate-in animate-in-delay-1"><span class="label text-primary">Now on the App Store</span></div><h1 class="display-huge text-dark mt-6 mb-4 animate-in animate-in-delay-2"> Metea </h1><div class="display-medium text-dark-muted mb-8 animate-in animate-in-delay-3"> Your Health.<br><span class="gradient-text">Intelligently Analyzed.</span></div><p class="body-large max-w-lg mb-12 animate-in animate-in-delay-4"> Connect Apple Health with AI power. Get personalized insights for stress, sleep, and well-being. </p><div class="flex flex-col sm:flex-row gap-4 animate-in animate-in-delay-5"><a href="#download" class="btn-primary"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg><span>Download App</span></a><a href="#features" class="btn-secondary"><span class="hover-underline">Learn More</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a></div></div><div class="relative flex justify-center lg:justify-end animate-in animate-in-delay-3"><div class="relative float"><div class="phone-mockup w-[280px] sm:w-[320px]"><div class="phone-screen aspect-[9/19.5] overflow-hidden"><img${ssrRenderAttr("src", _imports_0$1)} alt="Metea App Screenshot" class="w-full h-full object-cover object-top"></div></div></div></div></div><div class="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator"><div class="w-6 h-10 rounded-full border-2 border-dark/20 flex justify-center pt-2"><div class="w-1 h-2 bg-dark/30 rounded-full"></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: Heart,
        title: "HealthKit Integration",
        description: "Seamless connection with Apple Health. Automatically import heart rate, HRV, sleep, and more."
      },
      {
        icon: Brain,
        title: "AI Analysis",
        description: "Our intelligent AI recognizes patterns and connections in your health data that you might miss."
      },
      {
        icon: Activity,
        title: "Stress Tracking",
        description: "Understand your stress levels through HRV analysis and receive personalized relaxation tips."
      },
      {
        icon: Moon,
        title: "Sleep Analysis",
        description: "Detailed insights into your sleep quality with personalized improvement suggestions."
      },
      {
        icon: Users,
        title: "Community",
        description: "Join challenges, compare with friends, and motivate each other on your health journey."
      },
      {
        icon: Watch,
        title: "Apple Watch App",
        description: "Companion app for your Apple Watch with live complications and quick access to insights."
      },
      {
        icon: LayoutGrid,
        title: "Home Screen Widgets",
        description: "See your most important health data directly on your home screen at a glance."
      },
      {
        icon: Zap,
        title: "Live Activities",
        description: "Real-time updates on your lock screen during workouts and meditation sessions."
      },
      {
        icon: TrendingUp,
        title: "Trend Analysis",
        description: "Track your long-term progress with clear charts and comprehensive reports."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "relative py-32 lg:py-40 bg-cream"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-3xl mb-20"><span class="label text-primary mb-4 block reveal">Features</span><h2 class="display-large text-dark mb-6 reveal"> Everything for your<br><span class="gradient-text">Health</span></h2><p class="body-large reveal"> Metea combines cutting-edge AI technology with Apple Health for personalized insights. </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="group card hover-lift cursor-pointer reveal"><div class="mb-6"><div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-light group-hover:bg-primary">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), { class: "w-7 h-7 transition-colors duration-500 text-primary group-hover:text-white" }, null), _parent);
        _push(`</div></div><h3 class="display-small text-dark mb-3" style="${ssrRenderStyle({ "font-size": "1.25rem", "line-height": "1.3" })}">${ssrInterpolate(feature.title)}</h3><p class="text-dark-muted leading-relaxed">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "how-it-works",
    class: "relative py-32 lg:py-40 bg-light overflow-hidden"
  }, _attrs))}><div class="absolute inset-0 pointer-events-none overflow-hidden"><div class="absolute top-1/3 left-1/4 w-[200px] h-[200px] opacity-15"><div class="orb w-full h-full"></div></div><div class="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] opacity-10"><div class="orb w-full h-full"></div></div></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-24"><span class="label text-primary mb-4 block reveal">How It Works</span><h2 class="display-large text-dark mb-6 reveal"> Three Simple <span class="gradient-text">Steps</span></h2><p class="body-large reveal"> Get personalized health insights in just three easy steps. </p></div><div class="relative"><div class="hidden lg:block absolute top-20 left-[15%] right-[15%] h-px bg-gray"></div><div class="grid md:grid-cols-3 gap-16 stagger-children-slow"><div class="text-center reveal"><div class="relative inline-flex mb-10"><div class="w-20 h-20 rounded-full bg-dark flex items-center justify-center"><span class="text-3xl font-bold text-white" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">1</span></div><div class="dot absolute -bottom-1 -right-1"></div></div><h3 class="display-small text-dark mb-4">Connect Apple Health</h3><p class="text-dark-muted leading-relaxed"> Grant Metea access to your Health data. Your data stays secure on your device. </p></div><div class="text-center reveal"><div class="relative inline-flex mb-10"><div class="w-20 h-20 rounded-full bg-dark flex items-center justify-center"><span class="text-3xl font-bold text-white" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">2</span></div><div class="dot absolute -bottom-1 -right-1"></div></div><h3 class="display-small text-dark mb-4">AI Analyzes</h3><p class="text-dark-muted leading-relaxed"> Our advanced AI recognizes patterns and correlations in your health data. </p></div><div class="text-center reveal"><div class="relative inline-flex mb-10"><div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center"><span class="text-3xl font-bold text-white" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">3</span></div><div class="dot absolute -bottom-1 -right-1"></div></div><h3 class="display-small text-dark mb-4">Get Insights</h3><p class="text-dark-muted leading-relaxed"> Receive daily personalized recommendations for better sleep and less stress. </p></div></div></div><div class="text-center mt-20 reveal"><a href="#download" class="btn-primary"><span>Get Started</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorksSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppPreviewSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activeHighlight = ref(0);
    const highlights = [
      {
        icon: BarChart3,
        title: "Clear Dashboard",
        description: "All your health data at a glance - clearly structured and easy to understand."
      },
      {
        icon: Sparkles,
        title: "AI-Powered Recommendations",
        description: "Personalized tips based on your individual data and goals."
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description: "Receive the right reminders at the right time for your health."
      },
      {
        icon: Shield,
        title: "Privacy First",
        description: "Your data stays on your device. No cloud, no compromises."
      }
    ];
    const screenshots = [
      { title: "Dashboard", image: "/screenshot-2.png" },
      { title: "AI Insights", image: "/screenshot-3.png" },
      { title: "Notifications", image: "/screenshot-2.png" },
      { title: "Privacy", image: "/screenshot-1.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "preview",
        class: "relative py-32 lg:py-40 bg-cream overflow-hidden"
      }, _attrs))}><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"><div class="order-2 lg:order-1"><span class="label text-primary mb-4 block reveal">App Preview</span><h2 class="display-large text-dark mb-6 reveal"> Discover<br><span class="gradient-text">Metea</span></h2><p class="body-large mb-12 reveal"> A clear dashboard shows you all your important health data at a glance. </p><div class="space-y-4 stagger-children"><!--[-->`);
      ssrRenderList(highlights, (highlight, index) => {
        _push(`<div class="${ssrRenderClass([unref(activeHighlight) === index ? "card" : "hover:bg-white/50", "flex items-start gap-5 p-5 rounded-2xl transition-all duration-500 cursor-pointer reveal"])}"><div class="${ssrRenderClass([unref(activeHighlight) === index ? "bg-dark" : "bg-gray", "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(highlight.icon), {
          class: ["w-6 h-6", unref(activeHighlight) === index ? "text-white" : "text-dark-muted"]
        }, null), _parent);
        _push(`</div><div><h4 class="font-semibold text-dark mb-1" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(highlight.title)}</h4><p class="text-sm text-dark-muted leading-relaxed">${ssrInterpolate(highlight.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="order-1 lg:order-2 flex justify-center reveal"><div class="float"><div class="phone-mockup w-[280px] sm:w-[320px]"><div class="phone-screen aspect-[9/19.5] overflow-hidden relative"><img${ssrRenderAttr("src", screenshots[unref(activeHighlight)].image)}${ssrRenderAttr("alt", screenshots[unref(activeHighlight)].title)} class="w-full h-full object-cover object-top"></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppPreviewSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const stats = [
      { value: 1e4, suffix: "+", label: "Active Users" },
      { value: 98, suffix: "%", label: "Satisfaction" },
      { value: 4.9, suffix: "", label: "App Store Rating" },
      { value: 50, suffix: "%", label: "Stress Reduced" }
    ];
    const animatedValues = ref(["0", "0", "0.0", "0"]);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "relative py-32 lg:py-40 bg-dark text-white overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 opacity-5"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-20"><span class="label text-primary mb-4 block reveal">Numbers &amp; Facts</span><h2 class="display-large text-white mb-6 reveal"> Trusted by <span class="gradient-text">Thousands</span></h2><p class="body-large text-white/60 max-w-2xl mx-auto reveal"> Every day we help people better understand their health. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 stagger-children"><!--[-->`);
      ssrRenderList(stats, (stat, index) => {
        _push(`<div class="text-center p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-500 cursor-pointer reveal"><div class="mb-2"><span class="text-5xl lg:text-6xl font-bold" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(unref(animatedValues)[index])}</span><span class="text-2xl text-primary font-bold" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">${ssrInterpolate(stat.suffix)}</span></div><p class="text-white/60">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div><div class="max-w-3xl mx-auto reveal"><div class="glass rounded-3xl p-10 text-center bg-white/5"><div class="flex justify-center gap-1 mb-6"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`);
      });
      _push(`<!--]--></div><p class="text-xl text-white/80 italic mb-8 leading-relaxed"> &quot;Metea helped me understand my stress better. The AI recommendations are incredibly helpful.&quot; </p><div class="flex items-center justify-center gap-4"><div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}"> M </div><div class="text-left"><p class="font-semibold text-white" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">Maria K.</p><p class="text-sm text-white/50">User since 2024</p></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo.png?v=2");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "download",
    class: "relative py-32 lg:py-40 bg-light overflow-hidden"
  }, _attrs))}><div class="absolute inset-0 pointer-events-none overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-20"><div class="orb w-full h-full"></div></div></div><div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="mb-10"><img${ssrRenderAttr("src", _imports_0)} alt="Metea" class="w-24 h-24 mx-auto rounded-3xl shadow-lg"></div><h2 class="display-large text-dark mb-6 reveal"> Ready for a<br><span class="gradient-text">healthier life?</span></h2><p class="body-large mb-12 max-w-xl mx-auto reveal"> Download Metea for free and start understanding your health better today. </p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal"><a href="#" class="inline-flex items-center justify-center px-8 py-4 bg-dark text-white rounded-2xl hover:bg-dark-secondary transition-all duration-500 hover:scale-105"><svg class="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg><div class="text-left"><div class="text-xs opacity-70">Download on the</div><div class="text-lg font-semibold" style="${ssrRenderStyle({ "font-family": "var(--font-display)" })}">App Store</div></div></a></div><div class="flex flex-wrap items-center justify-center gap-8 text-dark-muted text-sm reveal"><div class="flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg><span>100% Privacy</span></div><div class="flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Free to Start</span></div><div class="flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><span>Made in Germany</span></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DownloadSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Metea - Your Health. Intelligently Analyzed.",
      meta: [
        { name: "description", content: "Metea analyzes your Apple Health data with AI and provides personalized recommendations for stress, sleep, HRV, and more." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$7;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FeaturesSection = _sfc_main$5;
      const _component_HowItWorksSection = __nuxt_component_3;
      const _component_AppPreviewSection = _sfc_main$3;
      const _component_StatsSection = _sfc_main$2;
      const _component_DownloadSection = __nuxt_component_6;
      const _component_FooterSection = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AppPreviewSection, null, null, _parent));
      _push(ssrRenderComponent(_component_StatsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_DownloadSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index--Wsacxoc.js.map
