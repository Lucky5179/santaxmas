import { a as Cr } from "./chunk-MPD3PBTO.mjs";
import {
  a as ut,
  b as wt,
  c as xt,
  d as vt,
  e as yt,
  f as bt,
  g as wr,
  h as er,
  i as xr,
  j as vr,
  k as yr,
  l as _t,
  m as br,
  n as Ct,
  o as _r,
} from "./chunk-EP2RMY2N.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as ye,
  A as hr,
  Ba as ht,
  C as Wr,
  Ca as l,
  Da as ee,
  Ea as O,
  J as Je,
  K as $,
  M as We,
  N as ke,
  Q as c,
  T as B,
  V as W,
  Y as Ee,
  Z as le,
  _ as H,
  b,
  ba as D,
  ca as pt,
  d as Y,
  da as ft,
  f as je,
  g as se,
  ga as q,
  h as _e,
  i as G,
  j as st,
  ja as S,
  k as Z,
  ka as Te,
  l as R,
  m as ze,
  n as pe,
  na as ur,
  o as Qe,
  p as e,
  q as v,
  r as lt,
  ra as Ie,
  sa as dt,
  t as L,
  u as m,
  ua as gt,
  v as Yr,
  va as ce,
  w as K,
  x as ct,
  y as Jr,
  ya as P,
  z as mt,
  za as te,
} from "./chunk-YPFMCUDL.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-I6PKUJFK.mjs";
import { b as J } from "./chunk-Y5FTINFI.mjs";
function Le(r) {
  let {
      label: a,
      content: o,
      fill: s,
      color: f,
      style: g,
      onClick: d,
      font: x,
      hoverOptions: u,
      ...n
    } = r,
    C = vr({ fontWeight: 500, ...n }),
    k = yr(r),
    F = br(r),
    w = je(() => {
      var _;
      (_ = J.clipboard) === null || _ === void 0 || _.writeText(o), d?.();
    }, [d, o]);
  return e(m.button, {
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      width: "max-content",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      letterSpacing: "-0.2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: s,
      borderRadius: k,
      cursor: "pointer",
      padding: F,
      color: f,
      ...C,
      ...x,
      ...g,
    },
    onClick: w,
    ...n,
    whileHover: u,
    transition: u?.transition,
    children: a,
  });
}
B(Le, {
  content: {
    type: c.String,
    title: "Content",
    displayTextArea: !0,
    description: "When clicked, this content will be copied to the clipboard.",
  },
  label: { type: c.String, title: "Label", defaultValue: "Copy to Clipboard" },
  fill: { type: c.Color, title: "Fill", defaultValue: "#06F" },
  color: { type: c.Color, title: "Text", defaultValue: "#fff" },
  font: { type: c.Font, controls: "extended", defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: c.Object,
    title: "Hover",
    buttonTitle: "Effect",
    optional: !0,
    controls: {
      scale: {
        type: c.Number,
        title: "Scale",
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: c.Color,
        title: "Fill",
        defaultValue: "#0088FF",
        optional: !0,
      },
      color: {
        type: c.Color,
        title: "Color",
        defaultValue: "#FFF",
        optional: !0,
      },
      transition: {
        type: c.Transition,
        title: "Transition",
        defaultValue: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: c.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
    defaultValue: 10,
  },
  borderRadius: {
    title: "Radius",
    type: c.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
    defaultValue: 50,
  },
  ...xt,
});
var St = "Expected a function",
  sa = Math.max,
  la = Math.min,
  kt = 0 / 0,
  ca = /^\s+|\s+$/g,
  ma = /^[-+]0x[0-9a-f]+$/i,
  pa = /^0b[01]+$/i,
  fa = /^0o[0-7]+$/i,
  da = parseInt,
  Or = function () {
    return Date.now();
  };
function kr(r) {
  var a = typeof r;
  return r != null && (a == "object" || a == "function");
}
function Ft(r) {
  if (typeof r == "number") return r;
  if (typeof r == "symbol") return kt;
  if (kr(r)) {
    var a = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = kr(a) ? a + "" : a;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = r.replace(ca, "");
  var o = pa.test(r);
  return o || fa.test(r) ? da(r.slice(2), o ? 2 : 8) : ma.test(r) ? kt : +r;
}
function ga(r, a, o) {
  var s,
    f,
    g,
    d,
    x,
    u,
    n = 0,
    C = !1,
    k = !1,
    F = !0;
  if (typeof r != "function") throw new TypeError(St);
  (a = Ft(a) || 0),
    kr(o) &&
      ((C = !!o.leading),
      (k = "maxWait" in o),
      (g = k ? sa(Ft(o.maxWait) || 0, a) : g),
      (F = "trailing" in o ? !!o.trailing : F));
  function w(h) {
    var t = s,
      y = f;
    return (s = f = void 0), (n = h), (d = r.apply(y, t)), d;
  }
  function _(h) {
    return (n = h), (x = setTimeout(T, a)), C ? w(h) : d;
  }
  function N(h) {
    var t = h - u,
      y = h - n,
      he = a - t;
    return k ? la(he, g - y) : he;
  }
  function j(h) {
    var t = h - u,
      y = h - n;
    return u === void 0 || t >= a || t < 0 || (k && y >= g);
  }
  function T() {
    var h = Or();
    if (j(h)) return p(h);
    x = setTimeout(T, N(h));
  }
  function p(h) {
    return (x = void 0), F && s ? w(h) : ((s = f = void 0), d);
  }
  function M() {
    x !== void 0 && clearTimeout(x), (n = 0), (s = u = f = x = void 0);
  }
  function Q() {
    return x === void 0 ? d : p(Or());
  }
  function I() {
    var h = Or(),
      t = j(h);
    if (((s = arguments), (f = this), (u = h), t)) {
      if (x === void 0) return _(u);
      if (k) return clearTimeout(x), (x = setTimeout(T, a)), w(u);
    }
    return x === void 0 && (x = setTimeout(T, a)), d;
  }
  return (I.cancel = M), (I.flush = Q), I;
}
function zt(r, a, o) {
  var s = !0,
    f = !0;
  if (typeof r != "function") throw new TypeError(St);
  return (
    kr(o) &&
      ((s = "leading" in o ? !!o.leading : s),
      (f = "trailing" in o ? !!o.trailing : f)),
    ga(r, a, { leading: s, maxWait: a, trailing: f })
  );
}
var Pe;
(function (r) {
  (r.Hide = "Hide"), (r.Hover = "Hover"), (r.Show = "Show");
})(Pe || (Pe = {}));
var Oe = D(
  function (a) {
    let {
        value: o,
        trackHeight: s,
        fillColor: f,
        focusColor: g,
        min: d,
        max: x,
        onChange: u,
        onChangeLive: n,
        onMax: C,
        onMin: k,
        trackColor: F,
        trackRadius: w,
        knobSize: _,
        knobColor: N,
        constrainKnob: j,
        shadow: T,
        shouldAnimateChange: p,
        transition: M,
        overdrag: Q,
        knobSetting: I,
        style: h,
      } = a,
      [t, y] = ze(!1),
      [he, ue] = ze(!1),
      we = ke.current() === ke.canvas,
      ge = p && !we,
      ne = j && I === Pe.Show,
      xe = I !== Pe.Hide,
      z = R(),
      i = 8,
      V = je(
        (E, Me) => {
          Ve(E),
            u && u(E),
            ge ? hr(Me, E, M) : requestAnimationFrame(() => Me.set(E));
        },
        [M, ge, u]
      ),
      U = xr(o, { onChange: V, transform: (E) => ct(E, [0, 100], [d, x]) }),
      be = Jr(U, [d, x], ["0%", "100%"]),
      fr = Jr(U, [d, x], [0, 1]),
      Ve = je(
        zt((E) => {
          var Me;
          !((Me = z.current) === null || Me === void 0) &&
            Me.value &&
            (z.current.value = E);
        }, 100),
        [z]
      );
    wr(U, (E) => {
      bt(o) && Ve(E), C && E >= x && C(), k && E <= d && k(), n && n(E);
    });
    let dr = (E) => {
        V(parseFloat(E.target.value), U);
      },
      Ne = (E) => {
        parseFloat(E.target.value) !== 0 && V(parseFloat(E.target.value), U);
      },
      Er = () => {},
      Ke = xe ? _ + i : i,
      Ye = Math.max(_ + i, s);
    return v("div", {
      className: "framer-default-slider",
      onMouseEnter: () => y(!0),
      onMouseLeave: () => y(!1),
      style: {
        position: "relative",
        ...h,
        alignItems: "center",
        justifyContent: "flex-start",
        border: `0px solid ${g}`,
        "--framer-default-slider-height": Ye,
        "--framer-default-slider-width": Ke,
      },
      children: [
        e("input", {
          ref: z,
          style: {
            flexShrink: 0,
            minHeight: Ye,
            opacity: 0,
            margin: 0,
            display: "flex",
            ...h,
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            ...(!ne && { width: `calc(100% + ${Ke}px)`, marginLeft: -Ke / 2 }),
          },
          onFocus: () => ue(!0),
          onBlur: () => ue(!1),
          type: "range",
          min: d,
          max: x,
          defaultValue: -1,
          step: "any",
          onChange: dr,
          onMouseDown: Ne,
          onMouseUp: Er,
        }),
        e("div", {
          style: {
            background: F,
            position: "absolute",
            top: `calc(50% - ${Math.ceil(s / 2)}px)`,
            borderRadius: w,
            display: "flex",
            height: s,
            width: "100%",
            transformOrigin: "left",
            pointerEvents: "none",
            overflow: "hidden",
          },
          children: e(m.div, {
            style: {
              height: s,
              width: "100%",
              background: f,
              scaleX: fr,
              position: "absolute",
              top: `calc(50% - ${Math.ceil(s / 2)}px)`,
              transformOrigin: "left",
              pointerEvents: "none",
            },
          }),
        }),
        e(m.div, {
          style: {
            x: be,
            position: "absolute",
            display: "flex",
            top: `calc(50% - ${Math.floor(_ / 2)}px)`,
            pointerEvents: "none",
            ...(ne
              ? { width: `calc(100% - ${_}px`, left: 0 }
              : { width: "100%", left: -_ / 2 }),
          },
          children: e(m.div, {
            initial: !1,
            animate: { scale: (t && I === Pe.Hover) || I === Pe.Show ? 1 : 0 },
            transition: { type: "spring", stiffness: 900, damping: 40 },
            style: {
              transformOrigin: "50% 50%",
              width: _,
              height: _,
              borderRadius: "50%",
              background: N,
              pointerEvents: "none",
              boxShadow: `0px 1px 2px 0px ${T}, 
                                0px 2px 4px 0px ${T}, 
                                0px 4px 8px 0px ${T}`,
            },
          }),
        }),
      ],
    });
  },
  [
    ".framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}",
    ".framer-default-slider input[type=range]:focus { outline: none; }",
    ".framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }",
    ".framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
  ]
);
Oe.displayName = "Slider";
Oe.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: "#09F",
  trackColor: "#DDD",
  knobColor: "#FFF",
  focusColor: "rgba(0, 153, 255,0)",
  shadow: "rgba(0,0,0,0.1)",
  knobSize: 20,
  overdrag: !0,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: Pe.Show,
  constrainKnob: !1,
  transition: { type: "spring", delay: 0, stiffness: 750, damping: 50 },
  shouldAnimateChange: !0,
};
B(Oe, {
  fillColor: { title: "Tint", type: c.Color },
  trackColor: { title: "Track", type: c.Color },
  knobColor: { title: "Knob", type: c.Color },
  shadow: { type: c.Color, title: "Shadow" },
  shouldAnimateChange: {
    type: c.Boolean,
    title: "Changes",
    enabledTitle: "Animate",
    disabledTitle: "Instant",
  },
  transition: { type: c.Transition, defaultValue: Oe.defaultProps.transition },
  knobSetting: {
    type: c.Enum,
    displaySegmentedControl: !0,
    title: "Knob",
    options: ["Hide", "Hover", "Show"],
  },
  constrainKnob: {
    type: c.Boolean,
    title: "Constrain",
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden: ({ knobSetting: r }) => r !== Pe.Show,
  },
  knobSize: {
    type: c.Number,
    title: "Knob",
    min: 10,
    max: 100,
    hidden: ({ knobSetting: r }) => r === Pe.Hide,
  },
  value: { type: c.Number, title: "Value", min: 0, max: 100, unit: "%" },
  trackHeight: { title: "Height", type: c.Number, min: 0 },
  min: { title: "Min", type: c.Number, displayStepper: !0 },
  trackRadius: {
    type: c.Number,
    displayStepper: !0,
    min: 0,
    max: 200,
    title: "Radius",
  },
  max: { title: "Max", type: c.Number, displayStepper: !0 },
  onChange: { type: c.EventHandler },
  onMax: { type: c.EventHandler },
  onMin: { type: c.EventHandler },
});
var Ht = (r) => r instanceof lt,
  At;
(function (r) {
  (r.Video = "Upload"), (r.Url = "URL");
})(At || (At = {}));
function ha(r) {
  let { currentTime: a, startTime: o } = r,
    [s, f] = ze("0:00");
  return (
    _e(() => {
      f(er(o));
    }, [o]),
    wr(a, (g) => {
      f(er(g));
    }),
    e(Qe, { children: s })
  );
}
var ua = (r) =>
    r.current &&
    !r.current.paused &&
    !r.current.ended &&
    r.current.readyState > 2,
  Be = D(
    function (a) {
      var o;
      let {
          playing: s,
          background: f,
          progressColor: g,
          trackHeight: d,
          gap: x,
          trackColor: u,
          srcUrl: n,
          srcType: C,
          srcFile: k,
          loop: F,
          font: w,
          autoPlay: _,
          progress: N,
          volume: j,
          showTime: T,
          showTrack: p,
          playPauseCursor: M,
          showPlayPause: Q,
          onTimeUpdate: I,
          onMetadata: h,
          onPlay: t,
          onPause: y,
          onEnd: he,
          pauseOnExit: ue,
          onPlayGlobalPauseOption: we,
        } = a,
        ge = "pointer";
      M
        ? (ge = M)
        : !(a == null || (o = a.style) === null || o === void 0) &&
          o.cursor &&
          (ge = a.style.cursor);
      let [ne, xe] = ze(!1),
        [z, i] = ze(0),
        V = R(),
        U = R({ ready: !1, animation: null }),
        be = xr(N, {
          transform: (X) => X * 0.01,
          onChange: (X, ve) => {
            V.current.duration &&
              ((V.current.currentTime = X * V.current.duration),
              E("motionHook"));
          },
        }),
        fr = br(a),
        Ve = yr(a),
        { fontSize: dr } = vr(a),
        Ne = ke.current() === ke.preview,
        Er = we === "pause",
        Ke = C === "URL" ? n : k,
        Ye = Ne && s,
        E = je(
          (X) => {
            var ve, $e;
            let nt = V.current.duration,
              Dr = V.current.currentTime;
            if (
              (($e = U.current) === null ||
                $e === void 0 ||
                (ve = $e.animation) === null ||
                ve === void 0 ||
                ve.stop(),
              Math.abs(Dr - be.get()) > 0.5 && be.set(Dr),
              !Ne)
            )
              return;
            let qr = ua(V);
            ne !== qr && xe(qr),
              qr &&
                Ne &&
                (U.current.animation = hr(be, nt, {
                  type: "tween",
                  ease: "linear",
                  duration: nt - Dr,
                }));
          },
          [Ne, ne]
        ),
        Me = () => {
          document.querySelectorAll(".framer-audio").forEach((ve) => {
            ve.pause();
          });
        },
        gr = () => {
          Ne && V.current.play().catch((X) => {});
        },
        it = () => {
          var X, ve;
          V.current.pause(),
            (ve = U.current) === null ||
              ve === void 0 ||
              (X = ve.animation) === null ||
              X === void 0 ||
              X.stop();
        },
        ra = () => {
          h && h({ duration: V.current.duration }), i(V.current.duration);
        },
        ta = () => {
          Ht(N) || (V.current.currentTime = N * 0.01 * V.current.duration);
        },
        aa = () => {
          U.current.ready || (Ye && gr(), (U.current.ready = !0), ta());
        },
        ia = (X) => {
          V.current.currentTime &&
            ((V.current.currentTime = X), E("handleSeek"));
        },
        oa = () => {
          he && he();
        },
        na = () => {
          Er && Me(), gr();
        };
      _e(() => {
        Ne ? (s === !0 ? gr() : it()) : xe(s === !0);
      }, [s]),
        _e(() => {
          var X;
          !((X = V.current) === null || X === void 0) &&
            X.duration &&
            i(V.current.duration);
        }, []),
        _e(() => {
          U.current.ready && ne && t ? t() : U.current.ready && y && y();
        }, [ne]),
        _e(() => {
          V.current.volume = j / 100;
        }, [j]),
        _e(() => {
          U.current.ready = !1;
        }, [k, C, n]),
        vt(() => {
          Ye && gr();
        }),
        yt(() => {
          ue && V.current.pause();
        }),
        mt(be, "change", (X) => {
          var ve;
          let $e =
            !((ve = V.current) === null || ve === void 0) && ve.duration
              ? (X / V.current.duration) * 100
              : null;
          I && I(X, $e, er(X));
        });
      let ot = { marginRight: T || p ? x : 0, flexShrink: 0, cursor: ge };
      return v("div", {
        style: {
          ...wt,
          position: "relative",
          overflow: "hidden",
          background: f,
          padding: fr,
          borderRadius: Ve,
        },
        children: [
          e("audio", {
            src: Ke,
            loop: F,
            className: "framer-audio",
            ref: V,
            preload: "metadata",
            autoPlay: Ye,
            onLoadedMetadata: ra,
            onCanPlayThrough: aa,
            onPlaying: () => E("playingEvent"),
            onPlay: () => E("playEvent"),
            onSeeked: () => E("seekEvent"),
            onPause: () => E("pauseEvent"),
            onEnded: () => oa(),
          }),
          Q &&
            e(Qe, {
              children: ne
                ? e(xa, {
                    width: 16,
                    whileTap: { scale: 0.9 },
                    onClick: () => it(),
                    style: ot,
                    "aria-label": "pause audio",
                  })
                : e(wa, {
                    width: 16,
                    whileTap: { scale: 0.9 },
                    onClick: na,
                    style: ot,
                    "aria-label": "play audio",
                  }),
            }),
          T &&
            v("p", {
              style: {
                userSelect: "none",
                color: "#333",
                fontWeight: 500,
                letterSpacing: -0.25,
                margin: 0,
                flexShrink: 0,
                fontFamily: ut,
                fontVariantNumeric: "tabular-nums",
                marginRight: p ? x : 0,
                ...w,
              },
              children: [
                e(ha, {
                  startTime: z * (Ht(N) ? N.get() : N * 0.01),
                  currentTime: be,
                }),
                e("span", { style: { padding: "0 2px" }, children: "/" }),
                z > 0 ? er(z) : "1:34",
              ],
            }),
          p &&
            e(Oe, {
              style: { width: "100%" },
              value: be,
              fillColor: g,
              knobSetting: "Hover",
              shadow: "rgba(0,0,0,0)",
              knobSize: 10,
              knobColor: g,
              onChange: ia,
              shouldAnimateChange: !1,
              min: 0,
              max: z,
              trackColor: u,
            }),
        ],
      });
    },
    [
      ".framer-audio-icon { outline: none; }",
      ".framer-audio-icons:focus-visible { outline: auto; }",
    ]
  );
Be.defaultProps = {
  background: "#EBEBEB",
  trackColor: "#FFFFFF",
  font: { fontSize: 12 },
  progressColor: "#333333",
  srcUrl:
    "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
  srcType: "URL",
  pauseOnExit: !0,
  borderRadius: 8,
  padding: 15,
  progress: 0,
  volume: 25,
  loop: !1,
  playing: !0,
  autoPlay: !0,
  showTime: !0,
  showTrack: !0,
  showPlayPause: !0,
  onPlayGlobalPauseOption: "continue",
  trackHeight: 4,
  gap: 15,
  height: 50,
  width: 240,
};
B(Be, {
  srcType: {
    type: c.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: c.String,
    title: " ",
    placeholder: ".../example.mp4",
    hidden(r) {
      return r.srcType === "Upload";
    },
  },
  srcFile: {
    type: c.File,
    title: " ",
    allowedFileTypes: ["mp4", "mp3", "wav", "m4a"],
    hidden(r) {
      return r.srcType === "URL";
    },
  },
  playing: {
    title: "Playing",
    type: c.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  loop: {
    title: "Loop",
    type: c.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  progress: { title: "Progress", type: c.Number, max: 100, min: 0, unit: "%" },
  volume: { type: c.Number, max: 100, min: 0, unit: "%" },
  progressColor: {
    title: "Progress",
    type: c.Color,
    defaultValue: Be.defaultProps.progressColor,
  },
  trackColor: {
    title: "Track",
    type: c.Color,
    defaultValue: Be.defaultProps.trackColor,
  },
  background: {
    title: "Player",
    type: c.Color,
    defaultValue: Be.defaultProps.background,
  },
  font: { title: "Font", type: c.Font, displayFontSize: !0 },
  ...Ct,
  ..._t,
  gap: { type: c.Number, min: 0, max: 100, displayStepper: !0 },
  showPlayPause: {
    type: c.Boolean,
    title: "Play/Pause",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  showTrack: {
    type: c.Boolean,
    title: "Track",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  showTime: {
    type: c.Boolean,
    title: "Time",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  pauseOnExit: {
    type: c.Boolean,
    title: "On Leave",
    enabledTitle: "Pause",
    disabledTitle: "Continue",
  },
  onPlayGlobalPauseOption: {
    type: c.Enum,
    title: "On Play",
    options: ["continue", "pause"],
    optionTitles: ["Continue All", "Pause All"],
  },
  onPlay: { type: c.EventHandler },
  onPause: { type: c.EventHandler },
  onEnd: { type: c.EventHandler },
  onTimeUpdate: { type: c.EventHandler },
});
function wa(r) {
  return e(m.svg, {
    ...r,
    className: "framer-audio-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    children: e("path", {
      d: "M 5.379 1.292 C 4.968 1.033 4.449 1.017 4.023 1.251 C 3.598 1.486 3.334 1.933 3.333 2.419 L 3.333 13.581 C 3.334 14.067 3.598 14.514 4.023 14.749 C 4.449 14.983 4.968 14.967 5.379 14.708 L 14.215 9.127 C 14.602 8.883 14.836 8.457 14.836 8 C 14.836 7.543 14.602 7.117 14.215 6.873 Z",
      fill: "#333",
    }),
  });
}
function xa(r) {
  return v(m.svg, {
    ...r,
    className: "framer-audio-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    children: [
      e("path", {
        d: "M 3 3 C 3 2.448 3.448 2 4 2 L 6 2 C 6.552 2 7 2.448 7 3 L 7 13 C 7 13.552 6.552 14 6 14 L 4 14 C 3.448 14 3 13.552 3 13 Z",
        fill: "#343434",
      }),
      e("path", {
        d: "M 9 3 C 9 2.448 9.448 2 10 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 13 C 13 13.552 12.552 14 12 14 L 10 14 C 9.448 14 9 13.552 9 13 Z",
        fill: "#343434",
      }),
    ],
  });
}
var va = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var ya = {
    ...va,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  Fr = Y((r, a) => e("div", { style: ya, ref: a }));
var Ur,
  Vt = (r) => {
    if (!Ur) {
      let a = new Map([
          [
            "bold",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z",
              })
            ),
          ],
          [
            "duotone",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
                opacity: "0.2",
              }),
              r.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              })
            ),
          ],
          [
            "fill",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z",
              })
            ),
          ],
          [
            "light",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z",
              })
            ),
          ],
          [
            "regular",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              })
            ),
          ],
          [
            "thin",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z",
              })
            ),
          ],
        ]),
        o = r.forwardRef((s, f) =>
          r.createElement("g", { ref: f, ...s }, a.get(s.weight))
        );
      (o.displayName = "House"), (Ur = o);
    }
    return Ur;
  };
var Sr = {
    onClick: { type: c.EventHandler },
    onMouseDown: { type: c.EventHandler },
    onMouseUp: { type: c.EventHandler },
    onMouseEnter: { type: c.EventHandler },
    onMouseLeave: { type: c.EventHandler },
  },
  ba = (r, a) => r.find((o) => o.toLowerCase().includes(a));
