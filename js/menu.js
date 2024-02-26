// Load min page.............................................

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [586], {
        9101: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return c
                }
            });
            let n = {
                    _origin: "https://api.emailjs.com"
                },
                a = (e, t = "https://api.emailjs.com") => {
                    n._userID = e, n._origin = t
                },
                i = (e, t, r) => {
                    if (!e) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
                    if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!r) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class o {
                constructor(e) {
                    this.status = e.status, this.text = e.responseText
                }
            }
            let u = (e, t, r = {}) => new Promise((a, i) => {
                    let u = new XMLHttpRequest;
                    u.addEventListener("load", ({
                        target: e
                    }) => {
                        let t = new o(e);
                        200 === t.status || "OK" === t.text ? a(t) : i(t)
                    }), u.addEventListener("error", ({
                        target: e
                    }) => {
                        i(new o(e))
                    }), u.open("POST", n._origin + e, !0), Object.keys(r).forEach(e => {
                        u.setRequestHeader(e, r[e])
                    }), u.send(t)
                }),
                s = (e, t, r, a) => {
                    let o = a || n._userID;
                    return i(o, e, t), u("/api/v1.0/email/send", JSON.stringify({
                        lib_version: "3.2.0",
                        user_id: o,
                        service_id: e,
                        template_id: t,
                        template_params: r
                    }), {
                        "Content-type": "application/json"
                    })
                },
                l = e => {
                    let t;
                    if (!(t = "string" == typeof e ? document.querySelector(e) : e) || "FORM" !== t.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                    return t
                },
                d = (e, t, r, a) => {
                    let o = a || n._userID,
                        s = l(r);
                    i(o, e, t);
                    let d = new FormData(s);
                    return d.append("lib_version", "3.2.0"), d.append("service_id", e), d.append("template_id", t), d.append("user_id", o), u("/api/v1.0/email/send-form", d)
                };
            var c = {
                init: a,
                send: s,
                sendForm: d
            }
        },
        638: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6856).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var r = o.default,
                    i = (null == t ? void 0 : t.suspense) ? {} : {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                if (n(e, Promise) ? i.loader = function() {
                        return e
                    } : "function" == typeof e ? i.loader = e : "object" == typeof e && (i = a({}, i, e)), (i = a({}, i, t)).suspense && (delete i.ssr, delete i.loading), i.loadableGenerated && delete(i = a({}, i, i.loadableGenerated)).loadableGenerated, "boolean" == typeof i.ssr && !i.suspense) {
                    if (!i.ssr) return delete i.ssr, u(r, i);
                    delete i.ssr
                }
                return r(i)
            }, t.noSSR = u;
            var a = r(6495).Z,
                i = r(2648).Z,
                o = (i(r(7294)), i(r(4302)));

            function u(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6319: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var n = (0, r(2648).Z)(r(7294)).default.createContext(null);
            t.LoadableContext = n
        },
        4302: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9658).Z,
                a = r(7222).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(6495).Z,
                o = (0, r(2648).Z)(r(7294)),
                u = r(6319),
                s = r(7294).useSyncExternalStore,
                l = [],
                d = [],
                c = !1;

            function f(e) {
                var t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(function(e) {
                    return r.loading = !1, r.loaded = e, e
                }).catch(function(e) {
                    throw r.loading = !1, r.error = e, e
                }), r
            }
            var p = function() {
                function e(t, r) {
                    n(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return a(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            r = this._opts;
                        t.loading && ("number" == typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(function() {
                            e._update({
                                pastDelay: !0
                            })
                        }, r.delay)), "number" == typeof r.timeout && (this._timeout = setTimeout(function() {
                            e._update({
                                timedOut: !0
                            })
                        }, r.timeout))), this._res.promise.then(function() {
                            e._update({}), e._clearTimeouts()
                        }).catch(function(t) {
                            e._update({}), e._clearTimeouts()
                        }), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = i({}, this._state, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function m(e) {
                return function(e, t) {
                    var r = function() {
                            if (!m) {
                                var t = new p(e, f);
                                m = {
                                    getCurrentValue: t.getCurrentValue.bind(t),
                                    subscribe: t.subscribe.bind(t),
                                    retry: t.retry.bind(t),
                                    promise: t.promise.bind(t)
                                }
                            }
                            return m.promise()
                        },
                        n = function() {
                            r();
                            var e = o.default.useContext(u.LoadableContext);
                            e && Array.isArray(f.modules) && f.modules.forEach(function(t) {
                                e(t)
                            })
                        },
                        a = function(e, t) {
                            n();
                            var r = s(m.subscribe, m.getCurrentValue, m.getCurrentValue);
                            return o.default.useImperativeHandle(t, function() {
                                return {
                                    retry: m.retry
                                }
                            }, []), o.default.useMemo(function() {
                                var t;
                                return r.loading || r.error ? o.default.createElement(f.loading, {
                                    isLoading: r.loading,
                                    pastDelay: r.pastDelay,
                                    timedOut: r.timedOut,
                                    error: r.error,
                                    retry: m.retry
                                }) : r.loaded ? o.default.createElement((t = r.loaded) && t.__esModule ? t.default : t, e) : null
                            }, [e, r])
                        },
                        l = function(e, t) {
                            return n(), o.default.createElement(f.lazy, i({}, e, {
                                ref: t
                            }))
                        },
                        f = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null,
                            suspense: !1
                        }, t);
                    f.suspense && (f.lazy = o.default.lazy(f.loader));
                    var m = null;
                    if (!c) {
                        var h = f.webpack ? f.webpack() : f.modules;
                        h && d.push(function(e) {
                            var t = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var i, o = h[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var u = i.value;
                                    if (-1 !== e.indexOf(u)) return r()
                                }
                            } catch (s) {
                                n = !0, a = s
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                        })
                    }
                    var _ = f.suspense ? l : a;
                    return _.preload = function() {
                        return r()
                    }, _.displayName = "LoadableComponent", o.default.forwardRef(_)
                }(f, e)
            }

            function h(e, t) {
                for (var r = []; e.length;) {
                    var n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then(function() {
                    if (e.length) return h(e, t)
                })
            }
            m.preloadAll = function() {
                return new Promise(function(e, t) {
                    h(l).then(e, t)
                })
            }, m.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(function(t) {
                    var r = function() {
                        return c = !0, t()
                    };
                    h(d, e).then(r, r)
                })
            }, window.__NEXT_PRELOADREADY = m.preloadReady, t.default = m
        },
        5152: function(e, t, r) {
            e.exports = r(638)
        },
        1163: function(e, t, r) {
            e.exports = r(387)
        },
        9396: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }), e
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        }
    }
]);

