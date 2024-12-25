import { a as Z } from "./chunk-G35XBBKF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as te,
  C as ve,
  Ca as r,
  Da as V,
  Ea as ae,
  Fa as He,
  K as j,
  M as ye,
  Q as $,
  T as be,
  V as z,
  W as _e,
  X as ee,
  Y as E,
  Z as Fe,
  _ as re,
  b as h,
  ba as G,
  ca as Xe,
  d as Y,
  da as ke,
  g as ge,
  ga as U,
  h as A,
  ha as ze,
  i as W,
  j as he,
  ja as m,
  k as ue,
  l as k,
  m as we,
  o as P,
  p as e,
  q as p,
  ra as Ee,
  sa as De,
  t as J,
  u,
  ua as Ne,
  v as xe,
  va as Te,
  w as q,
  wa as Ce,
  xa as Qe,
  ya as x,
  za as b,
} from "./chunk-YPFMCUDL.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-I6PKUJFK.mjs";
import "./chunk-Y5FTINFI.mjs";
var Ve = E(u.div),
  Ze = { dyzDIFPUv: { hover: !0, pressed: !0 } },
  Be = ["dyzDIFPUv", "SM_BwcwuG", "zwSQe4pBM", "m7onkN0lu", "iN0ocl040"],
  Ke = "framer-1666h",
  Me = {
    dyzDIFPUv: "framer-v-nvewmp",
    iN0ocl040: "framer-v-1dhrppx",
    m7onkN0lu: "framer-v-1enboe8",
    SM_BwcwuG: "framer-v-1gj9w7i",
    zwSQe4pBM: "framer-v-oyup27",
  };