function zr(r, a, o = "", s, f) {
  let g = Z(() => {
    if (o == null || o?.length === 0) return null;
    let x = o.toLowerCase().replace(/-|\s/g, "");
    var u;
    return (u = f[x]) !== null && u !== void 0 ? u : ba(r, x);
  }, [s, o]);
  return a ? s : g;
}
var Xr = [
    "AddressBook",
    "AirTrafficControl",
    "Airplane",
    "AirplaneInFlight",
    "AirplaneLanding",
    "AirplaneTakeoff",
    "AirplaneTilt",
    "Airplay",
    "Alarm",
    "Alien",
    "AlignBottom",
    "AlignBottomSimple",
    "AlignCenterVertical",
    "AlignLeft",
    "AlignLeftSimple",
    "AlignRight",
    "AlignRightSimple",
    "AlignTop",
    "AlignTopSimple",
    "AmazonLogo",
    "Anchor",
    "AnchorSimple",
    "AndroidLogo",
    "AngularLogo",
    "Aperture",
    "AppStoreLogo",
    "AppWindow",
    "AppleLogo",
    "ApplePodcastsLogo",
    "Archive",
    "ArchiveBox",
    "ArchiveTray",
    "Armchair",
    "ArrowArcLeft",
    "ArrowArcRight",
    "ArrowBendDownLeft",
    "ArrowBendDownRight",
    "ArrowBendLeftDown",
    "ArrowBendLeftUp",
    "ArrowBendRightDown",
    "ArrowBendRightUp",
    "ArrowBendUpLeft",
    "ArrowBendUpRight",
    "ArrowCircleDown",
    "ArrowCircleDownLeft",
    "ArrowCircleDownRight",
    "ArrowCircleLeft",
    "ArrowCircleRight",
    "ArrowCircleUp",
    "ArrowCircleUpLeft",
    "ArrowCircleUpRight",
    "ArrowClockwise",
    "ArrowDown",
    "ArrowDownLeft",
    "ArrowDownRight",
    "ArrowElbowDownLeft",
    "ArrowElbowDownRight",
    "ArrowElbowLeft",
    "ArrowElbowLeftDown",
    "ArrowElbowLeftUp",
    "ArrowElbowRight",
    "ArrowElbowRightDown",
    "ArrowElbowRightUp",
    "ArrowElbowUpLeft",
    "ArrowElbowUpRight",
    "ArrowFatDown",
    "ArrowFatLeft",
    "ArrowFatLineDown",
    "ArrowFatLineLeft",
    "ArrowFatLineRight",
    "ArrowFatLineUp",
    "ArrowFatLinesDown",
    "ArrowFatLinesLeft",
    "ArrowFatLinesRight",
    "ArrowFatLinesUp",
    "ArrowFatRight",
    "ArrowFatUp",
    "ArrowLeft",
    "ArrowLineDown",
    "ArrowLineDownLeft",
    "ArrowLineDownRight",
    "ArrowLineLeft",
    "ArrowLineRight",
    "ArrowLineUp",
    "ArrowLineUpLeft",
    "ArrowLineUpRight",
    "ArrowRight",
    "ArrowSquareDown",
    "ArrowSquareDownLeft",
    "ArrowSquareDownRight",
    "ArrowSquareIn",
    "ArrowSquareLeft",
    "ArrowSquareOut",
    "ArrowSquareRight",
    "ArrowSquareUp",
    "ArrowSquareUpLeft",
    "ArrowSquareUpRight",
    "ArrowUDownLeft",
    "ArrowUDownRight",
    "ArrowULeftDown",
    "ArrowULeftUp",
    "ArrowURightDown",
    "ArrowURightUp",
    "ArrowUUpLeft",
    "ArrowUUpRight",
    "ArrowUp",
    "ArrowUpLeft",
    "ArrowUpRight",
    "ArrowsClockwise",
    "ArrowsDownUp",
    "ArrowsHorizontal",
    "ArrowsIn",
    "ArrowsInCardinal",
    "ArrowsInLineVertical",
    "ArrowsInSimple",
    "ArrowsLeftRight",
    "ArrowsMerge",
    "ArrowsOut",
    "ArrowsOutCardinal",
    "ArrowsOutSimple",
    "ArrowsSplit",
    "ArrowsVertical",
    "Article",
    "ArticleMedium",
    "ArticleNyTimes",
    "Asterisk",
    "AsteriskSimple",
    "At",
    "Atom",
    "Baby",
    "Backpack",
    "Backspace",
    "Bag",
    "BagSimple",
    "Balloon",
    "Bandaids",
    "Bank",
    "Barbell",
    "Barcode",
    "Barricade",
    "Baseball",
    "BaseballCap",
    "Basket",
    "Basketball",
    "Bathtub",
    "BatteryCharging",
    "BatteryEmpty",
    "BatteryFull",
    "BatteryHigh",
    "BatteryLow",
    "BatteryMedium",
    "BatteryPlus",
    "BatteryPlusVertical",
    "BatteryVerticalEmpty",
    "BatteryVerticalFull",
    "BatteryVerticalHigh",
    "BatteryVerticalLow",
    "BatteryWarning",
    "Bed",
    "BeerBottle",
    "BeerStein",
    "BehanceLogo",
    "Bell",
    "BellRinging",
    "BellSimple",
    "BellSimpleRinging",
    "BellSimpleSlash",
    "BellSimpleZ",
    "BellSlash",
    "BellZ",
    "BezierCurve",
    "Bicycle",
    "Binoculars",
    "Bird",
    "Bluetooth",
    "BluetoothConnected",
    "BluetoothSlash",
    "BluetoothX",
    "Boat",
    "Bone",
    "Book",
    "BookBookmark",
    "BookOpen",
    "BookOpenText",
    "Bookmark",
    "BookmarkSimple",
    "Bookmarks",
    "BookmarksSimple",
    "Books",
    "Boot",
    "BoundingBox",
    "BowlFood",
    "BracketsAngle",
    "BracketsCurly",
    "BracketsRound",
    "BracketsSquare",
    "Brain",
    "Brandy",
    "Bridge",
    "Briefcase",
    "BriefcaseMetal",
    "Broadcast",
    "Broom",
    "Browser",
    "Browsers",
    "Bug",
    "BugBeetle",
    "BugDroid",
    "Buildings",
    "Bus",
    "Butterfly",
    "Cactus",
    "Cake",
    "Calculator",
    "Calendar",
    "CalendarBlank",
    "CalendarCheck",
    "CalendarPlus",
    "CalendarX",
    "CallBell",
    "Camera",
    "CameraPlus",
    "CameraRotate",
    "CameraSlash",
    "Campfire",
    "Car",
    "CarProfile",
    "CarSimple",
    "Cardholder",
    "Cards",
    "CaretCircleDoubleUp",
    "CaretCircleDown",
    "CaretCircleLeft",
    "CaretCircleRight",
    "CaretCircleUp",
    "CaretCircleUpDown",
    "CaretDoubleDown",
    "CaretDoubleLeft",
    "CaretDoubleRight",
    "CaretDoubleUp",
    "CaretDown",
    "CaretLeft",
    "CaretRight",
    "CaretUp",
    "CaretUpDown",
    "Carrot",
    "CassetteTape",
    "CastleTurret",
    "Cat",
    "CellSignalFull",
    "CellSignalHigh",
    "CellSignalLow",
    "CellSignalMedium",
    "CellSignalNone",
    "CellSignalSlash",
    "CellSignalX",
    "Certificate",
    "Chair",
    "Chalkboard",
    "ChalkboardSimple",
    "ChalkboardTeacher",
    "Champagne",
    "ChargingStation",
    "ChartBar",
    "ChartBarHorizontal",
    "ChartDonut",
    "ChartLine",
    "ChartLineDown",
    "ChartLineUp",
    "ChartPie",
    "ChartPieSlice",
    "ChartPolar",
    "ChartScatter",
    "Chat",
    "ChatCentered",
    "ChatCenteredDots",
    "ChatCenteredText",
    "ChatCircle",
    "ChatCircleDots",
    "ChatCircleText",
    "ChatDots",
    "ChatTeardrop",
    "ChatTeardropDots",
    "ChatTeardropText",
    "ChatText",
    "Chats",
    "ChatsCircle",
    "ChatsTeardrop",
    "Check",
    "CheckCircle",
    "CheckFat",
    "CheckSquare",
    "CheckSquareOffset",
    "Checks",
    "Church",
    "Circle",
    "CircleDashed",
    "CircleHalf",
    "CircleHalfTilt",
    "CircleNotch",
    "CirclesFour",
    "CirclesThree",
    "CirclesThreePlus",
    "Circuitry",
    "Clipboard",
    "ClipboardText",
    "Clock",
    "ClockAfternoon",
    "ClockClockwise",
    "ClockCounterClockwise",
    "ClockCountdown",
    "ClosedCaptioning",
    "Cloud",
    "CloudArrowDown",
    "CloudArrowUp",
    "CloudCheck",
    "CloudFog",
    "CloudLightning",
    "CloudMoon",
    "CloudRain",
    "CloudSlash",
    "CloudSnow",
    "CloudSun",
    "CloudWarning",
    "CloudX",
    "Club",
    "CoatHanger",
    "CodaLogo",
    "Code",
    "CodeBlock",
    "CodeSimple",
    "CodepenLogo",
    "CodesandboxLogo",
    "Coffee",
    "Coin",
    "CoinVertical",
    "Coins",
    "Columns",
    "Command",
    "Compass",
    "CompassTool",
    "ComputerTower",
    "Confetti",
    "ContactlessPayment",
    "Control",
    "Cookie",
    "CookingPot",
    "Copy",
    "CopySimple",
    "Copyleft",
    "Copyright",
    "CornersIn",
    "CornersOut",
    "Couch",
    "Cpu",
    "CreditCard",
    "Crop",
    "Cross",
    "Crosshair",
    "CrosshairSimple",
    "Crown",
    "CrownSimple",
    "Cube",
    "CubeFocus",
    "CubeTransparent",
    "CurrencyBtc",
    "CurrencyCircleDollar",
    "CurrencyCny",
    "CurrencyDollar",
    "CurrencyDollarSimple",
    "CurrencyEth",
    "CurrencyEur",
    "CurrencyGbp",
    "CurrencyInr",
    "CurrencyJpy",
    "CurrencyKrw",
    "CurrencyKzt",
    "CurrencyNgn",
    "CurrencyRub",
    "Cursor",
    "CursorClick",
    "CursorText",
    "Cylinder",
    "Database",
    "Desktop",
    "DesktopTower",
    "Detective",
    "DevToLogo",
    "DeviceMobile",
    "DeviceMobileCamera",
    "DeviceMobileSpeaker",
    "DeviceTablet",
    "DeviceTabletCamera",
    "DeviceTabletSpeaker",
    "Devices",
    "Diamond",
    "DiamondsFour",
    "DiceFive",
    "DiceFour",
    "DiceOne",
    "DiceSix",
    "DiceThree",
    "DiceTwo",
    "Disc",
    "DiscordLogo",
    "Divide",
    "Dna",
    "Dog",
    "Door",
    "DoorOpen",
    "Dot",
    "DotOutline",
    "DotsNine",
    "DotsSix",
    "DotsSixVertical",
    "DotsThree",
    "DotsThreeCircle",
    "DotsThreeOutline",
    "DotsThreeVertical",
    "Download",
    "DownloadSimple",
    "Dress",
    "DribbbleLogo",
    "Drop",
    "DropHalf",
    "DropHalfBottom",
    "DropboxLogo",
    "Ear",
    "EarSlash",
    "Egg",
    "EggCrack",
    "Eject",
    "EjectSimple",
    "Elevator",
    "Engine",
    "Envelope",
    "EnvelopeOpen",
    "EnvelopeSimple",
    "EnvelopeSimpleOpen",
    "Equalizer",
    "Equals",
    "Eraser",
    "EscalatorDown",
    "EscalatorUp",
    "Exam",
    "Exclude",
    "ExcludeSquare",
    "Export",
    "Eye",
    "EyeClosed",
    "EyeSlash",
    "Eyedropper",
    "EyedropperSample",
    "Eyeglasses",
    "FaceMask",
    "FacebookLogo",
    "Factory",
    "Faders",
    "FadersHorizontal",
    "Fan",
    "FastForward",
    "FastForwardCircle",
    "Feather",
    "FigmaLogo",
    "File",
    "FileArchive",
    "FileArrowDown",
    "FileArrowUp",
    "FileAudio",
    "FileCloud",
    "FileCode",
    "FileCss",
    "FileCsv",
    "FileDashed",
    "FileDoc",
    "FileHtml",
    "FileImage",
    "FileJpg",
    "FileJs",
    "FileJsx",
    "FileLock",
    "FileMagnifyingGlass",
    "FileMinus",
    "FilePdf",
    "FilePlus",
    "FilePng",
    "FilePpt",
    "FileRs",
    "FileSql",
    "FileSvg",
    "FileText",
    "FileTs",
    "FileTsx",
    "FileVideo",
    "FileVue",
    "FileX",
    "FileXls",
    "FileZip",
    "Files",
    "FilmReel",
    "FilmScript",
    "FilmSlate",
    "FilmStrip",
    "Fingerprint",
    "FingerprintSimple",
    "FinnTheHuman",
    "Fire",
    "FireExtinguisher",
    "FireSimple",
    "FirstAid",
    "FirstAidKit",
    "Fish",
    "FishSimple",
    "Flag",
    "FlagBanner",
    "FlagCheckered",
    "FlagPennant",
    "Flame",
    "Flashlight",
    "Flask",
    "FloppyDisk",
    "FloppyDiskBack",
    "FlowArrow",
    "Flower",
    "FlowerLotus",
    "FlowerTulip",
    "FlyingSaucer",
    "Folder",
    "FolderDashed",
    "FolderLock",
    "FolderMinus",
    "FolderNotch",
    "FolderNotchMinus",
    "FolderNotchOpen",
    "FolderNotchPlus",
    "FolderOpen",
    "FolderPlus",
    "FolderSimple",
    "FolderSimpleDashed",
    "FolderSimpleLock",
    "FolderSimpleMinus",
    "FolderSimplePlus",
    "FolderSimpleStar",
    "FolderSimpleUser",
    "FolderStar",
    "FolderUser",
    "Folders",
    "Football",
    "Footprints",
    "ForkKnife",
    "FrameCorners",
    "FramerLogo",
    "Function",
    "Funnel",
    "FunnelSimple",
    "GameController",
    "Garage",
    "GasCan",
    "GasPump",
    "Gauge",
    "Gavel",
    "Gear",
    "GearFine",
    "GearSix",
    "GenderFemale",
    "GenderIntersex",
    "GenderMale",
    "GenderNeuter",
    "GenderNonbinary",
    "GenderTransgender",
    "Ghost",
    "Gif",
    "Gift",
    "GitBranch",
    "GitCommit",
    "GitDiff",
    "GitFork",
    "GitMerge",
    "GitPullRequest",
    "GithubLogo",
    "GitlabLogo",
    "GitlabLogoSimple",
    "Globe",
    "GlobeHemisphereEast",
    "GlobeHemisphereWest",
    "GlobeSimple",
    "GlobeStand",
    "Goggles",
    "GoodreadsLogo",
    "GoogleCardboardLogo",
    "GoogleChromeLogo",
    "GoogleDriveLogo",
    "GoogleLogo",
    "GooglePhotosLogo",
    "GooglePlayLogo",
    "GooglePodcastsLogo",
    "Gradient",
    "GraduationCap",
    "Grains",
    "GrainsSlash",
    "Graph",
    "GridFour",
    "GridNine",
    "Guitar",
    "Hamburger",
    "Hammer",
    "Hand",
    "HandCoins",
    "HandEye",
    "HandFist",
    "HandGrabbing",
    "HandHeart",
    "HandPalm",
    "HandPointing",
    "HandSoap",
    "HandSwipeLeft",
    "HandSwipeRight",
    "HandTap",
    "HandWaving",
    "Handbag",
    "HandbagSimple",
    "HandsClapping",
    "HandsPraying",
    "Handshake",
    "HardDrive",
    "HardDrives",
    "Hash",
    "HashStraight",
    "Headlights",
    "Headphones",
    "Headset",
    "Heart",
    "HeartBreak",
    "HeartHalf",
    "HeartStraight",
    "HeartStraightBreak",
    "Heartbeat",
    "Hexagon",
    "HighHeel",
    "HighlighterCircle",
    "Hoodie",
    "Horse",
    "Hourglass",
    "HourglassHigh",
    "HourglassLow",
    "HourglassMedium",
    "HourglassSimple",
    "HourglassSimpleHigh",
    "HourglassSimpleLow",
    "House",
    "HouseLine",
    "HouseSimple",
    "IceCream",
    "IdentificationBadge",
    "IdentificationCard",
    "Image",
    "ImageSquare",
    "Images",
    "ImagesSquare",
    "Infinity",
    "Info",
    "InstagramLogo",
    "Intersect",
    "IntersectSquare",
    "IntersectThree",
    "Jeep",
    "Kanban",
    "Key",
    "KeyReturn",
    "Keyboard",
    "Keyhole",
    "Knife",
    "Ladder",
    "LadderSimple",
    "Lamp",
    "Laptop",
    "Layout",
    "Leaf",
    "Lifebuoy",
    "Lightbulb",
    "LightbulbFilament",
    "Lighthouse",
    "Lightning",
    "LightningA",
    "LightningSlash",
    "LineSegment",
    "LineSegments",
    "Link",
    "LinkBreak",
    "LinkSimple",
    "LinkSimpleBreak",
    "LinkSimpleHorizontal",
    "LinkedinLogo",
    "LinuxLogo",
    "List",
    "ListBullets",
    "ListChecks",
    "ListDashes",
    "ListMagnifyingGlass",
    "ListNumbers",
    "ListPlus",
    "Lock",
    "LockKey",
    "LockKeyOpen",
    "LockLaminated",
    "LockLaminatedOpen",
    "LockOpen",
    "LockSimple",
    "LockSimpleOpen",
    "Lockers",
    "MagicWand",
    "Magnet",
    "MagnetStraight",
    "MagnifyingGlass",
    "MagnifyingGlassMinus",
    "MagnifyingGlassPlus",
    "MapPin",
    "MapPinLine",
    "MapTrifold",
    "MarkerCircle",
    "Martini",
    "MaskHappy",
    "MaskSad",
    "MathOperations",
    "Medal",
    "MedalMilitary",
    "MediumLogo",
    "Megaphone",
    "MegaphoneSimple",
    "MessengerLogo",
    "MetaLogo",
    "Metronome",
    "Microphone",
    "MicrophoneSlash",
    "MicrophoneStage",
    "MicrosoftExcelLogo",
    "MicrosoftOutlookLogo",
    "MicrosoftTeamsLogo",
    "MicrosoftWordLogo",
    "Minus",
    "MinusCircle",
    "MinusSquare",
    "Money",
    "Monitor",
    "MonitorPlay",
    "Moon",
    "MoonStars",
    "Moped",
    "MopedFront",
    "Mosque",
    "Motorcycle",
    "Mountains",
    "Mouse",
    "MouseSimple",
    "MusicNote",
    "MusicNoteSimple",
    "MusicNotes",
    "MusicNotesPlus",
    "MusicNotesSimple",
    "NavigationArrow",
    "Needle",
    "Newspaper",
    "NewspaperClipping",
    "Notches",
    "Note",
    "NoteBlank",
    "NotePencil",
    "Notebook",
    "Notepad",
    "Notification",
    "NotionLogo",
    "NumberCircleEight",
    "NumberCircleFive",
    "NumberCircleFour",
    "NumberCircleNine",
    "NumberCircleOne",
    "NumberCircleSeven",
    "NumberCircleSix",
    "NumberCircleThree",
    "NumberCircleTwo",
    "NumberCircleZero",
    "NumberEight",
    "NumberFive",
    "NumberFour",
    "NumberNine",
    "NumberOne",
    "NumberSeven",
    "NumberSix",
    "NumberSquareEight",
    "NumberSquareFive",
    "NumberSquareFour",
    "NumberSquareNine",
    "NumberSquareOne",
    "NumberSquareSeven",
    "NumberSquareSix",
    "NumberSquareThree",
    "NumberSquareTwo",
    "NumberSquareZero",
    "NumberThree",
    "NumberTwo",
    "NumberZero",
    "Nut",
    "NyTimesLogo",
    "Octagon",
    "OfficeChair",
    "Option",
    "OrangeSlice",
    "Package",
    "PaintBrush",
    "PaintBrushBroad",
    "PaintBrushHousehold",
    "PaintBucket",
    "PaintRoller",
    "Palette",
    "Pants",
    "PaperPlane",
    "PaperPlaneRight",
    "PaperPlaneTilt",
    "Paperclip",
    "PaperclipHorizontal",
    "Parachute",
    "Paragraph",
    "Parallelogram",
    "Park",
    "Password",
    "Path",
    "PatreonLogo",
    "Pause",
    "PauseCircle",
    "PawPrint",
    "PaypalLogo",
    "Peace",
    "Pen",
    "PenNib",
    "PenNibStraight",
    "Pencil",
    "PencilCircle",
    "PencilLine",
    "PencilSimple",
    "PencilSimpleLine",
    "PencilSimpleSlash",
    "PencilSlash",
    "Pentagram",
    "Pepper",
    "Percent",
    "Person",
    "PersonArmsSpread",
    "PersonSimple",
    "PersonSimpleBike",
    "PersonSimpleRun",
    "PersonSimpleThrow",
    "PersonSimpleWalk",
    "Perspective",
    "Phone",
    "PhoneCall",
    "PhoneDisconnect",
    "PhoneIncoming",
    "PhoneOutgoing",
    "PhonePlus",
    "PhoneSlash",
    "PhoneX",
    "PhosphorLogo",
    "Pi",
    "PianoKeys",
    "PictureInPicture",
    "PiggyBank",
    "Pill",
    "PinterestLogo",
    "Pinwheel",
    "Pizza",
    "Placeholder",
    "Planet",
    "Plant",
    "Play",
    "PlayCircle",
    "PlayPause",
    "Playlist",
    "Plug",
    "PlugCharging",
    "Plugs",
    "PlugsConnected",
    "Plus",
    "PlusCircle",
    "PlusMinus",
    "PlusSquare",
    "PokerChip",
    "PoliceCar",
    "Polygon",
    "Popcorn",
    "PottedPlant",
    "Power",
    "Prescription",
    "Presentation",
    "PresentationChart",
    "Printer",
    "Prohibit",
    "ProhibitInset",
    "ProjectorScreen",
    "ProjectorScreenChart",
    "Pulse",
    "PushPin",
    "PushPinSimple",
    "PushPinSimpleSlash",
    "PushPinSlash",
    "PuzzlePiece",
    "QrCode",
    "Question",
    "Queue",
    "Quotes",
    "Radical",
    "Radio",
    "RadioButton",
    "Radioactive",
    "Rainbow",
    "RainbowCloud",
    "ReadCvLogo",
    "Receipt",
    "ReceiptX",
    "Record",
    "Rectangle",
    "Recycle",
    "RedditLogo",
    "Repeat",
    "RepeatOnce",
    "Rewind",
    "RewindCircle",
    "RoadHorizon",
    "Robot",
    "Rocket",
    "RocketLaunch",
    "Rows",
    "Rss",
    "RssSimple",
    "Rug",
    "Ruler",
    "Scales",
    "Scan",
    "Scissors",
    "Scooter",
    "Screencast",
    "ScribbleLoop",
    "Scroll",
    "Seal",
    "SealCheck",
    "SealQuestion",
    "SealWarning",
    "Selection",
    "SelectionAll",
    "SelectionBackground",
    "SelectionForeground",
    "SelectionInverse",
    "SelectionPlus",
    "SelectionSlash",
    "Shapes",
    "Share",
    "ShareFat",
    "ShareNetwork",
    "Shield",
    "ShieldCheck",
    "ShieldCheckered",
    "ShieldChevron",
    "ShieldPlus",
    "ShieldSlash",
    "ShieldStar",
    "ShieldWarning",
    "ShirtFolded",
    "ShootingStar",
    "ShoppingBag",
    "ShoppingBagOpen",
    "ShoppingCart",
    "ShoppingCartSimple",
    "Shower",
    "Shrimp",
    "Shuffle",
    "ShuffleAngular",
    "ShuffleSimple",
    "Sidebar",
    "SidebarSimple",
    "Sigma",
    "SignIn",
    "SignOut",
    "Signature",
    "Signpost",
    "SimCard",
    "Siren",
    "SketchLogo",
    "SkipBack",
    "SkipBackCircle",
    "SkipForward",
    "SkipForwardCircle",
    "Skull",
    "SlackLogo",
    "Sliders",
    "SlidersHorizontal",
    "Slideshow",
    "Smiley",
    "SmileyAngry",
    "SmileyBlank",
    "SmileyMeh",
    "SmileyNervous",
    "SmileySad",
    "SmileySticker",
    "SmileyWink",
    "SmileyXEyes",
    "SnapchatLogo",
    "Sneaker",
    "SneakerMove",
    "Snowflake",
    "SoccerBall",
    "SortAscending",
    "SortDescending",
    "SoundcloudLogo",
    "Spade",
    "Sparkle",
    "SpeakerHifi",
    "SpeakerHigh",
    "SpeakerLow",
    "SpeakerNone",
    "SpeakerSimpleHigh",
    "SpeakerSimpleLow",
    "SpeakerSimpleNone",
    "SpeakerSimpleSlash",
    "SpeakerSimpleX",
    "SpeakerSlash",
    "SpeakerX",
    "Spinner",
    "SpinnerGap",
    "Spiral",
    "SplitHorizontal",
    "SplitVertical",
    "SpotifyLogo",
    "Square",
    "SquareHalf",
    "SquareHalfBottom",
    "SquareLogo",
    "SquareSplitVertical",
    "SquaresFour",
    "Stack",
    "StackOverflowLogo",
    "StackSimple",
    "Stairs",
    "Stamp",
    "Star",
    "StarAndCrescent",
    "StarFour",
    "StarHalf",
    "StarOfDavid",
    "SteeringWheel",
    "Steps",
    "Stethoscope",
    "Sticker",
    "Stool",
    "Stop",
    "StopCircle",
    "Storefront",
    "Strategy",
    "StripeLogo",
    "Student",
    "Subtitles",
    "Subtract",
    "SubtractSquare",
    "Suitcase",
    "SuitcaseRolling",
    "SuitcaseSimple",
    "Sun",
    "SunDim",
    "SunHorizon",
    "Sunglasses",
    "Swap",
    "Swatches",
    "SwimmingPool",
    "Sword",
    "Synagogue",
    "Syringe",
    "TShirt",
    "Table",
    "Tabs",
    "Tag",
    "TagChevron",
    "TagSimple",
    "Target",
    "Taxi",
    "TelegramLogo",
    "Television",
    "TelevisionSimple",
    "TennisBall",
    "Tent",
    "Terminal",
    "TerminalWindow",
    "TestTube",
    "TextAUnderline",
    "TextAa",
    "TextAlignCenter",
    "TextAlignJustify",
    "TextAlignLeft",
    "TextAlignRight",
    "TextB",
    "TextColumns",
    "TextH",
    "TextHFive",
    "TextHFour",
    "TextHOne",
    "TextHSix",
    "TextHThree",
    "TextHTwo",
    "TextIndent",
    "TextItalic",
    "TextOutdent",
    "TextStrikethrough",
    "TextT",
    "TextUnderline",
    "Textbox",
    "Thermometer",
    "ThermometerCold",
    "ThermometerHot",
    "ThermometerSimple",
    "ThumbsDown",
    "ThumbsUp",
    "Ticket",
    "TidalLogo",
    "TiktokLogo",
    "Timer",
    "Tipi",
    "ToggleLeft",
    "ToggleRight",
    "Toilet",
    "ToiletPaper",
    "Toolbox",
    "Tooth",
    "Tote",
    "ToteSimple",
    "Trademark",
    "TrademarkRegistered",
    "TrafficCone",
    "TrafficSign",
    "TrafficSignal",
    "Train",
    "TrainRegional",
    "TrainSimple",
    "Tram",
    "Translate",
    "Trash",
    "TrashSimple",
    "Tray",
    "Tree",
    "TreeEvergreen",
    "TreePalm",
    "TreeStructure",
    "TrendDown",
    "TrendUp",
    "Triangle",
    "Trophy",
    "Truck",
    "TwitchLogo",
    "TwitterLogo",
    "Umbrella",
    "UmbrellaSimple",
    "Unite",
    "UniteSquare",
    "Upload",
    "UploadSimple",
    "Usb",
    "User",
    "UserCircle",
    "UserCircleGear",
    "UserCircleMinus",
    "UserCirclePlus",
    "UserFocus",
    "UserGear",
    "UserList",
    "UserMinus",
    "UserPlus",
    "UserRectangle",
    "UserSquare",
    "UserSwitch",
    "Users",
    "UsersFour",
    "UsersThree",
    "Van",
    "Vault",
    "Vibrate",
    "Video",
    "VideoCamera",
    "VideoCameraSlash",
    "Vignette",
    "VinylRecord",
    "VirtualReality",
    "Virus",
    "Voicemail",
    "Volleyball",
    "Wall",
    "Wallet",
    "Warehouse",
    "Warning",
    "WarningCircle",
    "WarningDiamond",
    "WarningOctagon",
    "Watch",
    "WaveSawtooth",
    "WaveSine",
    "WaveSquare",
    "WaveTriangle",
    "Waveform",
    "Waves",
    "Webcam",
    "WebcamSlash",
    "WebhooksLogo",
    "WechatLogo",
    "WhatsappLogo",
    "Wheelchair",
    "WheelchairMotion",
    "WifiHigh",
    "WifiLow",
    "WifiMedium",
    "WifiNone",
    "WifiSlash",
    "WifiX",
    "Wind",
    "WindowsLogo",
    "Wine",
    "Wrench",
    "X",
    "XCircle",
    "XSquare",
    "YinYang",
    "YoutubeLogo",
  ],
  _a = "https://framer.com/m/phosphor-icons/",
  Tt = ["thin", "light", "regular", "bold", "fill", "duotone"],
  Ca = Xr.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function He(r) {
  let {
      color: a,
      selectByList: o,
      iconSearch: s,
      iconSelection: f,
      onClick: g,
      onMouseDown: d,
      onMouseUp: x,
      onMouseEnter: u,
      onMouseLeave: n,
      weight: C,
      mirrored: k,
    } = r,
    F = R(!1),
    w = zr(Xr, o, s, f, Ca),
    [_, N] = ze(w === "Home" ? Vt(pe) : null);
  async function j() {
    try {
      let I = await import(`${_a}${w}.js@0.0.53`);
      F.current && N(I.default(pe));
    } catch {
      F.current && N(null);
    }
  }
  _e(
    () => (
      (F.current = !0),
      j(),
      () => {
        F.current = !1;
      }
    ),
    [w]
  );
  let p = ke.current() === ke.canvas ? e(Fr, {}) : null;
  return e(m.div, {
    style: { display: "contents" },
    onClick: g,
    onMouseEnter: u,
    onMouseLeave: n,
    onMouseDown: d,
    onMouseUp: x,
    children: _
      ? e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: a,
            color: a,
            flexShrink: 0,
            transform: k ? "scale(-1, 1)" : void 0,
          },
          focusable: "false",
          color: a,
          children: e(_, { color: a, weight: C }),
        })
      : p,
  });
}
He.displayName = "Phosphor";
He.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "House",
  iconSearch: "House",
  color: "#66F",
  selectByList: !0,
  weight: "regular",
  mirrored: !1,
};
B(He, {
  selectByList: {
    type: c.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: He.defaultProps.selectByList,
  },
  iconSelection: {
    type: c.Enum,
    options: Xr,
    defaultValue: He.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Phosphor site](https://phosphoricons.com/)",
  },
  iconSearch: {
    type: c.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  color: { type: c.Color, title: "Color", defaultValue: He.defaultProps.color },
  weight: {
    type: c.Enum,
    title: "Weight",
    optionTitles: Tt.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
    options: Tt,
    defaultValue: He.defaultProps.weight,
  },
  mirrored: {
    type: c.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: He.defaultProps.mirrored,
  },
  ...Sr,
});
var ka = O(He),
  Fa = Ee(m.div),
  Sa = O(Le),
  za = O(Be),
  Ha = {
    H5ugE0qSB: { hover: !0, pressed: !0 },
    jChf2lud1: { hover: !0, pressed: !0 },
    NaV2qYd_H: { hover: !0, pressed: !0 },
    u5cKgYsev: { hover: !0, pressed: !0 },
  },
  Aa = [
    "u5cKgYsev",
    "H5ugE0qSB",
    "jChf2lud1",
    "NaV2qYd_H",
    "nup9PpipB",
    "jKc7RP9Lw",
  ],
  Va = "framer-9Og5I",
  Ta = {
    H5ugE0qSB: "framer-v-1on5129",
    jChf2lud1: "framer-v-11x4a2o",
    jKc7RP9Lw: "framer-v-10wbi3w",
    NaV2qYd_H: "framer-v-zy3e95",
    nup9PpipB: "framer-v-19vkzej",
    u5cKgYsev: "framer-v-yeq7x5",
  };
function Ue(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var Ia = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  It = { delay: 0, duration: 0.6, ease: [1, -0.17, 0.49, 2.45], type: "tween" },
  Rt = {
    opacity: 1,
    rotate: 30,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 9,
    y: 0,
  },
  Ra = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Pa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.97,
    skewX: 0,
    skewY: 0,
    transition: Ra,
    x: 2,
    y: 2,
  },
  Na = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  Ma = m.create(b),
  Qa = {
    "Variant 1": "u5cKgYsev",
    "Variant 2": "H5ugE0qSB",
    "Variant 4": "jChf2lud1",
    "Variant 5": "NaV2qYd_H",
    "Variant 6": "nup9PpipB",
    "Variant 7": "jKc7RP9Lw",
  },
  La = ({
    background: r,
    click: a,
    fontSize: o,
    height: s,
    id: f,
    link: g,
    title: d,
    width: x,
    ...u
  }) => {
    var n, C, k, F, w;
    return {
      ...u,
      MRT00vOq0: a ?? u.MRT00vOq0,
      NjAk50iJD: (n = o ?? u.NjAk50iJD) !== null && n !== void 0 ? n : 20,
      rX_TO6nhQ:
        (C = r ?? u.rX_TO6nhQ) !== null && C !== void 0
          ? C
          : "rgb(82, 137, 255)",
      Uf_khRTfT:
        (k = d ?? u.Uf_khRTfT) !== null && k !== void 0 ? k : "buy now",
      variant:
        (w = (F = Qa[u.variant]) !== null && F !== void 0 ? F : u.variant) !==
          null && w !== void 0
          ? w
          : "u5cKgYsev",
      Z9i0v4qpe: g ?? u.Z9i0v4qpe,
    };
  },
  Ba = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  ja = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        rX_TO6nhQ: u,
        Uf_khRTfT: n,
        Z9i0v4qpe: C,
        MRT00vOq0: k,
        NjAk50iJD: F,
        ...w
      } = La(r),
      {
        baseVariant: _,
        classNames: N,
        clearLoadingGesture: j,
        gestureHandlers: T,
        gestureVariant: p,
        isLoading: M,
        setGestureState: Q,
        setVariant: I,
        variants: h,
      } = ce({
        cycleOrder: Aa,
        defaultVariant: "u5cKgYsev",
        enabledGestures: Ha,
        variant: x,
        variantClassNames: Ta,
      }),
      t = Ba(r, h),
      { activeVariantCallback: y, delay: he } = Ie(_),
      ue = y(async (...Ve) => {
        if ((Q({ isPressed: !1 }), k && (await k(...Ve)) === !1)) return !1;
      }),
      we = y(async (...Ve) => {
        if ((Q({ isPressed: !1 }), k && (await k(...Ve)) === !1)) return !1;
        I("jKc7RP9Lw");
      }),
      ge = y(async (...Ve) => {
        I("jKc7RP9Lw");
      }),
      ne = y(async (...Ve) => {
        I("jKc7RP9Lw");
      }),
      xe = R(null),
      z = () => !["nup9PpipB", "jKc7RP9Lw"].includes(_),
      i = () =>
        !!(
          ["jChf2lud1-hover", "jChf2lud1-pressed"].includes(p) ||
          _ === "jChf2lud1"
        ),
      V = () => !!["nup9PpipB", "jKc7RP9Lw"].includes(_),
      U = G(),
      be = [],
      fr = le();
    return e(K, {
      id: d ?? U,
      children: e(Ma, {
        animate: h,
        initial: !1,
        children: e(Na, {
          value: Ia,
          children: e(q, {
            href: C,
            nodeId: "u5cKgYsev",
            openInNewTab: !0,
            ...Ue(
              {
                H5ugE0qSB: { openInNewTab: !1 },
                NaV2qYd_H: { openInNewTab: !1 },
              },
              _,
              p
            ),
            children: v(m.a, {
              ...w,
              ...T,
              className: `${W(
                Va,
                ...be,
                "framer-yeq7x5",
                g,
                N
              )} framer-1uxsl32`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: t,
              layoutId: "u5cKgYsev",
              onTap: ue,
              ref: a ?? xe,
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor: u,
                borderBottomLeftRadius: 83,
                borderBottomRightRadius: 83,
                borderTopLeftRadius: 83,
                borderTopRightRadius: 83,
                boxShadow: "1px 2px 0px 0px rgb(0, 0, 0)",
                ...f,
              },
              variants: {
                "H5ugE0qSB-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "H5ugE0qSB-pressed": {
                  backgroundColor: "rgb(255, 255, 255)",
                  boxShadow: "none",
                },
                "jChf2lud1-hover": {
                  backgroundColor: "rgb(156, 187, 255)",
                  boxShadow: "none",
                },
                "jChf2lud1-pressed": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  boxShadow: "none",
                },
                "NaV2qYd_H-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "NaV2qYd_H-pressed": {
                  backgroundColor: "rgb(255, 255, 255)",
                  boxShadow: "none",
                },
                "u5cKgYsev-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "u5cKgYsev-pressed": {
                  backgroundColor: "rgb(255, 255, 255)",
                  boxShadow: "none",
                },
                jChf2lud1: { boxShadow: "none" },
                jKc7RP9Lw: {
                  borderBottomLeftRadius: 9,
                  borderBottomRightRadius: 9,
                  borderTopLeftRadius: 9,
                  borderTopRightRadius: 9,
                  boxShadow: "none",
                },
                nup9PpipB: {
                  borderBottomLeftRadius: 9,
                  borderBottomRightRadius: 9,
                  borderTopLeftRadius: 9,
                  borderTopRightRadius: 9,
                  boxShadow: "none",
                },
              },
              ...Ue(
                {
                  "H5ugE0qSB-hover": { "data-framer-name": void 0 },
                  "H5ugE0qSB-pressed": { "data-framer-name": void 0 },
                  "jChf2lud1-hover": { "data-framer-name": void 0 },
                  "jChf2lud1-pressed": { "data-framer-name": void 0 },
                  "NaV2qYd_H-hover": { "data-framer-name": void 0 },
                  "NaV2qYd_H-pressed": { "data-framer-name": void 0 },
                  "u5cKgYsev-hover": { "data-framer-name": void 0 },
                  "u5cKgYsev-pressed": { "data-framer-name": void 0 },
                  H5ugE0qSB: { "data-framer-name": "Variant 2" },
                  jChf2lud1: { "data-framer-name": "Variant 4" },
                  jKc7RP9Lw: { "data-framer-name": "Variant 7" },
                  NaV2qYd_H: { "data-framer-name": "Variant 5" },
                  nup9PpipB: { "data-framer-name": "Variant 6", onTap: we },
                },
                _,
                p
              ),
              children: [
                e(te, {
                  __fromCanvasComponent: !0,
                  children: e(b, {
                    children: e(m.p, {
                      style: {
                        "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                        "--framer-font-family": '"Kavoon", sans-serif',
                        "--framer-font-size": "20px",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "buy now",
                    }),
                  }),
                  className: "framer-15wb0pz",
                  fonts: ["GF;Kavoon-regular"],
                  layoutDependency: t,
                  layoutId: "phd4UT1bk",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-NjAk50iJD-Ao3_VP088": F,
                  },
                  text: n,
                  variants: {
                    jChf2lud1: {
                      "--variable-reference-NjAk50iJD-Ao3_VP088": F,
                    },
                    jKc7RP9Lw: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--variable-reference-NjAk50iJD-Ao3_VP088": F,
                    },
                    nup9PpipB: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--variable-reference-NjAk50iJD-Ao3_VP088": F,
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Ue(
                    {
                      jChf2lud1: {
                        children: e(b, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kavoon", sans-serif',
                              "--framer-font-size":
                                "calc(var(--variable-reference-NjAk50iJD-Ao3_VP088) * 1px)",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "buy now",
                          }),
                        }),
                      },
                      jKc7RP9Lw: {
                        children: e(b, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kavoon", sans-serif',
                              "--framer-font-size":
                                "calc(var(--variable-reference-NjAk50iJD-Ao3_VP088) * 1px)",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "buy now",
                          }),
                        }),
                      },
                      nup9PpipB: {
                        "data-highlight": !0,
                        children: e(b, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                              "--framer-font-family": '"Kavoon", sans-serif',
                              "--framer-font-size":
                                "calc(var(--variable-reference-NjAk50iJD-Ao3_VP088) * 1px)",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "buy now",
                          }),
                        }),
                        onTap: ge,
                      },
                    },
                    _,
                    p
                  ),
                }),
                z() &&
                  e(H, {
                    children: e(Fa, {
                      className: "framer-1wfomzi-container",
                      layoutDependency: t,
                      layoutId: "q1iCY_6HT-container",
                      ...Ue(
                        {
                          H5ugE0qSB: {
                            __framer__loop: Rt,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: It,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                          },
                          jChf2lud1: {
                            __framer__loop: Rt,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: It,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                          },
                        },
                        _,
                        p
                      ),
                      children: e(He, {
                        color: "rgb(0, 0, 0)",
                        height: "100%",
                        iconSearch: "shopping-cart",
                        iconSelection: "House",
                        id: "q1iCY_6HT",
                        layoutId: "q1iCY_6HT",
                        mirrored: !1,
                        selectByList: !1,
                        style: { height: "100%", width: "100%" },
                        weight: "regular",
                        width: "100%",
                        ...Ue(
                          {
                            H5ugE0qSB: { iconSearch: "plAY", weight: "bold" },
                            jChf2lud1: { iconSearch: "copy", weight: "bold" },
                            NaV2qYd_H: { iconSearch: "game" },
                          },
                          _,
                          p
                        ),
                      }),
                    }),
                  }),
                i() &&
                  e(H, {
                    children: e(m.div, {
                      className: "framer-sz386i-container",
                      layoutDependency: t,
                      layoutId: "N_Ck2ToWr-container",
                      whileTap: Pa,
                      children: e(Le, {
                        borderRadius: 50,
                        bottomLeftRadius: 50,
                        bottomRightRadius: 50,
                        color: "rgb(255, 255, 255)",
                        content: "",
                        fill: "rgba(255, 255, 255, 0)",
                        font: {},
                        height: "100%",
                        id: "N_Ck2ToWr",
                        isMixedBorderRadius: !1,
                        label: "",
                        layoutId: "N_Ck2ToWr",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        style: { height: "100%", width: "100%" },
                        topLeftRadius: 50,
                        topRightRadius: 50,
                        width: "100%",
                      }),
                    }),
                  }),
                V() &&
                  e(m.div, {
                    className: "framer-c5xyeq",
                    layoutDependency: t,
                    layoutId: "vVvPVlMu9",
                    children:
                      V() &&
                      e(H, {
                        children: e(m.div, {
                          className: "framer-z3w6e1-container",
                          layoutDependency: t,
                          layoutId: "FQRv_ZoDM-container",
                          style: { opacity: 1 },
                          variants: { jKc7RP9Lw: { opacity: 0 } },
                          children: e(Be, {
                            background: "rgba(255, 255, 255, 0)",
                            borderRadius: 8,
                            bottomLeftRadius: 8,
                            bottomRightRadius: 8,
                            font: {},
                            gap: 15,
                            height: "100%",
                            id: "FQRv_ZoDM",
                            isMixedBorderRadius: !1,
                            layoutId: "FQRv_ZoDM",
                            loop: !0,
                            onPlayGlobalPauseOption: "continue",
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            pauseOnExit: !0,
                            playing: !0,
                            progress: 100,
                            progressColor: "rgb(51, 51, 51)",
                            showPlayPause: !0,
                            showTime: !1,
                            showTrack: !1,
                            srcFile: "/assets/vZxK8tX0ncnVPAReLFV31MNveI.mp3",
                            srcType: "Upload",
                            srcUrl:
                              "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
                            style: { height: "100%", width: "100%" },
                            topLeftRadius: 8,
                            topRightRadius: 8,
                            trackColor: "rgb(255, 255, 255)",
                            volume: 100,
                            width: "100%",
                            ...Ue(
                              {
                                nup9PpipB: {
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  gap: 3,
                                  onPlay: ne,
                                  pauseOnExit: !1,
                                  playing: !1,
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                },
                              },
                              _,
                              p
                            ),
                          }),
                        }),
                      }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ea = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9Og5I.framer-1uxsl32, .framer-9Og5I .framer-1uxsl32 { display: block; }",
    ".framer-9Og5I.framer-yeq7x5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 13px 30px 11px 30px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9Og5I .framer-15wb0pz { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-9Og5I .framer-1wfomzi-container { flex: none; height: 29px; position: relative; width: 29px; }",
    ".framer-9Og5I .framer-sz386i-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-9Og5I .framer-c5xyeq { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-9Og5I .framer-z3w6e1-container { aspect-ratio: 4.571428571428571 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 44px); position: relative; width: 200px; z-index: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9Og5I.framer-yeq7x5, .framer-9Og5I .framer-c5xyeq { gap: 0px; } .framer-9Og5I.framer-yeq7x5 > *, .framer-9Og5I .framer-c5xyeq > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-9Og5I.framer-yeq7x5 > :first-child, .framer-9Og5I .framer-c5xyeq > :first-child { margin-left: 0px; } .framer-9Og5I.framer-yeq7x5 > :last-child, .framer-9Og5I .framer-c5xyeq > :last-child { margin-right: 0px; } }",
    ".framer-9Og5I.framer-v-11x4a2o.framer-yeq7x5 { padding: 13px 25px 11px 30px; }",
    ".framer-9Og5I.framer-v-11x4a2o .framer-1wfomzi-container { height: 19px; width: 19px; }",
    ".framer-9Og5I.framer-v-19vkzej.framer-yeq7x5 { padding: 8px 20px 5px 20px; }",
    ".framer-9Og5I.framer-v-19vkzej .framer-15wb0pz { cursor: pointer; }",
    ".framer-9Og5I.framer-v-19vkzej .framer-z3w6e1-container { aspect-ratio: unset; bottom: 0px; height: unset; left: 0px; position: absolute; right: 0px; top: 0px; width: unset; }",
    ".framer-9Og5I.framer-v-10wbi3w.framer-yeq7x5 { padding: 8px 13px 5px 20px; }",
    ".framer-9Og5I.framer-v-10wbi3w .framer-z3w6e1-container { -webkit-user-select: none; aspect-ratio: unset; bottom: 0px; height: unset; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; width: unset; }",
    ".framer-9Og5I.framer-v-11x4a2o.hover.framer-yeq7x5, .framer-9Og5I.framer-v-11x4a2o.pressed.framer-yeq7x5 { padding: 13px 30px 11px 30px; }",
    '.framer-9Og5I[data-border="true"]::after, .framer-9Og5I [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  rr = D(ja, Ea, "framer-9Og5I"),
  Ae = rr;
rr.displayName = "Cartoon Button Animation 2";
rr.defaultProps = { height: 53, width: 189 };
B(rr, {
  variant: {
    options: [
      "u5cKgYsev",
      "H5ugE0qSB",
      "jChf2lud1",
      "NaV2qYd_H",
      "nup9PpipB",
      "jKc7RP9Lw",
    ],
    optionTitles: [
      "Variant 1",
      "Variant 2",
      "Variant 4",
      "Variant 5",
      "Variant 6",
      "Variant 7",
    ],
    title: "Variant",
    type: c.Enum,
  },
  rX_TO6nhQ: {
    defaultValue: "rgb(82, 137, 255)",
    title: "Background",
    type: c.Color,
  },
  Uf_khRTfT: {
    defaultValue: "buy now",
    displayTextArea: !1,
    title: "Title",
    type: c.String,
  },
  Z9i0v4qpe: { title: "Link", type: c.Link },
  MRT00vOq0: { title: "Click", type: c.EventHandler },
  NjAk50iJD: { defaultValue: 20, title: "Font Size", type: c.Number },
});
ee(
  rr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kavoon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kavoon/v23/pxiFyp4_scRYhlU4Mbr6f1pdEQ.woff2",
          weight: "400",
        },
      ],
    },
    ...ka,
    ...Sa,
    ...za,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Da = { yk0TImxMb: { hover: !0, pressed: !0 } },
  qa = "framer-01hVG",
  Ya = { yk0TImxMb: "framer-v-1vynps9" };
function Ja(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var Wa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Oa = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
      ? { src: r }
      : void 0,
  Ua = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  Xa = m.create(b),
  Ga = ({ height: r, id: a, image: o, link: s, width: f, ...g }) => {
    var d;
    return {
      ...g,
      fL82VuRHx:
        (d = o ?? g.fL82VuRHx) !== null && d !== void 0
          ? d
          : {
              src: "/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png?scale-down-to=512",
              srcSet:
                "/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png?scale-down-to=512 512w,/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png 1000w",
            },
      TeZLuQw15: s ?? g.TeZLuQw15,
    };
  },
  Za = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Ka = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        fL82VuRHx: u,
        TeZLuQw15: n,
        ...C
      } = Ga(r),
      {
        baseVariant: k,
        classNames: F,
        clearLoadingGesture: w,
        gestureHandlers: _,
        gestureVariant: N,
        isLoading: j,
        setGestureState: T,
        setVariant: p,
        variants: M,
      } = ce({
        defaultVariant: "yk0TImxMb",
        enabledGestures: Da,
        variant: x,
        variantClassNames: Ya,
      }),
      Q = Za(r, M),
      I = R(null),
      h = G(),
      t = [],
      y = le();
    return e(K, {
      id: d ?? h,
      children: e(Xa, {
        animate: M,
        initial: !1,
        children: e(Ua, {
          value: Wa,
          children: e(q, {
            href: n,
            nodeId: "yk0TImxMb",
            openInNewTab: !0,
            children: e(m.a, {
              ...C,
              ..._,
              className: `${W(
                qa,
                ...t,
                "framer-1vynps9",
                g,
                F
              )} framer-1s9no48`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: Q,
              layoutId: "yk0TImxMb",
              ref: a ?? I,
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxShadow: "1px 2px 0px 0px rgb(0, 0, 0)",
                ...f,
              },
              variants: {
                "yk0TImxMb-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "yk0TImxMb-pressed": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  boxShadow: "none",
                },
              },
              ...Ja(
                {
                  "yk0TImxMb-hover": { "data-framer-name": void 0 },
                  "yk0TImxMb-pressed": { "data-framer-name": void 0 },
                },
                k,
                N
              ),
              children: e(P, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1e3,
                  intrinsicWidth: 1e3,
                  loading: l(
                    (y?.y || 0) + (0 + ((y?.height || 40) - 0 - 26) / 2)
                  ),
                  pixelHeight: 1e3,
                  pixelWidth: 1e3,
                  sizes: "26px",
                  ...Oa(u),
                  positionX: "center",
                  positionY: "center",
                },
                className: "framer-cihx35",
                "data-framer-name": "Dextools",
                layoutDependency: Q,
                layoutId: "eC55o3FXf",
              }),
            }),
          }),
        }),
      }),
    });
  }),
  $a = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-01hVG.framer-1s9no48, .framer-01hVG .framer-1s9no48 { display: block; }",
    ".framer-01hVG.framer-1vynps9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-01hVG .framer-cihx35 { -webkit-user-select: none; flex: none; height: 26px; overflow: visible; position: relative; user-select: none; width: 26px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-01hVG.framer-1vynps9 { gap: 0px; } .framer-01hVG.framer-1vynps9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-01hVG.framer-1vynps9 > :first-child { margin-left: 0px; } .framer-01hVG.framer-1vynps9 > :last-child { margin-right: 0px; } }",
    ".framer-01hVG.framer-v-1vynps9.hover.framer-1vynps9, .framer-01hVG.framer-v-1vynps9.pressed.framer-1vynps9 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); }",
    '.framer-01hVG[data-border="true"]::after, .framer-01hVG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  tr = D(Ka, $a, "framer-01hVG"),
  Fe = tr;