// Load min page............................................


(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [614], {
        3614: function(t) {
            var e;
            e = function() {
                return function(t) {
                    var e = {};

                    function s(n) {
                        if (e[n]) return e[n].exports;
                        var i = e[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return t[n].call(i.exports, i, i.exports, s), i.loaded = !0, i.exports
                    }
                    return s.m = t, s.c = e, s.p = "", s(0)
                }([function(t, e, s) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                            function t(t, e) {
                                for (var s = 0; s < e.length; s++) {
                                    var n = e[s];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            return function(e, s, n) {
                                return s && t(e.prototype, s), n && t(e, n), e
                            }
                        }(),
                        i = s(1),
                        r = s(3),
                        o = function() {
                            function t(e, s) {
                                (function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                })(this, t), i.initializer.load(this, s, e), this.begin()
                            }
                            return n(t, [{
                                key: "toggle",
                                value: function() {
                                    this.pause.status ? this.start() : this.stop()
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    !this.typingComplete && (this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this)))
                                }
                            }, {
                                key: "start",
                                value: function() {
                                    !this.typingComplete && this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.reset(!1), this.options.onDestroy(this)
                                }
                            }, {
                                key: "reset",
                                value: function() {
                                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                    clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                                }
                            }, {
                                key: "begin",
                                value: function() {
                                    var t = this;
                                    this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                                        t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                                    }, this.startDelay)
                                }
                            }, {
                                key: "typewrite",
                                value: function(t, e) {
                                    var s = this;
                                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                    var n = this.humanizer(this.typeSpeed),
                                        i = 1;
                                    if (!0 === this.pause.status) {
                                        this.setPauseStatus(t, e, !0);
                                        return
                                    }
                                    this.timeout = setTimeout(function() {
                                        e = r.htmlParser.typeHtmlChars(t, e, s);
                                        var n = 0,
                                            o = t.substr(e);
                                        if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                                            var a = 1;
                                            a += (o = /\d+/.exec(o)[0]).length, n = parseInt(o), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                                        }
                                        if ("`" === o.charAt(0)) {
                                            for (;
                                                "`" !== t.substr(e + i).charAt(0) && !(e + ++i > t.length););
                                            var u = t.substring(0, e),
                                                l = t.substring(u.length + 1, e + i);
                                            t = u + l + t.substring(e + i + 1), i--
                                        }
                                        s.timeout = setTimeout(function() {
                                            s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                                        }, n)
                                    }, n)
                                }
                            }, {
                                key: "keepTyping",
                                value: function(t, e, s) {
                                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                                    var n = t.substr(0, e);
                                    this.replaceText(n), this.typewrite(t, e)
                                }
                            }, {
                                key: "doneTyping",
                                value: function(t, e) {
                                    var s = this;
                                    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), (this.arrayPos !== this.strings.length - 1 || (this.complete(), !1 !== this.loop && this.curLoop !== this.loopCount)) && (this.timeout = setTimeout(function() {
                                        s.backspace(t, e)
                                    }, this.backDelay))
                                }
                            }, {
                                key: "backspace",
                                value: function(t, e) {
                                    var s = this;
                                    if (!0 === this.pause.status) {
                                        this.setPauseStatus(t, e, !1);
                                        return
                                    }
                                    if (this.fadeOut) return this.initFadeOut();
                                    this.toggleBlinking(!1);
                                    var n = this.humanizer(this.backSpeed);
                                    this.timeout = setTimeout(function() {
                                        e = r.htmlParser.backSpaceHtmlChars(t, e, s);
                                        var n = t.substr(0, e);
                                        if (s.replaceText(n), s.smartBackspace) {
                                            var i = s.strings[s.arrayPos + 1];
                                            i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                                        }
                                        e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                                    }, n)
                                }
                            }, {
                                key: "complete",
                                value: function() {
                                    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                                }
                            }, {
                                key: "setPauseStatus",
                                value: function(t, e, s) {
                                    this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                                }
                            }, {
                                key: "toggleBlinking",
                                value: function(t) {
                                    this.cursor && !this.pause.status && this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink"))
                                }
                            }, {
                                key: "humanizer",
                                value: function(t) {
                                    return Math.round(Math.random() * t / 2) + t
                                }
                            }, {
                                key: "shuffleStringsIfNeeded",
                                value: function() {
                                    this.shuffle && (this.sequence = this.sequence.sort(function() {
                                        return Math.random() - .5
                                    }))
                                }
                            }, {
                                key: "initFadeOut",
                                value: function() {
                                    var t = this;
                                    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                                        t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                                    }, this.fadeOutDelay)
                                }
                            }, {
                                key: "replaceText",
                                value: function(t) {
                                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                                }
                            }, {
                                key: "bindFocusEvents",
                                value: function() {
                                    var t = this;
                                    this.isInput && (this.el.addEventListener("focus", function(e) {
                                        t.stop()
                                    }), this.el.addEventListener("blur", function(e) {
                                        (!t.el.value || 0 === t.el.value.length) && t.start()
                                    }))
                                }
                            }, {
                                key: "insertCursor",
                                value: function() {
                                    this.showCursor && !this.cursor && (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling))
                                }
                            }]), t
                        }();
                    e.default = o, t.exports = e.default
                }, function(t, e, s) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n, i = Object.assign || function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var s = arguments[e];
                                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
                            }
                            return t
                        },
                        r = function() {
                            function t(t, e) {
                                for (var s = 0; s < e.length; s++) {
                                    var n = e[s];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            return function(e, s, n) {
                                return s && t(e.prototype, s), n && t(e, n), e
                            }
                        }(),
                        o = (n = s(2)) && n.__esModule ? n : {
                            default: n
                        },
                        a = function() {
                            function t() {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                }(this, t)
                            }
                            return r(t, [{
                                key: "load",
                                value: function(t, e, s) {
                                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = i({}, o.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(t) {
                                            return t.trim()
                                        }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                                        t.strings = [], t.stringsElement.style.display = "none";
                                        var n = Array.prototype.slice.apply(t.stringsElement.children),
                                            r = n.length;
                                        if (r)
                                            for (var a = 0; a < r; a += 1) {
                                                var u = n[a];
                                                t.strings.push(u.innerHTML.trim())
                                            }
                                    }
                                    for (var a in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                                            status: !1,
                                            typewrite: !0,
                                            curString: "",
                                            curStrPos: 0
                                        }, t.typingComplete = !1, t.strings) t.sequence[a] = a;
                                    t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                                }
                            }, {
                                key: "getCurrentElContent",
                                value: function(t) {
                                    var e = "";
                                    return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                                }
                            }, {
                                key: "appendAnimationCss",
                                value: function(t) {
                                    var e = "data-typed-js-css";
                                    if (!(!t.autoInsertCss || !t.showCursor && !t.fadeOut || document.querySelector("[" + e + "]"))) {
                                        var s = document.createElement("style");
                                        s.type = "text/css", s.setAttribute(e, !0);
                                        var n = "";
                                        t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                                    }
                                }
                            }]), t
                        }();
                    e.default = a;
                    var u = new a;
                    e.initializer = u
                }, function(t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = {
                        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                        stringsElement: null,
                        typeSpeed: 0,
                        startDelay: 0,
                        backSpeed: 0,
                        smartBackspace: !0,
                        shuffle: !1,
                        backDelay: 700,
                        fadeOut: !1,
                        fadeOutClass: "typed-fade-out",
                        fadeOutDelay: 500,
                        loop: !1,
                        loopCount: 1 / 0,
                        showCursor: !0,
                        cursorChar: "|",
                        autoInsertCss: !0,
                        attr: null,
                        bindInputFocusEvents: !1,
                        contentType: "html",
                        onBegin: function(t) {},
                        onComplete: function(t) {},
                        preStringTyped: function(t, e) {},
                        onStringTyped: function(t, e) {},
                        onLastStringBackspaced: function(t) {},
                        onTypingPaused: function(t, e) {},
                        onTypingResumed: function(t, e) {},
                        onReset: function(t) {},
                        onStop: function(t, e) {},
                        onStart: function(t, e) {},
                        onDestroy: function(t) {}
                    }, t.exports = e.default
                }, function(t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = function() {
                            function t(t, e) {
                                for (var s = 0; s < e.length; s++) {
                                    var n = e[s];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }
                            return function(e, s, n) {
                                return s && t(e.prototype, s), n && t(e, n), e
                            }
                        }(),
                        n = function() {
                            function t() {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                }(this, t)
                            }
                            return s(t, [{
                                key: "typeHtmlChars",
                                value: function(t, e, s) {
                                    if ("html" !== s.contentType) return e;
                                    var n = t.substr(e).charAt(0);
                                    if ("<" === n || "&" === n) {
                                        var i = "";
                                        for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && !(++e + 1 > t.length););
                                        e++
                                    }
                                    return e
                                }
                            }, {
                                key: "backSpaceHtmlChars",
                                value: function(t, e, s) {
                                    if ("html" !== s.contentType) return e;
                                    var n = t.substr(e).charAt(0);
                                    if (">" === n || ";" === n) {
                                        var i = "";
                                        for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && !(--e < 0););
                                        e--
                                    }
                                    return e
                                }
                            }]), t
                        }();
                    e.default = n;
                    var i = new n;
                    e.htmlParser = i
                }])
            }, t.exports = e()
        }
    }
]);