function Ie(a, ...t) {
  let i = {};
  return t?.forEach((n) => n && Object.assign(i, a[n])), i;
}
var Le = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Oe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  Je = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  $e = (a, t) => `translateX(-50%) ${t}`,
  er = ({ value: a, children: t }) => {
    let i = ge(J),
      n = a ?? i.transition,
      o = ue(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(J.Provider, { value: o, children: t });
  },
  rr = u.create(h),
  tr = {
    Default: "dyzDIFPUv",
    Disabled: "zwSQe4pBM",
    Error: "iN0ocl040",
    Loading: "SM_BwcwuG",
    Success: "m7onkN0lu",
  },
  ar = ({ fontSize: a, height: t, id: i, width: n, ...o }) => {
    var f, d, s;
    return {
      ...o,
      t37eJRNce: (f = a ?? o.t37eJRNce) !== null && f !== void 0 ? f : 19,
      variant:
        (s = (d = tr[o.variant]) !== null && d !== void 0 ? d : o.variant) !==
          null && s !== void 0
          ? s
          : "dyzDIFPUv",
    };
  },
  or = (a, t) =>
    a.layoutDependency ? t.join("-") + a.layoutDependency : t.join("-"),
  nr = Y(function (a, t) {
    let { activeLocale: i, setLocale: n } = j(),
      {
        style: o,
        className: f,
        layoutId: d,
        variant: s,
        t37eJRNce: v,
        ...c
      } = ar(a),
      {
        baseVariant: _,
        classNames: pe,
        clearLoadingGesture: ce,
        gestureHandlers: me,
        gestureVariant: I,
        isLoading: le,
        setGestureState: fe,
        setVariant: de,
        variants: S,
      } = Te({
        cycleOrder: Be,
        defaultVariant: "dyzDIFPUv",
        enabledGestures: Ze,
        variant: s,
        variantClassNames: Me,
      }),
      y = or(a, S),
      l = k(null),
      g = () => _ !== "SM_BwcwuG",
      F = () => _ === "SM_BwcwuG",
      X = W(),
      R = [],
      Ar = Fe();
    return e(q, {
      id: d ?? X,
      children: e(rr, {
        animate: S,
        initial: !1,
        children: e(er, {
          value: Le,
          children: p(u.button, {
            ...c,
            ...me,
            className: z(Ke, ...R, "framer-nvewmp", f, pe),
            "data-border": !0,
            "data-framer-name": "Default",
            "data-reset": "button",
            layoutDependency: y,
            layoutId: "dyzDIFPUv",
            ref: t ?? l,
            style: {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(8, 8, 8)",
              "--border-left-width": "2px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backgroundColor: "rgb(255, 255, 255)",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              opacity: 1,
              ...o,
            },
            variants: {
              "dyzDIFPUv-hover": {
                "--border-color": "rgb(0, 0, 0)",
                backgroundColor: "rgba(255, 255, 255, 0.73)",
              },
              iN0ocl040: { backgroundColor: "rgb(92, 0, 14)" },
              m7onkN0lu: { backgroundColor: "rgb(22, 102, 0)" },
              SM_BwcwuG: { backgroundColor: "rgb(71, 68, 68)" },
              zwSQe4pBM: { opacity: 0.5 },
            },
            ...Ie(
              {
                "dyzDIFPUv-hover": { "data-framer-name": void 0 },
                "dyzDIFPUv-pressed": { "data-framer-name": void 0 },
                iN0ocl040: { "data-framer-name": "Error" },
                m7onkN0lu: { "data-framer-name": "Success" },
                SM_BwcwuG: { "data-framer-name": "Loading" },
                zwSQe4pBM: { "data-framer-name": "Disabled" },
              },
              _,
              I
            ),
            children: [
              g() &&
                e(b, {
                  __fromCanvasComponent: !0,
                  children: e(h, {
                    children: e(u.p, {
                      style: {
                        "--font-selector":
                          "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                        "--framer-font-family": '"Rubik Wet Paint", sans-serif',
                        "--framer-font-size":
                          "calc(var(--variable-reference-t37eJRNce-AD8lf0ORp) * 1px)",
                      },
                      children: "Submit",
                    }),
                  }),
                  className: "framer-gnzs9x",
                  fonts: ["GF;Rubik Wet Paint-regular"],
                  layoutDependency: y,
                  layoutId: "lTQkxWOdt",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-t37eJRNce-AD8lf0ORp": v,
                  },
                  variants: {
                    iN0ocl040: { "--extracted-r6o4lv": "rgb(255, 34, 68)" },
                    m7onkN0lu: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Ie(
                    {
                      iN0ocl040: {
                        children: e(h, {
                          children: e(u.p, {
                            style: {
                              "--font-selector":
                                "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Rubik Wet Paint", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 34, 68))",
                            },
                            children: "Something went wrong",
                          }),
                        }),
                      },
                      m7onkN0lu: {
                        children: e(h, {
                          children: e(u.p, {
                            style: {
                              "--font-selector":
                                "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Rubik Wet Paint", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Thank you",
                          }),
                        }),
                      },
                    },
                    _,
                    I
                  ),
                }),
              F() &&
                e(u.div, {
                  className: "framer-1ynzgj8",
                  "data-framer-name": "Spinner",
                  layoutDependency: y,
                  layoutId: "w27BbU96a",
                  style: {
                    background:
                      "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                    mask: "url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                    WebkitMask:
                      "url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                  },
                  children: e(Ve, {
                    __framer__loop: Je,
                    __framer__loopEffectEnabled: !0,
                    __framer__loopRepeatDelay: 0,
                    __framer__loopRepeatType: "loop",
                    __framer__loopTransition: Oe,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: "framer-15m1qmy",
                    "data-framer-name": "Conic",
                    layoutDependency: y,
                    layoutId: "lAqRWv5K0",
                    style: {
                      background:
                        "conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)",
                      backgroundColor: "rgb(68, 204, 255)",
                      mask: "none",
                      WebkitMask: "none",
                    },
                    variants: {
                      SM_BwcwuG: {
                        background:
                          "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        mask: "url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                        WebkitMask:
                          "url('/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                      },
                    },
                    children: e(u.div, {
                      className: "framer-1rjznn2",
                      "data-framer-name": "Rounding",
                      layoutDependency: y,
                      layoutId: "clqDmlfPj",
                      style: {
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottomLeftRadius: 1,
                        borderBottomRightRadius: 1,
                        borderTopLeftRadius: 1,
                        borderTopRightRadius: 1,
                      },
                      transformTemplate: $e,
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ir = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-1666h.framer-11cnrrx, .framer-1666h .framer-11cnrrx { display: block; }",
    ".framer-1666h.framer-nvewmp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }",
    ".framer-1666h .framer-gnzs9x { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-1666h .framer-1ynzgj8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }",
    ".framer-1666h .framer-15m1qmy { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-1666h .framer-1rjznn2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1666h.framer-nvewmp { gap: 0px; } .framer-1666h.framer-nvewmp > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-1666h.framer-nvewmp > :first-child { margin-left: 0px; } .framer-1666h.framer-nvewmp > :last-child { margin-right: 0px; } }",
    ".framer-1666h.framer-v-1gj9w7i.framer-nvewmp, .framer-1666h.framer-v-oyup27.framer-nvewmp, .framer-1666h.framer-v-1enboe8.framer-nvewmp, .framer-1666h.framer-v-1dhrppx.framer-nvewmp { cursor: unset; }",
    ".framer-1666h.framer-v-1gj9w7i .framer-15m1qmy { overflow: hidden; }",
    '.framer-1666h[data-border="true"]::after, .framer-1666h [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  C = G(nr, ir, "framer-1666h"),
  oe = C;
C.displayName = "Button";
C.defaultProps = { height: 40, width: 240 };
be(C, {
  variant: {
    options: ["dyzDIFPUv", "SM_BwcwuG", "zwSQe4pBM", "m7onkN0lu", "iN0ocl040"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: $.Enum,
  },
  t37eJRNce: { defaultValue: 19, title: "Font Size", type: $.Number },
});
V(
  C,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Rubik Wet Paint",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rubikwetpaint/v2/HTx0L20uMDGHgdULcpTF3Oe4d_-F_jz313DuvQ.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
function Se(a) {
  let t = _e({ state: Object.freeze({ ...a }) }),
    i = (s) => {
      typeof s == "function" && (s = s(t.state)),
        (t.state = Object.freeze({ ...t.state, ...s }));
    },
    n = typeof a == "object" ? Object.freeze({ ...a }) : a,
    o = new Set(),
    f = (s) => {
      typeof s == "function" && (s = s(n)),
        (n = typeof s == "object" ? Object.freeze({ ...n, ...s }) : s),
        o.forEach((v) => v(n));
    };
  function d() {
    let [s, v] = we(n);
    return (
      A(() => (o.add(v), () => o.delete(v)), []),
      ee() === !0 ? (ee(), [t.state, i]) : [s, f]
    );
  }
  return d;
}
var sr = { display: "flex", justifyContent: "center", alignItems: "center" };
var Kr = { ...sr, overflow: "hidden" };
var rt = Se({ background: "#0099FF" });
function ne() {
  return e("iframe", {
    src: "https://www.friv.com/z/games/snowline/game.html",
    style: { width: "100%", height: "100%", border: "1" },
  });
}
Ce.loadFonts([]);
var Re = [{ explicitInter: !0, fonts: [] }],
  Ye = [
    ".framer-wlWmF .framer-styles-preset-1ofmxu1:not(.rich-text-wrapper), .framer-wlWmF .framer-styles-preset-1ofmxu1.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #0088ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #0099ff; --framer-link-text-decoration: none; }",
  ],
  Ae = "framer-wlWmF";
var cr = ae(ne),
  w = E(x),
  mr = ae(oe),
  lr = E(u.div),
  fr = {
    ArCqwEFiT: "(min-width: 1200px)",
    euNKnnJU1: "(min-width: 810px) and (max-width: 1199px)",
    gfMzLi7K4: "(max-width: 809px)",
  };
var We = "framer-vFcpX",
  dr = {
    ArCqwEFiT: "framer-v-10ckajh",
    euNKnnJU1: "framer-v-fqnph9",
    gfMzLi7K4: "framer-v-s91ge0",
  },
  L = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  Pe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: L,
  },
  gr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.98,
    skewX: 0,
    skewY: 0,
    transition: L,
  },
  qe = { delay: 0, duration: 1.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  je = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 35,
  },
  hr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 24,
  },
  ur = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 55,
  },
  wr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 18,
  },
  xr = { delay: 0, duration: 1.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  vr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 20,
  },
  yr = {
    delay: 0,
    duration: 1.4,
    ease: [0.7, -0.35, 0.3, 1.35],
    type: "tween",
  },
  br = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Q = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: L,
  },
  Ge = (a, t) => `translate(-50%, -50%) ${t}`,
  _r = (a, t) => `translateY(-50%) ${t}`,
  Fr = (a, t, i) => {
    switch (a.state) {
      case "success":
        var n;
        return (n = t.success) !== null && n !== void 0 ? n : i;
      case "pending":
        var o;
        return (o = t.pending) !== null && o !== void 0 ? o : i;
      case "error":
        var f;
        return (f = t.error) !== null && f !== void 0 ? f : i;
      case "incomplete":
        var d;
        return (d = t.incomplete) !== null && d !== void 0 ? d : i;
    }
  },
  Xr = ({ children: a, blockDocumentScrolling: t, enabled: i = !0 }) => {
    let [n, o] = Ne({ blockDocumentScrolling: t });
    return a({
      hide: () => o(!1),
      show: () => o(!0),
      toggle: () => o(!n),
      visible: i && n,
    });
  },
  kr = { delay: 0, duration: 1.8, ease: [0.44, 0, 0.56, 1], type: "tween" },
  zr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 40,
  },
  Er = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 22,
  },
  B = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: L,
  },
  Dr = { delay: 1.6, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Nr = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 445,
  },
  K = (a, t) => `translateX(-50%) ${t}`,
  H = { delay: 0, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Tr = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 635,
  },
  Cr = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 436,
  },
  Qr = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 368,
  },
  M = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 541,
  },
  ie = { delay: 1.5, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Hr = {
    opacity: 0,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 580,
  },
  se = Z(),
  Ir = { Desktop: "ArCqwEFiT", Phone: "gfMzLi7K4", Tablet: "euNKnnJU1" },
  Sr = ({ height: a, id: t, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = Ir[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "ArCqwEFiT",
    };
  },
  Rr = Y(function (a, t) {
    let { activeLocale: i, setLocale: n } = j(),
      { style: o, className: f, layoutId: d, variant: s, ...v } = Sr(a);
    A(() => {
      let l = Z(void 0, i);
      if (l.robots) {
        let g = document.querySelector('meta[name="robots"]');
        g
          ? g.setAttribute("content", l.robots)
          : ((g = document.createElement("meta")),
            g.setAttribute("name", "robots"),
            g.setAttribute("content", l.robots),
            document.head.appendChild(g));
      }
    }, [void 0, i]),
      he(() => {
        let l = Z(void 0, i);
        if (((document.title = l.title || ""), l.viewport)) {
          var g;
          (g = document.querySelector('meta[name="viewport"]')) === null ||
            g === void 0 ||
            g.setAttribute("content", l.viewport);
        }
        let F = l.bodyClassName;
        if (F) {
          let X = document.body;
          X.classList.forEach(
            (R) => R.startsWith("framer-body-") && X.classList.remove(R)
          ),
            X.classList.add(`${l.bodyClassName}-framer-vFcpX`);
        }
        return () => {
          F &&
            document.body.classList.remove(`${l.bodyClassName}-framer-vFcpX`);
        };
      }, [void 0, i]);
    let [c, _] = De(s, fr, !1),
      pe = void 0,
      { activeVariantCallback: ce, delay: me } = Ee(void 0),
      I = ({ overlay: l, paginationInfo: g }) =>
        ce(async (...F) => {
          l.toggle();
        }),
      le = k(null),
      fe = ye("WDafw0Ukg"),
      de = k(null),
      S = W(),
      y = [Ae];
    return (
      Xe({}),
      e(ke.Provider, {
        value: { primaryVariantId: "ArCqwEFiT", variantClassNames: dr },
        children: p(q, {
          id: d ?? S,
          children: [
            p(u.div, {
              ...v,
              className: z(We, ...y, "framer-10ckajh", f),
              ref: t ?? le,
              style: { ...o },
              children: [
                e("div", {
                  className: "framer-ymynud",
                  children: e("div", {
                    className: "framer-myspu7",
                    children: p("div", {
                      className: "framer-z4jx57",
                      children: [
                        e(m, {
                          breakpoint: c,
                          overrides: {
                            euNKnnJU1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1080,
                                intrinsicWidth: 1920,
                                loading: r(980.5),
                                pixelHeight: 71,
                                pixelWidth: 2666,
                                sizes: "max(100vw, 1px)",
                                src: "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048",
                                srcSet:
                                  "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=512 512w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=1024 1024w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048 2048w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png 2666w",
                              },
                            },
                            gfMzLi7K4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1080,
                                intrinsicWidth: 1920,
                                loading: r(990.5),
                                pixelHeight: 71,
                                pixelWidth: 2666,
                                sizes: "max(100vw, 1px)",
                                src: "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048",
                                srcSet:
                                  "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=512 512w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=1024 1024w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048 2048w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png 2666w",
                              },
                            },
                          },
                          children: e(x, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1080,
                              intrinsicWidth: 1920,
                              loading: r(977),
                              pixelHeight: 71,
                              pixelWidth: 2666,
                              sizes: "max(100vw, 1px)",
                              src: "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048",
                              srcSet:
                                "/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=512 512w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=1024 1024w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png?scale-down-to=2048 2048w,/images/ZHEBREunob37gEuQSl9T4o9xXo.png 2666w",
                            },
                            className: "framer-1xcl5j7",
                            "data-framer-name": "Image",
                            name: "Image",
                          }),
                        }),
                        e(U, {
                          href: { webPageId: "augiA20Il" },
                          nodeId: "OWgHV2Sak",
                          children: e(u.a, {
                            className: "framer-13eytdk framer-zbmuyv",
                            whileHover: Pe,
                            whileTap: gr,
                            children: e(m, {
                              breakpoint: c,
                              overrides: {
                                gfMzLi7K4: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: r(-54),
                                    pixelHeight: 512,
                                    pixelWidth: 512,
                                    src: "/images/5dA7nPTs2RQkW6b9rmquSVxW7k.png",
                                  },
                                },
                              },
                              children: e(x, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: r(-77),
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: "/images/5dA7nPTs2RQkW6b9rmquSVxW7k.png",
                                },
                                className: "framer-w9ype2",
                              }),
                            }),
                          }),
                        }),
                        e("div", {
                          className: "framer-3fqbt",
                          children: e(m, {
                            breakpoint: c,
                            overrides: {
                              gfMzLi7K4: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: r(-54),
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: "/images/z6Bmf2mwQCVZD0JyenJuusOFOUU.png",
                                },
                              },
                            },
                            children: e(x, {
                              background: {
                                alt: "",
                                fit: "fill",
                                loading: r(-77),
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: "/images/z6Bmf2mwQCVZD0JyenJuusOFOUU.png",
                              },
                              className: "framer-1hydfyq",
                            }),
                          }),
                        }),
                        e(re, {
                          children: e(te, {
                            className: "framer-193eg8b-container",
                            children: e(ne, {
                              height: "100%",
                              id: "EhTY5Dy6Q",
                              layoutId: "EhTY5Dy6Q",
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                e(x, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 784,
                    intrinsicWidth: 8001,
                    loading: r(1e3),
                    pixelHeight: 1419,
                    pixelWidth: 8006,
                    sizes: "100vw",
                    src: "/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png",
                    srcSet:
                      "/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png?scale-down-to=512 512w,/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png?scale-down-to=1024 1024w,/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png?scale-down-to=2048 2048w,/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png?scale-down-to=4096 4096w,/images/U8IhRbNe3RaNXGV5kLaN2VIz2pU.png 8006w",
                  },
                  className: "framer-54yn6r",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
                p("div", {
                  className: "framer-z2d4kc",
                  id: fe,
                  ref: de,
                  children: [
                    e(m, {
                      breakpoint: c,
                      overrides: {
                        euNKnnJU1: {
                          children: e(h, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Rubik Wet Paint", sans-serif',
                                "--framer-font-size": "61px",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                                "--framer-text-transform": "capitalize",
                              },
                              children: "rules",
                            }),
                          }),
                        },
                        gfMzLi7K4: {
                          children: e(h, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Rubik Wet Paint", sans-serif',
                                "--framer-font-size": "39px",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                                "--framer-text-transform": "capitalize",
                              },
                              children: "rules",
                            }),
                          }),
                        },
                      },
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(h, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Rubik Wet Paint", sans-serif',
                              "--framer-font-size": "70px",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                              "--framer-text-transform": "capitalize",
                            },
                            children: "rules",
                          }),
                        }),
                        className: "framer-2monsg",
                        fonts: ["GF;Rubik Wet Paint-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    p("div", {
                      className: "framer-53upzj",
                      children: [
                        p("div", {
                          className: "framer-1j7g3ou",
                          children: [
                            e(m, {
                              breakpoint: c,
                              overrides: {
                                euNKnnJU1: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1619),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png",
                                    srcSet:
                                      "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=512 512w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=1024 1024w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=2048 2048w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=4096 4096w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png 5758w",
                                  },
                                },
                                gfMzLi7K4: {
                                  __framer__loop: hr,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1507.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png",
                                    srcSet:
                                      "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=512 512w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=1024 1024w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=2048 2048w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=4096 4096w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png 5758w",
                                  },
                                },
                              },
                              children: e(w, {
                                __framer__loop: je,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: qe,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: r(1668.5),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png",
                                  srcSet:
                                    "/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=512 512w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=1024 1024w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=2048 2048w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png?scale-down-to=4096 4096w,/images/1z305Q8ZDtnyYTvEqePFkNFnsXs.png 5758w",
                                },
                                className: "framer-19qgxob",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                            e(m, {
                              breakpoint: c,
                              overrides: {
                                euNKnnJU1: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1994),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png",
                                    srcSet:
                                      "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=512 512w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=1024 1024w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=2048 2048w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=4096 4096w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png 5758w",
                                  },
                                },
                                gfMzLi7K4: {
                                  __framer__loop: wr,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1882.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png",
                                    srcSet:
                                      "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=512 512w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=1024 1024w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=2048 2048w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=4096 4096w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png 5758w",
                                  },
                                },
                              },
                              children: e(w, {
                                __framer__loop: ur,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: qe,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: r(2043.5),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png",
                                  srcSet:
                                    "/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=512 512w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=1024 1024w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=2048 2048w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png?scale-down-to=4096 4096w,/images/oG5P6ruy9KUBCqvTOx2G15a0tE.png 5758w",
                                },
                                className: "framer-1l7zihy",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                          ],
                        }),
                        p("div", {
                          className: "framer-1ekwa43",
                          children: [
                            e(m, {
                              breakpoint: c,
                              overrides: {
                                euNKnnJU1: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1618.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png",
                                    srcSet:
                                      "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=512 512w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=1024 1024w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=2048 2048w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=4096 4096w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png 5758w",
                                  },
                                },
                                gfMzLi7K4: {
                                  __framer__loop: vr,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(2274.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png",
                                    srcSet:
                                      "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=512 512w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=1024 1024w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=2048 2048w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=4096 4096w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png 5758w",
                                  },
                                },
                              },
                              children: e(w, {
                                __framer__loop: je,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: xr,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: r(1668),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png",
                                  srcSet:
                                    "/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=512 512w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=1024 1024w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=2048 2048w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png?scale-down-to=4096 4096w,/images/T9DN3wrADzJ2pAs3DysKmbPndI.png 5758w",
                                },
                                className: "framer-vt5yve",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                            e(m, {
                              breakpoint: c,
                              overrides: {
                                euNKnnJU1: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(1993.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png",
                                    srcSet:
                                      "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=512 512w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=1024 1024w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=2048 2048w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=4096 4096w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png 5758w",
                                  },
                                },
                                gfMzLi7K4: {
                                  __framer__loop: Er,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: r(2649.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png",
                                    srcSet:
                                      "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=512 512w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=1024 1024w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=2048 2048w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=4096 4096w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png 5758w",
                                  },
                                },
                              },
                              children: e(w, {
                                __framer__loop: zr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: kr,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: r(2043),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png",
                                  srcSet:
                                    "/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=512 512w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=1024 1024w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=2048 2048w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png?scale-down-to=4096 4096w,/images/DtWEGv6Dp8Mwb5pu0jOsZpCvY.png 5758w",
                                },
                                className: "framer-fd37b",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                p("div", {
                  className: "framer-yguxd5",
                  children: [
                    p("div", {
                      className: "framer-1yqo8b1",
                      children: [
                        e(m, {
                          breakpoint: c,
                          overrides: {
                            euNKnnJU1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(2467.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "80.6501px",
                                src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                                srcSet:
                                  "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                              },
                            },
                            gfMzLi7K4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(3069.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "36.4583px",
                                src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                                srcSet:
                                  "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                              },
                            },
                          },
                          children: e(x, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 3044,
                              intrinsicWidth: 3363,
                              loading: r(2536),
                              pixelHeight: 3044,
                              pixelWidth: 3363,
                              sizes: "116.0036px",
                              src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                              srcSet:
                                "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                            },
                            className: "framer-1qyy3as",
                            "data-framer-name": "Screener",
                            name: "Screener",
                            whileHover: B,
                            whileTap: Q,
                          }),
                        }),
                        e(m, {
                          breakpoint: c,
                          overrides: {
                            euNKnnJU1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(2467.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "80.6501px",
                                src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                                srcSet:
                                  "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                              },
                            },
                            gfMzLi7K4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(3069.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "36.4583px",
                                src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                                srcSet:
                                  "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                              },
                            },
                          },
                          children: e(x, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 3044,
                              intrinsicWidth: 3363,
                              loading: r(2536),
                              pixelHeight: 3044,
                              pixelWidth: 3363,
                              sizes: "116.0036px",
                              src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                              srcSet:
                                "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                            },
                            className: "framer-5uu77v",
                            "data-framer-name": "X",
                            name: "X",
                            whileHover: B,
                            whileTap: Q,
                          }),
                        }),
                        e(m, {
                          breakpoint: c,
                          overrides: {
                            euNKnnJU1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(2467.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "80.6501px",
                                src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                                srcSet:
                                  "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                              },
                            },
                            gfMzLi7K4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(3069.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "36.4583px",
                                src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                                srcSet:
                                  "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                              },
                            },
                          },
                          children: e(x, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 3044,
                              intrinsicWidth: 3363,
                              loading: r(2536),
                              pixelHeight: 3044,
                              pixelWidth: 3363,
                              sizes: "116.0036px",
                              src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                              srcSet:
                                "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                            },
                            className: "framer-du4ido",
                            "data-framer-name": "Tools",
                            name: "Tools",
                            whileHover: B,
                            whileTap: Q,
                          }),
                        }),
                        e(m, {
                          breakpoint: c,
                          overrides: {
                            euNKnnJU1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(2467.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "80.6501px",
                                src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                                srcSet:
                                  "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                              },
                            },
                            gfMzLi7K4: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: r(3069.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "36.4583px",
                                src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                                srcSet:
                                  "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                              },
                            },
                          },
                          children: e(x, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 3044,
                              intrinsicWidth: 3363,
                              loading: r(2536),
                              pixelHeight: 3044,
                              pixelWidth: 3363,
                              sizes: "116.0036px",
                              src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                              srcSet:
                                "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                            },
                            className: "framer-1mvo6qu",
                            "data-framer-name": "Telegram",
                            name: "Telegram",
                            whileHover: B,
                            whileTap: Q,
                            onclick:"window.open('https://t.me/santagameoneth','_blank')"
                          }),
                        }),
                      ],
                    }),
                    e(m, {
                      breakpoint: c,
                      overrides: {
                        euNKnnJU1: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: r(2194.5),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                            srcSet:
                              "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                          },
                        },
                        gfMzLi7K4: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: r(3006.5),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                            srcSet:
                              "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                          },
                        },
                      },
                      children: e(x, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1080,
                          intrinsicWidth: 1920,
                          loading: r(2464),
                          pixelHeight: 1080,
                          pixelWidth: 1920,
                          sizes: "100vw",
                          src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                          srcSet:
                            "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                        },
                        className: "framer-1kksl88",
                        "data-framer-name": "Tokenomics kraci",
                        name: "Tokenomics kraci",
                      }),
                    }),
                  ],
                }),
                e(w, {
                  __framer__loop: Nr,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 1.9,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: Dr,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-85),
                    pixelHeight: 1241,
                    pixelWidth: 1419,
                    sizes: "41px",
                    src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                    srcSet:
                      "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                  },
                  className: "framer-xzuegl",
                  "data-framer-name": "Image",
                  name: "Image",
                  transformTemplate: K,
                }),
                e(w, {
                  __framer__loop: Tr,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 2.7,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: H,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-85),
                    pixelHeight: 1241,
                    pixelWidth: 1419,
                    sizes: "25.0556px",
                    src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                    srcSet:
                      "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                  },
                  className: "framer-6u98o7",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
                e(w, {
                  __framer__loop: Cr,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.6,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: H,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-53),
                    pixelHeight: 1241,
                    pixelWidth: 1419,
                    sizes: "19px",
                    src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                    srcSet:
                      "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                  },
                  className: "framer-1ktgc05",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
                e(w, {
                  __framer__loop: Qr,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.3,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: H,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-76),
                    pixelHeight: 1241,
                    pixelWidth: 1419,
                    sizes: "41px",
                    src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                    srcSet:
                      "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                  },
                  className: "framer-1puwkuv",
                  "data-framer-name": "Image",
                  name: "Image",
                  transformTemplate: K,
                }),
                e(w, {
                  __framer__loop: M,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.3,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: H,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-51),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "13px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                    srcSet:
                      "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-14ncdi2",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
                e(w, {
                  __framer__loop: M,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 4.8,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: ie,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-51),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "29.24px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                    srcSet:
                      "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-12s11ms",
                  "data-framer-name": "Image",
                  name: "Image",
                  transformTemplate: K,
                }),
                e(w, {
                  __framer__loop: M,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.6,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: ie,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-51),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "18.06px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                    srcSet:
                      "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-2qdrdl",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
                e(w, {
                  __framer__loop: M,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.6,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: ie,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-51),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "18px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                    srcSet:
                      "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-vaszil",
                  "data-framer-name": "Image",
                  name: "Image",
                  transformTemplate: K,
                }),
                e(w, {
                  __framer__loop: Hr,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 2.1,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: H,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 112,
                    intrinsicWidth: 136,
                    loading: r(-76),
                    pixelHeight: 1241,
                    pixelWidth: 1419,
                    sizes: "34px",
                    src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                    srcSet:
                      "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                  },
                  className: "framer-1vcvokw",
                  "data-framer-name": "Image",
                  name: "Image",
                }),
              ],
            }),
            e("div", { className: z(We, ...y), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Yr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${se.bodyClassName}-framer-vFcpX { background: rgb(83, 0, 147); }`,
    ".framer-vFcpX.framer-zbmuyv, .framer-vFcpX .framer-zbmuyv { display: block; }",
    ".framer-vFcpX.framer-10ckajh { align-content: center; align-items: center; background-color: #530093; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-vFcpX .framer-ymynud { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-myspu7, .framer-vFcpX .framer-z4jx57 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-vFcpX .framer-1xcl5j7 { aspect-ratio: 37.5 / 1; bottom: -9px; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 6; }",
    ".framer-vFcpX .framer-13eytdk { align-content: center; align-items: center; aspect-ratio: 1.073394495412844 / 1; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 109px); justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; text-decoration: none; top: 0px; width: 117px; z-index: 4; }",
    ".framer-vFcpX .framer-w9ype2 { aspect-ratio: 1.0123456790123457 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 182px); left: -70px; overflow: hidden; position: absolute; top: -77px; width: 184px; }",
    ".framer-vFcpX .framer-3fqbt { align-content: center; align-items: center; aspect-ratio: 1.1063829787234043 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 94px); justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; width: 104px; z-index: 4; }",
    ".framer-vFcpX .framer-1hydfyq { aspect-ratio: 1.0123456790123457 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 169px); overflow: hidden; position: absolute; right: -70px; top: -77px; width: 171px; }",
    ".framer-vFcpX .framer-193eg8b-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: -10px; z-index: 1; }",
    ".framer-vFcpX .framer-54yn6r { aspect-ratio: 5.633802816901408 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 213px); overflow: visible; position: relative; width: 100%; z-index: 1; }",
    ".framer-vFcpX .framer-z2d4kc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 40px 0px 0px 0px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-vFcpX .framer-2monsg, .framer-vFcpX .framer-1byhu97 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-vFcpX .framer-53upzj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-1j7g3ou, .framer-vFcpX .framer-1ekwa43 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-vFcpX .framer-19qgxob, .framer-vFcpX .framer-1l7zihy, .framer-vFcpX .framer-fd37b { aspect-ratio: 1.516061084781464 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 393px); overflow: visible; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-vt5yve { align-content: center; align-items: center; aspect-ratio: 1.516061084781464 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 393px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-1o6lw9j { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 3.75 / 1; background-color: #73c5ff; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 33px); justify-content: center; left: 47%; overflow: hidden; padding: 0px; position: absolute; top: 66%; transform: translate(-50%, -50%); width: 125px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-vFcpX .framer-1fvecc4 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 8; }",
    ".framer-vFcpX .framer-fvwqy5 { align-content: center; align-items: center; aspect-ratio: 1.035769828926905 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 643px); justify-content: center; left: 50%; overflow: visible; padding: 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 666px; z-index: 8; }",
    ".framer-vFcpX .framer-xikgt7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 454px; }",
    ".framer-vFcpX .framer-1d5f7g2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-vFcpX .framer-trrk0y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 20px; position: absolute; top: 106px; transform: translateX(-50%); width: 454px; z-index: 1; }",
    ".framer-vFcpX .framer-1l2rxbh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-1kzc9yf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    '.framer-vFcpX .framer-bw7bsr { --framer-input-background: #ffffff; --framer-input-border-bottom-width: 2px; --framer-input-border-color: #000000; --framer-input-border-left-width: 2px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 2px; --framer-input-border-style: solid; --framer-input-border-top-width: 2px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #000000; --framer-input-font-family: "Kavoon"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: rgba(0, 0, 0, 0.37); flex: none; height: 40px; position: relative; width: 100%; }',
    ".framer-vFcpX .framer-gpmrfe-container { flex: none; height: 40px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-yguxd5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 400px 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-1yqo8b1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-vFcpX .framer-1qyy3as, .framer-vFcpX .framer-5uu77v, .framer-vFcpX .framer-du4ido, .framer-vFcpX .framer-1mvo6qu { aspect-ratio: 1.104796320630749 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 105px); overflow: visible; position: relative; width: 116px; }",
    ".framer-vFcpX .framer-1kksl88 { -webkit-user-select: none; aspect-ratio: 2.079722703639515 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 577px); left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 1; }",
    ".framer-vFcpX .framer-xzuegl { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); left: 25%; overflow: visible; pointer-events: none; position: absolute; top: -85px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 2; }",
    ".framer-vFcpX .framer-6u98o7 { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 116px; overflow: visible; pointer-events: none; position: absolute; top: -85px; user-select: none; width: 25px; z-index: 2; }",
    ".framer-vFcpX .framer-1ktgc05 { -webkit-user-select: none; aspect-ratio: 1.1176470588235294 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); overflow: visible; pointer-events: none; position: absolute; right: 188px; top: -53px; user-select: none; width: 19px; z-index: 2; }",
    ".framer-vFcpX .framer-1puwkuv { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 45%; overflow: visible; pointer-events: none; position: absolute; top: -76px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 2; }",
    ".framer-vFcpX .framer-14ncdi2 { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); overflow: visible; pointer-events: none; position: absolute; right: 475px; top: -51px; user-select: none; width: 13px; z-index: 2; }",
    ".framer-vFcpX .framer-12s11ms { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 86%; overflow: visible; pointer-events: none; position: absolute; top: -51px; transform: translateX(-50%); user-select: none; width: 29px; z-index: 2; }",
    ".framer-vFcpX .framer-2qdrdl { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); overflow: visible; pointer-events: none; position: absolute; right: 258px; top: -51px; user-select: none; width: 18px; z-index: 2; }",
    ".framer-vFcpX .framer-vaszil { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 20%; overflow: visible; pointer-events: none; position: absolute; top: -51px; transform: translateX(-50%); user-select: none; width: 18px; z-index: 2; }",
    ".framer-vFcpX .framer-1vcvokw { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); overflow: visible; pointer-events: none; position: absolute; right: 481px; top: -76px; user-select: none; width: 34px; z-index: 2; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-vFcpX.framer-10ckajh, .framer-vFcpX .framer-ymynud, .framer-vFcpX .framer-myspu7, .framer-vFcpX .framer-z4jx57, .framer-vFcpX .framer-13eytdk, .framer-vFcpX .framer-3fqbt, .framer-vFcpX .framer-z2d4kc, .framer-vFcpX .framer-53upzj, .framer-vFcpX .framer-1j7g3ou, .framer-vFcpX .framer-1ekwa43, .framer-vFcpX .framer-vt5yve, .framer-vFcpX .framer-1o6lw9j, .framer-vFcpX .framer-fvwqy5, .framer-vFcpX .framer-xikgt7, .framer-vFcpX .framer-trrk0y, .framer-vFcpX .framer-1l2rxbh, .framer-vFcpX .framer-yguxd5, .framer-vFcpX .framer-1yqo8b1 { gap: 0px; } .framer-vFcpX.framer-10ckajh > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-vFcpX.framer-10ckajh > :first-child, .framer-vFcpX .framer-z2d4kc > :first-child, .framer-vFcpX .framer-1j7g3ou > :first-child, .framer-vFcpX .framer-1ekwa43 > :first-child, .framer-vFcpX .framer-1o6lw9j > :first-child, .framer-vFcpX .framer-trrk0y > :first-child, .framer-vFcpX .framer-1l2rxbh > :first-child, .framer-vFcpX .framer-yguxd5 > :first-child { margin-top: 0px; } .framer-vFcpX.framer-10ckajh > :last-child, .framer-vFcpX .framer-z2d4kc > :last-child, .framer-vFcpX .framer-1j7g3ou > :last-child, .framer-vFcpX .framer-1ekwa43 > :last-child, .framer-vFcpX .framer-1o6lw9j > :last-child, .framer-vFcpX .framer-trrk0y > :last-child, .framer-vFcpX .framer-1l2rxbh > :last-child, .framer-vFcpX .framer-yguxd5 > :last-child { margin-bottom: 0px; } .framer-vFcpX .framer-ymynud > *, .framer-vFcpX .framer-myspu7 > *, .framer-vFcpX .framer-z4jx57 > *, .framer-vFcpX .framer-13eytdk > *, .framer-vFcpX .framer-3fqbt > *, .framer-vFcpX .framer-53upzj > *, .framer-vFcpX .framer-vt5yve > *, .framer-vFcpX .framer-fvwqy5 > *, .framer-vFcpX .framer-xikgt7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vFcpX .framer-ymynud > :first-child, .framer-vFcpX .framer-myspu7 > :first-child, .framer-vFcpX .framer-z4jx57 > :first-child, .framer-vFcpX .framer-13eytdk > :first-child, .framer-vFcpX .framer-3fqbt > :first-child, .framer-vFcpX .framer-53upzj > :first-child, .framer-vFcpX .framer-vt5yve > :first-child, .framer-vFcpX .framer-fvwqy5 > :first-child, .framer-vFcpX .framer-xikgt7 > :first-child, .framer-vFcpX .framer-1yqo8b1 > :first-child { margin-left: 0px; } .framer-vFcpX .framer-ymynud > :last-child, .framer-vFcpX .framer-myspu7 > :last-child, .framer-vFcpX .framer-z4jx57 > :last-child, .framer-vFcpX .framer-13eytdk > :last-child, .framer-vFcpX .framer-3fqbt > :last-child, .framer-vFcpX .framer-53upzj > :last-child, .framer-vFcpX .framer-vt5yve > :last-child, .framer-vFcpX .framer-fvwqy5 > :last-child, .framer-vFcpX .framer-xikgt7 > :last-child, .framer-vFcpX .framer-1yqo8b1 > :last-child { margin-right: 0px; } .framer-vFcpX .framer-z2d4kc > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-vFcpX .framer-1j7g3ou > *, .framer-vFcpX .framer-1ekwa43 > * { margin: 0px; margin-bottom: calc(46px / 2); margin-top: calc(46px / 2); } .framer-vFcpX .framer-1o6lw9j > *, .framer-vFcpX .framer-1l2rxbh > *, .framer-vFcpX .framer-yguxd5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-vFcpX .framer-trrk0y > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-vFcpX .framer-1yqo8b1 > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${se.bodyClassName}-framer-vFcpX { background: rgb(83, 0, 147); } .framer-vFcpX.framer-10ckajh { width: 810px; } .framer-vFcpX .framer-ymynud { height: min-content; } .framer-vFcpX .framer-1xcl5j7 { bottom: -2px; height: var(--framer-aspect-ratio-supported, 22px); } .framer-vFcpX .framer-13eytdk { height: var(--framer-aspect-ratio-supported, 98px); width: 105px; } .framer-vFcpX .framer-w9ype2 { height: var(--framer-aspect-ratio-supported, 171px); width: 173px; } .framer-vFcpX .framer-3fqbt { height: var(--framer-aspect-ratio-supported, 95px); width: 105px; } .framer-vFcpX .framer-1hydfyq { width: 171px; } .framer-vFcpX .framer-54yn6r { height: var(--framer-aspect-ratio-supported, 144px); } .framer-vFcpX .framer-19qgxob, .framer-vFcpX .framer-1l7zihy, .framer-vFcpX .framer-vt5yve, .framer-vFcpX .framer-fd37b { height: var(--framer-aspect-ratio-supported, 264px); } .framer-vFcpX .framer-yguxd5 { height: 385px; padding: 50px 0px 200px 0px; } .framer-vFcpX .framer-1qyy3as, .framer-vFcpX .framer-5uu77v, .framer-vFcpX .framer-du4ido, .framer-vFcpX .framer-1mvo6qu { height: var(--framer-aspect-ratio-supported, 73px); width: 81px; } .framer-vFcpX .framer-1kksl88 { height: var(--framer-aspect-ratio-supported, 390px); }}`,
    `@media (max-width: 809px) { .${se.bodyClassName}-framer-vFcpX { background: rgb(83, 0, 147); } .framer-vFcpX.framer-10ckajh { width: 390px; } .framer-vFcpX .framer-ymynud { height: min-content; } .framer-vFcpX .framer-1xcl5j7 { bottom: -1px; height: var(--framer-aspect-ratio-supported, 11px); } .framer-vFcpX .framer-13eytdk { height: var(--framer-aspect-ratio-supported, 67px); width: 72px; } .framer-vFcpX .framer-w9ype2 { height: var(--framer-aspect-ratio-supported, 119px); left: -48px; top: -54px; width: 120px; } .framer-vFcpX .framer-3fqbt { height: var(--framer-aspect-ratio-supported, 67px); width: 74px; } .framer-vFcpX .framer-1hydfyq { height: var(--framer-aspect-ratio-supported, 119px); right: -50px; top: -54px; width: 120px; } .framer-vFcpX .framer-54yn6r { height: var(--framer-aspect-ratio-supported, 69px); } .framer-vFcpX .framer-z2d4kc { padding: 50px 0px 0px 0px; } .framer-vFcpX .framer-53upzj { flex-direction: column; gap: 0px; } .framer-vFcpX .framer-1j7g3ou, .framer-vFcpX .framer-1ekwa43 { flex: none; width: 100%; } .framer-vFcpX .framer-19qgxob, .framer-vFcpX .framer-vt5yve { height: var(--framer-aspect-ratio-supported, 258px); } .framer-vFcpX .framer-1l7zihy, .framer-vFcpX .framer-fd37b { height: var(--framer-aspect-ratio-supported, 257px); } .framer-vFcpX .framer-fvwqy5 { height: var(--framer-aspect-ratio-supported, 357px); left: 10px; right: 10px; transform: translateY(-50%); width: unset; } .framer-vFcpX .framer-xikgt7 { width: 249px; } .framer-vFcpX .framer-trrk0y { gap: 7px; left: 15px; padding: 20px 25px 20px 25px; right: 15px; top: 33px; transform: unset; width: unset; } .framer-vFcpX .framer-1l2rxbh { gap: 3px; } .framer-vFcpX .framer-bw7bsr { --framer-input-font-size: 11px; --framer-input-placeholder-color: rgba(0, 0, 0, 0.59); height: 34px; } .framer-vFcpX .framer-gpmrfe-container { height: 35px; } .framer-vFcpX .framer-yguxd5 { height: 187px; padding: 0px 0px 100px 0px; } .framer-vFcpX .framer-1yqo8b1 { gap: 13px; } .framer-vFcpX .framer-1qyy3as, .framer-vFcpX .framer-5uu77v, .framer-vFcpX .framer-du4ido, .framer-vFcpX .framer-1mvo6qu { height: var(--framer-aspect-ratio-supported, 33px); width: 36px; } .framer-vFcpX .framer-1kksl88 { aspect-ratio: 1.7668161434977578 / 1; height: var(--framer-aspect-ratio-supported, 221px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-vFcpX .framer-53upzj, .framer-vFcpX .framer-trrk0y, .framer-vFcpX .framer-1l2rxbh, .framer-vFcpX .framer-1yqo8b1 { gap: 0px; } .framer-vFcpX .framer-53upzj > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-vFcpX .framer-53upzj > :first-child, .framer-vFcpX .framer-trrk0y > :first-child, .framer-vFcpX .framer-1l2rxbh > :first-child { margin-top: 0px; } .framer-vFcpX .framer-53upzj > :last-child, .framer-vFcpX .framer-trrk0y > :last-child, .framer-vFcpX .framer-1l2rxbh > :last-child { margin-bottom: 0px; } .framer-vFcpX .framer-trrk0y > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-vFcpX .framer-1l2rxbh > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-vFcpX .framer-1yqo8b1 > * { margin: 0px; margin-left: calc(13px / 2); margin-right: calc(13px / 2); } .framer-vFcpX .framer-1yqo8b1 > :first-child { margin-left: 0px; } .framer-vFcpX .framer-1yqo8b1 > :last-child { margin-right: 0px; } }}`,
    ...Ye,
    '.framer-vFcpX[data-border="true"]::after, .framer-vFcpX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  O = G(Rr, Yr, "framer-vFcpX"),
  dt = O;
O.displayName = "Home";
O.defaultProps = { height: 2596, width: 1200 };
V(
  O,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Rubik Wet Paint",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rubikwetpaint/v2/HTx0L20uMDGHgdULcpTF3Oe4d_-F_jz313DuvQ.woff2",
          weight: "400",
        },
        {
          family: "Kavoon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kavoon/v23/pxiFyp4_scRYhlU4Mbr6f1pdEQ.woff2",
          weight: "400",
        },
        {
          family: "Rubik Spray Paint",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rubikspraypaint/v1/WnzhHBAoeBPUDTB4EWR82y6EXWPH-Ro7QoaBZQxP.woff2",
          weight: "400",
        },
      ],
    },
    ...cr,
    ...mr,
    ...He(Re),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var gt = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerTEBMoXu3n",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicHeight: "2596",
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"euNKnnJU1":{"layout":["fixed","auto"]},"gfMzLi7K4":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { gt as __FramerMetadata__, dt as default };
//# sourceMappingURL=1qKmyQTr4EZzPHqHwBx_MSKatB47OxYtzDzxgZhbHJk.R4MKK2FO.mjs.map