tr.displayName = "Links Nav 2";
tr.defaultProps = { height: 40, width: 40 };
B(tr, {
  fL82VuRHx: {
    __defaultAssetReference:
      "data:framer/asset-reference,gqPA6KtJVqlXF9oyIClJXOmwuoE.png?originalFilename=dextools.png&preferredSize=auto",
    title: "Image",
    type: c.ResponsiveImage,
  },
  TeZLuQw15: { title: "Link", type: c.Link },
});
ee(tr, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var ei = { sNHMXI_B9: { hover: !0, pressed: !0 } },
  ri = "framer-f265x",
  ti = { sNHMXI_B9: "framer-v-15h6dyf" };
function Pt(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var ai = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ii = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  oi = m.create(b),
  ni = ({
    click: r,
    color: a,
    fontSize: o,
    height: s,
    id: f,
    link: g,
    title: d,
    width: x,
    ...u
  }) => {
    var n, C, k;
    return {
      ...u,
      aijqetpdn: r ?? u.aijqetpdn,
      BgyErskUz: g ?? u.BgyErskUz,
      Gac2rjSXD:
        (n = a ?? u.Gac2rjSXD) !== null && n !== void 0
          ? n
          : "rgb(255, 255, 255)",
      GtAI8HSlp:
        (C = d ?? u.GtAI8HSlp) !== null && C !== void 0 ? C : "creators",
      v4tYVSv48: (k = o ?? u.v4tYVSv48) !== null && k !== void 0 ? k : 24,
    };
  },
  si = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  li = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        GtAI8HSlp: u,
        Gac2rjSXD: n,
        BgyErskUz: C,
        aijqetpdn: k,
        v4tYVSv48: F,
        ...w
      } = ni(r),
      {
        baseVariant: _,
        classNames: N,
        clearLoadingGesture: j,
        gestureHandlers: T,
        gestureVariant: p,
        isLoading: M,
        setGestureState: Q,
        setVariant: I,
        variants: h,
      } = ce({
        defaultVariant: "sNHMXI_B9",
        enabledGestures: ei,
        variant: x,
        variantClassNames: ti,
      }),
      t = si(r, h),
      { activeVariantCallback: y, delay: he } = Ie(_),
      ue = y(async (...z) => {
        if ((Q({ isPressed: !1 }), k && (await k(...z)) === !1)) return !1;
      }),
      we = R(null),
      ge = G(),
      ne = [],
      xe = le();
    return e(K, {
      id: d ?? ge,
      children: e(oi, {
        animate: h,
        initial: !1,
        children: e(ii, {
          value: ai,
          children: e(q, {
            href: C,
            nodeId: "sNHMXI_B9",
            smoothScroll: !0,
            children: e(m.a, {
              ...w,
              ...T,
              className: `${W(
                ri,
                ...ne,
                "framer-15h6dyf",
                g,
                N
              )} framer-1s28lml`,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: t,
              layoutId: "sNHMXI_B9",
              onTap: ue,
              ref: a ?? we,
              style: { ...f },
              ...Pt(
                {
                  "sNHMXI_B9-hover": { "data-framer-name": void 0 },
                  "sNHMXI_B9-pressed": { "data-framer-name": void 0 },
                },
                _,
                p
              ),
              children: e(te, {
                __fromCanvasComponent: !0,
                children: e(b, {
                  children: e(m.p, {
                    style: {
                      "--font-selector": "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                      "--framer-font-family": '"Kaushan Script", sans-serif',
                      "--framer-font-size":
                        "calc(var(--variable-reference-v4tYVSv48-kROE2gJvT) * 1px)",
                      "--framer-letter-spacing": "0.03em",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--variable-reference-Gac2rjSXD-kROE2gJvT))",
                      "--framer-text-transform": "capitalize",
                    },
                    children: "creators",
                  }),
                }),
                className: "framer-scocxe",
                fonts: ["GF;Kaushan Script-regular"],
                layoutDependency: t,
                layoutId: "z33kvnYGp",
                style: {
                  "--extracted-r6o4lv":
                    "var(--variable-reference-Gac2rjSXD-kROE2gJvT)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--variable-reference-Gac2rjSXD-kROE2gJvT": n,
                  "--variable-reference-v4tYVSv48-kROE2gJvT": F,
                },
                text: u,
                variants: {
                  "sNHMXI_B9-hover": {
                    "--extracted-r6o4lv": "rgb(0, 178, 255)",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Pt(
                  {
                    "sNHMXI_B9-hover": {
                      children: e(b, {
                        children: e(m.p, {
                          style: {
                            "--font-selector":
                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                            "--framer-font-family":
                              '"Kaushan Script", sans-serif',
                            "--framer-font-size":
                              "calc(var(--variable-reference-v4tYVSv48-kROE2gJvT) * 1px)",
                            "--framer-letter-spacing": "0.03em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(0, 178, 255))",
                            "--framer-text-transform": "capitalize",
                          },
                          children: "creators",
                        }),
                      }),
                    },
                  },
                  _,
                  p
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ci = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-f265x.framer-1s28lml, .framer-f265x .framer-1s28lml { display: block; }",
    ".framer-f265x.framer-15h6dyf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-f265x .framer-scocxe { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f265x.framer-15h6dyf { gap: 0px; } .framer-f265x.framer-15h6dyf > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-f265x.framer-15h6dyf > :first-child { margin-left: 0px; } .framer-f265x.framer-15h6dyf > :last-child { margin-right: 0px; } }",
  ],
  ar = D(li, ci, "framer-f265x"),
  ir = ar;
ar.displayName = "Links nav";
ar.defaultProps = { height: 29, width: 87 };
B(ar, {
  GtAI8HSlp: {
    defaultValue: "creators",
    displayTextArea: !1,
    title: "Title",
    type: c.String,
  },
  Gac2rjSXD: {
    defaultValue: "rgb(255, 255, 255)",
    title: "Color",
    type: c.Color,
  },
  BgyErskUz: { title: "Link", type: c.Link },
  aijqetpdn: { title: "Click", type: c.EventHandler },
  v4tYVSv48: { defaultValue: 24, title: "Font Size", type: c.Number },
});
ee(
  ar,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kaushan Script",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kaushanscript/v18/vm8vdRfvXFLG3OLnsO15WYS5DF76ytN3M48a.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var mi = O(ir),
  pi = O(Fe),
  fi = O(Ae),
  or = Ee(P),
  di = ["uNOdB4q9_", "eZ7gXPACW", "vcwO6svQk"],
  gi = "framer-jvIUF",
  hi = {
    eZ7gXPACW: "framer-v-17c8ngq",
    uNOdB4q9_: "framer-v-1ehnbt3",
    vcwO6svQk: "framer-v-1gxfm2d",
  };
function oe(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var ui = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qt = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  De = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.95,
    skewX: 0,
    skewY: 0,
    transition: Qt,
    x: 1,
    y: 2,
  },
  Nt = (r, a) => `translateX(-50%) ${a}`,
  Hr = (r, a) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: a };
  },
  wi = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.97,
    skewX: 0,
    skewY: 0,
    transition: Qt,
    x: 2,
    y: 2,
  },
  xi = { delay: 0.8, duration: 4.2, ease: [0, 0, 1, 1], type: "tween" },
  nr = {
    opacity: 0.5,
    rotate: 106,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 159,
  },
  vi = { delay: 1.4, duration: 2.2, ease: [0, 0, 1, 1], type: "tween" },
  yi = { delay: 1.7, duration: 4.2, ease: [0, 0, 1, 1], type: "tween" },
  Mt = { delay: 0, duration: 4.2, ease: [0, 0, 1, 1], type: "tween" },
  bi = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  _i = m.create(b),
  Ci = { "Variant 1": "uNOdB4q9_", mobile: "vcwO6svQk", tavlet: "eZ7gXPACW" },
  ki = ({ height: r, id: a, width: o, ...s }) => {
    var f, g;
    return {
      ...s,
      variant:
        (g = (f = Ci[s.variant]) !== null && f !== void 0 ? f : s.variant) !==
          null && g !== void 0
          ? g
          : "uNOdB4q9_",
    };
  },
  Fi = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Si = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      { style: f, className: g, layoutId: d, variant: x, ...u } = ki(r),
      {
        baseVariant: n,
        classNames: C,
        clearLoadingGesture: k,
        gestureHandlers: F,
        gestureVariant: w,
        isLoading: _,
        setGestureState: N,
        setVariant: j,
        variants: T,
      } = ce({
        cycleOrder: di,
        defaultVariant: "uNOdB4q9_",
        variant: x,
        variantClassNames: hi,
      }),
      p = Fi(r, T),
      M = R(null),
      Q = Je(),
      I = G(),
      h = [],
      t = le();
    return e(K, {
      id: d ?? I,
      children: e(_i, {
        animate: T,
        initial: !1,
        children: e(bi, {
          value: ui,
          children: v(m.div, {
            ...u,
            ...F,
            className: W(gi, ...h, "framer-1ehnbt3", g, C),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "uNOdB4q9_",
            ref: a ?? M,
            style: {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(255, 255, 255)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.13)",
              borderBottomLeftRadius: 395,
              borderBottomRightRadius: 395,
              borderTopLeftRadius: 395,
              borderTopRightRadius: 395,
              WebkitBackdropFilter: "blur(5px)",
              ...f,
            },
            ...oe(
              {
                eZ7gXPACW: { "data-framer-name": "tavlet" },
                vcwO6svQk: { "data-framer-name": "mobile" },
              },
              n,
              w
            ),
            children: [
              v(m.div, {
                className: "framer-295a8h",
                layoutDependency: p,
                layoutId: "S3B4wt4Po",
                children: [
                  e(Te, {
                    links: [
                      {
                        href: { hash: ":Lvn4zATka", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":Lvn4zATka", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":Lvn4zATka", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                    ],
                    children: (y) =>
                      e(H, {
                        height: 28,
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 33) / 2) +
                          5,
                        ...oe(
                          {
                            eZ7gXPACW: {
                              height: 29,
                              y:
                                (t?.y || 0) +
                                (8 + ((t?.height || 86) - 17 - 34) / 2) +
                                5,
                            },
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  0 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 0) +
                                5 +
                                0,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-1sf0tp5-container",
                          layoutDependency: p,
                          layoutId: "CVK6fuqd2-container",
                          whileTap: De,
                          children: e(ir, {
                            BgyErskUz: y[0],
                            Gac2rjSXD: "rgb(255, 255, 255)",
                            GtAI8HSlp: "about",
                            height: "100%",
                            id: "CVK6fuqd2",
                            layoutId: "CVK6fuqd2",
                            style: { height: "100%" },
                            v4tYVSv48: 22,
                            width: "100%",
                            ...oe(
                              {
                                eZ7gXPACW: { BgyErskUz: y[1], v4tYVSv48: 17 },
                                vcwO6svQk: { BgyErskUz: y[2] },
                              },
                              n,
                              w
                            ),
                          }),
                        }),
                      }),
                  }),
                  e(Te, {
                    links: [
                      {
                        href: { hash: ":bPvGVk24X", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":bPvGVk24X", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":bPvGVk24X", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                    ],
                    children: (y) =>
                      e(H, {
                        height: 28,
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 33) / 2) +
                          5,
                        ...oe(
                          {
                            eZ7gXPACW: {
                              height: 29,
                              y:
                                (t?.y || 0) +
                                (8 + ((t?.height || 86) - 17 - 34) / 2) +
                                5,
                            },
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  0 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 0) +
                                5 +
                                55,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-2410fg-container",
                          layoutDependency: p,
                          layoutId: "eEm8NymJQ-container",
                          whileTap: De,
                          children: e(ir, {
                            BgyErskUz: y[0],
                            Gac2rjSXD: "rgb(255, 255, 255)",
                            GtAI8HSlp: "Tokenomics",
                            height: "100%",
                            id: "eEm8NymJQ",
                            layoutId: "eEm8NymJQ",
                            style: { height: "100%" },
                            v4tYVSv48: 22,
                            width: "100%",
                            ...oe(
                              {
                                eZ7gXPACW: { BgyErskUz: y[1], v4tYVSv48: 17 },
                                vcwO6svQk: { BgyErskUz: y[2] },
                              },
                              n,
                              w
                            ),
                          }),
                        }),
                      }),
                  }),
                  e(Te, {
                    links: [
                      {
                        href: { hash: ":YRI7PFrXI", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":YRI7PFrXI", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                      {
                        href: { hash: ":YRI7PFrXI", webPageId: "augiA20Il" },
                        implicitPathVariables: void 0,
                      },
                    ],
                    children: (y) =>
                      e(H, {
                        height: 28,
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 33) / 2) +
                          5,
                        ...oe(
                          {
                            eZ7gXPACW: {
                              height: 29,
                              y:
                                (t?.y || 0) +
                                (8 + ((t?.height || 86) - 17 - 34) / 2) +
                                5,
                            },
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  0 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 0) +
                                5 +
                                110,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-83puhd-container",
                          layoutDependency: p,
                          layoutId: "yE8UhwKGo-container",
                          whileTap: De,
                          children: e(ir, {
                            BgyErskUz: y[0],
                            Gac2rjSXD: "rgb(255, 255, 255)",
                            GtAI8HSlp: "How To Buy",
                            height: "100%",
                            id: "yE8UhwKGo",
                            layoutId: "yE8UhwKGo",
                            style: { height: "100%" },
                            v4tYVSv48: 22,
                            width: "100%",
                            ...oe(
                              {
                                eZ7gXPACW: { BgyErskUz: y[1], v4tYVSv48: 17 },
                                vcwO6svQk: { BgyErskUz: y[2] },
                              },
                              n,
                              w
                            ),
                          }),
                        }),
                      }),
                  }),
                ],
              }),
              v(m.div, {
                className: "framer-jxtxqp",
                layoutDependency: p,
                layoutId: "nX03qgsZ3",
                children: [
                  e(q, {
                    href: { webPageId: "augiA20Il" },
                    nodeId: "pRhBL8l2V",
                    openInNewTab: !1,
                    smoothScroll: !0,
                    children: e(P, {
                      as: "a",
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1193,
                        intrinsicWidth: 897,
                        loading: l(
                          (t?.y || 0) +
                            (8 + ((t?.height || 86) - 17 - 69) / 2) +
                            0
                        ),
                        pixelHeight: 100,
                        pixelWidth: 100,
                        src: "/images/Ol0712S6HuLc3MPVc6p3pEdm1Q.png",
                      },
                      className: "framer-1epabs7 framer-1fyl7av",
                      "data-framer-name": "Sedi",
                      layoutDependency: p,
                      layoutId: "pRhBL8l2V",
                      ...oe(
                        {
                          vcwO6svQk: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1193,
                              intrinsicWidth: 897,
                              loading: l(
                                (t?.y || 0) +
                                  20 +
                                  (0 +
                                    143 +
                                    (((t?.height || 365) - 40 - 325) / 2) * 1) +
                                  0
                              ),
                              pixelHeight: 100,
                              pixelWidth: 100,
                              src: "/images/Ol0712S6HuLc3MPVc6p3pEdm1Q.png",
                            },
                          },
                        },
                        n,
                        w
                      ),
                    }),
                  }),
                  e(P, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 288,
                      intrinsicWidth: 2230,
                      loading: l(
                        (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 69) / 2) +
                          69 -
                          11.5
                      ),
                      pixelHeight: 288,
                      pixelWidth: 2400,
                      sizes: "164px",
                      src: "/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png",
                      srcSet:
                        "/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=512 512w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=1024 1024w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=2048 2048w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png 2400w",
                    },
                    className: "framer-12kmar4",
                    "data-framer-name": "Image",
                    layoutDependency: p,
                    layoutId: "OpUdxNaOu",
                    transformTemplate: Nt,
                    ...oe(
                      {
                        vcwO6svQk: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 288,
                            intrinsicWidth: 2230,
                            loading: l(
                              (t?.y || 0) +
                                20 +
                                (0 +
                                  143 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 1) +
                                69 -
                                11.5
                            ),
                            pixelHeight: 288,
                            pixelWidth: 2400,
                            sizes: "164px",
                            src: "/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png",
                            srcSet:
                              "/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=512 512w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=1024 1024w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png?scale-down-to=2048 2048w,/images/kxeEhPiylCrE0BOA7Qg2hQkXmBg.png 2400w",
                          },
                        },
                      },
                      n,
                      w
                    ),
                  }),
                ],
              }),
              v(m.div, {
                className: "framer-113lapx",
                layoutDependency: p,
                layoutId: "IeBViGTbm",
                children: [
                  v(m.div, {
                    className: "framer-l3ffq5",
                    layoutDependency: p,
                    layoutId: "s8F01QO30",
                    children: [
                      e(H, {
                        height: 40,
                        width: "40px",
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 53) / 2) +
                          6.5 +
                          0,
                        ...oe(
                          {
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  212 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 2) +
                                0 +
                                73 +
                                0,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-1r0on0j-container",
                          layoutDependency: p,
                          layoutId: "X9ugrOcIi-container",
                          whileTap: De,
                          children: e(Fe, {
                            fL82VuRHx: Hr(
                              {
                                src: "/images/Ne6LIN9jdxx0Z4isbrZ93I5Jc0.png",
                                srcSet:
                                  "/images/Ne6LIN9jdxx0Z4isbrZ93I5Jc0.png?scale-down-to=512 512w,/images/Ne6LIN9jdxx0Z4isbrZ93I5Jc0.png?scale-down-to=1024 1024w,/images/Ne6LIN9jdxx0Z4isbrZ93I5Jc0.png?scale-down-to=2048 2048w,/images/Ne6LIN9jdxx0Z4isbrZ93I5Jc0.png 3456w",
                              },
                              ""
                            ),
                            height: "100%",
                            id: "X9ugrOcIi",
                            layoutId: "X9ugrOcIi",
                            style: { height: "100%", width: "100%" },
                            TeZLuQw15: "https://x.com/SantaGameEth",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(H, {
                        height: 40,
                        width: "40px",
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 53) / 2) +
                          6.5 +
                          0,
                        ...oe(
                          {
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  212 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 2) +
                                0 +
                                73 +
                                0,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-19lzw9f-container",
                          layoutDependency: p,
                          layoutId: "kVOLVb3XI-container",
                          whileTap: De,
                          children: e(Fe, {
                            fL82VuRHx: Hr(
                              {
                                src: "/images/ZBpusCQUEB3gfLckUnPE18O3Hg.png",
                                srcSet:
                                  "/images/ZBpusCQUEB3gfLckUnPE18O3Hg.png?scale-down-to=512 512w,/images/ZBpusCQUEB3gfLckUnPE18O3Hg.png?scale-down-to=1024 1024w,/images/ZBpusCQUEB3gfLckUnPE18O3Hg.png?scale-down-to=2048 2048w,/images/ZBpusCQUEB3gfLckUnPE18O3Hg.png 3456w",
                              },
                              ""
                            ),
                            height: "100%",
                            id: "kVOLVb3XI",
                            layoutId: "kVOLVb3XI",
                            style: { height: "100%", width: "100%" },
                            TeZLuQw15:
                              "https://dexscreener.com/ethereum/0x46e8c5ad74608d37f5eadf5c0dd93490edcd7dd8",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(H, {
                        height: 40,
                        width: "40px",
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 53) / 2) +
                          6.5 +
                          0,
                        ...oe(
                          {
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  212 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 2) +
                                0 +
                                73 +
                                0,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-1fi7n2k-container",
                          layoutDependency: p,
                          layoutId: "CafVTJW_r-container",
                          whileTap: De,
                          children: e(Fe, {
                            fL82VuRHx: Hr(
                              {
                                src: "/images/kj1gSTg2xloqx9MCxPWdK4PNA.png",
                                srcSet:
                                  "/images/kj1gSTg2xloqx9MCxPWdK4PNA.png?scale-down-to=512 512w,/images/kj1gSTg2xloqx9MCxPWdK4PNA.png?scale-down-to=1024 1024w,/images/kj1gSTg2xloqx9MCxPWdK4PNA.png?scale-down-to=2048 2048w,/images/kj1gSTg2xloqx9MCxPWdK4PNA.png 3456w",
                              },
                              ""
                            ),
                            height: "100%",
                            id: "CafVTJW_r",
                            layoutId: "CafVTJW_r",
                            style: { height: "100%", width: "100%" },
                            TeZLuQw15:
                              "https://www.dextools.io/app/en/token/santagame07?t=1734733035821",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(H, {
                        height: 40,
                        width: "40px",
                        y:
                          (t?.y || 0) +
                          (8 + ((t?.height || 86) - 17 - 53) / 2) +
                          6.5 +
                          0,
                        ...oe(
                          {
                            vcwO6svQk: {
                              y:
                                (t?.y || 0) +
                                20 +
                                (0 +
                                  212 +
                                  (((t?.height || 365) - 40 - 325) / 2) * 2) +
                                0 +
                                73 +
                                0,
                            },
                          },
                          n,
                          w
                        ),
                        children: e(m.div, {
                          className: "framer-sq0tfc-container",
                          layoutDependency: p,
                          layoutId: "N7qyTNpdu-container",
                          whileTap: De,
                          children: e(Fe, {
                            fL82VuRHx: Hr(
                              {
                                src: "/images/bO653BonbSv6HI87PyBQAUfcyE.png",
                                srcSet:
                                  "/images/bO653BonbSv6HI87PyBQAUfcyE.png?scale-down-to=512 512w,/images/bO653BonbSv6HI87PyBQAUfcyE.png?scale-down-to=1024 1024w,/images/bO653BonbSv6HI87PyBQAUfcyE.png?scale-down-to=2048 2048w,/images/bO653BonbSv6HI87PyBQAUfcyE.png 3456w",
                              },
                              ""
                            ),
                            height: "100%",
                            id: "N7qyTNpdu",
                            layoutId: "N7qyTNpdu",
                            style: { height: "100%", width: "100%" },
                            TeZLuQw15: "https://t.me/santagameoneth",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  e(H, {
                    height: 53,
                    y:
                      (t?.y || 0) + (8 + ((t?.height || 86) - 17 - 53) / 2) + 0,
                    ...oe(
                      {
                        vcwO6svQk: {
                          width: `calc(${t?.width || "100vw"} - 60px)`,
                          y:
                            (t?.y || 0) +
                            20 +
                            (0 +
                              212 +
                              (((t?.height || 365) - 40 - 325) / 2) * 2) +
                            0 +
                            0,
                        },
                      },
                      n,
                      w
                    ),
                    children: e(m.div, {
                      className: "framer-7p43dy-container",
                      layoutDependency: p,
                      layoutId: "x1P_tbnCG-container",
                      whileTap: wi,
                      children: e(Ae, {
                        height: "100%",
                        id: "x1P_tbnCG",
                        layoutId: "x1P_tbnCG",
                        NjAk50iJD: 20,
                        rX_TO6nhQ: "rgb(255, 255, 255)",
                        Uf_khRTfT: "buy now",
                        variant: "u5cKgYsev",
                        width: "100%",
                        Z9i0v4qpe:
                          "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                        ...oe(
                          { vcwO6svQk: { style: { width: "100%" } } },
                          n,
                          w
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              e(or, {
                __framer__loop: nr,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 1.4,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: xi,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 0.38,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l((t?.y || 0) + (t?.height || 86) - 144),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "28px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-fjot3f",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "hmmBLJXEE",
                style: { opacity: 0.38, rotate: 31 },
                ...oe(
                  {
                    vcwO6svQk: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 932,
                        intrinsicWidth: 815,
                        loading: l((t?.y || 0) + (t?.height || 365) - 144),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "28px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                    },
                  },
                  n,
                  w
                ),
              }),
              e(P, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l((t?.y || 0) + 15.005803260943651),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "27.9828px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-13bz5bs",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "arCrkyrau",
                style: { opacity: 0.02, rotate: 31 },
              }),
              e(P, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l(
                    (t?.y || 0) + (t?.height || 86) - 19.994180748907468
                  ),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "27.9828px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-1asd0gl",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "birUwJ45r",
                style: { opacity: 0.1, rotate: 31 },
                ...oe(
                  {
                    vcwO6svQk: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 932,
                        intrinsicWidth: 815,
                        loading: l(
                          (t?.y || 0) + (t?.height || 365) - 19.994180748907468
                        ),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "27.9828px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                    },
                  },
                  n,
                  w
                ),
              }),
              e(or, {
                __framer__loop: nr,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0.5,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: vi,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 0.75,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l((t?.y || 0) + -47.99418102133927),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "27.9828px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-lupa2r",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "gwsmBvWai",
                style: { opacity: 0.75, rotate: 31 },
              }),
              e(or, {
                __framer__loop: nr,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 2.1,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: yi,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 0.63,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l((t?.y || 0) + -98),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "46px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-iek0vn",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "icc4FFyDm",
                style: { opacity: 0.63, rotate: 31 },
              }),
              e(or, {
                __framer__loop: nr,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0.5,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: Mt,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 0.63,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l((t?.y || 0) + -79),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "46px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-qm2tip",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "h5L0JOCAS",
                style: { opacity: 0.63, rotate: 31 },
                transformTemplate: Nt,
              }),
              e(P, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 932,
                  intrinsicWidth: 815,
                  loading: l(
                    (t?.y || 0) + (t?.height || 86) - 34.91034798977975
                  ),
                  pixelHeight: 932,
                  pixelWidth: 815,
                  sizes: "46.3466px",
                  src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                  srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                },
                className: "framer-1kme2d3",
                "data-framer-name": "Pahulja 1",
                layoutDependency: p,
                layoutId: "YAD1XtSbf",
                style: { opacity: 0.1, rotate: 31 },
                ...oe(
                  {
                    vcwO6svQk: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 932,
                        intrinsicWidth: 815,
                        loading: l(
                          (t?.y || 0) + (t?.height || 365) - 34.91034798977975
                        ),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "46.3466px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                    },
                  },
                  n,
                  w
                ),
              }),
              e(or, {
                __framer__loop: nr,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: Mt,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 0.46,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1241,
                  intrinsicWidth: 1419,
                  loading: l((t?.y || 0) + (t?.height || 86) - 148),
                  pixelHeight: 1241,
                  pixelWidth: 1419,
                  sizes: "53px",
                  src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png",
                  srcSet:
                    "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                },
                className: "framer-1olfddo",
                "data-framer-name": "Pahulje 2",
                layoutDependency: p,
                layoutId: "rGkIUa1GK",
                style: { opacity: 0.46, rotate: 11 },
                ...oe(
                  {
                    vcwO6svQk: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1241,
                        intrinsicWidth: 1419,
                        loading: l((t?.y || 0) + (t?.height || 365) - 148),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "53px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                    },
                  },
                  n,
                  w
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  zi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-jvIUF.framer-1fyl7av, .framer-jvIUF .framer-1fyl7av { display: block; }",
    ".framer-jvIUF.framer-1ehnbt3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 8px 30px 9px 30px; position: relative; width: 1600px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jvIUF .framer-295a8h { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: flex-start; overflow: visible; padding: 5px 0px 0px 0px; position: relative; width: 1px; z-index: 5; }",
    ".framer-jvIUF .framer-1sf0tp5-container, .framer-jvIUF .framer-2410fg-container, .framer-jvIUF .framer-83puhd-container { flex: none; height: 28px; position: relative; width: auto; }",
    ".framer-jvIUF .framer-jxtxqp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 360px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-jvIUF .framer-1epabs7 { aspect-ratio: 1.1304347826086956 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 69px); overflow: visible; position: relative; text-decoration: none; width: 78px; z-index: 4; }",
    ".framer-jvIUF .framer-12kmar4 { aspect-ratio: 9.45 / 1; bottom: -6px; flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: 68%; overflow: visible; position: absolute; width: 164px; z-index: 1; }",
    ".framer-jvIUF .framer-113lapx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 5; }",
    ".framer-jvIUF .framer-l3ffq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-jvIUF .framer-1r0on0j-container, .framer-jvIUF .framer-19lzw9f-container, .framer-jvIUF .framer-1fi7n2k-container, .framer-jvIUF .framer-sq0tfc-container { flex: none; height: 40px; position: relative; width: 40px; }",
    ".framer-jvIUF .framer-7p43dy-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-jvIUF .framer-fjot3f { aspect-ratio: 0.8744635193133047 / 1; bottom: 112px; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 483px; overflow: visible; position: absolute; width: 28px; z-index: 1; }",
    ".framer-jvIUF .framer-13bz5bs { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: absolute; right: 677px; top: 15px; width: 28px; z-index: 1; }",
    ".framer-jvIUF .framer-1asd0gl { aspect-ratio: 0.8744635193133047 / 1; bottom: -12px; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: absolute; right: 493px; width: 28px; z-index: 1; }",
    ".framer-jvIUF .framer-lupa2r { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 669px; overflow: visible; position: absolute; top: -48px; width: 28px; z-index: 1; }",
    ".framer-jvIUF .framer-iek0vn { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 53px); overflow: visible; position: absolute; right: 36px; top: -98px; width: 46px; z-index: 1; }",
    ".framer-jvIUF .framer-qm2tip { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 53px); left: 21%; overflow: visible; position: absolute; top: -79px; width: 46px; z-index: 1; }",
    ".framer-jvIUF .framer-1kme2d3 { aspect-ratio: 0.8744635193133047 / 1; bottom: -18px; flex: none; height: var(--framer-aspect-ratio-supported, 53px); left: 19px; overflow: visible; position: absolute; width: 46px; z-index: 1; }",
    ".framer-jvIUF .framer-1olfddo { aspect-ratio: 1.1434327155519741 / 1; bottom: 102px; flex: none; height: var(--framer-aspect-ratio-supported, 46px); overflow: visible; position: absolute; right: 540px; width: 53px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jvIUF .framer-295a8h, .framer-jvIUF .framer-jxtxqp, .framer-jvIUF .framer-113lapx, .framer-jvIUF .framer-l3ffq5 { gap: 0px; } .framer-jvIUF .framer-295a8h > * { margin: 0px; margin-left: calc(27px / 2); margin-right: calc(27px / 2); } .framer-jvIUF .framer-295a8h > :first-child, .framer-jvIUF .framer-jxtxqp > :first-child, .framer-jvIUF .framer-113lapx > :first-child, .framer-jvIUF .framer-l3ffq5 > :first-child { margin-left: 0px; } .framer-jvIUF .framer-295a8h > :last-child, .framer-jvIUF .framer-jxtxqp > :last-child, .framer-jvIUF .framer-113lapx > :last-child, .framer-jvIUF .framer-l3ffq5 > :last-child { margin-right: 0px; } .framer-jvIUF .framer-jxtxqp > *, .framer-jvIUF .framer-113lapx > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-jvIUF .framer-l3ffq5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-jvIUF.framer-v-17c8ngq.framer-1ehnbt3 { padding: 8px 10px 9px 20px; width: 900px; }",
    ".framer-jvIUF.framer-v-17c8ngq .framer-295a8h { gap: 12px; }",
    ".framer-jvIUF.framer-v-17c8ngq .framer-1sf0tp5-container, .framer-jvIUF.framer-v-17c8ngq .framer-2410fg-container, .framer-jvIUF.framer-v-17c8ngq .framer-83puhd-container { height: auto; }",
    ".framer-jvIUF.framer-v-17c8ngq .framer-jxtxqp { width: 16px; }",
    ".framer-jvIUF.framer-v-17c8ngq .framer-113lapx { gap: 9px; }",
    ".framer-jvIUF.framer-v-17c8ngq .framer-l3ffq5 { gap: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jvIUF.framer-v-17c8ngq .framer-295a8h, .framer-jvIUF.framer-v-17c8ngq .framer-113lapx, .framer-jvIUF.framer-v-17c8ngq .framer-l3ffq5 { gap: 0px; } .framer-jvIUF.framer-v-17c8ngq .framer-295a8h > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-jvIUF.framer-v-17c8ngq .framer-295a8h > :first-child, .framer-jvIUF.framer-v-17c8ngq .framer-113lapx > :first-child, .framer-jvIUF.framer-v-17c8ngq .framer-l3ffq5 > :first-child { margin-left: 0px; } .framer-jvIUF.framer-v-17c8ngq .framer-295a8h > :last-child, .framer-jvIUF.framer-v-17c8ngq .framer-113lapx > :last-child, .framer-jvIUF.framer-v-17c8ngq .framer-l3ffq5 > :last-child { margin-right: 0px; } .framer-jvIUF.framer-v-17c8ngq .framer-113lapx > * { margin: 0px; margin-left: calc(9px / 2); margin-right: calc(9px / 2); } .framer-jvIUF.framer-v-17c8ngq .framer-l3ffq5 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",
    ".framer-jvIUF.framer-v-1gxfm2d.framer-1ehnbt3 { flex-direction: column; padding: 20px 30px 20px 30px; width: 390px; }",
    ".framer-jvIUF.framer-v-1gxfm2d .framer-295a8h, .framer-jvIUF.framer-v-1gxfm2d .framer-113lapx { flex: none; flex-direction: column; width: 100%; }",
    ".framer-jvIUF.framer-v-1gxfm2d .framer-l3ffq5 { order: 1; }",
    ".framer-jvIUF.framer-v-1gxfm2d .framer-7p43dy-container { order: 0; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jvIUF.framer-v-1gxfm2d.framer-1ehnbt3, .framer-jvIUF.framer-v-1gxfm2d .framer-295a8h, .framer-jvIUF.framer-v-1gxfm2d .framer-113lapx { gap: 0px; } .framer-jvIUF.framer-v-1gxfm2d.framer-1ehnbt3 > *, .framer-jvIUF.framer-v-1gxfm2d.framer-1ehnbt3 > :first-child, .framer-jvIUF.framer-v-1gxfm2d.framer-1ehnbt3 > :last-child { margin: 0px; } .framer-jvIUF.framer-v-1gxfm2d .framer-295a8h > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-jvIUF.framer-v-1gxfm2d .framer-295a8h > :first-child, .framer-jvIUF.framer-v-1gxfm2d .framer-113lapx > :first-child { margin-top: 0px; } .framer-jvIUF.framer-v-1gxfm2d .framer-295a8h > :last-child, .framer-jvIUF.framer-v-1gxfm2d .framer-113lapx > :last-child { margin-bottom: 0px; } .framer-jvIUF.framer-v-1gxfm2d .framer-113lapx > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }",
    '.framer-jvIUF[data-border="true"]::after, .framer-jvIUF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  sr = D(Si, zi, "framer-jvIUF"),
  Gr = sr;
sr.displayName = "Nav Bar";
sr.defaultProps = { height: 86, width: 1600 };
B(sr, {
  variant: {
    options: ["uNOdB4q9_", "eZ7gXPACW", "vcwO6svQk"],
    optionTitles: ["Variant 1", "tavlet", "mobile"],
    title: "Variant",
    type: c.Enum,
  },
});
ee(sr, [{ explicitInter: !0, fonts: [] }, ...mi, ...pi, ...fi], {
  supportsExplicitInterCodegen: !0,
});
var Hi = { ts4_TZEYp: { hover: !0 } },
  Ai = "framer-n2Cpd",
  Vi = { ts4_TZEYp: "framer-v-2f1l57" };
function Ti(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var Ii = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Lt = (r, a) => `translateX(-50%) ${a}`,
  Ri = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  Pi = m.create(b),
  Ni = ({ height: r, id: a, width: o, ...s }) => ({ ...s }),
  Mi = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Qi = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      { style: f, className: g, layoutId: d, variant: x, ...u } = Ni(r),
      {
        baseVariant: n,
        classNames: C,
        clearLoadingGesture: k,
        gestureHandlers: F,
        gestureVariant: w,
        isLoading: _,
        setGestureState: N,
        setVariant: j,
        variants: T,
      } = ce({
        defaultVariant: "ts4_TZEYp",
        enabledGestures: Hi,
        variant: x,
        variantClassNames: Vi,
      }),
      p = Mi(r, T),
      M = R(null),
      Q = G(),
      I = [],
      h = le();
    return e(K, {
      id: d ?? Q,
      children: e(Pi, {
        animate: T,
        initial: !1,
        children: e(Ri, {
          value: Ii,
          children: e(q, {
            href: "/",
            nodeId: "ts4_TZEYp",
            openInNewTab: !1,
            children: v(m.a, {
              ...u,
              ...F,
              className: `${W(Ai, ...I, "framer-2f1l57", g, C)} framer-1dsn0p3`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: p,
              layoutId: "ts4_TZEYp",
              ref: a ?? M,
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(255, 255, 255)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                borderBottomLeftRadius: 11,
                borderBottomRightRadius: 11,
                borderTopLeftRadius: 11,
                borderTopRightRadius: 11,
                WebkitBackdropFilter: "blur(15px)",
                ...f,
              },
              variants: {
                "ts4_TZEYp-hover": { backgroundColor: "rgba(0, 0, 0, 0.54)" },
              },
              ...Ti(
                { "ts4_TZEYp-hover": { "data-framer-name": void 0 } },
                n,
                w
              ),
              children: [
                e(te, {
                  __fromCanvasComponent: !0,
                  children: e(b, {
                    children: e(m.p, {
                      style: {
                        "--font-selector":
                          "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                        "--framer-font-family": '"Kaushan Script", sans-serif',
                        "--framer-letter-spacing": "0.05em",
                        "--framer-line-height": "0.9em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        "--framer-text-transform": "capitalize",
                      },
                      children: "skip",
                    }),
                  }),
                  className: "framer-y55ac4",
                  fonts: ["GF;Kaushan Script-regular"],
                  layoutDependency: p,
                  layoutId: "kqWQe8GJs",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l((h?.y || 0) + -8.98995707254744),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "20px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-1y27ng6",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "DBwxbJIOI",
                  style: { opacity: 0.1, rotate: 31 },
                  transformTemplate: Lt,
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l(
                      (h?.y || 0) + (h?.height || 46) - 15.01004292745256
                    ),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "6px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-129gkbm",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "wNojaXgyE",
                  style: { opacity: 0.1, rotate: 31 },
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l((h?.y || 0) + 1.0100429274526732),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "8px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-fzgln3",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "jdHtWSWdu",
                  style: { opacity: 0.1, rotate: 31 },
                  transformTemplate: Lt,
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l(
                      (h?.y || 0) + (h?.height || 46) - 7.9899570725474405
                    ),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "8px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-s6ygsy",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "oU1ReuEM2",
                  style: { opacity: 0.1, rotate: 31 },
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l((h?.y || 0) + 2.9899570725474405),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "6px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-1lweska",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "ss0LlL2OV",
                  style: { opacity: 0.1, rotate: 31 },
                }),
                e(P, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 932,
                    intrinsicWidth: 815,
                    loading: l(
                      (h?.y || 0) + (h?.height || 46) - 14.010042927452673
                    ),
                    pixelHeight: 932,
                    pixelWidth: 815,
                    sizes: "13px",
                    src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png",
                    srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                  },
                  className: "framer-f96v6g",
                  "data-framer-name": "Pahulja 1",
                  layoutDependency: p,
                  layoutId: "ea_cMN1XL",
                  style: { opacity: 0.1, rotate: 31 },
                }),
                e(m.div, {
                  className: "framer-1pgayzn",
                  layoutDependency: p,
                  layoutId: "vBzVWz3Nc",
                  children: e(ht, {
                    className: "framer-115fgdm",
                    "data-framer-name": "Arrow-bar-to-right",
                    fill: "black",
                    intrinsicHeight: 16,
                    intrinsicWidth: 16,
                    layoutDependency: p,
                    layoutId: "z8C6X2GQU",
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H4m10 0-4 4m4-4-4-4m10-4v16"/></svg>',
                    withExternalLayout: !0,
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Li = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-n2Cpd.framer-1dsn0p3, .framer-n2Cpd .framer-1dsn0p3 { display: block; }",
    ".framer-n2Cpd.framer-2f1l57 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 20px 15px 25px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-n2Cpd .framer-y55ac4 { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-n2Cpd .framer-1y27ng6 { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: 92%; overflow: visible; position: absolute; top: -9px; width: 20px; z-index: 1; }",
    ".framer-n2Cpd .framer-129gkbm { aspect-ratio: 0.8744635193133047 / 1; bottom: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 7px); left: 37px; overflow: visible; position: absolute; width: 6px; z-index: 1; }",
    ".framer-n2Cpd .framer-fzgln3 { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); left: 46%; overflow: visible; position: absolute; top: 1px; width: 8px; z-index: 1; }",
    ".framer-n2Cpd .framer-s6ygsy { aspect-ratio: 0.8744635193133047 / 1; bottom: -2px; flex: none; height: var(--framer-aspect-ratio-supported, 9px); left: 76px; overflow: visible; position: absolute; width: 8px; z-index: 1; }",
    ".framer-n2Cpd .framer-1lweska { aspect-ratio: 0.8744635193133047 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 7px); left: 13px; overflow: visible; position: absolute; top: 3px; width: 6px; z-index: 1; }",
    ".framer-n2Cpd .framer-f96v6g { aspect-ratio: 0.8744635193133047 / 1; bottom: -1px; flex: none; height: var(--framer-aspect-ratio-supported, 15px); left: 4px; overflow: visible; position: absolute; width: 13px; z-index: 1; }",
    ".framer-n2Cpd .framer-1pgayzn { -webkit-user-select: none; flex: none; height: 16px; overflow: visible; pointer-events: none; position: relative; user-select: none; width: 16px; }",
    ".framer-n2Cpd .framer-115fgdm { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-n2Cpd.framer-2f1l57 { gap: 0px; } .framer-n2Cpd.framer-2f1l57 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-n2Cpd.framer-2f1l57 > :first-child { margin-left: 0px; } .framer-n2Cpd.framer-2f1l57 > :last-child { margin-right: 0px; } }",
    ".framer-n2Cpd.framer-v-2f1l57.hover.framer-2f1l57 { gap: 14px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-n2Cpd.framer-v-2f1l57.hover.framer-2f1l57 { gap: 0px; } .framer-n2Cpd.framer-v-2f1l57.hover.framer-2f1l57 > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-n2Cpd.framer-v-2f1l57.hover.framer-2f1l57 > :first-child { margin-left: 0px; } .framer-n2Cpd.framer-v-2f1l57.hover.framer-2f1l57 > :last-child { margin-right: 0px; } }",
    '.framer-n2Cpd[data-border="true"]::after, .framer-n2Cpd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ar = D(Qi, Li, "framer-n2Cpd"),
  Vr = Ar;
Ar.displayName = "trailer skip";
Ar.defaultProps = { height: 46, width: 102 };
ee(
  Ar,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kaushan Script",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kaushanscript/v18/vm8vdRfvXFLG3OLnsO15WYS5DF76ytN3M48a.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Zr,
  Bt = (r) => {
    if (!Zr) {
      let a = r.forwardRef(
        ({ color: o = "currentColor", size: s = 24, ...f }, g) =>
          r.createElement(
            "svg",
            {
              ref: g,
              xmlns: "http://www.w3.org/2000/svg",
              width: s,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              ...f,
            },
            r.createElement("path", {
              d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            }),
            r.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })
          )
      );
      (a.displayName = "Home"), (Zr = a);
    }
    return Zr;
  };
var Tr = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "at-sign",
    "award",
    "bar-chart",
    "bar-chart-2",
    "battery",
    "battery-charging",
    "bell",
    "bell-off",
    "bluetooth",
    "bold",
    "book",
    "book-open",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera",
    "camera-off",
    "cast",
    "check",
    "check-circle",
    "check-square",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide",
    "divide-circle",
    "divide-square",
    "dollar-sign",
    "download",
    "download-cloud",
    "dribbble",
    "droplet",
    "edit",
    "edit-2",
    "edit-3",
    "external-link",
    "eye",
    "eye-off",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file",
    "file-minus",
    "file-plus",
    "file-text",
    "film",
    "filter",
    "flag",
    "folder",
    "folder-minus",
    "folder-plus",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link",
    "link-2",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map",
    "map-pin",
    "maximize",
    "maximize-2",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic",
    "mic-off",
    "minimize",
    "minimize-2",
    "minus",
    "minus-circle",
    "minus-square",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation",
    "navigation-2",
    "octagon",
    "package",
    "paperclip",
    "pause",
    "pause-circle",
    "pen-tool",
    "percent",
    "phone",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "pie-chart",
    "play",
    "play-circle",
    "plus",
    "plus-circle",
    "plus-square",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share",
    "share-2",
    "shield",
    "shield-off",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash",
    "trash-2",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload",
    "upload-cloud",
    "user",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "users",
    "video",
    "video-off",
    "voicemail",
    "volume",
    "volume-1",
    "volume-2",
    "volume-x",
    "watch",
    "wifi",
    "wifi-off",
    "wind",
    "x",
    "x-circle",
    "x-octagon",
    "x-square",
    "youtube",
    "zap",
    "zap-off",
    "zoom-in",
    "zoom-out",
  ],
  Bi = "https://framer.com/m/feather-icons/",
  ji = Tr.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
  Ei = Tr.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function Re(r) {
  let {
      color: a,
      selectByList: o,
      iconSearch: s,
      iconSelection: f,
      onClick: g,
      onMouseDown: d,
      onMouseUp: x,
      onMouseEnter: u,
      onMouseLeave: n,
      mirrored: C,
    } = r,
    k = R(!1),
    F = zr(Tr, o, s, f, Ei),
    [w, _] = ze(F === "Home" ? Bt(pe) : null);
  async function N() {
    let p = !0;
    try {
      let Q = await import(`${Bi}${F}.js@0.0.29`);
      p && _(Q.default(pe));
    } catch (M) {
      console.log(M), p && _(null);
    }
    return () => {
      p = !1;
    };
  }
  _e(() => {
    N();
  }, [F]);
  let T = ke.current() === ke.canvas ? e(Fr, {}) : null;
  return e("div", {
    style: { display: "contents" },
    onClick: g,
    onMouseEnter: u,
    onMouseLeave: n,
    onMouseDown: d,
    onMouseUp: x,
    children: w
      ? e(w, {
          style: {
            width: "100%",
            height: "100%",
            transform: C ? "scale(-1, 1)" : void 0,
          },
          color: a,
        })
      : T,
  });
}
Re.displayName = "Feather";
Re.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
B(Re, {
  selectByList: {
    type: c.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Re.defaultProps.selectByList,
  },
  iconSelection: {
    type: c.Enum,
    options: Tr,
    optionTitles: ji,
    defaultValue: Re.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Feather site](https://feathericons.com/)",
  },
  iconSearch: {
    type: c.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  mirrored: {
    type: c.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Re.defaultProps.mirrored,
  },
  color: { type: c.Color, title: "Color", defaultValue: Re.defaultProps.color },
  ...Sr,
});
var Di = { YEg9NfTwc: { hover: !0, pressed: !0 } },
  qi = "framer-pwqh1",
  Yi = { YEg9NfTwc: "framer-v-1xm3gbd" };
function jt(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var Ji = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Wi = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  Oi = m.create(b),
  Ui = ({
    click: r,
    color: a,
    fontSize: o,
    height: s,
    id: f,
    link: g,
    title: d,
    width: x,
    ...u
  }) => {
    var n, C, k;
    return {
      ...u,
      aijqetpdn: r ?? u.aijqetpdn,
      BgyErskUz: g ?? u.BgyErskUz,
      Gac2rjSXD:
        (n = a ?? u.Gac2rjSXD) !== null && n !== void 0
          ? n
          : "rgb(255, 255, 255)",
      GtAI8HSlp:
        (C = d ?? u.GtAI8HSlp) !== null && C !== void 0 ? C : "creators",
      v4tYVSv48: (k = o ?? u.v4tYVSv48) !== null && k !== void 0 ? k : 24,
    };
  },
  Xi = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Gi = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        GtAI8HSlp: u,
        Gac2rjSXD: n,
        BgyErskUz: C,
        aijqetpdn: k,
        v4tYVSv48: F,
        ...w
      } = Ui(r),
      {
        baseVariant: _,
        classNames: N,
        clearLoadingGesture: j,
        gestureHandlers: T,
        gestureVariant: p,
        isLoading: M,
        setGestureState: Q,
        setVariant: I,
        variants: h,
      } = ce({
        defaultVariant: "YEg9NfTwc",
        enabledGestures: Di,
        variant: x,
        variantClassNames: Yi,
      }),
      t = Xi(r, h),
      { activeVariantCallback: y, delay: he } = Ie(_),
      ue = y(async (...z) => {
        if ((Q({ isPressed: !1 }), k && (await k(...z)) === !1)) return !1;
      }),
      we = R(null),
      ge = G(),
      ne = [],
      xe = le();
    return e(K, {
      id: d ?? ge,
      children: e(Oi, {
        animate: h,
        initial: !1,
        children: e(Wi, {
          value: Ji,
          children: e(q, {
            href: C,
            nodeId: "YEg9NfTwc",
            smoothScroll: !0,
            children: e(m.a, {
              ...w,
              ...T,
              className: `${W(
                qi,
                ...ne,
                "framer-1xm3gbd",
                g,
                N
              )} framer-1bgv3uj`,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: t,
              layoutId: "YEg9NfTwc",
              onTap: ue,
              ref: a ?? we,
              style: { ...f },
              ...jt(
                {
                  "YEg9NfTwc-hover": { "data-framer-name": void 0 },
                  "YEg9NfTwc-pressed": { "data-framer-name": void 0 },
                },
                _,
                p
              ),
              children: e(te, {
                __fromCanvasComponent: !0,
                children: e(b, {
                  children: e(m.p, {
                    style: {
                      "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                      "--framer-font-family": '"Kavoon", sans-serif',
                      "--framer-font-size":
                        "calc(var(--variable-reference-v4tYVSv48-AtZT0oWzB) * 1px)",
                      "--framer-letter-spacing": "0.03em",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--variable-reference-Gac2rjSXD-AtZT0oWzB))",
                      "--framer-text-transform": "capitalize",
                    },
                    children: "creators",
                  }),
                }),
                className: "framer-k9412s",
                fonts: ["GF;Kavoon-regular"],
                layoutDependency: t,
                layoutId: "lajnfLnKZ",
                style: {
                  "--extracted-r6o4lv":
                    "var(--variable-reference-Gac2rjSXD-AtZT0oWzB)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--variable-reference-Gac2rjSXD-AtZT0oWzB": n,
                  "--variable-reference-v4tYVSv48-AtZT0oWzB": F,
                },
                text: u,
                variants: {
                  "YEg9NfTwc-hover": {
                    "--extracted-r6o4lv": "rgb(0, 178, 255)",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...jt(
                  {
                    "YEg9NfTwc-hover": {
                      children: e(b, {
                        children: e(m.p, {
                          style: {
                            "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                            "--framer-font-family": '"Kavoon", sans-serif',
                            "--framer-font-size":
                              "calc(var(--variable-reference-v4tYVSv48-AtZT0oWzB) * 1px)",
                            "--framer-letter-spacing": "0.03em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(0, 178, 255))",
                            "--framer-text-transform": "capitalize",
                          },
                          children: "creators",
                        }),
                      }),
                    },
                  },
                  _,
                  p
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Zi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pwqh1.framer-1bgv3uj, .framer-pwqh1 .framer-1bgv3uj { display: block; }",
    ".framer-pwqh1.framer-1xm3gbd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-pwqh1 .framer-k9412s { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pwqh1.framer-1xm3gbd { gap: 0px; } .framer-pwqh1.framer-1xm3gbd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-pwqh1.framer-1xm3gbd > :first-child { margin-left: 0px; } .framer-pwqh1.framer-1xm3gbd > :last-child { margin-right: 0px; } }",
  ],
  lr = D(Gi, Zi, "framer-pwqh1"),
  Xe = lr;
lr.displayName = "Links nav";
lr.defaultProps = { height: 29, width: 105 };
B(lr, {
  GtAI8HSlp: {
    defaultValue: "creators",
    displayTextArea: !1,
    title: "Title",
    type: c.String,
  },
  Gac2rjSXD: {
    defaultValue: "rgb(255, 255, 255)",
    title: "Color",
    type: c.Color,
  },
  BgyErskUz: { title: "Link", type: c.Link },
  aijqetpdn: { title: "Click", type: c.EventHandler },
  v4tYVSv48: { defaultValue: 24, title: "Font Size", type: c.Number },
});
ee(
  lr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kavoon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kavoon/v23/pxiFyp4_scRYhlU4Mbr6f1pdEQ.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ki = { eCusnvi8g: { hover: !0, pressed: !0 } },
  $i = "framer-aJKVy",
  eo = { eCusnvi8g: "framer-v-v70eay" };
function ro(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var to = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ao = (r) =>
    typeof r == "object" && r !== null && typeof r.src == "string"
      ? r
      : typeof r == "string"
      ? { src: r }
      : void 0,
  io = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  oo = m.create(b),
  no = ({ height: r, id: a, image: o, link: s, width: f, ...g }) => {
    var d;
    return {
      ...g,
      fL82VuRHx:
        (d = o ?? g.fL82VuRHx) !== null && d !== void 0
          ? d
          : {
              src: "/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png?scale-down-to=512",
              srcSet:
                "/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png?scale-down-to=512 512w,/images/gqPA6KtJVqlXF9oyIClJXOmwuoE.png 1000w",
            },
      TeZLuQw15: s ?? g.TeZLuQw15,
    };
  },
  so = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  lo = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        fL82VuRHx: u,
        TeZLuQw15: n,
        ...C
      } = no(r),
      {
        baseVariant: k,
        classNames: F,
        clearLoadingGesture: w,
        gestureHandlers: _,
        gestureVariant: N,
        isLoading: j,
        setGestureState: T,
        setVariant: p,
        variants: M,
      } = ce({
        defaultVariant: "eCusnvi8g",
        enabledGestures: Ki,
        variant: x,
        variantClassNames: eo,
      }),
      Q = so(r, M),
      I = R(null),
      h = G(),
      t = [],
      y = le();
    return e(K, {
      id: d ?? h,
      children: e(oo, {
        animate: M,
        initial: !1,
        children: e(io, {
          value: to,
          children: e(q, {
            href: n,
            nodeId: "eCusnvi8g",
            openInNewTab: !0,
            children: e(m.a, {
              ...C,
              ..._,
              className: `${W($i, ...t, "framer-v70eay", g, F)} framer-p839jn`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: Q,
              layoutId: "eCusnvi8g",
              ref: a ?? I,
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor: "rgb(82, 137, 255)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxShadow: "1px 2px 0px 0px rgb(0, 0, 0)",
                ...f,
              },
              variants: {
                "eCusnvi8g-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "eCusnvi8g-pressed": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  boxShadow: "none",
                },
              },
              ...ro(
                {
                  "eCusnvi8g-hover": { "data-framer-name": void 0 },
                  "eCusnvi8g-pressed": { "data-framer-name": void 0 },
                },
                k,
                N
              ),
              children: e(P, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1e3,
                  intrinsicWidth: 1e3,
                  loading: l(
                    (y?.y || 0) + (0 + ((y?.height || 40) - 0 - 26) / 2)
                  ),
                  pixelHeight: 1e3,
                  pixelWidth: 1e3,
                  sizes: "22.6096px",
                  ...ao(u),
                  positionX: "center",
                  positionY: "center",
                },
                className: "framer-1ri84wb",
                "data-framer-name": "Dextools",
                layoutDependency: Q,
                layoutId: "P_DJ9BX8V",
              }),
            }),
          }),
        }),
      }),
    });
  }),
  co = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-aJKVy.framer-p839jn, .framer-aJKVy .framer-p839jn { display: block; }",
    ".framer-aJKVy.framer-v70eay { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aJKVy .framer-1ri84wb { -webkit-user-select: none; aspect-ratio: 0.8696 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); overflow: visible; position: relative; user-select: none; width: 23px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aJKVy.framer-v70eay { gap: 0px; } .framer-aJKVy.framer-v70eay > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aJKVy.framer-v70eay > :first-child { margin-left: 0px; } .framer-aJKVy.framer-v70eay > :last-child { margin-right: 0px; } }",
    ".framer-aJKVy.framer-v-v70eay.hover.framer-v70eay, .framer-aJKVy.framer-v-v70eay.pressed.framer-v70eay { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); }",
    '.framer-aJKVy[data-border="true"]::after, .framer-aJKVy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  cr = D(lo, co, "framer-aJKVy"),
  Ge = cr;
cr.displayName = "Links Nav";
cr.defaultProps = { height: 40, width: 40 };
B(cr, {
  fL82VuRHx: {
    __defaultAssetReference:
      "data:framer/asset-reference,gqPA6KtJVqlXF9oyIClJXOmwuoE.png?originalFilename=dextools.png&preferredSize=auto",
    title: "Image",
    type: c.ResponsiveImage,
  },
  TeZLuQw15: { title: "Link", type: c.Link },
});
ee(cr, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var mo = {
    nOntLwD0P: { hover: !0, pressed: !0 },
    X4jyYGmF7: { hover: !0, pressed: !0 },
  },
  po = ["X4jyYGmF7", "nOntLwD0P"],
  fo = "framer-ABC94",
  go = { nOntLwD0P: "framer-v-19rms4t", X4jyYGmF7: "framer-v-gt3cw8" };
function Et(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var ho = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  uo = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  wo = m.create(b),
  xo = { "Variant 1": "X4jyYGmF7", "Variant 2": "nOntLwD0P" },
  vo = ({
    background: r,
    height: a,
    id: o,
    link: s,
    title: f,
    width: g,
    ...d
  }) => {
    var x, u, n, C;
    return {
      ...d,
      rX_TO6nhQ:
        (x = r ?? d.rX_TO6nhQ) !== null && x !== void 0
          ? x
          : "rgb(82, 137, 255)",
      Uf_khRTfT:
        (u = f ?? d.Uf_khRTfT) !== null && u !== void 0 ? u : "buy now",
      variant:
        (C = (n = xo[d.variant]) !== null && n !== void 0 ? n : d.variant) !==
          null && C !== void 0
          ? C
          : "X4jyYGmF7",
      Z9i0v4qpe: s ?? d.Z9i0v4qpe,
    };
  },
  yo = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  bo = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      {
        style: f,
        className: g,
        layoutId: d,
        variant: x,
        rX_TO6nhQ: u,
        Uf_khRTfT: n,
        Z9i0v4qpe: C,
        ...k
      } = vo(r),
      {
        baseVariant: F,
        classNames: w,
        clearLoadingGesture: _,
        gestureHandlers: N,
        gestureVariant: j,
        isLoading: T,
        setGestureState: p,
        setVariant: M,
        variants: Q,
      } = ce({
        cycleOrder: po,
        defaultVariant: "X4jyYGmF7",
        enabledGestures: mo,
        variant: x,
        variantClassNames: go,
      }),
      I = yo(r, Q),
      h = R(null),
      t = G(),
      y = [],
      he = le();
    return e(K, {
      id: d ?? t,
      children: e(wo, {
        animate: Q,
        initial: !1,
        children: e(uo, {
          value: ho,
          children: e(q, {
            href: C,
            nodeId: "X4jyYGmF7",
            openInNewTab: !0,
            children: e(m.a, {
              ...k,
              ...N,
              className: `${W(fo, ...y, "framer-gt3cw8", g, w)} framer-ax3cs3`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: I,
              layoutId: "X4jyYGmF7",
              ref: a ?? h,
              style: {
                "--border-bottom-width": "2px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor: u,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                boxShadow: "1px 2px 0px 0px rgb(0, 0, 0)",
                ...f,
              },
              variants: {
                "nOntLwD0P-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "nOntLwD0P-pressed": { boxShadow: "none" },
                "X4jyYGmF7-hover": { backgroundColor: "rgb(156, 187, 255)" },
                "X4jyYGmF7-pressed": { boxShadow: "none" },
              },
              ...Et(
                {
                  "nOntLwD0P-hover": { "data-framer-name": void 0 },
                  "nOntLwD0P-pressed": { "data-framer-name": void 0 },
                  "X4jyYGmF7-hover": { "data-framer-name": void 0 },
                  "X4jyYGmF7-pressed": { "data-framer-name": void 0 },
                  nOntLwD0P: { "data-framer-name": "Variant 2" },
                },
                F,
                j
              ),
              children: e(te, {
                __fromCanvasComponent: !0,
                children: e(b, {
                  children: e(m.p, {
                    style: {
                      "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                      "--framer-font-family": '"Kavoon", sans-serif',
                      "--framer-font-size": "20px",
                      "--framer-text-transform": "uppercase",
                    },
                    children: "buy now",
                  }),
                }),
                className: "framer-2lstoy",
                fonts: ["GF;Kavoon-regular"],
                layoutDependency: I,
                layoutId: "vmsInY8Sg",
                style: {
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: n,
                variants: {
                  nOntLwD0P: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Et(
                  {
                    nOntLwD0P: {
                      children: e(b, {
                        children: e(m.p, {
                          style: {
                            "--font-selector": "R0Y7S2F2b29uLXJlZ3VsYXI=",
                            "--framer-font-family": '"Kavoon", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            "--framer-text-transform": "uppercase",
                          },
                          children: "buy now",
                        }),
                      }),
                    },
                  },
                  F,
                  j
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  _o = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ABC94.framer-ax3cs3, .framer-ABC94 .framer-ax3cs3 { display: block; }",
    ".framer-ABC94.framer-gt3cw8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 13px 30px 11px 30px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ABC94 .framer-2lstoy { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ABC94.framer-gt3cw8 { gap: 0px; } .framer-ABC94.framer-gt3cw8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ABC94.framer-gt3cw8 > :first-child { margin-top: 0px; } .framer-ABC94.framer-gt3cw8 > :last-child { margin-bottom: 0px; } }",
    '.framer-ABC94[data-border="true"]::after, .framer-ABC94 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  mr = D(bo, _o, "framer-ABC94"),
  Kr = mr;
mr.displayName = "Cartoon Button Animation 3";
mr.defaultProps = { height: 48, width: 150 };
B(mr, {
  variant: {
    options: ["X4jyYGmF7", "nOntLwD0P"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: c.Enum,
  },
  rX_TO6nhQ: {
    defaultValue: "rgb(82, 137, 255)",
    title: "Background",
    type: c.Color,
  },
  Uf_khRTfT: {
    defaultValue: "buy now",
    displayTextArea: !1,
    title: "Title",
    type: c.String,
  },
  Z9i0v4qpe: { title: "Link", type: c.Link },
});
ee(
  mr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Kavoon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kavoon/v23/pxiFyp4_scRYhlU4Mbr6f1pdEQ.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Co = O(Re),
  ko = O(Xe),
  Fo = O(Ge),
  So = O(Kr),
  zo = O(Fe),
  Ho = ["vCT7aHM9v", "xXRtnFAEN", "SaHO1PQUO", "GNR4NTEYU"],
  Ao = "framer-vc6gM",
  Vo = {
    GNR4NTEYU: "framer-v-716ifa",
    SaHO1PQUO: "framer-v-4jzn2g",
    vCT7aHM9v: "framer-v-1kg1rvq",
    xXRtnFAEN: "framer-v-q5zes5",
  };
function me(r, ...a) {
  let o = {};
  return a?.forEach((s) => s && Object.assign(o, r[s])), o;
}
var To = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Dt = (r, a) => `translateY(-50%) ${a}`,
  Io = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ce = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.95,
    skewX: 0,
    skewY: 0,
    transition: Io,
    x: 1,
    y: 2,
  },
  qe = (r, a) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: a };
  },
  Ro = ({ value: r, children: a }) => {
    let o = se(L),
      s = r ?? o.transition,
      f = Z(() => ({ ...o, transition: s }), [JSON.stringify(s)]);
    return e(L.Provider, { value: f, children: a });
  },
  Po = m.create(b),
  No = {
    "Variant 1": "vCT7aHM9v",
    "Variant 4": "GNR4NTEYU",
    mobile: "SaHO1PQUO",
    tavlet: "xXRtnFAEN",
  },
  Mo = ({ height: r, id: a, width: o, ...s }) => {
    var f, g;
    return {
      ...s,
      variant:
        (g = (f = No[s.variant]) !== null && f !== void 0 ? f : s.variant) !==
          null && g !== void 0
          ? g
          : "vCT7aHM9v",
    };
  },
  Qo = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Lo = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      { style: f, className: g, layoutId: d, variant: x, ...u } = Mo(r),
      {
        baseVariant: n,
        classNames: C,
        clearLoadingGesture: k,
        gestureHandlers: F,
        gestureVariant: w,
        isLoading: _,
        setGestureState: N,
        setVariant: j,
        variants: T,
      } = ce({
        cycleOrder: Ho,
        defaultVariant: "vCT7aHM9v",
        variant: x,
        variantClassNames: Vo,
      }),
      p = Qo(r, T),
      { activeVariantCallback: M, delay: Q } = Ie(n),
      I = M(async (...V) => {
        j("GNR4NTEYU");
      }),
      h = M(async (...V) => {
        j("SaHO1PQUO");
      }),
      t = R(null),
      y = () => !!["SaHO1PQUO", "GNR4NTEYU"].includes(n),
      he = () => !["SaHO1PQUO", "GNR4NTEYU"].includes(n),
      ue = () => n !== "GNR4NTEYU",
      we = () => n !== "SaHO1PQUO",
      ge = Je(),
      ne = () => n === "SaHO1PQUO",
      xe = G(),
      z = [],
      i = le();
    return e(K, {
      id: d ?? xe,
      children: e(Po, {
        animate: T,
        initial: !1,
        children: e(Ro, {
          value: To,
          children: v(m.div, {
            ...u,
            ...F,
            className: W(Ao, ...z, "framer-1kg1rvq", g, C),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "vCT7aHM9v",
            ref: a ?? t,
            style: {
              "--border-bottom-width": "3px",
              "--border-color": "rgb(255, 255, 255)",
              "--border-left-width": "0px",
              "--border-right-width": "2px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 82, 76, 0.66)",
              borderBottomLeftRadius: 19,
              borderBottomRightRadius: 19,
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
              WebkitBackdropFilter: "blur(10px)",
              ...f,
            },
            variants: {
              GNR4NTEYU: {
                "--border-left-width": "3px",
                "--border-right-width": "3px",
                "--border-top-width": "3px",
                backgroundColor: "rgba(0, 45, 82, 0.66)",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              },
              SaHO1PQUO: {
                "--border-left-width": "3px",
                "--border-right-width": "3px",
                "--border-top-width": "3px",
                backgroundColor: "rgba(0, 45, 82, 0.66)",
              },
            },
            ...me(
              {
                GNR4NTEYU: { "data-framer-name": "Variant 4" },
                SaHO1PQUO: { "data-framer-name": "mobile" },
                xXRtnFAEN: { "data-framer-name": "tavlet" },
              },
              n,
              w
            ),
            children: [
              v(m.div, {
                className: "framer-8si7a1",
                layoutDependency: p,
                layoutId: "XZlMSRwyX",
                children: [
                  y() &&
                    e(q, {
                      href: { webPageId: "augiA20Il" },
                      nodeId: "ZgFyLMp5S",
                      openInNewTab: !1,
                      smoothScroll: !0,
                      children: e(P, {
                        as: "a",
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1193,
                          intrinsicWidth: 897,
                          pixelHeight: 100,
                          pixelWidth: 100,
                          src: "/images/Ol0712S6HuLc3MPVc6p3pEdm1Q.png",
                        },
                        className: "framer-qjrjpu framer-1oq59lg",
                        "data-framer-name": "Sedi",
                        layoutDependency: p,
                        layoutId: "ZgFyLMp5S",
                        ...me(
                          {
                            GNR4NTEYU: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1193,
                                intrinsicWidth: 897,
                                loading: l(
                                  (i?.y || 0) +
                                    10 +
                                    (0 +
                                      0 +
                                      (((i?.height || 89) - 20 - 69) / 1) * 0) +
                                    0
                                ),
                                pixelHeight: 100,
                                pixelWidth: 100,
                                src: "/images/Ol0712S6HuLc3MPVc6p3pEdm1Q.png",
                              },
                            },
                            SaHO1PQUO: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1193,
                                intrinsicWidth: 897,
                                loading: l(
                                  (i?.y || 0) +
                                    20 +
                                    (0 +
                                      0 +
                                      (((i?.height || 386) - 40 - 346) / 1) *
                                        0) +
                                    0
                                ),
                                pixelHeight: 100,
                                pixelWidth: 100,
                                src: "/images/Ol0712S6HuLc3MPVc6p3pEdm1Q.png",
                              },
                            },
                          },
                          n,
                          w
                        ),
                      }),
                    }),
                  y() &&
                    e(H, {
                      children: e(m.div, {
                        className: "framer-1bchw01-container",
                        layoutDependency: p,
                        layoutId: "nSU0XYEAw-container",
                        children: e(Re, {
                          color: "rgb(82, 137, 255)",
                          height: "100%",
                          iconSearch: "Home",
                          iconSelection: "menu",
                          id: "nSU0XYEAw",
                          layoutId: "nSU0XYEAw",
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                          ...me(
                            {
                              GNR4NTEYU: {
                                color: "rgb(255, 255, 255)",
                                onClick: h,
                              },
                              SaHO1PQUO: {
                                color: "rgb(255, 255, 255)",
                                iconSelection: "x",
                                onClick: I,
                              },
                            },
                            n,
                            w
                          ),
                        }),
                      }),
                    }),
                  he() &&
                    e(P, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1193,
                        intrinsicWidth: 897,
                        loading: l(
                          (i?.y || 0) +
                            (7 + ((i?.height || 200) - 15 - 0) / 2) +
                            0 -
                            56
                        ),
                        pixelHeight: 1193,
                        pixelWidth: 897,
                        sizes: "56px",
                        src: "/images/FEobEBqlFbOnIhVGVzjeIss.png",
                        srcSet:
                          "/images/FEobEBqlFbOnIhVGVzjeIss.png?scale-down-to=1024 769w,/images/FEobEBqlFbOnIhVGVzjeIss.png 897w",
                      },
                      className: "framer-12rn5mb",
                      "data-framer-name": "Sedi",
                      layoutDependency: p,
                      layoutId: "zUUtHhnQ1",
                    }),
                ],
              }),
              ue() &&
                v(m.div, {
                  className: "framer-1k0osl6",
                  layoutDependency: p,
                  layoutId: "wGvLOc8Ot",
                  children: [
                    v(m.div, {
                      className: "framer-1ei8m3k",
                      layoutDependency: p,
                      layoutId: "KRpftoXSm",
                      transformTemplate: Dt,
                      ...me({ SaHO1PQUO: { transformTemplate: void 0 } }, n, w),
                      children: [
                        we() &&
                          e(H, {
                            height: 28,
                            width: "105px",
                            y:
                              (i?.y || 0) +
                              (7 + ((i?.height || 200) - 15 - 48) / 2) +
                              6.500000000000011 +
                              5,
                            ...me({ xXRtnFAEN: { width: "89px" } }, n, w),
                            children: e(m.div, {
                              className: "framer-s484pv-container",
                              layoutDependency: p,
                              layoutId: "lJzFMr91D-container",
                              whileTap: Ce,
                              children: e(Xe, {
                                Gac2rjSXD: "rgb(0, 0, 0)",
                                GtAI8HSlp: "creators",
                                height: "100%",
                                id: "lJzFMr91D",
                                layoutId: "lJzFMr91D",
                                style: { height: "100%", width: "100%" },
                                v4tYVSv48: 24,
                                width: "100%",
                              }),
                            }),
                          }),
                        e(Te, {
                          links: [
                            {
                              href: { webPageId: "augiA20Il" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (V) =>
                            e(H, {
                              height: 28,
                              width: "105px",
                              y:
                                (i?.y || 0) +
                                (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                6.500000000000011 +
                                5,
                              ...me(
                                {
                                  SaHO1PQUO: {
                                    y:
                                      (i?.y || 0) +
                                      20 +
                                      (0 +
                                        69 +
                                        (((i?.height || 386) - 40 - 346) / 1) *
                                          1) +
                                      30 +
                                      0 +
                                      5 +
                                      92,
                                  },
                                  xXRtnFAEN: { width: "85px" },
                                },
                                n,
                                w
                              ),
                              children: e(m.div, {
                                className: "framer-1uhc34d-container",
                                layoutDependency: p,
                                layoutId: "JEV_QCyij-container",
                                whileTap: Ce,
                                children: e(Xe, {
                                  Gac2rjSXD: "rgb(0, 0, 0)",
                                  GtAI8HSlp: "map",
                                  height: "100%",
                                  id: "JEV_QCyij",
                                  layoutId: "JEV_QCyij",
                                  style: { height: "100%", width: "100%" },
                                  v4tYVSv48: 24,
                                  width: "100%",
                                  ...me(
                                    {
                                      SaHO1PQUO: {
                                        BgyErskUz: V[0],
                                        Gac2rjSXD: "rgb(255, 255, 255)",
                                        GtAI8HSlp: "Roadmap",
                                      },
                                    },
                                    n,
                                    w
                                  ),
                                }),
                              }),
                            }),
                        }),
                        e(Te, {
                          links: [
                            {
                              href: { webPageId: "augiA20Il" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (V) =>
                            e(H, {
                              height: 28,
                              width: "105px",
                              y:
                                (i?.y || 0) +
                                (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                6.500000000000011 +
                                5,
                              ...me(
                                {
                                  SaHO1PQUO: {
                                    y:
                                      (i?.y || 0) +
                                      20 +
                                      (0 +
                                        69 +
                                        (((i?.height || 386) - 40 - 346) / 1) *
                                          1) +
                                      30 +
                                      0 +
                                      5 +
                                      46,
                                  },
                                  xXRtnFAEN: { width: "73px" },
                                },
                                n,
                                w
                              ),
                              children: e(m.div, {
                                className: "framer-11dpskk-container",
                                layoutDependency: p,
                                layoutId: "xD4TIXi1G-container",
                                whileTap: Ce,
                                children: e(Xe, {
                                  Gac2rjSXD: "rgb(0, 0, 0)",
                                  GtAI8HSlp: "token",
                                  height: "100%",
                                  id: "xD4TIXi1G",
                                  layoutId: "xD4TIXi1G",
                                  style: { height: "100%", width: "100%" },
                                  v4tYVSv48: 24,
                                  width: "100%",
                                  ...me(
                                    {
                                      SaHO1PQUO: {
                                        BgyErskUz: V[0],
                                        Gac2rjSXD: "rgb(255, 255, 255)",
                                      },
                                    },
                                    n,
                                    w
                                  ),
                                }),
                              }),
                            }),
                        }),
                        e(Te, {
                          links: [
                            {
                              href: { webPageId: "augiA20Il" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (V) =>
                            e(H, {
                              height: 28,
                              width: "105px",
                              y:
                                (i?.y || 0) +
                                (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                6.500000000000011 +
                                5,
                              ...me(
                                {
                                  SaHO1PQUO: {
                                    y:
                                      (i?.y || 0) +
                                      20 +
                                      (0 +
                                        69 +
                                        (((i?.height || 386) - 40 - 346) / 1) *
                                          1) +
                                      30 +
                                      0 +
                                      5 +
                                      0,
                                  },
                                  xXRtnFAEN: { width: "89px" },
                                },
                                n,
                                w
                              ),
                              children: e(m.div, {
                                className: "framer-18jy3re-container",
                                layoutDependency: p,
                                layoutId: "cUKg8AxnN-container",
                                whileTap: Ce,
                                children: e(Xe, {
                                  Gac2rjSXD: "rgb(0, 0, 0)",
                                  GtAI8HSlp: "about",
                                  height: "100%",
                                  id: "cUKg8AxnN",
                                  layoutId: "cUKg8AxnN",
                                  style: { height: "100%", width: "100%" },
                                  v4tYVSv48: 24,
                                  width: "100%",
                                  ...me(
                                    {
                                      SaHO1PQUO: {
                                        BgyErskUz: V[0],
                                        Gac2rjSXD: "rgb(255, 255, 255)",
                                      },
                                    },
                                    n,
                                    w
                                  ),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    v(m.div, {
                      className: "framer-1siv50t",
                      layoutDependency: p,
                      layoutId: "kamGMSMF0",
                      transformTemplate: Dt,
                      ...me({ SaHO1PQUO: { transformTemplate: void 0 } }, n, w),
                      children: [
                        we() &&
                          v(m.div, {
                            className: "framer-1q12l61",
                            layoutDependency: p,
                            layoutId: "Zr_bokdCd",
                            children: [
                              e(H, {
                                height: 40,
                                width: "40px",
                                y:
                                  (i?.y || 0) +
                                  (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                  10658141036401503e-30 +
                                  4 +
                                  0,
                                children: e(m.div, {
                                  className: "framer-2bbjyc-container",
                                  layoutDependency: p,
                                  layoutId: "tV1M98gRG-container",
                                  whileTap: Ce,
                                  children: e(Ge, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/bQ9gsaWaxJSBwtlAOBoAasS8TJ0.png",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "tV1M98gRG",
                                    layoutId: "tV1M98gRG",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                y:
                                  (i?.y || 0) +
                                  (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                  10658141036401503e-30 +
                                  4 +
                                  0,
                                children: e(m.div, {
                                  className: "framer-11mivfp-container",
                                  layoutDependency: p,
                                  layoutId: "dYCDE2D3y-container",
                                  whileTap: Ce,
                                  children: e(Ge, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/dElkMFUwZArfjsQaKWXA0mHQNdI.png",
                                        srcSet:
                                          "/images/dElkMFUwZArfjsQaKWXA0mHQNdI.png?scale-down-to=512 512w,/images/dElkMFUwZArfjsQaKWXA0mHQNdI.png 1000w",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "dYCDE2D3y",
                                    layoutId: "dYCDE2D3y",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                y:
                                  (i?.y || 0) +
                                  (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                  10658141036401503e-30 +
                                  4 +
                                  0,
                                children: e(m.div, {
                                  className: "framer-negzt3-container",
                                  layoutDependency: p,
                                  layoutId: "Ny8ALKSWL-container",
                                  whileTap: Ce,
                                  children: e(Ge, {
                                    height: "100%",
                                    id: "Ny8ALKSWL",
                                    layoutId: "Ny8ALKSWL",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                y:
                                  (i?.y || 0) +
                                  (7 + ((i?.height || 200) - 15 - 48) / 2) +
                                  10658141036401503e-30 +
                                  4 +
                                  0,
                                children: e(m.div, {
                                  className: "framer-jdaram-container",
                                  layoutDependency: p,
                                  layoutId: "ENWwcJSZB-container",
                                  whileTap: Ce,
                                  children: e(Ge, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/S5OJSJXM3Lt1fv4g9HZqWaVif4.png",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "ENWwcJSZB",
                                    layoutId: "ENWwcJSZB",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        e(H, {
                          height: 48,
                          y:
                            (i?.y || 0) +
                            (7 + ((i?.height || 200) - 15 - 48) / 2) +
                            10658141036401503e-30 +
                            0,
                          ...me(
                            {
                              SaHO1PQUO: {
                                width: `calc(${i?.width || "100vw"} - 60px)`,
                                y:
                                  (i?.y || 0) +
                                  20 +
                                  (0 +
                                    69 +
                                    (((i?.height || 386) - 40 - 346) / 1) * 1) +
                                  30 +
                                  139 +
                                  0 +
                                  0,
                              },
                            },
                            n,
                            w
                          ),
                          children: e(m.div, {
                            className: "framer-1sy3yg1-container",
                            layoutDependency: p,
                            layoutId: "dd55K8FNj-container",
                            whileTap: Ce,
                            children: e(Kr, {
                              height: "100%",
                              id: "dd55K8FNj",
                              layoutId: "dd55K8FNj",
                              rX_TO6nhQ: "rgb(82, 137, 255)",
                              Uf_khRTfT: "buy now",
                              variant: "X4jyYGmF7",
                              width: "100%",
                              ...me(
                                {
                                  SaHO1PQUO: {
                                    style: { width: "100%" },
                                    variant: "nOntLwD0P",
                                  },
                                },
                                n,
                                w
                              ),
                            }),
                          }),
                        }),
                        ne() &&
                          v(m.div, {
                            className: "framer-11asj1y",
                            layoutDependency: p,
                            layoutId: "s65ctT3s3",
                            children: [
                              e(H, {
                                height: 40,
                                width: "40px",
                                ...me(
                                  {
                                    SaHO1PQUO: {
                                      y:
                                        (i?.y || 0) +
                                        20 +
                                        (0 +
                                          69 +
                                          (((i?.height || 386) - 40 - 346) /
                                            1) *
                                            1) +
                                        30 +
                                        139 +
                                        0 +
                                        68 +
                                        0,
                                    },
                                  },
                                  n,
                                  w
                                ),
                                children: e(m.div, {
                                  className: "framer-psdp71-container",
                                  layoutDependency: p,
                                  layoutId: "hEj8Od_ES-container",
                                  whileTap: Ce,
                                  children: e(Fe, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/nRLBmC8GU9opKczDsXElErERrI.png",
                                        srcSet:
                                          "/images/nRLBmC8GU9opKczDsXElErERrI.png?scale-down-to=512 512w,/images/nRLBmC8GU9opKczDsXElErERrI.png?scale-down-to=1024 1024w,/images/nRLBmC8GU9opKczDsXElErERrI.png?scale-down-to=2048 2048w,/images/nRLBmC8GU9opKczDsXElErERrI.png 3456w",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "hEj8Od_ES",
                                    layoutId: "hEj8Od_ES",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                ...me(
                                  {
                                    SaHO1PQUO: {
                                      y:
                                        (i?.y || 0) +
                                        20 +
                                        (0 +
                                          69 +
                                          (((i?.height || 386) - 40 - 346) /
                                            1) *
                                            1) +
                                        30 +
                                        139 +
                                        0 +
                                        68 +
                                        0,
                                    },
                                  },
                                  n,
                                  w
                                ),
                                children: e(m.div, {
                                  className: "framer-1civq7k-container",
                                  layoutDependency: p,
                                  layoutId: "aCHUU2h9g-container",
                                  whileTap: Ce,
                                  children: e(Fe, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/LQYDKIXDqKlc81CE7eMyFwgNW8.png",
                                        srcSet:
                                          "/images/LQYDKIXDqKlc81CE7eMyFwgNW8.png?scale-down-to=512 512w,/images/LQYDKIXDqKlc81CE7eMyFwgNW8.png?scale-down-to=1024 1024w,/images/LQYDKIXDqKlc81CE7eMyFwgNW8.png?scale-down-to=2048 2048w,/images/LQYDKIXDqKlc81CE7eMyFwgNW8.png 3456w",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "aCHUU2h9g",
                                    layoutId: "aCHUU2h9g",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                ...me(
                                  {
                                    SaHO1PQUO: {
                                      y:
                                        (i?.y || 0) +
                                        20 +
                                        (0 +
                                          69 +
                                          (((i?.height || 386) - 40 - 346) /
                                            1) *
                                            1) +
                                        30 +
                                        139 +
                                        0 +
                                        68 +
                                        0,
                                    },
                                  },
                                  n,
                                  w
                                ),
                                children: e(m.div, {
                                  className: "framer-1fs25k0-container",
                                  layoutDependency: p,
                                  layoutId: "Y0o5umgGA-container",
                                  whileTap: Ce,
                                  children: e(Fe, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/CyiwujAicMuBQFutC9mgLA9FQ.png",
                                        srcSet:
                                          "/images/CyiwujAicMuBQFutC9mgLA9FQ.png?scale-down-to=512 512w,/images/CyiwujAicMuBQFutC9mgLA9FQ.png?scale-down-to=1024 1024w,/images/CyiwujAicMuBQFutC9mgLA9FQ.png?scale-down-to=2048 2048w,/images/CyiwujAicMuBQFutC9mgLA9FQ.png 3456w",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "Y0o5umgGA",
                                    layoutId: "Y0o5umgGA",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(H, {
                                height: 40,
                                width: "40px",
                                ...me(
                                  {
                                    SaHO1PQUO: {
                                      y:
                                        (i?.y || 0) +
                                        20 +
                                        (0 +
                                          69 +
                                          (((i?.height || 386) - 40 - 346) /
                                            1) *
                                            1) +
                                        30 +
                                        139 +
                                        0 +
                                        68 +
                                        0,
                                    },
                                  },
                                  n,
                                  w
                                ),
                                children: e(m.div, {
                                  className: "framer-41ju9v-container",
                                  layoutDependency: p,
                                  layoutId: "VoVWWXoiV-container",
                                  whileTap: Ce,
                                  children: e(Fe, {
                                    fL82VuRHx: qe(
                                      {
                                        src: "/images/WOmhCjeBBVmWI2lcYBUQjv7j4Q.png",
                                        srcSet:
                                          "/images/WOmhCjeBBVmWI2lcYBUQjv7j4Q.png?scale-down-to=512 512w,/images/WOmhCjeBBVmWI2lcYBUQjv7j4Q.png?scale-down-to=1024 1024w,/images/WOmhCjeBBVmWI2lcYBUQjv7j4Q.png?scale-down-to=2048 2048w,/images/WOmhCjeBBVmWI2lcYBUQjv7j4Q.png 3456w",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "VoVWWXoiV",
                                    layoutId: "VoVWWXoiV",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Bo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vc6gM.framer-1oq59lg, .framer-vc6gM .framer-1oq59lg { display: block; }",
    ".framer-vc6gM.framer-1kg1rvq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 7px 30px 8px 30px; position: relative; width: 1600px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-vc6gM .framer-8si7a1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; min-height: 55px; min-width: 360px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-vc6gM .framer-qjrjpu { aspect-ratio: 1.1304347826086956 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 69px); overflow: visible; position: relative; text-decoration: none; width: 78px; z-index: 4; }",
    ".framer-vc6gM .framer-1bchw01-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 30px; }",
    ".framer-vc6gM .framer-12rn5mb { aspect-ratio: 0.7518860016764459 / 1; bottom: -18px; flex: none; height: var(--framer-aspect-ratio-supported, 74px); left: 16px; overflow: visible; position: absolute; width: 56px; z-index: 1; }",
    ".framer-vc6gM .framer-1k0osl6 { flex: none; height: 48px; overflow: visible; position: relative; width: 998px; }",
    ".framer-vc6gM .framer-1ei8m3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 5px 0px 0px 0px; position: absolute; top: 48%; width: min-content; }",
    ".framer-vc6gM .framer-s484pv-container, .framer-vc6gM .framer-1uhc34d-container, .framer-vc6gM .framer-11dpskk-container, .framer-vc6gM .framer-18jy3re-container { flex: none; height: 28px; position: relative; width: 105px; }",
    ".framer-vc6gM .framer-1siv50t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 50%; width: min-content; }",
    ".framer-vc6gM .framer-1q12l61 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-vc6gM .framer-2bbjyc-container, .framer-vc6gM .framer-11mivfp-container, .framer-vc6gM .framer-negzt3-container, .framer-vc6gM .framer-psdp71-container, .framer-vc6gM .framer-1civq7k-container, .framer-vc6gM .framer-1fs25k0-container, .framer-vc6gM .framer-41ju9v-container { flex: none; height: 40px; position: relative; width: 40px; }",
    ".framer-vc6gM .framer-jdaram-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }",
    ".framer-vc6gM .framer-1sy3yg1-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-vc6gM .framer-11asj1y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vc6gM .framer-8si7a1, .framer-vc6gM .framer-1ei8m3k, .framer-vc6gM .framer-1siv50t, .framer-vc6gM .framer-1q12l61, .framer-vc6gM .framer-11asj1y { gap: 0px; } .framer-vc6gM .framer-8si7a1 > *, .framer-vc6gM .framer-1siv50t > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-vc6gM .framer-8si7a1 > :first-child, .framer-vc6gM .framer-1ei8m3k > :first-child, .framer-vc6gM .framer-1siv50t > :first-child, .framer-vc6gM .framer-1q12l61 > :first-child, .framer-vc6gM .framer-11asj1y > :first-child { margin-left: 0px; } .framer-vc6gM .framer-8si7a1 > :last-child, .framer-vc6gM .framer-1ei8m3k > :last-child, .framer-vc6gM .framer-1siv50t > :last-child, .framer-vc6gM .framer-1q12l61 > :last-child, .framer-vc6gM .framer-11asj1y > :last-child { margin-right: 0px; } .framer-vc6gM .framer-1ei8m3k > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-vc6gM .framer-1q12l61 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vc6gM .framer-11asj1y > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",
    ".framer-vc6gM.framer-v-q5zes5.framer-1kg1rvq { padding: 7px 10px 8px 20px; width: 900px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-8si7a1 { min-width: unset; width: 16px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-12rn5mb { left: 5px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-1ei8m3k { gap: 0px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-s484pv-container, .framer-vc6gM.framer-v-q5zes5 .framer-18jy3re-container { width: 89px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-1uhc34d-container { width: 85px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-11dpskk-container { width: 73px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-1siv50t { gap: 9px; }",
    ".framer-vc6gM.framer-v-q5zes5 .framer-1q12l61 { gap: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vc6gM.framer-v-q5zes5 .framer-1ei8m3k, .framer-vc6gM.framer-v-q5zes5 .framer-1siv50t, .framer-vc6gM.framer-v-q5zes5 .framer-1q12l61 { gap: 0px; } .framer-vc6gM.framer-v-q5zes5 .framer-1ei8m3k > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-vc6gM.framer-v-q5zes5 .framer-1ei8m3k > :first-child, .framer-vc6gM.framer-v-q5zes5 .framer-1siv50t > :first-child, .framer-vc6gM.framer-v-q5zes5 .framer-1q12l61 > :first-child { margin-left: 0px; } .framer-vc6gM.framer-v-q5zes5 .framer-1ei8m3k > :last-child, .framer-vc6gM.framer-v-q5zes5 .framer-1siv50t > :last-child, .framer-vc6gM.framer-v-q5zes5 .framer-1q12l61 > :last-child { margin-right: 0px; } .framer-vc6gM.framer-v-q5zes5 .framer-1siv50t > * { margin: 0px; margin-left: calc(9px / 2); margin-right: calc(9px / 2); } .framer-vc6gM.framer-v-q5zes5 .framer-1q12l61 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",
    ".framer-vc6gM.framer-v-4jzn2g.framer-1kg1rvq { flex-direction: column; padding: 20px 30px 20px 30px; width: 390px; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-8si7a1, .framer-vc6gM.framer-v-716ifa .framer-8si7a1 { gap: unset; justify-content: space-between; min-height: unset; min-width: unset; width: 100%; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-qjrjpu, .framer-vc6gM.framer-v-716ifa .framer-qjrjpu { order: 0; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1bchw01-container, .framer-vc6gM.framer-v-716ifa .framer-1bchw01-container { cursor: pointer; height: var(--framer-aspect-ratio-supported, 33px); order: 2; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1k0osl6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; padding: 30px 0px 0px 0px; width: 100%; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1ei8m3k { flex-direction: column; gap: 18px; left: unset; position: relative; top: unset; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1uhc34d-container { order: 3; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-11dpskk-container, .framer-vc6gM.framer-v-4jzn2g .framer-11asj1y { order: 2; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-18jy3re-container { order: 1; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1siv50t { flex-direction: column; position: relative; right: unset; top: unset; width: 100%; }",
    ".framer-vc6gM.framer-v-4jzn2g .framer-1sy3yg1-container { order: 0; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vc6gM.framer-v-4jzn2g.framer-1kg1rvq, .framer-vc6gM.framer-v-4jzn2g .framer-8si7a1, .framer-vc6gM.framer-v-4jzn2g .framer-1k0osl6, .framer-vc6gM.framer-v-4jzn2g .framer-1ei8m3k, .framer-vc6gM.framer-v-4jzn2g .framer-1siv50t { gap: 0px; } .framer-vc6gM.framer-v-4jzn2g.framer-1kg1rvq > *, .framer-vc6gM.framer-v-4jzn2g.framer-1kg1rvq > :first-child, .framer-vc6gM.framer-v-4jzn2g.framer-1kg1rvq > :last-child, .framer-vc6gM.framer-v-4jzn2g .framer-8si7a1 > *, .framer-vc6gM.framer-v-4jzn2g .framer-8si7a1 > :first-child, .framer-vc6gM.framer-v-4jzn2g .framer-8si7a1 > :last-child { margin: 0px; } .framer-vc6gM.framer-v-4jzn2g .framer-1k0osl6 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-vc6gM.framer-v-4jzn2g .framer-1k0osl6 > :first-child, .framer-vc6gM.framer-v-4jzn2g .framer-1ei8m3k > :first-child, .framer-vc6gM.framer-v-4jzn2g .framer-1siv50t > :first-child { margin-top: 0px; } .framer-vc6gM.framer-v-4jzn2g .framer-1k0osl6 > :last-child, .framer-vc6gM.framer-v-4jzn2g .framer-1ei8m3k > :last-child, .framer-vc6gM.framer-v-4jzn2g .framer-1siv50t > :last-child { margin-bottom: 0px; } .framer-vc6gM.framer-v-4jzn2g .framer-1ei8m3k > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-vc6gM.framer-v-4jzn2g .framer-1siv50t > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }",
    ".framer-vc6gM.framer-v-716ifa.framer-1kg1rvq { flex-direction: column; padding: 10px 30px 10px 30px; width: 390px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vc6gM.framer-v-716ifa.framer-1kg1rvq, .framer-vc6gM.framer-v-716ifa .framer-8si7a1 { gap: 0px; } .framer-vc6gM.framer-v-716ifa.framer-1kg1rvq > *, .framer-vc6gM.framer-v-716ifa.framer-1kg1rvq > :first-child, .framer-vc6gM.framer-v-716ifa.framer-1kg1rvq > :last-child, .framer-vc6gM.framer-v-716ifa .framer-8si7a1 > *, .framer-vc6gM.framer-v-716ifa .framer-8si7a1 > :first-child, .framer-vc6gM.framer-v-716ifa .framer-8si7a1 > :last-child { margin: 0px; } }",
    '.framer-vc6gM[data-border="true"]::after, .framer-vc6gM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  pr = D(Lo, Bo, "framer-vc6gM"),
  $r = pr;
pr.displayName = "Nav Bar 2";
pr.defaultProps = { height: 70, width: 1600 };
B(pr, {
  variant: {
    options: ["vCT7aHM9v", "xXRtnFAEN", "SaHO1PQUO", "GNR4NTEYU"],
    optionTitles: ["Variant 1", "tavlet", "mobile", "Variant 4"],
    title: "Variant",
    type: c.Enum,
  },
});
ee(pr, [{ explicitInter: !0, fonts: [] }, ...Co, ...ko, ...Fo, ...So, ...zo], {
  supportsExplicitInterCodegen: !0,
});
var qt = ur(te),
  jo = O(Ae),
  Eo = O(Vr),
  Do = O(_r),
  A = Ee(P),
  qo = ur(m.div),
  et = Ee(m.div),
  Yo = O(Le),
  Jo = O(Gr),
  Wo = ur(ye),
  Oo = O($r),
  Uo = {
    AuBmYiANK: "(max-width: 809px)",
    mpnuVRSSM: "(min-width: 810px) and (max-width: 1199px)",
    WQLkyLRf1: "(min-width: 1200px)",
  },
  Yt = () => typeof document < "u",
  Jt = "framer-gonzJ",
  Xo = {
    AuBmYiANK: "framer-v-1c4qnds",
    mpnuVRSSM: "framer-v-usxx7",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  tt = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Wt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: tt,
    x: 0,
    y: 0,
  },
  rt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 54,
  },
  Go = { delay: 0.1, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Zo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Go,
    x: 0,
    y: 0,
  },
  Ko = { delay: 0.2, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  $o = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ko,
    x: 0,
    y: 0,
  },
  en = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ze = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.97,
    skewX: 0,
    skewY: 0,
    transition: en,
    x: 2,
    y: 2,
  },
  rn = (r, a) => `translateY(-50%) ${a}`,
  ea = { bounce: 0.2, delay: 3.6, duration: 0.4, type: "spring" },
  Ot = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ea,
    x: 0,
    y: 0,
  },
  at = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  Ut = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.97,
    skewX: 0,
    skewY: 0,
    transition: at,
  },
  Xt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ea,
    x: 0,
    y: 0,
  },
  Gt = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Ir = { delay: 1.6, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Rr = {
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
  fe = (r, a) => `translateX(-50%) ${a}`,
  re = { delay: 0, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Pr = {
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
  Nr = {
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
  Mr = {
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
  de = {
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
  Se = { delay: 1.5, duration: 4, ease: [0, 0, 1, 1], type: "tween" },
  Qr = {
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
  Zt = ({ children: r, blockDocumentScrolling: a, enabled: o = !0 }) => {
    let [s, f] = gt({ blockDocumentScrolling: a });
    return r({
      hide: () => f(!1),
      show: () => f(!0),
      toggle: () => f(!s),
      visible: o && s,
    });
  },
  tn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 54,
  },
  an = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: tt,
    x: 0,
    y: 54,
  },
  Kt = { delay: 0, duration: 1.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  $t = {
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
  on = {
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
  nn = {
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
  sn = {
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
  ln = { delay: 0, duration: 1.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  cn = {
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
  mn = { delay: 0, duration: 1.8, ease: [0.44, 0, 0.56, 1], type: "tween" },
  pn = {
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
  fn = {
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
  Lr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: at,
  },
  Br = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: at,
  },
  dn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -103,
  },
  gn = { delay: 1, duration: 1, ease: [0.7, -0.35, 0.3, 1.35], type: "tween" },
  hn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 585,
    y: 0,
  },
  Il = Cr(),
  un = { Desktop: "WQLkyLRf1", Phone: "AuBmYiANK", Tablet: "mpnuVRSSM" },
  wn = ({ height: r, id: a, width: o, ...s }) => {
    var f, g;
    return {
      ...s,
      variant:
        (g = (f = un[s.variant]) !== null && f !== void 0 ? f : s.variant) !==
          null && g !== void 0
          ? g
          : "WQLkyLRf1",
    };
  },
  xn = Y(function (r, a) {
    let { activeLocale: o, setLocale: s } = $(),
      { style: f, className: g, layoutId: d, variant: x, ...u } = wn(r);
    _e(() => {
      let z = Cr(void 0, o);
      if (z.robots) {
        let i = document.querySelector('meta[name="robots"]');
        i
          ? i.setAttribute("content", z.robots)
          : ((i = document.createElement("meta")),
            i.setAttribute("name", "robots"),
            i.setAttribute("content", z.robots),
            document.head.appendChild(i));
      }
    }, [void 0, o]),
      st(() => {
        let z = Cr(void 0, o);
        if (((document.title = z.title || ""), z.viewport)) {
          var i;
          (i = document.querySelector('meta[name="viewport"]')) === null ||
            i === void 0 ||
            i.setAttribute("content", z.viewport);
        }
        let V = z.bodyClassName;
        if (V) {
          let U = document.body;
          U.classList.forEach(
            (be) => be.startsWith("framer-body-") && U.classList.remove(be)
          ),
            U.classList.add(`${z.bodyClassName}-framer-gonzJ`);
        }
        return () => {
          V &&
            document.body.classList.remove(`${z.bodyClassName}-framer-gonzJ`);
        };
      }, [void 0, o]);
    let [n, C] = dt(x, Uo, !1),
      k = void 0,
      { activeVariantCallback: F, delay: w } = Ie(void 0),
      _ = ({ overlay: z, paginationInfo: i }) =>
        F(async (...V) => {
          z.toggle();
        }),
      N = R(null),
      j = We("V0GZVEIgY"),
      T = R(null),
      p = We("Bg2S11Xjj"),
      M = Je(),
      Q = R(null),
      I = We("Lvn4zATka"),
      h = R(null),
      t = We("YRI7PFrXI"),
      y = R(null),
      he = We("bPvGVk24X"),
      ue = R(null),
      we = () => (Yt() ? n !== "AuBmYiANK" : !0),
      ge = () => !Yt() || n === "AuBmYiANK",
      ne = G(),
      xe = [];
    return (
      pt({}),
      e(ft.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Xo },
        children: v(K, {
          id: d ?? ne,
          children: [
            v(m.div, {
              ...u,
              className: W(Jt, ...xe, "framer-72rtr7", g),
              ref: a ?? N,
              style: { ...f },
              children: [
                v("div", {
                  className: "framer-ojpar0",
                  id: j,
                  ref: T,
                  children: [
                    v(et, {
                      __framer__adjustPosition: !1,
                      __framer__offset: 0,
                      __framer__parallaxTransformEnabled: !0,
                      __framer__speed: 140,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1w2ozi7",
                      children: [
                        v("div", {
                          className: "framer-i59rb8",
                          children: [
                            e(S, {
                              breakpoint: n,
                              overrides: {
                                AuBmYiANK: {
                                  children: e(b, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Rubik Wet Paint", sans-serif',
                                        "--framer-font-size": "61px",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Merry Christmas",
                                    }),
                                  }),
                                },
                              },
                              children: e(qt, {
                                __fromCanvasComponent: !0,
                                animate: Wt,
                                children: e(b, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Rubik Wet Paint", sans-serif',
                                      "--framer-font-size": "70px",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Merry Christmas",
                                  }),
                                }),
                                className: "framer-1afr9v3",
                                "data-framer-appear-id": "1afr9v3",
                                fonts: ["GF;Rubik Wet Paint-regular"],
                                initial: rt,
                                optimized: !0,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(qt, {
                              __fromCanvasComponent: !0,
                              animate: Zo,
                              children: e(b, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Kaushan Script", sans-serif',
                                    "--framer-font-size": "19px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                    "--framer-text-transform": "capitalize",
                                  },
                                  children:
                                    " Does it feel like we've all lost a bit of the Christmas spirit in recent years?  Santa is here to bring it back! Help him collect all the presents in the game, and you'll earn $3,000 in $XMAS tokens. ",
                                }),
                              }),
                              className: "framer-wrpbwz",
                              "data-framer-appear-id": "wrpbwz",
                              fonts: ["GF;Kaushan Script-regular"],
                              initial: rt,
                              optimized: !0,
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        v(qo, {
                          animate: $o,
                          className: "framer-1uzflw5",
                          "data-framer-appear-id": "1uzflw5",
                          initial: rt,
                          optimized: !0,
                          children: [
                            e(S, {
                              breakpoint: n,
                              overrides: { AuBmYiANK: { y: 646.5 } },
                              children: e(H, {
                                height: 53,
                                y: 696,
                                children: e(ye, {
                                  className: "framer-1aqszaz-container",
                                  whileTap: Ze,
                                  children: e(Ae, {
                                    height: "100%",
                                    id: "NYKi_267x",
                                    layoutId: "NYKi_267x",
                                    NjAk50iJD: 20,
                                    rX_TO6nhQ: "rgb(255, 255, 255)",
                                    Uf_khRTfT: "buy xmas",
                                    variant: "u5cKgYsev",
                                    width: "100%",
                                    Z9i0v4qpe:
                                      "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                                  }),
                                }),
                              }),
                            }),
                            e(Zt, {
                              children: (z) =>
                                e(Qe, {
                                  children: e(S, {
                                    breakpoint: n,
                                    overrides: { AuBmYiANK: { y: 709.5 } },
                                    children: e(H, {
                                      height: 53,
                                      y: 696,
                                      children: v(ye, {
                                        className: "framer-1pri9it-container",
                                        id: "1pri9it",
                                        whileTap: Ze,
                                        children: [
                                          e(Ae, {
                                            height: "100%",
                                            id: "RWebt5hcq",
                                            layoutId: "RWebt5hcq",
                                            MRT00vOq0: _({ overlay: z }),
                                            NjAk50iJD: 20,
                                            rX_TO6nhQ: "rgb(255, 234, 0)",
                                            Uf_khRTfT: "watch story",
                                            variant: "H5ugE0qSB",
                                            width: "100%",
                                          }),
                                          e(Yr, {
                                            children:
                                              z.visible &&
                                              e(Qe, {
                                                children: Wr(
                                                  v(b, {
                                                    children: [
                                                      e(
                                                        m.div,
                                                        {
                                                          animate: {
                                                            opacity: 1,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0,
                                                              ease: [
                                                                0.5, 0, 0.88,
                                                                0.77,
                                                              ],
                                                              type: "tween",
                                                            },
                                                          },
                                                          className:
                                                            "framer-tarptp",
                                                          "data-framer-portal-id":
                                                            "1pri9it",
                                                          exit: {
                                                            opacity: 0,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0,
                                                              ease: [
                                                                0.12, 0.23, 0.5,
                                                                1,
                                                              ],
                                                              type: "tween",
                                                            },
                                                          },
                                                          initial: {
                                                            opacity: 0,
                                                          },
                                                          onTap: () => z.hide(),
                                                        },
                                                        "DWKlwLwjj"
                                                      ),
                                                      e(S, {
                                                        breakpoint: n,
                                                        overrides: {
                                                          AuBmYiANK: {
                                                            style: {
                                                              rotate: 90,
                                                            },
                                                          },
                                                        },
                                                        children: v(m.div, {
                                                          className:
                                                            "framer-mnzsxw",
                                                          "data-framer-portal-id":
                                                            "1pri9it",
                                                          transformTemplate: rn,
                                                          children: [
                                                            e(S, {
                                                              breakpoint: n,
                                                              overrides: {
                                                                AuBmYiANK: {
                                                                  y: 592.5000000000002,
                                                                },
                                                                mpnuVRSSM: {
                                                                  y: 704.9444444444447,
                                                                },
                                                              },
                                                              children: e(H, {
                                                                height: 46,
                                                                y: 706.7500000000002,
                                                                children: e(
                                                                  ye,
                                                                  {
                                                                    animate: Xt,
                                                                    className:
                                                                      "framer-13bb91q-container",
                                                                    exit: Ot,
                                                                    initial: Gt,
                                                                    whileTap:
                                                                      Ut,
                                                                    children: e(
                                                                      Vr,
                                                                      {
                                                                        height:
                                                                          "100%",
                                                                        id: "yWo204Vds",
                                                                        layoutId:
                                                                          "yWo204Vds",
                                                                        width:
                                                                          "100%",
                                                                      }
                                                                    ),
                                                                  }
                                                                ),
                                                              }),
                                                            }),
                                                            e(H, {
                                                              children: e(ye, {
                                                                className:
                                                                  "framer-izy82a-container",
                                                                children: e(S, {
                                                                  breakpoint: n,
                                                                  overrides: {
                                                                    AuBmYiANK: {
                                                                      controls:
                                                                        !0,
                                                                    },
                                                                  },
                                                                  children: e(
                                                                    _r,
                                                                    {
                                                                      autoplay:
                                                                        !0,
                                                                      backgroundColor:
                                                                        "rgba(0, 0, 0, 0)",
                                                                      borderRadius: 0,
                                                                      bottomLeftRadius: 0,
                                                                      bottomRightRadius: 0,
                                                                      controls:
                                                                        !1,
                                                                      height:
                                                                        "100%",
                                                                      id: "pz7c4A4_6",
                                                                      isMixedBorderRadius:
                                                                        !1,
                                                                      layoutId:
                                                                        "pz7c4A4_6",
                                                                      loop: !0,
                                                                      mute: !1,
                                                                      style: {
                                                                        height:
                                                                          "100%",
                                                                        width:
                                                                          "100%",
                                                                      },
                                                                      topLeftRadius: 0,
                                                                      topRightRadius: 0,
                                                                      video:
                                                                        "https://vimeo.com/1039510074?share=copy",
                                                                      width:
                                                                        "100%",
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      e("div", {
                                                        className:
                                                          "framer-xt9q8z",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                      }),
                                                      e(A, {
                                                        __framer__loop: Rr,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 1.9,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          Ir,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-85),
                                                          pixelHeight: 1241,
                                                          pixelWidth: 1419,
                                                          sizes: "41px",
                                                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                        },
                                                        className:
                                                          "framer-tkzb57",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                        transformTemplate: fe,
                                                      }),
                                                      e(A, {
                                                        __framer__loop: Pr,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 2.7,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          re,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-85),
                                                          pixelHeight: 1241,
                                                          pixelWidth: 1419,
                                                          sizes: "25.0556px",
                                                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                        },
                                                        className:
                                                          "framer-h4e6f0",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                      }),
                                                      e(A, {
                                                        __framer__loop: Nr,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0.6,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          re,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-53),
                                                          pixelHeight: 1241,
                                                          pixelWidth: 1419,
                                                          sizes: "19px",
                                                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                        },
                                                        className:
                                                          "framer-oo8o2t",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                      }),
                                                      e(A, {
                                                        __framer__loop: Mr,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0.3,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          re,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-76),
                                                          pixelHeight: 1241,
                                                          pixelWidth: 1419,
                                                          sizes: "41px",
                                                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                        },
                                                        className:
                                                          "framer-vdokkq",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                        transformTemplate: fe,
                                                      }),
                                                      e(A, {
                                                        __framer__loop: de,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0.3,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          re,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-51),
                                                          pixelHeight: 932,
                                                          pixelWidth: 815,
                                                          sizes: "13px",
                                                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                        },
                                                        className:
                                                          "framer-1w0ybz8",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                      }),
                                                      e(A, {
                                                        __framer__loop: de,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 4.8,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          Se,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-51),
                                                          pixelHeight: 932,
                                                          pixelWidth: 815,
                                                          sizes: "29.24px",
                                                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                        },
                                                        className:
                                                          "framer-1l3m5ad",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                        transformTemplate: fe,
                                                      }),
                                                      e(A, {
                                                        __framer__loop: de,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0.6,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          Se,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-51),
                                                          pixelHeight: 932,
                                                          pixelWidth: 815,
                                                          sizes: "18.06px",
                                                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                        },
                                                        className:
                                                          "framer-q3ae3v",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                      }),
                                                      e(A, {
                                                        __framer__loop: de,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0.6,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          Se,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-69),
                                                          pixelHeight: 932,
                                                          pixelWidth: 815,
                                                          sizes: "18px",
                                                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                        },
                                                        className:
                                                          "framer-1rg92tm",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                        transformTemplate: fe,
                                                      }),
                                                      e(A, {
                                                        __framer__loop: Qr,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopRepeatDelay: 2.1,
                                                        __framer__loopRepeatType:
                                                          "loop",
                                                        __framer__loopTransition:
                                                          re,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 112,
                                                          intrinsicWidth: 136,
                                                          loading: l(-76),
                                                          pixelHeight: 1241,
                                                          pixelWidth: 1419,
                                                          sizes: "34px",
                                                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                          srcSet:
                                                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                        },
                                                        className:
                                                          "framer-1ac55ix",
                                                        "data-framer-name":
                                                          "Image",
                                                        "data-framer-portal-id":
                                                          "1pri9it",
                                                        name: "Image",
                                                      }),
                                                    ],
                                                  }),
                                                  document.querySelector(
                                                    "#overlay"
                                                  )
                                                ),
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e(Te, {
                              links: [
                                {
                                  href: { webPageId: "TEBMoXu3n" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "TEBMoXu3n" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "TEBMoXu3n" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (z) =>
                                e(S, {
                                  breakpoint: n,
                                  overrides: { AuBmYiANK: { y: 772.5 } },
                                  children: e(H, {
                                    height: 53,
                                    y: 696,
                                    children: e(ye, {
                                      className: "framer-hns3t4-container",
                                      id: p,
                                      ref: Q,
                                      whileTap: Ze,
                                      children: e(S, {
                                        breakpoint: n,
                                        overrides: {
                                          AuBmYiANK: { Z9i0v4qpe: z[2] },
                                          mpnuVRSSM: { Z9i0v4qpe: z[1] },
                                        },
                                        children: e(Ae, {
                                          height: "100%",
                                          id: "Bg2S11Xjj",
                                          layoutId: "Bg2S11Xjj",
                                          NjAk50iJD: 20,
                                          rX_TO6nhQ: "rgb(255, 255, 255)",
                                          Uf_khRTfT: "Play Game",
                                          variant: "NaV2qYd_H",
                                          width: "100%",
                                          Z9i0v4qpe: z[0],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(A, {
                      __framer__adjustPosition: !1,
                      __framer__offset: 0,
                      __framer__parallaxTransformEnabled: !0,
                      __framer__speed: 55,
                      __perspectiveFX: !1,
                      __targetOpacity: 0.1,
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: l(0),
                        pixelHeight: 4481,
                        pixelWidth: 8002,
                        sizes: "100vw",
                        src: "/images/NGASXoEiSyInmnLqAMM8VeSPx4.png",
                        srcSet:
                          "/images/NGASXoEiSyInmnLqAMM8VeSPx4.png?scale-down-to=512 512w,/images/NGASXoEiSyInmnLqAMM8VeSPx4.png?scale-down-to=1024 1024w,/images/NGASXoEiSyInmnLqAMM8VeSPx4.png?scale-down-to=2048 2048w,/images/NGASXoEiSyInmnLqAMM8VeSPx4.png?scale-down-to=4096 4096w,/images/NGASXoEiSyInmnLqAMM8VeSPx4.png 8002w",
                      },
                      className: "framer-120krdt",
                    }),
                    e(A, {
                      __framer__adjustPosition: !1,
                      __framer__offset: 0,
                      __framer__parallaxTransformEnabled: !0,
                      __framer__speed: 66,
                      __perspectiveFX: !1,
                      __targetOpacity: 0.42,
                      background: {
                        alt: "",
                        fit: "fill",
                        loading: l(20),
                        pixelHeight: 4513,
                        pixelWidth: 7995,
                        sizes: "100vw",
                        src: "/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png",
                        srcSet:
                          "/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png?scale-down-to=512 512w,/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png?scale-down-to=1024 1024w,/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png?scale-down-to=2048 2048w,/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png?scale-down-to=4096 4096w,/images/xzE85MFgzK3NzG4NOS0PhsQ0A.png 7995w",
                      },
                      className: "framer-1cginiy",
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 857,
                            intrinsicWidth: 1364,
                            loading: l(781),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            src: "/images/ZTJU41SwJhpWMmmVvG1XgPpjW0.png",
                          },
                        },
                        mpnuVRSSM: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 857,
                            intrinsicWidth: 1364,
                            loading: l(760),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            src: "/images/ZTJU41SwJhpWMmmVvG1XgPpjW0.png",
                          },
                        },
                      },
                      children: e(P, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 857,
                          intrinsicWidth: 1364,
                          loading: l(372),
                          pixelHeight: 1080,
                          pixelWidth: 1920,
                          src: "/images/ZTJU41SwJhpWMmmVvG1XgPpjW0.png",
                        },
                        className: "framer-921lyg",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                    e(A, {
                      __framer__loop: Rr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 1.9,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: Ir,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-85),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "41px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                      className: "framer-73ad1d",
                      "data-framer-name": "Image",
                      name: "Image",
                      transformTemplate: fe,
                    }),
                    e(A, {
                      __framer__loop: Pr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 2.7,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: re,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-85),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "25.0556px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                      className: "framer-2o7als",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                    e(A, {
                      __framer__loop: Nr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.6,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: re,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-53),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "19px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                      className: "framer-3znpmj",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                    e(A, {
                      __framer__loop: Mr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.3,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: re,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-76),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "41px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                      className: "framer-1uh70ww",
                      "data-framer-name": "Image",
                      name: "Image",
                      transformTemplate: fe,
                    }),
                    e(A, {
                      __framer__loop: de,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.3,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: re,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-51),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "13px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                      className: "framer-sp8neh",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                    e(A, {
                      __framer__loop: de,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 4.8,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: Se,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-51),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "29.24px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                      className: "framer-118vdjf",
                      "data-framer-name": "Image",
                      name: "Image",
                      transformTemplate: fe,
                    }),
                    e(A, {
                      __framer__loop: de,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.6,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: Se,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-51),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "18.06px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                      className: "framer-1s6l4iz",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                    e(A, {
                      __framer__loop: de,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.6,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: Se,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-51),
                        pixelHeight: 932,
                        pixelWidth: 815,
                        sizes: "18px",
                        src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                        srcSet: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                      },
                      className: "framer-z1bit0",
                      "data-framer-name": "Image",
                      name: "Image",
                      transformTemplate: fe,
                    }),
                    e(A, {
                      __framer__loop: Qr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 2.1,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: re,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 112,
                        intrinsicWidth: 136,
                        loading: l(-76),
                        pixelHeight: 1241,
                        pixelWidth: 1419,
                        sizes: "34px",
                        src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                        srcSet:
                          "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                      },
                      className: "framer-tr6h17",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                  ],
                }),
                v("div", {
                  className: "framer-vr5d2p",
                  children: [
                    e(P, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 784,
                        intrinsicWidth: 8001,
                        loading: l(1e3),
                        pixelHeight: 1824,
                        pixelWidth: 8006,
                        sizes: "100vw",
                        src: "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png",
                        srcSet:
                          "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=512 512w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=1024 1024w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=2048 2048w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=4096 4096w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png 8006w",
                      },
                      className: "framer-bcf5hh",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 1241,
                            pixelWidth: 1419,
                            sizes: "41px",
                            src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                            srcSet:
                              "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: Rr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 1.9,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Ir,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 1241,
                          pixelWidth: 1419,
                          sizes: "41px",
                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                          srcSet:
                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                        },
                        className: "framer-1tezp47",
                        "data-framer-name": "Image",
                        name: "Image",
                        transformTemplate: fe,
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 1241,
                            pixelWidth: 1419,
                            sizes: "25px",
                            src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                            srcSet:
                              "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: Pr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 2.7,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: re,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 1241,
                          pixelWidth: 1419,
                          sizes: "25px",
                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                          srcSet:
                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                        },
                        className: "framer-nnevxs",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 1241,
                            pixelWidth: 1419,
                            sizes: "19px",
                            src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                            srcSet:
                              "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: Nr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0.6,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: re,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 1241,
                          pixelWidth: 1419,
                          sizes: "19px",
                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                          srcSet:
                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                        },
                        className: "framer-1j333x0",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 1241,
                            pixelWidth: 1419,
                            sizes: "41px",
                            src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                            srcSet:
                              "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: Mr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0.3,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: re,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 1241,
                          pixelWidth: 1419,
                          sizes: "41px",
                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                          srcSet:
                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                        },
                        className: "framer-1chebas",
                        "data-framer-name": "Image",
                        name: "Image",
                        transformTemplate: fe,
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 932,
                            pixelWidth: 815,
                            sizes: "13px",
                            src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                            srcSet:
                              "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: de,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0.3,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: re,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 932,
                          pixelWidth: 815,
                          sizes: "13px",
                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                          srcSet:
                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                        },
                        className: "framer-1cutezd",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 932,
                            pixelWidth: 815,
                            sizes: "29px",
                            src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                            srcSet:
                              "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: de,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 4.8,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Se,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 932,
                          pixelWidth: 815,
                          sizes: "29px",
                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                          srcSet:
                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                        },
                        className: "framer-3iorgt",
                        "data-framer-name": "Image",
                        name: "Image",
                        transformTemplate: fe,
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 932,
                            pixelWidth: 815,
                            sizes: "18px",
                            src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                            srcSet:
                              "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: de,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0.6,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Se,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 932,
                          pixelWidth: 815,
                          sizes: "18px",
                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                          srcSet:
                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                        },
                        className: "framer-ciwsbk",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 932,
                            pixelWidth: 815,
                            sizes: "18px",
                            src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                            srcSet:
                              "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: de,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0.6,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Se,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 932,
                          pixelWidth: 815,
                          sizes: "18px",
                          src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                          srcSet:
                            "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                        },
                        className: "framer-1k9ra1w",
                        "data-framer-name": "Image",
                        name: "Image",
                        transformTemplate: fe,
                      }),
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 112,
                            intrinsicWidth: 136,
                            loading: l(1009),
                            pixelHeight: 1241,
                            pixelWidth: 1419,
                            sizes: "34px",
                            src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                            srcSet:
                              "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                          },
                        },
                      },
                      children: e(A, {
                        __framer__loop: Qr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 2.1,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: re,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 112,
                          intrinsicWidth: 136,
                          loading: l(1037),
                          pixelHeight: 1241,
                          pixelWidth: 1419,
                          sizes: "34px",
                          src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                          srcSet:
                            "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                        },
                        className: "framer-zevn0c",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                  ],
                }),
                v("div", {
                  className: "framer-2ckrpk",
                  children: [
                    v("div", {
                      className: "framer-10jugcv",
                      id: I,
                      ref: h,
                      children: [
                        v(et, {
                          __framer__animate: { transition: tt },
                          __framer__animateOnce: !1,
                          __framer__enter: tn,
                          __framer__exit: an,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1h9llgh",
                          children: [
                            v("div", {
                              className: "framer-uxwbvx",
                              children: [
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Rubik Wet Paint", sans-serif',
                                            "--framer-font-size": "39px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                    mpnuVRSSM: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Rubik Wet Paint", sans-serif',
                                            "--framer-font-size": "61px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: "About",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Rubik Wet Paint", sans-serif',
                                          "--framer-font-size": "70px",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "capitalize",
                                        },
                                        children: "About",
                                      }),
                                    }),
                                    className: "framer-19ub2e6",
                                    fonts: ["GF;Rubik Wet Paint-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: {
                                      children: v(b, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "In recent years, it feels like we\u2019ve all lost a little bit of the Christmas magic, the warmth, the joy, the wonder. The holiday spirit that once brought us together seems to have faded, leaving us nostalgic for something we can barely remember. Some of us have even started doubting Santa, wondering if he\u2019s still out there. When was the last time you truly felt the excitement of receiving a gift from him? That magical feeling of Christmas morning seems like a distant memory.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "10px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "That\u2019s why we created this project, to bring back the magic of Christmas and reignite the joy we\u2019ve all been missing. We wanted to remind everyone of the wonder that made this season so special, to create something that brings people together in the spirit of giving and celebration.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "10px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "To do that, we\u2019ve paired a nostalgic Christmas-themed game with our meme coin. It\u2019s not just about playing a game, it\u2019s about feeling the magic again. As you progress through the levels of the game, you\u2019ll unlock airdrops, bringing that thrill of receiving gifts back to life. Through this experience, we\u2019re recreating the joy of opening presents and sharing the holiday spirit. And for those who believe in this vision, who hold on to the XMAS magic, and who are the most determined, the rewards will be truly special.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "10px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "This isn\u2019t just a coin or a game, it\u2019s a way to bring back the wonder of Christmas and share it with the world. After all, Christmas isn\u2019t just a holiday; it\u2019s a feeling. ",
                                          }),
                                        ],
                                      }),
                                    },
                                    mpnuVRSSM: {
                                      children: v(b, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "In recent years, it feels like we\u2019ve all lost a little bit of the Christmas magic, the warmth, the joy, the wonder. The holiday spirit that once brought us together seems to have faded, leaving us nostalgic for something we can barely remember. Some of us have even started doubting Santa, wondering if he\u2019s still out there. When was the last time you truly felt the excitement of receiving a gift from him? That magical feeling of Christmas morning seems like a distant memory.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "That\u2019s why we created this project, to bring back the magic of Christmas and reignite the joy we\u2019ve all been missing. We wanted to remind everyone of the wonder that made this season so special, to create something that brings people together in the spirit of giving and celebration.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "To do that, we\u2019ve paired a nostalgic Christmas-themed game with our meme coin. It\u2019s not just about playing a game, it\u2019s about feeling the magic again. As you progress through the levels of the game, you\u2019ll unlock airdrops, bringing that thrill of receiving gifts back to life. Through this experience, we\u2019re recreating the joy of opening presents and sharing the holiday spirit. And for those who believe in this vision, who hold on to the XMAS magic, and who are the most determined, the rewards will be truly special.",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Kaushan Script", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.05em",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "capitalize",
                                            },
                                            children:
                                              "This isn\u2019t just a coin or a game, it\u2019s a way to bring back the wonder of Christmas and share it with the world. After all, Christmas isn\u2019t just a holiday; it\u2019s a feeling. ",
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: v(b, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children:
                                            "In recent years, it feels like we\u2019ve all lost a little bit of the Christmas magic, the warmth, the joy, the wonder. The holiday spirit that once brought us together seems to have faded, leaving us nostalgic for something we can barely remember. Some of us have even started doubting Santa, wondering if he\u2019s still out there. When was the last time you truly felt the excitement of receiving a gift from him? That magical feeling of Christmas morning seems like a distant memory.",
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-font-size": "19px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: e("br", {
                                            className: "trailing-break",
                                          }),
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children:
                                            "That\u2019s why we created this project, to bring back the magic of Christmas and reignite the joy we\u2019ve all been missing. We wanted to remind everyone of the wonder that made this season so special, to create something that brings people together in the spirit of giving and celebration.",
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-font-size": "19px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: e("br", {
                                            className: "trailing-break",
                                          }),
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children:
                                            "To do that, we\u2019ve paired a nostalgic Christmas-themed game with our meme coin. It\u2019s not just about playing a game, it\u2019s about feeling the magic again. As you progress through the levels of the game, you\u2019ll unlock airdrops, bringing that thrill of receiving gifts back to life. Through this experience, we\u2019re recreating the joy of opening presents and sharing the holiday spirit. And for those who believe in this vision, who hold on to the XMAS magic, and who are the most determined, the rewards will be truly special.",
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-font-size": "19px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: e("br", {
                                            className: "trailing-break",
                                          }),
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children:
                                            "This isn\u2019t just a coin or a game, it\u2019s a way to bring back the wonder of Christmas and share it with the world. After all, Christmas isn\u2019t just a holiday; it\u2019s a feeling. ",
                                        }),
                                      ],
                                    }),
                                    className: "framer-96pbsz",
                                    fonts: ["GF;Kaushan Script-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            v("div", {
                              className: "framer-16b8kyl",
                              children: [
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: { width: "234px", y: 2108.5 },
                                    mpnuVRSSM: { y: 2302.5 },
                                  },
                                  children: e(H, {
                                    height: 53,
                                    y: 2490,
                                    children: e(ye, {
                                      className: "framer-1p6n3su-container",
                                      whileTap: Ze,
                                      children: e(S, {
                                        breakpoint: n,
                                        overrides: {
                                          AuBmYiANK: {
                                            style: { width: "100%" },
                                          },
                                        },
                                        children: e(Ae, {
                                          height: "100%",
                                          id: "wbVd3oS99",
                                          layoutId: "wbVd3oS99",
                                          NjAk50iJD: 20,
                                          rX_TO6nhQ: "rgb(255, 255, 255)",
                                          Uf_khRTfT: "buy xmas",
                                          variant: "u5cKgYsev",
                                          width: "100%",
                                          Z9i0v4qpe:
                                            "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                e(Zt, {
                                  children: (z) =>
                                    e(Qe, {
                                      children: e(S, {
                                        breakpoint: n,
                                        overrides: {
                                          AuBmYiANK: {
                                            width: "215px",
                                            y: 2171.5,
                                          },
                                          mpnuVRSSM: { y: 2302.5 },
                                        },
                                        children: e(H, {
                                          height: 53,
                                          y: 2490,
                                          children: v(ye, {
                                            className:
                                              "framer-y6ppy8-container",
                                            id: "y6ppy8",
                                            whileTap: Ze,
                                            children: [
                                              e(S, {
                                                breakpoint: n,
                                                overrides: {
                                                  AuBmYiANK: {
                                                    style: { width: "100%" },
                                                  },
                                                  mpnuVRSSM: {
                                                    style: {
                                                      maxWidth: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                },
                                                children: e(Ae, {
                                                  height: "100%",
                                                  id: "ZXlnEkyrG",
                                                  layoutId: "ZXlnEkyrG",
                                                  MRT00vOq0: _({ overlay: z }),
                                                  NjAk50iJD: 20,
                                                  rX_TO6nhQ: "rgb(255, 234, 0)",
                                                  Uf_khRTfT: "watch story",
                                                  variant: "H5ugE0qSB",
                                                  width: "100%",
                                                }),
                                              }),
                                              e(Yr, {
                                                children:
                                                  z.visible &&
                                                  e(Qe, {
                                                    children: Wr(
                                                      v(b, {
                                                        children: [
                                                          e(
                                                            m.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [
                                                                    0.5, 0,
                                                                    0.88, 0.77,
                                                                  ],
                                                                  type: "tween",
                                                                },
                                                              },
                                                              className:
                                                                "framer-1tbvxeq",
                                                              "data-framer-portal-id":
                                                                "y6ppy8",
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [
                                                                    0.12, 0.23,
                                                                    0.5, 1,
                                                                  ],
                                                                  type: "tween",
                                                                },
                                                              },
                                                              initial: {
                                                                opacity: 0,
                                                              },
                                                              onTap: () =>
                                                                z.hide(),
                                                            },
                                                            "PQ_R9w5Js"
                                                          ),
                                                          v("div", {
                                                            className:
                                                              "framer-118i646",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            children: [
                                                              e(S, {
                                                                breakpoint: n,
                                                                overrides: {
                                                                  mpnuVRSSM: {
                                                                    y: 704.9444444444447,
                                                                  },
                                                                },
                                                                children: e(H, {
                                                                  height: 46,
                                                                  y: 706.7500000000002,
                                                                  children: e(
                                                                    ye,
                                                                    {
                                                                      animate:
                                                                        Xt,
                                                                      className:
                                                                        "framer-1c7qgl3-container",
                                                                      exit: Ot,
                                                                      initial:
                                                                        Gt,
                                                                      whileTap:
                                                                        Ut,
                                                                      children:
                                                                        e(Vr, {
                                                                          height:
                                                                            "100%",
                                                                          id: "iOUKJ4GoK",
                                                                          layoutId:
                                                                            "iOUKJ4GoK",
                                                                          width:
                                                                            "100%",
                                                                        }),
                                                                    }
                                                                  ),
                                                                }),
                                                              }),
                                                              e(H, {
                                                                children: e(
                                                                  ye,
                                                                  {
                                                                    className:
                                                                      "framer-vrsh8n-container",
                                                                    children: e(
                                                                      _r,
                                                                      {
                                                                        autoplay:
                                                                          !0,
                                                                        backgroundColor:
                                                                          "rgba(0, 0, 0, 0)",
                                                                        borderRadius: 0,
                                                                        bottomLeftRadius: 0,
                                                                        bottomRightRadius: 0,
                                                                        controls:
                                                                          !1,
                                                                        height:
                                                                          "100%",
                                                                        id: "vsTH6DK89",
                                                                        isMixedBorderRadius:
                                                                          !1,
                                                                        layoutId:
                                                                          "vsTH6DK89",
                                                                        loop: !0,
                                                                        mute: !1,
                                                                        style: {
                                                                          height:
                                                                            "100%",
                                                                          width:
                                                                            "100%",
                                                                        },
                                                                        topLeftRadius: 0,
                                                                        topRightRadius: 0,
                                                                        video:
                                                                          "https://vimeo.com/1036920856",
                                                                        width:
                                                                          "100%",
                                                                      }
                                                                    ),
                                                                  }
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          e("div", {
                                                            className:
                                                              "framer-1wzmqjo",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                          }),
                                                          e(A, {
                                                            __framer__loop: Rr,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 1.9,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              Ir,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-85),
                                                              pixelHeight: 1241,
                                                              pixelWidth: 1419,
                                                              sizes: "41px",
                                                              src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                            },
                                                            className:
                                                              "framer-8q3ud6",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                            transformTemplate:
                                                              fe,
                                                          }),
                                                          e(A, {
                                                            __framer__loop: Pr,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 2.7,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              re,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-85),
                                                              pixelHeight: 1241,
                                                              pixelWidth: 1419,
                                                              sizes:
                                                                "25.0556px",
                                                              src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                            },
                                                            className:
                                                              "framer-p2gzz5",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                          }),
                                                          e(A, {
                                                            __framer__loop: Nr,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 0.6,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              re,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-53),
                                                              pixelHeight: 1241,
                                                              pixelWidth: 1419,
                                                              sizes: "19px",
                                                              src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                            },
                                                            className:
                                                              "framer-1dpqcqv",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                          }),
                                                          e(A, {
                                                            __framer__loop: Mr,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 0.3,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              re,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-76),
                                                              pixelHeight: 1241,
                                                              pixelWidth: 1419,
                                                              sizes: "41px",
                                                              src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                            },
                                                            className:
                                                              "framer-2xyf5g",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                            transformTemplate:
                                                              fe,
                                                          }),
                                                          e(A, {
                                                            __framer__loop: de,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 0.3,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              re,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-51),
                                                              pixelHeight: 932,
                                                              pixelWidth: 815,
                                                              sizes: "13px",
                                                              src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                            },
                                                            className:
                                                              "framer-uw0od6",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                          }),
                                                          e(A, {
                                                            __framer__loop: de,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 4.8,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              Se,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-51),
                                                              pixelHeight: 932,
                                                              pixelWidth: 815,
                                                              sizes: "29.24px",
                                                              src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                            },
                                                            className:
                                                              "framer-c98e3x",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                            transformTemplate:
                                                              fe,
                                                          }),
                                                          e(A, {
                                                            __framer__loop: de,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 0.6,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              Se,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-51),
                                                              pixelHeight: 932,
                                                              pixelWidth: 815,
                                                              sizes: "18.06px",
                                                              src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                            },
                                                            className:
                                                              "framer-1k8gcym",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                          }),
                                                          e(A, {
                                                            __framer__loop: de,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 0.6,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              Se,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-69),
                                                              pixelHeight: 932,
                                                              pixelWidth: 815,
                                                              sizes: "18px",
                                                              src: "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/7wpPzxoQwVFadIFGq02NF2iHqnQ.png 815w",
                                                            },
                                                            className:
                                                              "framer-150ss5z",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                            transformTemplate:
                                                              fe,
                                                          }),
                                                          e(A, {
                                                            __framer__loop: Qr,
                                                            __framer__loopEffectEnabled:
                                                              !0,
                                                            __framer__loopRepeatDelay: 2.1,
                                                            __framer__loopRepeatType:
                                                              "loop",
                                                            __framer__loopTransition:
                                                              re,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            background: {
                                                              alt: "",
                                                              fit: "fill",
                                                              intrinsicHeight: 112,
                                                              intrinsicWidth: 136,
                                                              loading: l(-76),
                                                              pixelHeight: 1241,
                                                              pixelWidth: 1419,
                                                              sizes: "34px",
                                                              src: "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512",
                                                              srcSet:
                                                                "/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=512 512w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png?scale-down-to=1024 1024w,/images/tQMwHU1F4CaVpCAfA1YcAiscFPQ.png 1419w",
                                                            },
                                                            className:
                                                              "framer-1e1g5rx",
                                                            "data-framer-name":
                                                              "Image",
                                                            "data-framer-portal-id":
                                                              "y6ppy8",
                                                            name: "Image",
                                                          }),
                                                        ],
                                                      }),
                                                      document.querySelector(
                                                        "#overlay"
                                                      )
                                                    ),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e("div", { className: "framer-1w7t02l" }),
                      ],
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(1650.5),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "calc(100vw + 40px)",
                            src: "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png",
                            srcSet:
                              "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=512 512w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=1024 1024w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png 1920w",
                          },
                        },
                        mpnuVRSSM: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(1855.5),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png",
                            srcSet:
                              "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=512 512w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=1024 1024w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png 1920w",
                          },
                        },
                      },
                      children: e(P, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1080,
                          intrinsicWidth: 1920,
                          loading: l(2043),
                          pixelHeight: 1080,
                          pixelWidth: 1920,
                          sizes: "100vw",
                          src: "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png",
                          srcSet:
                            "/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=512 512w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png?scale-down-to=1024 1024w,/images/ckNl7CheKDfmd4Q5MXLhbiJFowc.png 1920w",
                        },
                        className: "framer-1uhzijc",
                        "data-framer-name": "Tokenomics kraci",
                        name: "Tokenomics kraci",
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1y3rwsq",
                  children: e(S, {
                    breakpoint: n,
                    overrides: {
                      AuBmYiANK: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 784,
                          intrinsicWidth: 8001,
                          loading: l(2324.5),
                          pixelHeight: 1824,
                          pixelWidth: 8006,
                          sizes: "100vw",
                          src: "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png",
                          srcSet:
                            "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=512 512w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=1024 1024w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=2048 2048w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=4096 4096w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png 8006w",
                        },
                      },
                      mpnuVRSSM: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 784,
                          intrinsicWidth: 8001,
                          loading: l(2529.5),
                          pixelHeight: 1824,
                          pixelWidth: 8006,
                          sizes: "100vw",
                          src: "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png",
                          srcSet:
                            "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=512 512w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=1024 1024w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=2048 2048w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=4096 4096w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png 8006w",
                        },
                      },
                    },
                    children: e(P, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 784,
                        intrinsicWidth: 8001,
                        loading: l(2717),
                        pixelHeight: 1824,
                        pixelWidth: 8006,
                        sizes: "100vw",
                        src: "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png",
                        srcSet:
                          "/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=512 512w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=1024 1024w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=2048 2048w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png?scale-down-to=4096 4096w,/images/O7ZTaHoZxSHODZFJf2ebhT5mdl0.png 8006w",
                      },
                      className: "framer-kogdca",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                  }),
                }),
                v("div", {
                  className: "framer-1nk3q5w",
                  id: t,
                  ref: y,
                  children: [
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          children: e(b, {
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
                              children: "How To Buy",
                            }),
                          }),
                        },
                        mpnuVRSSM: {
                          children: e(b, {
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
                              children: "How To Buy",
                            }),
                          }),
                        },
                      },
                      children: e(te, {
                        __fromCanvasComponent: !0,
                        children: e(b, {
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
                            children: "How To Buy",
                          }),
                        }),
                        className: "framer-1ut8bda",
                        fonts: ["GF;Rubik Wet Paint-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    v("div", {
                      className: "framer-1fstfmv",
                      children: [
                        v("div", {
                          className: "framer-u4v5mn",
                          children: [
                            e(S, {
                              breakpoint: n,
                              overrides: {
                                AuBmYiANK: {
                                  __framer__loop: on,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(2891),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png",
                                    srcSet:
                                      "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=512 512w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=1024 1024w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=2048 2048w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=4096 4096w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png 5758w",
                                  },
                                },
                                mpnuVRSSM: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3207.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png",
                                    srcSet:
                                      "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=512 512w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=1024 1024w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=2048 2048w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=4096 4096w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png 5758w",
                                  },
                                },
                              },
                              children: e(A, {
                                __framer__loop: $t,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Kt,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: l(3444.5),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png",
                                  srcSet:
                                    "/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=512 512w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=1024 1024w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=2048 2048w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png?scale-down-to=4096 4096w,/images/VoTjvBDg2va7GQeZ1kZOlrSc4.png 5758w",
                                },
                                className: "framer-w7ovhw",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                            e(S, {
                              breakpoint: n,
                              overrides: {
                                AuBmYiANK: {
                                  __framer__loop: sn,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3266),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png",
                                    srcSet:
                                      "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=512 512w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=1024 1024w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=2048 2048w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=4096 4096w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png 5758w",
                                  },
                                },
                                mpnuVRSSM: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3582.5),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png",
                                    srcSet:
                                      "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=512 512w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=1024 1024w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=2048 2048w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=4096 4096w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png 5758w",
                                  },
                                },
                              },
                              children: e(A, {
                                __framer__loop: nn,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Kt,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: l(3819.5),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png",
                                  srcSet:
                                    "/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=512 512w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=1024 1024w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=2048 2048w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png?scale-down-to=4096 4096w,/images/M9ZvwZ4GeoewgFZCNxSW2cmUp00.png 5758w",
                                },
                                className: "framer-1qby9a4",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                          ],
                        }),
                        v("div", {
                          className: "framer-1f69c5f",
                          children: [
                            e(S, {
                              breakpoint: n,
                              overrides: {
                                AuBmYiANK: {
                                  __framer__loop: cn,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3658),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/nRHB04l1De5br9fHSaTHmirlBY.png",
                                    srcSet:
                                      "/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=512 512w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=1024 1024w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=2048 2048w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=4096 4096w,/images/nRHB04l1De5br9fHSaTHmirlBY.png 5758w",
                                  },
                                },
                                mpnuVRSSM: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3207),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/nRHB04l1De5br9fHSaTHmirlBY.png",
                                    srcSet:
                                      "/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=512 512w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=1024 1024w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=2048 2048w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=4096 4096w,/images/nRHB04l1De5br9fHSaTHmirlBY.png 5758w",
                                  },
                                },
                              },
                              children: e(A, {
                                __framer__loop: $t,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: ln,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: l(3444),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/nRHB04l1De5br9fHSaTHmirlBY.png",
                                  srcSet:
                                    "/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=512 512w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=1024 1024w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=2048 2048w,/images/nRHB04l1De5br9fHSaTHmirlBY.png?scale-down-to=4096 4096w,/images/nRHB04l1De5br9fHSaTHmirlBY.png 5758w",
                                },
                                className: "framer-98gov0",
                                "data-framer-name": "Image",
                                name: "Image",
                              }),
                            }),
                            e(S, {
                              breakpoint: n,
                              overrides: {
                                AuBmYiANK: {
                                  __framer__loop: fn,
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(4033),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "100vw",
                                    src: "/images/7MzwycFxta5oiOMzBliV7LTfjE.png",
                                    srcSet:
                                      "/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=512 512w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=1024 1024w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=2048 2048w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=4096 4096w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png 5758w",
                                  },
                                },
                                mpnuVRSSM: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3798,
                                    intrinsicWidth: 5758,
                                    loading: l(3582),
                                    pixelHeight: 3798,
                                    pixelWidth: 5758,
                                    sizes: "max((100vw - 10px) / 2, 1px)",
                                    src: "/images/7MzwycFxta5oiOMzBliV7LTfjE.png",
                                    srcSet:
                                      "/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=512 512w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=1024 1024w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=2048 2048w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=4096 4096w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png 5758w",
                                  },
                                },
                              },
                              children: e(A, {
                                __framer__loop: pn,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: mn,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3798,
                                  intrinsicWidth: 5758,
                                  loading: l(3819),
                                  pixelHeight: 3798,
                                  pixelWidth: 5758,
                                  sizes: "max((100vw - 10px) / 2, 1px)",
                                  src: "/images/7MzwycFxta5oiOMzBliV7LTfjE.png",
                                  srcSet:
                                    "/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=512 512w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=1024 1024w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=2048 2048w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png?scale-down-to=4096 4096w,/images/7MzwycFxta5oiOMzBliV7LTfjE.png 5758w",
                                },
                                className: "framer-yrll2l",
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
                v("div", {
                  className: "framer-1ikb0wg",
                  id: he,
                  ref: ue,
                  children: [
                    v("div", {
                      className: "framer-141voyk",
                      children: [
                        e("div", { className: "framer-wj01cq" }),
                        v("div", {
                          className: "framer-52oss6",
                          children: [
                            v("div", {
                              className: "framer-1lpnmak",
                              children: [
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Rubik Wet Paint", sans-serif',
                                            "--framer-font-size": "34px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: "tokenomics",
                                        }),
                                      }),
                                    },
                                    mpnuVRSSM: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Rubik Wet Paint", sans-serif',
                                            "--framer-font-size": "61px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children: "tokenomics",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Rubik Wet Paint", sans-serif',
                                          "--framer-font-size": "70px",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "capitalize",
                                        },
                                        children: "tokenomics",
                                      }),
                                    }),
                                    className: "framer-lq2662",
                                    fonts: ["GF;Rubik Wet Paint-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Kaushan Script", sans-serif',
                                            "--framer-font-size": "15px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "capitalize",
                                          },
                                          children:
                                            " Does it feel like we've all lost a bit of the Christmas spirit in recent years?  Santa is here to bring it back! Help him collect all the presents in the game, and you'll earn $3,000 in $XMAS tokens. ",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7S2F1c2hhbiBTY3JpcHQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Kaushan Script", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "capitalize",
                                        },
                                        children:
                                          " Does it feel like we've all lost a bit of the Christmas spirit in recent years?  Santa is here to bring it back! Help him collect all the presents in the game, and you'll earn $3,000 in $XMAS tokens. ",
                                      }),
                                    }),
                                    className: "framer-dgm2c6",
                                    fonts: ["GF;Kaushan Script-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            v("div", {
                              className: "framer-163mz6e",
                              "data-border": !0,
                              children: [
                                e(te, {
                                  __fromCanvasComponent: !0,
                                  children: e(b, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Rubik Wet Paint", sans-serif',
                                        "--framer-font-size": "15px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                      },
                                      children: "CA:",
                                    }),
                                  }),
                                  className: "framer-xeydfb",
                                  fonts: ["GF;Rubik Wet Paint-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(S, {
                                  breakpoint: n,
                                  overrides: {
                                    AuBmYiANK: {
                                      children: e(b, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Rubik Wet Paint", sans-serif',
                                            "--framer-font-size": "8px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                          },
                                          children:
                                            "0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UnViaWsgV2V0IFBhaW50LXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Rubik Wet Paint", sans-serif',
                                          "--framer-font-size": "15px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "left",
                                        },
                                        children:
                                          "0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                                      }),
                                    }),
                                    className: "framer-wfdb6i",
                                    fonts: ["GF;Rubik Wet Paint-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(H, {
                                  children: e(ye, {
                                    className: "framer-ea2hw0-container",
                                    children: e(Le, {
                                      borderRadius: 50,
                                      bottomLeftRadius: 50,
                                      bottomRightRadius: 50,
                                      color: "rgb(0, 0, 0)",
                                      content:
                                        "0x8014849016D42E1bA189d4077F8679edBD15DE9A",
                                      fill: "rgb(254, 234, 0)",
                                      font: {
                                        fontFamily: '"Kavoon", sans-serif',
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        letterSpacing: "0em",
                                        lineHeight: "1em",
                                      },
                                      height: "100%",
                                      id: "txGbBcHqZ",
                                      isMixedBorderRadius: !1,
                                      label: "Copy",
                                      layoutId: "txGbBcHqZ",
                                      padding: 10,
                                      paddingBottom: 10,
                                      paddingLeft: 10,
                                      paddingPerSide: !1,
                                      paddingRight: 10,
                                      paddingTop: 10,
                                      topLeftRadius: 50,
                                      topRightRadius: 50,
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(4750),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "calc(100vw + 10px)",
                            src: "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png",
                            srcSet:
                              "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=512 512w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=1024 1024w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png 1920w",
                          },
                        },
                        mpnuVRSSM: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(4211),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png",
                            srcSet:
                              "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=512 512w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=1024 1024w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png 1920w",
                          },
                        },
                      },
                      children: e(P, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1080,
                          intrinsicWidth: 1920,
                          loading: l(4829.5),
                          pixelHeight: 1080,
                          pixelWidth: 1920,
                          sizes: "100vw",
                          src: "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png",
                          srcSet:
                            "/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=512 512w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png?scale-down-to=1024 1024w,/images/18gVCUlXlf8nurM7lCtQwBeKywg.png 1920w",
                        },
                        className: "framer-vv02t8",
                        "data-framer-name": "Tokenomics kraci",
                        name: "Tokenomics kraci",
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1sndhsk",
                  children: e(S, {
                    breakpoint: n,
                    overrides: {
                      AuBmYiANK: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 784,
                          intrinsicWidth: 8001,
                          loading: l(4971),
                          pixelHeight: 1414,
                          pixelWidth: 8006,
                          sizes: "100vw",
                          src: "/images/lniorKJduz01xRtfGv6gFtyMR0.png",
                          srcSet:
                            "/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=512 512w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=1024 1024w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=2048 2048w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=4096 4096w,/images/lniorKJduz01xRtfGv6gFtyMR0.png 8006w",
                        },
                      },
                      mpnuVRSSM: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 784,
                          intrinsicWidth: 8001,
                          loading: l(4873),
                          pixelHeight: 1414,
                          pixelWidth: 8006,
                          sizes: "100vw",
                          src: "/images/lniorKJduz01xRtfGv6gFtyMR0.png",
                          srcSet:
                            "/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=512 512w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=1024 1024w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=2048 2048w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=4096 4096w,/images/lniorKJduz01xRtfGv6gFtyMR0.png 8006w",
                        },
                      },
                    },
                    children: e(P, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 784,
                        intrinsicWidth: 8001,
                        loading: l(5491.5),
                        pixelHeight: 1414,
                        pixelWidth: 8006,
                        sizes: "100vw",
                        src: "/images/lniorKJduz01xRtfGv6gFtyMR0.png",
                        srcSet:
                          "/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=512 512w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=1024 1024w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=2048 2048w,/images/lniorKJduz01xRtfGv6gFtyMR0.png?scale-down-to=4096 4096w,/images/lniorKJduz01xRtfGv6gFtyMR0.png 8006w",
                      },
                      className: "framer-1x2t1fo",
                      "data-framer-name": "Image",
                      name: "Image",
                    }),
                  }),
                }),
                v("div", {
                  className: "framer-1enzhqg",
                  children: [
                    v("div", {
                      className: "framer-fwkex2",
                      children: [
                        e(q, {
                          href: "https://dexscreener.com/ethereum/0x46e8c5ad74608d37f5eadf5c0dd93490edcd7dd8",
                          nodeId: "tzzDRX7ne",
                          children: e(S, {
                            breakpoint: n,
                            overrides: {
                              AuBmYiANK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5270),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "36.4583px",
                                  src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                                  srcSet:
                                    "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                                },
                              },
                              mpnuVRSSM: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5197.5),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "88.3837px",
                                  src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                                  srcSet:
                                    "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                                },
                              },
                            },
                            children: e(P, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: l(5763.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "88.3837px",
                                src: "/images/zBckaarq05DcSGGoHe9NA3gugTw.png",
                                srcSet:
                                  "/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=512 512w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=1024 1024w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png?scale-down-to=2048 2048w,/images/zBckaarq05DcSGGoHe9NA3gugTw.png 3363w",
                              },
                              className: "framer-p818jg framer-lux5qc",
                              "data-framer-name": "Screener",
                              name: "Screener",
                              whileHover: Lr,
                              whileTap: Br,
                            }),
                          }),
                        }),
                        e(q, {
                          href: "https://x.com/SantaGameEth",
                          nodeId: "XOB1OMQYn",
                          openInNewTab: !0,
                          children: e(S, {
                            breakpoint: n,
                            overrides: {
                              AuBmYiANK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5270),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "36.4583px",
                                  src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                                  srcSet:
                                    "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                                },
                              },
                              mpnuVRSSM: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5197.5),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "88.3837px",
                                  src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                                  srcSet:
                                    "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                                },
                              },
                            },
                            children: e(P, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: l(5763.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "88.3837px",
                                src: "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png",
                                srcSet:
                                  "/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=512 512w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=1024 1024w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png?scale-down-to=2048 2048w,/images/dpLySbZBsQo6uRU8ub0iHtXAp8.png 3363w",
                              },
                              className: "framer-18wed9n framer-lux5qc",
                              "data-framer-name": "X",
                              name: "X",
                              whileHover: Lr,
                              whileTap: Br,
                            }),
                          }),
                        }),
                        e(q, {
                          href: "https://www.dextools.io/app/en/token/santagame07?t=1734733035821",
                          nodeId: "OwO2_JUnM",
                          children: e(S, {
                            breakpoint: n,
                            overrides: {
                              AuBmYiANK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5270),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "36.4583px",
                                  src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                                  srcSet:
                                    "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                                },
                              },
                              mpnuVRSSM: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5197.5),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "88.3837px",
                                  src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                                  srcSet:
                                    "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                                },
                              },
                            },
                            children: e(P, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: l(5763.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "88.3837px",
                                src: "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png",
                                srcSet:
                                  "/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=512 512w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=1024 1024w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png?scale-down-to=2048 2048w,/images/272PabhDyL4YdTZICy6ZjwEQiQ.png 3363w",
                              },
                              className: "framer-12ctwn1 framer-lux5qc",
                              "data-framer-name": "Tools",
                              name: "Tools",
                              whileHover: Lr,
                              whileTap: Br,
                            }),
                          }),
                        }),
                        e(q, {
                          href: "https://t.me/santagameoneth",
                          nodeId: "ueO5qSHUH",
                          openInNewTab: !0,
                          children: e(S, {
                            breakpoint: n,
                            overrides: {
                              AuBmYiANK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5270),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "36.4583px",
                                  src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                                  srcSet:
                                    "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                                },
                              },
                              mpnuVRSSM: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3044,
                                  intrinsicWidth: 3363,
                                  loading: l(5197.5),
                                  pixelHeight: 3044,
                                  pixelWidth: 3363,
                                  sizes: "88.3837px",
                                  src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                                  srcSet:
                                    "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                                },
                              },
                            },
                            children: e(P, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 3044,
                                intrinsicWidth: 3363,
                                loading: l(5763.5),
                                pixelHeight: 3044,
                                pixelWidth: 3363,
                                sizes: "88.3837px",
                                src: "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png",
                                srcSet:
                                  "/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=512 512w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=1024 1024w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png?scale-down-to=2048 2048w,/images/FSog7aGzr8bgX95l5pvKQwKh65E.png 3363w",
                              },
                              className: "framer-1xf3oah framer-lux5qc",
                              "data-framer-name": "Telegram",
                              name: "Telegram",
                              whileHover: Lr,
                              whileTap: Br,
                            onclick:"window.open('https://t.me/santagameoneth','_blank')"
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(S, {
                      breakpoint: n,
                      overrides: {
                        AuBmYiANK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(5207),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                            srcSet:
                              "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                          },
                        },
                        mpnuVRSSM: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1080,
                            intrinsicWidth: 1920,
                            loading: l(4953),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: "100vw",
                            src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                            srcSet:
                              "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                          },
                        },
                      },
                      children: e(P, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1080,
                          intrinsicWidth: 1920,
                          loading: l(5640.5),
                          pixelHeight: 1080,
                          pixelWidth: 1920,
                          sizes: "100vw",
                          src: "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png",
                          srcSet:
                            "/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=512 512w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png?scale-down-to=1024 1024w,/images/laA2aqdq4QDY3hEzsabItXPeIBg.png 1920w",
                        },
                        className: "framer-1k7nkm7",
                        "data-framer-name": "Tokenomics kraci",
                        name: "Tokenomics kraci",
                      }),
                    }),
                  ],
                }),
                we() &&
                  e(H, {
                    height: 86,
                    width: "calc(100vw - 200px)",
                    y: 10,
                    children: e(Wo, {
                      animate: Wt,
                      className: "framer-1mf8jh-container hidden-1c4qnds",
                      "data-framer-appear-id": "1mf8jh",
                      initial: dn,
                      layoutScroll: !0,
                      optimized: !0,
                      children: e(S, {
                        breakpoint: n,
                        overrides: { mpnuVRSSM: { variant: "eZ7gXPACW" } },
                        children: e(Gr, {
                          height: "100%",
                          id: "cwDCTy1i5",
                          layoutId: "cwDCTy1i5",
                          style: { width: "100%" },
                          variant: "uNOdB4q9_",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                ge() &&
                  e(S, {
                    breakpoint: n,
                    overrides: {
                      AuBmYiANK: {
                        height: 70,
                        width: "calc(100vw - 20px)",
                        y: 5,
                      },
                    },
                    children: e(H, {
                      children: e(ye, {
                        className:
                          "framer-150d8vz-container hidden-72rtr7 hidden-usxx7",
                        layoutScroll: !0,
                        children: e($r, {
                          height: "100%",
                          id: "WcaDYDmB2",
                          layoutId: "WcaDYDmB2",
                          style: { width: "100%" },
                          variant: "GNR4NTEYU",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                e(et, {
                  __framer__loop: hn,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: "mirror",
                  __framer__loopTransition: gn,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  className: "framer-lpd48f",
                  whileTap: Ze,
                  children: e(H, {
                    height: 28,
                    width: "128px",
                    y: 942,
                    children: e(ye, {
                      className: "framer-d0e8ag-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "WT9pwrXWF",
                        layoutId: "WT9pwrXWF",
                        NjAk50iJD: 14,
                        rX_TO6nhQ: "rgb(255, 0, 0)",
                        style: { height: "100%", width: "100%" },
                        Uf_khRTfT: "Don't       click",
                        variant: "nup9PpipB",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: W(Jt, ...xe), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  vn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gonzJ.framer-lux5qc, .framer-gonzJ .framer-lux5qc { display: block; }",
    ".framer-gonzJ.framer-72rtr7 { align-content: center; align-items: center; background: linear-gradient(261deg, #0790ff 0%, rgba(4, 101, 179, 1) 39.63963963963964%, rgba(3, 80, 142, 1) 71.17117117117117%, rgb(0, 52, 94) 100%); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-gonzJ .framer-ojpar0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-start; overflow: hidden; padding: 130px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-1w2ozi7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; max-width: 676px; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 6; }",
    ".framer-gonzJ .framer-i59rb8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-1afr9v3, .framer-gonzJ .framer-19ub2e6, .framer-gonzJ .framer-1ut8bda, .framer-gonzJ .framer-lq2662 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-gonzJ .framer-wrpbwz, .framer-gonzJ .framer-96pbsz, .framer-gonzJ .framer-dgm2c6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-gonzJ .framer-1uzflw5, .framer-gonzJ .framer-1fstfmv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-1aqszaz-container, .framer-gonzJ .framer-1pri9it-container, .framer-gonzJ .framer-hns3t4-container, .framer-gonzJ .framer-1p6n3su-container, .framer-gonzJ .framer-y6ppy8-container, .framer-gonzJ .framer-ea2hw0-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-gonzJ .framer-tarptp, .framer-gonzJ .framer-1tbvxeq { background-color: rgba(0, 0, 0, 0.91); inset: 0px; position: fixed; user-select: none; z-index: 9; }",
    ".framer-gonzJ .framer-mnzsxw { aspect-ratio: 1.7857142857142858 / 1; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; flex: none; height: var(--framer-aspect-ratio-supported, 448px); left: 200px; overflow: hidden; position: fixed; right: 200px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-gonzJ .framer-13bb91q-container, .framer-gonzJ .framer-1c7qgl3-container { bottom: 35px; flex: none; height: auto; position: absolute; right: 50px; width: auto; z-index: 8; }",
    ".framer-gonzJ .framer-izy82a-container { -webkit-user-select: none; aspect-ratio: 2.068062827225131 / 1; bottom: -20px; flex: none; left: 50%; position: absolute; top: -31px; transform: translateX(-50%); user-select: none; width: var(--framer-aspect-ratio-supported, 1032px); z-index: 1; }",
    ".framer-gonzJ .framer-xt9q8z, .framer-gonzJ .framer-1wzmqjo { -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); bottom: 0px; flex: none; left: 5px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 9; }",
    ".framer-gonzJ .framer-tkzb57, .framer-gonzJ .framer-8q3ud6 { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); left: 25%; overflow: visible; pointer-events: none; position: fixed; top: -85px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 9; }",
    ".framer-gonzJ .framer-h4e6f0, .framer-gonzJ .framer-p2gzz5 { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 116px; overflow: visible; pointer-events: none; position: fixed; top: -85px; user-select: none; width: 25px; z-index: 9; }",
    ".framer-gonzJ .framer-oo8o2t, .framer-gonzJ .framer-1dpqcqv { -webkit-user-select: none; aspect-ratio: 1.1176470588235294 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); overflow: visible; pointer-events: none; position: fixed; right: 188px; top: -53px; user-select: none; width: 19px; z-index: 9; }",
    ".framer-gonzJ .framer-vdokkq, .framer-gonzJ .framer-2xyf5g { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 45%; overflow: visible; pointer-events: none; position: fixed; top: -76px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 9; }",
    ".framer-gonzJ .framer-1w0ybz8, .framer-gonzJ .framer-uw0od6 { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); overflow: visible; pointer-events: none; position: fixed; right: 475px; top: -51px; user-select: none; width: 13px; z-index: 9; }",
    ".framer-gonzJ .framer-1l3m5ad, .framer-gonzJ .framer-c98e3x { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 86%; overflow: visible; pointer-events: none; position: fixed; top: -51px; transform: translateX(-50%); user-select: none; width: 29px; z-index: 9; }",
    ".framer-gonzJ .framer-q3ae3v, .framer-gonzJ .framer-1k8gcym { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); overflow: visible; pointer-events: none; position: fixed; right: 258px; top: -51px; user-select: none; width: 18px; z-index: 9; }",
    ".framer-gonzJ .framer-1rg92tm, .framer-gonzJ .framer-150ss5z { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 20%; overflow: visible; pointer-events: none; position: fixed; top: -69px; transform: translateX(-50%); user-select: none; width: 18px; z-index: 9; }",
    ".framer-gonzJ .framer-1ac55ix, .framer-gonzJ .framer-1e1g5rx { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); overflow: visible; pointer-events: none; position: fixed; right: 481px; top: -76px; user-select: none; width: 34px; z-index: 9; }",
    ".framer-gonzJ .framer-120krdt { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; opacity: 0.1; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }",
    ".framer-gonzJ .framer-1cginiy { -webkit-user-select: none; bottom: -148px; flex: none; left: 0px; opacity: 0.42; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 20px; user-select: none; z-index: 1; }",
    ".framer-gonzJ .framer-921lyg { -webkit-user-select: none; aspect-ratio: 1.7777777777777777 / 1; bottom: -47px; flex: none; height: var(--framer-aspect-ratio-supported, 675px); left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 7; }",
    ".framer-gonzJ .framer-73ad1d { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); left: 25%; overflow: visible; pointer-events: none; position: absolute; top: -85px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 2; }",
    ".framer-gonzJ .framer-2o7als { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 116px; overflow: visible; pointer-events: none; position: absolute; top: -85px; user-select: none; width: 25px; z-index: 2; }",
    ".framer-gonzJ .framer-3znpmj { -webkit-user-select: none; aspect-ratio: 1.1176470588235294 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); overflow: visible; pointer-events: none; position: absolute; right: 188px; top: -53px; user-select: none; width: 19px; z-index: 2; }",
    ".framer-gonzJ .framer-1uh70ww { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 45%; overflow: visible; pointer-events: none; position: absolute; top: -76px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 2; }",
    ".framer-gonzJ .framer-sp8neh { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); overflow: visible; pointer-events: none; position: absolute; right: 475px; top: -51px; user-select: none; width: 13px; z-index: 2; }",
    ".framer-gonzJ .framer-118vdjf { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 86%; overflow: visible; pointer-events: none; position: absolute; top: -51px; transform: translateX(-50%); user-select: none; width: 29px; z-index: 2; }",
    ".framer-gonzJ .framer-1s6l4iz { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); overflow: visible; pointer-events: none; position: absolute; right: 258px; top: -51px; user-select: none; width: 18px; z-index: 2; }",
    ".framer-gonzJ .framer-z1bit0 { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 20%; overflow: visible; pointer-events: none; position: absolute; top: -51px; transform: translateX(-50%); user-select: none; width: 18px; z-index: 2; }",
    ".framer-gonzJ .framer-tr6h17 { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); overflow: visible; pointer-events: none; position: absolute; right: 481px; top: -76px; user-select: none; width: 34px; z-index: 2; }",
    ".framer-gonzJ .framer-vr5d2p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-bcf5hh { aspect-ratio: 4.419117647058823 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 272px); overflow: visible; position: relative; width: 100%; z-index: 8; }",
    ".framer-gonzJ .framer-1tezp47 { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); left: 25%; overflow: visible; pointer-events: none; position: absolute; top: 37px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 7; }",
    ".framer-gonzJ .framer-nnevxs { -webkit-user-select: none; aspect-ratio: 1.1388888888888888 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 116px; overflow: visible; pointer-events: none; position: absolute; top: 37px; user-select: none; width: 25px; z-index: 7; }",
    ".framer-gonzJ .framer-1j333x0 { -webkit-user-select: none; aspect-ratio: 1.1176470588235294 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); overflow: visible; pointer-events: none; position: absolute; right: 188px; top: 37px; user-select: none; width: 19px; z-index: 7; }",
    ".framer-gonzJ .framer-1chebas { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 45%; overflow: visible; pointer-events: none; position: absolute; top: 37px; transform: translateX(-50%); user-select: none; width: 41px; z-index: 7; }",
    ".framer-gonzJ .framer-1cutezd { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); overflow: visible; pointer-events: none; position: absolute; right: 475px; top: 37px; user-select: none; width: 13px; z-index: 7; }",
    ".framer-gonzJ .framer-3iorgt { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 34px); left: 86%; overflow: visible; pointer-events: none; position: absolute; top: 37px; transform: translateX(-50%); user-select: none; width: 29px; z-index: 7; }",
    ".framer-gonzJ .framer-ciwsbk { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); overflow: visible; pointer-events: none; position: absolute; right: 258px; top: 37px; user-select: none; width: 18px; z-index: 7; }",
    ".framer-gonzJ .framer-1k9ra1w { -webkit-user-select: none; aspect-ratio: 0.86 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 20%; overflow: visible; pointer-events: none; position: absolute; top: 37px; transform: translateX(-50%); user-select: none; width: 18px; z-index: 7; }",
    ".framer-gonzJ .framer-zevn0c { -webkit-user-select: none; aspect-ratio: 1.2142857142857142 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); overflow: visible; pointer-events: none; position: absolute; right: 481px; top: 37px; user-select: none; width: 34px; z-index: 7; }",
    ".framer-gonzJ .framer-2ckrpk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 70px 0px 174px 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-10jugcv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; scroll-margin-top: 233px; width: 100%; }",
    ".framer-gonzJ .framer-1h9llgh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 50px; position: relative; width: 1px; }",
    ".framer-gonzJ .framer-uxwbvx, .framer-gonzJ .framer-1lpnmak { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-16b8kyl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-118i646 { aspect-ratio: 1.7857142857142858 / 1; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; flex: none; height: var(--framer-aspect-ratio-supported, 812px); left: 200px; overflow: hidden; position: fixed; right: 200px; top: 50%; transform: translateY(-50%); will-change: var(--framer-will-change-override, transform); z-index: 10; }",
    ".framer-gonzJ .framer-vrsh8n-container { -webkit-user-select: none; aspect-ratio: 2.068062827225131 / 1; bottom: -20px; flex: none; left: 50%; position: absolute; top: -31px; transform: translateX(-50%); user-select: none; width: var(--framer-aspect-ratio-supported, 1264px); z-index: 1; }",
    ".framer-gonzJ .framer-1w7t02l { flex: none; height: 1px; overflow: hidden; position: relative; width: 45%; }",
    ".framer-gonzJ .framer-1uhzijc { -webkit-user-select: none; aspect-ratio: 1.7751479289940828 / 1; bottom: -2px; flex: none; height: var(--framer-aspect-ratio-supported, 676px); left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 1; }",
    ".framer-gonzJ .framer-1y3rwsq, .framer-gonzJ .framer-1sndhsk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-kogdca, .framer-gonzJ .framer-1x2t1fo { aspect-ratio: 4.419117647058823 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 272px); overflow: visible; position: relative; width: 100%; z-index: 1; }",
    ".framer-gonzJ .framer-1nk3q5w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 40px 0px 0px 0px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-gonzJ .framer-u4v5mn, .framer-gonzJ .framer-1f69c5f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-gonzJ .framer-w7ovhw, .framer-gonzJ .framer-1qby9a4, .framer-gonzJ .framer-98gov0, .framer-gonzJ .framer-yrll2l { aspect-ratio: 1.516061084781464 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 393px); overflow: visible; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-1ikb0wg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 0px 449px 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-141voyk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-wj01cq { flex: none; height: 1px; overflow: hidden; position: relative; width: 40%; }",
    ".framer-gonzJ .framer-52oss6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: center; max-width: 874px; overflow: hidden; padding: 0px 50px 0px 0px; position: relative; width: 1px; }",
    ".framer-gonzJ .framer-163mz6e { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 4px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #f7f5f6; border-bottom-left-radius: 136px; border-bottom-right-radius: 136px; border-top-left-radius: 136px; border-top-right-radius: 136px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 15px 7px 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-gonzJ .framer-xeydfb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-gonzJ .framer-wfdb6i { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-gonzJ .framer-vv02t8 { -webkit-user-select: none; aspect-ratio: 1.8099547511312217 / 1; bottom: -1px; flex: none; height: var(--framer-aspect-ratio-supported, 663px); left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 1; }",
    ".framer-gonzJ .framer-1enzhqg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 374px 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-fwkex2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gonzJ .framer-p818jg, .framer-gonzJ .framer-18wed9n, .framer-gonzJ .framer-12ctwn1, .framer-gonzJ .framer-1xf3oah { aspect-ratio: 1.104796320630749 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: visible; position: relative; text-decoration: none; width: 88px; }",
    ".framer-gonzJ .framer-1k7nkm7 { -webkit-user-select: none; aspect-ratio: 2.079722703639515 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 577px); left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 1; }",
    ".framer-gonzJ .framer-1mf8jh-container { flex: none; height: auto; left: 100px; position: fixed; right: 100px; top: 10px; z-index: 8; }",
    ".framer-gonzJ .framer-150d8vz-container { flex: none; height: auto; left: 10px; position: fixed; right: 10px; top: 5px; z-index: 8; }",
    ".framer-gonzJ .framer-lpd48f { align-content: center; align-items: center; bottom: 30px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: center; overflow: hidden; padding: 0px; position: fixed; right: 30px; width: 128px; z-index: 10; }",
    ".framer-gonzJ .framer-d0e8ag-container { flex: none; height: 28px; position: relative; width: 128px; z-index: 8; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gonzJ.framer-72rtr7, .framer-gonzJ .framer-ojpar0, .framer-gonzJ .framer-1w2ozi7, .framer-gonzJ .framer-i59rb8, .framer-gonzJ .framer-1uzflw5, .framer-gonzJ .framer-vr5d2p, .framer-gonzJ .framer-2ckrpk, .framer-gonzJ .framer-10jugcv, .framer-gonzJ .framer-1h9llgh, .framer-gonzJ .framer-uxwbvx, .framer-gonzJ .framer-16b8kyl, .framer-gonzJ .framer-1y3rwsq, .framer-gonzJ .framer-1nk3q5w, .framer-gonzJ .framer-1fstfmv, .framer-gonzJ .framer-u4v5mn, .framer-gonzJ .framer-1f69c5f, .framer-gonzJ .framer-1ikb0wg, .framer-gonzJ .framer-141voyk, .framer-gonzJ .framer-52oss6, .framer-gonzJ .framer-1lpnmak, .framer-gonzJ .framer-163mz6e, .framer-gonzJ .framer-1sndhsk, .framer-gonzJ .framer-1enzhqg, .framer-gonzJ .framer-fwkex2, .framer-gonzJ .framer-lpd48f { gap: 0px; } .framer-gonzJ.framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-gonzJ.framer-72rtr7 > :first-child, .framer-gonzJ .framer-ojpar0 > :first-child, .framer-gonzJ .framer-1w2ozi7 > :first-child, .framer-gonzJ .framer-i59rb8 > :first-child, .framer-gonzJ .framer-vr5d2p > :first-child, .framer-gonzJ .framer-2ckrpk > :first-child, .framer-gonzJ .framer-1h9llgh > :first-child, .framer-gonzJ .framer-uxwbvx > :first-child, .framer-gonzJ .framer-1y3rwsq > :first-child, .framer-gonzJ .framer-1nk3q5w > :first-child, .framer-gonzJ .framer-u4v5mn > :first-child, .framer-gonzJ .framer-1f69c5f > :first-child, .framer-gonzJ .framer-1ikb0wg > :first-child, .framer-gonzJ .framer-52oss6 > :first-child, .framer-gonzJ .framer-1lpnmak > :first-child, .framer-gonzJ .framer-1sndhsk > :first-child, .framer-gonzJ .framer-1enzhqg > :first-child { margin-top: 0px; } .framer-gonzJ.framer-72rtr7 > :last-child, .framer-gonzJ .framer-ojpar0 > :last-child, .framer-gonzJ .framer-1w2ozi7 > :last-child, .framer-gonzJ .framer-i59rb8 > :last-child, .framer-gonzJ .framer-vr5d2p > :last-child, .framer-gonzJ .framer-2ckrpk > :last-child, .framer-gonzJ .framer-1h9llgh > :last-child, .framer-gonzJ .framer-uxwbvx > :last-child, .framer-gonzJ .framer-1y3rwsq > :last-child, .framer-gonzJ .framer-1nk3q5w > :last-child, .framer-gonzJ .framer-u4v5mn > :last-child, .framer-gonzJ .framer-1f69c5f > :last-child, .framer-gonzJ .framer-1ikb0wg > :last-child, .framer-gonzJ .framer-52oss6 > :last-child, .framer-gonzJ .framer-1lpnmak > :last-child, .framer-gonzJ .framer-1sndhsk > :last-child, .framer-gonzJ .framer-1enzhqg > :last-child { margin-bottom: 0px; } .framer-gonzJ .framer-ojpar0 > *, .framer-gonzJ .framer-vr5d2p > *, .framer-gonzJ .framer-2ckrpk > *, .framer-gonzJ .framer-uxwbvx > *, .framer-gonzJ .framer-1y3rwsq > *, .framer-gonzJ .framer-1ikb0wg > *, .framer-gonzJ .framer-1lpnmak > *, .framer-gonzJ .framer-1sndhsk > *, .framer-gonzJ .framer-1enzhqg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-gonzJ .framer-1w2ozi7 > * { margin: 0px; margin-bottom: calc(34px / 2); margin-top: calc(34px / 2); } .framer-gonzJ .framer-i59rb8 > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-gonzJ .framer-1uzflw5 > *, .framer-gonzJ .framer-10jugcv > *, .framer-gonzJ .framer-16b8kyl > *, .framer-gonzJ .framer-1fstfmv > *, .framer-gonzJ .framer-141voyk > *, .framer-gonzJ .framer-163mz6e > *, .framer-gonzJ .framer-lpd48f > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-gonzJ .framer-1uzflw5 > :first-child, .framer-gonzJ .framer-10jugcv > :first-child, .framer-gonzJ .framer-16b8kyl > :first-child, .framer-gonzJ .framer-1fstfmv > :first-child, .framer-gonzJ .framer-141voyk > :first-child, .framer-gonzJ .framer-163mz6e > :first-child, .framer-gonzJ .framer-fwkex2 > :first-child, .framer-gonzJ .framer-lpd48f > :first-child { margin-left: 0px; } .framer-gonzJ .framer-1uzflw5 > :last-child, .framer-gonzJ .framer-10jugcv > :last-child, .framer-gonzJ .framer-16b8kyl > :last-child, .framer-gonzJ .framer-1fstfmv > :last-child, .framer-gonzJ .framer-141voyk > :last-child, .framer-gonzJ .framer-163mz6e > :last-child, .framer-gonzJ .framer-fwkex2 > :last-child, .framer-gonzJ .framer-lpd48f > :last-child { margin-right: 0px; } .framer-gonzJ .framer-1h9llgh > *, .framer-gonzJ .framer-52oss6 > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-gonzJ .framer-1nk3q5w > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-gonzJ .framer-u4v5mn > *, .framer-gonzJ .framer-1f69c5f > * { margin: 0px; margin-bottom: calc(46px / 2); margin-top: calc(46px / 2); } .framer-gonzJ .framer-fwkex2 > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } }",
    "@media (min-width: 810px) and (max-width: 1199px) { .framer-gonzJ.framer-72rtr7 { width: 810px; } .framer-gonzJ .framer-mnzsxw { height: var(--framer-aspect-ratio-supported, 375px); left: 70px; right: 70px; top: 49%; } .framer-gonzJ .framer-izy82a-container { width: var(--framer-aspect-ratio-supported, 882px); } .framer-gonzJ .framer-921lyg { bottom: 0px; height: var(--framer-aspect-ratio-supported, 456px); } .framer-gonzJ .framer-bcf5hh, .framer-gonzJ .framer-kogdca { height: var(--framer-aspect-ratio-supported, 184px); } .framer-gonzJ .framer-1h9llgh { padding: 0px 0px 0px 20px; } .framer-gonzJ .framer-96pbsz { max-width: 598px; } .framer-gonzJ .framer-y6ppy8-container { flex: 1 0 0px; max-width: 235px; width: 1px; } .framer-gonzJ .framer-118i646 { height: var(--framer-aspect-ratio-supported, 370px); left: 70px; right: 70px; top: 49%; } .framer-gonzJ .framer-1uhzijc { height: var(--framer-aspect-ratio-supported, 456px); } .framer-gonzJ .framer-w7ovhw, .framer-gonzJ .framer-1qby9a4, .framer-gonzJ .framer-yrll2l { height: var(--framer-aspect-ratio-supported, 264px); } .framer-gonzJ .framer-98gov0 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 264px); justify-content: center; padding: 0px; } .framer-gonzJ .framer-1ikb0wg { padding: 57px 0px 260px 0px; } .framer-gonzJ .framer-vv02t8 { height: var(--framer-aspect-ratio-supported, 448px); } .framer-gonzJ .framer-1x2t1fo { height: var(--framer-aspect-ratio-supported, 183px); } .framer-gonzJ .framer-1enzhqg { height: 385px; padding: 0px 0px 200px 0px; } .framer-gonzJ .framer-1k7nkm7 { height: var(--framer-aspect-ratio-supported, 390px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gonzJ .framer-98gov0 { gap: 0px; } .framer-gonzJ .framer-98gov0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-gonzJ .framer-98gov0 > :first-child { margin-left: 0px; } .framer-gonzJ .framer-98gov0 > :last-child { margin-right: 0px; } }}",
    "@media (max-width: 809px) { .framer-gonzJ.framer-72rtr7 { width: 390px; } .framer-gonzJ .framer-1uzflw5 { flex-direction: column; } .framer-gonzJ .framer-mnzsxw { aspect-ratio: 1.7863777089783281 / 1; height: var(--framer-aspect-ratio-supported, 323px); left: -93px; right: -94px; top: 50%; } .framer-gonzJ .framer-13bb91q-container { bottom: 23px; right: 21px; } .framer-gonzJ .framer-izy82a-container { bottom: -52px; left: 50%; top: -53px; width: var(--framer-aspect-ratio-supported, 885px); } .framer-gonzJ .framer-921lyg { bottom: 0px; height: var(--framer-aspect-ratio-supported, 220px); } .framer-gonzJ .framer-bcf5hh { height: var(--framer-aspect-ratio-supported, 89px); } .framer-gonzJ .framer-1tezp47 { left: 25%; top: 9px; } .framer-gonzJ .framer-nnevxs, .framer-gonzJ .framer-1j333x0, .framer-gonzJ .framer-1cutezd, .framer-gonzJ .framer-ciwsbk, .framer-gonzJ .framer-zevn0c { top: 9px; } .framer-gonzJ .framer-1chebas { left: 45%; top: 9px; } .framer-gonzJ .framer-3iorgt { left: 86%; top: 9px; } .framer-gonzJ .framer-1k9ra1w { left: 21%; top: 9px; } .framer-gonzJ .framer-2ckrpk { padding: 80px 0px 100px 0px; } .framer-gonzJ .framer-1h9llgh { gap: 16px; padding: 0px 20px 0px 10px; } .framer-gonzJ .framer-uxwbvx { order: 0; } .framer-gonzJ .framer-96pbsz { max-width: 388px; } .framer-gonzJ .framer-16b8kyl { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 1; } .framer-gonzJ .framer-1p6n3su-container { width: 234px; } .framer-gonzJ .framer-y6ppy8-container { width: 215px; } .framer-gonzJ .framer-1w7t02l, .framer-gonzJ .framer-wj01cq { width: 0%; } .framer-gonzJ .framer-1uhzijc { height: var(--framer-aspect-ratio-supported, 243px); left: -20px; right: -20px; } .framer-gonzJ .framer-kogdca, .framer-gonzJ .framer-1x2t1fo { height: var(--framer-aspect-ratio-supported, 88px); } .framer-gonzJ .framer-1nk3q5w { padding: 50px 0px 0px 0px; } .framer-gonzJ .framer-1fstfmv { flex-direction: column; gap: 0px; } .framer-gonzJ .framer-u4v5mn, .framer-gonzJ .framer-1f69c5f, .framer-gonzJ .framer-wfdb6i { flex: none; width: 100%; } .framer-gonzJ .framer-w7ovhw, .framer-gonzJ .framer-1qby9a4, .framer-gonzJ .framer-98gov0 { height: var(--framer-aspect-ratio-supported, 257px); } .framer-gonzJ .framer-yrll2l { height: var(--framer-aspect-ratio-supported, 258px); } .framer-gonzJ .framer-1ikb0wg { padding: 50px 0px 208px 0px; } .framer-gonzJ .framer-52oss6 { flex-direction: row; gap: 16px; padding: 0px 20px 0px 0px; } .framer-gonzJ .framer-1lpnmak { flex: 1 0 0px; order: 1; width: 1px; } .framer-gonzJ .framer-163mz6e { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex-direction: column; gap: 8px; order: 0; width: 36%; } .framer-gonzJ .framer-vv02t8 { aspect-ratio: 1.797752808988764 / 1; bottom: -1px; height: var(--framer-aspect-ratio-supported, 223px); left: -5px; right: -5px; } .framer-gonzJ .framer-1enzhqg { height: 187px; padding: 0px 0px 100px 0px; } .framer-gonzJ .framer-fwkex2 { gap: 13px; } .framer-gonzJ .framer-p818jg, .framer-gonzJ .framer-18wed9n, .framer-gonzJ .framer-12ctwn1, .framer-gonzJ .framer-1xf3oah { height: var(--framer-aspect-ratio-supported, 33px); width: 36px; } .framer-gonzJ .framer-1k7nkm7 { aspect-ratio: 1.7668161434977578 / 1; height: var(--framer-aspect-ratio-supported, 221px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gonzJ .framer-1uzflw5, .framer-gonzJ .framer-1h9llgh, .framer-gonzJ .framer-16b8kyl, .framer-gonzJ .framer-1fstfmv, .framer-gonzJ .framer-52oss6, .framer-gonzJ .framer-163mz6e, .framer-gonzJ .framer-fwkex2 { gap: 0px; } .framer-gonzJ .framer-1uzflw5 > *, .framer-gonzJ .framer-16b8kyl > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-gonzJ .framer-1uzflw5 > :first-child, .framer-gonzJ .framer-1h9llgh > :first-child, .framer-gonzJ .framer-16b8kyl > :first-child, .framer-gonzJ .framer-1fstfmv > :first-child, .framer-gonzJ .framer-163mz6e > :first-child { margin-top: 0px; } .framer-gonzJ .framer-1uzflw5 > :last-child, .framer-gonzJ .framer-1h9llgh > :last-child, .framer-gonzJ .framer-16b8kyl > :last-child, .framer-gonzJ .framer-1fstfmv > :last-child, .framer-gonzJ .framer-163mz6e > :last-child { margin-bottom: 0px; } .framer-gonzJ .framer-1h9llgh > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-gonzJ .framer-1fstfmv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-gonzJ .framer-52oss6 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-gonzJ .framer-52oss6 > :first-child, .framer-gonzJ .framer-fwkex2 > :first-child { margin-left: 0px; } .framer-gonzJ .framer-52oss6 > :last-child, .framer-gonzJ .framer-fwkex2 > :last-child { margin-right: 0px; } .framer-gonzJ .framer-163mz6e > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-gonzJ .framer-fwkex2 > * { margin: 0px; margin-left: calc(13px / 2); margin-right: calc(13px / 2); } }}",
    '.framer-gonzJ[data-border="true"]::after, .framer-gonzJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  jr = D(xn, vn, "framer-gonzJ"),
  Rl = jr;
jr.displayName = "Home";
jr.defaultProps = { height: 4810.5, width: 1200 };
ee(
  jr,
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
          family: "Kaushan Script",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kaushanscript/v18/vm8vdRfvXFLG3OLnsO15WYS5DF76ytN3M48a.woff2",
          weight: "400",
        },
        {
          family: "Kavoon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/kavoon/v23/pxiFyp4_scRYhlU4Mbr6f1pdEQ.woff2",
          weight: "400",
        },
      ],
    },
    ...jo,
    ...Eo,
    ...Do,
    ...Yo,
    ...Jo,
    ...Oo,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Pl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"mpnuVRSSM":{"layout":["fixed","auto"]},"AuBmYiANK":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "4810.5",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Pl as __FramerMetadata__, Rl as default };
//# sourceMappingURL=D4MuYWEKGO7vfu35Tg4zwwPjnY6HW-HSxFVkhp8l7f0.MUALI27S.mjs.map