// Load min page............................................

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [664], {
        1210: function(e, t) {
            "use strict";

            function o(e, t, o, n) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = o, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(4941).Z;
            o(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(2648).Z,
                a = o(7273).Z,
                u = r(o(7294)),
                l = o(6273),
                f = o(2725),
                c = o(3462),
                i = o(1018),
                s = o(7190),
                d = o(1210),
                p = o(8684),
                v = {};

            function y(e, t, o, n) {
                if (e && l.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, o, n)).catch(function(e) {});
                    var r = n && void 0 !== n.locale ? n.locale : e && e.locale;
                    v[t + "%" + o + (r ? "%" + r : "")] = !0
                }
            }
            var b = u.default.forwardRef(function(e, t) {
                var o, r, b = e.href,
                    h = e.as,
                    C = e.children,
                    _ = e.prefetch,
                    g = e.passHref,
                    M = e.replace,
                    m = e.shallow,
                    x = e.scroll,
                    L = e.locale,
                    j = e.onClick,
                    R = e.onMouseEnter,
                    O = e.onTouchStart,
                    E = e.legacyBehavior,
                    k = void 0 === E ? !0 !== Boolean(!1) : E,
                    P = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = C, k && ("string" == typeof o || "number" == typeof o) && (o = u.default.createElement("a", null, o));
                var w = !1 !== _,
                    T = u.default.useContext(c.RouterContext),
                    I = u.default.useContext(i.AppRouterContext);
                I && (T = I);
                var S = u.default.useMemo(function() {
                        var e = n(l.resolveHref(T, b, !0), 2),
                            t = e[0],
                            o = e[1];
                        return {
                            href: t,
                            as: h ? l.resolveHref(T, h) : o || t
                        }
                    }, [T, b, h]),
                    U = S.href,
                    B = S.as,
                    N = u.default.useRef(U),
                    Z = u.default.useRef(B);
                k && (r = u.default.Children.only(o));
                var A = k ? r && "object" == typeof r && r.ref : t,
                    D = n(s.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    H = D[0],
                    K = D[1],
                    G = D[2],
                    q = u.default.useCallback(function(e) {
                        (Z.current !== B || N.current !== U) && (G(), Z.current = B, N.current = U), H(e), A && ("function" == typeof A ? A(e) : "object" == typeof A && (A.current = e))
                    }, [B, A, U, G, H]);
                u.default.useEffect(function() {
                    var e = K && w && l.isLocalURL(U),
                        t = void 0 !== L ? L : T && T.locale,
                        o = v[U + "%" + B + (t ? "%" + t : "")];
                    e && !o && y(T, U, B, {
                        locale: t
                    })
                }, [B, U, K, L, w, T]);
                var z = {
                    ref: q,
                    onClick: function(e) {
                        k || "function" != typeof j || j(e), k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, o, n, r, a, f, c, i, s) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(p = (d = e).currentTarget.target) || "_self" === p) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && l.isLocalURL(o)) {
                                e.preventDefault();
                                var d, p, v = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](o, n, {
                                        shallow: a,
                                        locale: c,
                                        scroll: f
                                    }) : t[r ? "replace" : "push"](o, {
                                        forceOptimisticNavigation: !s
                                    })
                                };
                                i ? u.default.startTransition(v) : v()
                            }
                        }(e, T, U, B, M, m, x, L, Boolean(I), w)
                    },
                    onMouseEnter: function(e) {
                        k || "function" != typeof R || R(e), k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!w && I) && l.isLocalURL(U) && y(T, U, B, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        k || "function" != typeof O || O(e), k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!w && I) && l.isLocalURL(U) && y(T, U, B, {
                            priority: !0
                        })
                    }
                };
                if (!k || g || "a" === r.type && !("href" in r.props)) {
                    var F = void 0 !== L ? L : T && T.locale,
                        J = T && T.isLocaleDomain && d.getDomainLocale(B, F, T.locales, T.domainLocales);
                    z.href = J || p.addBasePath(f.addLocale(B, F, T && T.defaultLocale))
                }
                return k ? u.default.cloneElement(r, z) : u.default.createElement("a", Object.assign({}, P, z), o)
            });
            t.default = b, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7190: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(4941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    o = e.rootMargin,
                    c = e.disabled || !u,
                    i = n(r.useState(!1), 2),
                    s = i[0],
                    d = i[1],
                    p = n(r.useState(null), 2),
                    v = p[0],
                    y = p[1];
                return r.useEffect(function() {
                    if (u) {
                        if (!c && !s && v && v.tagName) {
                            var e, n, r, i, p, y, b;
                            return n = function(e) {
                                    return e && d(e)
                                }, p = (i = function(e) {
                                    var t, o = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = f.find(function(e) {
                                            return e.root === o.root && e.margin === o.margin
                                        });
                                    if (n && (t = l.get(n))) return t;
                                    var r = new Map;
                                    return t = {
                                        id: o,
                                        observer: new IntersectionObserver(function(e) {
                                            e.forEach(function(e) {
                                                var t = r.get(e.target),
                                                    o = e.isIntersecting || e.intersectionRatio > 0;
                                                t && o && t(o)
                                            })
                                        }, e),
                                        elements: r
                                    }, f.push(o), l.set(o, t), t
                                }(r = {
                                    root: null == t ? void 0 : t.current,
                                    rootMargin: o
                                })).id, y = i.observer, (b = i.elements).set(v, n), y.observe(v),
                                function() {
                                    if (b.delete(v), y.unobserve(v), 0 === b.size) {
                                        y.disconnect(), l.delete(p);
                                        var e = f.findIndex(function(e) {
                                            return e.root === p.root && e.margin === p.margin
                                        });
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }
                    } else if (!s) {
                        var h = a.requestIdleCallback(function() {
                            return d(!0)
                        });
                        return function() {
                            return a.cancelIdleCallback(h)
                        }
                    }
                }, [v, c, o, t, s]), [y, s, r.useCallback(function() {
                    d(!1)
                }, [])]
            };
            var r = o(7294),
                a = o(9311),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                f = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var n = (0, o(2648).Z)(o(7294)),
                r = n.default.createContext(null);
            t.AppRouterContext = r;
            var a = n.default.createContext(null);
            t.LayoutRouterContext = a;
            var u = n.default.createContext(null);
            t.GlobalLayoutRouterContext = u;
            var l = n.default.createContext(null);
            t.TemplateContext = l
        },
        1664: function(e, t, o) {
            e.exports = o(8418)
        }
    }
]);

