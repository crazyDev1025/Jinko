"use strict";
(self.webpackChunkpancake_frontend =
  self.webpackChunkpancake_frontend || []).push([
  [151],
  {
    22151: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return me;
          },
          speedChoice: function () {
            return K;
          },
        });
      var a,
        i,
        l,
        r = n(74165),
        s = n(15861),
        o = n(29439),
        c = n(30168),
        d = n(72791),
        x = n(42865),
        p = n(40599),
        m = n(52908),
        g = n(61681),
        h = n(93539),
        u = n(4349),
        f = n(50888),
        v = n(75707),
        j = n(82081),
        y = n(97625),
        w = n.n(y),
        b = n(44313),
        C = n(15699),
        S = ["title", "titleId"];
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      function k(e, t) {
        if (null == e) return {};
        var n,
          a,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function F(e, t) {
        var n = e.title,
          r = e.titleId,
          s = k(e, S);
        return d.createElement(
          "svg",
          W(
            {
              width: 850,
              height: 842,
              viewBox: "0 0 784 842",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            s
          ),
          n ? d.createElement("title", { id: r }, n) : null,
          a ||
            (a = d.createElement("path", {
              id: "circle-path",
              d: "M 433.8 798 A 380 380 90 0 0 813.8 418 A 380 380 90 1 0 433.8 798 Z",
              stroke: "#E5FF00",
              strokeWidth: 5,
            })),
          i ||
            (i = d.createElement("path", {
              id: "circle-path-sec",
              d: "M 383.8 823 A 380 380 90 0 0 763.8 443 A 380 380 90 1 0 383.8 823 Z",
              stroke: "#E5FF00",
              strokeWidth: 1,
            })),
          l ||
            (l = d.createElement(
              "defs",
              null,
              d.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_47_133",
                  x1: 363,
                  y1: 0,
                  x2: 363,
                  y2: 842,
                  gradientUnits: "userSpaceOnUse",
                },
                d.createElement("stop", { stopColor: "#A9DDFF" }),
                d.createElement("stop", { offset: 0.5, stopColor: "#DB8FFF" }),
                d.createElement("stop", { offset: 1, stopColor: "#6B78F1" })
              )
            ))
        );
      }
      var Z = d.forwardRef(F);
      n.p;
      var M,
        N,
        z,
        A,
        I,
        Y,
        T,
        R,
        q,
        D,
        P,
        B,
        E,
        L,
        O,
        H,
        U,
        J = function (e, t) {
          var n = t.threshold,
            a = void 0 === n ? 0 : n,
            i = t.root,
            l = void 0 === i ? null : i,
            r = t.rootMargin,
            s = void 0 === r ? "0%" : r,
            c = t.freezeOnceVisible,
            x = void 0 !== c && c,
            p = (0, d.useState)(),
            m = (0, o.Z)(p, 2),
            g = m[0],
            h = m[1],
            u = (null === g || void 0 === g ? void 0 : g.isIntersecting) && x,
            f = function (e) {
              var t = (0, o.Z)(e, 1)[0];
              h(t);
            };
          return (
            (0, d.useEffect)(
              function () {
                var t = null === e || void 0 === e ? void 0 : e.current;
                if (!!!window.IntersectionObserver || u || !t) return null;
                var n = new IntersectionObserver(f, {
                  threshold: a,
                  root: l,
                  rootMargin: s,
                });
                return (
                  n.observe(t),
                  function () {
                    return n.disconnect();
                  }
                );
              },
              [
                null === e || void 0 === e ? void 0 : e.current,
                JSON.stringify(a),
                l,
                s,
                u,
              ]
            ),
            g
          );
        },
        _ = n(13523),
        G = [
          { id: 1, path: "/images/landing/brand/amazon.png", alt: "amazon" },
          { id: 2, path: "/images/landing/brand/calvin-klein.png", alt: "ck" },
          { id: 3, path: "/images/landing/brand/chanel.png", alt: "chanel" },
          { id: 4, path: "/images/landing/brand/ikea.png", alt: "ikea" },
          { id: 5, path: "/images/landing/brand/puma.png", alt: "puma" },
          { id: 6, path: "/images/landing/brand/dior.png", alt: "dior" },
          { id: 7, path: "/images/landing/brand/kfc.png", alt: "kfc" },
          {
            id: 8,
            path: "/images/landing/brand/valentino.png",
            alt: "valentino",
          },
          { id: 9, path: "/images/landing/brand/balmain.png", alt: "balmain" },
          { id: 10, path: "/images/landing/brand/samsung.png", alt: "samsung" },
          { id: 11, path: "/images/landing/brand/porsche.png", alt: "porsche" },
          { id: 12, path: "/images/landing/brand/hera.png", alt: "hera" },
          { id: 13, path: "/images/landing/brand/lenovo.png", alt: "lenovo" },
          { id: 14, path: "/images/landing/brand/nike.png", alt: "nike" },
          {
            id: 15,
            path: "/images/landing/brand/cosmopolitan.png",
            alt: "cosmopolitan",
          },
        ],
        V = n(80184),
        K = (function (e) {
          return (e.SLOW = "slow"), (e.MEDIUM = "medium"), (e.FAST = "fast"), e;
        })({}),
        X =
          (b.ZP.div(
            M ||
              (M = (0, c.Z)([
                "\n  // display: flex;\n  // margin-bottom: 800px;\n  // justify-content: center;\n  // flex-direction: column;\n  // align-items: center;\n  width: 100vw;\n  height: 100vh;\n  // position: absolute;\n  top: 0;\n",
              ]))
          ),
          b.ZP.div(
            N ||
              (N = (0, c.Z)([
                "\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  background-repeat: no-repeat !important;\n  background-size: 100% 100% !important;\n",
              ]))
          )),
        $ = b.ZP.div(
          z ||
            (z = (0, c.Z)([
              "\n  overflow: hidden;\n  will-change: transform;\n",
            ]))
        ),
        Q = (0, b.ZP)($)(
          A ||
            (A = (0, c.Z)([
              "\n  top: -5vh;\n\n  @media only screen and (max-width: 800px) {\n    top: 1vh;\n    right: 8vh;\n  }\n",
            ]))
        ),
        ee = (0, b.ZP)(v.kCb)(
          I ||
            (I = (0, c.Z)([
              "\n  // background: radial-gradient(50% 1229.25% at 50% 50%, rgba(245, 249, 255, 0.6) 0%, rgba(245, 249, 255, 0.6) 100%);\n  // box-shadow: 0px 4px 30px rgba(255, 255, 255, 0.6), 0px 30px 80px #CCD7FE;\n  // border-radius: 30px;\n\n  border-image-source: url(/images/landing/content-frame-t.svg);\n  border-image-width: 20px;\n  border-image-outset: 6px;\n  border-image-slice: 27;\n",
            ]))
        ),
        te = b.ZP.a(
          Y || (Y = (0, c.Z)(["\n  max-width: 60px;\n  // cursor: pointer;\n"]))
        ),
        ne = b.ZP.span(
          T || (T = (0, c.Z)(["\n  color: var(--textYellow);\n"]))
        ),
        ae = b.ZP.div(
          R ||
            (R = (0, c.Z)([
              "\n  display: grid;\n  padding: 0 max(20px, 6vw);\n  width: 100vw;\n  height: 100vh;\n  grid-column-gap: 0;\n  grid-row-gap: 0;\n  grid-template-columns: repeat(3,1fr);\n  grid-template-rows: repeat(3,1fr);\n",
            ]))
        ),
        ie = b.ZP.div(
          q ||
            (q = (0, c.Z)([
              "\n  display: grid;\n  padding: 0 max(20px, 2vw);\n  width: 100vw;\n  height: 100vh;\n  grid-column-gap: 0;\n  grid-row-gap: 0;\n  grid-template-columns: repeat(3,1fr);\n  grid-template-rows: repeat(3,1fr);\n  position: absolute;\n",
            ]))
        ),
        le = (0, b.ZP)(v.kCb)(
          D ||
            (D = (0, c.Z)([
              "\n  border: 1.2px solid;\n  border-image-source: linear-gradient(180deg, #FF9B3D 0%, #FF9E3E 0.01%, #FFCD4D 100%);\n  border-image-outset: 0px;\n  border-image-slice: 27;\n  padding: 8px;\n",
            ]))
        ),
        re = (0, b.ZP)(v.kCb)(
          P ||
            (P = (0, c.Z)([
              "\n  flex: 0 0 auto;\n  @media only screen and (max-width: 800px) {\n    flex: 1 0 auto;\n  }\n",
            ]))
        ),
        se = (0, b.ZP)(v.kCb)(
          B ||
            (B = (0, c.Z)([
              "\n  row-gap: 1rem;\n\n  @media only screen and (max-width: 800px) {\n    flex-wrap: wrap;\n  }\n",
            ]))
        ),
        oe = (0, b.ZP)(v.kCb)(
          E ||
            (E = (0, c.Z)([
              "\n  @media only screen and (max-width: 1000px) {\n    flex-wrap: wrap;\n  }\n",
            ]))
        ),
        ce = b.ZP.div(
          L ||
            (L = (0, c.Z)([
              "\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 15.65% 0;\n  overflow: hidden;\n  width: 100%;\n  // height: 100%;\n  max-width: 550px;\n\n  > iframe {\n    position: absolute;\n    // top: 0;\n    // left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  @media only screen and (max-width: 800px) {\n    // padding: 36.65% 0;\n    padding: 20.65% 0;\n  }\n\n  @media only screen and (max-width: 576px) {\n    padding: 26.65% 0;\n  }\n\n  @media only screen and (max-width: 415px) {\n    padding: 36.65% 0;\n  }\n",
            ]))
        ),
        de = (0, b.ZP)(v.kCb)(
          O ||
            (O = (0, c.Z)([
              "\n  gap: ",
              ";\n\n  @media only screen and (max-width: 684px) {\n    gap: ",
              ";\n  }\n",
            ])),
          function (e) {
            return void 0 === e.gutter ? "1rem 4rem" : "1rem ".concat(e.gutter);
          },
          function (e) {
            return void 0 === e.gutter
              ? "clamp(1rem, 3vh, 4rem)"
              : "clamp(1rem, 3vh, ".concat(e.gutter, ")");
          }
        ),
        xe = (0, b.ZP)(v.kCb)(
          H ||
            (H = (0, c.Z)([
              "\n  flex-direction: column;\n  gap: 10px;\n  flex: ",
              ";\n  justify-content: center;\n  align-items: center;\n  max-width: ",
              ";\n\n  @media only screen and (max-width: 684px) {\n    flex: ",
              "\n  }\n",
            ])),
          function (e) {
            return void 0 === e.maxPerRow && void 0 === e.gutter
              ? "1 1 calc(100% / 3 - 4rem)"
              : "1 1 calc(100% / "
                  .concat(e.maxPerRow, " - ")
                  .concat(e.gutter, ")");
          },
          function (e) {
            return void 0 === e.maxPerRow
              ? "calc(100% / 3)"
              : "calc(100% / ".concat(e.maxPerRow, ")");
          },
          function (e) {
            return void 0 === e.maxPerRow && void 0 === e.gutter
              ? "1 1 calc(100% / 3 - clamp(1rem, 3vh, 4rem))"
              : "1 1 calc(100% / "
                  .concat(e.maxPerRow, " - clamp(1rem, 3vh, ")
                  .concat(e.gutter, "))");
          }
        ),
        pe = (0, b.ZP)(v.kCb)(
          U ||
            (U = (0, c.Z)([
              "\n  flex: 1 1 calc(100% / 4 - 3rem);\n  justify-content: center;\n  // max-width: calc(100% / 4);\n\n  @media only screen and (max-width: 684px) {\n    flex: 1 1 calc(100% / 4)\n  }\n",
            ]))
        ),
        me = function () {
          g.i.config({ ignoreMobileResize: !0 });
          (0, d.useRef)(null);
          var e = (0, j.$G)().currentLanguage,
            t = (0, h.Z)(),
            n = (0, d.useRef)(!1),
            a = (0, d.useState)(!1),
            i = (0, o.Z)(a, 2),
            l = i[0],
            c = i[1],
            y = (0, d.useState)(!0),
            b = (0, o.Z)(y, 2),
            S = b[0],
            W = b[1],
            k = (0, d.useMemo)(function () {
              return { twitter: "", discord: "", instagram: "", telegram: "" };
            }, []),
            F = (0, d.useState)(k),
            M = (0, o.Z)(F, 2),
            N = M[0],
            z = M[1],
            A = (0, _.o)().onSocialLinks,
            I = [
              {
                id: 1,
                name: "Bermuda",
                origin: t.formatMessage({
                  id: "label-us",
                  defaultMessage: "US",
                }),
                path: "/images/landing/influencer/icon-bermudaisbae.png",
                alt: "bermudaisbae",
                ig: "https://www.instagram.com/bermudaisbae/",
              },
              {
                id: 2,
                name: "Lil Miquela",
                origin: t.formatMessage({
                  id: "label-us",
                  defaultMessage: "US",
                }),
                path: "/images/landing/influencer/icon-lilmiquela.png",
                alt: "lilmiquela",
                ig: "https://www.instagram.com/lilmiquela/",
              },
              {
                id: 3,
                name: "Imma",
                origin: t.formatMessage({
                  id: "label-jp",
                  defaultMessage: "Japan",
                }),
                path: "/images/landing/influencer/icon-immajapan.png",
                alt: "imma",
                ig: "https://www.instagram.com/imma.gram/",
              },
              {
                id: 4,
                name: "Shudu",
                origin: t.formatMessage({
                  id: "label-za",
                  defaultMessage: "South Africa",
                }),
                path: "/images/landing/influencer/icon-shudu.png",
                alt: "shudu",
                ig: "https://www.instagram.com/shudu.gram/",
              },
              {
                id: 5,
                name: "Rozy",
                origin: t.formatMessage({
                  id: "label-ko",
                  defaultMessage: "South Korea",
                }),
                path: "/images/landing/influencer/icon-rozy.png",
                alt: "rozy",
                ig: "https://www.instagram.com/rozy.gram/",
              },
            ],
            Y = (0, d.useRef)(null),
            T = J(Y, {}),
            R = !!T && !!T.isIntersecting,
            q = p.p8.matchMedia(),
            D = (0, d.useRef)(q),
            P = (0, d.useCallback)(function () {
              var e = document.querySelector(".scroller"),
                t = x.Z.init(e, {
                  damping: 0.1,
                  delegateTo: document,
                  alwaysShowTracks: !0,
                });
              g.i.scrollerProxy(".scroller", {
                scrollTop: function (e) {
                  return arguments.length && (t.scrollTop = e), t.scrollTop;
                },
              }),
                t.addListener(g.i.update),
                g.i.defaults({ scroller: e });
            }, []),
            B = (0, d.useCallback)(function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                a =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : null,
                l = document.querySelector(e);
              return w().loadAnimation({
                container: l,
                renderer: "svg",
                loop: n,
                autoplay: a,
                path: t,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                initialSegment: i,
              });
            }, []),
            E = (0, d.useCallback)(function (e) {
              var t = { frame: 0 },
                n = p.p8.utils.toArray(e.target)[0],
                a = w().loadAnimation({
                  container: n,
                  renderer: e.renderer || "svg",
                  loop: !1,
                  autoplay: !1,
                  path: e.path,
                  rendererSettings: e.rendererSettings || {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                });
              return (
                a.addEventListener("DOMLoaded", function () {
                  var i = function () {
                    return (
                      p.p8.timeline().to(t, {
                        duration: e.duration,
                        frame: a.totalFrames - 1,
                        ease: "none",
                        onUpdate: function () {
                          return a.goToAndStop(t.frame, !0);
                        },
                        scrollTrigger: {
                          trigger: n,
                          pin: !0,
                          start: "top top",
                          end: "+=5000",
                          scrub: 2,
                          markers: !1,
                        },
                      }),
                      function () {
                        return a.destroy && a.destroy();
                      }
                    );
                  };
                  D.current && D.current.add
                    ? D.current
                        .add("(min-width: 801px)", function () {
                          i();
                        })
                        .add("(max-width: 800px)", function () {
                          p.p8.timeline().to(t, {
                            duration: e.duration,
                            frame: a.totalFrames - 1,
                            ease: "none",
                            onUpdate: function () {
                              return a.goToAndStop(t.frame, !0);
                            },
                            scrollTrigger: {
                              trigger: n,
                              pin: !0,
                              start: "top top",
                              end: "+=500",
                              scrub: 2,
                              markers: !1,
                            },
                          });
                        })
                    : i(),
                    g.i.sort(),
                    g.i.refresh();
                }),
                a
              );
            }, []),
            L = (0, d.useCallback)(function () {
              p.p8.set(".bg-change", {
                zIndex: function (e, t, n) {
                  return n.length - e;
                },
              });
              var e = p.p8.utils.toArray(".bg-change").slice(0, -1),
                t = p.p8
                  .timeline({ defaults: { ease: "none", stagger: 1 } })
                  .to(e, { autoAlpha: 0, duration: 0.5 }, 1)
                  .to({}, { duration: 0.5 });
              g.i.create({
                trigger: ".section-1",
                start: "top top",
                end: "+=5000",
                animation: t,
                scrub: !0,
                scroller: ".scroller",
                markers: !1,
                pin: !0,
              });
            }, []),
            O = (0, d.useCallback)(function (e) {
              var t = p.p8.timeline();
              t.from(".content-p", {
                y: 270,
                ease: "power4.out",
                delay: 0.5,
                duration: 1.2,
                stagger: { amount: 0.4 },
              }).from(
                ".sec1-content-line",
                {
                  x: -270,
                  ease: "power4.out",
                  delay: 0,
                  duration: 1.2,
                  stagger: { amount: 0.4 },
                },
                1
              );
              var n = document.querySelector("#circle-path"),
                a = n.getTotalLength(),
                i =
                  (p.p8
                    .timeline({
                      defaults: { ease: "none", stagger: 1 },
                      scrollTrigger: {
                        trigger: ".content-p",
                        start: "top top",
                        end: "+=4800",
                        scrub: 1,
                        markers: !1,
                        onUpdate: function (e) {
                          e.progress > 0 && t.isActive() && t.progress(1);
                        },
                        onRefresh: function (e) {
                          e.scroll(0);
                        },
                      },
                    })
                    .call(function () {
                      t.play();
                    })
                    .fromTo(
                      ".content-p",
                      { y: 0 },
                      {
                        immediateRender: !1,
                        y: 270,
                        ease: "power4.out",
                        duration: 2,
                      },
                      2
                    )
                    .fromTo(
                      ".sec1-content-line",
                      { x: 0 },
                      {
                        immediateRender: !1,
                        x: -270,
                        ease: "power4.out",
                        duration: 2,
                      },
                      2
                    )
                    .from(
                      ".sec2-content",
                      {
                        y: 270,
                        ease: "power4.out",
                        duration: 1.2,
                        stagger: { amount: 0.4 },
                      },
                      ">7"
                    )
                    .fromTo(
                      ".sec2-content",
                      { y: 0 },
                      {
                        immediateRender: !1,
                        y: 270,
                        ease: "power4.out",
                        duration: 2,
                        delay: 0,
                      },
                      ">3"
                    )
                    .fromTo(
                      "#sec2-button-wrapper",
                      { visibility: "hidden" },
                      { visibility: "inherit" },
                      6
                    )
                    .fromTo(
                      ".sec2-content-box",
                      { autoAlpha: 0 },
                      { autoAlpha: 1, delay: 2, duration: 1.2 },
                      7
                    )
                    .to(
                      ".sec2-content-box",
                      { autoAlpha: 0, duration: 1.2 },
                      ">5"
                    )
                    .from(
                      ".sec3-content",
                      {
                        y: 270,
                        ease: "power4.out",
                        duration: 1.2,
                        stagger: { amount: 0.4 },
                      },
                      ">4"
                    )
                    .to(
                      ".sec3-content",
                      { y: 270, ease: "power4.in", duration: 2, delay: 0 },
                      ">4"
                    )
                    .fromTo(
                      ".sec3-content-box",
                      { autoAlpha: 0 },
                      { autoAlpha: 1, delay: 2, duration: 1.2 },
                      17
                    )
                    .to(
                      ".sec3-content-box",
                      { autoAlpha: 0, duration: 1.2 },
                      ">11"
                    )
                    .fromTo(
                      "#sec3-button-wrapper",
                      { visibility: "hidden" },
                      { visibility: "inherit" },
                      16
                    )
                    .fromTo(
                      ".sec345-content-L-lottie",
                      { x: -750, y: 500 },
                      {
                        x: "0vw",
                        y: "0vh",
                        ease: "power4.out",
                        duration: 2,
                        delay: 3,
                      },
                      16
                    )
                    .fromTo(
                      ".sec3-content-line",
                      { x: -270 },
                      { x: 0, ease: "power4.out", duration: 2, delay: 3 },
                      17
                    )
                    .to(
                      ".sec3-content-line",
                      { x: -270, ease: "power4.in", duration: 2 },
                      ">5"
                    )
                    .from(
                      ".sec4-content",
                      {
                        y: 270,
                        ease: "power4.out",
                        duration: 1.2,
                        stagger: { amount: 0.4 },
                        delay: 1,
                      },
                      35
                    )
                    .to(
                      ".sec4-content",
                      { y: 270, ease: "power4.in", duration: 2, delay: 1 },
                      ">3"
                    )
                    .fromTo(
                      ".sec4-content-box",
                      { autoAlpha: 0 },
                      { autoAlpha: 1, delay: 0, duration: 1.2 },
                      35
                    )
                    .to(
                      ".sec4-content-box",
                      { autoAlpha: 0, duration: 1.2 },
                      ">12"
                    )
                    .from(
                      ".sec5-content",
                      {
                        y: 270,
                        ease: "power4.out",
                        duration: 1.2,
                        stagger: { amount: 0.4 },
                        delay: 3,
                      },
                      49
                    )
                    .to(
                      ".sec5-content",
                      { y: 270, ease: "power4.in", duration: 2, delay: 2 },
                      ">4"
                    )
                    .fromTo(
                      "#sec5-button-wrapper",
                      { visibility: "hidden" },
                      { visibility: "inherit" },
                      48
                    )
                    .fromTo(
                      ".sec5-content-box",
                      { autoAlpha: 0 },
                      { autoAlpha: 1, delay: 2, duration: 1.2 },
                      49
                    )
                    .to(
                      ".sec5-content-box",
                      { autoAlpha: 0, duration: 1.2 },
                      ">10"
                    )
                    .add("sec345-lottie-out", ">")
                    .to(
                      ".sec345-content-L-lottie",
                      {
                        x: -750,
                        y: 500,
                        ease: "power4.in",
                        duration: 2,
                        delay: 2,
                      },
                      "sec345-lottie-out"
                    )
                    .from(
                      ".sec6-content",
                      {
                        y: 270,
                        ease: "power4.out",
                        duration: 1.2,
                        stagger: { amount: 0.4 },
                      },
                      66
                    )
                    .fromTo(
                      "#sec6-button-wrapper",
                      { visibility: "hidden" },
                      { visibility: "inherit" },
                      64
                    )
                    .fromTo(
                      ".sec6-content-box",
                      { autoAlpha: 0 },
                      { autoAlpha: 1, delay: 0, duration: 1.2 },
                      65
                    )
                    .to({}, { duration: 0.5 })
                    .fromTo(
                      ".sec6-content-line",
                      { x: -270 },
                      { x: 0, ease: "power4.out", duration: 2, delay: 3 },
                      64
                    )
                    .to(
                      "#glow-light",
                      e
                        ? {
                            scaleX: 0.3,
                            scaleY: 0.5,
                            duration: 1,
                            ease: "power1.out",
                          }
                        : {
                            scaleX: 0.3,
                            scaleY: 0.5,
                            duration: 10,
                            ease: "power1.out",
                          },
                      e ? 0 : 2
                    )
                    .to(
                      "#glow-light",
                      e
                        ? { top: "25vh", duration: 2, delay: 1 }
                        : { top: "25vh", duration: 5, delay: 1 },
                      e ? 1 : 2
                    )
                    .to("#glow-light", { opacity: 0.8, duration: 2 }, e ? 1 : 3)
                    .to(
                      "#glow-light",
                      e ? { opacity: 0, duration: 1 } : {},
                      e ? ">3" : null
                    )
                    .set(
                      "#char-mobile",
                      e
                        ? { autoAlpha: 1, immediateRender: !0 }
                        : { autoAlpha: 0, immediateRender: !0 },
                      0
                    )
                    .to(
                      "#char-mobile",
                      e ? { autoAlpha: 0, duration: 1 } : {},
                      e ? ">3" : null
                    )
                    .set(
                      "#char-lottie",
                      e
                        ? { autoAlpha: 0, immediateRender: !0 }
                        : { autoAlpha: 1, immediateRender: !0 }
                    ),
                  document.querySelector("#circle-path-sec")),
                l = i.getTotalLength();
              p.p8
                .timeline({
                  defaults: { ease: "none", stagger: 1 },
                  scrollTrigger: {
                    trigger: "#ellipse-svg",
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                  },
                })
                .fromTo(
                  [n, i],
                  { autoAlpha: 0 },
                  { autoAlpha: 1, stagger: 0.1, ease: "Power4.easeInOut" },
                  0
                )
                .set(n, { strokeDasharray: a }, 0)
                .set(i, { strokeDasharray: l }, 0)
                .fromTo(
                  n,
                  { strokeDashoffset: a },
                  {
                    strokeDashoffset: 0,
                    ease: m.bJ.easeNone,
                    duration: 2,
                    delay: 1,
                  },
                  2
                )
                .fromTo(
                  i,
                  { strokeDashoffset: l },
                  {
                    strokeDashoffset: 0,
                    ease: m.bJ.easeNone,
                    duration: 2,
                    delay: 0,
                  },
                  2
                ),
                p.p8.timeline({
                  defaults: { ease: "none", stagger: 1 },
                  scrollTrigger: {
                    trigger: "#glow-light",
                    start: "top top",
                    end: "+=4650",
                    scrub: 1,
                    pin: !0,
                  },
                }),
                p.p8.timeline({
                  defaults: { ease: "none", stagger: 1 },
                  scrollTrigger: {
                    trigger: "#char-mobile",
                    start: "top top",
                    end: "+=1100",
                    pin: !0,
                    scrub: 1,
                  },
                });
            }, []),
            H = (0, d.useRef)(null),
            U = (0, d.useCallback)(function (e) {
              H.current && H.current.disconnect();
              (H.current = new IntersectionObserver(
                function (t, n) {
                  !0 === t[0].isIntersecting
                    ? (e.goToAndPlay(0),
                      e.addEventListener("complete", function () {
                        e.playSegments([58, 180]);
                      }))
                    : (e.goToAndStop(0), e.resetSegments(!0));
                },
                { root: null, rootMargin: "0px", threshold: 0.5 }
              )),
                H.current.observe(document.querySelector("#side-data-lottie"));
            }, []),
            me = (0, d.useState)(Date.now()),
            ge = (0, o.Z)(me, 2),
            he = (ge[0], ge[1]),
            ue = (0, d.useRef)(null),
            fe = (0, d.useRef)(null),
            ve = (0, d.useRef)(null);
          (0, d.useEffect)(
            function () {
              he(1);
            },
            [e.code]
          ),
            (0, d.useLayoutEffect)(
              function () {
                ve.current && (ve.current.destroy(), (ve.current = null)),
                  ve.current ||
                    (ve.current = B(
                      "#loading-lottie",
                      "/lotties/loading-icon.json",
                      !0
                    )),
                  D.current
                    .add("(min-width: 801px)", function () {
                      c(!1),
                        P(),
                        L(),
                        ue.current &&
                          (ue.current.destroy(), (ue.current = null)),
                        fe.current &&
                          (fe.current.destroy(), (fe.current = null)),
                        ue.current ||
                          ((n.current = !0),
                          (ue.current = E({
                            target: "#char-lottie",
                            path: "/lotties/char-animation-v3.json",
                            speed: K.MEDIUM,
                            duration: 2,
                            renderer: "canvas",
                            rendererSettings: {},
                          })),
                          ue.current.addEventListener("DOMLoaded", function () {
                            he(0);
                          }),
                          B(
                            "#scroll-down-lottie",
                            "/lotties/scroll-down-animation.json",
                            !0
                          )),
                        fe.current ||
                          ((fe.current = B(
                            "#side-data-lottie",
                            "/lotties/side-data.json",
                            !1,
                            !1
                          )),
                          U(fe.current)),
                        O(!1);
                    })
                    .add("(max-width: 800px)", function () {
                      c(!0),
                        P(),
                        L(),
                        B(
                          "#scroll-down-lottie",
                          "/lotties/scroll-down-animation.json",
                          !0
                        ),
                        O(!0);
                    });
                var e = null;
                return (
                  D.current && (e = D.current),
                  function () {
                    e && e.revert();
                  }
                );
              },
              [P, E, L, O, B, U]
            ),
            (0, d.useEffect)(function () {
              var e = function () {
                W(!1);
              };
              return (
                "complete" === document.readyState
                  ? W(!1)
                  : window.addEventListener("load", function () {
                      e();
                    }),
                function () {
                  return window.removeEventListener("load", function () {
                    e();
                  });
                }
              );
            }, []),
            (0, d.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, s.Z)(
                    (0, r.Z)().mark(function e() {
                      var t;
                      return (0, r.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), A();
                            case 2:
                              !1 === (t = e.sent).error ? z(t.data) : z(k);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [A, k]
            );
          var je = (0, d.useState)(function () {
              switch (e.locale) {
                case "zh-CN":
                  return "https://www.youtube.com/embed/HK0P8wWFWGs?rel=0";
                case "ja-JP":
                  return "https://www.youtube.com/embed/vFoXDfrBUDA?rel=0";
                default:
                  return "https://www.youtube.com/embed/h2u43RH2_BY?rel=0";
              }
            }),
            ye = (0, o.Z)(je, 2),
            we = ye[0],
            be = ye[1],
            Ce = (0, d.useRef)(we);
          return (
            (0, d.useEffect)(
              function () {
                var t = (function (e) {
                    switch (e) {
                      case "zh-CN":
                        return "https://www.youtube.com/embed/HK0P8wWFWGs?rel=0";
                      case "ja-JP":
                        return "https://www.youtube.com/embed/vFoXDfrBUDA?rel=0";
                      default:
                        return "https://www.youtube.com/embed/h2u43RH2_BY?rel=0";
                    }
                  })(e.locale),
                  n = ""
                    .concat(t)
                    .concat(
                      Ce.current.includes("autoplay=1")
                        ? "&autoplay=1&mute=1&playsinline=1"
                        : ""
                    );
                be(n), (Ce.current = n);
              },
              [e.locale]
            ),
            (0, d.useEffect)(
              function () {
                R &&
                  !1 === Ce.current.includes("autoplay=1") &&
                  (be(
                    "".concat(Ce.current, "&autoplay=1&mute=1&playsinline=1")
                  ),
                  (Ce.current = "".concat(
                    Ce.current,
                    "&autoplay=1&mute=1&playsinline=1"
                  )));
              },
              [R]
            ),
            (0, V.jsxs)(V.Fragment, {
              children: [
                (S ||
                  (!l && !ue.current) ||
                  (!l && ue.current && !1 === ue.current.isLoaded)) &&
                  (0, V.jsx)(v.kCb, {
                    background: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 12,
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    children: (0, V.jsx)("div", {
                      id: "loading-lottie",
                      style: { overflow: "hidden" },
                    }),
                  }),
                (0, V.jsxs)("div", {
                  className: "scroller",
                  style: {
                    height: "100vh",
                    position: "fixed",
                    minHeight: "-webkit-fill-available",
                  },
                  children: [
                    (0, V.jsxs)(v.kCb, {
                      justifyContent: "center",
                      children: [
                        (0, V.jsx)("div", {
                          id: "char-lottie",
                          style: {
                            height: "100vh",
                            width: "100%",
                            position: "absolute",
                            paddingTop: "8vh",
                            zIndex: 10,
                            pointerEvents: "none",
                          },
                        }),
                        (0, V.jsx)("div", {
                          id: "glow-light",
                          style: {
                            width: "38vw",
                            minWidth: "300px",
                            position: "absolute",
                            height: "55vh",
                            zIndex: 9,
                            background: "var(--textYellow)",
                            opacity: 0.9,
                            filter: "blur(150px)",
                            top: "45vh",
                            willChange: "transform",
                          },
                        }),
                        (0, V.jsx)("img", {
                          id: "char-mobile",
                          src: "/images/landing/character-mobile.png",
                          alt: "character-mobile",
                          style: {
                            height: "100vh",
                            position: "absolute",
                            zIndex: 10,
                            paddingTop: "11vh",
                            visibility: "hidden",
                          },
                        }),
                      ],
                    }),
                    (0, V.jsxs)("div", {
                      className: "section-1",
                      "data-bg": "1",
                      style: { height: "100vh" },
                      children: [
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "url(/images/landing/1.png)" },
                        }),
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "url(/images/landing/2.png)" },
                        }),
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "black" },
                        }),
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "black" },
                        }),
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "black" },
                        }),
                        (0, V.jsx)(X, {
                          className: "bg-change",
                          style: { background: "black" },
                        }),
                        (0, V.jsx)("section", {
                          children: (0, V.jsxs)(v.kCb, {
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            zIndex: 10,
                            position: "relative",
                            flexDirection: "column",
                            children: [
                              (0, V.jsxs)(ae, {
                                children: [
                                  (0, V.jsx)(v.kCb, {
                                    justifyContent: "center",
                                    style: { gridArea: "1/1/2/4" },
                                    children: (0, V.jsx)($, {
                                      style: { alignSelf: "self-start" },
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(8px, 2vw, 17px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "500",
                                        marginTop: "10vh",
                                        className: "content-p",
                                        letterSpacing:
                                          "clamp(0px, 8vw, 0.53em)",
                                        fFamily: "var(--fontFamily2)",
                                        textTransform: "uppercase",
                                        children: (0, V.jsx)(u.Z, {
                                          id: "landing-sec1-subtitle1",
                                          defaultMessage:
                                            "Elevate Your <styledSpan>virtual Presence</styledSpan>",
                                          values: {
                                            styledSpan: function (e) {
                                              return (0, V.jsx)(ne, {
                                                children: e,
                                              });
                                            },
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, V.jsxs)(v.kCb, {
                                    justifyContent: "space-between",
                                    style: { gridArea: "2/1/3/4" },
                                    children: [
                                      (0, V.jsx)($, {
                                        style: { alignSelf: "self-start" },
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(30px, 6vw, 85px)",
                                          colorCode: "var(--whiteColor)",
                                          fWeight: "500",
                                          className: "content-p",
                                          textTransform: "uppercase",
                                          letterSpacing:
                                            "clamp(0px, 8vw, 1.5rem)",
                                          lineHeight: 0.8,
                                          fFamily: "var(--fontFamily2)",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "landing-sec1-title",
                                            defaultMessage: "NEKO.",
                                          }),
                                        }),
                                      }),
                                      (0, V.jsx)($, {
                                        style: { alignSelf: "flex-end" },
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(30px, 6vw, 85px)",
                                          colorCode: "var(--whiteColor)",
                                          fWeight: "500",
                                          className: "content-p",
                                          textTransform: "uppercase",
                                          letterSpacing:
                                            "clamp(0px, 8vw, 1.5rem)",
                                          lineHeight: 0.8,
                                          fFamily: "var(--fontFamily2)",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "landing-sec1-title",
                                            defaultMessage: "NEKO.",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, V.jsx)("div", {
                                    style: {
                                      display: "grid",
                                      gridArea: "3/1/3/4",
                                    },
                                    children: (0, V.jsxs)(v.kCb, {
                                      alignItems: "center",
                                      style: { gap: "1rem" },
                                      children: [
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)("div", {
                                            id: "scroll-down-lottie",
                                            style: {
                                              width: "23px",
                                              height: "38px",
                                              overflow: "hidden",
                                            },
                                            className: "content-p",
                                          }),
                                        }),
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            colorCode: "var(--whiteColor)",
                                            fWeight: "400",
                                            className: "content-p",
                                            overflow: "hidden",
                                            lineHeight: 0.9,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec1-scrolldown",
                                              defaultMessage: "Scroll Down",
                                            }),
                                          }),
                                        }),
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(C.i, {
                                            className: "sec1-content-line",
                                            color: "var(--whiteColor)",
                                            size: 1.2,
                                            style: {
                                              width: "8vw",
                                              maxWidth: "123px",
                                            },
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, V.jsx)(ie, {
                                id: "sec2-grid",
                                children: (0, V.jsxs)(se, {
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  style: {
                                    gridArea: "2/1/3/4",
                                    columnGap: "clamp(20vw, 8vw, 30vw)",
                                  },
                                  children: [
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      style: { gap: "clamp(1rem, 4vw, 2rem)" },
                                      children: [
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "14px",
                                            colorCode: "var(--whiteColor)",
                                            fWeight: "700",
                                            className: "sec2-content",
                                            maxWidth: "300px",
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec2-L-subtitle1",
                                              defaultMessage:
                                                "Powering the Next Generation of Social Media:",
                                            }),
                                          }),
                                        }),
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "clamp(28px, 4vw, 45px)",
                                            colorCode: "var(--textYellow)",
                                            fFamily: "var(--fontFamilyBold)",
                                            fWeight: "800",
                                            className: "sec2-content",
                                            maxWidth: "382px",
                                            lineHeight: 1.25,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec2-L-subtitle2",
                                              defaultMessage:
                                                "Unleashing The Potential Of AI Avatar",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      children: [
                                        (0, V.jsxs)(ee, {
                                          flexDirection: "column",
                                          alignSelf: "flex-start",
                                          padding:
                                            "clamp(25px, 4vw, 30px) 25px",
                                          className: "sec2-content-box",
                                          margin: "1rem",
                                          maxWidth: "380px",
                                          children: [
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--textYellow)",
                                                fWeight: "700",
                                                className: "sec2-content",
                                                fFamily:
                                                  "var(--fontFamilyBold)",
                                                maxWidth: "400px",
                                                textTransform: "uppercase",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec2-R-subtitle1",
                                                  defaultMessage:
                                                    "Choose from our diverse range of AI avatars that can serve as:",
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                marginTop: "20px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data1",
                                                          defaultMessage:
                                                            "Virtual Influencer",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data2",
                                                          defaultMessage:
                                                            "AI Chatbots",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data3",
                                                          defaultMessage:
                                                            "Personal Assistants",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data4",
                                                          defaultMessage:
                                                            "Digital Companions",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data5",
                                                          defaultMessage:
                                                            "Empowering Your Brand With Virtual Influencers",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data6",
                                                          defaultMessage:
                                                            "Exceptional Customer Service",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data7",
                                                          defaultMessage:
                                                            "Efficient Social Media Management",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec2-R-data8",
                                                          defaultMessage:
                                                            "Personalized Support",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("br", {
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec2-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "CA: 0x8708194f12a971d48536eadf1829270e9f79b49d",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, V.jsx)($, {
                                          id: "sec2-button-wrapper",
                                          style: {
                                            zIndex: 11,
                                            paddingBottom: "13px",
                                            position: "relative",
                                          },
                                          children: (0, V.jsx)("a", {
                                            href: ""
                                              .concat(
                                                "https://app.jinkoai.com",
                                                "?lang="
                                              )
                                              .concat(e.locale),
                                            target: "_self",
                                            rel: "noopener noreferrer",
                                            children: (0, V.jsx)(f.Mm, {
                                              minWidth: "185px",
                                              width: "190px",
                                              className: "sec2-content-box",
                                              borderRadius: "20px",
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--blackColor)",
                                                fWeight: "700",
                                                fFamily:
                                                  "var(--fontFamilyBold)",
                                                textTransform: "uppercase",
                                                height: "auto",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec2-R-btn1",
                                                  defaultMessage:
                                                    "Try Now{br}(Closed Beta)",
                                                  values: {
                                                    br: (0, V.jsx)("br", {}),
                                                  },
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              "  ",
                              (0, V.jsx)(ie, {
                                children: (0, V.jsxs)(se, {
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  style: {
                                    gridArea: "2/1/3/4",
                                    columnGap: "clamp(20vw, 8vw, 30vw)",
                                  },
                                  children: [
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      style: { gap: "clamp(1rem, 4vw, 2rem)" },
                                      children: [
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "clamp(28px, 4vw, 36px)",
                                            colorCode: "var(--textYellow)",
                                            fFamily: "var(--fontFamilyBold)",
                                            fWeight: "700",
                                            className: "sec3-content",
                                            maxWidth: "385px",
                                            lineHeight: 1.25,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec3-L-subtitle1",
                                              defaultMessage: "iNFT Protocol",
                                            }),
                                          }),
                                        }),
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "clamp(13px, 4vw, 20px)",
                                            colorCode: "var(--whiteColor)",
                                            fWeight: "400",
                                            className: "sec3-content",
                                            lineHeight: 1,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec3-L-subtitle2",
                                              defaultMessage:
                                                "Enables AI Assets to Work Interoperability",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      children: [
                                        (0, V.jsxs)(ee, {
                                          flexDirection: "column",
                                          alignSelf: "flex-start",
                                          padding:
                                            "clamp(20px, 4vw, 30px) 25px",
                                          className: "sec3-content-box",
                                          margin: "1rem",
                                          maxWidth: "380px",
                                          children: [
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--textYellow)",
                                                fWeight: "700",
                                                textTransform: "uppercase",
                                                maxWidth: "400px",
                                                className: "sec3-content",
                                                fFamily:
                                                  "var(--fontFamilyBold)",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec3-R-subtitle1",
                                                  defaultMessage:
                                                    "Embark on a Journey of AI Empowerment with the iNFT Protocol.",
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec3-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                margin: "15px auto 10px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec3-R-data1",
                                                          defaultMessage:
                                                            "Unleash your creativity by creating and customizing your unique AI Avatar. (Body)",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec3-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                margin: "0px auto 10px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec3-R-data2",
                                                          defaultMessage:
                                                            "Choose your AI's personality (Soul)",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec3-content",
                                                fFamily: "var(--fontFamily)",
                                                maxWidth: "400px",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsx)("div", {
                                                      children: (0, V.jsx)(
                                                        u.Z,
                                                        {
                                                          id: "landing-sec3-R-data3",
                                                          defaultMessage:
                                                            "Earn as a provider of cutting-edge AI Services.",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              style: { margin: "auto" },
                                              children: (0, V.jsx)(C.i, {
                                                className: "sec3-content-line",
                                                color: "var(--whiteColor)",
                                                size: 1.2,
                                                style: {
                                                  width: "8vw",
                                                  maxWidth: "94px",
                                                  margin: "10px auto",
                                                },
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--textYellow)",
                                                fWeight: "700",
                                                className: "sec3-content",
                                                maxWidth: "400px",
                                                textTransform: "uppercase",
                                                fFamily:
                                                  "var(--fontFamilyBold)",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec3-R-subtitle2",
                                                  defaultMessage:
                                                    "Experience a World of Possibilities with our Multifaceted Social Applications.",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, V.jsx)($, {
                                          id: "sec3-button-wrapper",
                                          style: {
                                            zIndex: 11,
                                            paddingBottom: "13px",
                                          },
                                          children: (0, V.jsx)(f.Mm, {
                                            minWidth: "185px",
                                            width: "190px",
                                            className: "sec3-content-box",
                                            borderRadius: "20px",
                                            children: (0, V.jsx)(f.qY, {
                                              fSize: "clamp(13px, 1vw, 14px)",
                                              colorCode: "var(--blackColor)",
                                              fWeight: "700",
                                              fFamily: "var(--fontFamilyBold)",
                                              textTransform: "uppercase",
                                              height: "auto",
                                              children: (0, V.jsx)(u.Z, {
                                                id: "landing-sec3-R-btn1",
                                                defaultMessage:
                                                  "Create and mint (coming soon)",
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              "  ",
                              (0, V.jsx)(ie, {
                                children: (0, V.jsxs)(se, {
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  style: {
                                    gridArea: "2/1/3/4",
                                    columnGap: "clamp(20vw, 8vw, 30vw)",
                                  },
                                  children: [
                                    (0, V.jsx)(v.kCb, {
                                      flexDirection: "column",
                                      style: { gap: "2rem" },
                                      children: (0, V.jsx)($, {
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(27px, 4vw, 40px)",
                                          colorCode: "var(--textYellow)",
                                          fFamily: "var(--fontFamilyBold)",
                                          fWeight: "700",
                                          className: "sec4-content",
                                          maxWidth: "385px",
                                          lineHeight: 1.25,
                                          children: (0, V.jsx)(u.Z, {
                                            id: "landing-sec4-L-subtitle1",
                                            defaultMessage:
                                              "Transform Your Social Media Strategy with Virtual Intelligent Automation",
                                          }),
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      children: (0, V.jsx)(ee, {
                                        flexDirection: "column",
                                        alignSelf: "flex-start",
                                        padding: "0",
                                        className: "sec4-content-box",
                                        margin: "1rem",
                                        maxWidth: "380px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          alignItems: "center",
                                          flexWrap: "wrap",
                                          children: [
                                            (0, V.jsxs)(le, {
                                              flexDirection: "column",
                                              alignItems: "center",
                                              flex: "1 1 130px",
                                              children: [
                                                (0, V.jsx)("img", {
                                                  src: "/images/landing/landing-personalized-content.png",
                                                  alt: "pc",
                                                  style: { maxWidth: "100px" },
                                                }),
                                                (0, V.jsx)($, {
                                                  children: (0, V.jsx)(f.qY, {
                                                    fSize:
                                                      "clamp(12px, 1vw, 13px)",
                                                    colorCode:
                                                      "var(--whiteColor)",
                                                    fWeight: "700",
                                                    fFamily:
                                                      "var(--fontFamilyBold)",
                                                    maxWidth: "400px",
                                                    className: "sec4-content",
                                                    textTransform: "uppercase",
                                                    textAlign: "center",
                                                    marginTop: 1,
                                                    minHeight: "42px",
                                                    children: (0, V.jsx)(u.Z, {
                                                      id: "landing-sec4-R-data1",
                                                      defaultMessage:
                                                        "Personalized Content",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, V.jsxs)(le, {
                                              flexDirection: "column",
                                              alignItems: "center",
                                              flex: "1 1 130px",
                                              children: [
                                                (0, V.jsx)("img", {
                                                  src: "/images/landing/landing-enhanced-creativity.png",
                                                  alt: "ec",
                                                  style: { maxWidth: "100px" },
                                                }),
                                                (0, V.jsx)($, {
                                                  children: (0, V.jsx)(f.qY, {
                                                    fSize:
                                                      "clamp(12px, 1vw, 13px)",
                                                    colorCode:
                                                      "var(--whiteColor)",
                                                    fWeight: "700",
                                                    fFamily:
                                                      "var(--fontFamilyBold)",
                                                    maxWidth: "400px",
                                                    className: "sec4-content",
                                                    textTransform: "uppercase",
                                                    textAlign: "center",
                                                    marginTop: 1,
                                                    minHeight: "42px",
                                                    children: (0, V.jsx)(u.Z, {
                                                      id: "landing-sec4-R-data2",
                                                      defaultMessage:
                                                        "Enhanced Creativity",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, V.jsxs)(le, {
                                              flexDirection: "column",
                                              alignItems: "center",
                                              flex: "1 1 130px",
                                              children: [
                                                (0, V.jsx)("img", {
                                                  src: "/images/landing/landing-improved-communication.png",
                                                  alt: "ic",
                                                  style: { maxWidth: "100px" },
                                                }),
                                                (0, V.jsx)($, {
                                                  children: (0, V.jsx)(f.qY, {
                                                    fSize:
                                                      "clamp(12px, 1vw, 13px)",
                                                    colorCode:
                                                      "var(--whiteColor)",
                                                    fWeight: "700",
                                                    fFamily:
                                                      "var(--fontFamilyBold)",
                                                    maxWidth: "400px",
                                                    className: "sec4-content",
                                                    textTransform: "uppercase",
                                                    textAlign: "center",
                                                    marginTop: 1,
                                                    minHeight: "42px",
                                                    children: (0, V.jsx)(u.Z, {
                                                      id: "landing-sec4-R-data3",
                                                      defaultMessage:
                                                        "Improved Communication",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, V.jsxs)(le, {
                                              flexDirection: "column",
                                              alignItems: "center",
                                              flex: "1 1 130px",
                                              children: [
                                                (0, V.jsx)("img", {
                                                  src: "/images/landing/landing-smarter-social-media.png",
                                                  alt: "ssm",
                                                  style: { maxWidth: "100px" },
                                                }),
                                                (0, V.jsx)($, {
                                                  children: (0, V.jsx)(f.qY, {
                                                    fSize:
                                                      "clamp(12px, 1vw, 13px)",
                                                    colorCode:
                                                      "var(--whiteColor)",
                                                    fWeight: "700",
                                                    fFamily:
                                                      "var(--fontFamilyBold)",
                                                    maxWidth: "400px",
                                                    className: "sec4-content",
                                                    textTransform: "uppercase",
                                                    textAlign: "center",
                                                    marginTop: 1,
                                                    minHeight: "42px",
                                                    children: (0, V.jsx)(u.Z, {
                                                      id: "landing-sec4-R-data4",
                                                      defaultMessage:
                                                        "Smarter Social Media",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              "  ",
                              (0, V.jsx)(ie, {
                                children: (0, V.jsxs)(se, {
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  style: {
                                    gridArea: "2/1/3/4",
                                    columnGap: "clamp(20vw, 8vw, 30vw)",
                                  },
                                  children: [
                                    (0, V.jsx)(re, {
                                      flexDirection: "column",
                                      flex: "1 0 auto",
                                      minWidth: "290px",
                                      style: { gap: "2rem" },
                                      children: (0, V.jsx)($, {
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(30px, 4vw, 40px)",
                                          colorCode: "var(--textYellow)",
                                          fFamily: "var(--fontFamilyBold)",
                                          fWeight: "700",
                                          className: "sec5-content",
                                          maxWidth: "377px",
                                          lineHeight: 1.25,
                                          children: (0, V.jsx)(u.Z, {
                                            id: "landing-sec5-L-subtitle1",
                                            defaultMessage: "Ai.Chat",
                                          }),
                                        }),
                                      }),
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      flex: "0 0 auto",
                                      children: [
                                        (0, V.jsxs)(ee, {
                                          flexDirection: "column",
                                          alignSelf: "flex-start",
                                          padding: "30px 20px",
                                          className: "sec5-content-box",
                                          margin: "1rem",
                                          maxWidth: "clamp(320px, 25vw, 380px)",
                                          children: [
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec5-content",
                                                maxWidth: "400px",
                                                margin: "0px auto 20px",
                                                textAlign: "justify",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec5-R-subtitle2",
                                                  defaultMessage:
                                                    "Neko's Ai Chat offers users the ability to interact with diverse AI avatars, each with unique roles and personalities. It caters to various sectors, including virtual influencers, personal assistants, coaches, and customer service representatives.",
                                                }),
                                              }),
                                            }),
                                            (0, V.jsxs)(v.kCb, {
                                              justifyContent: "center",
                                              flexWrap: "wrap",
                                              style: { gap: "5px" },
                                              children: [
                                                (0, V.jsx)(v.kCb, {
                                                  flexDirection: "column",
                                                  children: (0, V.jsx)("img", {
                                                    src: "/images/landing/nft1.png",
                                                    alt: "nft1",
                                                    style: {
                                                      maxWidth:
                                                        "clamp(90px, 8vw, 106px)",
                                                    },
                                                  }),
                                                }),
                                                (0, V.jsx)(v.kCb, {
                                                  flexDirection: "column",
                                                  children: (0, V.jsx)("img", {
                                                    src: "/images/landing/nft2.png?v=2",
                                                    alt: "nft2",
                                                    style: {
                                                      maxWidth:
                                                        "clamp(90px, 8vw, 106px)",
                                                    },
                                                  }),
                                                }),
                                                (0, V.jsx)(v.kCb, {
                                                  flexDirection: "column",
                                                  children: (0, V.jsx)("img", {
                                                    src: "/images/landing/nft3.png?v=2",
                                                    alt: "nft3",
                                                    style: {
                                                      maxWidth:
                                                        "clamp(90px, 8vw, 106px)",
                                                    },
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, V.jsx)($, {
                                          id: "sec5-button-wrapper",
                                          style: {
                                            zIndex: 11,
                                            paddingBottom: "13px",
                                          },
                                          children: (0, V.jsx)(f.Mm, {
                                            minWidth: "185px",
                                            width: "190px",
                                            className: "sec5-content-box",
                                            borderRadius: "20px",
                                            children: (0, V.jsx)(f.qY, {
                                              fSize: "clamp(13px, 1vw, 14px)",
                                              colorCode: "var(--blackColor)",
                                              fWeight: "800",
                                              fFamily: "var(--fontFamilyBold)",
                                              textTransform: "uppercase",
                                              children: (0, V.jsx)(u.Z, {
                                                id: "landing-sec5-R-btn1",
                                                defaultMessage:
                                                  "Subscribe{br}(Coming Soon)",
                                                values: {
                                                  br: (0, V.jsx)("br", {}),
                                                },
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              "  ",
                              (0, V.jsx)("div", {
                                style: {
                                  display: "grid",
                                  position: "absolute",
                                  gridTemplateColumns: "repeat(3, 1fr)",
                                  gridTemplateRows: "repeat(3, 1fr)",
                                  width: "100vw",
                                  height: "100vh",
                                },
                                children: (0, V.jsx)(v.kCb, {
                                  justifyContent: "space-between",
                                  style: { gridArea: "3/1/4/4" },
                                  children: (0, V.jsx)($, {
                                    children: (0, V.jsx)("div", {
                                      id: "side-data-lottie",
                                      style: {
                                        width: "73%",
                                        overflow: "hidden",
                                      },
                                      className: "sec345-content-L-lottie",
                                    }),
                                  }),
                                }),
                              }),
                              (0, V.jsx)(ie, {
                                children: (0, V.jsxs)(se, {
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  style: {
                                    gridArea: "2/1/3/4",
                                    columnGap: "clamp(20vw, 25vw, 30vw)",
                                  },
                                  children: [
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      style: { gap: "clamp(1rem, 4vw, 2rem)" },
                                      children: [
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "clamp(30px, 4vw, 40px)",
                                            colorCode: "var(--textYellow)",
                                            fFamily: "var(--fontFamilyBold)",
                                            fWeight: "700",
                                            className: "sec6-content",
                                            maxWidth: "385px",
                                            lineHeight: 1.25,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec6-L-subtitle1",
                                              defaultMessage: "AIO",
                                            }),
                                          }),
                                        }),
                                        (0, V.jsx)($, {
                                          children: (0, V.jsx)(f.qY, {
                                            fSize: "clamp(14px, 4vw, 20px)",
                                            colorCode: "var(--whiteColor)",
                                            fWeight: "400",
                                            className: "sec6-content",
                                            lineHeight: 1,
                                            children: (0, V.jsx)(u.Z, {
                                              id: "landing-sec6-L-subtitle2",
                                              defaultMessage:
                                                "(0x8708194f12a971d48536eadf1829270e9f79b49d)",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      position: "relative",
                                      children: [
                                        (0, V.jsx)(Q, {
                                          style: { position: "absolute" },
                                          children: (0, V.jsx)("img", {
                                            className: "sec6-content",
                                            src: "/images/landing/jinko-token.png",
                                            alt: "jinko-token",
                                            style: {
                                              maxWidth:
                                                "clamp(90px, 4vw, 120px)",
                                            },
                                          }),
                                        }),
                                        (0, V.jsxs)(ee, {
                                          flexDirection: "column",
                                          alignSelf: "flex-start",
                                          padding:
                                            "clamp(25px, 4vw, 30px) 20px",
                                          className: "sec6-content-box",
                                          margin: "1rem",
                                          maxWidth: "380px",
                                          children: [
                                            (0, V.jsx)($, {
                                              children: (0, V.jsxs)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec6-content",
                                                maxWidth: "400px",
                                                marginTop: "2rem",
                                                children: [
                                                  "\xb7\xa0",
                                                  (0, V.jsx)(u.Z, {
                                                    id: "landing-sec6-R-data1",
                                                    defaultMessage:
                                                      "<styledSpan>Symbol:</styledSpan>",
                                                    values: {
                                                      styledSpan: function (e) {
                                                        return (0, V.jsx)(ne, {
                                                          children: e,
                                                        });
                                                      },
                                                    },
                                                  }),
                                                  " NEKO",
                                                ],
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsxs)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec6-content",
                                                maxWidth: "400px",
                                                margin: "10px auto",
                                                children: [
                                                  "\xb7\xa0",
                                                  (0, V.jsx)(u.Z, {
                                                    id: "landing-sec6-R-data2",
                                                    defaultMessage:
                                                      "<styledSpan>Decimals:</styledSpan>",
                                                    values: {
                                                      styledSpan: function (e) {
                                                        return (0, V.jsx)(ne, {
                                                          children: e,
                                                        });
                                                      },
                                                    },
                                                  }),
                                                  " 9",
                                                ],
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsxs)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec6-content",
                                                maxWidth: "400px",
                                                margin: "10px auto",
                                                children: [
                                                  "\xb7\xa0",
                                                  (0, V.jsx)(u.Z, {
                                                    id: "landing-sec6-R-data3",
                                                    defaultMessage:
                                                      "<styledSpan>Initial Total Supply:</styledSpan>",
                                                    values: {
                                                      styledSpan: function (e) {
                                                        return (0, V.jsx)(ne, {
                                                          children: e,
                                                        });
                                                      },
                                                    },
                                                  }),
                                                  " 1,000,000,000 NEKO",
                                                ],
                                              }),
                                            }),
                                            (0, V.jsx)($, {
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--whiteColor)",
                                                fWeight: "400",
                                                className: "sec6-content",
                                                maxWidth: "400px",
                                                margin: "10px auto",
                                                children: (0, V.jsxs)(v.kCb, {
                                                  children: [
                                                    (0, V.jsx)("div", {
                                                      children: "\xb7\xa0",
                                                    }),
                                                    (0, V.jsxs)("div", {
                                                      children: [
                                                        (0, V.jsx)(u.Z, {
                                                          id: "landing-sec6-R-data4",
                                                          defaultMessage:
                                                            "<styledSpan>Utility:</styledSpan>",
                                                          values: {
                                                            styledSpan:
                                                              function (e) {
                                                                return (0,
                                                                V.jsx)(ne, {
                                                                  children: e,
                                                                });
                                                              },
                                                          },
                                                        }),
                                                        "\xa0",
                                                        (0, V.jsx)(u.Z, {
                                                          id: "landing-sec6-R-data5",
                                                          defaultMessage:
                                                            "As rewards token, stake for train & earn, iNFT minting,  AI services subscriptions, advanced tools subscriptions, marketplace fees, purchase of AI assets,  governance, and trading purposes.",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, V.jsx)($, {
                                          id: "sec6-button-wrapper",
                                          style: {
                                            zIndex: 11,
                                            paddingBottom: "13px",
                                          },
                                          children: (0, V.jsx)("a", {
                                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8708194f12a971d48536eadf1829270e9f79b49d",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, V.jsx)(f.Mm, {
                                              minWidth: "185px",
                                              width: "190px",
                                              className: "sec6-content-box",
                                              borderRadius: "20px",
                                              children: (0, V.jsx)(f.qY, {
                                                fSize: "clamp(13px, 1vw, 14px)",
                                                colorCode: "var(--blackColor)",
                                                fWeight: "800",
                                                fFamily:
                                                  "var(--fontFamilyBold)",
                                                textTransform: "uppercase",
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec6-R-btn1",
                                                  defaultMessage: "Buy Now",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              "  ",
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, V.jsxs)("div", {
                      style: { background: "black" },
                      children: [
                        (0, V.jsx)("section", {
                          id: "section2",
                          className: "section",
                          "data-bg": "2",
                          style: { height: "auto", marginTop: "-2px" },
                          children: (0, V.jsxs)(se, {
                            justifyContent: "space-evenly",
                            padding: "0 2vw",
                            alignItems: "center",
                            height: "auto",
                            children: [
                              (0, V.jsxs)(v.kCb, {
                                flexDirection: "column",
                                justifyContent: "center",
                                style: { gap: "2rem" },
                                children: [
                                  (0, V.jsx)($, {
                                    children: (0, V.jsx)(f.qY, {
                                      fSize: "clamp(30px, 4vw, 40px)",
                                      colorCode: "var(--textYellow)",
                                      fFamily: "var(--fontFamilyBold)",
                                      fWeight: "700",
                                      className: "sec7-content",
                                      maxWidth: "385px",
                                      lineHeight: 1.25,
                                      children: (0, V.jsx)(u.Z, {
                                        id: "landing-sec7-L-subtitle1",
                                        defaultMessage: "Ai.Studio",
                                      }),
                                    }),
                                  }),
                                  (0, V.jsx)($, {
                                    children: (0, V.jsx)(f.qY, {
                                      fSize: "clamp(14px, 4vw, 20px)",
                                      colorCode: "var(--whiteColor)",
                                      fWeight: "400",
                                      className: "sec7-content",
                                      maxWidth: "320px",
                                      lineHeight: 1.25,
                                      children: (0, V.jsx)(u.Z, {
                                        id: "landing-sec7-L-subtitle2",
                                        defaultMessage:
                                          "Simplify Content Generation With Powerful AI Capabilities",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, V.jsx)(ce, {
                                children: (0, V.jsxs)("img", {
                                  width: "560",
                                  height: "737",
                                  src: "/images/landing/youtube.png",
                                }),
                              }),
                              (0, V.jsx)(v.kCb, {
                                flexDirection: "column",
                                alignItems: "center",
                                children: (0, V.jsxs)(ee, {
                                  flexDirection: "column",
                                  alignSelf: "flex-start",
                                  padding: "30px 25px",
                                  className: "sec7-content-box",
                                  margin: "1rem",
                                  maxWidth: "380px",
                                  children: [
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400", 
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data1",
                                                  defaultMessage:
                                                    "<styledSpan>AI Actors:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data2",
                                                  defaultMessage:
                                                    "Choose favourite AI actor.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data3",
                                                  defaultMessage:
                                                    "<styledSpan>Voice Customization:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data4",
                                                  defaultMessage:
                                                    "Modify voices for uniqueness.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data5",
                                                  defaultMessage:
                                                    "<styledSpan>Background Customization:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data6",
                                                  defaultMessage:
                                                    "Create immersive scenes.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data7",
                                                  defaultMessage:
                                                    "<styledSpan>Content Insertion:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data8",
                                                  defaultMessage:
                                                    "Seamlessly integrate text-to-speech.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data9",
                                                  defaultMessage:
                                                    "<styledSpan>Template Library:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data10",
                                                  defaultMessage:
                                                    "Professional presentations made easy.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        margin: "0px auto 10px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data11",
                                                  defaultMessage:
                                                    "<styledSpan>AI Animation Customization:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data12",
                                                  defaultMessage:
                                                    "Bring your content to life.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, V.jsx)($, {
                                      children: (0, V.jsx)(f.qY, {
                                        fSize: "clamp(13px, 1vw, 14px)",
                                        colorCode: "var(--whiteColor)",
                                        fWeight: "400",
                                        className: "sec7-content",
                                        fFamily: "var(--fontFamily)",
                                        maxWidth: "400px",
                                        children: (0, V.jsxs)(v.kCb, {
                                          children: [
                                            (0, V.jsx)("div", {
                                              children: "\xb7\xa0",
                                            }),
                                            (0, V.jsxs)("div", {
                                              children: [
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data13",
                                                  defaultMessage:
                                                    "<styledSpan>Voice Cloning:</styledSpan>",
                                                  values: {
                                                    styledSpan: function (e) {
                                                      return (0, V.jsx)(ne, {
                                                        children: e,
                                                      });
                                                    },
                                                  },
                                                }),
                                                "\xa0",
                                                (0, V.jsx)(u.Z, {
                                                  id: "landing-sec7-R-data14",
                                                  defaultMessage:
                                                    "Personalize with your own voice.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, V.jsxs)("section", {
                          id: "section2-5",
                          className: "section",
                          style: { height: "auto" },
                          children: [
                            (0, V.jsxs)(v.kCb, {
                              alignItems: "center",
                              flexDirection: "column",
                              padding: "2rem 1vw",
                              backgroundImage:
                                'url("/images/landing/light-bg.png")',
                              backgroundSize: "contain",
                              backgroundPosition: "center center",
                              children: [
                                (0, V.jsxs)(f.qY, {
                                  fSize: "clamp(30px, 4vw, 40px)",
                                  colorCode: "var(--textYellow)",
                                  fFamily: "var(--fontFamilyBold)",
                                  fWeight: "700",
                                  className: "sec7-content",
                                  maxWidth: "385px",
                                  lineHeight: 1.25,
                                  marginTop: "30px",
                                  children: [
                                    (0, V.jsx)(u.Z, {
                                      id: "landing-sec7-5-L-subtitle1",
                                      defaultMessage: "Powered By",
                                    }),
                                    " :",
                                  ],
                                }),
                                (0, V.jsxs)(v.kCb, {
                                  flexWrap: "wrap",
                                  maxWidth: 928,
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginTop: "50px",
                                  style: { gap: "clamp(1rem, 4vw, 4rem)" },
                                  children: [
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      style: { gap: "10px" },
                                      children: [
                                        (0, V.jsx)("img", {
                                          src: "/images/landing/powered-by/ethereum.svg",
                                          alt: "eth",
                                          style: {
                                            maxWidth:
                                              "clamp(100px, 4vw, 140px)",
                                          },
                                        }),
                                        (0, V.jsx)(f.qY, {
                                          fSize: "clamp(14px, 4vw, 20px)",
                                          colorCode: "var(--textYellow)",
                                          fWeight: "900",
                                          className: "sec7-content",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "label-ethereum",
                                            defaultMessage: "Ethereum",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      style: { gap: "10px" },
                                      children: [
                                        (0, V.jsx)("img", {
                                          src: "/images/landing/powered-by/openai.svg",
                                          alt: "openai",
                                          style: {
                                            maxWidth:
                                              "clamp(100px, 4vw, 140px)",
                                          },
                                        }),
                                        (0, V.jsx)(f.qY, {
                                          fSize: "clamp(14px, 4vw, 20px)",
                                          colorCode: "var(--textYellow)",
                                          fWeight: "900",
                                          className: "sec7-content",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "label-openai",
                                            defaultMessage: "Open AI",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, V.jsxs)(v.kCb, {
                                      flexDirection: "column",
                                      alignItems: "center",
                                      style: { gap: "10px" },
                                      children: [
                                        (0, V.jsx)("img", {
                                          src: "/images/landing/powered-by/play-ht.svg",
                                          alt: "playht",
                                          style: {
                                            maxWidth:
                                              "clamp(100px, 4vw, 140px)",
                                          },
                                        }),
                                        (0, V.jsx)(f.qY, {
                                          fSize: "clamp(14px, 4vw, 20px)",
                                          colorCode: "var(--textYellow)",
                                          fWeight: "900",
                                          className: "sec7-content",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "label-playht",
                                            defaultMessage: "Play.HT",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, V.jsxs)(v.kCb, {
                              alignItems: "center",
                              flexDirection: "column",
                              paddingTop: "2rem",
                              backgroundImage:
                                'url("/images/landing/gradient-yellow.png")',
                              backgroundSize: "contain",
                              backgroundPosition: "center center",
                              paddingBottom: "2rem",
                              children: [
                                (0, V.jsxs)(f.qY, {
                                  fSize: "clamp(30px, 4vw, 40px)",
                                  colorCode: "var(--textYellow)",
                                  fFamily: "var(--fontFamilyBold)",
                                  fWeight: "700",
                                  className: "sec7-content",
                                  maxWidth: "385px",
                                  lineHeight: 1.25,
                                  marginTop: "30px",
                                  textAlign: "center",
                                  children: [
                                  ],
                                }),
                              ],
                            }),
                            (0, V.jsxs)(v.kCb, {
                              alignItems: "center",
                              flexDirection: "column",
                              paddingTop: "2rem",
                              backgroundImage:
                                'url("/images/landing/grid.png")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              paddingBottom: "2rem",
                              backgroundRepeat: "no-repeat",
                              children: [
                                (0, V.jsxs)(f.qY, {
                                  fSize: "clamp(30px, 4vw, 40px)",
                                  colorCode: "var(--textYellow)",
                                  fFamily: "var(--fontFamilyBold)",
                                  fWeight: "700",
                                  className: "sec7-content",
                                  maxWidth: "415px",
                                  lineHeight: 1.25,
                                  marginTop: "30px",
                                  textAlign: "center",
                                  children: [
                                    (0, V.jsx)(u.Z, {
                                      id: "landing-sec7-5-L-subtitle4",
                                      defaultMessage:
                                        "Brand Engaged with Virtual Influencers",
                                    }),
                                    " :",
                                  ],
                                }),
                                (0, V.jsx)(de, {
                                  flexWrap: "wrap",
                                  justifyContent: "center",
                                  maxWidth: 1e3,
                                  marginTop: "3rem",
                                  gutter: "3rem",
                                  children: G.map(function (e) {
                                    return (0,
                                    V.jsx)(pe, { id: "brand-".concat(e.id), children: (0, V.jsx)("img", { src: e.path, alt: e.alt }) });
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, V.jsx)("section", {
                          id: "section3",
                          className: "section",
                          "data-bg": "3",
                          style: { marginTop: "2rem", height: "100%" },
                          children: (0, V.jsxs)(oe, {
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            padding: "0 2vw",
                            maxWidth: "1376px",
                            margin: "auto",
                            height: "100%",
                            children: [
                              (0, V.jsx)(Z, {
                                id: "ellipse-svg",
                                style: {
                                  position: "absolute",
                                  overflow: "hidden",
                                  maxWidth: "80%",
                                  maxHeight: "100%",
                                  left: "clamp(-24vw, -15vw, -6vw)",
                                  top: "-3vh",
                                },
                              }),
                              (0, V.jsxs)(v.kCb, {
                                flexDirection: "column",
                                position: "relative",
                                style: { gap: "2rem" },
                                children: [
                                  (0, V.jsx)($, {
                                    children: (0, V.jsx)(f.qY, {
                                      fSize: "clamp(30px, 4vw, 40px)",
                                      colorCode: "var(--textYellow)",
                                      fFamily: "var(--fontFamilyBold)",
                                      fWeight: "800",
                                      className: "sec6-content",
                                      maxWidth: "377px",
                                      lineHeight: 1.2,
                                      textTransform: "uppercase",
                                      children: (0, V.jsx)(u.Z, {
                                        id: "landing-sec8-L-subtitle1",
                                        defaultMessage: "Join Us Now",
                                      }),
                                    }),
                                  }),
                                  (0, V.jsx)($, {
                                    children: (0, V.jsx)(C.i, {
                                      className: "sec6-content-line",
                                      color: "var(--whiteColor)",
                                      size: 1.2,
                                      style: { maxWidth: "200px" },
                                    }),
                                  }),
                                  (0, V.jsx)($, {
                                    children: (0, V.jsx)(f.qY, {
                                      fSize: "clamp(20px, 2vw, 20px)",
                                      colorCode: "var(--whiteColor)",
                                      fWeight: "400",
                                      className: "sec6-content",
                                      maxWidth: "360px",
                                      lineHeight: 1.2,
                                      children: (0, V.jsx)(u.Z, {
                                        id: "landing-sec8-L-subtitle2",
                                        defaultMessage:
                                          "Unlock the potential of AI for enhanced Virtual User Experience & Business Solutions",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, V.jsx)("img", {
                                src: "/images/landing/character-static.png",
                                alt: "character-static",
                                style: { maxHeight: "78vh", zIndex: "10" },
                              }),
                              (0, V.jsxs)(v.kCb, {
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: 5,
                                children: [
                                  (0, V.jsxs)(ee, {
                                    flexDirection: "column",
                                    alignSelf: "flex-start",
                                    padding: "30px 25px",
                                    className: "sec6-content-box",
                                    margin: "1rem",
                                    maxWidth: "380px",
                                    children: [
                                      (0, V.jsx)($, {
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(13px, 1vw, 14px)",
                                          colorCode: "var(--textYellow)",
                                          fWeight: "700",
                                          className: "sec6-content",
                                          fFamily: "var(--fontFamilyBold)",
                                          maxWidth: "400px",
                                          textTransform: "uppercase",
                                          children: (0, V.jsx)(u.Z, {
                                            id: "landing-sec8-R-subtitle1",
                                            defaultMessage:
                                              "Join us on Neko social media to stay connected and witness the exciting evolution of AI together.",
                                          }),
                                        }),
                                      }),
                                      (0, V.jsx)($, {
                                        children: (0, V.jsx)(f.qY, {
                                          fSize: "clamp(13px, 1vw, 14px)",
                                          colorCode: "var(--whiteColor)",
                                          fWeight: "400",
                                          className: "sec6-content",
                                          fFamily: "var(--fontFamily)",
                                          maxWidth: "400px",
                                          marginTop: "20px",
                                          children: (0, V.jsxs)(v.kCb, {
                                            children: [
                                              (0, V.jsx)("div", {
                                                children: "\xb7\xa0",
                                              }),
                                              (0, V.jsx)("div", {
                                                children: (0, V.jsx)(u.Z, {
                                                  id: "landing-sec8-R-subtitle2",
                                                  defaultMessage:
                                                    "Subscribe now and be part of our journey!",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, V.jsx)($, {
                                    children: (0, V.jsxs)(v.kCb, {
                                      style: { gap: "10px 15px" },
                                      margin: "1rem auto",
                                      children: [
                                        N.instagram &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: N.instagram,
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/instagram.svg",
                                              alt: "instagram",
                                            }),
                                          }),
                                        N.twitter &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: "https://x.com/NekoAI_agent",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/twitter.svg",
                                              alt: "twitter",
                                            }),
                                          }),
                                        N.telegram &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: N.telegram,
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/telegram.png",
                                              alt: "telegram",
                                            }),
                                          }),
                                        N.discord &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: "https://t.me/NekoAI_agent",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/telegram.png",
                                              alt: "discord",
                                            }),
                                          }),
                                        N.telegram &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: N.telegram,
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/dextools.png",
                                              alt: "telegram",
                                            }),
                                          }),
                                        N.discord &&
                                          (0, V.jsx)(te, {
                                            className: "sec6-icon",
                                            href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8708194f12a971d48536eadf1829270e9f79b49d",
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            children: (0, V.jsx)("img", {
                                              src: "/images/social-icon/dextools.png",
                                              alt: "discord",
                                            }),
                                          }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=151.ef46b565.chunk.js.map
