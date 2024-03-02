// Intro JS........................

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return s(8695)
            }])
        },
        8695: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s(6042),
                i = s(5893),
                r = s(9008),
                l = s.n(r),
                c = s(7294),
                o = function() {
                    return (0, i.jsx)("div", {
                        id: "loading",
                        children: (0, i.jsx)("div", {
                            className: "load-circle",
                            children: (0, i.jsx)("span", {
                                className: "one"
                            })
                        })
                    })
                };
            s(3021), s(906);
            var u = function(e) {
                var t = e.Component,
                    s = e.pageProps,
                    r = (0, c.useState)(!0),
                    u = r[0],
                    a = r[1];
                return (0, c.useEffect)(function() {
                    setTimeout(function() {
                        a(!1)
                    }, 1e3)
                }, []), (0, i.jsxs)(c.Fragment, {
                    children: [(0, i.jsxs)(l(), {
                        children: [(0, i.jsx)("title", {
                            children: "Happi"
                        }), (0, i.jsx)("link", {
                            rel: "shortcut icon",
                            type: "image/x-icon",
                            href: "../img/happii.png"
                        }), (0, i.jsx)("link", {
                            href: "css/design.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "css/font-awesome.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "css/style.css",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
                            rel: "stylesheet"
                        }), (0, i.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                            rel: "stylesheet"
                        })]
                    }), u && (0, i.jsx)(o, {}), (0, i.jsx)(t, (0, n.Z)({}, s))]
                })
            }
        },
        3021: function() {},
        906: function() {},
        9008: function(e, t, s) {
            e.exports = s(5443)
        },
        4924: function(e, t, s) {
            "use strict";

            function n(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            s.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        6042: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = s(4924);

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(s);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }))), i.forEach(function(t) {
                        (0, n.Z)(e, t, s[t])
                    })
                }
                return e
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(387)
        }), _N_E = e.O()
    }
]);

// home JS..................................
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(3678)
            }])
        },
        3678: function(e, s, n) {
            "use strict";
            n.r(s);
            var i = n(5893),
                a = n(5152),
                r = n.n(a),
                c = n(4644),
                t = n(8504),
                p = n(9924),
                o = n(9923),
                d = n(9142),
                u = n(3909),
                h = r()(function() {
                    return Promise.all([n.e(391), n.e(424)]).then(n.bind(n, 9424))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [9424]
                        }
                    },
                    ssr: !1
                }),
                m = function() {
                    return (0, i.jsxs)(u.Z, {
                        children: [(0, i.jsx)("section", {
                            id: "home",
                            "data-nav-tooltip": "Home",
                            className: "pp-section pp-scrollable",
                            children: (0, i.jsx)("div", {
                                className: "home-banner",
                                children: (0, i.jsx)("div", {
                                    className: "container",
                                    children: (0, i.jsxs)("div", {
                                        className: "row full-screen align-items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "col-lg-6",
                                            children: (0, i.jsxs)("div", {
                                                className: "type-box",
                                                children: [(0, i.jsx)("h6", {
                                                    children: "Hello, I am"
                                                }), (0, i.jsx)("h1", {
                                                    className: "font-alt",
                                                    children: "DUSHIMIMANA Happi Gilbert"
                                                }), (0, i.jsxs)("p", {
                                                    className: "lead",
                                                    children: ["I Am Passionate ", (0, i.jsx)(d.Z, {})]
                                                }), (0, i.jsx)("p", {
                                                    className: "desc",
                                                    children: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
                                                }), (0, i.jsx)("div", {
                                                    className: "btn-bar",
                                                    children: (0, i.jsx)("a", {
                                                        className: "px-btn px-btn-theme",
                                                        href: "https://drive.usercontent.google.com/download?id=15QpzKoG83_dyXbBQBEouJAA5oMiPgwMH&export=download&authuser=0&confirm=t&uuid=fb41f18d-728e-4133-8c41-f5e75f4e41b5&at=APZUnTWv1KLIuhlknNDqVavhCnGB:1709377856361",
                                                        children: "Download CV"
                                                    })
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "col-lg-6",
                                            children: (0, i.jsx)("div", {
                                                className: "hb-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "img/home-banner.png",
                                                    title: "",
                                                    alt: ""
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, i.jsx)(c.Z, {}), (0, i.jsx)(p.Z, {}), (0, i.jsx)(o.Z, {}), (0, i.jsx)(h, {}), (0, i.jsx)(t.Z, {})]
                    })
                };
            s.default = m
        },
        9142: function(e, s, n) {
            "use strict";
            var i = n(5893),
                a = n(7294),
                r = n(3614),
                c = n.n(r),
                l = function() {
                    var e = (0, a.useRef)(null);
                    return (0, a.useEffect)(function() {
                        var s = new(c())(e.current, {
                            strings: ["Web Designer", "Full-Stack Developer", "Freelancer"],
                            typeSpeed: 100,
                            backSpeed: 100,
                            backDelay: 100,
                            smartBackspace: !0,
                            loop: !0,
                            showCursor: !0
                        });
                        return function() {
                            s.destroy()
                        }
                    }, []), (0, i.jsx)(a.Fragment, {
                        children: (0, i.jsx)("span", {
                            id: "type-it",
                            className: "subtitle subtitle-typed",
                            ref: e
                        })
                    })
                };
            s.Z = l
        }
    },
    function(e) {
        e.O(0, [664, 586, 614, 909, 194, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);