// mini page...............................

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [909], {
        3909: function(e, s, n) {
            n.d(s, {
                Z: function() {
                    return v
                }
            });
            var a = n(5893),
                c = n(7294),
                i = function(e) {
                    var s = (0, c.useRef)();
                    return (0, c.useEffect)(function() {
                        var n = function(n) {
                            s.current.contains(n.target) || e()
                        };
                        return document.addEventListener("mousedown", n),
                            function() {
                                document.removeEventListener("mousedown", n)
                            }
                    }), s
                },
                r = function(e) {
                    var s = e.close,
                        n = e.src,
                        r = i(function() {
                            s(!1)
                        });
                    return (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mfp-bg mfp-ready",
                            onClick: function() {
                                return s(!1)
                            }
                        }), (0, a.jsx)("div", {
                            className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                            tabIndex: -1,
                            style: {
                                overflow: "hidden auto"
                            },
                            children: (0, a.jsxs)("div", {
                                className: "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                                children: [(0, a.jsx)("div", {
                                    className: "mfp-content",
                                    ref: r,
                                    children: (0, a.jsx)("div", {
                                        className: "mfp-iframe-scaler",
                                        children: (0, a.jsx)("img", {
                                            className: "mfp-img",
                                            src: n
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })]
                            })
                        })]
                    })
                },
                l = function() {
                    var e = (0, c.useState)(!1),
                        s = e[0],
                        n = e[1],
                        i = (0, c.useState)(null),
                        l = i[0],
                        t = i[1];
                    return (0, c.useEffect)(function() {
                        setTimeout(function() {
                            document.querySelectorAll("a").forEach(function(e) {
                                e.href.includes("img") && null === e.getAttribute("download") && e.addEventListener("click", function(s) {
                                    s.preventDefault(), t(e.href), n(!0)
                                })
                            })
                        }, 1500)
                    }, []), (0, a.jsx)(c.Fragment, {
                        children: s && (0, a.jsx)(r, {
                            close: function() {
                                return n(!1)
                            },
                            src: l
                        })
                    })
                },
                t = n(1163),
                o = function() {
                    var e = (0, t.useRouter)();
                    return (0, a.jsx)("a", {
                        className: "demo-back-link",
                        onClick: function() {
                            return e.back()
                        },
                        href: "#",
                        children: (0, a.jsx)("i", {
                            className: "fas fa-arrow-left"
                        })
                    })
                },
                d = function() {
                    var e = (0, c.useState)(!0);
                    e[0], e[1];
                    var s = function() {
                        document.querySelector("body").classList.toggle("theme-light")
                    };
                    return (0, a.jsx)("label", {
                        className: "color_switch",
                        onClick: function() {
                            return s()
                        },
                        children: (0, a.jsx)("i", {
                            className: "fas fa-moon"
                        })
                    })
                },
                m = n(1664),
                u = n.n(m),
                h = n(1917),
                f = function(e) {
                    var s = e.blog,
                        n = (0, c.useState)(!1),
                        i = n[0],
                        r = n[1];
                    return (0, c.useEffect)(function() {
                        s || (0, h.j1)()
                    }, []), (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mob-header",
                            children: (0, a.jsxs)("div", {
                                className: "d-flex",
                                children: [(0, a.jsx)("div", {
                                    className: "navbar-brand",
                                    children: (0, a.jsx)(u(), {
                                        href: "/",
                                        children: (0, a.jsx)("a", {
                                            className: "logo-text",
                                            children: "Happi"
                                        })
                                    })
                                }), (0, a.jsxs)("button", {
                                    className: "toggler-menu ".concat(i ? "open" : ""),
                                    onClick: function() {
                                        return r(!i)
                                    },
                                    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                                })]
                            })
                        }), (0, a.jsxs)("header", {
                            className: "header-left ".concat(i ? "menu-open menu-open-desk" : ""),
                            children: [(0, a.jsxs)("div", {
                                className: "scroll-bar",
                                children: [(0, a.jsx)("div", {
                                    className: "hl-top",
                                    children: (0, a.jsxs)("div", {
                                        className: "hl-logo",
                                        children: [(0, a.jsx)("div", {
                                            className: "img",
                                            children: (0, a.jsx)("img", {
                                                src: "img/about-me.jpg",
                                                title: "",
                                                alt: ""
                                            })
                                        }), (0, a.jsx)("h5", {
                                            children: "D.H Gilbert"
                                        })]
                                    })
                                }), s ? (0, a.jsx)(x, {}) : (0, a.jsx)(j, {})]
                            }), (0, a.jsxs)("div", {
                                className: "nav justify-content-center social-icons",
                                children: [(0, a.jsx)("a", {
                                    href: "https://www.facebook.com/mrHappiRwanda",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-facebook-f"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://twitter.com/DushimimanaGil3",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-twitter"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://www.instagram.com/happii_official/",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-instagram"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://www.linkedin.com/in/dushimimana-gilbert-happi/",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-linkedin-in"
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "http://github.com/gilberthappi/",
                                    children: (0, a.jsx)("i", {
                                        className: "fab fa-github"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                j = function() {
                    return (0, a.jsxs)("ul", {
                        className: "nav nav-menu",
                        id: "pp-menu",
                        children: [(0, a.jsx)("li", {
                            "data-menuanchor": "home",
                            className: "active",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#home",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-home"
                                }), (0, a.jsx)("span", {
                                    children: "Home"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "about",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#about",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-id-badge"
                                }), (0, a.jsx)("span", {
                                    children: "About Me"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "services",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#services",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-panel"
                                }), (0, a.jsx)("span", {
                                    children: "Services"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "work",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#work",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-bookmark-alt"
                                }), (0, a.jsx)("span", {
                                    children: "Portfolio"
                                })]
                            })
                        }), (0, a.jsx)("li", {
                            "data-menuanchor": "contactus",
                            children: (0, a.jsxs)("a", {
                                className: "nav-link",
                                href: "#contactus",
                                children: [(0, a.jsx)("i", {
                                    className: "ti-map-alt"
                                }), (0, a.jsx)("span", {
                                    children: "Contact Me"
                                })]
                            })
                        })]
                    })
                },
                x = function() {
                    return (0, c.useEffect)(function() {
                        window.addEventListener("scroll", function() {
                            return document.querySelector(".home").classList.add("active")
                        })
                    }), (0, a.jsx)(c.Fragment, {
                        children: (0, a.jsxs)("ul", {
                            className: "nav nav-menu",
                            id: "pp-menu",
                            children: [(0, a.jsx)("li", {
                                "data-menuanchor": "home",
                                children: (0, a.jsx)(u(), {
                                    href: "/#home",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-home"
                                        }), (0, a.jsx)("span", {
                                            children: "Home"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "about",
                                children: (0, a.jsx)(u(), {
                                    href: "/#about",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-id-badge"
                                        }), (0, a.jsx)("span", {
                                            children: "About Me"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "services",
                                children: (0, a.jsx)(u(), {
                                    href: "/#services",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-panel"
                                        }), (0, a.jsx)("span", {
                                            children: "Services"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                "data-menuanchor": "work",
                                children: (0, a.jsx)(u(), {
                                    href: "/#work",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-bookmark-alt"
                                        }), (0, a.jsx)("span", {
                                            children: "Portfolio"
                                        })]
                                    })
                                })
                            }),(0, a.jsx)("li", {
                                "data-menuanchor": "contactus",
                                children: (0, a.jsx)(u(), {
                                    href: "/#contactus",
                                    children: (0, a.jsxs)("a", {
                                        className: "nav-link",
                                        children: [(0, a.jsx)("i", {
                                            className: "ti-map-alt"
                                        }), (0, a.jsx)("span", {
                                            children: "Contact Me"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                v = function(e) {
                    var s = e.children,
                        n = e.home;
                    return (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)(l, {}), (0, a.jsx)(f, {
                            blog: n
                        }), (0, a.jsx)("main", {
                            className: "main-left pp-main-section",
                            children: s
                        }), (0, a.jsx)(d, {}), n && (0, a.jsx)(o, {})]
                    })
                }
        },
        1917: function(e, s, n) {
            n.d(s, {
                j1: function() {
                    return a
                },
                oA: function() {
                    return i
                },
                ot: function() {
                    return c
                }
            });
            var a = function() {
                    window.location.pathname, window.addEventListener("scroll", function() {
                        var e = document.querySelectorAll(".pp-section"),
                            s = document.querySelectorAll(".nav-menu li"),
                            n = "";
                        e.forEach(function(e) {
                            var s;
                            pageYOffset >= e.offsetTop - e.clientHeight / 3 && (n = e.getAttribute("id"))
                        }), s.forEach(function(e) {
                            e.classList.remove("active"), e.getElementsByTagName("a")[0].getAttribute("href") == "#".concat(n) && e.classList.add("active")
                        })
                    })
                },
                c = function(e, s) {
                    return Array(Math.ceil(e / s)).fill().map(function(e, s) {
                        return s + 1
                    })
                },
                i = function(e, s, n) {
                    for (var a = document.querySelectorAll(e), c = 0; c < a.length; c++) {
                        var i = a[c];
                        1 === n ? c < s ? i.classList.remove("d-none") : i.classList.add("d-none") : c >= (n - 1) * s && c < n * s ? i.classList.remove("d-none") : i.classList.add("d-none")
                    }
                }
        }
    }
]);