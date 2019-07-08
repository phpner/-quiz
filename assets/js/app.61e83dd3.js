(function(t) {
    function e(e) {
        for (var n, i, r = e[0], c = e[1], u = e[2], l = 0, d = []; l < r.length; l++) i = r[l], a[i] && d.push(a[i][0]), a[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        h && h(e);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []), s()
    }

    function s() {
        for (var t, e = 0; e < o.length; e++) {
            for (var s = o[e], n = !0, i = 1; i < s.length; i++) {
                var r = s[i];
                0 !== a[r] && (n = !1)
            }
            n && (o.splice(e--, 1), t = c(c.s = s[0]))
        }
        return t
    }
    var n = {},
        i = {
            app: 0
        },
        a = {
            app: 0
        },
        o = [];

    function r(t) {
        return c.p + "js/" + ({
            "final-page": "final-page",
            popover: "popover",
            swiper: "swiper"
        }[t] || t) + "." + {
            "chunk-16ac490e": "aa2b8425",
            "final-page": "23122616",
            popover: "b33701d5",
            swiper: "eb6c664b"
        }[t] + ".js"
    }

    function c(e) {
        if (n[e]) return n[e].exports;
        var s = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, c), s.l = !0, s.exports
    }
    c.e = function(t) {
        var e = [],
            s = {
                "chunk-16ac490e": 1,
                "final-page": 1,
                popover: 1,
                swiper: 1
            };
        i[t] ? e.push(i[t]) : 0 !== i[t] && s[t] && e.push(i[t] = new Promise(function(e, s) {
            for (var n = "css/" + ({
                "final-page": "final-page",
                popover: "popover",
                swiper: "swiper"
            }[t] || t) + "." + {
                "chunk-16ac490e": "1503f0a5",
                "final-page": "ec0bb3fe",
                popover: "a41e849f",
                swiper: "f17ddb0a"
            }[t] + ".css", a = c.p + n, o = document.getElementsByTagName("link"), r = 0; r < o.length; r++) {
                var u = o[r],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === n || l === a)) return e()
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
                u = d[r], l = u.getAttribute("data-href");
                if (l === n || l === a) return e()
            }
            var h = document.createElement("link");
            h.rel = "stylesheet", h.type = "text/css", h.onload = e, h.onerror = function(e) {
                var n = e && e.target && e.target.src || a,
                    o = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete i[t], h.parentNode.removeChild(h), s(o)
            }, h.href = a;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(h)
        }).then(function() {
            i[t] = 0
        }));
        var n = a[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise(function(e, s) {
                    n = a[t] = [e, s]
                });
                e.push(n[2] = o);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = r(t), u = function(e) {
                    l.onerror = l.onload = null, clearTimeout(d);
                    var s = a[t];
                    if (0 !== s) {
                        if (s) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src,
                                o = new Error("Loading chunk " + t + " failed.\n(" + n + ": " + i + ")");
                            o.type = n, o.request = i, s[1](o)
                        }
                        a[t] = void 0
                    }
                };
                var d = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }, 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(e)
    }, c.m = t, c.c = n, c.d = function(t, e, s) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (c.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) c.d(s, n, function(e) {
                return t[e]
            }.bind(null, n));
        return s
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "//marquizquiz-a.akamaihd.net/assets/98a0d12ecdcb3800a2c27c6f1eeba8ef57a3de2c/", c.oe = function(t) {
        throw console.error(t), t
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var d = 0; d < u.length; d++) e(u[d]);
    var h = l;
    o.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "0089": function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "whitelabel"
                }, [t.isWhiteLabelActive ? t._e() : n("div", {
                    staticClass: "whitelabel__container"
                }, [n("img", {
                    staticClass: "whitelabel__icon",
                    attrs: {
                        src: s("e7f0")
                    }
                }), n("span", {
                    staticClass: "whitelabel__desktop"
                }, [t._v(t._s(t.$t("Сделано в")) + " ")]), n("a", {
                    attrs: {
                        href: "https:../www.marquiz.ru/@utm_source=widget_2F",
                        target: "_blank"
                    }
                }, [t._v("Marquiz")])])])
            },
            i = [],
            a = s("cebc"),
            o = s("2f62"),
            r = {
                name: "WhiteLabel",
                computed: Object(a["a"])({}, Object(o["c"])("quiz", ["isWhiteLabelActive"]))
            },
            c = r,
            u = (s("4c20"), s("2877")),
            l = Object(u["a"])(c, n, i, !1, null, "0d1b6d22", null);
        e["a"] = l.exports
    },
    "0287": function(t, e, s) {
        "use strict";
        var n = s("337b"),
            i = s.n(n);
        i.a
    },
    "0378": function(t, e, s) {},
    "0d14": function(t, e, s) {
        "use strict";
        var n = s("cb5b"),
            i = s.n(n);
        i.a
    },
    "222e": function(t, e, s) {
        "use strict";
        var n = s("aa5f"),
            i = s.n(n);
        i.a
    },
    "279f": function(t, e, s) {},
    "2c09": function(t, e, s) {
        "use strict";
        var n = s("5f64"),
            i = s.n(n);
        i.a
    },
    "2c32": function(t, e, s) {},
    "2c90": function(t, e, s) {},
    "31f0": function(t, e, s) {},
    "337b": function(t, e, s) {},
    "3cf9": function(t, e, s) {
        "use strict";
        var n = s("d6d0"),
            i = s.n(n);
        i.a
    },
    "3ebb": function(t, e, s) {
        "use strict";
        var n = s("a335"),
            i = s.n(n);
        i.a
    },
    "3f6f": function(t, e, s) {
        "use strict";
        var n = s("57d9"),
            i = s.n(n);
        i.a
    },
    "45d5": function(t, e, s) {},
    "4a1b": function(t, e, s) {
        "use strict";
        var n = s("279f"),
            i = s.n(n);
        i.a
    },
    "4ad0": function(t, e, s) {
        "use strict";
        var n = s("6617"),
            i = s.n(n);
        i.a
    },
    "4c20": function(t, e, s) {
        "use strict";
        var n = s("e0d4"),
            i = s.n(n);
        i.a
    },
    "4dbf": function(t, e, s) {
        t.exports = s.p + "img/catalog.150ec5dc.png"
    },
    "4eee": function(t, e, s) {},
    5308: function(t, e, s) {
        "use strict";
        s("ac6a");
        var n = s("c64e"),
            i = s("a78e"),
            a = 2;
        e["a"] = {
            values: {
                uuid: null,
                answerId: null
            },
            init: function(t) {
                this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.quizId = t;
                try {
                    this.set("answerId", i.get(this.getCookieName("answerId"))), this.set("uuid", i.get(this.getCookieName("uuid"))), this.values.uuid || this.set("uuid", n())
                } catch (e) {
                    this.set("uuid", n())
                }
            },
            getCookieName: function(t) {
                return "".concat(t, "_").concat(this.quizId)
            },
            get: function(t) {
                return t ? this.values[t] : this.values
            },
            set: function(t, e) {
                this.values[t] = e, e ? i.set(this.getCookieName(t), e, {
                    expires: this.expires
                }) : i.remove(this.getCookieName(t))
            },
            updateSessionLiveTime: function() {
                for (var t in this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.values) this.values[t] && this.set(t, this.values[t])
            }
        }
    },
    "534a": function(t, e, s) {
        "use strict";
        var n = s("2c32"),
            i = s.n(n);
        i.a
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("386d"), s("cadf"), s("551c"), s("f751"), s("097d"), s("54ba");
        var n = s("2b0e"),
            i = s("8a03"),
            a = s.n(i),
            o = s("2f62"),
            r = s("8ca8"),
            c = (s("5df3"), s("96cf"), s("3b8d")),
            u = s("cebc"),
            l = (s("b54a"), s("ac6a"), s("0f5c")),
            d = s.n(l),
            h = s("6747"),
            f = s.n(h),
            m = s("93c6"),
            p = s.n(m),
            g = s("6373"),
            v = s.n(g),
            b = s("c641"),
            _ = s.n(b),
            w = s("42454"),
            y = s.n(w),
            k = s("5ddc"),
            x = s.n(k),
            C = s("9948"),
            q = s.n(C),
            z = s("13ea"),
            A = s.n(z),
            S = s("2769"),
            I = s.n(S),
            O = s("9380"),
            $ = s.n(O),
            D = s("c228"),
            L = s.n(D),
            R = s("dd61"),
            E = s.n(R),
            F = s("0644"),
            T = s.n(F),
            j = s("ba84"),
            P = s.n(j),
            M = s("9b02"),
            Q = s.n(M),
            B = s("51f5"),
            V = s.n(B),
            N = {
                getFormattedDate: function(t, e) {
                    return t.isRange ? t.hasTime ? this.getRangeDateWithTime(e) : this.getRangeDate(e) : t.hasTime ? this.getDateWithTime(e) : e.toLocaleDateString()
                },
                getRangeDateWithTime: function(t) {
                    var e = t.from ? t.from.toLocaleDateString() : "",
                        s = t.to ? t.to.toLocaleDateString() : "",
                        n = this.getTimeFrom(t),
                        i = this.getTimeTo(t);
                    return "".concat(e, " ").concat(n, " - ").concat(s, " ").concat(i)
                },
                getRangeDate: function(t) {
                    var e = t.from ? t.from.toLocaleDateString() : "",
                        s = t.to ? t.to.toLocaleDateString() : "";
                    return "".concat(e, " - ").concat(s)
                },
                getTimeFrom: function(t) {
                    var e = "0".concat(t.timeFrom.getHours()).slice(-2),
                        s = "0".concat(t.timeFrom.getMinutes()).slice(-2);
                    return "".concat(e, ":").concat(s)
                },
                getTimeTo: function(t) {
                    var e = "0".concat(t.timeTo.getHours()).slice(-2),
                        s = "0".concat(t.timeTo.getMinutes()).slice(-2);
                    return "".concat(e, ":").concat(s)
                },
                getDateWithTime: function(t) {
                    var e = "0".concat(t.time.getHours()).slice(-2),
                        s = "0".concat(t.time.getMinutes()).slice(-2),
                        n = "".concat(e, ":").concat(s),
                        i = t.date.toLocaleDateString();
                    return "".concat(i, " ").concat(n)
                }
            },
            H = s("a3e6"),
            U = s.n(H),
            W = s("72bf"),
            G = s.n(W),
            J = s("6612"),
            K = s.n(J),
            Y = (s("28a5"), s("c5f6"), s("d173")),
            Z = s.n(Y),
            X = s("4cfe"),
            tt = s.n(X),
            et = s("e636"),
            st = s.n(et);

        function nt(t, e, s) {
            var n = e.a;
            "one-image" === t.type && (t.select = "one"), "one" === t.select && (n = [n], s.union = "or"), !0 === t.other && _()(n, function(e, s) {
                I()(t.answers, {
                    id: e
                }) || (n[s] = "OTHER")
            });
            var i = Z()(s.answer, n).length;
            if (s.union || (s.union = "or"), tt()(s.unionExtra) && "only" === s.union ? (s.union = "and", s.unionExtra = !1) : tt()(s.unionExtra) && (s.unionExtra = !0), !0 === s.unionExtra) {
                if ("or" === s.union && i) return !0;
                if ("and" === s.union && i >= s.answer.length) return !0
            } else if (!1 === s.unionExtra) {
                if ("or" === s.union && i && n.length === i) return !0;
                if ("and" === s.union && i === s.answer.length && i === n.length) return !0
            }
            return !1
        }

        function it(t, e, s) {
            var n = Q()(t, "options.isRange", !1),
                i = Number(Q()(s, "answer.0")),
                a = Number(Q()(s, "answer.1"));
            if (n) {
                var o = e.a;
                switch (s.operator) {
                    case "in":
                        if (o.from >= i && o.to <= a) return !0;
                        break;
                    case "contain":
                        if (o.from < i && o.to > a) return !0;
                        break;
                    case "out":
                        if (o.from < i && o.to < i) return !0;
                        if (o.from > a && o.to > a) return !0;
                        break;
                    case "touch":
                        if (o.from <= i && o.to >= i) return !0;
                        if (o.from <= a && o.to >= a) return !0;
                        break;
                    default:
                        break
                }
            } else {
                var r = Number(e.a);
                switch (s.operator) {
                    case "less":
                        if (r <= i) return !0;
                        break;
                    case "more":
                        if (r >= i) return !0;
                        break;
                    case "equal":
                        if (r === i) return !0;
                        break;
                    case "between":
                        if (r >= i && r <= a) return !0;
                        break;
                    default:
                        break
                }
            }
            return !1
        }

        function at(t, e, s) {
            var n = String(e.a).split(" "),
                i = 0;
            return _()(s.answer, function(t) {
                _()(n, function(e) {
                    var s = st()(t.trim(), e.trim());
                    s > i && (i = s)
                })
            }), "contain" === s.operator ? i > .7 : i < .7
        }
        var ot = function(t, e, s) {
                var n = Q()(t, "conditions", []),
                    i = Q()(t, "union", "or");
                if (!A()(n)) {
                    var a = [];
                    return n.forEach(function(t, n) {
                        var i = I()(s, {
                                q: t.question
                            }),
                            o = I()(e, {
                                id: t.question
                            });
                        if (i) switch (o.type) {
                            case "slider":
                                it(o, i, t) && a.push(n);
                                break;
                            case "input":
                                at(o, i, t) && a.push(n);
                                break;
                            default:
                                nt(o, i, t) && a.push(n);
                                break
                        }
                    }), "and" === i && a.length === n.length ? a.length : !("or" !== i || !a.length) && a.length
                }
            },
            rt = s("2768"),
            ct = s.n(rt);

        function ut(t, e) {
            var s = Q()(t, "variants", {});
            if (A()(s)) return !1;
            var n = 0,
                i = function(t, e) {
                    var i = "".concat(t, "__").concat(e);
                    s[i] && (n += Number(s[i]))
                };
            return _()(e, function(t) {
                t && (ct()(t.a) || (f()(t.a) ? _()(t.a, function(e) {
                    i(t.q, e)
                }) : i(t.q, t.a)))
            }), n
        }

        function lt(t, e) {
            var s = Number(Q()(t, "count.0")),
                n = Number(Q()(t, "count.1"));
            switch (t.operator) {
                case "less":
                    if (e < s) return !0;
                    break;
                case "more":
                    if (e >= s) return !0;
                    break;
                case "equal":
                    if (e === s) return !0;
                    break;
                case "between":
                    if (e >= s && e <= n) return !0;
                    break;
                default:
                    break
            }
            return !1
        }
        var dt = function(t) {
                (function(t, e, s, n, i) {
                    t.roistatProjectId = i, t.roistatHost = n;
                    var a = "https:" == e.location.protocol ? "https://" : "http://",
                        o = /^.*roistat_visit=[^;]+(.*)?$/.test(e.cookie) ? "/dist/module.js" : "api/site/1.0/" + i + "/init",
                        r = e.createElement(s);
                    r.charset = "UTF-8", r.async = 1, r.src = a + n + o;
                    var c = e.getElementsByTagName(s)[0];
                    c.parentNode.insertBefore(r, c)
                })(window, document, "script", "cloud.roistat.com", t)
            },
            ht = s("a78e"),
            ft = s.n(ht),
            mt = {
                discountInterval: null
            },
            pt = G.a.parse(window.location.search),
            gt = function() {
                var t = {
                    href: pt.href
                };
                t.href || (t.href = window.location.href);
                try {
                    var e = pt.utm ? JSON.parse(pt.utm) : null;
                    if (!e) {
                        var n = s("cb57");
                        e = n(window.location.search)
                    }
                    e && (t.utm = e)
                } catch (a) {
                    console.error(a)
                }
                try {
                    var i = pt.cookies ? JSON.parse(pt.cookies) : null;
                    i && (t.cookies = i)
                } catch (a) {
                    console.error(a)
                }
                return t
            },
            vt = {
                USD: "$",
                RUR: "₽",
                EUR: "€",
                UAH: "₴",
                BYB: "Br",
                KZT: "₸",
                CNY: "¥"
            },
            bt = {
                namespaced: !0,
                state: {
                    loaded: !1,
                    id: null,
                    isDemo: !1,
                    questions: [],
                    activeQuestion: 0,
                    leadForm: !1,
                    leadFormDisabled: !1,
                    results: {},
                    isResultsShow: !1,
                    isResultShow: !1,
                    isResultLoaderShow: !1,
                    mode: pt.mode || "modal",
                    info: {
                        title: "",
                        name: "",
                        assistant: {
                            name: "",
                            title: "",
                            avatar: ""
                        },
                        form: {
                            text: "",
                            fields: ["name", "phone", "email"],
                            thanks: "",
                            extra: ""
                        },
                        marketing: {
                            discount: {}
                        },
                        design: {
                            colors: {
                                main: "#ca2f94",
                                buttonTextColor: "#fff"
                            }
                        }
                    },
                    settings: {},
                    whiteLabelDate: null,
                    discount: 0,
                    fixedDiscount: 0,
                    answers: [],
                    answersId: [],
                    analyticUnique: !1,
                    quizStarted: !1,
                    hint: null,
                    selectedResult: null,
                    domain: null
                },
                getters: {
                    getQuestion: function(t) {
                        return t.questions[t.activeQuestion]
                    },
                    countQuestions: function(t, e) {
                        return e.activeQuestions.length
                    },
                    countAllQuestions: function(t) {
                        return t.questions.length
                    },
                    questionNumber: function(t, e) {
                        return e.getQuestion ? V()(e.activeQuestions, {
                            id: e.getQuestion.id
                        }) + 1 : null
                    },
                    isIncreasingDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "increasing" === e.type
                    },
                    isMeltingDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "melting" === e.type
                    },
                    isIncreasingPercentDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "increasingPercent" === e.type
                    },
                    formattedDiscount: function(t) {
                        return K()(t.discount).format("0,0")
                    },
                    getIncreasingDiscountStep: function(t, e) {
                        var s = Q()(t, "info.marketing.discount");
                        return Q()(s, "value") ? K()(Math.round(Q()(s, "value") / e.countQuestions)).format("0,0") : Q()(s, "percent") ? K()(Math.round(Q()(s, "percent") / e.countQuestions)).format("0,0") : void 0
                    },
                    getIncreasingPercentDiscountStep: function(t, e) {
                        var s = Q()(t, "info.marketing.discount");
                        return K()(Math.floor(Q()(s, "percent") / e.countQuestions * 100) / 100).format("0,0")
                    },
                    currencySymbol: function(t) {
                        return vt[t.currency] || vt.RUR
                    },
                    discountCurrencySymbol: function(t) {
                        return Q()(t, "info.marketing.discount.percent") ? "%" : vt[t.currency] || vt.RUR
                    },
                    getLastStep: function(t, e) {
                        return e.countAllQuestions - 1
                    },
                    isVariantsQuestion: function(t, e) {
                        return !Q()(e.getQuestion, "type") || P()(["answers", "variants", "images", "select", "one-image"], e.getQuestion.type) >= 0
                    },
                    isLastStep: function(t, e) {
                        return t.activeQuestion === e.getLastStep
                    },
                    getAnswerValue: function(t, e) {
                        var s = e.getQuestion;
                        if (!s) return null;
                        var n = e.isVariantsQuestion && "many" === s.select,
                            i = t.answers[t.activeQuestion];
                        return i && i.a && 0 !== i.a.length ? i.a : n ? [] : null
                    },
                    getPassedPercent: function(t) {
                        return t.activeQuestion / t.questions.length * 100
                    },
                    getIsFilled: function(t, e) {
                        if (!e.getQuestion) return !1;
                        if (P()(["date", "slider"], e.getQuestion.type) >= 0) {
                            var s = e.getAnswerValue,
                                n = Q()(e, "getQuestion.options.isRange"),
                                i = Q()(e, "getQuestion.options.hasTime");
                            return s && n ? i ? !!s.from && !!s.to && !!s.timeFrom && !!s.timeTo : i ? !!s.from && !!s.to && !!s.timeFrom && !!s.timeTo : !!s.from && !!s.to : !(!s || n) && (i ? !!s && !!s.time && !!s.date : !!s)
                        }
                        return "many" === e.getQuestion.select && e.isVariantsQuestion ? !!e.getAnswerValue.length : !!e.getAnswerValue
                    },
                    colors: function(t) {
                        var e, s = "#ca2f94",
                            n = Q()(t, "info.design.colors.main", "#ca2f94") || s;
                        P()(n, "#") < 0 && (n = "#".concat(n));
                        try {
                            e = U()(n)
                        } catch (o) {
                            e = null
                        }
                        e || (console.log("Неправильный цвет: ".concat(n)), n = s, e = U()(n));
                        var i = T()(e).darken(7).dark(),
                            a = Q()(t, "info.design.colors.buttonTextColor", i ? "#ffffff" : "#000000");
                        return P()(a, "#") < 0 && (a = "#".concat(a)), {
                            main: n,
                            lighten: U()(n).lighten(20).hex(),
                            lighten10: U()(n).lighten(10).hex(),
                            lighten2: U()(n).lighten(35).hex(),
                            darken: U()(n).darken(20).hex(),
                            darken10: U()(n).darken(10).hex(),
                            alpha: U()(n).alpha(.5).rgbString(),
                            alpha2: U()(n).alpha(.2).rgbString(),
                            gradientMain: "331deg, ".concat(U()(n).darken(20).rgbString(), ", ").concat(U()(n).lighten(20).rgbString()),
                            text: a,
                            text2: i ? n : "#000000"
                        }
                    },
                    autoNextQuestion: function(t) {
                        var e = !0;
                        return t.questions.forEach(function(t) {
                            "many" === t.select && (e = !1), t.other && (e = !1), Q()(t.options, "hasTime") && (e = !1)
                        }), e
                    },
                    activeQuestions: function(t) {
                        if (!t.answersId.length) return t.questions;
                        var e = E()(t.questions, function(e, s) {
                            return 0 === s ? e : Q()(e, "display.conditions", []).length ? !!ot(e.display, t.questions, t.answersId) && e : e
                        });
                        return L()(e)
                    },
                    activeAnswers: function(t, e) {
                        return $()(t.answers, function(t) {
                            return !!t && I()(e.activeQuestions, {
                                title: t.q
                            })
                        })
                    },
                    isWhiteLabelActive: function(t) {
                        return t.whiteLabelDate > new Date
                    },
                    data: function(t, e) {
                        var s = gt();
                        t.fixedDiscount && (s.discount = t.fixedDiscount), s.notify = Q()(t, "info.form.sendOnFirstStep", !0) ? "in 2 minutes" : "now", "vk" === t.mode && (s.href = null);
                        var n = T()(e.activeAnswers),
                            i = n.map(function(t, s) {
                                var n = e.activeQuestions[s].type,
                                    i = e.activeQuestions[s].options;
                                return t.t = n, "date" === n && t.a && (t.a = N.getFormattedDate(i, t.a)), "slider" === n && (i.isRange ? t.a = "".concat(t.a.from, " - ").concat(t.a.to) : t.a = String(t.a)), t
                            }),
                            a = {};
                        A()(e.result) || ("content" === e.result.type ? a = {
                            id: e.result.id,
                            title: e.result.title,
                            cost: e.result.cost
                        } : "redirect" === e.result.type && (a = {
                            id: e.result.id,
                            link: e.result.link
                        }));
                        var o = ft.a.get(),
                            r = {};
                        return q()(o, function(t, e) {
                            x()(e, "roistat") && (r[e] = t), "_ga" === e && (r[e] = t), "_ym_uid" === e && (r[e] = t)
                        }), s.cookies = y()(s.cookies, r), {
                            quizId: t.id,
                            raw: L()(t.answersId),
                            answers2: i,
                            extra: s,
                            result: a
                        }
                    },
                    resultsPosition: function(t) {
                        return !(!t.results || !Q()(t.results, "items", []).length) && Q()(t.results, "view", "afterForm")
                    },
                    isMultipleResults: function(t) {
                        return Q()(t.results, "multiple", !1)
                    },
                    result: function(t, e) {
                        if (t.selectedResult) return t.selectedResult;
                        var s = e.suitableResults;
                        return Q()(s, 0, {})
                    },
                    suitableResults: function(t) {
                        var e = Q()(t.results, "items", []),
                            s = [],
                            n = ut(Q()(t, "results.points"), t.answersId);
                        return _()(e, function(e) {
                            var i = Q()(e, "display.conditions", []),
                                a = Q()(e, "points"),
                                o = 0,
                                r = !1;
                            i.length ? (o += ot(e.display, t.questions, t.answersId), o > 0 && (r = !0)) : r = !0, !1 !== n && !A()(a) && r && (r = lt(a, n, t.answersId)), r && (!1 !== n && (e.title = v()(e.title, "{points}", n), e.text = v()(e.text, "{points}", n)), s.push(Object(u["a"])({}, e, {
                                _count: o
                            })))
                        }), s = p()(s, ["_count"], ["desc"]), s
                    }
                },
                mutations: {
                    resetState: function(t) {
                        t.leadForm = !1, t.leadFormDisabled = !1, t.selectedResult = null
                    },
                    showStartPage: function(t) {
                        Q()(t, "info.startPage.enabled") && (t.quizStarted = !1)
                    },
                    startQuiz: function(t) {
                        t.quizStarted = !0, t.activeQuestion = 0, t.isResultShow = !1, t.isResultsShow = !1, t.selectedResult = null, t.leadForm = !1, t.answers = [], t.answersId = []
                    },
                    setQuestions: function(t, e) {
                        t.questions = e
                    },
                    setActiveQuestion: function(t, e) {
                        var s = e;
                        s < 0 && (s = 0), s > t.questions.length && (s = t.questions.length), t.activeQuestion = s
                    },
                    setInfo: function(t, e) {
                        t.info = Object(u["a"])({}, t.info, e);
                        var s = Q()(e, "form.fields", []);
                        s.length || n["default"].set(t.info.form, "fields", ["name", "phone", "email"])
                    },
                    setIsDemo: function(t) {
                        t.isDemo = !0
                    },
                    setId: function(t, e) {
                        t.id = e
                    },
                    setWhiteLabelDate: function(t, e) {
                        t.whiteLabelDate = e ? new Date(e) : null
                    },
                    setLeadFormDisable: function(t, e) {
                        var s = e ? new Date(e) : null;
                        t.leadFormDisabled = s > new Date, t.leadFormDisabled && t.results && (Q()(t.info, "form.showMessengers") ? t.results.view = "beforeForm" : t.results.view = "afterForm")
                    },
                    setAnswerValue: function(t, e) {
                        var s, i = t.questions[t.activeQuestion],
                            a = {
                                q: i.title,
                                a: e
                            };
                        n["default"].set(t.answers, t.activeQuestion, a), s = f()(e) ? E()(e, function(t) {
                            var e = I()(i.answers, {
                                title: t
                            });
                            return e ? e.id : t
                        }) : Q()(I()(i.answers, {
                            title: e
                        }), "id");
                        var o = {
                            q: i.id,
                            a: s || e
                        };
                        n["default"].set(t.answersId, t.activeQuestion, o)
                    },
                    loaded: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.loaded = e
                    },
                    setDiscount: function(t, e) {
                        t.discount = e
                    },
                    setCurrency: function(t, e) {
                        t.currency = e
                    },
                    fixDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount", {});
                        "increasing" === e.type ? t.fixedDiscount = e.value : "increasingPercent" === e.type ? t.fixedDiscount = e.percent : t.fixedDiscount = t.discount
                    },
                    showLeadForm: function(t) {
                        t.quizStarted = !0, t.leadForm = !0, t.isResultLoaderShow = !1, t.isResultShow = !1, t.isResultsShow = !1
                    },
                    showResults: function(t) {
                        t.quizStarted = !0, t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultShow = !1, t.isResultsShow = !0
                    },
                    showResult: function(t, e) {
                        t.quizStarted = !0, t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultsShow = !1, t.isResultShow = !0, e && (t.selectedResult = e)
                    },
                    setResults: function(t, e) {
                        t.results = e
                    },
                    setUniqueAnalytic: function(t, e) {
                        t.analyticUnique = e
                    },
                    showResultLoader: function(t) {
                        t.isResultLoaderShow = !0
                    },
                    setSettings: function(t, e) {
                        t.settings = e
                    },
                    showHint: function(t, e) {
                        t.hint = e
                    },
                    selectResult: function(t, e) {
                        t.selectedResult = e
                    },
                    setMode: function(t, e) {
                        t.mode = e
                    },
                    setDomain: function(t, e) {
                        t.domain = e
                    }
                },
                actions: {
                    get: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t(e, s) {
                            var i, a, o, r, c, u, l, h, f, m, p, g, v, b, _, w, y, k, x, C, q;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.commit, a = e.state, o = e.dispatch, r = s.id, c = s.groupId, u = s.domain, l = s.quiz, h = r, !l) {
                                            t.next = 7;
                                            break
                                        }
                                        m = l, t.next = 24;
                                        break;
                                    case 7:
                                        if (!c) {
                                            t.next = 13;
                                            break
                                        }
                                        return i("setMode", "vk"), t.next = 11, n["default"].axios.get("v1/vkGroups/findOne", {
                                            params: {
                                                filter: {
                                                    where: {
                                                        groupId: c
                                                    }
                                                }
                                            }
                                        });
                                    case 11:
                                        p = t.sent, h = Q()(p, "data.quizId");
                                    case 13:
                                        if (!h) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 16, n["default"].axios.get("v1/Quizzes/".concat(h));
                                    case 16:
                                        f = t.sent, t.next = 23;
                                        break;
                                    case 19:
                                        if (!u) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 22, n["default"].axios.get("v1/Quizzes/findByDomain@domain=".concat(u));
                                    case 22:
                                        f = t.sent;
                                    case 23:
                                        m = f.data;
                                    case 24:
                                        i("loaded"), g = new Promise(function(t) {
                                            window.onmousemove = function() {
                                                t(), window.isActive = !0
                                            }
                                        }), d()(m, "questions", m.questions.filter(function(t) {
                                            return !t.disabled
                                        })), i("setQuestions", m.questions), Q()(m, "results.items") && d()(m, "results.items", m.results.items.filter(function(t) {
                                            return !t.disabled
                                        })), i("setResults", m.results), i("setInfo", m.info), i("setId", m.id), m.domain && i("setDomain", m.domain), !0 === m.isActive && i("setIsDemo"), "preview" === a.mode && i("setIsDemo"), Q()(m, "settings.customAnswerEndpoint") && i("setCustomAnswerEndpoint", m.settings.customAnswerEndpoint, {
                                            root: !0
                                        }), Q()(m, "readOnly.whiteLabelExpireAt") && i("setWhiteLabelDate", m.readOnly.whiteLabelExpireAt), Q()(m, "readOnly.leadFormDisableExpireAt") && i("setLeadFormDisable", m.readOnly.leadFormDisableExpireAt), Q()(m, "info.startPage.enabled", !1) || i("startQuiz"), Q()(m, "settings") && i("setSettings", m.settings), v = Q()(m, "settings.lng"), v || (v = Q()(m, "info.design.lng")), v && i("setLang", v, {
                                            root: !0
                                        }), b = Q()(m, "settings.currency"), b || (b = Q()(m, "info.marketing.discount.currency")), b && i("setCurrency", b), _ = [g], i("setUniqueAnalytic", Q()(m, "info.analytic.unique", !1)), w = Q()(m, "info.analytic.metrika.id"), w && _.push(n["default"].analytic.init({
                                            yaCounterId: w
                                        }, a.isDemo)), y = ["UA-113524925-1"], k = Q()(m, "info.analytic.ga.id"), k && y.push(k), y.length && _.push(n["default"].analytic.init({
                                            gaIds: y
                                        }, a.isDemo)), x = Q()(m, "info.analytic.fb.id"), x && _.push(n["default"].analytic.init({
                                            fb: x
                                        }, a.isDemo)), C = Q()(m, "info.analytic.vk.id"), C && _.push(n["default"].analytic.init({
                                            vk: C
                                        }, a.isDemo)), Promise.all(_).then(function() {
                                            o("analyticEvent", "marquiz-start")
                                        }), q = Q()(m, "info.analytic.roistat.id"), q && dt(q), m.info.marketing && o("setInitialDiscount", m.info.marketing);
                                    case 62:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    setInitialDiscount: function(t, e) {
                        var s = t.state,
                            n = t.getters,
                            i = t.commit;
                        if (e.discount && "melting" === e.discount.type) {
                            var a = 1e3,
                                o = Math.round(e.discount.value / 60 / n.countQuestions * 1.5);
                            0 === o && (o = 1, a = 1500);
                            var r = e.discount.value;
                            i("setDiscount", r), window.onblur = function() {
                                window.isActive = !1
                            }, mt.discountInterval = setInterval(function() {
                                window.isActive && (r = s.discount - o > 0 ? s.discount - o : 0, i("setDiscount", r), (0 === r || n.isLastStep) && clearInterval(mt.discountInterval))
                            }, a)
                        }
                        e.discount && "increasing" === e.discount.type && i("setDiscount", 0), e.discount && "increasingPercent" === e.discount.type && i("setDiscount", 0)
                    },
                    nextQuestion: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.getters,
                            i = t.dispatch;
                        if (n.getIsFilled || n.getQuestion.notRequired) {
                            !n.getIsFilled && n.getQuestion.notRequired && s("setAnswerValue", "");
                            var a = V()(n.activeQuestions, {
                                    id: n.getQuestion.id
                                }),
                                o = n.activeQuestions[a + 1];
                            if (o) {
                                var r = V()(e.questions, {
                                        id: n.getQuestion.id
                                    }),
                                    c = V()(e.questions, {
                                        id: o.id
                                    });
                                i("analyticEvent", "marquiz-step".concat(r + 1)), s("setActiveQuestion", c), i("calculateDiscount")
                            } else i("analyticEvent", "marquiz-step".concat(e.questions.length)), "beforeForm" === n.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                                n.isMultipleResults ? i("showResults") : i("showResult")
                            }, 2100)) : "afterForm" === n.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                                i("showLeadForm")
                            }, 2100)) : i("showLeadForm")
                        }
                    },
                    prevQuestion: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.getters,
                            i = t.dispatch,
                            a = V()(n.activeQuestions, {
                                id: n.getQuestion.id
                            }),
                            o = n.activeQuestions[a - 1],
                            r = V()(e.questions, {
                                id: o.id
                            });
                        s("setActiveQuestion", r), i("calculateDiscount")
                    },
                    showLeadForm: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.dispatch;
                        e.leadFormDisabled ? n("showDisableForm") : (s("showLeadForm"), n("calculateDiscount", !0), n("analyticEvent", "marquiz-form"))
                    },
                    showResults: function(t) {
                        var e = t.commit,
                            s = t.dispatch,
                            n = t.getters;
                        n.suitableResults.length < 2 ? s("showResult") : (e("showResults"), s("calculateDiscount", !0), s("analyticEvent", "marquiz-results"))
                    },
                    showResult: function(t) {
                        var e = t.state,
                            s = t.getters,
                            i = t.commit,
                            a = t.dispatch,
                            o = Q()(s, "result", {});
                        a("calculateDiscount", !0), a("analyticEvent", "marquiz-answer"), a("analyticEvent", "marquiz-result"), a("analyticEvent", "marquiz-result-".concat(o.id)), "afterForm" === s.resultsPosition && a("analyticEvent", "marquiz-finish"), "afterForm" !== s.resultsPosition && !e.leadFormDisabled || "redirect" !== o.type || !o.link ? i("showResult") : n["default"].redirect(o.link, {
                            contacts: {},
                            result: o
                        })
                    },
                    showDisableForm: function(t) {
                        var e = t.state,
                            s = t.getters,
                            i = t.commit,
                            a = t.dispatch;
                        if (e.leadFormDisabled) return !s.resultsPosition || e.isResultShow || e.isResultsShow ? Q()(e.info, "form.showMessengers", !1) && !A()(Q()(e.info, "form.chatBots")) ? (a("calculateDiscount", !0), void i("showLeadForm")) : void(Q()(e.info, "form.redirect") ? n["default"].redirect(Q()(e.info, "form.redirect")) : (a("calculateDiscount", !0), i("showLeadForm"), i("form/showThankPage", null, {
                            root: !0
                        }))) : (i("showResultLoader"), void setTimeout(function() {
                            s.isMultipleResults ? a("showResults") : a("showResult")
                        }, 2100))
                    },
                    calculateDiscount: function(t) {
                        var e, s = t.state,
                            n = t.getters,
                            i = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = Q()(s, "info.marketing.discount"),
                            r = n.activeQuestions.length,
                            c = s.leadForm || s.isResultShow || s.isResultsShow;
                        if (n.isIncreasingDiscount) e = c ? o.value : Math.round(o.value / r * (n.questionNumber - 1)), i("setDiscount", e);
                        else if (n.isIncreasingPercentDiscount) {
                            if (c) e = o.percent;
                            else {
                                var u = o.percent / r;
                                e = Math.floor(u * (n.questionNumber - 1) * 100) / 100
                            }
                            i("setDiscount", e)
                        }
                        a && (mt.discountInterval && clearInterval(mt.discountInterval), i("fixDiscount"))
                    },
                    setAnswer: function(t, e) {
                        var s = t.commit,
                            n = t.dispatch,
                            i = t.getters,
                            a = i.getQuestion;
                        s("setAnswerValue", e), (i.isVariantsQuestion && "one" === a.select && I()(a.answers, function(t) {
                            return t.title === e
                        }) && "one-image" !== a.type || "images" === a.type && "one" === a.select || "date" === a.type && !a.options.hasTime && i.getIsFilled) && setTimeout(function() {
                            n("nextQuestion")
                        }, 400)
                    },
                    analyticEvent: function(t, e) {
                        var s = t.state;
                        s.analyticUnique && n["default"].analytic.event("".concat(e, "_").concat(s.id)), n["default"].analytic.event(e)
                    }
                }
            },
            _t = s("6cd4"),
            wt = s.n(_t),
            yt = function() {
                var t = Object(c["a"])(regeneratorRuntime.mark(function t(e) {
                    var s, i, a;
                    return regeneratorRuntime.wrap(function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return s = e.answers2, i = e.raw, a = [], wt()(s, function(t, e) {
                                    f()(t.a) && wt()(t.a, function(t, o) {
                                        t instanceof File && a.push(n["default"].axiosFileUpload("../https@files.marquiz.ru/upload", t, "file").then(function(t) {
                                            s[e].a[o] = t.data.url, i[e].a[o] = t.data.url
                                        }))
                                    })
                                }), t.next = 6, Promise.all(a).catch(function(t) {
                                    console.log(t)
                                });
                            case 6:
                                return e.answers2 = s, e.raw = i, t.abrupt("return", e);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            kt = G.a.parse(window.location.search),
            xt = ["name", "phone", "email"],
            Ct = ["vk", "telegram", "whatsapp", "messenger", "skype", "viber", "instagram"],
            qt = {};
        xt.forEach(function(t) {
            kt[t] && (qt[t] = kt[t])
        }), Ct.forEach(function(t) {
            kt[t] && (qt[t] = kt[t])
        });
        var zt = [{
                key: "email",
                name: "Email",
                enabled: !0
            }, {
                key: "name",
                name: "Имя",
                enabled: !0
            }, {
                key: "phone",
                name: "Телефон",
                enabled: !0
            }],
            At = [],
            St = {
                namespaced: !0,
                state: {
                    isStep2: !1,
                    isMessengersPage: !1,
                    isThanksPage: !1,
                    contacts: qt,
                    contactTypes: xt,
                    messengerTypes: Ct,
                    fields1: [],
                    fields2: [],
                    answerId: null,
                    uuid: null,
                    isFilesUploading: !1
                },
                mutations: {
                    resetState: function(t) {
                        t.isStep2 = !1, t.isThanksPage = !1
                    },
                    showStep1: function(t) {
                        t.isStep2 = !1
                    },
                    showStep2: function(t) {
                        t.isStep2 = !0
                    },
                    setContacts: function(t, e) {
                        t.contacts = e
                    },
                    showMessengers: function(t) {
                        t.isMessengersPage = !0
                    },
                    hideMessengers: function(t) {
                        t.isMessengersPage = !1
                    },
                    showThankPage: function(t) {
                        t.isThanksPage = !0
                    },
                    setAnswerId: function(t, e) {
                        t.answerId = e
                    },
                    setFields: function(t, e) {
                        var s = e.fields1,
                            n = e.fields2,
                            i = s ? s.filter(function(t) {
                                return t.enabled
                            }) : [],
                            a = n ? n.filter(function(t) {
                                return t.enabled
                            }) : [];
                        i.length || (i = a, a = []), a.length || 1 !== i.length || "name" !== i[0].key || (i = []), i.length || a.length || (i = zt, a = At), t.fields1 = i, t.fields2 = a
                    },
                    setSession: function(t, e) {
                        var s = e.answerId,
                            n = e.uuid;
                        t.answerId = s, t.uuid = n
                    },
                    startUploadFiles: function(t) {
                        t.isFilesUploading = !0
                    },
                    finishUploadFiles: function(t) {
                        t.isFilesUploading = !1
                    }
                },
                getters: {},
                actions: {
                    saveLead: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t(e, s) {
                            var i, a, o, r, c;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.state, a = e.commit, o = e.rootState, s.contacts = i.contacts, s.clientId = i.uuid, i.fields2.length || (s.extra.notify = "now"), r = "v1/answers", o.customAnswerEndpoint && (r = o.customAnswerEndpoint), c = new Promise(function() {}), !i.answerId) {
                                            t.next = 11;
                                            break
                                        }
                                        c = n["default"].axios.patch("".concat(r, "default.htm").concat(i.answerId), s), t.next = 16;
                                        break;
                                    case 11:
                                        return a("startUploadFiles"), t.next = 14, yt(s);
                                    case 14:
                                        a("finishUploadFiles"), c = n["default"].axios.post(r, s);
                                    case 16:
                                        return c.then(function(t) {
                                            a("setAnswerId", t.data.id)
                                        }), t.abrupt("return", c);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            };
        n["default"].use(o["a"]);
        var It = {
                setLang: function(t, e) {
                    r["a"].changeLanguage(e), t.lang = e
                },
                setCustomAnswerEndpoint: function(t, e) {
                    t.customAnswerEndpoint = e
                }
            },
            Ot = new o["a"].Store({
                state: {
                    lang: "ru",
                    customAnswerEndpoint: null
                },
                mutations: It,
                modules: {
                    quiz: bt,
                    form: St
                }
            }),
            $t = Ot,
            Dt = s("3652"),
            Lt = s.n(Dt),
            Rt = s("2955"),
            Et = s.n(Rt),
            Ft = s("7618"),
            Tt = s("bc3a"),
            jt = s.n(Tt),
            Pt = {
                install: function(t) {
                    t.axios = t.prototype.$axios = jt.a.create({
                        baseURL: "../https@proxy3-api.marquiz.ru"
                    }), t.prototype.$axiosFileUpload = t.axiosFileUpload = function(e, s) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "file",
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if ("string" !== typeof e) throw new TypeError("Expected a string, got ".concat(Object(Ft["a"])(e)));
                        var a = new FormData;
                        return a.append(n, s), i && q()(i, function(t, e) {
                            a.append(e, t)
                        }), t.axios.post(e, a, {
                            headers: {
                                "Content-Type": "multipart/form-data; boundary=".concat(a._boundary)
                            }
                        })
                    }
                }
            },
            Mt = {
                install: function(t) {
                    t.directive("horizontal-scroll", {
                        inserted: function(t) {
                            t.onwheel = function(e) {
                                t.scrollLeft += 3 * e.deltaY, e.preventDefault()
                            }
                        }
                    })
                }
            },
            Qt = (s("a481"), s("d225")),
            Bt = s("b0b4"),
            Vt = s("0284"),
            Nt = s.n(Vt),
            Ht = s("b9ad"),
            Ut = s.n(Ht),
            Wt = function() {
                ! function(t, e, s, n, i, a, o) {
                    t.fbq || (i = t.fbq = function() {
                        i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
                    }, t._fbq || (t._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], a = e.createElement(s), a.async = !0, a.src = n, o = e.getElementsByTagName(s)[0], o.parentNode.insertBefore(a, o))
                }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
            },
            Gt = function(t) {
                return new Promise(function(e) {
                    ! function() {
                        var s = document.createElement("script");
                        s.type = "text/javascript", s.async = !0, s.src = "https:../vk.com/js/api/openapi.js@160", s.onload = function() {
                            VK.Retargeting.Init(t), VK.Retargeting.Hit(), e()
                        }, document.head.appendChild(s)
                    }()
                })
            },
            Jt = function() {
                function t(e) {
                    Object(Qt["a"])(this, t), this.vue = e, this.yaCounters = [], this.gaCounter = null, this.isProd = !0
                }
                return Object(Bt["a"])(t, [{
                    key: "event",
                    value: function(t) {
                        var e = this;
                        if (this.yaCounters.forEach(function(s) {
                            e.isProd ? window[s] && window[s].reachGoal(t) : console.info("Metrika event: ".concat(t), s)
                        }), this.gaCounter) {
                            var s = "./".concat(t.replace("-", "default.htm"));
                            this.isProd ? this.vue.$ga.page(s) : console.info("GA pageview: ".concat(s), this.gaCounter)
                        }
                        if (this.fb) {
                            var n = "ViewContent";
                            "marquiz-finish" !== t && "marquiz-contacts1" !== t && "marquiz-contacts2" !== t || (n = "Lead"), this.isProd ? this.fb.event(n, {
                                content_name: t
                            }) : console.log("FB pixel event", n, t)
                        }
                        this.vk && (this.isProd ? this.vk.Retargeting.Event(t) : console.log("VK pixel event", t))
                    }
                }, {
                    key: "hit",
                    value: function(t) {
                        var e = this;
                        this.yaCounters.forEach(function(s) {
                            e.isProd ? window[s] && window[s].hit(t) : console.info("Metrika page hit: ".concat(t), s)
                        })
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        var e = t.yaCounterId,
                            s = t.gaIds,
                            n = t.fb,
                            i = t.vk,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        a && (this.isProd = !1);
                        var o = [];
                        return e && o.push(this.initMetrika(e)), s && o.push(this.initGA(s)), n && o.push(this.initFB(n)), i && o.push(this.initVK(i)), Promise.all(o)
                    }
                }, {
                    key: "initMetrika",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            var n = e,
                                i = "yaCounter".concat(t);
                            if (!e.isProd) return n.yaCounters.push(i), console.info("Fake Metrika inited", t), void s();
                            (function(e, a, o) {
                                (a[o] = a[o] || []).push(function() {
                                    try {
                                        a[i] = new a.Ya.Metrika2({
                                            id: t,
                                            clickmap: !0,
                                            trackLinks: !0,
                                            accurateTrackBounce: !0,
                                            webvisor: !0,
                                            trackHash: !0
                                        }), n.yaCounters.push(i), s()
                                    } catch (e) {
                                        console.log(e)
                                    }
                                });
                                var r = e.getElementsByTagName("script")[0],
                                    c = e.createElement("script"),
                                    u = function() {
                                        r.parentNode.insertBefore(c, r)
                                    };
                                c.type = "text/javascript", c.async = !0, c.src = "https:../mc.yandex.ru/metrika/tag.js", "[object Opera]" === a.opera ? e.addEventListener("DOMContentLoaded", u, !1) : u()
                            })(document, window, "yandex_metrika_callbacks2")
                        })
                    }
                }, {
                    key: "initGA",
                    value: function(t) {
                        var e = this;
                        return this.gaCounter = t, this.isProd ? new Promise(function(s) {
                            e.vue.use(Nt.a, {
                                id: t,
                                ready: function() {
                                    s()
                                }
                            })
                        }) : (console.info("Fake ga inited", t), Promise.resolve())
                    }
                }, {
                    key: "initFB",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            if (!e.isProd) return console.info("Fake FB pixel inited", t), e.fb = !0, s();
                            Wt(), e.vue.use(Ut.a, {
                                debug: !e.isProd
                            }), e.vue.analytics.fbq.init(t), e.fb = e.vue.analytics.fbq, e.fb.event("PageView"), s()
                        })
                    }
                }, {
                    key: "initVK",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            if (!e.isProd) return console.info("Fake VK pixel inited", t), e.vk = !0, s();
                            Gt(t).then(function() {
                                e.vk = window.VK, s()
                            })
                        })
                    }
                }]), t
            }(),
            Kt = {
                install: function(t) {
                    t.prototype.$analytic = new Jt(t), t.analytic = t.prototype.$analytic
                }
            },
            Yt = {
                install: function(t) {
                    t.quizFrame = t.prototype.$quizFrame = {
                        postMessage: function(t) {
                            window.parent.postMessage(JSON.stringify(t), "*")
                        },
                        changeHeight: function(t, e) {
                            this.postMessage({
                                action: "setHeight",
                                id: t,
                                height: e
                            })
                        }
                    }
                }
            };
        s("4609");
        K.a.locale("ru");
        var Zt = function(t) {
                var e = t.translations,
                    s = t.lang;
                r["a"].init({
                    resources: e,
                    preload: ["ru", "en"],
                    lng: s,
                    nsSeparator: !1,
                    keySeparator: !1,
                    interpolation: {
                        prefix: "{",
                        suffix: "}",
                        format: function(t, e, s) {
                            if (e.split("|").length >= 2) {
                                var n = e.split(" | ");
                                return n.forEach(function(e, n) {
                                    var i = e.trim();
                                    t = r["a"].options.interpolation.format(t, i, s)
                                }), t
                            }
                            if ("bold" === e) return "<b>" + t + "</b>";
                            if ("rub" === e) return t + "₽";
                            if ("number" === typeof t || "number" === e.split(" ")[0]) {
                                var i = e.split(" ")[1];
                                return "number" !== e || i || (i = "0,0"), K()(t).format(i)
                            }
                        }
                    },
                    debug: !1
                }), r["a"].on("languageChanged", function(t) {})
            },
            Xt = {
                install: function(t, e) {
                    var s = e.lang,
                        n = e.translations;
                    Zt({
                        translations: n,
                        lang: s
                    }), r["a"].changeLanguage(s), t.prototype.$t = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e.lng = $t.state.lang, r["a"].t(t, e)
                    }, t.filter("translate", function(t) {
                        return r["a"].t(t)
                    })
                }
            },
            te = (s("7f7f"), s("741a")),
            ee = s.n(te),
            se = s("c54a"),
            ne = s.n(se),
            ie = {
                install: function(t) {
                    var e = {
                        url: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                s = Object.assign({
                                    cloud_name: "hgwipn3sa",
                                    secure: "https:" === window.location.protocol,
                                    dpr: ne()() ? "2.0" : "1.0",
                                    fetch_format: "auto",
                                    source: "upload"
                                }, e);
                            return t.provider ? ee()(t.name, s) : ee()("https:../marquiz.blob.core.windows.net/default.htm".concat(t.url), Object.assign(s, {
                                source: "fetch"
                            }))
                        }
                    };
                    t.prototype.$image = e
                }
            },
            ae = s("339e"),
            oe = s.n(ae),
            re = new oe.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0,
                headerLevelStart: 3
            }),
            ce = {
                number: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0,0";
                    return K()(t).format(e)
                },
                markdown: function(t) {
                    return re.makeHtml(t)
                },
                currency: function(t) {
                    var e = {
                        USD: "$",
                        RUR: "₽",
                        EUR: "€",
                        UAH: "₴",
                        BYB: "Br",
                        KZT: "₸",
                        CNY: "¥"
                    };
                    return Q()(e, t, "")
                },
                price: function(t, e) {
                    return e ? "".concat(this.number(t), " ").concat(this.currency(e)) : this.number(t, "0,0 $")
                }
            },
            ue = {
                install: function(t) {
                    t.prototype.$format = ce
                }
            },
            le = !1;

        function de(t) {
            t && t.focus && (le || t.focus())
        }
        var he, fe, me = {
                install: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            disabled: !1
                        },
                        s = e.disabled;
                    !0 === s && (le = !0), t.directive("focus", {
                        inserted: function(t) {
                            !1 !== le && de(t)
                        }
                    }), t.prototype.$focusInput = de, t.focusInput = de
                }
            },
            pe = s("8a30"),
            ge = s.n(pe),
            ve = s("1816"),
            be = s.n(ve),
            _e = !1,
            we = window,
            ye = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = e.contacts,
                    n = e.result,
                    i = String(t);
                i.indexOf("://") < 0 && (i = "http://".concat(i));
                var a = ["phone", "email", "name", "vk", "telegram", "skype", "whatsapp", "messenger", "viber"],
                    o = !1;
                s && a.forEach(function(t) {
                    s[t] && (ge()(i, "{".concat(t, "}")) && (o = !0), i = v()(i, "{".concat(t, "}"), s[t]))
                }), n && (ge()(i, "{result}") && (o = !0), i = v()(i, "{result}", n.id));
                var r = new be.a(i, "", !0),
                    c = r.query;
                if (!o) {
                    for (var u in s) c["marquiz_".concat(u)] = s[u];
                    n && (c.result = n.id)
                }
                return r.set("query", c), _e ? console.log("Marquiz redirect", r.href) : we.top.location.href = r.href, i
            },
            ke = {
                install: function(t, e) {
                    e && (e.dummy && (_e = !0), e.window && (we = e.window)), t.redirect = ye, t.prototype.$redirect = ye
                }
            },
            xe = s("bf0f"),
            Ce = s.n(xe),
            qe = function() {
                var t = G.a.parse(window.location.search),
                    e = t.cookies ? JSON.parse(t.cookies) : {},
                    s = Q()(e, "_ga");
                s && ft.a.set("_ga", s)
            },
            ze = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("span", {
                    staticClass: "svg-icon"
                }, ["upload" === t.name ? s("svg", {
                    staticClass: "svg-icon_upload",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "35.629",
                        height: "35.629",
                        viewBox: "0 0 35.629 35.629"
                    }
                }, [s("g", {
                    attrs: {
                        id: "upload",
                        transform: "translate(1.5 1.5)"
                    }
                }, [s("path", {
                    attrs: {
                        id: "Path_251",
                        d: "M35.629 15v7.251A3.625 3.625 0 0 1 32 25.876H6.625A3.625 3.625 0 0 1 3 22.251V15",
                        "data-name": "Path 251",
                        transform: "translate(-3 6.753)"
                    }
                }), s("path", {
                    attrs: {
                        id: "Path_252",
                        d: "M25.127 12.064L16.064 3 7 12.064",
                        "data-name": "Path 252",
                        transform: "translate(.251 -3)"
                    }
                }), s("path", {
                    attrs: {
                        id: "Line_86",
                        d: "M0 0v21.753",
                        "data-name": "Line 86",
                        transform: "translate(16.315)"
                    }
                })])]) : t._e(), "loading" === t.name ? s("svg", {
                    staticClass: "svg-icon_loading",
                    attrs: {
                        version: "1.1",
                        id: "L5",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 100 100",
                        "enable-background": "new 0 0 0 0",
                        "xml:space": "preserve"
                    }
                }, [s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "6",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 15 ; 0 -15; 0 15",
                        repeatCount: "indefinite",
                        begin: "0.1"
                    }
                })], 1), s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "30",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 10 ; 0 -10; 0 10",
                        repeatCount: "indefinite",
                        begin: "0.2"
                    }
                })], 1), s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "54",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 5 ; 0 -5; 0 5",
                        repeatCount: "indefinite",
                        begin: "0.3"
                    }
                })], 1)]) : t._e()])
            },
            Ae = [],
            Se = {
                props: {
                    color: String,
                    name: {
                        type: String,
                        required: !0
                    }
                }
            },
            Ie = Se,
            Oe = (s("f1ad"), s("2877")),
            $e = Object(Oe["a"])(Ie, ze, Ae, !1, null, null, null),
            De = $e.exports,
            Le = s("cdae"),
            Re = (s("5abe"), s("dfa4"), s("98f9"), s("7452"), s("5b6c")),
            Ee = s.n(Re),
            Fe = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "app",
                    style: t.styles,
                    attrs: {
                        id: "app"
                    }
                }, [t.loaded ? s("Layout", [t.quizStarted ? t._e() : s("div", {
                    staticClass: "app__start-page"
                }, [s("StartPage")], 1), t.quizStarted ? s("Quiz") : t._e()], 1) : t._e(), t.isShowWelcomePage ? t._e() : [t.isLoading ? s("div", {
                    staticClass: "app__loading"
                }) : t._e(), t.notFound ? s("div", {
                    staticClass: "app__not-found"
                }, [s("div", {
                    staticClass: "app__emoji"
                }, [t._v("4️⃣ 0️⃣ 4️⃣")]), t._v(t._s(t.$t("такой квиз не существует!!!!")) + " 🙄")]) : t._e(), t.loadingError ? s("div", {
                    staticClass: "app__loading-error"
                }, [s("p", [t._v(t._s(t.$t("не удалось загрузить тест")) + "..")]), s("div", {
                    staticClass: "app__emoji"
                }, [t._v("🤒")])]) : t._e(), "agreement" === t.$route.path ? s("router-view") : t._e()], t.isShowWelcomePage ? s("Welcome") : t._e(), t.isVkGroupAdmin ? s("button", {
                    staticClass: "app__edit button is-small",
                    on: {
                        click: function(e) {
                            t.isEditMode = !0
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "pencil"
                    }
                })], 1) : t._e(), t.isEditMode ? s("b-modal", {
                    attrs: {
                        active: t.isEditMode
                    },
                    on: {
                        "update:active": function(e) {
                            t.isEditMode = e
                        }
                    }
                }, [s("div", {
                    staticClass: "card"
                }, [s("div", {
                    staticClass: "card-content"
                }, [s("Install", {
                    attrs: {
                        quizId: t.quizId,
                        request: t.request,
                        quizTitle: t.info.name || t.info.title
                    },
                    on: {
                        changed: t.closeAndReload
                    }
                })], 1)])]) : t._e(), "preview" === t.mode ? s("PreviewController") : t._e()], 2)
            },
            Te = [],
            je = s("3065"),
            Pe = s.n(je),
            Me = s("5308"),
            Qe = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "layout"
                }, [t._t("default")], 2)
            },
            Be = [],
            Ve = (s("895a"), {}),
            Ne = Object(Oe["a"])(Ve, Qe, Be, !1, null, null, null),
            He = Ne.exports,
            Ue = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "quiz",
                    staticClass: "quiz-container"
                }, [t.leadForm || t.isResultsShow || t.isResultShow || t.isResultLoaderShow ? t._e() : s("div", {
                    staticClass: "quiz",
                    class: {
                        quiz_sidebar_on: t.showRightSidebar
                    }
                }, [t.getQuestion ? s("div", {
                    staticClass: "quiz__questions"
                }, [s("div", {
                    staticClass: "quiz__questions-header"
                }, [s("h3", {
                    staticClass: "quiz__title"
                }, [s("b-icon", {
                    staticClass: "quiz__title-icon",
                    attrs: {
                        icon: "file-document-box-check-outline"
                    }
                }), t._v(t._s(t.info.title))], 1), s("hr", {
                    staticClass: "quiz__title-separator"
                }), t.bonuses.length || t.discount ? s("div", {
                    staticClass: "quiz__sidebar-mobile"
                }, [s("SidebarMobile", {
                    attrs: {
                        bonuses: t.bonuses,
                        countQuestions: t.questions.length,
                        discount: t.discount,
                        autoshow: !t.get(t.info, "startPage.enabled", !1)
                    }
                })], 1) : t._e(), t.getQuestion ? [s("div", {
                    staticClass: "title quiz__question-title"
                }, [t._v(t._s(t.getQuestion.title)), s("br"), s("div", {
                    staticClass: "quiz__tags"
                }, [t.getCanMany ? s("b-tag", {
                    staticClass: "quiz__tag quiz__tag_many",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [s("div", {
                    staticClass: "quiz__tag-icon"
                }, [s("b-icon", {
                    attrs: {
                        icon: "check-circle",
                        customSize: "mdi-16px"
                    }
                })], 1), t._v(t._s(t.$t("выберите один или несколько")))]) : t._e(), t.getNotRequired ? s("b-tag", {
                    staticClass: "quiz__tag quiz__tag_skip",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [t._v(t._s(t.$t("можно пропустить")))]) : t._e()], 1)]), t.showRightSidebar ? s("div", {
                    staticClass: "quiz__sidebar-inner"
                }, [t.discount ? s("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), t.getQuestion.text ? s("AssistantMobile", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e()], 1) : t._e()] : t._e()], 2), s("transition", {
                    attrs: {
                        mode: "out-in"
                    },
                    on: {
                        leave: t.leave,
                        beforeEnter: t.beforeEnter,
                        enter: t.enter,
                        afterEnter: t.afterEnter
                    }
                }, [s("keep-alive", t._l(t.questions, function(e, n) {
                    return n === t.activeQuestion ? s("Question", {
                        key: e.id,
                        ref: "question",
                        refInFor: !0,
                        staticClass: "quiz__question",
                        attrs: {
                            question: e,
                            id: e.id
                        }
                    }) : t._e()
                }), 1)], 1), t.isWhiteLabelActive ? t._e() : s("div", {
                    staticClass: "quiz__whitelabel quiz__whitelabel_mobile"
                }, [s("WhiteLabel")], 1), s("div", {
                    staticClass: "quiz__buttons"
                }, [s("QuizButtons", {
                    attrs: {
                        "passed-percent": t.getPassedPercent,
                        "active-question": t.activeQuestion,
                        "not-required": t.getNotRequired,
                        "is-last": t.isLastStep,
                        filled: t.getIsFilled,
                        "white-label": !t.showRightSidebar
                    },
                    on: {
                        previous: t.prevQuestion,
                        next: t.nextQuestion,
                        "show-lead": t.nextQuestion
                    }
                })], 1)], 1) : t._e(), t.getQuestion && t.showRightSidebar ? s("div", {
                    staticClass: "quiz__sidebar"
                }, [t.discount ? s("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), t.getQuestion.text ? s("Assistant", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e(), t.bonuses.length ? s("Bonuses", {
                    staticClass: "quiz__bonuses",
                    attrs: {
                        height: 64
                    }
                }) : t._e(), t.isWhiteLabelActive ? t._e() : s("div", {
                    staticClass: "quiz__whitelabel"
                }, [s("WhiteLabel")], 1)], 1) : t._e(), t.showRightSidebar || t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                    staticClass: "quiz__whitelabel_fixed-bottom"
                })], 1), t.isResultLoaderShow ? s("div", {
                    staticClass: "quiz__result-loader"
                }, [s("ResultLoader")], 1) : t._e(), t.isResultsShow ? s("div", {
                    staticClass: "quiz__results"
                }, [s("Results")], 1) : t._e(), t.isResultShow ? s("div", {
                    staticClass: "quiz__result"
                }, [t.isEmpty(t.result) ? s("div", {
                    staticClass: "quiz__empty-result"
                }, [t._v(t._s(t.$t("Мы не смогли рассчитать для вас результат")) + " 😢"), s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            return t.$store.commit("quiz/startQuiz")
                        }
                    }
                }, [t._v(t._s(t.$t("Попробовать ещё раз")))])]) : t._e(), t.isEmpty(t.result) ? t._e() : s("Result")], 1) : t._e(), t.leadForm ? s("div", {
                    staticClass: "quiz__lead-form"
                }, [t.bonuses.length ? s("FinalPageV2") : s("FinalPage")], 1) : t._e()])
            },
            We = [],
            Ge = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "assistant",
                    class: {
                        "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint
                    }
                }, [t.hasAssistant ? s("div", {
                    staticClass: "assistant__person"
                }, [s("div", {
                    staticClass: "assistant__avatar"
                }, [t.imageUrl ? s("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), s("div", {
                    staticClass: "assistant__avatar-badge"
                })]), s("div", {
                    staticClass: "assistant__name"
                }, [s("p", {
                    staticClass: "assistant__title"
                }, [t._v(t._s(t.assistant.name))]), t.assistant.title ? s("p", {
                    staticClass: "assistant__subtitle"
                }, [s("span", [t._v(t._s(t.assistant.title))])]) : t._e()])]) : t._e(), t.hint && t.hint.title ? s("div", {
                    staticClass: "assistant__text-title"
                }, [t._v(t._s(t.hint.title))]) : t._e(), s("transition", {
                    attrs: {
                        name: t.hint ? "animation-hint" : "animation-comment",
                        mode: "out-in",
                        appear: ""
                    }
                }, [t.text || t.hint ? s("div", {
                    key: t.textHtml,
                    staticClass: "assistant__block"
                }, [t.hasAssistant ? s("div", {
                    staticClass: "assistant__text-arrow"
                }) : t._e(), s("div", {
                    staticClass: "assistant__text",
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })]) : t._e()])], 1)
            },
            Je = [],
            Ke = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14.257 8.127"
                    }
                }, [s("defs"), s("g", {
                    staticClass: "cls-1",
                    attrs: {
                        id: "arrow-point-to-right_1_",
                        "data-name": "arrow-point",
                        transform: "rotate(-90 52.633 52.633)"
                    }
                }, [s("path", {
                    attrs: {
                        id: "Path_4",
                        d: "M104.973 7.834l-6.13 6.13a1 1 0 0 1-1.412-1.412l5.424-5.424L97.431 1.7A1 1 0 0 1 98.843.292l6.13 6.13a1 1 0 0 1 0 1.412z",
                        "data-name": "Path 4"
                    }
                })])])
            },
            Ye = [],
            Ze = {
                name: "ArrowPoint"
            },
            Xe = Ze,
            ts = (s("0287"), Object(Oe["a"])(Xe, Ke, Ye, !1, null, "14468613", null)),
            es = ts.exports,
            ss = new oe.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0
            }),
            ns = {
                components: {
                    ArrowShow: es
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", {
                    activeQuestion: function(t) {
                        return t.activeQuestion
                    }
                }), Object(o["c"])("quiz", {
                    question: "getQuestion",
                    countQuestions: "countQuestions"
                }), {
                    hasAssistant: function() {
                        return !!this.assistant.name
                    },
                    imageUrl: function() {
                        var t = this.assistant.avatar;
                        t || (t = {
                            name: "avatar",
                            provider: "cloudinary"
                        });
                        var e = "cloudinary" === t.provider ? t.name : "../https@marquiz.blob.core.windows.net/default.htm".concat(t.url),
                            s = {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === t.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 70,
                                height: 70,
                                crop: "fill",
                                gravity: "face",
                                dpr: ne()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            };
                        return ee()(e, s)
                    },
                    textHtml: function() {
                        return this.hint ? ss.makeHtml(this.hint.text) : ss.makeHtml(this.text)
                    }
                })
            },
            is = ns,
            as = (s("222e"), Object(Oe["a"])(is, Ge, Je, !1, null, null, null)),
            os = as.exports,
            rs = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "assistant-mobile",
                    class: {
                        "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint, "is-expanded": t.expanded, "has-more": t.hasMore
                    }
                }, [t.text ? n("div", {
                    staticClass: "assistant-mobile__block",
                    on: {
                        click: t.toggleText
                    }
                }, [t.hasAssistant ? n("div", {
                    staticClass: "assistant-mobile__person"
                }, [n("div", {
                    staticClass: "assistant-mobile__avatar"
                }, [t.imageUrl ? n("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), t.imageUrl ? t._e() : n("img", {
                    attrs: {
                        src: t.avatar
                    }
                })])]) : t._e(), n("div", {
                    ref: "textContainer",
                    staticClass: "assistant-mobile__text-container"
                }, [n("div", {
                    ref: "text",
                    staticClass: "assistant-mobile__text"
                }, [t.hint ? t._e() : n("div", {
                    staticClass: "assistant-mobile__name"
                }, [n("p", {
                    staticClass: "assistant-mobile__title"
                }, [t._v(t._s(t.getFirstName(t.assistant.name)))]), t.assistant.title ? n("p", {
                    staticClass: "assistant-mobile__subtitle"
                }, [n("span", {
                    staticClass: "assistant-mobile__status"
                }), n("span", [t._v(t._s(t.assistant.title))])]) : t._e(), t.hasMore ? n("img", {
                    staticClass: "assistant-mobile__arrow",
                    attrs: {
                        src: s("896a")
                    }
                }) : t._e()]), t.hint ? n("div", {
                    staticClass: "assistant-mobile__header"
                }, [t._v(t._s(t.hint.title)), n("b-icon", {
                    staticClass: "assistant-mobile__arrow",
                    attrs: {
                        icon: "close"
                    }
                })], 1) : t._e(), n("transition", {
                    key: t.activeQuestion,
                    attrs: {
                        name: "slide-fade",
                        mode: "out-in"
                    },
                    on: {
                        enter: t.reinit
                    }
                }, [n("div", {
                    key: t.activeQuestion,
                    ref: "assistantText",
                    staticClass: "assistant-mobile__text-html"
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })])])], 1)])]) : t._e()])
            },
            cs = [],
            us = s("2171"),
            ls = s.n(us),
            ds = {
                extends: os,
                mounted: function() {
                    this.setLineClamp()
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                data: function() {
                    return {
                        hasMore: !1,
                        expanded: !1,
                        clampedText: null
                    }
                },
                computed: {
                    lines: function() {
                        return this.hasAssistant ? 1 : 2
                    }
                },
                methods: {
                    getFirstName: function(t) {
                        return t.split(" ")[0]
                    },
                    toggleText: function() {
                        this.hint ? this.closeHint() : (this.expanded = !this.expanded, this.expanded ? this.$refs.assistantText.innerHTML = this.textHtml : this.$refs.assistantText.innerHTML = this.clampedText)
                    },
                    closeHint: function() {
                        this.expanded = !1, this.$store.commit("quiz/showHint")
                    },
                    setLineClamp: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.$refs.assistantText && (t.hasMore = ls()(t.$refs.assistantText, t.lines), t.clampedText = t.$refs.assistantText.innerHTML)
                        })
                    },
                    reinit: function() {
                        this.hasMore = !1, this.expanded = !1, this.clampedText = null, this.setLineClamp()
                    }
                },
                watch: {
                    hint: function(t) {
                        t && (this.expanded = !0)
                    }
                }
            },
            hs = ds,
            fs = (s("0d14"), Object(Oe["a"])(hs, rs, cs, !1, null, null, null)),
            ms = fs.exports,
            ps = s("dfbf"),
            gs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "question",
                    class: ["question_" + t.question.type]
                }, [!t.question.type || "answers" === t.question.type && !t.hasImages || "variants" === t.question.type ? s("Variants", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        hasOther: !!t.question.other
                    }
                }) : t._e(), "one-image" === t.question.type ? s("OneImage", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        hasOther: !!t.question.other,
                        startText: t.question.options.startText,
                        defaultImage: t.question.options.defaultImage
                    }
                }) : t._e(), "images" === t.question.type || "answers" === t.question.type && t.hasImages ? s("Images", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        type: t.question.options.imageType
                    }
                }) : t._e(), "input" === t.question.type ? s("InputAnswer", {
                    key: t.componentKey,
                    attrs: {
                        options: t.question.options
                    }
                }) : t._e(), "select" === t.question.type ? s("SelectAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "date" === t.question.type ? s("DateAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "slider" === t.question.type ? s("SliderAnswer", {
                    key: t.componentKey,
                    attrs: {
                        isRange: t.get(t.question, "options.isRange"),
                        min: Number(t.get(t.question, "options.range.min") || 0),
                        max: Number(t.get(t.question, "options.range.max") || 100),
                        step: Number(t.get(t.question, "options.range.step"))
                    }
                }) : t._e(), "file" === t.question.type ? s("FileAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e()], 1)
            },
            vs = [],
            bs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "answers",
                    staticClass: "answer-variants"
                }, [s("div", {
                    staticClass: "answer-variants__group",
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e) {
                    return s("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-variants__textVariant",
                        class: {
                            "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                        }
                    }, ["one" === t.select ? s("b-radio", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1) : t._e(), "many" === t.select ? s("b-checkbox", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1) : t._e()], 1)
                }), t.hasOther ? s("div", {
                    staticClass: "answer-variants__textVariant answer-variants__other"
                }, ["one" === t.select ? s("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), "many" === t.select ? s("b-checkbox", {
                    attrs: {
                        value: !!t.other
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), s("b-field", [s("b-input", {
                    attrs: {
                        placeholder: t.$t("Другое") + "..."
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1) : t._e()], 2)])
            },
            _s = [],
            ws = s("ceac"),
            ys = s.n(ws),
            ks = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer",
                    class: {
                        answer_checked: t.checked
                    }
                }, [s("div", {
                    staticClass: "answer__title"
                }, [t._v(t._s(t.answer.title) + " "), t.answer.hint ? s("Hint", {
                    staticClass: "answer__hint",
                    attrs: {
                        answer: t.answer
                    }
                }) : t._e()], 1)])
            },
            xs = [],
            Cs = function() {
                return s.e("popover").then(s.bind(null, "2cc6"))
            },
            qs = {
                components: {
                    Hint: Cs
                },
                props: {
                    answer: {
                        type: Object
                    },
                    checked: {
                        type: Boolean
                    }
                }
            },
            zs = qs,
            As = (s("2c09"), Object(Oe["a"])(zs, ks, xs, !1, null, null, null)),
            Ss = As.exports,
            Is = {
                components: {
                    Answer: Ss
                },
                data: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    return {
                        val: t,
                        other: this.getOtherValue(t)
                    }
                },
                props: {
                    answers: Array,
                    select: String,
                    hasOther: Boolean
                },
                computed: {
                    otherIndex: function() {
                        return this.getOtherIndex(this.val)
                    },
                    otherValue: function() {
                        return this.getOtherValue(this.val)
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getOtherIndex: function(t) {
                        var e, s = ys()(t, E()(this.answers, "title"));
                        return e = s.length ? P()(t, s[0]) : null, e
                    },
                    getOtherValue: function(t) {
                        if ("one" === this.select) return ge()(E()(this.answers, "title"), t) ? null : t;
                        if (!t) return null;
                        var e = this.getOtherIndex(t);
                        return t && e >= 0 ? t[e] : null
                    },
                    setOtherVal: function(t) {
                        "one" === this.select ? this.val = t : null !== this.otherIndex ? t ? this.val[this.otherIndex] = t : this.val.splice(this.otherIndex, 1) : this.val.push(t)
                    },
                    isChecked: function(t) {
                        var e = !1;
                        return this.val && (e = "one" === this.select ? this.val === t : P()(this.val, t) >= 0), e
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    isOther: function(t) {
                        var e = !0;
                        return e = "one" === this.select ? P()(E()(this.answers, "title"), t) >= 0 : ys()(this.val, E()(this.answers, "title")), e
                    },
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    }
                }),
                watch: {
                    other: function(t) {
                        null !== t && this.setOtherVal(t)
                    },
                    val: function(t) {
                        t && this.other && "one" === this.select && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Os = Is,
            $s = (s("5ad8"), Object(Oe["a"])(Os, bs, _s, !1, null, null, null)),
            Ds = $s.exports,
            Ls = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "answers",
                    staticClass: "answer-one-image"
                }, [s("div", {
                    staticClass: "answer-one-image__group",
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e) {
                    return s("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-one-image__textVariant",
                        class: {
                            "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                        }
                    }, [s("b-radio", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1)], 1)
                }), t.hasOther ? s("div", {
                    staticClass: "answer-one-image__textVariant answer-one-image__other"
                }, [s("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }), s("b-field", [s("b-input", {
                    attrs: {
                        placeholder: t.$t("Другое") + "..."
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1) : t._e(), s("div", {
                    staticStyle: {
                        height: "0.5rem"
                    }
                })], 2), s("div", {
                    staticClass: "answer-one-image__image"
                }, [t.imageUrl ? s("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.imgLoaded,
                        expression: "imgLoaded"
                    }],
                    ref: "img",
                    staticClass: "answer-image__img",
                    attrs: {
                        src: t.imageUrl
                    },
                    on: {
                        load: t.showImage
                    }
                }) : t._e(), t.imageUrl && !t.imgLoaded ? s("div", {
                    staticClass: "answer-one-image__dummy-loading"
                }) : t._e(), t.imageUrl ? t._e() : s("div", {
                    staticClass: "answer-one-image__dummy"
                }, [t._v(t._s(t.dummyText))])])])
            },
            Rs = [],
            Es = s("63ea"),
            Fs = s.n(Es),
            Ts = {
                components: {
                    Answer: Ss
                },
                data: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    return f()(t) && (t = null), {
                        val: t,
                        other: this.getOtherValue(t),
                        imgLoaded: !1
                    }
                },
                props: {
                    answers: Array,
                    hasOther: Boolean,
                    startText: String,
                    defaultImage: Object
                },
                computed: {
                    otherIndex: function() {
                        return this.getOtherIndex(this.val)
                    },
                    otherValue: function() {
                        return this.getOtherValue(this.val)
                    },
                    activeImage: function() {
                        if (!A()(this.defaultImage) && !this.val) return this.defaultImage;
                        if (!this.val) return null;
                        var t = I()(this.answers, {
                            title: this.val
                        });
                        return t ? A()(t.image) && !A()(this.defaultImage) ? this.defaultImage : t.image : null
                    },
                    imageUrl: function() {
                        if (!this.activeImage) return null;
                        var t = "cloudinary" === this.activeImage.provider ? this.activeImage.name : "../https@marquiz.blob.core.windows.net/default.htm".concat(this.activeImage.url),
                            e = {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === this.activeImage.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 380,
                                height: 307,
                                crop: "fill",
                                dpr: ne()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            };
                        return ee()(t, e)
                    },
                    dummyText: function() {
                        return !this.val && this.startText ? this.startText : !this.val && document.body.clientWidth <= 767 ? this.$t("Выберите вариант ответа снизу") : this.val ? this.otherValue ? this.val : this.imageUrl ? "" : this.val : this.$t("Выберите вариант ответа слева")
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getOtherIndex: function(t) {
                        var e, s = ys()(t, E()(this.answers, "title"));
                        return e = s.length ? P()(t, s[0]) : null, e
                    },
                    getOtherValue: function(t) {
                        return ge()(E()(this.answers, "title"), t) ? null : t
                    },
                    setOtherVal: function(t) {
                        this.val = t
                    },
                    isChecked: function(t) {
                        return this.val === t
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    isOther: function(t) {
                        return P()(E()(this.answers, "title"), t) >= 0
                    },
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    },
                    showImage: function() {
                        this.imgLoaded = !0
                    }
                }),
                watch: {
                    other: function(t) {
                        null !== t && this.setOtherVal(t)
                    },
                    val: function(t) {
                        t && this.other && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    },
                    activeImage: function(t, e) {
                        Fs()(t, e) || (this.imgLoaded = !1)
                    }
                }
            },
            js = Ts,
            Ps = (s("c06f"), Object(Oe["a"])(js, Ls, Rs, !1, null, null, null)),
            Ms = Ps.exports,
            Qs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "input-question"
                }, [s("b-field", [s("b-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.options ? t.options.placeholder : null,
                        size: "is-large"
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                })], 1)], 1)
            },
            Bs = [],
            Vs = {
                props: {
                    options: Object
                },
                mounted: function() {
                    "inline" === this.mode && 0 === this.activeQuestion || this.$focusInput(this.$refs.input)
                },
                data: function() {
                    return {
                        val: this.$store.getters["quiz/getAnswerValue"]
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["mode", "activeQuestion"])),
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"])),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Ns = Vs,
            Hs = Object(Oe["a"])(Ns, Qs, Bs, !1, null, null, null),
            Us = Hs.exports,
            Ws = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-select"
                }, [s("b-field", [s("b-select", {
                    attrs: {
                        placeholder: t.question.options.placeholder,
                        size: "is-large",
                        multiple: "many" === t.question.select
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, t._l(t.question.answers, function(e) {
                    return s("option", {
                        key: e.id,
                        domProps: {
                            value: e.title
                        }
                    }, [t._v(t._s(e.title))])
                }), 0)], 1)], 1)
            },
            Gs = [],
            Js = {
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        val: this.$store.getters["quiz/getAnswerValue"]
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"])),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Ks = Js,
            Ys = (s("4ad0"), Object(Oe["a"])(Ks, Ws, Gs, !1, null, null, null)),
            Zs = Ys.exports,
            Xs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-slider"
                }, [s("b-field", [s("div", {
                    staticClass: "answer-slider__container"
                }, [s("div", {
                    staticClass: "answer-slider__limit"
                }, [t._v(t._s(t.$format.number(t.min)))]), s("vue-slider", {
                    attrs: {
                        height: "10",
                        min: t.min || 0,
                        max: t.max || 100,
                        "bg-style": t.bgStyle,
                        formatter: t.$format.number,
                        "process-style": t.processStyle,
                        "tooltip-style": t.tooltipStyle,
                        interval: t.step || 1
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), s("div", {
                    staticClass: "answer-slider__limit"
                }, [t._v(t._s(t.$format.number(t.max)))])], 1)])], 1)
            },
            tn = [],
            en = s("6f79"),
            sn = s.n(en),
            nn = {
                components: {
                    VueSlider: sn.a
                },
                props: {
                    isRange: {
                        type: Boolean,
                        default: !1
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    step: {
                        type: Number,
                        default: 1
                    }
                },
                created: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    t && 0 !== t.length ? this.value = this.isRange ? [t.from, t.to] : t : this.value = this.defaultValue
                },
                data: function() {
                    return {
                        value: null,
                        bgStyle: {
                            backgroundColor: "var(--color-lighten)"
                        },
                        processStyle: {
                            backgroundColor: "var(--color)"
                        },
                        tooltipStyle: {
                            backgroundColor: "var(--color)",
                            borderColor: "var(--color)"
                        }
                    }
                },
                computed: {
                    defaultValue: function() {
                        return this.isRange ? [Math.floor(this.min + .25 * (this.max - this.min)), Math.floor(this.min + .75 * (this.max - this.min))] : Math.floor((this.min + this.max) / 2)
                    }
                },
                watch: {
                    value: function(t) {
                        this.isRange ? this.$store.dispatch("quiz/setAnswer", {
                            from: t[0],
                            to: t[1]
                        }) : this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            an = nn,
            on = (s("3cf9"), Object(Oe["a"])(an, Xs, tn, !1, null, null, null)),
            rn = on.exports,
            cn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-file"
                }, [s("b-tag", {
                    staticClass: "answer-file__limit"
                }, [t._v("10MB max")]), s("b-field", [s("b-upload", {
                    attrs: {
                        "drag-drop": "",
                        multiple: t.isMultiple
                    },
                    on: {
                        input: t.validateFiles
                    },
                    model: {
                        value: t.files,
                        callback: function(e) {
                            t.files = e
                        },
                        expression: "files"
                    }
                }, [s("section", {
                    staticClass: "section"
                }, [s("div", {
                    staticClass: "content has-text-centered"
                }, [s("p", [s("SvgIcon", {
                    staticClass: "answer-file__icon",
                    attrs: {
                        name: "upload"
                    }
                })], 1), s("div", {
                    staticClass: "answer-file__header"
                }, [t._v(t._s(t.$t("Нажмите, чтобы загрузить файл")))]), s("div", {
                    staticClass: "answer-file__text"
                }, [t._v(t._s(t.$t("Или перетяните его из папки в это поле")))])])])])], 1), s("div", {
                    staticClass: "tags"
                }, t._l(t.files, function(e, n) {
                    return s("span", {
                        key: n,
                        staticClass: "answer-file__file-tag tag is-primary"
                    }, [t._v(t._s(e.name)), s("button", {
                        staticClass: "delete is-small",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return t.deleteDropFile(n)
                            }
                        }
                    })])
                }), 0)], 1)
            },
            un = [],
            ln = 10,
            dn = {
                components: {
                    SvgIcon: De
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        files: this.isMultiple ? [] : null,
                        errors: []
                    }
                },
                computed: {
                    fileType: function() {
                        return Q()(this.question, "options.fileType", null)
                    },
                    isMultiple: function() {
                        return "many" === Q()(this.question, "select")
                    }
                },
                methods: {
                    deleteDropFile: function(t) {
                        this.$delete(this.files, t)
                    },
                    validateFiles: function(t) {
                        var e = this;
                        if (t) {
                            this.errors = [];
                            var s = [],
                                n = t;
                            f()(n) || (n = [t]), wt()(n, function(t) {
                                t.size > 1024 * ln * 1024 ? e.showMessage(e.$t("Файл {name} слишком большой", {
                                    name: t.name
                                })) : s.push(t)
                            }), this.files = s
                        }
                    },
                    showMessage: function(t) {
                        this.$snackbar.open({
                            message: t,
                            type: "is-danger",
                            position: "is-bottom-right",
                            indefinite: !0,
                            duration: 5e3,
                            queue: !1
                        })
                    }
                },
                watch: {
                    files: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            hn = dn,
            fn = (s("64ea"), Object(Oe["a"])(hn, cn, un, !1, null, null, null)),
            mn = fn.exports,
            pn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "date-question"
                }, [t.isRange ? t._e() : s("b-field", {
                    staticClass: "date-question__field",
                    class: {
                        "has-time": t.hasTime
                    }
                }, [s("b-datepicker", {
                    staticClass: "is-not-range",
                    attrs: {
                        inline: "",
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.question.options.placeholder,
                        readonly: !1,
                        "first-day-of-week": 1,
                        size: "is-small"
                    },
                    model: {
                        value: t.date,
                        callback: function(e) {
                            t.date = e
                        },
                        expression: "date"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker is-not-range",
                    attrs: {
                        icon: "clock"
                    },
                    model: {
                        value: t.time,
                        callback: function(e) {
                            t.time = e
                        },
                        expression: "time"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.time = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.time = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1), t.isRange ? s("b-field", [s("div", {
                    staticClass: "date-question__container"
                }, [s("div", {
                    staticClass: "date-question__range"
                }, [s("div", {
                    staticClass: "date-question__date"
                }, [s("b-datepicker", {
                    ref: "from",
                    attrs: {
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.$t("От"),
                        icon: "calendar-today",
                        readonly: !1,
                        "mobile-native": !1,
                        "first-day-of-week": 1
                    },
                    model: {
                        value: t.from,
                        callback: function(e) {
                            t.from = e
                        },
                        expression: "from"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker",
                    attrs: {
                        icon: "clock"
                    },
                    model: {
                        value: t.timeFrom,
                        callback: function(e) {
                            t.timeFrom = e
                        },
                        expression: "timeFrom"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.timeFrom = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.timeFrom = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1), s("span", {
                    staticStyle: {
                        "margin-top": "10px"
                    }
                }, [t._v(" - ")]), s("div", {
                    staticClass: "date-question__date"
                }, [s("b-datepicker", {
                    ref: "to",
                    attrs: {
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.$t("До"),
                        "min-date": t.from,
                        icon: "calendar-today",
                        readonly: !1,
                        "mobile-native": !1,
                        "first-day-of-week": 1
                    },
                    model: {
                        value: t.to,
                        callback: function(e) {
                            t.to = e
                        },
                        expression: "to"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker",
                    attrs: {
                        position: "is-bottom-left",
                        icon: "clock"
                    },
                    model: {
                        value: t.timeTo,
                        callback: function(e) {
                            t.timeTo = e
                        },
                        expression: "timeTo"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.timeTo = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.timeTo = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1)])])]) : t._e()], 1)
            },
            gn = [],
            vn = {
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        timeFrom: Q()(this.$store.getters["quiz/getAnswerValue"], "timeFrom", new Date((new Date).setHours(9, 0))),
                        timeTo: Q()(this.$store.getters["quiz/getAnswerValue"], "timeTo", new Date((new Date).setHours(18, 0))),
                        date: Q()(this.$store.getters["quiz/getAnswerValue"], "date", this.$store.getters["quiz/getAnswerValue"]),
                        from: Q()(this.$store.getters["quiz/getAnswerValue"], "from", null),
                        to: Q()(this.$store.getters["quiz/getAnswerValue"], "to", null),
                        time: Q()(this.$store.getters["quiz/getAnswerValue"], "time", new Date((new Date).setHours(9, 0))),
                        dayNames: [this.$t("Вс"), this.$t("Пн"), this.$t("Вт"), this.$t("Ср"), this.$t("Чт"), this.$t("Пт"), this.$t("Сб")],
                        monthNames: [this.$t("Январь"), this.$t("Февраль"), this.$t("Март"), this.$t("Апрель"), this.$t("Май"), this.$t("Июнь"), this.$t("Июль"), this.$t("Август"), this.$t("Сентябрь"), this.$t("Октябрь"), this.$t("Ноябрь"), this.$t("Декабрь")]
                    }
                },
                computed: {
                    isRange: function() {
                        return this.question.options.isRange
                    },
                    hasTime: function() {
                        return this.question.options.hasTime
                    },
                    dateObject: function() {
                        return this.isRange ? {
                            from: this.from,
                            to: this.to,
                            timeFrom: this.timeFrom,
                            timeTo: this.timeTo
                        } : this.hasTime ? {
                            date: this.date,
                            time: this.time
                        } : this.date
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getFormattedTime: function(t) {
                        if (t) {
                            var e = "0".concat(t.getHours()).slice(-2),
                                s = "0".concat(t.getMinutes()).slice(-2);
                            return "".concat(e, ":").concat(s)
                        }
                        return null
                    }
                }),
                watch: {
                    from: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    to: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    timeFrom: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    timeTo: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    time: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    date: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    }
                }
            },
            bn = vn,
            _n = (s("86a7"), Object(Oe["a"])(bn, pn, gn, !1, null, null, null)),
            wn = _n.exports,
            yn = {
                components: {
                    Variants: Ds,
                    Images: function() {
                        return s.e("swiper").then(s.bind(null, "5ec1"))
                    },
                    InputAnswer: Us,
                    OneImage: Ms,
                    SelectAnswer: Zs,
                    DateAnswer: wn,
                    SliderAnswer: rn,
                    FileAnswer: mn
                },
                props: {
                    question: Object
                },
                computed: {
                    hasImages: function() {
                        var t = !1;
                        return this.question.answers.forEach(function(e) {
                            e.image && (t = !0)
                        }), t
                    },
                    componentKey: function() {
                        return JSON.stringify(this.question)
                    }
                },
                methods: {
                    get: Q.a
                }
            },
            kn = yn,
            xn = (s("fbb3"), Object(Oe["a"])(kn, gs, vs, !1, null, null, null)),
            Cn = xn.exports,
            qn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "discount",
                    class: {
                        "is-unexpanded": t.unexpanded
                    }
                }, [t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                        staticClass: "discount__bubble discount__bubble_mobile",
                        class: {
                            "is-unexpanded": t.unexpanded
                        }
                    }, [t._v(t._s("+ " + t.getIncreasingDiscountStep))]) : t._e()
                }), s("div", {
                    staticClass: "discount__label"
                }, [s("div", {
                    staticClass: "discount__icon"
                }, [t._v(t._s(t.getDiscountIcon))]), s("div", {
                    staticClass: "discount__label-text"
                }, [t._v(t._s(t.$t("Ваша скидка")) + ": ")])]), s("div", {
                    staticClass: "discount__price"
                }, [s("div", {
                    staticClass: "discount__value"
                }, [t._v(t._s(t.formattedDiscount)), t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                        staticClass: "discount__bubble discount__bubble_desktop"
                    }, [t._v(t._s("+" + t.getIncreasingDiscountStep))]) : t._e()
                })], 2), s("div", {
                    staticClass: "discount__symbol"
                }, [t._v(t._s(t.discountCurrencySymbol))]), s("DiscountArrow", {
                    staticClass: "discount__arrows",
                    class: {
                        "is-unexpanded": t.unexpanded
                    },
                    attrs: {
                        down: t.isMeltingDiscount
                    }
                })], 1)], 2)
            },
            zn = [],
            An = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows Arrows--simple",
                    class: {
                        "is-down": t.down
                    }
                }, [t._m(0), t._m(1)])
            },
            Sn = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows-parts"
                }, [s("div", {
                    staticClass: "Arrow Arrow--left"
                }), s("div", {
                    staticClass: "Arrow Arrow--right"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows-parts"
                }, [s("div", {
                    staticClass: "Arrow Arrow--left"
                }), s("div", {
                    staticClass: "Arrow Arrow--right"
                })])
            }],
            In = {
                props: ["down"]
            },
            On = In,
            $n = (s("d847"), Object(Oe["a"])(On, An, Sn, !1, null, null, null)),
            Dn = $n.exports,
            Ln = {
                components: {
                    DiscountArrow: Dn
                },
                props: {
                    countQuestions: Number,
                    unexpanded: Boolean,
                    bubbleLeft: Boolean
                },
                data: function() {
                    return {
                        interval: null,
                        showBubble: !1
                    }
                },
                computed: Object(u["a"])({}, Object(o["c"])("quiz", ["formattedDiscount", "isMeltingDiscount", "getIncreasingDiscountStep", "discountCurrencySymbol", "questionNumber", "isIncreasingPercentDiscount"]), {
                    getDiscountIcon: function() {
                        return this.isIncreasingPercentDiscount ? "%" : this.discountCurrencySymbol
                    }
                }),
                watch: {
                    questionNumber: function(t, e) {
                        this.showBubble = t > e
                    }
                }
            },
            Rn = Ln,
            En = (s("b56b"), Object(Oe["a"])(Rn, qn, zn, !1, null, null, null)),
            Fn = En.exports,
            Tn = s("0089"),
            jn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "result-loader"
                }, [s("div", {
                    staticClass: "result-loader__loader"
                }, [s("SvgLoader"), s("div", {
                    staticClass: "result-loader__percent"
                }, [t._v(t._s(t.percent) + "%")])], 1), s("div", {
                    staticClass: "result-loader__text"
                }, [t._v("👌 " + t._s(t.$t("Подсчёт результатов")) + "...")])])
            },
            Pn = [],
            Mn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 212.477 189.295",
                        height: "170",
                        width: "170"
                    }
                }, [s("linearGradient", {
                    attrs: {
                        id: "gradient",
                        x1: "0.5",
                        x2: "0.5",
                        y2: "1",
                        gradientUnits: "objectBoundingBox"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "var(--color)"
                    }
                }), s("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "var(--color-darken10)"
                    }
                })], 1), s("filter", {
                    attrs: {
                        id: "innershadow",
                        x0: "-50%",
                        y0: "-50%",
                        width: "200%",
                        height: "200%"
                    }
                }, [s("feGaussianBlur", {
                    attrs: { in : "SourceAlpha", stdDeviation: "3", result: "blur"
                    }
                }), s("feOffset", {
                    attrs: {
                        dy: "2",
                        dx: "3"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "SourceAlpha",
                        operator: "arithmetic",
                        k2: "-1",
                        k3: "1",
                        result: "shadowDiff"
                    }
                }), s("feFlood", {
                    attrs: {
                        "flood-color": "#444444",
                        "flood-opacity": "0.15"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "shadowDiff",
                        operator: "in"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "SourceGraphic",
                        operator: "over",
                        result: "firstfilter"
                    }
                }), s("feGaussianBlur", {
                    attrs: { in : "firstfilter", stdDeviation: "3", result: "blur2"
                    }
                }), s("feOffset", {
                    attrs: {
                        dy: "-2",
                        dx: "-3"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "firstfilter",
                        operator: "arithmetic",
                        k2: "-1",
                        k3: "1",
                        result: "shadowDiff"
                    }
                }), s("feFlood", {
                    attrs: {
                        "flood-color": "#444444",
                        "flood-opacity": "0.15"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "shadowDiff",
                        operator: "in"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "firstfilter",
                        operator: "over"
                    }
                })], 1), s("circle", {
                    staticClass: "circle",
                    attrs: {
                        cx: "100",
                        cy: "100",
                        r: "90",
                        stroke: "url(#gradient)",
                        filter: "url(#innershadow)",
                        "stroke-width": "17",
                        "fill-opacity": "0",
                        transform: "rotate(270 100 100)"
                    }
                }), s("div", {
                    staticClass: "subcircle"
                })], 1)
            },
            Qn = [],
            Bn = (s("3ebb"), {}),
            Vn = Object(Oe["a"])(Bn, Mn, Qn, !1, null, "5de68756", null),
            Nn = Vn.exports,
            Hn = {
                components: {
                    SvgLoader: Nn
                },
                mounted: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                        var e, s = this;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    e = setInterval(function() {
                                        s.percent < 100 ? s.percent += 1 : clearInterval(e)
                                    }, 20);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        percent: 0
                    }
                }
            },
            Un = Hn,
            Wn = (s("534a"), Object(Oe["a"])(Un, jn, Pn, !1, null, null, null)),
            Gn = Wn.exports,
            Jn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "result",
                    class: {
                        result_has_image: t.hasImage
                    }
                }, [!t.result || t.result.type && "content" !== t.result.type ? t._e() : s("div", {
                    staticClass: "result__container"
                }, [t.hasImage ? s("div", {
                    staticClass: "result__image",
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }, [t.result.cost ? s("PriceLabel", {
                    staticClass: "result__cost result__cost_in-bg",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), s("div", {
                    staticClass: "result__bg"
                })], 1) : t._e(), s("div", {
                    staticClass: "result__content"
                }, [t.result.title ? s("h2", {
                    staticClass: "result__title"
                }, [t._v(t._s(t.result.title))]) : t._e(), t.result.cost && !t.hasImage ? s("PriceLabel", {
                    staticClass: "result__cost result__cost_in-text",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), t.result.text ? s("div", {
                    staticClass: "result__text",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.result.text))
                    }
                }) : t._e(), t.bonuses.length ? s("div", {
                    staticClass: "result__bonuses"
                }, ["afterForm" === t.results.view ? s("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.$t("Ваши бонусы")))]) : t._e(), "beforeForm" === t.results.view ? s("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.$t("Получите ваши бонусы далее")))]) : t._e(), s("Bonuses", {
                    attrs: {
                        direction: "row"
                    }
                })], 1) : t._e(), t.results.retry && ("beforeForm" === t.results.view || t.leadFormDisabled) ? s("button", {
                    staticClass: "button result__retry",
                    on: {
                        click: function(e) {
                            return t.$store.commit("quiz/startQuiz")
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "reload"
                    }
                }), t._v(t._s(t.$t("Пройти тест заново")))], 1) : t._e(), t.results.share ? s("Share", {
                    attrs: {
                        networks: t.shareNetworks,
                        url: t.shareUrl,
                        title: t.result.title,
                        description: t.result.text,
                        image: t.bgUrl
                    }
                }) : t._e()], 1), s("div", {
                    staticClass: "result__navpad-place"
                }, [s("div", {
                    staticClass: "result__whitelabel"
                }, [s("WhiteLabel")], 1)]), t.hasButton || t.selectedResult ? s("div", {
                    staticClass: "result__navpad",
                    class: {
                        result__navpad_align_left: t.selectedResult && !t.hasButton
                    }
                }, [t.selectedResult ? s("button", {
                    staticClass: "button is-outlined result__back-button",
                    on: {
                        click: t.back
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "arrow-left"
                    }
                })], 1) : t._e(), t.hasButton ? s("button", {
                    staticClass: "button is-primary has-shadow result__button",
                    on: {
                        click: t.action
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText))], 1) : t._e(), s("div", {
                    staticClass: "result__whitelabel"
                }, [s("WhiteLabel")], 1)]) : t._e()]), t.result && "redirect" === t.result.type ? s("div", {
                    staticClass: "result__container"
                }, [t.result.link ? s("div", [t._v(t._s(t.$t("Идёт переадресация на {-url}", {
                    url: t.result.link
                }))), s("span", {
                    staticClass: "u-points"
                })]) : t._e()]) : t._e()])
            },
            Kn = [],
            Yn = s("fb21"),
            Zn = {
                components: {
                    PriceLabel: Yn["a"],
                    Bonuses: ps["a"],
                    WhiteLabel: Tn["a"],
                    Share: function() {
                        return s.e("chunk-16ac490e").then(s.bind(null, "17a4"))
                    }
                },
                data: function() {
                    return {
                        shareNetworks: [{
                            name: "vk",
                            desc: this.$t("ВКонтакте")
                        }, {
                            name: "telegram",
                            desc: "Telegram"
                        }, {
                            name: "facebook",
                            desc: "Facebook"
                        }]
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["results", "selectedResult", "leadFormDisabled", "domain"]), Object(o["d"])("form", ["contacts"]), Object(o["d"])("quiz", {
                    bonuses: function(t) {
                        return Q()(t, "info.marketing.bonuses", [])
                    }
                }), Object(o["c"])("quiz", ["result"]), {
                    bgUrl: function() {
                        return this.result.image ? this.$image.url(this.result.image, {
                            width: 750
                        }) : null
                    },
                    shareUrl: function() {
                        return this.domain || this.$route.query.href
                    },
                    hasButton: function() {
                        return "beforeForm" === this.results.view || "afterForm" === this.results.view && !!this.result.link
                    },
                    hasImage: function() {
                        return !A()(this.result.image)
                    },
                    buttonText: function() {
                        return this.result.buttonText ? this.result.buttonText : this.$t("Узнать подробнее")
                    }
                }),
                methods: {
                    action: function() {
                        "beforeForm" === this.results.view && this.$store.dispatch("quiz/showLeadForm"), "afterForm" === this.results.view && this.redirect()
                    },
                    redirect: function() {
                        this.result.link && this.$redirect(this.result.link, {
                            contacts: this.contacts,
                            result: this.result
                        })
                    },
                    back: function() {
                        this.$store.commit("quiz/selectResult", null), this.$store.commit("quiz/showResults")
                    }
                }
            },
            Xn = Zn,
            ti = (s("8eb6"), Object(Oe["a"])(Xn, Jn, Kn, !1, null, null, null)),
            ei = ti.exports,
            si = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "sidebar-mobile",
                    class: {
                        "is-expanded": t.expandedDiscount || t.expandedBonuses
                    }
                }, [t.discount ? s("div", {
                    staticClass: "sidebar-mobile__discount",
                    class: t.isExpandedDiscount,
                    on: {
                        click: function(e) {
                            t.expandedDiscount = !0
                        }
                    }
                }, [s("div", {
                    staticClass: "sidebar-mobile__discount-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedDiscount = !1
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), s("Discount", {
                    staticClass: "sidebar-mobile__discount-component",
                    attrs: {
                        unexpanded: !t.expandedDiscount,
                        countQuestions: t.countQuestions
                    }
                })], 1) : t._e(), t.bonuses.length ? s("div", {
                    staticClass: "sidebar-mobile__bonuses",
                    class: t.isExpandedBonuses
                }, [s("div", {
                    staticClass: "sidebar-mobile__bonuses-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedBonuses = !1
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), s("div", {
                    staticClass: "sidebar-mobile__bonuses-block",
                    on: {
                        click: function(e) {
                            t.expandedBonuses = !0
                        }
                    }
                }, [s("div", {
                    staticClass: "sidebar-mobile__bonuses-title",
                    class: t.isExpandedBonuses
                }, [s("b-icon", {
                    staticClass: "sidebar-mobile__bonuses-icon",
                    class: t.isExpandedBonuses,
                    attrs: {
                        icon: "gift",
                        "custom-size": "mdi-18px"
                    }
                }), s("div", {
                    staticClass: "sidebar-mobile__bonuses-text"
                }, [t._v(t._s(t.$t("Ваши бонусы")) + ":")])], 1), t.expandedBonuses ? s("div", {
                    staticClass: "sidebar-mobile__bonuses-list",
                    class: t.isExpandedBonuses
                }, [s("Bonuses", {
                    attrs: {
                        direction: "column",
                        height: 64
                    }
                })], 1) : t._e()])]) : t._e()])
            },
            ni = [],
            ii = {
                name: "MobileSidebar",
                components: {
                    Bonuses: ps["a"],
                    Discount: Fn
                },
                props: {
                    bonuses: Array,
                    countQuestions: Number,
                    discount: [Number, String],
                    autoshow: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        expandedDiscount: !1,
                        expandedBonuses: !1
                    }
                },
                computed: {
                    isExpandedDiscount: function() {
                        return {
                            "is-expanded": this.expandedDiscount
                        }
                    },
                    isExpandedBonuses: function() {
                        return {
                            "is-expanded": this.expandedBonuses
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.autoshow && (this.expandedDiscount = !0, this.expandedBonuses = !0, setTimeout(function() {
                        t.expandedDiscount = !1
                    }, 2e3), setTimeout(function() {
                        t.expandedBonuses = !1
                    }, 3500))
                }
            },
            ai = ii,
            oi = (s("ba97"), Object(Oe["a"])(ai, si, ni, !1, null, "da615d68", null)),
            ri = oi.exports,
            ci = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "quiz-buttons"
                }, [s("ProgressBar", {
                    staticClass: "quiz-buttons__progress",
                    attrs: {
                        percent: Math.round(t.passedPercent)
                    }
                }), s("ProgressBar", {
                    staticClass: "quiz-buttons__progress-mobile",
                    attrs: {
                        percent: Math.round(t.passedPercent),
                        mobile: ""
                    }
                }), t.whiteLabel ? s("WhiteLabel", {
                    staticClass: "quiz-buttons__whitelabel"
                }) : t._e(), s("button", {
                    staticClass: "button is-link quiz-buttons__button quiz-buttons__button_prev",
                    attrs: {
                        disabled: 0 === t.activeQuestion
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("previous")
                        }
                    }
                }, [s("div", {
                    staticClass: "quiz-buttons__arrow"
                }, [s("Arrow", {
                    attrs: {
                        back: ""
                    }
                })], 1), s("span", {
                    staticClass: "quiz-buttons__button_prev_text"
                })]), t.isLast ? t._e() : s("button", {
                    staticClass: "button quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("next")
                        }
                    }
                }, [s("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))]), s("div", {
                    staticClass: "quiz-buttons__next-icon"
                }, [s("Arrow", {
                    attrs: {
                        color: "#fff"
                    }
                })], 1)]), t.isLast ? s("button", {
                    staticClass: "button button_color_theme quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("show-lead")
                        }
                    }
                }, [s("span", {
                    staticClass: "is-hidden-mobile"
                }, [t._v(t._s(t.$t("Последний шаг")))]), s("span", {
                    staticClass: "is-hidden-tablet"
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), s("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))])], 1)]) : t._e()], 1)
            },
            ui = [],
            li = s("b6b4"),
            di = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    class: {
                        "is-back": t.back
                    },
                    staticStyle: {
                        "enable-background": "new 0 0 31.49 31.49"
                    },
                    attrs: {
                        fill: t.color,
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 31.49 31.49",
                        "xml:space": "preserve"
                    }
                }, [s("path", {
                    attrs: {
                        d: "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.05A1A98A3B"
                    }
                })])
            },
            hi = [],
            fi = {
                name: "Arrow",
                props: {
                    back: Boolean,
                    color: {
                        type: String,
                        default: "#4a505e"
                    }
                }
            },
            mi = fi,
            pi = (s("6299"), Object(Oe["a"])(mi, di, hi, !1, null, "f63d6478", null)),
            gi = pi.exports,
            vi = {
                name: "QuizButtons",
                props: {
                    passedPercent: Number,
                    activeQuestion: Number,
                    isLast: Boolean,
                    filled: Boolean,
                    notRequired: Boolean,
                    whiteLabel: Boolean
                },
                components: {
                    ProgressBar: li["a"],
                    Arrow: gi,
                    WhiteLabel: Tn["a"]
                }
            },
            bi = vi,
            _i = (s("8e33"), Object(Oe["a"])(bi, ci, ui, !1, null, null, null)),
            wi = _i.exports,
            yi = {
                components: {
                    ResultLoader: Gn,
                    FinalPage: function() {
                        return s.e("final-page").then(s.bind(null, "f125"))
                    },
                    FinalPageV2: function() {
                        return s.e("final-page").then(s.bind(null, "c252"))
                    },
                    QuizButtons: wi,
                    Assistant: os,
                    AssistantMobile: ms,
                    Discount: Fn,
                    Question: Cn,
                    Bonuses: ps["a"],
                    WhiteLabel: Tn["a"],
                    SidebarMobile: ri,
                    Results: function() {
                        return s.e("swiper").then(s.bind(null, "8169"))
                    },
                    Result: ei
                },
                mounted: function() {
                    this.$refs.quiz && this.changeHeight()
                },
                data: function() {
                    return {
                        animationType: "forward",
                        frameHeight: null,
                        heightAfterShowAssistant: null,
                        heightBeforeShowAssistant: null,
                        slideDuration: .4
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["questions", "activeQuestion", "info", "leadForm", "id", "isResultsShow", "isResultShow", "isResultLoaderShow", "hint"]), Object(o["c"])("quiz", ["countAllQuestions", "getPassedPercent", "getAnswerValue", "getIsFilled", "getLastStep", "getQuestion", "isLastStep", "isWhiteLabelActive", "result"]), {
                    discount: function() {
                        return Q()(this.info, "marketing.discount.value") || Q()(this.info, "marketing.discount.percent")
                    },
                    showRightSidebar: function() {
                        return this.discount || this.getQuestion && this.getQuestion.text || this.bonuses.length
                    },
                    bonuses: function() {
                        return Q()(this.info, "marketing.bonuses", [])
                    },
                    getNotRequired: function() {
                        return Q()(this.getQuestion, "notRequired", !1)
                    },
                    getCanMany: function() {
                        var t = ["variants", "images", "select", "file"];
                        return "many" === Q()(this.getQuestion, "select") && ge()(t, Q()(this.getQuestion, "type"))
                    },
                    questionType: function() {
                        return Q()(this.getQuestion, "type")
                    }
                }),
                methods: Object(u["a"])({
                    get: Q.a,
                    isEmpty: A.a
                }, Object(o["b"])("quiz", ["prevQuestion", "nextQuestion", "showLeadForm"]), {
                    beforeLeave: function(t) {
                        t.style.opacity = 1
                    },
                    leave: function(t) {
                        t.style.transition = "all ".concat(this.slideDuration / 2, "s ease"), t.style.transform = "back" === this.animationType ? "translateX(10%)" : "translateX(-10%)", t.style.opacity = 0
                    },
                    beforeEnter: function(t) {
                        t.style.transform = "translateX(0)"
                    },
                    enter: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            t.style.transform = "back" === e.animationType ? "translateX(-10%)" : "translateX(10%)", t.style.opacity = 0
                        })
                    },
                    afterEnter: function(t) {
                        t.style.transition = "all ".concat(this.slideDuration / 2, "s ease"), t.style.transform = "translateX(0)", t.style.opacity = 1, this.changeHeight()
                    },
                    changeHeight: function() {
                        var t = this;
                        this.$nextTick(function() {
                            var e, s = t.$refs.quiz.clientHeight;
                            if ("images" === t.questionType) {
                                var n = Q()(t.$refs, "question.0.$el");
                                if (!n) return;
                                e = s - n.clientHeight + n.scrollHeight + 15, e > 650 && (e = 650), e < s && (e = s), e && t.$quizFrame.changeHeight(t.id, e)
                            }
                        })
                    }
                }),
                watch: {
                    activeQuestion: function(t, e) {
                        this.animationType = t < e ? "back" : "forward"
                    }
                }
            },
            ki = yi,
            xi = (s("9eb9"), Object(Oe["a"])(ki, Ue, We, !1, null, null, null)),
            Ci = xi.exports,
            qi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "install"
                }, [t.quizId && !t.edit ? s("div", {
                    staticClass: "install__edit"
                }, [s("div", [t._v(t._s(t.$t('К этой группе привязан квиз "{title}"', {
                    title: t.quizTitle
                })))]), s("div", [s("a", {
                    staticClass: "button is-text",
                    attrs: {
                        href: "../https@panel.marquiz.ru/quizzes/edit/" + t.quizId,
                        target: "_blank"
                    }
                }, [s("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Редактировать квиз")))]), s("button", {
                    staticClass: "button is-text",
                    on: {
                        click: function(e) {
                            t.edit = !0
                        }
                    }
                }, [s("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Привязать другой квиз")))])])]) : t._e(), !t.quizId || t.edit ? [s("p", [t._v(t._s(t.$t('Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"')))]), s("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.setGroup(e)
                        }
                    }
                }, [s("section", {
                    staticClass: "mb-1"
                }, [s("b-field", {
                    attrs: {
                        label: t.$t("Введите id квиза")
                    }
                }), s("b-input", {
                    ref: "quizId",
                    attrs: {
                        placeholder: "5aa7c2bb23fc0f00e7b75a49"
                    },
                    model: {
                        value: t.id,
                        callback: function(e) {
                            t.id = "string" === typeof e ? e.trim() : e
                        },
                        expression: "id"
                    }
                })], 1), s("button", {
                    staticClass: "install__attach-btn button is-danger",
                    attrs: {
                        type: "submit",
                        disabled: !t.id
                    }
                }, [t._v(t._s(t.$t("Привязать")))])])] : t._e()], 2)
            },
            zi = [],
            Ai = {
                mounted: function() {
                    this.$refs.quizId && Q()(this.$refs, "quizId.$refs.input") && this.$focusInput(this.$refs.quizId.$refs.input)
                },
                props: {
                    quizId: String,
                    request: Object,
                    quizTitle: String
                },
                data: function() {
                    return {
                        id: null,
                        edit: !1
                    }
                },
                methods: {
                    setGroup: function() {
                        var t = this;
                        this.$axios.post("v1/vkGroups/setGroup", {
                            request: this.request,
                            quizId: this.id
                        }).then(function() {
                            t.$emit("changed")
                        }).catch(function(e) {
                            t.$toast.open({
                                message: e.message,
                                type: "is-danger"
                            })
                        })
                    }
                },
                watch: {
                    edit: function(t) {
                        var e = this;
                        t && (this.id = this.quizId, this.$nextTick(function() {
                            e.$focusInput(e.$refs.quizId.$refs.input)
                        }))
                    }
                }
            },
            Si = Ai,
            Ii = Object(Oe["a"])(Si, qi, zi, !1, null, null, null),
            Oi = Ii.exports,
            $i = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Di = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "welcome"
                }, [s("div", {
                    staticClass: "hero is-fullheight"
                }, [s("div", {
                    staticClass: "hero-body"
                }, [s("div", {
                    staticClass: "columns"
                }, [s("div", {
                    staticClass: "welcome__info column is-6"
                }, [s("div", [s("h1", {
                    staticClass: "title"
                }, [t._v("Marquiz - конструктор маркетинговых квизов")]), s("h2", {
                    staticClass: "subtitle"
                }, [t._v("Получайте в разы больше заявок")]), s("div", {
                    staticClass: "welcome__text"
                }, [s("p", [t._v("Квиз - это виджет опроса, который задаёт вопросы посетителю, а в конце предлагает оставить контакты.")]), s("p", [t._v("Задавая нужные вопросы, он помогает определиться с выбором человеку. Поэтому квиз работает на более холодную аудиторию, за счёт чего вы получаете в разы больше заявок")])]), s("div", {
                    staticClass: "welcome__buttons"
                }, [s("a", {
                    staticClass: "button is-primary",
                    attrs: {
                        href: "../https@panel.marquiz.ru/signup",
                        target: "_blank"
                    }
                }, [t._v("Создать квиз")]), s("a", {
                    staticClass: "button",
                    attrs: {
                        href: "../https@www.marquiz.ru/#section-steps",
                        target: "_blank"
                    }
                }, [t._v("Подробнее")])])])]), s("div", {
                    staticClass: "welcome__image column"
                }, [s("img", {
                    attrs: {
                        src: "static/perspective.png"
                    }
                })])])])])])
            }],
            Li = (s("4a1b"), {}),
            Ri = Object(Oe["a"])(Li, $i, Di, !1, null, null, null),
            Ei = Ri.exports,
            Fi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "start-page columns is-desktop-modal",
                    class: t.classes
                }, [t.bgUrl ? s("div", {
                    staticClass: "start-page__bg column is-7",
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }, [t._v(" ")]) : t._e(), s("div", {
                    staticClass: "start-page__content column",
                    class: {
                        "is-5": !!t.bgUrl
                    }
                }, ["landing" === t.mode && (t.logo && t.logo.url || t.name) ? s("div", {
                    staticClass: "start-page__top"
                }, [t.logo && t.logo.url ? s("img", {
                    staticClass: "start-page__logo",
                    attrs: {
                        src: t.$image.url(t.logo, {
                            height: "37"
                        })
                    }
                }) : t._e(), t.name ? s("div", {
                    staticClass: "start-page__name"
                }, [t._v(t._s(t.name))]) : t._e()]) : t._e(), s("div", {
                    staticClass: "start-page__body"
                }, [t.logo && t.logo.url ? t._e() : s("div", {
                    staticClass: "start-page__line"
                }), s("h1", {
                    staticClass: "start-page__header"
                }, [t._v(t._s(t.title))]), s("h2", {
                    staticClass: "start-page__subheader"
                }, [t._v(t._s(t.subtitle))]), s("button", {
                    staticClass: "start-page__button button is-primary is-blicked has-light-shadow",
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText || t.$t("Пройти тест")))], 1), t.bonuses.length ? s("div", {
                    staticClass: "start-page__bonuses"
                }, [s("div", {
                    staticClass: "start-page__bonuses-title"
                }, [t._v(t._s(t.$t("Бонусы после прохождения теста")))]), s("Bonuses", {
                    attrs: {
                        direction: "row",
                        height: 64
                    }
                })], 1) : t._e()]), s("div", {
                    staticClass: "start-page__footer"
                }, ["landing" === t.mode && (t.phone || t.legal) ? s("div", {
                    staticClass: "start-page__contact"
                }, [t.phone ? s("div", {
                    staticClass: "start-page__phone"
                }, [t._v(t._s(t.phone))]) : t._e(), t.legal ? s("div", {
                    staticClass: "start-page__legal"
                }, [t._v(t._s(t.legal))]) : t._e()]) : t._e(), t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                    staticClass: "start-page__white-label"
                })], 1)]), s("div", {
                    staticClass: "start-page__layer"
                })])
            },
            Ti = [],
            ji = s("7bae"),
            Pi = s.n(ji),
            Mi = {
                components: {
                    WhiteLabel: Tn["a"],
                    Bonuses: ps["a"]
                },
                data: function() {
                    return {
                        icons: {
                            check: Pi.a
                        },
                        closing: !1
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", {
                    bonuses: function(t) {
                        return Q()(t, "info.marketing.bonuses", [])
                    },
                    title: function(t) {
                        return Q()(t, "info.startPage.title")
                    },
                    subtitle: function(t) {
                        return Q()(t, "info.startPage.subtitle")
                    },
                    buttonText: function(t) {
                        return Q()(t, "info.startPage.buttonText")
                    },
                    mode: function(t) {
                        return Q()(t, "info.startPage.mode", "start")
                    },
                    name: function(t) {
                        return Q()(t, "info.startPage.name")
                    },
                    phone: function(t) {
                        return Q()(t, "info.startPage.phone")
                    },
                    legal: function(t) {
                        return Q()(t, "info.startPage.legal")
                    },
                    bg: function(t) {
                        return Q()(t, "info.startPage.bg", {})
                    },
                    logo: function(t) {
                        return Q()(t, "info.startPage.logo", {})
                    }
                }), Object(o["c"])("quiz", ["isWhiteLabelActive"]), {
                    bgUrl: function() {
                        if (!this.bg.url) return null;
                        var t = {
                            cloud_name: "hgwipn3sa",
                            secure: "https:" === window.location.protocol,
                            dpr: ne()() ? "2.0" : "1.0",
                            fetch_format: "auto",
                            source: "upload"
                        };
                        return window.innerHeight <= 650 && window.innerWidth >= 768 && (t.height = 650), window.innerWidth < 768 && (t.width = 767), ee()(this.bg.name, t)
                    },
                    classes: function() {
                        var t = {
                            "start-page_closing": this.closing,
                            "start-page_has_bg": !!this.bgUrl
                        };
                        return t["start-page_mode_".concat(this.mode)] = !0, t
                    }
                }),
                methods: {
                    close: function() {
                        var t = this;
                        this.closing = !0, setTimeout(function() {
                            t.$store.commit("quiz/startQuiz"), t.$store.dispatch("quiz/analyticEvent", "marquiz-startquiz")
                        }, 1e3)
                    }
                }
            },
            Qi = Mi,
            Bi = (s("5f78"), Object(Oe["a"])(Qi, Fi, Ti, !1, null, null, null)),
            Vi = Bi.exports,
            Ni = {
                render: function() {
                    return ""
                },
                mounted: function() {
                    var t = this;
                    window.addEventListener("message", function(e) {
                        t.$store.commit("quiz/resetState"), t.$nextTick(function() {
                            t.commit(e.data)
                        })
                    })
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["questions", "results"]), Object(o["c"])("quiz", ["resultsPosition", "isMultipleResults"])),
                methods: {
                    commit: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.$store.commit("quiz/resetState"), this.$store.commit("form/resetState"), t.quiz && this.$store.dispatch("quiz/get", {
                            quiz: t.quiz
                        });
                        var e = t.page;
                        if (e) switch (e) {
                            case "leadform":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/hideMessengers"), t.formStep && (1 === t.formStep && this.$store.commit("form/showStep1"), 2 === t.formStep && this.$store.commit("form/showStep2"));
                                break;
                            case "messengers":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showMessengers");
                                break;
                            case "start_page":
                                this.$store.commit("quiz/showStartPage");
                                break;
                            case "questions":
                                this.$store.commit("quiz/startQuiz"), t.questionId && this.$store.commit("quiz/setActiveQuestion", V()(this.questions, {
                                    id: t.questionId
                                }));
                                break;
                            case "results":
                                if (!this.resultsPosition) break;
                                if (t.resultId) {
                                    this.$store.commit("quiz/showResult", I()(this.results.items, {
                                        id: t.resultId
                                    }));
                                    break
                                }
                                this.isMultipleResults ? this.$store.commit("quiz/showResults") : this.$store.commit("quiz/showResult");
                                break;
                            case "thanks":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showThankPage");
                                break;
                            default:
                                break
                        }
                    }
                }
            },
            Hi = Ni,
            Ui = Object(Oe["a"])(Hi, he, fe, !1, null, null, null),
            Wi = Ui.exports,
            Gi = {
                components: {
                    Layout: He,
                    Quiz: Ci,
                    Install: Oi,
                    Welcome: Ei,
                    StartPage: Vi,
                    PreviewController: Wi
                },
                beforeMount: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (window.document.title = "".concat(this.$t("Загрузка"), "..."), "agreement" !== this.$route.path) {
                                        t.next = 4;
                                        break
                                    }
                                    return this.isLoading = !1, t.abrupt("return");
                                case 4:
                                    if (e = window.location.hostname, this.setDomain(e), !this.showWelcomePage()) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return t.next = 10, this.load();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        isLoading: !0,
                        notFound: !1,
                        loadingError: !1,
                        isEditMode: !1,
                        groupId: this.$route.query.group_id,
                        quizId: this.$route.params.id,
                        request: this.$route.query,
                        isModal: !!Q()(this.$route, "query.isModal", !0),
                        isShowWelcomePage: !1,
                        domain: null
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["quizStarted", "loaded", "info", "id", "settings", "mode"]), Object(o["c"])("quiz", ["colors"]), {
                    isVkGroupAdmin: function() {
                        return this.groupId && "4" === this.$route.query.viewer_type
                    },
                    styles: function() {
                        return {
                            "--color": this.colors.main,
                            "--color-lighten": this.colors.lighten,
                            "--color-lighten10": this.colors.lighten10,
                            "--color-lighten2": this.colors.lighten2,
                            "--color-darken": this.colors.darken,
                            "--color-darken10": this.colors.darken10,
                            "--color-alpha": this.colors.alpha,
                            "--color-alpha2": this.colors.alpha2,
                            "--color-text": this.colors.text,
                            "--color-text2": this.colors.text2,
                            "--gradient-main": this.colors.gradientMain
                        }
                    }
                }),
                methods: {
                    load: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                            var e = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.$store.dispatch("quiz/get", {
                                            id: this.quizId,
                                            groupId: this.groupId,
                                            domain: this.domain
                                        }).then(function() {
                                            e.isLoading = !1;
                                            var t = Q()(e.info, "startPage.pageTitle") || Q()(e.info, "startPage.title") || Q()(e.info, "title"),
                                                s = Q()(e.info, "startPage.favicon");
                                            s && s.secureUrl ? e.setFavicon(s.secureUrl) : e.setFavicon("static/favicon.png"), window.document.title = t || "Marquiz"
                                        }).catch(function(t) {
                                            window.document.title = "Marquiz", e.isLoading = !1, e.groupId ? e.isShowWelcomePage = !0 : t.response && 404 === t.response.status ? e.notFound = !0 : e.loadingError = !0
                                        }), this.initSession(this.quizId);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    initSession: function(t) {
                        var e = Me["a"].get("answerId");
                        1 === this.$route.query.test && (e = null), Me["a"].init(t), this.$store.commit("form/setSession", {
                            answerId: e,
                            uuid: Me["a"].get("uuid")
                        })
                    },
                    closeAndReload: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.isEditMode = !1, this.quizId = null, t.next = 4, this.load();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    showWelcomePage: function() {
                        return !this.quizId && (!this.groupId && (!this.domain && (!("default.htm" !== this.$route.path && (!this.$route.query.viewer_id || this.groupId)) && (this.isShowWelcomePage = !0, window.document.title = "Marquiz", !0))))
                    },
                    setFavicon: function(t) {
                        var e = document.querySelector("link[rel*='icon']") || document.createElement("link");
                        e.type = "image/x-icon", e.rel = "shortcut icon", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
                    },
                    setDomain: function(t) {
                        !this.quizId && !this.groupId && P()(["quiz.marquiz.ru", "mrqz.me", "localhost"], t) < 0 && (this.domain = Pe()(t))
                    }
                },
                watch: {
                    loaded: function(t) {
                        t && this.$quizFrame.postMessage({
                            id: this.quizId,
                            action: "loaded"
                        })
                    }
                },
                name: "app"
            },
            Ji = Gi,
            Ki = (s("7faf"), Object(Oe["a"])(Ji, Fe, Te, !1, null, null, null)),
            Yi = Ki.exports,
            Zi = s("8c4f"),
            Xi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "agreement"
                }, [s("div", {
                    staticClass: "agreement__close",
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                })], 1), s("div", {
                    staticClass: "agreement__title"
                }, [t._v(t._s(t.$t("Пользовательское соглашение")))]), s("div", {
                    staticClass: "agreement__text"
                }, [s("p", [t._v(t._s(t.$t("Я, субъект персональных данных, в соответствии с Федеральным законом от 27 июля 2006 года № 152 «О персональных данных» предоставляю согласие на обработку персональных данных, указанных мной в форме на сайте в сети «Интернет», владельцем которого является Оператор.")))]), s("p", [t._v(t._s(t.$t("Под персональными данными субъекта персональных данных понимается нижеуказанная общая информация: ФИО, адрес электронной почты и номер телефона, контакт социальной сети или мессенджера.")))]), s("p", [t._v(t._s(t.$t("Принимая настоящее Соглашение, я выражаю свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, осуществляемых как с использованием средств автоматизации (автоматизированная обработка), так и без использования таких средств (неавтоматизированная обработка).")))]), s("p", [t._v(t._s(t.$t("Я понимаю и соглашаюсь с тем, что предоставленная информация, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена мною в отношении себя лично; информация не относится к государственной, банковской и/или коммерческой тайне, информация не относится к информации о расовой и/или национальной принадлежности, политических взглядах, религиозных или философских убеждениях, не относится к информации о состоянии здоровья и интимной жизни.")))]), s("p", [t._v(t._s(t.$t("Я понимаю и соглашаюсь с тем, что Оператор не проверяет достоверность персональных данных, предоставляемых мной, и не имеет возможности оценивать мою дееспособность и исходит из того, что я предоставляю достоверные персональные данные и поддерживаю такие данные в актуальном состоянии.")))]), s("p", [t._v(t._s(t.$t("Я подтверждаю, что не являюсь резидентом стран ЕС.")))]), s("p", [t._v(t._s(t.$t("Согласие действует по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.")))]), s("p", [t._v(t._s(t.$t("Согласие может быть отозвано мною в любое время на основании моего письменного заявления.")))])]), s("button", {
                    staticClass: "agreement__button button button_color_theme is-medium button_rounded",
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), s("span", [t._v(t._s(t.$t("Закрыть")))])], 1)])
            },
            ta = [],
            ea = {
                methods: {
                    close: function() {
                        window.close()
                    }
                }
            },
            sa = ea,
            na = (s("de74"), Object(Oe["a"])(sa, Xi, ta, !1, null, null, null)),
            ia = na.exports;
        n["default"].use(Zi["a"]);
        var aa = new Zi["a"]({
            mode: "history",
            routes: [{
                path: "/default/:id",
                name: "Default",
                component: Ci
            }, {
                path: "agreement",
                name: "Agreement",
                component: ia
            }, {
                path: "/:id",
                name: "ID",
                component: Ci
            }]
        });
        qe();
        var oa = G.a.parse(window.location.search);
        n["default"].use(a.a, {
            defaultIconComponent: Le["a"]
        }), n["default"].use(Pt), n["default"].use(Ee.a), n["default"].use(Mt), n["default"].use(Yt), n["default"].use(ie), n["default"].use(ue), n["default"].use(me, {
            disabled: "preview" === oa.mode
        }), n["default"].use(Kt, {}), n["default"].use(Xt, {
            translations: Ce.a,
            lang: $t.state.lang
        }), n["default"].use(ke, {
            dummy: "preview" === oa.mode
        }), n["default"].component("SvgIcon", De), n["default"].config.productionTip = !1, oa.debug || Lt.a.config("https://sentry.io/305073").addPlugin(Et.a, n["default"]).install(), new n["default"]({
            router: aa,
            store: $t,
            render: function(t) {
                return t(Yi)
            }
        }).$mount("#app")
    },
    "57d9": function(t, e, s) {},
    5967: function(t, e, s) {
        "use strict";
        var n = s("9a81"),
            i = s.n(n);
        i.a
    },
    "5ad8": function(t, e, s) {
        "use strict";
        var n = s("5fd8"),
            i = s.n(n);
        i.a
    },
    "5f64": function(t, e, s) {},
    "5f78": function(t, e, s) {
        "use strict";
        var n = s("45d5"),
            i = s.n(n);
        i.a
    },
    "5fd8": function(t, e, s) {},
    6299: function(t, e, s) {
        "use strict";
        var n = s("f809"),
            i = s.n(n);
        i.a
    },
    6345: function(t, e, s) {},
    "64ea": function(t, e, s) {
        "use strict";
        var n = s("4eee"),
            i = s.n(n);
        i.a
    },
    "65a0": function(t, e, s) {},
    "65ee": function(t, e, s) {},
    6617: function(t, e, s) {},
    6629: function(t, e, s) {
        "use strict";
        var n = s("65ee"),
            i = s.n(n);
        i.a
    },
    6711: function(t, e, s) {},
    "71ac": function(t, e, s) {},
    "72fa": function(t, e, s) {},
    7452: function(t, e, s) {},
    "7bae": function(t, e, s) {
        t.exports = s.p + "img/check.7c08bf55.svg"
    },
    "7faf": function(t, e, s) {
        "use strict";
        var n = s("8fba"),
            i = s.n(n);
        i.a
    },
    "83b4": function(t, e, s) {
        "use strict";
        var n = s("ba5a"),
            i = s.n(n);
        i.a
    },
    "86a7": function(t, e, s) {
        "use strict";
        var n = s("65a0"),
            i = s.n(n);
        i.a
    },
    "895a": function(t, e, s) {
        "use strict";
        var n = s("6711"),
            i = s.n(n);
        i.a
    },
    "896a": function(t, e, s) {
        t.exports = s.p + "img/arrow-down.9ca25267.svg"
    },
    "8b38": function(t, e, s) {
        "use strict";
        var n = s("9b68"),
            i = s.n(n);
        i.a
    },
    "8e33": function(t, e, s) {
        "use strict";
        var n = s("c481"),
            i = s.n(n);
        i.a
    },
    "8ea7": function(t, e, s) {},
    "8eb6": function(t, e, s) {
        "use strict";
        var n = s("8ea7"),
            i = s.n(n);
        i.a
    },
    "8fba": function(t, e, s) {},
    "98f9": function(t, e, s) {},
    "9a81": function(t, e, s) {},
    "9b68": function(t, e, s) {},
    "9eb9": function(t, e, s) {
        "use strict";
        var n = s("ccaf"),
            i = s.n(n);
        i.a
    },
    a335: function(t, e, s) {},
    aa5f: function(t, e, s) {},
    afb2: function(t, e, s) {},
    b56b: function(t, e, s) {
        "use strict";
        var n = s("6345"),
            i = s.n(n);
        i.a
    },
    b6b4: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "progress-bar",
                    class: {
                        "progress-bar_mobile": t.mobile
                    }
                }, [t.finish ? t._e() : s("div", {
                    staticClass: "progress-bar__label",
                    class: {
                        "is-finish": t.finish
                    }
                }, [t._v(t._s(t.$t("Готово")) + ":"), s("span", [t._v(t._s(t.percent) + "%")])]), s("div", {
                    staticClass: "progress-bar__field"
                }, [s("span", {
                    style: "width: " + t.percent + "%"
                }), t.finish ? s("div", {
                    staticClass: "progress-bar__field-mark"
                }) : t._e(), t.finish ? s("p", {
                    staticClass: "progress-bar__field-label"
                }, [t._v("95%")]) : t._e()])])
            },
            i = [],
            a = (s("c5f6"), {
                name: "ProgressBar",
                props: {
                    percent: Number,
                    finish: Boolean,
                    mobile: Boolean
                }
            }),
            o = a,
            r = (s("e720"), s("2877")),
            c = Object(r["a"])(o, n, i, !1, null, null, null);
        e["a"] = c.exports
    },
    b9a3: function(t, e, s) {},
    ba5a: function(t, e, s) {},
    ba97: function(t, e, s) {
        "use strict";
        var n = s("fe34"),
            i = s.n(n);
        i.a
    },
    bf0f: function(t, e) {
        t.exports = {
            be: {
                translation: {
                    "Ваша скидка": "Ваша зніжка",
                    "Отлично. Последний шаг!": "Выдатна. Апошні крок!",
                    "Итоговая скидка": "Выніковая зніжка",
                    "Дополнительно": "Дадаткова",
                    "Получить результаты": "Атрымаць вынікі",
                    "Спасибо": "Дзякуй",
                    "Готово": "Зроблена",
                    "Назад": "Назад",
                    "Далее": "Далей",
                    "Последний шаг": "Апошні крок",
                    "Сделано с помощью": "Зроблена з дапамогай",
                    Email: "Email",
                    "Имя": "Імя",
                    "Телефон": "Тэлефон",
                    "За каждый ответ": "За кожны адказ",
                    "Скидка": "Зніжка",
                    "Другое": "Іншае",
                    "Выберите вариант ответа слева": "Выберыце варыянт адказу злева",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Падаючы вашы кантактныя дадзеныя, вы згаджаецеся на апрацоўку персанальнай інфармацыі ў адпаведнасці з",
                    "пользовательским соглашением": "карыстацкай дамовай",
                    "Выберите вариант ответа снизу": "Выберыце варыянт адказу знізу",
                    "От": "Ад",
                    "До": "Да",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Студзень",
                    "Февраль": "Лютага",
                    "Март": "Сакавік",
                    "Апрель": "Красавік",
                    "Май": "Май",
                    "Июнь": "Чэрвень",
                    "Июль": "Ліпеня",
                    "Август": "Жнівень",
                    "Сентябрь": "Верасень",
                    "Октябрь": "Кастрычніка",
                    "Ноябрь": "Лістапада",
                    "Декабрь": "Снежні",
                    "У меня нет email": "У мяне няма email",
                    "Введите имя": "Калі ласка, увядзіце імя",
                    "Введите телефон": "увядзіце тэлефон",
                    "Введите email": "Калі ласка, увядзіце email",
                    "mail_40mail.ru": "mail_40mail.by",
                    "Игорь": "Ігар",
                    "+7 (900) 000-00-00": "+375 (11) 111-11-11",
                    "Сейчас": "Зараз",
                    "Сброс": "Скід",
                    "Действует еще": "Дзейнічае яшчэ",
                    "Каталог в подарок": "Каталог у падарунак",
                    "Прайс-лист": "Прайс ліст",
                    "Отлично. Остался последний шаг!": "Выдатна. Застаўся апошні крок!",
                    "С": "З",
                    "политикой конфиденциальности": "палітыкай прыватнасці",
                    "ознакомлен": "азнаёмлены",
                    'К этой группе привязан квиз "{title}"': 'Да гэтай групы прывязаны квіз "{title}"',
                    "Редактировать квиз": "Рэдагаваць квіз",
                    "Привязать другой квиз": "Прывязаць іншы квіз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Каб прывязаць квіз да групы vk, увядзiце яго id і націсніце "Прывязаць"',
                    "Введите id квиза": "Увядзіце id квіз",
                    "Привязать": "Прывязаць",
                    "Использовать мессенджер": "Выкарыстоўваць мессенджер",
                    "Куда присылать результаты?": "Куды дасылаць вынікі?",
                    "Вернуться к вводу контактов": "Вярнуцца да ўводу кантактаў",
                    "Выбрать другой мессенджер": "Выбраць іншы мессенджер",
                    "Введите логин": "Увядзіце лагін",
                    "Ваши бонусы": "Вашыя бонусы",
                    "Введите логин или id": "Калі ласка, увядзіце нумар ці лагін",
                    "Введите номер": "Калі ласка, увядзіце нумар",
                    "Введите номер или логин": "Калі ласка, увядзіце нумар ці лагін",
                    "Каталог": "Каталог",
                    "Сделано в": "Зроблена ў",
                    "Скачать": "Спампаваць",
                    "Пройти тест": "Прайсці тэст",
                    "Бонусы после прохождения теста": "Бонусы пасля праходжання тэсту",
                    "такой квиз не существует": "такой квіз не існуе",
                    "не удалось загрузить тест": "не ўдалося загрузіць тэст",
                    "выберите один или несколько": "абярыце адзін або некалькі",
                    "можно пропустить": "можна прапусціць",
                    "Мы не смогли рассчитать для вас результат": "Мы не змаглі разлічыць для вас вынік",
                    "Попробовать ещё раз": "Паспрабаваць яшчэ раз",
                    "Получите ваши бонусы далее": "Атрымаеце вашыя бонусы далей",
                    "Узнать подробнее": "Даведацца больш падрабязна",
                    "Подсчёт результатов": "Падлік вынікаў",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "да {cost} {currency}",
                    "от {cost} {currency}": "ад {cost} {currency}",
                    "Пройти тест заново": "Прайсці тэст зноўку",
                    "Не знаю, что выбрать": "Не ведаю, што выбраць",
                    "или": "або",
                    "Ваши результаты": "Вашы вынікі",
                    "Выберите интересующий вас вариант": "Выберыце цікавіць вас варыянт",
                    "Идёт переадресация в мессенджер": "Ідзе пераадрасацыя ў мессенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Націсніце [тут](#), калі гэтага не здарылася",
                    "Загрузка": "Загрузка",
                    "Страна": "Краіна",
                    "Нужно выбрать страну": "Трэба выбраць краіну",
                    "Например": "Напрыклад",
                    "Идёт загрузка файлов": "Ідзе загрузка файлаў",
                    "Не закрывайте страницу": "Не зачыняйце старонку",
                    "Нажмите, чтобы загрузить файл": "Націсніце, каб загрузіць файл",
                    "Или перетяните его из папки в это поле": "Або перацягні яго з тэчкі ў гэтае поле",
                    "Файл {name} слишком большой": "Файл {name} занадта вялікі",
                    "Идёт переадресация на {-url}": "Ідзе пераадрасацыя на {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            de: {
                translation: {
                    "Ваша скидка": "Ihr Rabatt",
                    "Отлично. Последний шаг!": "Gut! Letzter Schritt!",
                    "Итоговая скидка": "Ganzer Rabatt",
                    "Дополнительно": "Fortgeschritten",
                    "Получить результаты": "Ergebnisse erhalten",
                    "Спасибо": "Danke",
                    "Готово": "Ist fertig",
                    "Назад": "Zurück",
                    "Далее": "Weiter",
                    "Последний шаг": "Letzter Schritt",
                    "Сделано с помощью": "Hergestellt von",
                    Email: "Email",
                    "Имя": "Name",
                    "Телефон": "Telefon",
                    "За каждый ответ": "Für jede Antwort",
                    "Скидка": "Rabatt",
                    "Другое": "Andere",
                    "Выберите вариант ответа слева": "Wählen Sie die Antwort auf der linken Seite",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Mit der Übermittlung Ihrer Kontaktdaten stimmen Sie der Verarbeitung personenbezogener Daten gemäß ",
                    "пользовательским соглашением": "Benutzervereinbarung",
                    "Выберите вариант ответа снизу": "Wähle eine Antwort von unten aus",
                    "От": "Von",
                    "До": "Bis",
                    "Пн": "MO ",
                    "Вт": "DI",
                    "Ср": "MI",
                    "Чт": "DO",
                    "Пт": "FR",
                    "Сб": "SA",
                    "Вс": "SO",
                    "Январь": "Januar",
                    "Февраль": "Februar",
                    "Март": "März",
                    "Апрель": "April",
                    "Май": "Mai",
                    "Июнь": "Juni",
                    "Июль": "Juli",
                    "Август": "August",
                    "Сентябрь": "September",
                    "Октябрь": "Oktober",
                    "Ноябрь": "November",
                    "Декабрь": "Dezember",
                    "У меня нет email": "Ich habe keine E-Mail",
                    "Введите имя": "Schreibe den Namen",
                    "Введите телефон": "Schreibe ein Telefon",
                    "Введите email": "E-Mail schreiben",
                    "mail_40mail.ru": "mail_40mail.de",
                    "Игорь": "Georg",
                    "+7 (900) 000-00-00": "(+49) 1111111111 ",
                    "Сейчас": "Jetzt",
                    "Сброс": "Zurücksetzen",
                    "Действует еще": "Noch gültig",
                    "Каталог в подарок": "Katalog als Geschenk",
                    "Прайс-лист": "Preisliste",
                    "Отлично. Остался последний шаг!": "Super. Ich war letzten Schritt!",
                    "С": "mit",
                    "ознакомлен": "bekannt",
                    "политикой конфиденциальности": "Datenschutzrichtlinie",
                    'К этой группе привязан квиз "{title}"': 'Ein Quiz "{title}" ist an diese Gruppe gebunden.',
                    "Редактировать квиз": "Quiz bearbeiten",
                    "Привязать другой квиз": "Schnappen Sie ein weiteres Quiz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Um ein Quiz an die vk-Gruppe zu binden, geben Sie seine ID ein und klicken Sie auf "Snap"',
                    "Введите id квиза": "Geben Sie die Quiz-ID",
                    "Привязать": "Zu binden",
                    "Ваши бонусы": "Deine Boni",
                    "Использовать мессенджер": "Verwenden Sie Instant Messenger",
                    "Куда присылать результаты?": "Wohin mit den Ergebnissen?",
                    "Вернуться к вводу контактов": "Zurück zur Kontakteingabe",
                    "Выбрать другой мессенджер": "Wähle einen anderen Messenger",
                    "Введите логин": "Geben Sie Login",
                    "Введите логин или id": "Geben Sie Login oder ID",
                    "Введите номер": "Geben Sie Nummer",
                    "Введите номер или логин": "Geben Sie Nummer oder Login",
                    "Каталог": "Katalog",
                    "Сделано в": "Made in",
                    "Скачать": "Herunterladen",
                    "Пройти тест": "Bestehe den Test",
                    "Бонусы после прохождения теста": "Boni nach Bestehen des Tests",
                    "такой квиз не существует": "Dieses Quiz existiert nicht",
                    "не удалось загрузить тест": "Test konnte nicht geladen werden",
                    "выберите один или несколько": "Wählen Sie eine oder mehrere aus",
                    "можно пропустить": "kann überspringen",
                    "Мы не смогли рассчитать для вас результат": "Wir konnten das Ergebnis für Sie nicht berechnen.",
                    "Попробовать ещё раз": "Versuchen Sie es erneut",
                    "Получите ваши бонусы далее": "Holen Sie sich Ihre Boni weiter",
                    "Узнать подробнее": "Erfahren Sie mehr",
                    "Подсчёт результатов": "Ergebnisse zählen",
                    "Идёт загрузка файлов": "Dateien laden",
                    "Не закрывайте страницу": "Schließen Sie die Seite nicht",
                    "Идёт переадресация в мессенджер": "Es gibt eine Weiterleitung zum Boten",
                    "Нажмите [здесь](#), если этого не случилось": "Klicken Sie auf [hier](#), falls dies nicht der Fall ist",
                    "Страна": "Land",
                    "Нужно выбрать страну": "Sie müssen ein Land auswählen",
                    "Например": "Zum Beispiel",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "bis zu {cost} {currency}",
                    "от {cost} {currency}": "von {cost} {currency}",
                    "Пройти тест заново": "Machen Sie den Test erneut",
                    "Не знаю, что выбрать": "Ich weiß nicht, was ich wählen soll",
                    "или": "oder",
                    "Ваши результаты": "Ihre Ergebnisse",
                    "Выберите интересующий вас вариант": "Wählen Sie die Option, die Sie interessiert",
                    "Нажмите, чтобы загрузить файл": "Klicken Sie hier, um die Datei herunterzuladen",
                    "Или перетяните его из папки в это поле": "Oder ziehen Sie es aus dem Ordner in dieses Feld.",
                    "Файл {name} слишком большой": "{name} ist zu groß",
                    "Загрузка": "Laden",
                    "Идёт переадресация на {-url}": "Weiterleiten an {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            en: {
                translation: {
                    "Ваша скидка": "Your discount",
                    "Отлично. Последний шаг!": "Excellent. Last step!",
                    "Итоговая скидка": "Final discount",
                    "Дополнительно": "Additionally",
                    "Получить результаты": "Get results",
                    "Спасибо": "Thank you",
                    "Готово": "Done",
                    "Назад": "Back",
                    "Далее": "Next",
                    "Последний шаг": "Last step",
                    "Сделано с помощью": "Powered by",
                    Email: "Email",
                    "Имя": "Name",
                    "Телефон": "Phone",
                    "За каждый ответ": "For each answer",
                    "Скидка": "Discount",
                    "Другое": "Other",
                    "Выберите вариант ответа слева": "Select answer option on the left",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "By providing your contact information, you agree to the processing of personal information in accordance with the",
                    "пользовательским соглашением": "user agreement",
                    "Выберите вариант ответа снизу": "Choose the answer from below",
                    "От": "From",
                    "До": "To",
                    "Пн": "M",
                    "Вт": "Tu",
                    "Ср": "W",
                    "Чт": "Th",
                    "Пт": "F",
                    "Сб": "S",
                    "Вс": "Su",
                    "Январь": "January",
                    "Февраль": "February",
                    "Март": "March",
                    "Апрель": "April",
                    "Май": "May",
                    "Июнь": "June",
                    "Июль": "July",
                    "Август": "August",
                    "Сентябрь": "September",
                    "Октябрь": "October",
                    "Ноябрь": "November",
                    "Декабрь": "December",
                    "У меня нет email": "I don't have email",
                    "Введите имя": "Enter your name",
                    "Введите телефон": "Enter your phone",
                    "Введите email": "Enter your email",
                    "mail_40mail.ru": "mail_40google.com",
                    "Игорь": "Benny",
                    "+7 (900) 000-00-00": "+1-202-555-0105",
                    "Сейчас": "Now",
                    "Сброс": "Reset",
                    "Действует еще": "Expires in",
                    "Каталог в подарок": "Gift catalog",
                    "Прайс-лист": "Price list",
                    "Отлично. Остался последний шаг!": "Excellent. The last step is left!",
                    "С": "I agree to the",
                    "политикой конфиденциальности": "Privacy policy",
                    "ознакомлен": "",
                    'К этой группе привязан квиз "{title}"': 'This group was attached to quiz "{title}"',
                    "Редактировать квиз": "Edit quiz",
                    "Привязать другой квиз": "Attach another quiz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Enter quiz id and click "Attach" to attach quiz to vk group',
                    "Введите id квиза": "Enter quiz id",
                    "Использовать мессенджер": "Use instant messenger",
                    "Куда присылать результаты?": "Where to send the results?",
                    "Вернуться к вводу контактов": "Back to contacts",
                    "Выбрать другой мессенджер": "Select another messenger",
                    "Введите логин": "Enter your login",
                    "Привязать": "Attach",
                    "Ваши бонусы": "Your bonuses",
                    "Введите логин или id": "Enter your login or id",
                    "Введите номер": "Enter your number",
                    "Введите номер или логин": "Enter your number or login",
                    "Каталог": "Catalog",
                    "Сделано в": "Made in",
                    "Скачать": "Download",
                    "Пройти тест": "Take the test",
                    "Бонусы после прохождения теста": "Bonus after passing the test",
                    "такой квиз не существует": "this quiz does not exists",
                    "не удалось загрузить тест": "failed to load test",
                    "выберите один или несколько": "select one or more",
                    "можно пропустить": "can skip",
                    "Мы не смогли рассчитать для вас результат": "We could not calculate the result for you",
                    "Попробовать ещё раз": "Try again",
                    "Получите ваши бонусы далее": "Get your bonuses next step",
                    "Узнать подробнее": "More",
                    "Подсчёт результатов": "Results calculation running",
                    "{cost} {currency}": "{currency} {cost}",
                    "до {cost} {currency}": "up to {currency} {cost}",
                    "от {cost} {currency}": "from {currency} {cost}",
                    "Пройти тест заново": "Take the quiz again",
                    "Не знаю, что выбрать": "I do not know what to choose",
                    "или": "or",
                    "Ваши результаты": "Your results",
                    "Выберите интересующий вас вариант": "Choose the option you are interested in",
                    "Идёт переадресация в мессенджер": "Redirecting to messenger",
                    "Нажмите [здесь](#), если этого не случилось": "Click [here](#) if it does not happen",
                    "Загрузка": "Loading",
                    "Страна": "Country",
                    "Нужно выбрать страну": "You need to choose a country",
                    "Например": "For example",
                    "Идёт загрузка файлов": "File uploading",
                    "Не закрывайте страницу": "Do not close a page",
                    "Нажмите, чтобы загрузить файл": "Click for upload file",
                    "Или перетяните его из папки в это поле": "Or move it from a folder",
                    "Файл {name} слишком большой": "File {name} is too large",
                    "Идёт переадресация на {-url}": "Redirecting to {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            es: {
                translation: {
                    "Ваша скидка": "Su oferta",
                    "Отлично. Последний шаг!": "Perfecto! Último paso!",
                    "Итоговая скидка": "Oferta final",
                    "Дополнительно": "Adicionalmente",
                    "Получить результаты": "Obtener resultados",
                    "Спасибо": "Gracias",
                    "Готово": "Listo",
                    "Назад": "Atras",
                    "Далее": "Continuar",
                    "Последний шаг": "Último paso",
                    "Сделано с помощью": "Hecho con ayuda de",
                    Email: "Correo electrónico",
                    "Имя": "Nombre",
                    "Телефон": "Teléfono",
                    "За каждый ответ": "Por cada respuesta",
                    "Скидка": "Oferta",
                    "Другое": "Otro",
                    "Выберите вариант ответа слева": "Elige la opción de respuesta izquierda",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Presentando sus datos de contacto, está de acuerdo con el procesamiento de información personal de acuerdo con",
                    "пользовательским соглашением": "Condiciones de usuario",
                    "Выберите вариант ответа снизу": "Elige la opción de respuesta de abajo",
                    "От": "De",
                    "До": "Hasta",
                    "Пн": "L",
                    "Вт": "M",
                    "Ср": "X",
                    "Чт": "J",
                    "Пт": "V",
                    "Сб": "S",
                    "Вс": "D",
                    "Январь": "Enero",
                    "Февраль": "Febrero",
                    "Март": "Marzo",
                    "Апрель": "Abril",
                    "Май": "Mayo",
                    "Июнь": "Junio",
                    "Июль": "Julio",
                    "Август": "Agosto",
                    "Сентябрь": "Septiembre",
                    "Октябрь": "Octubre",
                    "Ноябрь": "Noviembre",
                    "Декабрь": "Diciembre",
                    "У меня нет email": "No tengo correo electrónico",
                    "Введите имя": "Introduzca el nombre",
                    "Введите телефон": "Introduzca el teléfono",
                    "Введите email": "Introduzca el correo electrónico",
                    "mail_40mail.ru": "mail_40gmail.com",
                    "Игорь": "Jorge",
                    "+7 (900) 000-00-00": "(+34) 1111111111",
                    "Сейчас": "Ahora",
                    "Сброс": "Descarga",
                    "Действует еще": "Activo aún",
                    "Каталог в подарок": "Catalogo de regalo",
                    "Прайс-лист": "Lista de precios",
                    "Отлично. Остался последний шаг!": "Perfecto. Queda el último paso!",
                    "С": "Con",
                    "ознакомлен": "Familiarizado",
                    "политикой конфиденциальности": "Política de privacidad",
                    'К этой группе привязан квиз "{title}"': "A éste grupo está vinculado.",
                    "Редактировать квиз": "Redactar kviz",
                    "Привязать другой квиз": "Vincular otro kviz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Para vincular kviz con el grupo VK introduzca su ID y seleccione "Vincular":',
                    "Введите id квиза": "Introduzca el ID",
                    "Привязать": "Vincular",
                    "Ваши бонусы": "Sus bonos",
                    "Использовать мессенджер": "Utilizar Messenger",
                    "Куда присылать результаты?": "Dónde mandar los resultados?",
                    "Вернуться к вводу контактов": "Volver a introducir el contacto",
                    "Выбрать другой мессенджер": "Elegir otro Messenger",
                    "Введите логин": "Introduzca el nombre de usuario",
                    "Введите логин или id": "Introduzca el nombre de usuario o el ID",
                    "Введите номер": "Introduzca el número",
                    "Введите номер или логин": "Introduzca el número o el nombre de usuario",
                    "Каталог": "Catálogo",
                    "Сделано в": "Hecho en",
                    "Скачать": "Descargar",
                    "Пройти тест": "Pasar el Test",
                    "Бонусы после прохождения теста": "Bonos después de pasar el test",
                    "такой квиз не существует": "Tal kviz no existe",
                    "не удалось загрузить тест": "No a sido posible descargar el test",
                    "выберите один или несколько": "Seleccione uno o varios",
                    "можно пропустить": "Se puede saltar",
                    "Мы не смогли рассчитать для вас результат": "No hemos podido calcular su resultado.",
                    "Попробовать ещё раз": "Intentar otra vez",
                    "Получите ваши бонусы далее": "Reciba su bonificación a continuación",
                    "Узнать подробнее": "Saber más",
                    "Подсчёт результатов": "Anunciar resultados",
                    "Пройти тест заново": "Pasar el test de nuevo",
                    "Не знаю, что выбрать": "No sé qué escoger",
                    "или": "O",
                    "Ваши результаты": "Sus resultados",
                    "Выберите интересующий вас вариант": "Escoja la opción que os interesa",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "hasta {cost} {currency}",
                    "от {cost} {currency}": "de {cost} {currency}",
                    "Идёт переадресация в мессенджер": "Hay un redireccionamiento al mensajero",
                    "Нажмите [здесь](#), если этого не случилось": "Haga clic [aquí](#) si esto no sucede",
                    "Загрузка": "Cargando",
                    "Страна": "País",
                    "Нужно выбрать страну": "Necesito elegir un país",
                    "Например": "Por ejemplo",
                    "Идёт загрузка файлов": "Cargando archivos",
                    "Не закрывайте страницу": "No cerrar la pagina",
                    "Нажмите, чтобы загрузить файл": "Haga clic para descargar el archivo",
                    "Или перетяните его из папки в это поле": "O arrástrelo desde la carpeta a este campo.",
                    "Файл {name} слишком большой": "{Nombre} es demasiado grande",
                    "Идёт переадресация на {-url}": "Redirigiendo a {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            hy: {
                translation: {
                    "Ваша скидка": "Ձեր զեղչը",
                    "Отлично. Последний шаг!": "Հիանալի է. Վերջին քայլ!",
                    "Итоговая скидка": "Վերջնական զեղչ",
                    "Дополнительно": "Ավելին",
                    "Получить результаты": "Ստանալ արդյունքները",
                    "Спасибо": "Շնորհակալություն",
                    "Готово": "Պատրաստ է",
                    "Назад": "Հետ",
                    "Далее": "Հաջորդը",
                    "Последний шаг": "Վերջին քայլ",
                    "Сделано с помощью": "Powered by",
                    Email: "Email",
                    "Имя": "Անուն",
                    "Телефон": "Հեռախոսահամր",
                    "За каждый ответ": "Ամեն պատասխանի համար",
                    "Скидка": "Զեղչ",
                    "Другое": "Այլ",
                    "Выберите вариант ответа слева": "Ընտրեք պատասխանի տարբերակը ձախ կողմում",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": " Ձեր կոնտակտային տվյալները տրամադրելով, դուք համաձայնվում եք անձնական տվյալների վերամշակմանը ",
                    "пользовательским соглашением": "Օգտատիրոջ համաձայնությամբ",
                    "Выберите вариант ответа снизу": "Ընտրեք պատասխանի տարբերակը ներքևում",
                    "От": "From",
                    "До": "To",
                    "Пн": "Ե",
                    "Вт": "Ե",
                    "Ср": "Չ",
                    "Чт": "Հ",
                    "Пт": "ՈՒ",
                    "Сб": "Շ",
                    "Вс": "Կ",
                    "Январь": "Հունվար",
                    "Февраль": "Փետրվար",
                    "Март": "Մարտ",
                    "Апрель": "Ապրիլ",
                    "Май": "Մայիս",
                    "Июнь": "Հունիս",
                    "Июль": "Հուլիս",
                    "Август": "Օգոստոս",
                    "Сентябрь": "Սեպտեմբեր",
                    "Октябрь": "Հոկտեմբեր",
                    "Ноябрь": "Նոյեմբեր",
                    "Декабрь": "Դեկտեմբեր",
                    "У меня нет email": "Էլփոստ չունեմ",
                    "Введите имя": "Մուտքագրեք անուն",
                    "Введите телефон": "Մուտքագրեք հեռախոսը",
                    "Введите email": "Մուտքագրեք էլփոստը",
                    "mail_40mail.ru": "mail_40mail.am",
                    "Игорь": "Իգոր",
                    "+7 (900) 000-00-00": "(+374 95) 111 111",
                    "Сейчас": "Այժմ",
                    "Сброс": "Վերագործարկեք",
                    "Действует еще": "Ավելին կան",
                    "Каталог в подарок": "Նվերների կատալոգ",
                    "Прайс-лист": "Գնացուցակ",
                    "Отлично. Остался последний шаг!": "Մեծը: Վերջին քայլն է մնացել:",
                    "С": "գ",
                    "ознакомлен": "ծանոթացնում է",
                    "политикой конфиденциальности": "Գաղտնիության քաղաքականություն",
                    'К этой группе привязан квиз "{title}"': "Այս խմբին կցված է «{title}» վիկտորինան",
                    "Редактировать квиз": "Խմբագրել վիկտորինան",
                    "Привязать другой квиз": "Հղում այլ վիկտորինային",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Տոմսը vk խմբի հետ կապելու համար մուտքագրեք իր id եւ սեղմեք "Snap":',
                    "Введите id квиза": "Մուտքագրեք Quiz ID- ն",
                    "Привязать": "ճաքել",
                    "Ваши бонусы": "ձեր բոնուսները",
                    "Использовать мессенджер": "օգտագործել փեյջերը",
                    "Куда присылать результаты?": "Որտեղ ուղարկել արդյունքները.",
                    "Вернуться к вводу контактов": "Վերադառնալ շփումների գրառումների",
                    "Выбрать другой мессенджер": "Ընտրել այլ պատգամաբերին",
                    "Введите логин": "մուտքագրեք ձեր օգտանունը",
                    "Введите логин или id": "Մուտքագրեք մուտքի կամ id",
                    "Введите номер": "Մուտքագրեք համարը",
                    "Введите номер или логин": "Մուտքագրեք համարը կամ մուտքագրեք",
                    "Каталог": "Կատալոգ",
                    "Сделано в": "Պատրաստված է",
                    "Скачать": "Բեռնել",
                    "Пройти тест": "Վերցրեք քննությունը",
                    "Бонусы после прохождения теста": "Բոնուս `փորձարկումից հետո",
                    "такой квиз не существует": "նման վիկտորինա գոյություն չունի",
                    "не удалось загрузить тест": "չհաջողվեց բեռնել փորձարկում",
                    "выберите один или несколько": "ընտրեք մեկ կամ ավելի",
                    "можно пропустить": "կարող եք բաց թողնել",
                    "Мы не смогли рассчитать для вас результат": "Մենք չկարողացանք հաշվարկել այդ արդյունքը",
                    "Попробовать ещё раз": "Կրկին փորձեք",
                    "Получите ваши бонусы далее": "Ստացեք ձեր բոնուսները",
                    "Узнать подробнее": "Իմացեք ավելին",
                    "Подсчёт результатов": "Հաշվարկման արդյունքներ",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "մինչեւ {cost} {currency}",
                    "от {cost} {currency}": "սկսած {cost} {currency}",
                    "Пройти тест заново": "Վերցրեք կրկին փորձությունը",
                    "Не знаю, что выбрать": "Ես չգիտեմ, թե ինչ պետք է ընտրի",
                    "или": "կամ",
                    "Ваши результаты": "Ձեր արդյունքները",
                    "Выберите интересующий вас вариант": "Ընտրեք այն տարբերակը, որը հետաքրքրում է ձեզ",
                    "Идёт переадресация в мессенджер": "Ուղղիչ հղում կա",
                    "Нажмите [здесь](#), если этого не случилось": "Սեղմեք [այստեղ](#), եթե դա տեղի չի ունենում",
                    "Загрузка": "բեռնում",
                    "Страна": "Երկիրը",
                    "Нужно выбрать страну": "Պետք է ընտրել երկիր",
                    "Например": "Օրինակ",
                    "Идёт загрузка файлов": "Ֆայլեր բեռնելիս",
                    "Не закрывайте страницу": "Մի փակեք էջը",
                    "Нажмите, чтобы загрузить файл": "Սեղմեք ֆայլը ներբեռնելու համար",
                    "Или перетяните его из папки в это поле": "Կամ տեղափոխեք այն թղթապանակից այս դաշտում:",
                    "Файл {name} слишком большой": "{name}- ը չափազանց մեծ է",
                    "Идёт переадресация на {-url}": "Վերահղման համար {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            kk: {
                translation: {
                    "Ваша скидка": "Сіздің жеңілдігіңіз",
                    "Отлично. Последний шаг!": "Тамаша. Соңғы қадам!",
                    "Итоговая скидка": "Қорытынды жеңілдік",
                    "Дополнительно": "Қосымша",
                    "Получить результаты": "Нәтижесін алу",
                    "Спасибо": "Рахмет",
                    "Готово": "Дайын",
                    "Назад": "Артқа",
                    "Далее": "Алға",
                    "Последний шаг": "Соңғы қадам",
                    "Сделано с помощью": "Көмегімен жасалған",
                    Email: "Email",
                    "Имя": "Аты-жөні",
                    "Телефон": "Телефон",
                    "За каждый ответ": "Әрбір жауабы бар",
                    "Скидка": "Жеңілдікпен",
                    "Другое": "Басқа",
                    "Выберите вариант ответа слева": "Сол жақтағы жауап опциясын таңдаңыз",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Сіздің байланыс ақпаратын беру арқылы сіз жеке ақпаратты өңдеу туралы келісімге",
                    "пользовательским соглашением": "сәйкес келісесіз",
                    "Выберите вариант ответа снизу": "Төменде берілген жауапты таңдаңыз",
                    "От": "Қайдан",
                    "До": "Бұған дейін",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Қаңтар",
                    "Февраль": "Ақпан",
                    "Март": "Наурыз",
                    "Апрель": "Сәуір",
                    "Май": "Мамыр",
                    "Июнь": "Маусым",
                    "Июль": "Шілде",
                    "Август": "Тамыз",
                    "Сентябрь": "Қыркүйек",
                    "Октябрь": "Қазан",
                    "Ноябрь": "Қараша",
                    "Декабрь": "Желтоқсан",
                    "У меня нет email": "Менде электрондық пошта жоқ",
                    "Введите имя": "Атын енгізіңіз",
                    "Введите телефон": "Телефонға кіріңіз",
                    "Введите email": "Электрондық поштаны енгізіңіз",
                    "mail_40mail.ru": "mail_40mail.kz",
                    "Игорь": "Игорь",
                    "+7 (900) 000-00-00": "+7 (701) 111-11-11",
                    "Сейчас": "Қазір",
                    "Сброс": "Қалпына келтіру",
                    "Действует еще": "Көп нәрсе бар",
                    "Каталог в подарок": "Сыйлық каталогы",
                    "Прайс-лист": "Бағалар тізімі",
                    "Отлично. Остался последний шаг!": "Тамаша. Соңғы қадам қалдырылды!",
                    "С": "",
                    "ознакомлен": "таныстырылған",
                    "политикой конфиденциальности": "Құпиялылық саясаты",
                    'К этой группе привязан квиз "{title}"': 'Осы топқа "{title}" атты викторина қосылды',
                    "Редактировать квиз": "Викторинаны өңдеу",
                    "Привязать другой квиз": "Басқа викторина байланыстырыңыз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Vk тобына билетті байластыру үшін оның идентификаторын енгізіңіз және "байланыстыру" түймесін басыңыз',
                    "Введите id квиза": "Викторина идентификаторын енгізіңіз",
                    "Привязать": "Соққы",
                    "Ваши бонусы": "Сіздің ұсыныстарыңыз",
                    "Использовать мессенджер": "Жедел хабар алмасуды қолданыңыз",
                    "Куда присылать результаты?": "Куда присылать результаты?",
                    "Вернуться к вводу контактов": "Нәтижелерді қайда жіберемін?",
                    "Выбрать другой мессенджер": "Басқа хабаршыны таңдаңыз",
                    "Введите логин": "Кіруді енгізіңіз",
                    "Введите логин или id": "Кіру немесе идентификаторды енгізіңіз",
                    "Введите номер": "Нөмірді енгізіңіз",
                    "Введите номер или логин": "Нөмірді немесе логинді енгізіңіз",
                    "Каталог": "Каталогы",
                    "Сделано в": "Жасалды",
                    "Скачать": "Жүктеу",
                    "Пройти тест": "Сынақты алыңыз",
                    "Бонусы после прохождения теста": "Сынақтан өткеннен кейінгі бонус",
                    "такой квиз не существует": "мұндай викторина жоқ",
                    "не удалось загрузить тест": "сынақты жүктей алмады",
                    "выберите один или несколько": "біреуін немесе бірнешеуін таңдаңыз",
                    "можно пропустить": "сіз өткізіп жібере аласыз",
                    "Мы не смогли рассчитать для вас результат": "Біз сіз үшін нәтижені есептей алмадық",
                    "Попробовать ещё раз": "Әрекетті қайталаңыз",
                    "Получите ваши бонусы далее": "Бонустарыңызды одан әрі алыңыз",
                    "Узнать подробнее": "Көбірек біліңіз",
                    "Подсчёт результатов": "Нәтижелерді есептеу",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "{cost} {currency} дейін",
                    "от {cost} {currency}": "{cost} {currency} бастап",
                    "Пройти тест заново": "Сынақты қайтадан алыңыз",
                    "Не знаю, что выбрать": "Мен нені таңдау керектігін білмеймін",
                    "или": "немесе",
                    "Ваши результаты": "Сіздің нәтижелеріңіз",
                    "Выберите интересующий вас вариант": "Қызығушылық танытқан параметрді таңдаңыз",
                    "Идёт переадресация в мессенджер": "Хабаршыға бағыттау бар",
                    "Нажмите [здесь](#), если этого не случилось": "Егер бұл болмаса, [мында](#) басыңыз",
                    "Загрузка": "Жүктеу",
                    "Страна": "Ел",
                    "Нужно выбрать страну": "Елді таңдау керек",
                    "Например": "Мысалы",
                    "Идёт загрузка файлов": "Файлдарды жүктеу",
                    "Не закрывайте страницу": "Бетті жаппаңыз",
                    "Нажмите, чтобы загрузить файл": "Файлды жүктеу үшін басыңыз",
                    "Или перетяните его из папки в это поле": "Немесе қалтаны осы өріске апарыңыз.",
                    "Файл {name} слишком большой": "Файл {name} тым үлкен",
                    "Идёт переадресация на {-url}": "Қайта бағыттау {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            ru: {
                translation: {
                    "Ваша скидка": "Ваша скидка",
                    "Отлично. Последний шаг!": "Отлично. Последний шаг!",
                    "Итоговая скидка": "Итоговая скидка",
                    "Дополнительно": "Дополнительно",
                    "Получить результаты": "Получить результаты",
                    "Спасибо": "Спасибо",
                    "Готово": "Готово",
                    "Назад": "Назад",
                    "Далее": "Далее",
                    "Последний шаг": "Последний шаг",
                    "Сделано с помощью": "Сделано с помощью",
                    Email: "Email",
                    "Имя": "Имя",
                    "Телефон": "Телефон",
                    "За каждый ответ": "За каждый ответ",
                    "Скидка": "Скидка",
                    "Другое": "Другое",
                    "Выберите вариант ответа слева": "Выберите вариант ответа слева",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с",
                    "пользовательским соглашением": "пользовательским соглашением",
                    "Выберите вариант ответа снизу": "Выберите вариант ответа снизу",
                    "От": "От",
                    "До": "До",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Январь",
                    "Февраль": "Февраль",
                    "Март": "Март",
                    "Апрель": "Апрель",
                    "Май": "Май",
                    "Июнь": "Июнь",
                    "Июль": "Июль",
                    "Август": "Август",
                    "Сентябрь": "Сентябрь",
                    "Октябрь": "Октябрь",
                    "Ноябрь": "Ноябрь",
                    "Декабрь": "Декабрь",
                    "У меня нет email": "У меня нет email",
                    "Введите имя": "Введите имя",
                    "Введите телефон": "Введите телефон",
                    "Введите email": "Введите email",
                    "mail_40mail.ru": "mail_40mail.ru",
                    "Игорь": "Игорь",
                    "+7 (900) 000-00-00": "+7 (900) 000-00-00",
                    "Сейчас": "Сейчас",
                    "Сброс": "Сброс",
                    "Действует еще": "Действует еще",
                    "Каталог в подарок": "Каталог в подарок",
                    "Прайс-лист": "Прайс-лист",
                    "Отлично. Остался последний шаг!": "Отлично. Остался последний шаг!",
                    "С": "С",
                    "ознакомлен": "ознакомлен",
                    "политикой конфиденциальности": "политикой конфиденциальности",
                    'К этой группе привязан квиз "{title}"': 'К этой группе привязан квиз "{title}"',
                    "Редактировать квиз": "Редактировать квиз",
                    "Привязать другой квиз": "Привязать другой квиз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"',
                    "Введите id квиза": "Введите id квиза",
                    "Привязать": "Привязать",
                    "Ваши бонусы": "Ваши бонусы",
                    "Использовать мессенджер": "Использовать мессенджер",
                    "Куда присылать результаты?": "Куда присылать результаты?",
                    "Вернуться к вводу контактов": "Вернуться к вводу контактов",
                    "Выбрать другой мессенджер": "Выбрать другой мессенджер",
                    "Введите логин": "Введите логин",
                    "Введите логин или id": "Введите логин или id",
                    "Введите номер": "Введите номер",
                    "Введите номер или логин": "Введите номер или логин",
                    "Каталог": "Каталог",
                    "Сделано в": "Сделано в",
                    "Скачать": "Скачать",
                    "Пройти тест": "Пройти тест",
                    "Бонусы после прохождения теста": "Бонусы после прохождения теста",
                    "такой квиз не существует": "такой квиз не существует",
                    "не удалось загрузить тест": "не удалось загрузить тест",
                    "Выберите один или несколько": "Выберите один или несколько",
                    "выберите один или несколько": "выберите один или несколько",
                    "можно пропустить": "можно пропустить",
                    "Мы не смогли рассчитать для вас результат": "Мы не смогли рассчитать для вас результат",
                    "Попробовать ещё раз": "Попробовать ещё раз",
                    "Получите ваши бонусы далее": "Получите ваши бонусы далее",
                    "Узнать подробнее": "Узнать подробнее",
                    "Подсчёт результатов": "Подсчёт результатов",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "до {cost} {currency}",
                    "от {cost} {currency}": "от {cost} {currency}",
                    "Пройти тест заново": "Пройти тест заново",
                    "Не знаю, что выбрать": "Не знаю, что выбрать",
                    "или": "или",
                    "Ваши результаты": "Ваши результаты",
                    "Выберите интересующий вас вариант": "Выберите интересующий вас вариант",
                    "Идёт переадресация в мессенджер": "Идёт переадресация в мессенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Нажмите [здесь](#), если этого не случилось",
                    "Загрузка": "Загрузка",
                    "Страна": "Страна",
                    "Нужно выбрать страну": "Нужно выбрать страну",
                    "Например": "Например",
                    "Идёт загрузка файлов": "Идёт загрузка файлов",
                    "Не закрывайте страницу": "Не закрывайте страницу",
                    "Нажмите, чтобы загрузить файл": "Нажмите, чтобы загрузить файл",
                    "Или перетяните его из папки в это поле": "Или перетяните его из папки в это поле",
                    "Файл {name} слишком большой": "Файл {name} слишком большой",
                    "Идёт переадресация на {-url}": "Идёт переадресация на {-url}",
                    "ВКонтакте": "ВКонтакте",
                    "поделиться": "поделиться"
                }
            },
            uk: {
                translation: {
                    "Ваша скидка": "Ваша знижка",
                    "Отлично. Последний шаг!": "Добре, останній крок!",
                    "Итоговая скидка": "Підсумкова знижка",
                    "Дополнительно": "Додатково",
                    "Получить результаты": "Отримати результати",
                    "Спасибо": "Дякуємо",
                    "Готово": "Готово",
                    "Назад": "Назад",
                    "Далее": "Далі",
                    "Последний шаг": "Останній крок",
                    "Сделано с помощью": "Зроблено задопомогою",
                    Email: "Email",
                    "Имя": "Ім‘я",
                    "Телефон": "Телефон",
                    "За каждый ответ": "За кожен відповідь",
                    "Скидка": "Знижка",
                    "Другое": "Інше",
                    "Выберите вариант ответа слева": "Виберіть варіант відповіді зліва",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Надаючи ваші контактні дані, ви погоджуєтеся на обробку персональних даних відповідно до призначеним для",
                    "пользовательским соглашением": "користувача угодою",
                    "Выберите вариант ответа снизу": "Виберіть варіант відповіді знизу",
                    "От": "Від",
                    "До": "До",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Нд",
                    "Январь": "Січень",
                    "Февраль": "Лютий",
                    "Март": "Березень",
                    "Апрель": "Квітень",
                    "Май": "Травень",
                    "Июнь": "Червень",
                    "Июль": "Липень",
                    "Август": "Серпень",
                    "Сентябрь": "Вересень",
                    "Октябрь": "Жовтень",
                    "Ноябрь": "Листопад",
                    "Декабрь": "Грудень",
                    "У меня нет email": "У мене немає email",
                    "Введите имя": "Введіть ім'я",
                    "Введите телефон": "Введіть телефон",
                    "Введите email": "Введіть email",
                    "mail_40mail.ru": "mail_40mail.ua",
                    "Игорь": "Ігор",
                    "+7 (900) 000-00-00": "+38 (000) 00 00 00",
                    "Сейчас": "Зараз",
                    "Сброс": "Скидання",
                    "Действует еще": "Діє ще",
                    "Каталог в подарок": "Каталог в подарунок",
                    "Прайс-лист": "Прайс-лист",
                    "Отлично. Остался последний шаг!": "Відмінно. Залишився останній крок!",
                    "С": "С",
                    "политикой конфиденциальности": "політикою конфіденційності",
                    "ознакомлен": "ознайомлений",
                    'К этой группе привязан квиз "{title}"': 'До цієї групи прив\'язаний квіз "{title}"',
                    "Редактировать квиз": "Редагувати квіз",
                    "Привязать другой квиз": "Прив'язати інший квіз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': "Щоб прив'язати квіз до групи vk, введіть його id і натисніть \"Прив'язати\"",
                    "Введите id квиза": "Введіть id квіза",
                    "Привязать": "Прив'язати",
                    "Ваши бонусы": "Ваші бонуси",
                    "Использовать мессенджер": "Використовувати месенджер",
                    "Куда присылать результаты?": "Куди надсилати результати?",
                    "Вернуться к вводу контактов": "Повернутися до введення контактів",
                    "Выбрать другой мессенджер": "Вибрати інше месенджер",
                    "Введите логин": "Введіть логін",
                    "Введите логин или id": "Введіть логін або id",
                    "Введите номер": "Введіть номер",
                    "Введите номер или логин": "Введіть номер або логін",
                    "Каталог": "Каталог",
                    "Сделано в": "Зроблено в",
                    "Скачать": "Завантажити",
                    "Пройти тест": "Пройти тест",
                    "Бонусы после прохождения теста": "Бонуси після проходження тесту",
                    "такой квиз не существует": "такий квіз не існує",
                    "не удалось загрузить тест": "не вдалося завантажити тест",
                    "выберите один или несколько": "виберіть один або декілька",
                    "можно пропустить": "можна пропустити",
                    "Мы не смогли рассчитать для вас результат": "Ми не змогли розрахувати для вас результат",
                    "Попробовать ещё раз": "Спробувати ще раз",
                    "Получите ваши бонусы далее": "Отримайте ваші бонуси далі",
                    "Узнать подробнее": "Дізнатись детальніше",
                    "Подсчёт результатов": "Підрахунок результатів",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "до {cost} {currency}",
                    "от {cost} {currency}": "від {cost} {currency}",
                    "Пройти тест заново": "Пройти тест заново",
                    "Не знаю, что выбрать": "Не знаю, що вибрати",
                    "или": "або",
                    "Ваши результаты": "Ваші результати",
                    "Выберите интересующий вас вариант": "Виберіть цікавий для вас варіант",
                    "Идёт переадресация в мессенджер": "Йде переадресація в месенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Натисніть [тут](#), якщо цього не сталося",
                    "Загрузка": "Завантаження",
                    "Страна": "Країна",
                    "Нужно выбрать страну": "Потрібно вибрати країну",
                    "Например": "Наприклад",
                    "Идёт загрузка файлов": "Триває завантаження файлів",
                    "Не закрывайте страницу": "Чи не закривайте сторінку",
                    "Нажмите, чтобы загрузить файл": "Натисніть, щоб завантажити файл",
                    "Или перетяните его из папки в это поле": "Або перетягніть його з папки в це поле",
                    "Файл {name} слишком большой": "Файл {name} занадто великий",
                    "Идёт переадресация на {-url}": "Йде переадресація на {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            zh: {
                translation: {
                    "Ваша скидка": "折扣优惠",
                    "Отлично. Последний шаг!": "好的，最后一步",
                    "Итоговая скидка": "最终折扣",
                    "Дополнительно": "附加",
                    "Получить результаты": "结果",
                    "Спасибо": "谢谢",
                    "Готово": "完成",
                    "Назад": "返回",
                    "Далее": "下一步",
                    "Последний шаг": "最后一步",
                    "Сделано с помощью": "协助设计",
                    Email: "电子邮件",
                    "Имя": "名字",
                    "Телефон": "电话",
                    "За каждый ответ": "每一个答案",
                    "Скидка": "折扣优惠",
                    "Другое": "其他",
                    "Начните отвечать для подбора вариантов": "开始回答多重选择",
                    "Выберите вариант ответа слева": "选择左侧的答案选项",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "通过提供您的联系信息，您同意按照以下方式处理个人信息",
                    "пользовательским соглашением": "用户协议",
                    "Выберите вариант ответа снизу": "从下面选择答案",
                    "От": "从",
                    "До": "至",
                    "Пн": "周一",
                    "Вт": "周二",
                    "Ср": "周三",
                    "Чт": "周四",
                    "Пт": "周五",
                    "Сб": "周六",
                    "Вс": "周七",
                    "Январь": "一月",
                    "Февраль": "二月",
                    "Март": "三月",
                    "Апрель": "四月",
                    "Май": "五月",
                    "Июнь": "六月",
                    "Июль": "七月",
                    "Август": "八月",
                    "Сентябрь": "九月",
                    "Октябрь": "十月",
                    "Ноябрь": "十一月",
                    "Декабрь": "十二月",
                    "У меня нет email": "我没有电子邮件",
                    "Введите имя": "输入名称",
                    "Введите телефон": "输入电话",
                    "Введите email": "输入邮箱",
                    "mail_40mail.ru": "mail_40mail.com",
                    "Игорь": "伊戈尔",
                    "+7 (900) 000-00-00": "021 00000000",
                    "Сейчас": "现在",
                    "Сброс": "重置",
                    "Действует еще": "还有更多",
                    "Каталог в подарок": "礼品目录",
                    "Прайс-лист": "价目表",
                    "Отлично. Остался последний шаг!": "优秀的。最后一步了！",
                    "С": "",
                    "политикой конфиденциальности": "我已阅读隐私",
                    "ознакомлен": "政策",
                    'К этой группе привязан квиз "{title}"': '对这个小组附上了测验"{title}"',
                    "Редактировать квиз": "编辑测验",
                    "Привязать другой квиз": "链接另一个测验",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': "要将测验链接到vk组，请输入其ID并单击“绑定”",
                    "Введите id квиза": "输入测验ID",
                    "Привязать": "快照",
                    "Ваши бонусы": "你的奖金",
                    "Использовать мессенджер": "使用即时通讯工具",
                    "Куда присылать результаты?": "我在哪里发送结果？",
                    "Вернуться к вводу контактов": "返回进入联系人",
                    "Выбрать другой мессенджер": "选择另一个信使",
                    "Введите логин": "输入登录名",
                    "Введите логин или id": "输入登录名或ID",
                    "Введите номер": "输入数字",
                    "Введите номер или логин": "输入号码或登录",
                    "Каталог": "目录",
                    "Сделано в": "制造",
                    "Скачать": "下载",
                    "Пройти тест": "参加考试",
                    "Бонусы после прохождения теста": "通过测试后的奖金",
                    "такой квиз не существует": "这样的测验不存在",
                    "не удалось загрузить тест": "未能加载测试",
                    "выберите один или несколько": "选择一个或多个",
                    "можно пропустить": "你可以跳过",
                    "Мы не смогли рассчитать для вас результат": "我们无法为您计算结果。",
                    "Попробовать ещё раз": "再试一次",
                    "Получите ваши бонусы далее": "进一步获得奖金",
                    "Узнать подробнее": "了解更多",
                    "Подсчёт результатов": "计算结果",
                    "{cost} {currency}": "{cost}{currency}",
                    "до {cost} {currency}": "高达{cost}{currency}",
                    "от {cost} {currency}": "从{cost}{currency}",
                    "Пройти тест заново": "再次参加考试",
                    "Не знаю, что выбрать": "我不知道该选择什么",
                    "или": "或",
                    "Ваши результаты": "你的结果",
                    "Выберите интересующий вас вариант": "选择您感兴趣的选项。",
                    "Идёт переадресация в мессенджер": "有一个重定向到信使",
                    "Нажмите [здесь](#), если этого не случилось": "如果没有[发生](#)，请单击此处。",
                    "Загрузка": "装载",
                    "Страна": "国家",
                    "Нужно выбрать страну": "需要选择一个国家",
                    "Например": "例如",
                    "Идёт загрузка файлов": "加載文件",
                    "Не закрывайте страницу": "不要关闭页面",
                    "Нажмите, чтобы загрузить файл": "点击下载文件",
                    "Или перетяните его из папки в это поле": "或者将其从文件夹拖到此字段。",
                    "Файл {name} слишком большой": "{name}太大了",
                    "Идёт переадресация на {-url}": "重定向到 {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            }
        }
    },
    c06f: function(t, e, s) {
        "use strict";
        var n = s("c39c"),
            i = s.n(n);
        i.a
    },
    c39c: function(t, e, s) {},
    c481: function(t, e, s) {},
    cb5b: function(t, e, s) {},
    cc8c: function(t, e, s) {
        "use strict";
        var n = s("72fa"),
            i = s.n(n);
        i.a
    },
    ccaf: function(t, e, s) {},
    cdae: function(t, e, s) {
        "use strict";
        var n, i, a = s("9b02"),
            o = s.n(a),
            r = s("bba4"),
            c = s.n(r),
            u = s("94ed"),
            l = {
                mdiAccount: u["a"],
                mdiCheckboxMarkedCircleOutline: u["g"],
                mdiCheckCircleOutline: u["g"],
                mdiReload: u["u"],
                mdiArrowLeft: u["c"],
                mdiArrowRight: u["d"],
                mdiChevronLeft: u["i"],
                mdiChevronRight: u["j"],
                mdiClock: u["k"],
                mdiClose: u["l"],
                mdiCloseCircle: u["m"],
                mdiGift: u["p"],
                mdiCheckboxMultipleMarkedCircle: u["h"],
                mdiPencil: u["s"],
                mdiCalendarToday: u["e"],
                mdiAlertCircle: u["b"],
                mdiEmail: u["n"],
                mdiFileDocumentBoxOutline: u["o"],
                mdiPhone: u["t"],
                mdiLoading: u["r"],
                mdiCheckCircle: u["f"],
                mdiInformation: u["q"],
                mdiFileDocumentBoxCheckOutline: "M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17"
            },
            d = {
                functional: !0,
                name: "icon",
                props: {
                    icon: Array,
                    size: String
                },
                render: function(t, e) {
                    var s = o()(e, "props.icon.1");
                    return t("svg", {
                        class: ["mdi-icon", e.props.size],
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [t("title", e.props.icon[1]), t("path", {
                        attrs: {
                            d: l[c()(s)]
                        }
                    })])
                }
            },
            h = d,
            f = (s("83b4"), s("2877")),
            m = Object(f["a"])(h, n, i, !1, null, null, null);
        e["a"] = m.exports
    },
    d6d0: function(t, e, s) {},
    d847: function(t, e, s) {
        "use strict";
        var n = s("71ac"),
            i = s.n(n);
        i.a
    },
    de74: function(t, e, s) {
        "use strict";
        var n = s("31f0"),
            i = s.n(n);
        i.a
    },
    dfbf: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "bonuses",
                    class: ["bonuses_direction_" + t.direction, "bonuses_count_" + t.bonuses.length],
                    style: {
                        "--bonus-height": t.height + "px"
                    }
                }, t._l(t.bonuses, function(e, n) {
                    return s("Bonus", {
                        key: "bonus_" + n,
                        staticClass: "bonuses__bonus",
                        attrs: {
                            bonus: e,
                            isLocked: t.isLock(e)
                        }
                    })
                }), 1)
            },
            i = [],
            a = s("cebc"),
            o = (s("c5f6"), s("9b02")),
            r = s.n(o),
            c = s("2f62"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "bonus",
                    class: ["bonus_type_" + t.type, {
                        bonus_locked: t.isLocked,
                        bonus_unlocked: !t.isLocked
                    }]
                }, [s("div", {
                    staticClass: "bonus__wrapper",
                    style: {
                        backgroundImage: "url(" + t.imageUrl + ")"
                    },
                    on: {
                        click: t.download
                    }
                }, [s("div", {
                    staticClass: "bonus__layer"
                }), s("span", {
                    staticClass: "bonus__text"
                }, [t._v(t._s(t.text))]), !t.isLocked && t.bonus.link ? s("div", {
                    staticClass: "bonus__unlock",
                    attrs: {
                        title: t.$t("Скачать")
                    }
                }, [s("DownArrowIcon")], 1) : t._e()]), t.isLocked ? [s("LockIcon", {
                    staticClass: "bonus__lock-icon"
                }), s("div", {
                    staticClass: "bonus__lock"
                })] : t._e()], 2)
            },
            l = [],
            d = (s("4917"), s("b54a"), s("7f7f"), s("8a30")),
            h = s.n(d),
            f = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 299.995 299.995"
                    },
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 299.995 299.995",
                        "xml:space": "preserve"
                    }
                }, [s("g", [s("g", [s("g", [s("path", {
                    attrs: {
                        d: "M149.997,161.485c-8.613,0-15.598,6.982-15.598,15.598c0,5.776,3.149,10.807,7.817,13.505v17.341h15.56206F26BDAA1"
                    }
                }), s("path", {
                    attrs: {
                        d: "M150.003,85.849c-13.111,0-23.775,10.665-23.775,23.775v25.319h47.548v-25.319/n          C173.775,96.516,163.111,85.849,150.003,85.849z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M149.995,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.995,149.997s150-67.161,150521D4DA30"
                    }
                })])])])])
            },
            m = [],
            p = (s("cc8c"), s("2877")),
            g = {},
            v = Object(p["a"])(g, f, m, !1, null, "6d74ce7d", null),
            b = v.exports,
            _ = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 512.171 512.171"
                    },
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.171 512.171",
                        "xml:space": "preserve"
                    }
                }, [s("g", [s("g", [s("path", {
                    attrs: {
                        d: "M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.6380E160F7AED"
                    }
                })])])])
            },
            w = [],
            y = (s("3f6f"), {}),
            k = Object(p["a"])(y, _, w, !1, null, "d187c184", null),
            x = k.exports,
            C = s("4dbf"),
            q = s.n(C),
            z = s("ede0"),
            A = s.n(z),
            S = s("741a"),
            I = s.n(S),
            O = s("c54a"),
            $ = s.n(O),
            D = {
                components: {
                    DownArrowIcon: x,
                    LockIcon: b
                },
                props: {
                    bonus: Object,
                    isLocked: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        images: {
                            catalog: q.a,
                            price: A.a
                        }
                    }
                },
                computed: {
                    templates: function() {
                        return ["catalog", "price"]
                    },
                    type: function() {
                        var t = r()(this.bonus, "image.id");
                        return h()(this.templates, t) || (t = "custom"), t
                    },
                    text: function() {
                        return this.bonus.name ? this.bonus.name : "catalog" === this.type ? this.$t("Каталог") : "price" === this.type ? this.$t("Прайс-лист") : ""
                    },
                    imageUrl: function() {
                        if ("custom" === this.type) {
                            var t = r()(this.bonus, "image", {});
                            return I()(t.name, {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === t.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 250,
                                dpr: $()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            })
                        }
                        return this.images[this.type]
                    }
                },
                methods: {
                    download: function() {
                        this.isLocked || this.bonus.link && (this.bonus.link.match(/^(http|https):\/\//) ? window.open(this.bonus.link, "_blank") : window.open("//".concat(this.bonus.link), "_blank"))
                    }
                }
            },
            L = D,
            R = (s("5967"), Object(p["a"])(L, u, l, !1, null, null, null)),
            E = R.exports,
            F = {
                components: {
                    Bonus: E
                },
                props: {
                    direction: {
                        type: String,
                        default: "column"
                    },
                    height: {
                        type: Number,
                        default: 64
                    }
                },
                computed: Object(a["a"])({}, Object(c["d"])("quiz", {
                    bonuses: function(t) {
                        return r()(t, "info.marketing.bonuses", [])
                    }
                }), Object(c["d"])("quiz", ["isResultShow"]), Object(c["c"])("quiz", ["resultsPosition"]), Object(c["d"])("form", ["isStep2", "isThanksPage"])),
                methods: {
                    isLock: function(t) {
                        return (!this.isResultShow || "afterForm" !== this.resultsPosition) && (!this.isThanksPage && (!this.isThanksPage && !this.isStep2 || this.isStep2 && "finish" === t.step))
                    }
                }
            },
            T = F,
            j = (s("6629"), Object(p["a"])(T, n, i, !1, null, null, null));
        e["a"] = j.exports
    },
    e0d4: function(t, e, s) {},
    e1d3: function(t, e, s) {
        "use strict";
        var n = s("b9a3"),
            i = s.n(n);
        i.a
    },
    e720: function(t, e, s) {
        "use strict";
        var n = s("0378"),
            i = s.n(n);
        i.a
    },
    e7f0: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEVBhAUUjb3DwAABwdJREFUSMd9lmuMXVUVx39r7/O4r5l7p52hj2mgtYh9MDYQ7BdjUrQKptRHKtG2FhRCiCYYhUDBRPhgxKoQGgwKxkBBWlFIa4WaSBopbVFIBvqQUFJbagc7Q9uZdjpz75177zl7Lz/ce2kLna5v56x19n+v/1rrf5ZwEfvNF55gtJxijCCGvHesAb4DXNEKOQQ8bQxPO0/ZeyWfMfxo5/cmPVMmczy+5HFGag4jghGKzvOANMEygG+FGaCu8AeBB1Q57VXJZQx3TgJqL/Ry3epNVMsJYg3Wa9F5fiZwKxAAek6oAoHAVQrTxPCaiNTqibJsznJeHtj2sbPNx8BWbQRVTD7EBFJ0ngcFbm6xoRe4nwIisFqVX4iYLtEawxNn2DHvvotnuG7VxrMPubBIYH9MJfkuStACbMcnLVptM+t2ZbRP1c1w2tg9K6nVgrTO6p7P8cfh3R+v4bqVG8+taBFYi3KdDpYvpeYKCO8BOxHeFDgGeIXpKItcWlni3cRC1IWq3nf4dMOiurunbORUihJLwA0HHjwLeF5mUALWAl8CnI7UsozWXjRWnizk7XujY84b0yRSVdlU/j7ftGtneewqhTtAZpW8JrNTv0HhXoVTHiWD5YZ3f458CKaAUALuBb7Yomxcna4v7Dj6YuUTXRoGlqHR/ag2SykCMwufpFI9yeBEhemZ/LUeHi2oLpyb+Algk8BahVOghGKxS/tWtMk9F8y16vQIlXSr685zfGQPJyuD5IIoSNWXgJwV44aqH7iUhMuy3dRd+l+MHAiUz0/xWjCwUGGGwG6QCYf/sEtLwH0tsLTVDC8DL0pnxMmhflKfMVbk2rGk/vu6T//e8OnLVZc8G4j5Wig2fL9+nI5MjuVDIztyyqOtS4vAtxR+KTDFINilfSsKwN3AdS0wAcaAh4ATEwd2sfKqubJ38MQtHn4bSvDZ2MQzQwlnCLLQ4ZfVfSodUfyvsbTss3GRLmVAmpefBqhAn0K3RXYZ4Ebg+hZYe1TeAf4DQtUpz+459JlMYO6fGhamlmyn7zB5X7B5X7Kdvmg7OwIJ7hlv1JadrlXpJuAV98Ex4NVzp0BglUdvNcDyC4jBQSBxx95h6O1xDOYbJZufXgoztYyVBIFW3xCZyHfaQofFru7JZaNX4jJLzCUI7GvR2m7JCFhjgF7OamPbOQwwPjZC15VxJm+yC2ITKSixJc0F1APT/EZVCSUgb3NzqklSqKQNBAHkOJBoK8vI69iUJI2DC0gVqt5YE5IzERkTalbidm0BCARvA+qpx6YemyomInJF26kiICko3lglCVUrWefPZL0vG1QNMMD5miqJq/fOKn4a290FjbBukH49q6O2iYkNDWQDGvmQRiGU/dPjrrHuqIPeWkrOVbt7kmRwapK8n/duTFBRGDLAlo9Q6pxP5r96+He546GjGMeIyJ9R3gWMwj5tNsRO4HUgERgMhA0TruxMepAfzH/dJCR9VtWBiCICosCWNuDWtjAL4oB5maC4yKbww8wCqo3GQYS1quwX+CnoV4Gvi8jNLfD7r+ie8VocxUR1w5qB2XNRrpYWuaAWeAnkebu0b0UKvAV0A/OacyNxI6lMNdXyK/9IB5OZQYFKkhwOrNl5JqgM53zmhAhJFNiyV301DsN/nqyWKY4fRY2YyMkdPS57daw2BbHA30AeBiptaUuAfmAqMN+YIHX16lx34ng4M9E3BtOyHuo9xq9uf2IkPNRpj+ZO1PZ2vKcLKpeqVx1PsZQqRxkdHSeKwhs7fXRLj8u2FEu2NUVExgHs0itXtPvvHFCZH2IlHT153ZhPTGDM3vxoJrnmzUWMZqtFFQg1bLxbOMZjO55iZWk2iIRhFH47Unt3b1oIIrXaBNOHgPF2g9jtb29m+78389FMjZhPxePlnoarLUm9X2iQkbzPDB/sOl1vWDdl80vTzrzd2WBZcQGdEiNITlWv7HGZ4S4X71P0L8AzQLmZkbD4yPrzl6hz/ot54M7wf0fvcJXRjjE3YeuajInqnpK6/kDKlVFf3VerlbddHk33sVqMMaSp47bebbx+5CbMR/azxUfWtyXufFu3aiOIIS125fL7+3+SK5dvC1UbJqk18BNOSLziGGainoh/bKZ0PJOoq1gxRJHl8rFOjMqHQ7v4yCPnnX/BNXHdmj8x8+gAMwYGch0S3GXRr7TGhQRvnCipePtBUI0qJn0D4TmBt+JscMqlyk37nmIyu+CauH3/C9weLCS0Nsl6+lWYqrBAQQ2GAEOk1pdcnBhkTiLuyw4dLc0u7W2UE7YM7ZkU0EzmuP7wegoOvFAFHgZ5geYUWwVRFEHsJWm2OqfR+VzGB8/XD4zrNXct4WIWXNR7dg2tAutBDrdU5rLW+/cV/pr34dYOH06csQ32/HrXRU/8PzhfOSNpOeLlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTIxVDA2OjE2OjIwKzAwOjAwV/TrJgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0yMVQwNjoxNjoyMCswMDowMCapU5oAAAAASUVORK5CYII="
    },
    ede0: function(t, e, s) {
        t.exports = s.p + "img/price.f1900f4f.png"
    },
    f1ad: function(t, e, s) {
        "use strict";
        var n = s("2c90"),
            i = s.n(n);
        i.a
    },
    f809: function(t, e, s) {},
    fb21: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "price-label"
                }, [t.oldPrice ? s("div", {
                    staticClass: "price-label__old"
                }, [t._v(t._s(t.priceLabel(t.oldPrice)))]) : t._e(), s("div", {
                    staticClass: "price-label__container"
                }, [s("div", {
                    staticClass: "price-label__number"
                }, [t._v(t._s(t.priceLabel(t.totalPrice)))]), t.oldPrice ? s("DiscountLabel", {
                    staticClass: "price-label__discount"
                }, [t._v("-" + t._s(t.$format.number(t.discount)) + " " + t._s(t.discountCurrencySymbol))]) : t._e()], 1)])
            },
            i = [],
            a = s("cebc"),
            o = s("9b02"),
            r = s.n(o),
            c = s("2f62"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "discount-label"
                }, [s("span", [t._t("default", [t._v(t._s(t.value))])], 2)])
            },
            l = [],
            d = (s("c5f6"), {
                props: {
                    value: [String, Number]
                }
            }),
            h = d,
            f = (s("8b38"), s("2877")),
            m = Object(f["a"])(h, u, l, !1, null, null, null),
            p = m.exports,
            g = {
                components: {
                    DiscountLabel: p
                },
                props: {
                    result: Object
                },
                computed: Object(a["a"])({}, Object(c["d"])("quiz", {
                    discount: function(t) {
                        return t.fixedDiscount
                    }
                }), Object(c["c"])("quiz", ["currencySymbol", "discountCurrencySymbol", "isIncreasingPercentDiscount"]), {
                    oldPrice: function() {
                        return this.discount ? this.result.cost : null
                    },
                    totalPrice: function() {
                        var t = this.result.cost;
                        return this.discount ? this.isIncreasingPercentDiscount ? t - t * this.discount / 100 : t - this.discount : t
                    }
                }),
                methods: {
                    priceLabel: function(t) {
                        if (!t) return "";
                        var e = r()(this.result, "costType", "exact"),
                            s = {
                                cost: this.$format.number(t),
                                currency: this.currencySymbol
                            };
                        return "exact" === e ? this.$t("{cost} {currency}", s) : "up" === e ? this.$t("до {cost} {currency}", s) : "from" === e ? this.$t("от {cost} {currency}", s) : void 0
                    }
                }
            },
            v = g,
            b = (s("e1d3"), Object(f["a"])(v, n, i, !1, null, null, null));
        e["a"] = b.exports
    },
    fbb3: function(t, e, s) {
        "use strict";
        var n = s("afb2"),
            i = s.n(n);
        i.a
    },
    fe34: function(t, e, s) {}
});(function(t) {
    function e(e) {
        for (var n, i, r = e[0], c = e[1], u = e[2], l = 0, d = []; l < r.length; l++) i = r[l], a[i] && d.push(a[i][0]), a[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        h && h(e);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []), s()
    }

    function s() {
        for (var t, e = 0; e < o.length; e++) {
            for (var s = o[e], n = !0, i = 1; i < s.length; i++) {
                var r = s[i];
                0 !== a[r] && (n = !1)
            }
            n && (o.splice(e--, 1), t = c(c.s = s[0]))
        }
        return t
    }
    var n = {},
        i = {
            app: 0
        },
        a = {
            app: 0
        },
        o = [];

    function r(t) {
        return c.p + "js/" + ({
            "final-page": "final-page",
            popover: "popover",
            swiper: "swiper"
        }[t] || t) + "." + {
            "chunk-16ac490e": "aa2b8425",
            "final-page": "23122616",
            popover: "b33701d5",
            swiper: "eb6c664b"
        }[t] + ".js"
    }

    function c(e) {
        if (n[e]) return n[e].exports;
        var s = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, c), s.l = !0, s.exports
    }
    c.e = function(t) {
        var e = [],
            s = {
                "chunk-16ac490e": 1,
                "final-page": 1,
                popover: 1,
                swiper: 1
            };
        i[t] ? e.push(i[t]) : 0 !== i[t] && s[t] && e.push(i[t] = new Promise(function(e, s) {
            for (var n = "css/" + ({
                "final-page": "final-page",
                popover: "popover",
                swiper: "swiper"
            }[t] || t) + "." + {
                "chunk-16ac490e": "1503f0a5",
                "final-page": "ec0bb3fe",
                popover: "a41e849f",
                swiper: "f17ddb0a"
            }[t] + ".css", a = c.p + n, o = document.getElementsByTagName("link"), r = 0; r < o.length; r++) {
                var u = o[r],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === n || l === a)) return e()
            }
            var d = document.getElementsByTagName("style");
            for (r = 0; r < d.length; r++) {
                u = d[r], l = u.getAttribute("data-href");
                if (l === n || l === a) return e()
            }
            var h = document.createElement("link");
            h.rel = "stylesheet", h.type = "text/css", h.onload = e, h.onerror = function(e) {
                var n = e && e.target && e.target.src || a,
                    o = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete i[t], h.parentNode.removeChild(h), s(o)
            }, h.href = a;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(h)
        }).then(function() {
            i[t] = 0
        }));
        var n = a[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise(function(e, s) {
                    n = a[t] = [e, s]
                });
                e.push(n[2] = o);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = r(t), u = function(e) {
                    l.onerror = l.onload = null, clearTimeout(d);
                    var s = a[t];
                    if (0 !== s) {
                        if (s) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src,
                                o = new Error("Loading chunk " + t + " failed.\n(" + n + ": " + i + ")");
                            o.type = n, o.request = i, s[1](o)
                        }
                        a[t] = void 0
                    }
                };
                var d = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }, 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(e)
    }, c.m = t, c.c = n, c.d = function(t, e, s) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (c.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) c.d(s, n, function(e) {
                return t[e]
            }.bind(null, n));
        return s
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "//marquizquiz-a.akamaihd.net/assets/98a0d12ecdcb3800a2c27c6f1eeba8ef57a3de2c/", c.oe = function(t) {
        throw console.error(t), t
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var d = 0; d < u.length; d++) e(u[d]);
    var h = l;
    o.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "0089": function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "whitelabel"
                }, [t.isWhiteLabelActive ? t._e() : n("div", {
                    staticClass: "whitelabel__container"
                }, [n("img", {
                    staticClass: "whitelabel__icon",
                    attrs: {
                        src: s("e7f0")
                    }
                }), n("span", {
                    staticClass: "whitelabel__desktop"
                }, [t._v(t._s(t.$t("Сделано в")) + " ")]), n("a", {
                    attrs: {
                        href: "https:../www.marquiz.ru/@utm_source=widget_2F",
                        target: "_blank"
                    }
                }, [t._v("Marquiz")])])])
            },
            i = [],
            a = s("cebc"),
            o = s("2f62"),
            r = {
                name: "WhiteLabel",
                computed: Object(a["a"])({}, Object(o["c"])("quiz", ["isWhiteLabelActive"]))
            },
            c = r,
            u = (s("4c20"), s("2877")),
            l = Object(u["a"])(c, n, i, !1, null, "0d1b6d22", null);
        e["a"] = l.exports
    },
    "0287": function(t, e, s) {
        "use strict";
        var n = s("337b"),
            i = s.n(n);
        i.a
    },
    "0378": function(t, e, s) {},
    "0d14": function(t, e, s) {
        "use strict";
        var n = s("cb5b"),
            i = s.n(n);
        i.a
    },
    "222e": function(t, e, s) {
        "use strict";
        var n = s("aa5f"),
            i = s.n(n);
        i.a
    },
    "279f": function(t, e, s) {},
    "2c09": function(t, e, s) {
        "use strict";
        var n = s("5f64"),
            i = s.n(n);
        i.a
    },
    "2c32": function(t, e, s) {},
    "2c90": function(t, e, s) {},
    "31f0": function(t, e, s) {},
    "337b": function(t, e, s) {},
    "3cf9": function(t, e, s) {
        "use strict";
        var n = s("d6d0"),
            i = s.n(n);
        i.a
    },
    "3ebb": function(t, e, s) {
        "use strict";
        var n = s("a335"),
            i = s.n(n);
        i.a
    },
    "3f6f": function(t, e, s) {
        "use strict";
        var n = s("57d9"),
            i = s.n(n);
        i.a
    },
    "45d5": function(t, e, s) {},
    "4a1b": function(t, e, s) {
        "use strict";
        var n = s("279f"),
            i = s.n(n);
        i.a
    },
    "4ad0": function(t, e, s) {
        "use strict";
        var n = s("6617"),
            i = s.n(n);
        i.a
    },
    "4c20": function(t, e, s) {
        "use strict";
        var n = s("e0d4"),
            i = s.n(n);
        i.a
    },
    "4dbf": function(t, e, s) {
        t.exports = s.p + "img/catalog.150ec5dc.png"
    },
    "4eee": function(t, e, s) {},
    5308: function(t, e, s) {
        "use strict";
        s("ac6a");
        var n = s("c64e"),
            i = s("a78e"),
            a = 2;
        e["a"] = {
            values: {
                uuid: null,
                answerId: null
            },
            init: function(t) {
                this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.quizId = t;
                try {
                    this.set("answerId", i.get(this.getCookieName("answerId"))), this.set("uuid", i.get(this.getCookieName("uuid"))), this.values.uuid || this.set("uuid", n())
                } catch (e) {
                    this.set("uuid", n())
                }
            },
            getCookieName: function(t) {
                return "".concat(t, "_").concat(this.quizId)
            },
            get: function(t) {
                return t ? this.values[t] : this.values
            },
            set: function(t, e) {
                this.values[t] = e, e ? i.set(this.getCookieName(t), e, {
                    expires: this.expires
                }) : i.remove(this.getCookieName(t))
            },
            updateSessionLiveTime: function() {
                for (var t in this.expires = new Date((new Date).getTime() + 60 * a * 1e3), this.values) this.values[t] && this.set(t, this.values[t])
            }
        }
    },
    "534a": function(t, e, s) {
        "use strict";
        var n = s("2c32"),
            i = s.n(n);
        i.a
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("386d"), s("cadf"), s("551c"), s("f751"), s("097d"), s("54ba");
        var n = s("2b0e"),
            i = s("8a03"),
            a = s.n(i),
            o = s("2f62"),
            r = s("8ca8"),
            c = (s("5df3"), s("96cf"), s("3b8d")),
            u = s("cebc"),
            l = (s("b54a"), s("ac6a"), s("0f5c")),
            d = s.n(l),
            h = s("6747"),
            f = s.n(h),
            m = s("93c6"),
            p = s.n(m),
            g = s("6373"),
            v = s.n(g),
            b = s("c641"),
            _ = s.n(b),
            w = s("42454"),
            y = s.n(w),
            k = s("5ddc"),
            x = s.n(k),
            C = s("9948"),
            q = s.n(C),
            z = s("13ea"),
            A = s.n(z),
            S = s("2769"),
            I = s.n(S),
            O = s("9380"),
            $ = s.n(O),
            D = s("c228"),
            L = s.n(D),
            R = s("dd61"),
            E = s.n(R),
            F = s("0644"),
            T = s.n(F),
            j = s("ba84"),
            P = s.n(j),
            M = s("9b02"),
            Q = s.n(M),
            B = s("51f5"),
            V = s.n(B),
            N = {
                getFormattedDate: function(t, e) {
                    return t.isRange ? t.hasTime ? this.getRangeDateWithTime(e) : this.getRangeDate(e) : t.hasTime ? this.getDateWithTime(e) : e.toLocaleDateString()
                },
                getRangeDateWithTime: function(t) {
                    var e = t.from ? t.from.toLocaleDateString() : "",
                        s = t.to ? t.to.toLocaleDateString() : "",
                        n = this.getTimeFrom(t),
                        i = this.getTimeTo(t);
                    return "".concat(e, " ").concat(n, " - ").concat(s, " ").concat(i)
                },
                getRangeDate: function(t) {
                    var e = t.from ? t.from.toLocaleDateString() : "",
                        s = t.to ? t.to.toLocaleDateString() : "";
                    return "".concat(e, " - ").concat(s)
                },
                getTimeFrom: function(t) {
                    var e = "0".concat(t.timeFrom.getHours()).slice(-2),
                        s = "0".concat(t.timeFrom.getMinutes()).slice(-2);
                    return "".concat(e, ":").concat(s)
                },
                getTimeTo: function(t) {
                    var e = "0".concat(t.timeTo.getHours()).slice(-2),
                        s = "0".concat(t.timeTo.getMinutes()).slice(-2);
                    return "".concat(e, ":").concat(s)
                },
                getDateWithTime: function(t) {
                    var e = "0".concat(t.time.getHours()).slice(-2),
                        s = "0".concat(t.time.getMinutes()).slice(-2),
                        n = "".concat(e, ":").concat(s),
                        i = t.date.toLocaleDateString();
                    return "".concat(i, " ").concat(n)
                }
            },
            H = s("a3e6"),
            U = s.n(H),
            W = s("72bf"),
            G = s.n(W),
            J = s("6612"),
            K = s.n(J),
            Y = (s("28a5"), s("c5f6"), s("d173")),
            Z = s.n(Y),
            X = s("4cfe"),
            tt = s.n(X),
            et = s("e636"),
            st = s.n(et);

        function nt(t, e, s) {
            var n = e.a;
            "one-image" === t.type && (t.select = "one"), "one" === t.select && (n = [n], s.union = "or"), !0 === t.other && _()(n, function(e, s) {
                I()(t.answers, {
                    id: e
                }) || (n[s] = "OTHER")
            });
            var i = Z()(s.answer, n).length;
            if (s.union || (s.union = "or"), tt()(s.unionExtra) && "only" === s.union ? (s.union = "and", s.unionExtra = !1) : tt()(s.unionExtra) && (s.unionExtra = !0), !0 === s.unionExtra) {
                if ("or" === s.union && i) return !0;
                if ("and" === s.union && i >= s.answer.length) return !0
            } else if (!1 === s.unionExtra) {
                if ("or" === s.union && i && n.length === i) return !0;
                if ("and" === s.union && i === s.answer.length && i === n.length) return !0
            }
            return !1
        }

        function it(t, e, s) {
            var n = Q()(t, "options.isRange", !1),
                i = Number(Q()(s, "answer.0")),
                a = Number(Q()(s, "answer.1"));
            if (n) {
                var o = e.a;
                switch (s.operator) {
                    case "in":
                        if (o.from >= i && o.to <= a) return !0;
                        break;
                    case "contain":
                        if (o.from < i && o.to > a) return !0;
                        break;
                    case "out":
                        if (o.from < i && o.to < i) return !0;
                        if (o.from > a && o.to > a) return !0;
                        break;
                    case "touch":
                        if (o.from <= i && o.to >= i) return !0;
                        if (o.from <= a && o.to >= a) return !0;
                        break;
                    default:
                        break
                }
            } else {
                var r = Number(e.a);
                switch (s.operator) {
                    case "less":
                        if (r <= i) return !0;
                        break;
                    case "more":
                        if (r >= i) return !0;
                        break;
                    case "equal":
                        if (r === i) return !0;
                        break;
                    case "between":
                        if (r >= i && r <= a) return !0;
                        break;
                    default:
                        break
                }
            }
            return !1
        }

        function at(t, e, s) {
            var n = String(e.a).split(" "),
                i = 0;
            return _()(s.answer, function(t) {
                _()(n, function(e) {
                    var s = st()(t.trim(), e.trim());
                    s > i && (i = s)
                })
            }), "contain" === s.operator ? i > .7 : i < .7
        }
        var ot = function(t, e, s) {
                var n = Q()(t, "conditions", []),
                    i = Q()(t, "union", "or");
                if (!A()(n)) {
                    var a = [];
                    return n.forEach(function(t, n) {
                        var i = I()(s, {
                                q: t.question
                            }),
                            o = I()(e, {
                                id: t.question
                            });
                        if (i) switch (o.type) {
                            case "slider":
                                it(o, i, t) && a.push(n);
                                break;
                            case "input":
                                at(o, i, t) && a.push(n);
                                break;
                            default:
                                nt(o, i, t) && a.push(n);
                                break
                        }
                    }), "and" === i && a.length === n.length ? a.length : !("or" !== i || !a.length) && a.length
                }
            },
            rt = s("2768"),
            ct = s.n(rt);

        function ut(t, e) {
            var s = Q()(t, "variants", {});
            if (A()(s)) return !1;
            var n = 0,
                i = function(t, e) {
                    var i = "".concat(t, "__").concat(e);
                    s[i] && (n += Number(s[i]))
                };
            return _()(e, function(t) {
                t && (ct()(t.a) || (f()(t.a) ? _()(t.a, function(e) {
                    i(t.q, e)
                }) : i(t.q, t.a)))
            }), n
        }

        function lt(t, e) {
            var s = Number(Q()(t, "count.0")),
                n = Number(Q()(t, "count.1"));
            switch (t.operator) {
                case "less":
                    if (e < s) return !0;
                    break;
                case "more":
                    if (e >= s) return !0;
                    break;
                case "equal":
                    if (e === s) return !0;
                    break;
                case "between":
                    if (e >= s && e <= n) return !0;
                    break;
                default:
                    break
            }
            return !1
        }
        var dt = function(t) {
                (function(t, e, s, n, i) {
                    t.roistatProjectId = i, t.roistatHost = n;
                    var a = "https:" == e.location.protocol ? "https://" : "http://",
                        o = /^.*roistat_visit=[^;]+(.*)?$/.test(e.cookie) ? "/dist/module.js" : "api/site/1.0/" + i + "/init",
                        r = e.createElement(s);
                    r.charset = "UTF-8", r.async = 1, r.src = a + n + o;
                    var c = e.getElementsByTagName(s)[0];
                    c.parentNode.insertBefore(r, c)
                })(window, document, "script", "cloud.roistat.com", t)
            },
            ht = s("a78e"),
            ft = s.n(ht),
            mt = {
                discountInterval: null
            },
            pt = G.a.parse(window.location.search),
            gt = function() {
                var t = {
                    href: pt.href
                };
                t.href || (t.href = window.location.href);
                try {
                    var e = pt.utm ? JSON.parse(pt.utm) : null;
                    if (!e) {
                        var n = s("cb57");
                        e = n(window.location.search)
                    }
                    e && (t.utm = e)
                } catch (a) {
                    console.error(a)
                }
                try {
                    var i = pt.cookies ? JSON.parse(pt.cookies) : null;
                    i && (t.cookies = i)
                } catch (a) {
                    console.error(a)
                }
                return t
            },
            vt = {
                USD: "$",
                RUR: "₽",
                EUR: "€",
                UAH: "₴",
                BYB: "Br",
                KZT: "₸",
                CNY: "¥"
            },
            bt = {
                namespaced: !0,
                state: {
                    loaded: !1,
                    id: null,
                    isDemo: !1,
                    questions: [],
                    activeQuestion: 0,
                    leadForm: !1,
                    leadFormDisabled: !1,
                    results: {},
                    isResultsShow: !1,
                    isResultShow: !1,
                    isResultLoaderShow: !1,
                    mode: pt.mode || "modal",
                    info: {
                        title: "",
                        name: "",
                        assistant: {
                            name: "",
                            title: "",
                            avatar: ""
                        },
                        form: {
                            text: "",
                            fields: ["name", "phone", "email"],
                            thanks: "",
                            extra: ""
                        },
                        marketing: {
                            discount: {}
                        },
                        design: {
                            colors: {
                                main: "#ca2f94",
                                buttonTextColor: "#fff"
                            }
                        }
                    },
                    settings: {},
                    whiteLabelDate: null,
                    discount: 0,
                    fixedDiscount: 0,
                    answers: [],
                    answersId: [],
                    analyticUnique: !1,
                    quizStarted: !1,
                    hint: null,
                    selectedResult: null,
                    domain: null
                },
                getters: {
                    getQuestion: function(t) {
                        return t.questions[t.activeQuestion]
                    },
                    countQuestions: function(t, e) {
                        return e.activeQuestions.length
                    },
                    countAllQuestions: function(t) {
                        return t.questions.length
                    },
                    questionNumber: function(t, e) {
                        return e.getQuestion ? V()(e.activeQuestions, {
                            id: e.getQuestion.id
                        }) + 1 : null
                    },
                    isIncreasingDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "increasing" === e.type
                    },
                    isMeltingDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "melting" === e.type
                    },
                    isIncreasingPercentDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount");
                        return e && "increasingPercent" === e.type
                    },
                    formattedDiscount: function(t) {
                        return K()(t.discount).format("0,0")
                    },
                    getIncreasingDiscountStep: function(t, e) {
                        var s = Q()(t, "info.marketing.discount");
                        return Q()(s, "value") ? K()(Math.round(Q()(s, "value") / e.countQuestions)).format("0,0") : Q()(s, "percent") ? K()(Math.round(Q()(s, "percent") / e.countQuestions)).format("0,0") : void 0
                    },
                    getIncreasingPercentDiscountStep: function(t, e) {
                        var s = Q()(t, "info.marketing.discount");
                        return K()(Math.floor(Q()(s, "percent") / e.countQuestions * 100) / 100).format("0,0")
                    },
                    currencySymbol: function(t) {
                        return vt[t.currency] || vt.RUR
                    },
                    discountCurrencySymbol: function(t) {
                        return Q()(t, "info.marketing.discount.percent") ? "%" : vt[t.currency] || vt.RUR
                    },
                    getLastStep: function(t, e) {
                        return e.countAllQuestions - 1
                    },
                    isVariantsQuestion: function(t, e) {
                        return !Q()(e.getQuestion, "type") || P()(["answers", "variants", "images", "select", "one-image"], e.getQuestion.type) >= 0
                    },
                    isLastStep: function(t, e) {
                        return t.activeQuestion === e.getLastStep
                    },
                    getAnswerValue: function(t, e) {
                        var s = e.getQuestion;
                        if (!s) return null;
                        var n = e.isVariantsQuestion && "many" === s.select,
                            i = t.answers[t.activeQuestion];
                        return i && i.a && 0 !== i.a.length ? i.a : n ? [] : null
                    },
                    getPassedPercent: function(t) {
                        return t.activeQuestion / t.questions.length * 100
                    },
                    getIsFilled: function(t, e) {
                        if (!e.getQuestion) return !1;
                        if (P()(["date", "slider"], e.getQuestion.type) >= 0) {
                            var s = e.getAnswerValue,
                                n = Q()(e, "getQuestion.options.isRange"),
                                i = Q()(e, "getQuestion.options.hasTime");
                            return s && n ? i ? !!s.from && !!s.to && !!s.timeFrom && !!s.timeTo : i ? !!s.from && !!s.to && !!s.timeFrom && !!s.timeTo : !!s.from && !!s.to : !(!s || n) && (i ? !!s && !!s.time && !!s.date : !!s)
                        }
                        return "many" === e.getQuestion.select && e.isVariantsQuestion ? !!e.getAnswerValue.length : !!e.getAnswerValue
                    },
                    colors: function(t) {
                        var e, s = "#ca2f94",
                            n = Q()(t, "info.design.colors.main", "#ca2f94") || s;
                        P()(n, "#") < 0 && (n = "#".concat(n));
                        try {
                            e = U()(n)
                        } catch (o) {
                            e = null
                        }
                        e || (console.log("Неправильный цвет: ".concat(n)), n = s, e = U()(n));
                        var i = T()(e).darken(7).dark(),
                            a = Q()(t, "info.design.colors.buttonTextColor", i ? "#ffffff" : "#000000");
                        return P()(a, "#") < 0 && (a = "#".concat(a)), {
                            main: n,
                            lighten: U()(n).lighten(20).hex(),
                            lighten10: U()(n).lighten(10).hex(),
                            lighten2: U()(n).lighten(35).hex(),
                            darken: U()(n).darken(20).hex(),
                            darken10: U()(n).darken(10).hex(),
                            alpha: U()(n).alpha(.5).rgbString(),
                            alpha2: U()(n).alpha(.2).rgbString(),
                            gradientMain: "331deg, ".concat(U()(n).darken(20).rgbString(), ", ").concat(U()(n).lighten(20).rgbString()),
                            text: a,
                            text2: i ? n : "#000000"
                        }
                    },
                    autoNextQuestion: function(t) {
                        var e = !0;
                        return t.questions.forEach(function(t) {
                            "many" === t.select && (e = !1), t.other && (e = !1), Q()(t.options, "hasTime") && (e = !1)
                        }), e
                    },
                    activeQuestions: function(t) {
                        if (!t.answersId.length) return t.questions;
                        var e = E()(t.questions, function(e, s) {
                            return 0 === s ? e : Q()(e, "display.conditions", []).length ? !!ot(e.display, t.questions, t.answersId) && e : e
                        });
                        return L()(e)
                    },
                    activeAnswers: function(t, e) {
                        return $()(t.answers, function(t) {
                            return !!t && I()(e.activeQuestions, {
                                title: t.q
                            })
                        })
                    },
                    isWhiteLabelActive: function(t) {
                        return t.whiteLabelDate > new Date
                    },
                    data: function(t, e) {
                        var s = gt();
                        t.fixedDiscount && (s.discount = t.fixedDiscount), s.notify = Q()(t, "info.form.sendOnFirstStep", !0) ? "in 2 minutes" : "now", "vk" === t.mode && (s.href = null);
                        var n = T()(e.activeAnswers),
                            i = n.map(function(t, s) {
                                var n = e.activeQuestions[s].type,
                                    i = e.activeQuestions[s].options;
                                return t.t = n, "date" === n && t.a && (t.a = N.getFormattedDate(i, t.a)), "slider" === n && (i.isRange ? t.a = "".concat(t.a.from, " - ").concat(t.a.to) : t.a = String(t.a)), t
                            }),
                            a = {};
                        A()(e.result) || ("content" === e.result.type ? a = {
                            id: e.result.id,
                            title: e.result.title,
                            cost: e.result.cost
                        } : "redirect" === e.result.type && (a = {
                            id: e.result.id,
                            link: e.result.link
                        }));
                        var o = ft.a.get(),
                            r = {};
                        return q()(o, function(t, e) {
                            x()(e, "roistat") && (r[e] = t), "_ga" === e && (r[e] = t), "_ym_uid" === e && (r[e] = t)
                        }), s.cookies = y()(s.cookies, r), {
                            quizId: t.id,
                            raw: L()(t.answersId),
                            answers2: i,
                            extra: s,
                            result: a
                        }
                    },
                    resultsPosition: function(t) {
                        return !(!t.results || !Q()(t.results, "items", []).length) && Q()(t.results, "view", "afterForm")
                    },
                    isMultipleResults: function(t) {
                        return Q()(t.results, "multiple", !1)
                    },
                    result: function(t, e) {
                        if (t.selectedResult) return t.selectedResult;
                        var s = e.suitableResults;
                        return Q()(s, 0, {})
                    },
                    suitableResults: function(t) {
                        var e = Q()(t.results, "items", []),
                            s = [],
                            n = ut(Q()(t, "results.points"), t.answersId);
                        return _()(e, function(e) {
                            var i = Q()(e, "display.conditions", []),
                                a = Q()(e, "points"),
                                o = 0,
                                r = !1;
                            i.length ? (o += ot(e.display, t.questions, t.answersId), o > 0 && (r = !0)) : r = !0, !1 !== n && !A()(a) && r && (r = lt(a, n, t.answersId)), r && (!1 !== n && (e.title = v()(e.title, "{points}", n), e.text = v()(e.text, "{points}", n)), s.push(Object(u["a"])({}, e, {
                                _count: o
                            })))
                        }), s = p()(s, ["_count"], ["desc"]), s
                    }
                },
                mutations: {
                    resetState: function(t) {
                        t.leadForm = !1, t.leadFormDisabled = !1, t.selectedResult = null
                    },
                    showStartPage: function(t) {
                        Q()(t, "info.startPage.enabled") && (t.quizStarted = !1)
                    },
                    startQuiz: function(t) {
                        t.quizStarted = !0, t.activeQuestion = 0, t.isResultShow = !1, t.isResultsShow = !1, t.selectedResult = null, t.leadForm = !1, t.answers = [], t.answersId = []
                    },
                    setQuestions: function(t, e) {
                        t.questions = e
                    },
                    setActiveQuestion: function(t, e) {
                        var s = e;
                        s < 0 && (s = 0), s > t.questions.length && (s = t.questions.length), t.activeQuestion = s
                    },
                    setInfo: function(t, e) {
                        t.info = Object(u["a"])({}, t.info, e);
                        var s = Q()(e, "form.fields", []);
                        s.length || n["default"].set(t.info.form, "fields", ["name", "phone", "email"])
                    },
                    setIsDemo: function(t) {
                        t.isDemo = !0
                    },
                    setId: function(t, e) {
                        t.id = e
                    },
                    setWhiteLabelDate: function(t, e) {
                        t.whiteLabelDate = e ? new Date(e) : null
                    },
                    setLeadFormDisable: function(t, e) {
                        var s = e ? new Date(e) : null;
                        t.leadFormDisabled = s > new Date, t.leadFormDisabled && t.results && (Q()(t.info, "form.showMessengers") ? t.results.view = "beforeForm" : t.results.view = "afterForm")
                    },
                    setAnswerValue: function(t, e) {
                        var s, i = t.questions[t.activeQuestion],
                            a = {
                                q: i.title,
                                a: e
                            };
                        n["default"].set(t.answers, t.activeQuestion, a), s = f()(e) ? E()(e, function(t) {
                            var e = I()(i.answers, {
                                title: t
                            });
                            return e ? e.id : t
                        }) : Q()(I()(i.answers, {
                            title: e
                        }), "id");
                        var o = {
                            q: i.id,
                            a: s || e
                        };
                        n["default"].set(t.answersId, t.activeQuestion, o)
                    },
                    loaded: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.loaded = e
                    },
                    setDiscount: function(t, e) {
                        t.discount = e
                    },
                    setCurrency: function(t, e) {
                        t.currency = e
                    },
                    fixDiscount: function(t) {
                        var e = Q()(t, "info.marketing.discount", {});
                        "increasing" === e.type ? t.fixedDiscount = e.value : "increasingPercent" === e.type ? t.fixedDiscount = e.percent : t.fixedDiscount = t.discount
                    },
                    showLeadForm: function(t) {
                        t.quizStarted = !0, t.leadForm = !0, t.isResultLoaderShow = !1, t.isResultShow = !1, t.isResultsShow = !1
                    },
                    showResults: function(t) {
                        t.quizStarted = !0, t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultShow = !1, t.isResultsShow = !0
                    },
                    showResult: function(t, e) {
                        t.quizStarted = !0, t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultsShow = !1, t.isResultShow = !0, e && (t.selectedResult = e)
                    },
                    setResults: function(t, e) {
                        t.results = e
                    },
                    setUniqueAnalytic: function(t, e) {
                        t.analyticUnique = e
                    },
                    showResultLoader: function(t) {
                        t.isResultLoaderShow = !0
                    },
                    setSettings: function(t, e) {
                        t.settings = e
                    },
                    showHint: function(t, e) {
                        t.hint = e
                    },
                    selectResult: function(t, e) {
                        t.selectedResult = e
                    },
                    setMode: function(t, e) {
                        t.mode = e
                    },
                    setDomain: function(t, e) {
                        t.domain = e
                    }
                },
                actions: {
                    get: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t(e, s) {
                            var i, a, o, r, c, u, l, h, f, m, p, g, v, b, _, w, y, k, x, C, q;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.commit, a = e.state, o = e.dispatch, r = s.id, c = s.groupId, u = s.domain, l = s.quiz, h = r, !l) {
                                            t.next = 7;
                                            break
                                        }
                                        m = l, t.next = 24;
                                        break;
                                    case 7:
                                        if (!c) {
                                            t.next = 13;
                                            break
                                        }
                                        return i("setMode", "vk"), t.next = 11, n["default"].axios.get("v1/vkGroups/findOne", {
                                            params: {
                                                filter: {
                                                    where: {
                                                        groupId: c
                                                    }
                                                }
                                            }
                                        });
                                    case 11:
                                        p = t.sent, h = Q()(p, "data.quizId");
                                    case 13:
                                        if (!h) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 16, n["default"].axios.get("v1/Quizzes/".concat(h));
                                    case 16:
                                        f = t.sent, t.next = 23;
                                        break;
                                    case 19:
                                        if (!u) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 22, n["default"].axios.get("v1/Quizzes/findByDomain@domain=".concat(u));
                                    case 22:
                                        f = t.sent;
                                    case 23:
                                        m = f.data;
                                    case 24:
                                        i("loaded"), g = new Promise(function(t) {
                                            window.onmousemove = function() {
                                                t(), window.isActive = !0
                                            }
                                        }), d()(m, "questions", m.questions.filter(function(t) {
                                            return !t.disabled
                                        })), i("setQuestions", m.questions), Q()(m, "results.items") && d()(m, "results.items", m.results.items.filter(function(t) {
                                            return !t.disabled
                                        })), i("setResults", m.results), i("setInfo", m.info), i("setId", m.id), m.domain && i("setDomain", m.domain), !0 === m.isActive && i("setIsDemo"), "preview" === a.mode && i("setIsDemo"), Q()(m, "settings.customAnswerEndpoint") && i("setCustomAnswerEndpoint", m.settings.customAnswerEndpoint, {
                                            root: !0
                                        }), Q()(m, "readOnly.whiteLabelExpireAt") && i("setWhiteLabelDate", m.readOnly.whiteLabelExpireAt), Q()(m, "readOnly.leadFormDisableExpireAt") && i("setLeadFormDisable", m.readOnly.leadFormDisableExpireAt), Q()(m, "info.startPage.enabled", !1) || i("startQuiz"), Q()(m, "settings") && i("setSettings", m.settings), v = Q()(m, "settings.lng"), v || (v = Q()(m, "info.design.lng")), v && i("setLang", v, {
                                            root: !0
                                        }), b = Q()(m, "settings.currency"), b || (b = Q()(m, "info.marketing.discount.currency")), b && i("setCurrency", b), _ = [g], i("setUniqueAnalytic", Q()(m, "info.analytic.unique", !1)), w = Q()(m, "info.analytic.metrika.id"), w && _.push(n["default"].analytic.init({
                                            yaCounterId: w
                                        }, a.isDemo)), y = ["UA-113524925-1"], k = Q()(m, "info.analytic.ga.id"), k && y.push(k), y.length && _.push(n["default"].analytic.init({
                                            gaIds: y
                                        }, a.isDemo)), x = Q()(m, "info.analytic.fb.id"), x && _.push(n["default"].analytic.init({
                                            fb: x
                                        }, a.isDemo)), C = Q()(m, "info.analytic.vk.id"), C && _.push(n["default"].analytic.init({
                                            vk: C
                                        }, a.isDemo)), Promise.all(_).then(function() {
                                            o("analyticEvent", "marquiz-start")
                                        }), q = Q()(m, "info.analytic.roistat.id"), q && dt(q), m.info.marketing && o("setInitialDiscount", m.info.marketing);
                                    case 62:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    setInitialDiscount: function(t, e) {
                        var s = t.state,
                            n = t.getters,
                            i = t.commit;
                        if (e.discount && "melting" === e.discount.type) {
                            var a = 1e3,
                                o = Math.round(e.discount.value / 60 / n.countQuestions * 1.5);
                            0 === o && (o = 1, a = 1500);
                            var r = e.discount.value;
                            i("setDiscount", r), window.onblur = function() {
                                window.isActive = !1
                            }, mt.discountInterval = setInterval(function() {
                                window.isActive && (r = s.discount - o > 0 ? s.discount - o : 0, i("setDiscount", r), (0 === r || n.isLastStep) && clearInterval(mt.discountInterval))
                            }, a)
                        }
                        e.discount && "increasing" === e.discount.type && i("setDiscount", 0), e.discount && "increasingPercent" === e.discount.type && i("setDiscount", 0)
                    },
                    nextQuestion: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.getters,
                            i = t.dispatch;
                        if (n.getIsFilled || n.getQuestion.notRequired) {
                            !n.getIsFilled && n.getQuestion.notRequired && s("setAnswerValue", "");
                            var a = V()(n.activeQuestions, {
                                    id: n.getQuestion.id
                                }),
                                o = n.activeQuestions[a + 1];
                            if (o) {
                                var r = V()(e.questions, {
                                        id: n.getQuestion.id
                                    }),
                                    c = V()(e.questions, {
                                        id: o.id
                                    });
                                i("analyticEvent", "marquiz-step".concat(r + 1)), s("setActiveQuestion", c), i("calculateDiscount")
                            } else i("analyticEvent", "marquiz-step".concat(e.questions.length)), "beforeForm" === n.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                                n.isMultipleResults ? i("showResults") : i("showResult")
                            }, 2100)) : "afterForm" === n.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                                i("showLeadForm")
                            }, 2100)) : i("showLeadForm")
                        }
                    },
                    prevQuestion: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.getters,
                            i = t.dispatch,
                            a = V()(n.activeQuestions, {
                                id: n.getQuestion.id
                            }),
                            o = n.activeQuestions[a - 1],
                            r = V()(e.questions, {
                                id: o.id
                            });
                        s("setActiveQuestion", r), i("calculateDiscount")
                    },
                    showLeadForm: function(t) {
                        var e = t.state,
                            s = t.commit,
                            n = t.dispatch;
                        e.leadFormDisabled ? n("showDisableForm") : (s("showLeadForm"), n("calculateDiscount", !0), n("analyticEvent", "marquiz-form"))
                    },
                    showResults: function(t) {
                        var e = t.commit,
                            s = t.dispatch,
                            n = t.getters;
                        n.suitableResults.length < 2 ? s("showResult") : (e("showResults"), s("calculateDiscount", !0), s("analyticEvent", "marquiz-results"))
                    },
                    showResult: function(t) {
                        var e = t.state,
                            s = t.getters,
                            i = t.commit,
                            a = t.dispatch,
                            o = Q()(s, "result", {});
                        a("calculateDiscount", !0), a("analyticEvent", "marquiz-answer"), a("analyticEvent", "marquiz-result"), a("analyticEvent", "marquiz-result-".concat(o.id)), "afterForm" === s.resultsPosition && a("analyticEvent", "marquiz-finish"), "afterForm" !== s.resultsPosition && !e.leadFormDisabled || "redirect" !== o.type || !o.link ? i("showResult") : n["default"].redirect(o.link, {
                            contacts: {},
                            result: o
                        })
                    },
                    showDisableForm: function(t) {
                        var e = t.state,
                            s = t.getters,
                            i = t.commit,
                            a = t.dispatch;
                        if (e.leadFormDisabled) return !s.resultsPosition || e.isResultShow || e.isResultsShow ? Q()(e.info, "form.showMessengers", !1) && !A()(Q()(e.info, "form.chatBots")) ? (a("calculateDiscount", !0), void i("showLeadForm")) : void(Q()(e.info, "form.redirect") ? n["default"].redirect(Q()(e.info, "form.redirect")) : (a("calculateDiscount", !0), i("showLeadForm"), i("form/showThankPage", null, {
                            root: !0
                        }))) : (i("showResultLoader"), void setTimeout(function() {
                            s.isMultipleResults ? a("showResults") : a("showResult")
                        }, 2100))
                    },
                    calculateDiscount: function(t) {
                        var e, s = t.state,
                            n = t.getters,
                            i = t.commit,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = Q()(s, "info.marketing.discount"),
                            r = n.activeQuestions.length,
                            c = s.leadForm || s.isResultShow || s.isResultsShow;
                        if (n.isIncreasingDiscount) e = c ? o.value : Math.round(o.value / r * (n.questionNumber - 1)), i("setDiscount", e);
                        else if (n.isIncreasingPercentDiscount) {
                            if (c) e = o.percent;
                            else {
                                var u = o.percent / r;
                                e = Math.floor(u * (n.questionNumber - 1) * 100) / 100
                            }
                            i("setDiscount", e)
                        }
                        a && (mt.discountInterval && clearInterval(mt.discountInterval), i("fixDiscount"))
                    },
                    setAnswer: function(t, e) {
                        var s = t.commit,
                            n = t.dispatch,
                            i = t.getters,
                            a = i.getQuestion;
                        s("setAnswerValue", e), (i.isVariantsQuestion && "one" === a.select && I()(a.answers, function(t) {
                            return t.title === e
                        }) && "one-image" !== a.type || "images" === a.type && "one" === a.select || "date" === a.type && !a.options.hasTime && i.getIsFilled) && setTimeout(function() {
                            n("nextQuestion")
                        }, 400)
                    },
                    analyticEvent: function(t, e) {
                        var s = t.state;
                        s.analyticUnique && n["default"].analytic.event("".concat(e, "_").concat(s.id)), n["default"].analytic.event(e)
                    }
                }
            },
            _t = s("6cd4"),
            wt = s.n(_t),
            yt = function() {
                var t = Object(c["a"])(regeneratorRuntime.mark(function t(e) {
                    var s, i, a;
                    return regeneratorRuntime.wrap(function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return s = e.answers2, i = e.raw, a = [], wt()(s, function(t, e) {
                                    f()(t.a) && wt()(t.a, function(t, o) {
                                        t instanceof File && a.push(n["default"].axiosFileUpload("../https@files.marquiz.ru/upload", t, "file").then(function(t) {
                                            s[e].a[o] = t.data.url, i[e].a[o] = t.data.url
                                        }))
                                    })
                                }), t.next = 6, Promise.all(a).catch(function(t) {
                                    console.log(t)
                                });
                            case 6:
                                return e.answers2 = s, e.raw = i, t.abrupt("return", e);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            kt = G.a.parse(window.location.search),
            xt = ["name", "phone", "email"],
            Ct = ["vk", "telegram", "whatsapp", "messenger", "skype", "viber", "instagram"],
            qt = {};
        xt.forEach(function(t) {
            kt[t] && (qt[t] = kt[t])
        }), Ct.forEach(function(t) {
            kt[t] && (qt[t] = kt[t])
        });
        var zt = [{
                key: "email",
                name: "Email",
                enabled: !0
            }, {
                key: "name",
                name: "Имя",
                enabled: !0
            }, {
                key: "phone",
                name: "Телефон",
                enabled: !0
            }],
            At = [],
            St = {
                namespaced: !0,
                state: {
                    isStep2: !1,
                    isMessengersPage: !1,
                    isThanksPage: !1,
                    contacts: qt,
                    contactTypes: xt,
                    messengerTypes: Ct,
                    fields1: [],
                    fields2: [],
                    answerId: null,
                    uuid: null,
                    isFilesUploading: !1
                },
                mutations: {
                    resetState: function(t) {
                        t.isStep2 = !1, t.isThanksPage = !1
                    },
                    showStep1: function(t) {
                        t.isStep2 = !1
                    },
                    showStep2: function(t) {
                        t.isStep2 = !0
                    },
                    setContacts: function(t, e) {
                        t.contacts = e
                    },
                    showMessengers: function(t) {
                        t.isMessengersPage = !0
                    },
                    hideMessengers: function(t) {
                        t.isMessengersPage = !1
                    },
                    showThankPage: function(t) {
                        t.isThanksPage = !0
                    },
                    setAnswerId: function(t, e) {
                        t.answerId = e
                    },
                    setFields: function(t, e) {
                        var s = e.fields1,
                            n = e.fields2,
                            i = s ? s.filter(function(t) {
                                return t.enabled
                            }) : [],
                            a = n ? n.filter(function(t) {
                                return t.enabled
                            }) : [];
                        i.length || (i = a, a = []), a.length || 1 !== i.length || "name" !== i[0].key || (i = []), i.length || a.length || (i = zt, a = At), t.fields1 = i, t.fields2 = a
                    },
                    setSession: function(t, e) {
                        var s = e.answerId,
                            n = e.uuid;
                        t.answerId = s, t.uuid = n
                    },
                    startUploadFiles: function(t) {
                        t.isFilesUploading = !0
                    },
                    finishUploadFiles: function(t) {
                        t.isFilesUploading = !1
                    }
                },
                getters: {},
                actions: {
                    saveLead: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t(e, s) {
                            var i, a, o, r, c;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.state, a = e.commit, o = e.rootState, s.contacts = i.contacts, s.clientId = i.uuid, i.fields2.length || (s.extra.notify = "now"), r = "v1/answers", o.customAnswerEndpoint && (r = o.customAnswerEndpoint), c = new Promise(function() {}), !i.answerId) {
                                            t.next = 11;
                                            break
                                        }
                                        c = n["default"].axios.patch("".concat(r, "default.htm").concat(i.answerId), s), t.next = 16;
                                        break;
                                    case 11:
                                        return a("startUploadFiles"), t.next = 14, yt(s);
                                    case 14:
                                        a("finishUploadFiles"), c = n["default"].axios.post(r, s);
                                    case 16:
                                        return c.then(function(t) {
                                            a("setAnswerId", t.data.id)
                                        }), t.abrupt("return", c);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e(e, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            };
        n["default"].use(o["a"]);
        var It = {
                setLang: function(t, e) {
                    r["a"].changeLanguage(e), t.lang = e
                },
                setCustomAnswerEndpoint: function(t, e) {
                    t.customAnswerEndpoint = e
                }
            },
            Ot = new o["a"].Store({
                state: {
                    lang: "ru",
                    customAnswerEndpoint: null
                },
                mutations: It,
                modules: {
                    quiz: bt,
                    form: St
                }
            }),
            $t = Ot,
            Dt = s("3652"),
            Lt = s.n(Dt),
            Rt = s("2955"),
            Et = s.n(Rt),
            Ft = s("7618"),
            Tt = s("bc3a"),
            jt = s.n(Tt),
            Pt = {
                install: function(t) {
                    t.axios = t.prototype.$axios = jt.a.create({
                        baseURL: "../https@proxy3-api.marquiz.ru"
                    }), t.prototype.$axiosFileUpload = t.axiosFileUpload = function(e, s) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "file",
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if ("string" !== typeof e) throw new TypeError("Expected a string, got ".concat(Object(Ft["a"])(e)));
                        var a = new FormData;
                        return a.append(n, s), i && q()(i, function(t, e) {
                            a.append(e, t)
                        }), t.axios.post(e, a, {
                            headers: {
                                "Content-Type": "multipart/form-data; boundary=".concat(a._boundary)
                            }
                        })
                    }
                }
            },
            Mt = {
                install: function(t) {
                    t.directive("horizontal-scroll", {
                        inserted: function(t) {
                            t.onwheel = function(e) {
                                t.scrollLeft += 3 * e.deltaY, e.preventDefault()
                            }
                        }
                    })
                }
            },
            Qt = (s("a481"), s("d225")),
            Bt = s("b0b4"),
            Vt = s("0284"),
            Nt = s.n(Vt),
            Ht = s("b9ad"),
            Ut = s.n(Ht),
            Wt = function() {
                ! function(t, e, s, n, i, a, o) {
                    t.fbq || (i = t.fbq = function() {
                        i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
                    }, t._fbq || (t._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], a = e.createElement(s), a.async = !0, a.src = n, o = e.getElementsByTagName(s)[0], o.parentNode.insertBefore(a, o))
                }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
            },
            Gt = function(t) {
                return new Promise(function(e) {
                    ! function() {
                        var s = document.createElement("script");
                        s.type = "text/javascript", s.async = !0, s.src = "https:../vk.com/js/api/openapi.js@160", s.onload = function() {
                            VK.Retargeting.Init(t), VK.Retargeting.Hit(), e()
                        }, document.head.appendChild(s)
                    }()
                })
            },
            Jt = function() {
                function t(e) {
                    Object(Qt["a"])(this, t), this.vue = e, this.yaCounters = [], this.gaCounter = null, this.isProd = !0
                }
                return Object(Bt["a"])(t, [{
                    key: "event",
                    value: function(t) {
                        var e = this;
                        if (this.yaCounters.forEach(function(s) {
                            e.isProd ? window[s] && window[s].reachGoal(t) : console.info("Metrika event: ".concat(t), s)
                        }), this.gaCounter) {
                            var s = "./".concat(t.replace("-", "default.htm"));
                            this.isProd ? this.vue.$ga.page(s) : console.info("GA pageview: ".concat(s), this.gaCounter)
                        }
                        if (this.fb) {
                            var n = "ViewContent";
                            "marquiz-finish" !== t && "marquiz-contacts1" !== t && "marquiz-contacts2" !== t || (n = "Lead"), this.isProd ? this.fb.event(n, {
                                content_name: t
                            }) : console.log("FB pixel event", n, t)
                        }
                        this.vk && (this.isProd ? this.vk.Retargeting.Event(t) : console.log("VK pixel event", t))
                    }
                }, {
                    key: "hit",
                    value: function(t) {
                        var e = this;
                        this.yaCounters.forEach(function(s) {
                            e.isProd ? window[s] && window[s].hit(t) : console.info("Metrika page hit: ".concat(t), s)
                        })
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        var e = t.yaCounterId,
                            s = t.gaIds,
                            n = t.fb,
                            i = t.vk,
                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        a && (this.isProd = !1);
                        var o = [];
                        return e && o.push(this.initMetrika(e)), s && o.push(this.initGA(s)), n && o.push(this.initFB(n)), i && o.push(this.initVK(i)), Promise.all(o)
                    }
                }, {
                    key: "initMetrika",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            var n = e,
                                i = "yaCounter".concat(t);
                            if (!e.isProd) return n.yaCounters.push(i), console.info("Fake Metrika inited", t), void s();
                            (function(e, a, o) {
                                (a[o] = a[o] || []).push(function() {
                                    try {
                                        a[i] = new a.Ya.Metrika2({
                                            id: t,
                                            clickmap: !0,
                                            trackLinks: !0,
                                            accurateTrackBounce: !0,
                                            webvisor: !0,
                                            trackHash: !0
                                        }), n.yaCounters.push(i), s()
                                    } catch (e) {
                                        console.log(e)
                                    }
                                });
                                var r = e.getElementsByTagName("script")[0],
                                    c = e.createElement("script"),
                                    u = function() {
                                        r.parentNode.insertBefore(c, r)
                                    };
                                c.type = "text/javascript", c.async = !0, c.src = "https:../mc.yandex.ru/metrika/tag.js", "[object Opera]" === a.opera ? e.addEventListener("DOMContentLoaded", u, !1) : u()
                            })(document, window, "yandex_metrika_callbacks2")
                        })
                    }
                }, {
                    key: "initGA",
                    value: function(t) {
                        var e = this;
                        return this.gaCounter = t, this.isProd ? new Promise(function(s) {
                            e.vue.use(Nt.a, {
                                id: t,
                                ready: function() {
                                    s()
                                }
                            })
                        }) : (console.info("Fake ga inited", t), Promise.resolve())
                    }
                }, {
                    key: "initFB",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            if (!e.isProd) return console.info("Fake FB pixel inited", t), e.fb = !0, s();
                            Wt(), e.vue.use(Ut.a, {
                                debug: !e.isProd
                            }), e.vue.analytics.fbq.init(t), e.fb = e.vue.analytics.fbq, e.fb.event("PageView"), s()
                        })
                    }
                }, {
                    key: "initVK",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(s) {
                            if (!e.isProd) return console.info("Fake VK pixel inited", t), e.vk = !0, s();
                            Gt(t).then(function() {
                                e.vk = window.VK, s()
                            })
                        })
                    }
                }]), t
            }(),
            Kt = {
                install: function(t) {
                    t.prototype.$analytic = new Jt(t), t.analytic = t.prototype.$analytic
                }
            },
            Yt = {
                install: function(t) {
                    t.quizFrame = t.prototype.$quizFrame = {
                        postMessage: function(t) {
                            window.parent.postMessage(JSON.stringify(t), "*")
                        },
                        changeHeight: function(t, e) {
                            this.postMessage({
                                action: "setHeight",
                                id: t,
                                height: e
                            })
                        }
                    }
                }
            };
        s("4609");
        K.a.locale("ru");
        var Zt = function(t) {
                var e = t.translations,
                    s = t.lang;
                r["a"].init({
                    resources: e,
                    preload: ["ru", "en"],
                    lng: s,
                    nsSeparator: !1,
                    keySeparator: !1,
                    interpolation: {
                        prefix: "{",
                        suffix: "}",
                        format: function(t, e, s) {
                            if (e.split("|").length >= 2) {
                                var n = e.split(" | ");
                                return n.forEach(function(e, n) {
                                    var i = e.trim();
                                    t = r["a"].options.interpolation.format(t, i, s)
                                }), t
                            }
                            if ("bold" === e) return "<b>" + t + "</b>";
                            if ("rub" === e) return t + "₽";
                            if ("number" === typeof t || "number" === e.split(" ")[0]) {
                                var i = e.split(" ")[1];
                                return "number" !== e || i || (i = "0,0"), K()(t).format(i)
                            }
                        }
                    },
                    debug: !1
                }), r["a"].on("languageChanged", function(t) {})
            },
            Xt = {
                install: function(t, e) {
                    var s = e.lang,
                        n = e.translations;
                    Zt({
                        translations: n,
                        lang: s
                    }), r["a"].changeLanguage(s), t.prototype.$t = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e.lng = $t.state.lang, r["a"].t(t, e)
                    }, t.filter("translate", function(t) {
                        return r["a"].t(t)
                    })
                }
            },
            te = (s("7f7f"), s("741a")),
            ee = s.n(te),
            se = s("c54a"),
            ne = s.n(se),
            ie = {
                install: function(t) {
                    var e = {
                        url: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                s = Object.assign({
                                    cloud_name: "hgwipn3sa",
                                    secure: "https:" === window.location.protocol,
                                    dpr: ne()() ? "2.0" : "1.0",
                                    fetch_format: "auto",
                                    source: "upload"
                                }, e);
                            return t.provider ? ee()(t.name, s) : ee()("https:../marquiz.blob.core.windows.net/default.htm".concat(t.url), Object.assign(s, {
                                source: "fetch"
                            }))
                        }
                    };
                    t.prototype.$image = e
                }
            },
            ae = s("339e"),
            oe = s.n(ae),
            re = new oe.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0,
                headerLevelStart: 3
            }),
            ce = {
                number: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0,0";
                    return K()(t).format(e)
                },
                markdown: function(t) {
                    return re.makeHtml(t)
                },
                currency: function(t) {
                    var e = {
                        USD: "$",
                        RUR: "₽",
                        EUR: "€",
                        UAH: "₴",
                        BYB: "Br",
                        KZT: "₸",
                        CNY: "¥"
                    };
                    return Q()(e, t, "")
                },
                price: function(t, e) {
                    return e ? "".concat(this.number(t), " ").concat(this.currency(e)) : this.number(t, "0,0 $")
                }
            },
            ue = {
                install: function(t) {
                    t.prototype.$format = ce
                }
            },
            le = !1;

        function de(t) {
            t && t.focus && (le || t.focus())
        }
        var he, fe, me = {
                install: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            disabled: !1
                        },
                        s = e.disabled;
                    !0 === s && (le = !0), t.directive("focus", {
                        inserted: function(t) {
                            !1 !== le && de(t)
                        }
                    }), t.prototype.$focusInput = de, t.focusInput = de
                }
            },
            pe = s("8a30"),
            ge = s.n(pe),
            ve = s("1816"),
            be = s.n(ve),
            _e = !1,
            we = window,
            ye = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = e.contacts,
                    n = e.result,
                    i = String(t);
                i.indexOf("://") < 0 && (i = "http://".concat(i));
                var a = ["phone", "email", "name", "vk", "telegram", "skype", "whatsapp", "messenger", "viber"],
                    o = !1;
                s && a.forEach(function(t) {
                    s[t] && (ge()(i, "{".concat(t, "}")) && (o = !0), i = v()(i, "{".concat(t, "}"), s[t]))
                }), n && (ge()(i, "{result}") && (o = !0), i = v()(i, "{result}", n.id));
                var r = new be.a(i, "", !0),
                    c = r.query;
                if (!o) {
                    for (var u in s) c["marquiz_".concat(u)] = s[u];
                    n && (c.result = n.id)
                }
                return r.set("query", c), _e ? console.log("Marquiz redirect", r.href) : we.top.location.href = r.href, i
            },
            ke = {
                install: function(t, e) {
                    e && (e.dummy && (_e = !0), e.window && (we = e.window)), t.redirect = ye, t.prototype.$redirect = ye
                }
            },
            xe = s("bf0f"),
            Ce = s.n(xe),
            qe = function() {
                var t = G.a.parse(window.location.search),
                    e = t.cookies ? JSON.parse(t.cookies) : {},
                    s = Q()(e, "_ga");
                s && ft.a.set("_ga", s)
            },
            ze = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("span", {
                    staticClass: "svg-icon"
                }, ["upload" === t.name ? s("svg", {
                    staticClass: "svg-icon_upload",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "35.629",
                        height: "35.629",
                        viewBox: "0 0 35.629 35.629"
                    }
                }, [s("g", {
                    attrs: {
                        id: "upload",
                        transform: "translate(1.5 1.5)"
                    }
                }, [s("path", {
                    attrs: {
                        id: "Path_251",
                        d: "M35.629 15v7.251A3.625 3.625 0 0 1 32 25.876H6.625A3.625 3.625 0 0 1 3 22.251V15",
                        "data-name": "Path 251",
                        transform: "translate(-3 6.753)"
                    }
                }), s("path", {
                    attrs: {
                        id: "Path_252",
                        d: "M25.127 12.064L16.064 3 7 12.064",
                        "data-name": "Path 252",
                        transform: "translate(.251 -3)"
                    }
                }), s("path", {
                    attrs: {
                        id: "Line_86",
                        d: "M0 0v21.753",
                        "data-name": "Line 86",
                        transform: "translate(16.315)"
                    }
                })])]) : t._e(), "loading" === t.name ? s("svg", {
                    staticClass: "svg-icon_loading",
                    attrs: {
                        version: "1.1",
                        id: "L5",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 100 100",
                        "enable-background": "new 0 0 0 0",
                        "xml:space": "preserve"
                    }
                }, [s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "6",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 15 ; 0 -15; 0 15",
                        repeatCount: "indefinite",
                        begin: "0.1"
                    }
                })], 1), s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "30",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 10 ; 0 -10; 0 10",
                        repeatCount: "indefinite",
                        begin: "0.2"
                    }
                })], 1), s("circle", {
                    attrs: {
                        fill: t.color,
                        stroke: "none",
                        cx: "54",
                        cy: "50",
                        r: "6"
                    }
                }, [s("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        dur: "1s",
                        type: "translate",
                        values: "0 5 ; 0 -5; 0 5",
                        repeatCount: "indefinite",
                        begin: "0.3"
                    }
                })], 1)]) : t._e()])
            },
            Ae = [],
            Se = {
                props: {
                    color: String,
                    name: {
                        type: String,
                        required: !0
                    }
                }
            },
            Ie = Se,
            Oe = (s("f1ad"), s("2877")),
            $e = Object(Oe["a"])(Ie, ze, Ae, !1, null, null, null),
            De = $e.exports,
            Le = s("cdae"),
            Re = (s("5abe"), s("dfa4"), s("98f9"), s("7452"), s("5b6c")),
            Ee = s.n(Re),
            Fe = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "app",
                    style: t.styles,
                    attrs: {
                        id: "app"
                    }
                }, [t.loaded ? s("Layout", [t.quizStarted ? t._e() : s("div", {
                    staticClass: "app__start-page"
                }, [s("StartPage")], 1), t.quizStarted ? s("Quiz") : t._e()], 1) : t._e(), t.isShowWelcomePage ? t._e() : [t.isLoading ? s("div", {
                    staticClass: "app__loading"
                }) : t._e(), t.notFound ? s("div", {
                    staticClass: "app__not-found"
                }, [s("div", {
                    staticClass: "app__emoji"
                }, [t._v("4️⃣ 0️⃣ 4️⃣")]),  : t._e(), t.loadingError ? s("div", {
                    staticClass: "app__loading-error"
                }, [s("p", [t._v(t._s(t.$t("не удалось загрузить тест")) + "..")]), s("div", {
                    staticClass: "app__emoji"
                }, [t._v("🤒")])]) : t._e(), "agreement" === t.$route.path ? s("router-view") : t._e()], t.isShowWelcomePage ? s("Welcome") : t._e(), t.isVkGroupAdmin ? s("button", {
                    staticClass: "app__edit button is-small",
                    on: {
                        click: function(e) {
                            t.isEditMode = !0
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "pencil"
                    }
                })], 1) : t._e(), t.isEditMode ? s("b-modal", {
                    attrs: {
                        active: t.isEditMode
                    },
                    on: {
                        "update:active": function(e) {
                            t.isEditMode = e
                        }
                    }
                }, [s("div", {
                    staticClass: "card"
                }, [s("div", {
                    staticClass: "card-content"
                }, [s("Install", {
                    attrs: {
                        quizId: t.quizId,
                        request: t.request,
                        quizTitle: t.info.name || t.info.title
                    },
                    on: {
                        changed: t.closeAndReload
                    }
                })], 1)])]) : t._e(), "preview" === t.mode ? s("PreviewController") : t._e()], 2)
            },
            Te = [],
            je = s("3065"),
            Pe = s.n(je),
            Me = s("5308"),
            Qe = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "layout"
                }, [t._t("default")], 2)
            },
            Be = [],
            Ve = (s("895a"), {}),
            Ne = Object(Oe["a"])(Ve, Qe, Be, !1, null, null, null),
            He = Ne.exports,
            Ue = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "quiz",
                    staticClass: "quiz-container"
                }, [t.leadForm || t.isResultsShow || t.isResultShow || t.isResultLoaderShow ? t._e() : s("div", {
                    staticClass: "quiz",
                    class: {
                        quiz_sidebar_on: t.showRightSidebar
                    }
                }, [t.getQuestion ? s("div", {
                    staticClass: "quiz__questions"
                }, [s("div", {
                    staticClass: "quiz__questions-header"
                }, [s("h3", {
                    staticClass: "quiz__title"
                }, [s("b-icon", {
                    staticClass: "quiz__title-icon",
                    attrs: {
                        icon: "file-document-box-check-outline"
                    }
                }), t._v(t._s(t.info.title))], 1), s("hr", {
                    staticClass: "quiz__title-separator"
                }), t.bonuses.length || t.discount ? s("div", {
                    staticClass: "quiz__sidebar-mobile"
                }, [s("SidebarMobile", {
                    attrs: {
                        bonuses: t.bonuses,
                        countQuestions: t.questions.length,
                        discount: t.discount,
                        autoshow: !t.get(t.info, "startPage.enabled", !1)
                    }
                })], 1) : t._e(), t.getQuestion ? [s("div", {
                    staticClass: "title quiz__question-title"
                }, [t._v(t._s(t.getQuestion.title)), s("br"), s("div", {
                    staticClass: "quiz__tags"
                }, [t.getCanMany ? s("b-tag", {
                    staticClass: "quiz__tag quiz__tag_many",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [s("div", {
                    staticClass: "quiz__tag-icon"
                }, [s("b-icon", {
                    attrs: {
                        icon: "check-circle",
                        customSize: "mdi-16px"
                    }
                })], 1), t._v(t._s(t.$t("выберите один или несколько")))]) : t._e(), t.getNotRequired ? s("b-tag", {
                    staticClass: "quiz__tag quiz__tag_skip",
                    on: {
                        close: function(e) {
                            t.isTag1Active = !1
                        }
                    }
                }, [t._v(t._s(t.$t("можно пропустить")))]) : t._e()], 1)]), t.showRightSidebar ? s("div", {
                    staticClass: "quiz__sidebar-inner"
                }, [t.discount ? s("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), t.getQuestion.text ? s("AssistantMobile", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e()], 1) : t._e()] : t._e()], 2), s("transition", {
                    attrs: {
                        mode: "out-in"
                    },
                    on: {
                        leave: t.leave,
                        beforeEnter: t.beforeEnter,
                        enter: t.enter,
                        afterEnter: t.afterEnter
                    }
                }, [s("keep-alive", t._l(t.questions, function(e, n) {
                    return n === t.activeQuestion ? s("Question", {
                        key: e.id,
                        ref: "question",
                        refInFor: !0,
                        staticClass: "quiz__question",
                        attrs: {
                            question: e,
                            id: e.id
                        }
                    }) : t._e()
                }), 1)], 1), t.isWhiteLabelActive ? t._e() : s("div", {
                    staticClass: "quiz__whitelabel quiz__whitelabel_mobile"
                }, [s("WhiteLabel")], 1), s("div", {
                    staticClass: "quiz__buttons"
                }, [s("QuizButtons", {
                    attrs: {
                        "passed-percent": t.getPassedPercent,
                        "active-question": t.activeQuestion,
                        "not-required": t.getNotRequired,
                        "is-last": t.isLastStep,
                        filled: t.getIsFilled,
                        "white-label": !t.showRightSidebar
                    },
                    on: {
                        previous: t.prevQuestion,
                        next: t.nextQuestion,
                        "show-lead": t.nextQuestion
                    }
                })], 1)], 1) : t._e(), t.getQuestion && t.showRightSidebar ? s("div", {
                    staticClass: "quiz__sidebar"
                }, [t.discount ? s("Discount", {
                    staticClass: "quiz__discount",
                    attrs: {
                        countQuestions: t.questions.length
                    }
                }) : t._e(), t.getQuestion.text ? s("Assistant", {
                    staticClass: "quiz__assistant",
                    attrs: {
                        text: t.getQuestion.text,
                        hint: t.hint,
                        assistant: t.info.assistant
                    }
                }) : t._e(), t.bonuses.length ? s("Bonuses", {
                    staticClass: "quiz__bonuses",
                    attrs: {
                        height: 64
                    }
                }) : t._e(), t.isWhiteLabelActive ? t._e() : s("div", {
                    staticClass: "quiz__whitelabel"
                }, [s("WhiteLabel")], 1)], 1) : t._e(), t.showRightSidebar || t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                    staticClass: "quiz__whitelabel_fixed-bottom"
                })], 1), t.isResultLoaderShow ? s("div", {
                    staticClass: "quiz__result-loader"
                }, [s("ResultLoader")], 1) : t._e(), t.isResultsShow ? s("div", {
                    staticClass: "quiz__results"
                }, [s("Results")], 1) : t._e(), t.isResultShow ? s("div", {
                    staticClass: "quiz__result"
                }, [t.isEmpty(t.result) ? s("div", {
                    staticClass: "quiz__empty-result"
                }, [t._v(t._s(t.$t("Мы не смогли рассчитать для вас результат")) + " 😢"), s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            return t.$store.commit("quiz/startQuiz")
                        }
                    }
                }, [t._v(t._s(t.$t("Попробовать ещё раз")))])]) : t._e(), t.isEmpty(t.result) ? t._e() : s("Result")], 1) : t._e(), t.leadForm ? s("div", {
                    staticClass: "quiz__lead-form"
                }, [t.bonuses.length ? s("FinalPageV2") : s("FinalPage")], 1) : t._e()])
            },
            We = [],
            Ge = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "assistant",
                    class: {
                        "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint
                    }
                }, [t.hasAssistant ? s("div", {
                    staticClass: "assistant__person"
                }, [s("div", {
                    staticClass: "assistant__avatar"
                }, [t.imageUrl ? s("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), s("div", {
                    staticClass: "assistant__avatar-badge"
                })]), s("div", {
                    staticClass: "assistant__name"
                }, [s("p", {
                    staticClass: "assistant__title"
                }, [t._v(t._s(t.assistant.name))]), t.assistant.title ? s("p", {
                    staticClass: "assistant__subtitle"
                }, [s("span", [t._v(t._s(t.assistant.title))])]) : t._e()])]) : t._e(), t.hint && t.hint.title ? s("div", {
                    staticClass: "assistant__text-title"
                }, [t._v(t._s(t.hint.title))]) : t._e(), s("transition", {
                    attrs: {
                        name: t.hint ? "animation-hint" : "animation-comment",
                        mode: "out-in",
                        appear: ""
                    }
                }, [t.text || t.hint ? s("div", {
                    key: t.textHtml,
                    staticClass: "assistant__block"
                }, [t.hasAssistant ? s("div", {
                    staticClass: "assistant__text-arrow"
                }) : t._e(), s("div", {
                    staticClass: "assistant__text",
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })]) : t._e()])], 1)
            },
            Je = [],
            Ke = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14.257 8.127"
                    }
                }, [s("defs"), s("g", {
                    staticClass: "cls-1",
                    attrs: {
                        id: "arrow-point-to-right_1_",
                        "data-name": "arrow-point",
                        transform: "rotate(-90 52.633 52.633)"
                    }
                }, [s("path", {
                    attrs: {
                        id: "Path_4",
                        d: "M104.973 7.834l-6.13 6.13a1 1 0 0 1-1.412-1.412l5.424-5.424L97.431 1.7A1 1 0 0 1 98.843.292l6.13 6.13a1 1 0 0 1 0 1.412z",
                        "data-name": "Path 4"
                    }
                })])])
            },
            Ye = [],
            Ze = {
                name: "ArrowPoint"
            },
            Xe = Ze,
            ts = (s("0287"), Object(Oe["a"])(Xe, Ke, Ye, !1, null, "14468613", null)),
            es = ts.exports,
            ss = new oe.a.Converter({
                simplifiedAutoLink: !0,
                openLinksInNewWindow: !0,
                simpleLineBreaks: !0
            }),
            ns = {
                components: {
                    ArrowShow: es
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", {
                    activeQuestion: function(t) {
                        return t.activeQuestion
                    }
                }), Object(o["c"])("quiz", {
                    question: "getQuestion",
                    countQuestions: "countQuestions"
                }), {
                    hasAssistant: function() {
                        return !!this.assistant.name
                    },
                    imageUrl: function() {
                        var t = this.assistant.avatar;
                        t || (t = {
                            name: "avatar",
                            provider: "cloudinary"
                        });
                        var e = "cloudinary" === t.provider ? t.name : "../https@marquiz.blob.core.windows.net/default.htm".concat(t.url),
                            s = {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === t.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 70,
                                height: 70,
                                crop: "fill",
                                gravity: "face",
                                dpr: ne()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            };
                        return ee()(e, s)
                    },
                    textHtml: function() {
                        return this.hint ? ss.makeHtml(this.hint.text) : ss.makeHtml(this.text)
                    }
                })
            },
            is = ns,
            as = (s("222e"), Object(Oe["a"])(is, Ge, Je, !1, null, null, null)),
            os = as.exports,
            rs = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "assistant-mobile",
                    class: {
                        "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint, "is-expanded": t.expanded, "has-more": t.hasMore
                    }
                }, [t.text ? n("div", {
                    staticClass: "assistant-mobile__block",
                    on: {
                        click: t.toggleText
                    }
                }, [t.hasAssistant ? n("div", {
                    staticClass: "assistant-mobile__person"
                }, [n("div", {
                    staticClass: "assistant-mobile__avatar"
                }, [t.imageUrl ? n("img", {
                    attrs: {
                        src: t.imageUrl
                    }
                }) : t._e(), t.imageUrl ? t._e() : n("img", {
                    attrs: {
                        src: t.avatar
                    }
                })])]) : t._e(), n("div", {
                    ref: "textContainer",
                    staticClass: "assistant-mobile__text-container"
                }, [n("div", {
                    ref: "text",
                    staticClass: "assistant-mobile__text"
                }, [t.hint ? t._e() : n("div", {
                    staticClass: "assistant-mobile__name"
                }, [n("p", {
                    staticClass: "assistant-mobile__title"
                }, [t._v(t._s(t.getFirstName(t.assistant.name)))]), t.assistant.title ? n("p", {
                    staticClass: "assistant-mobile__subtitle"
                }, [n("span", {
                    staticClass: "assistant-mobile__status"
                }), n("span", [t._v(t._s(t.assistant.title))])]) : t._e(), t.hasMore ? n("img", {
                    staticClass: "assistant-mobile__arrow",
                    attrs: {
                        src: s("896a")
                    }
                }) : t._e()]), t.hint ? n("div", {
                    staticClass: "assistant-mobile__header"
                }, [t._v(t._s(t.hint.title)), n("b-icon", {
                    staticClass: "assistant-mobile__arrow",
                    attrs: {
                        icon: "close"
                    }
                })], 1) : t._e(), n("transition", {
                    key: t.activeQuestion,
                    attrs: {
                        name: "slide-fade",
                        mode: "out-in"
                    },
                    on: {
                        enter: t.reinit
                    }
                }, [n("div", {
                    key: t.activeQuestion,
                    ref: "assistantText",
                    staticClass: "assistant-mobile__text-html"
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.textHtml)
                    }
                })])])], 1)])]) : t._e()])
            },
            cs = [],
            us = s("2171"),
            ls = s.n(us),
            ds = {
                extends: os,
                mounted: function() {
                    this.setLineClamp()
                },
                props: {
                    assistant: Object,
                    text: String,
                    hint: Object
                },
                data: function() {
                    return {
                        hasMore: !1,
                        expanded: !1,
                        clampedText: null
                    }
                },
                computed: {
                    lines: function() {
                        return this.hasAssistant ? 1 : 2
                    }
                },
                methods: {
                    getFirstName: function(t) {
                        return t.split(" ")[0]
                    },
                    toggleText: function() {
                        this.hint ? this.closeHint() : (this.expanded = !this.expanded, this.expanded ? this.$refs.assistantText.innerHTML = this.textHtml : this.$refs.assistantText.innerHTML = this.clampedText)
                    },
                    closeHint: function() {
                        this.expanded = !1, this.$store.commit("quiz/showHint")
                    },
                    setLineClamp: function() {
                        var t = this;
                        this.$nextTick(function() {
                            t.$refs.assistantText && (t.hasMore = ls()(t.$refs.assistantText, t.lines), t.clampedText = t.$refs.assistantText.innerHTML)
                        })
                    },
                    reinit: function() {
                        this.hasMore = !1, this.expanded = !1, this.clampedText = null, this.setLineClamp()
                    }
                },
                watch: {
                    hint: function(t) {
                        t && (this.expanded = !0)
                    }
                }
            },
            hs = ds,
            fs = (s("0d14"), Object(Oe["a"])(hs, rs, cs, !1, null, null, null)),
            ms = fs.exports,
            ps = s("dfbf"),
            gs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "question",
                    class: ["question_" + t.question.type]
                }, [!t.question.type || "answers" === t.question.type && !t.hasImages || "variants" === t.question.type ? s("Variants", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        hasOther: !!t.question.other
                    }
                }) : t._e(), "one-image" === t.question.type ? s("OneImage", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        hasOther: !!t.question.other,
                        startText: t.question.options.startText,
                        defaultImage: t.question.options.defaultImage
                    }
                }) : t._e(), "images" === t.question.type || "answers" === t.question.type && t.hasImages ? s("Images", {
                    key: t.componentKey,
                    attrs: {
                        answers: t.question.answers,
                        select: t.question.select,
                        type: t.question.options.imageType
                    }
                }) : t._e(), "input" === t.question.type ? s("InputAnswer", {
                    key: t.componentKey,
                    attrs: {
                        options: t.question.options
                    }
                }) : t._e(), "select" === t.question.type ? s("SelectAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "date" === t.question.type ? s("DateAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e(), "slider" === t.question.type ? s("SliderAnswer", {
                    key: t.componentKey,
                    attrs: {
                        isRange: t.get(t.question, "options.isRange"),
                        min: Number(t.get(t.question, "options.range.min") || 0),
                        max: Number(t.get(t.question, "options.range.max") || 100),
                        step: Number(t.get(t.question, "options.range.step"))
                    }
                }) : t._e(), "file" === t.question.type ? s("FileAnswer", {
                    key: t.componentKey,
                    attrs: {
                        question: t.question
                    }
                }) : t._e()], 1)
            },
            vs = [],
            bs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "answers",
                    staticClass: "answer-variants"
                }, [s("div", {
                    staticClass: "answer-variants__group",
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e) {
                    return s("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-variants__textVariant",
                        class: {
                            "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                        }
                    }, ["one" === t.select ? s("b-radio", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1) : t._e(), "many" === t.select ? s("b-checkbox", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1) : t._e()], 1)
                }), t.hasOther ? s("div", {
                    staticClass: "answer-variants__textVariant answer-variants__other"
                }, ["one" === t.select ? s("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), "many" === t.select ? s("b-checkbox", {
                    attrs: {
                        value: !!t.other
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }) : t._e(), s("b-field", [s("b-input", {
                    attrs: {
                        placeholder: t.$t("Другое") + "..."
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1) : t._e()], 2)])
            },
            _s = [],
            ws = s("ceac"),
            ys = s.n(ws),
            ks = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer",
                    class: {
                        answer_checked: t.checked
                    }
                }, [s("div", {
                    staticClass: "answer__title"
                }, [t._v(t._s(t.answer.title) + " "), t.answer.hint ? s("Hint", {
                    staticClass: "answer__hint",
                    attrs: {
                        answer: t.answer
                    }
                }) : t._e()], 1)])
            },
            xs = [],
            Cs = function() {
                return s.e("popover").then(s.bind(null, "2cc6"))
            },
            qs = {
                components: {
                    Hint: Cs
                },
                props: {
                    answer: {
                        type: Object
                    },
                    checked: {
                        type: Boolean
                    }
                }
            },
            zs = qs,
            As = (s("2c09"), Object(Oe["a"])(zs, ks, xs, !1, null, null, null)),
            Ss = As.exports,
            Is = {
                components: {
                    Answer: Ss
                },
                data: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    return {
                        val: t,
                        other: this.getOtherValue(t)
                    }
                },
                props: {
                    answers: Array,
                    select: String,
                    hasOther: Boolean
                },
                computed: {
                    otherIndex: function() {
                        return this.getOtherIndex(this.val)
                    },
                    otherValue: function() {
                        return this.getOtherValue(this.val)
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getOtherIndex: function(t) {
                        var e, s = ys()(t, E()(this.answers, "title"));
                        return e = s.length ? P()(t, s[0]) : null, e
                    },
                    getOtherValue: function(t) {
                        if ("one" === this.select) return ge()(E()(this.answers, "title"), t) ? null : t;
                        if (!t) return null;
                        var e = this.getOtherIndex(t);
                        return t && e >= 0 ? t[e] : null
                    },
                    setOtherVal: function(t) {
                        "one" === this.select ? this.val = t : null !== this.otherIndex ? t ? this.val[this.otherIndex] = t : this.val.splice(this.otherIndex, 1) : this.val.push(t)
                    },
                    isChecked: function(t) {
                        var e = !1;
                        return this.val && (e = "one" === this.select ? this.val === t : P()(this.val, t) >= 0), e
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    isOther: function(t) {
                        var e = !0;
                        return e = "one" === this.select ? P()(E()(this.answers, "title"), t) >= 0 : ys()(this.val, E()(this.answers, "title")), e
                    },
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    }
                }),
                watch: {
                    other: function(t) {
                        null !== t && this.setOtherVal(t)
                    },
                    val: function(t) {
                        t && this.other && "one" === this.select && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Os = Is,
            $s = (s("5ad8"), Object(Oe["a"])(Os, bs, _s, !1, null, null, null)),
            Ds = $s.exports,
            Ls = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    ref: "answers",
                    staticClass: "answer-one-image"
                }, [s("div", {
                    staticClass: "answer-one-image__group",
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [t._l(t.answers, function(e) {
                    return s("div", {
                        key: e.id,
                        ref: "answer",
                        refInFor: !0,
                        staticClass: "answer-one-image__textVariant",
                        class: {
                            "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                        }
                    }, [s("b-radio", {
                        attrs: {
                            "native-value": e.title
                        },
                        model: {
                            value: t.val,
                            callback: function(e) {
                                t.val = e
                            },
                            expression: "val"
                        }
                    }, [s("Answer", {
                        attrs: {
                            answer: e,
                            checked: t.isChecked(e.title)
                        }
                    })], 1)], 1)
                }), t.hasOther ? s("div", {
                    staticClass: "answer-one-image__textVariant answer-one-image__other"
                }, [s("b-radio", {
                    attrs: {
                        value: !!t.other,
                        "native-value": !0
                    },
                    on: {
                        input: t.checkOtherValue
                    }
                }), s("b-field", [s("b-input", {
                    attrs: {
                        placeholder: t.$t("Другое") + "..."
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.other,
                        callback: function(e) {
                            t.other = e
                        },
                        expression: "other"
                    }
                })], 1)], 1) : t._e(), s("div", {
                    staticStyle: {
                        height: "0.5rem"
                    }
                })], 2), s("div", {
                    staticClass: "answer-one-image__image"
                }, [t.imageUrl ? s("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.imgLoaded,
                        expression: "imgLoaded"
                    }],
                    ref: "img",
                    staticClass: "answer-image__img",
                    attrs: {
                        src: t.imageUrl
                    },
                    on: {
                        load: t.showImage
                    }
                }) : t._e(), t.imageUrl && !t.imgLoaded ? s("div", {
                    staticClass: "answer-one-image__dummy-loading"
                }) : t._e(), t.imageUrl ? t._e() : s("div", {
                    staticClass: "answer-one-image__dummy"
                }, [t._v(t._s(t.dummyText))])])])
            },
            Rs = [],
            Es = s("63ea"),
            Fs = s.n(Es),
            Ts = {
                components: {
                    Answer: Ss
                },
                data: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    return f()(t) && (t = null), {
                        val: t,
                        other: this.getOtherValue(t),
                        imgLoaded: !1
                    }
                },
                props: {
                    answers: Array,
                    hasOther: Boolean,
                    startText: String,
                    defaultImage: Object
                },
                computed: {
                    otherIndex: function() {
                        return this.getOtherIndex(this.val)
                    },
                    otherValue: function() {
                        return this.getOtherValue(this.val)
                    },
                    activeImage: function() {
                        if (!A()(this.defaultImage) && !this.val) return this.defaultImage;
                        if (!this.val) return null;
                        var t = I()(this.answers, {
                            title: this.val
                        });
                        return t ? A()(t.image) && !A()(this.defaultImage) ? this.defaultImage : t.image : null
                    },
                    imageUrl: function() {
                        if (!this.activeImage) return null;
                        var t = "cloudinary" === this.activeImage.provider ? this.activeImage.name : "../https@marquiz.blob.core.windows.net/default.htm".concat(this.activeImage.url),
                            e = {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === this.activeImage.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 380,
                                height: 307,
                                crop: "fill",
                                dpr: ne()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            };
                        return ee()(t, e)
                    },
                    dummyText: function() {
                        return !this.val && this.startText ? this.startText : !this.val && document.body.clientWidth <= 767 ? this.$t("Выберите вариант ответа снизу") : this.val ? this.otherValue ? this.val : this.imageUrl ? "" : this.val : this.$t("Выберите вариант ответа слева")
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getOtherIndex: function(t) {
                        var e, s = ys()(t, E()(this.answers, "title"));
                        return e = s.length ? P()(t, s[0]) : null, e
                    },
                    getOtherValue: function(t) {
                        return ge()(E()(this.answers, "title"), t) ? null : t
                    },
                    setOtherVal: function(t) {
                        this.val = t
                    },
                    isChecked: function(t) {
                        return this.val === t
                    },
                    getIsWider: function() {
                        var t = 0;
                        return this.$refs.answer.forEach(function(e) {
                            t += e.clientWidth
                        }), this.$refs.answers.clientWidth <= t
                    },
                    isOther: function(t) {
                        return P()(E()(this.answers, "title"), t) >= 0
                    },
                    checkOtherValue: function(t) {
                        t || (this.other = "")
                    },
                    showImage: function() {
                        this.imgLoaded = !0
                    }
                }),
                watch: {
                    other: function(t) {
                        null !== t && this.setOtherVal(t)
                    },
                    val: function(t) {
                        t && this.other && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
                    },
                    activeImage: function(t, e) {
                        Fs()(t, e) || (this.imgLoaded = !1)
                    }
                }
            },
            js = Ts,
            Ps = (s("c06f"), Object(Oe["a"])(js, Ls, Rs, !1, null, null, null)),
            Ms = Ps.exports,
            Qs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "input-question"
                }, [s("b-field", [s("b-input", {
                    ref: "input",
                    attrs: {
                        placeholder: t.options ? t.options.placeholder : null,
                        size: "is-large"
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextQuestion(e)
                        }
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                })], 1)], 1)
            },
            Bs = [],
            Vs = {
                props: {
                    options: Object
                },
                mounted: function() {
                    "inline" === this.mode && 0 === this.activeQuestion || this.$focusInput(this.$refs.input)
                },
                data: function() {
                    return {
                        val: this.$store.getters["quiz/getAnswerValue"]
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["mode", "activeQuestion"])),
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"])),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Ns = Vs,
            Hs = Object(Oe["a"])(Ns, Qs, Bs, !1, null, null, null),
            Us = Hs.exports,
            Ws = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-select"
                }, [s("b-field", [s("b-select", {
                    attrs: {
                        placeholder: t.question.options.placeholder,
                        size: "is-large",
                        multiple: "many" === t.question.select
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, t._l(t.question.answers, function(e) {
                    return s("option", {
                        key: e.id,
                        domProps: {
                            value: e.title
                        }
                    }, [t._v(t._s(e.title))])
                }), 0)], 1)], 1)
            },
            Gs = [],
            Js = {
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        val: this.$store.getters["quiz/getAnswerValue"]
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"])),
                watch: {
                    val: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            Ks = Js,
            Ys = (s("4ad0"), Object(Oe["a"])(Ks, Ws, Gs, !1, null, null, null)),
            Zs = Ys.exports,
            Xs = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-slider"
                }, [s("b-field", [s("div", {
                    staticClass: "answer-slider__container"
                }, [s("div", {
                    staticClass: "answer-slider__limit"
                }, [t._v(t._s(t.$format.number(t.min)))]), s("vue-slider", {
                    attrs: {
                        height: "10",
                        min: t.min || 0,
                        max: t.max || 100,
                        "bg-style": t.bgStyle,
                        formatter: t.$format.number,
                        "process-style": t.processStyle,
                        "tooltip-style": t.tooltipStyle,
                        interval: t.step || 1
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), s("div", {
                    staticClass: "answer-slider__limit"
                }, [t._v(t._s(t.$format.number(t.max)))])], 1)])], 1)
            },
            tn = [],
            en = s("6f79"),
            sn = s.n(en),
            nn = {
                components: {
                    VueSlider: sn.a
                },
                props: {
                    isRange: {
                        type: Boolean,
                        default: !1
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    step: {
                        type: Number,
                        default: 1
                    }
                },
                created: function() {
                    var t = this.$store.getters["quiz/getAnswerValue"];
                    t && 0 !== t.length ? this.value = this.isRange ? [t.from, t.to] : t : this.value = this.defaultValue
                },
                data: function() {
                    return {
                        value: null,
                        bgStyle: {
                            backgroundColor: "var(--color-lighten)"
                        },
                        processStyle: {
                            backgroundColor: "var(--color)"
                        },
                        tooltipStyle: {
                            backgroundColor: "var(--color)",
                            borderColor: "var(--color)"
                        }
                    }
                },
                computed: {
                    defaultValue: function() {
                        return this.isRange ? [Math.floor(this.min + .25 * (this.max - this.min)), Math.floor(this.min + .75 * (this.max - this.min))] : Math.floor((this.min + this.max) / 2)
                    }
                },
                watch: {
                    value: function(t) {
                        this.isRange ? this.$store.dispatch("quiz/setAnswer", {
                            from: t[0],
                            to: t[1]
                        }) : this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            an = nn,
            on = (s("3cf9"), Object(Oe["a"])(an, Xs, tn, !1, null, null, null)),
            rn = on.exports,
            cn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "answer-file"
                }, [s("b-tag", {
                    staticClass: "answer-file__limit"
                }, [t._v("10MB max")]), s("b-field", [s("b-upload", {
                    attrs: {
                        "drag-drop": "",
                        multiple: t.isMultiple
                    },
                    on: {
                        input: t.validateFiles
                    },
                    model: {
                        value: t.files,
                        callback: function(e) {
                            t.files = e
                        },
                        expression: "files"
                    }
                }, [s("section", {
                    staticClass: "section"
                }, [s("div", {
                    staticClass: "content has-text-centered"
                }, [s("p", [s("SvgIcon", {
                    staticClass: "answer-file__icon",
                    attrs: {
                        name: "upload"
                    }
                })], 1), s("div", {
                    staticClass: "answer-file__header"
                }, [t._v(t._s(t.$t("Нажмите, чтобы загрузить файл")))]), s("div", {
                    staticClass: "answer-file__text"
                }, [t._v(t._s(t.$t("Или перетяните его из папки в это поле")))])])])])], 1), s("div", {
                    staticClass: "tags"
                }, t._l(t.files, function(e, n) {
                    return s("span", {
                        key: n,
                        staticClass: "answer-file__file-tag tag is-primary"
                    }, [t._v(t._s(e.name)), s("button", {
                        staticClass: "delete is-small",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return t.deleteDropFile(n)
                            }
                        }
                    })])
                }), 0)], 1)
            },
            un = [],
            ln = 10,
            dn = {
                components: {
                    SvgIcon: De
                },
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        files: this.isMultiple ? [] : null,
                        errors: []
                    }
                },
                computed: {
                    fileType: function() {
                        return Q()(this.question, "options.fileType", null)
                    },
                    isMultiple: function() {
                        return "many" === Q()(this.question, "select")
                    }
                },
                methods: {
                    deleteDropFile: function(t) {
                        this.$delete(this.files, t)
                    },
                    validateFiles: function(t) {
                        var e = this;
                        if (t) {
                            this.errors = [];
                            var s = [],
                                n = t;
                            f()(n) || (n = [t]), wt()(n, function(t) {
                                t.size > 1024 * ln * 1024 ? e.showMessage(e.$t("Файл {name} слишком большой", {
                                    name: t.name
                                })) : s.push(t)
                            }), this.files = s
                        }
                    },
                    showMessage: function(t) {
                        this.$snackbar.open({
                            message: t,
                            type: "is-danger",
                            position: "is-bottom-right",
                            indefinite: !0,
                            duration: 5e3,
                            queue: !1
                        })
                    }
                },
                watch: {
                    files: function(t) {
                        this.$store.dispatch("quiz/setAnswer", t)
                    }
                }
            },
            hn = dn,
            fn = (s("64ea"), Object(Oe["a"])(hn, cn, un, !1, null, null, null)),
            mn = fn.exports,
            pn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "date-question"
                }, [t.isRange ? t._e() : s("b-field", {
                    staticClass: "date-question__field",
                    class: {
                        "has-time": t.hasTime
                    }
                }, [s("b-datepicker", {
                    staticClass: "is-not-range",
                    attrs: {
                        inline: "",
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.question.options.placeholder,
                        readonly: !1,
                        "first-day-of-week": 1,
                        size: "is-small"
                    },
                    model: {
                        value: t.date,
                        callback: function(e) {
                            t.date = e
                        },
                        expression: "date"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker is-not-range",
                    attrs: {
                        icon: "clock"
                    },
                    model: {
                        value: t.time,
                        callback: function(e) {
                            t.time = e
                        },
                        expression: "time"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.time = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.time = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1), t.isRange ? s("b-field", [s("div", {
                    staticClass: "date-question__container"
                }, [s("div", {
                    staticClass: "date-question__range"
                }, [s("div", {
                    staticClass: "date-question__date"
                }, [s("b-datepicker", {
                    ref: "from",
                    attrs: {
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.$t("От"),
                        icon: "calendar-today",
                        readonly: !1,
                        "mobile-native": !1,
                        "first-day-of-week": 1
                    },
                    model: {
                        value: t.from,
                        callback: function(e) {
                            t.from = e
                        },
                        expression: "from"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker",
                    attrs: {
                        icon: "clock"
                    },
                    model: {
                        value: t.timeFrom,
                        callback: function(e) {
                            t.timeFrom = e
                        },
                        expression: "timeFrom"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.timeFrom = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.timeFrom = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1), s("span", {
                    staticStyle: {
                        "margin-top": "10px"
                    }
                }, [t._v(" - ")]), s("div", {
                    staticClass: "date-question__date"
                }, [s("b-datepicker", {
                    ref: "to",
                    attrs: {
                        "day-names": t.dayNames,
                        "month-names": t.monthNames,
                        placeholder: t.$t("До"),
                        "min-date": t.from,
                        icon: "calendar-today",
                        readonly: !1,
                        "mobile-native": !1,
                        "first-day-of-week": 1
                    },
                    model: {
                        value: t.to,
                        callback: function(e) {
                            t.to = e
                        },
                        expression: "to"
                    }
                }), t.hasTime ? s("b-timepicker", {
                    staticClass: "date-question__timepicker",
                    attrs: {
                        position: "is-bottom-left",
                        icon: "clock"
                    },
                    model: {
                        value: t.timeTo,
                        callback: function(e) {
                            t.timeTo = e
                        },
                        expression: "timeTo"
                    }
                }, [s("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            t.timeTo = new Date
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "clock"
                    }
                }), s("span", [t._v(t._s(t.$t("Сейчас")))])], 1), s("button", {
                    staticClass: "button is-danger",
                    on: {
                        click: function(e) {
                            t.timeTo = null
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                }), s("span", [t._v(t._s(t.$t("Сброс")))])], 1)]) : t._e()], 1)])])]) : t._e()], 1)
            },
            gn = [],
            vn = {
                props: {
                    question: Object
                },
                data: function() {
                    return {
                        timeFrom: Q()(this.$store.getters["quiz/getAnswerValue"], "timeFrom", new Date((new Date).setHours(9, 0))),
                        timeTo: Q()(this.$store.getters["quiz/getAnswerValue"], "timeTo", new Date((new Date).setHours(18, 0))),
                        date: Q()(this.$store.getters["quiz/getAnswerValue"], "date", this.$store.getters["quiz/getAnswerValue"]),
                        from: Q()(this.$store.getters["quiz/getAnswerValue"], "from", null),
                        to: Q()(this.$store.getters["quiz/getAnswerValue"], "to", null),
                        time: Q()(this.$store.getters["quiz/getAnswerValue"], "time", new Date((new Date).setHours(9, 0))),
                        dayNames: [this.$t("Вс"), this.$t("Пн"), this.$t("Вт"), this.$t("Ср"), this.$t("Чт"), this.$t("Пт"), this.$t("Сб")],
                        monthNames: [this.$t("Январь"), this.$t("Февраль"), this.$t("Март"), this.$t("Апрель"), this.$t("Май"), this.$t("Июнь"), this.$t("Июль"), this.$t("Август"), this.$t("Сентябрь"), this.$t("Октябрь"), this.$t("Ноябрь"), this.$t("Декабрь")]
                    }
                },
                computed: {
                    isRange: function() {
                        return this.question.options.isRange
                    },
                    hasTime: function() {
                        return this.question.options.hasTime
                    },
                    dateObject: function() {
                        return this.isRange ? {
                            from: this.from,
                            to: this.to,
                            timeFrom: this.timeFrom,
                            timeTo: this.timeTo
                        } : this.hasTime ? {
                            date: this.date,
                            time: this.time
                        } : this.date
                    }
                },
                methods: Object(u["a"])({}, Object(o["b"])("quiz", ["nextQuestion"]), {
                    getFormattedTime: function(t) {
                        if (t) {
                            var e = "0".concat(t.getHours()).slice(-2),
                                s = "0".concat(t.getMinutes()).slice(-2);
                            return "".concat(e, ":").concat(s)
                        }
                        return null
                    }
                }),
                watch: {
                    from: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    to: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    timeFrom: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    timeTo: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    time: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    },
                    date: function() {
                        this.$store.dispatch("quiz/setAnswer", this.dateObject)
                    }
                }
            },
            bn = vn,
            _n = (s("86a7"), Object(Oe["a"])(bn, pn, gn, !1, null, null, null)),
            wn = _n.exports,
            yn = {
                components: {
                    Variants: Ds,
                    Images: function() {
                        return s.e("swiper").then(s.bind(null, "5ec1"))
                    },
                    InputAnswer: Us,
                    OneImage: Ms,
                    SelectAnswer: Zs,
                    DateAnswer: wn,
                    SliderAnswer: rn,
                    FileAnswer: mn
                },
                props: {
                    question: Object
                },
                computed: {
                    hasImages: function() {
                        var t = !1;
                        return this.question.answers.forEach(function(e) {
                            e.image && (t = !0)
                        }), t
                    },
                    componentKey: function() {
                        return JSON.stringify(this.question)
                    }
                },
                methods: {
                    get: Q.a
                }
            },
            kn = yn,
            xn = (s("fbb3"), Object(Oe["a"])(kn, gs, vs, !1, null, null, null)),
            Cn = xn.exports,
            qn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "discount",
                    class: {
                        "is-unexpanded": t.unexpanded
                    }
                }, [t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                        staticClass: "discount__bubble discount__bubble_mobile",
                        class: {
                            "is-unexpanded": t.unexpanded
                        }
                    }, [t._v(t._s("+ " + t.getIncreasingDiscountStep))]) : t._e()
                }), s("div", {
                    staticClass: "discount__label"
                }, [s("div", {
                    staticClass: "discount__icon"
                }, [t._v(t._s(t.getDiscountIcon))]), s("div", {
                    staticClass: "discount__label-text"
                }, [t._v(t._s(t.$t("Ваша скидка")) + ": ")])]), s("div", {
                    staticClass: "discount__price"
                }, [s("div", {
                    staticClass: "discount__value"
                }, [t._v(t._s(t.formattedDiscount)), t._l(t.countQuestions, function(e) {
                    return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                        staticClass: "discount__bubble discount__bubble_desktop"
                    }, [t._v(t._s("+" + t.getIncreasingDiscountStep))]) : t._e()
                })], 2), s("div", {
                    staticClass: "discount__symbol"
                }, [t._v(t._s(t.discountCurrencySymbol))]), s("DiscountArrow", {
                    staticClass: "discount__arrows",
                    class: {
                        "is-unexpanded": t.unexpanded
                    },
                    attrs: {
                        down: t.isMeltingDiscount
                    }
                })], 1)], 2)
            },
            zn = [],
            An = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows Arrows--simple",
                    class: {
                        "is-down": t.down
                    }
                }, [t._m(0), t._m(1)])
            },
            Sn = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows-parts"
                }, [s("div", {
                    staticClass: "Arrow Arrow--left"
                }), s("div", {
                    staticClass: "Arrow Arrow--right"
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "Arrows-parts"
                }, [s("div", {
                    staticClass: "Arrow Arrow--left"
                }), s("div", {
                    staticClass: "Arrow Arrow--right"
                })])
            }],
            In = {
                props: ["down"]
            },
            On = In,
            $n = (s("d847"), Object(Oe["a"])(On, An, Sn, !1, null, null, null)),
            Dn = $n.exports,
            Ln = {
                components: {
                    DiscountArrow: Dn
                },
                props: {
                    countQuestions: Number,
                    unexpanded: Boolean,
                    bubbleLeft: Boolean
                },
                data: function() {
                    return {
                        interval: null,
                        showBubble: !1
                    }
                },
                computed: Object(u["a"])({}, Object(o["c"])("quiz", ["formattedDiscount", "isMeltingDiscount", "getIncreasingDiscountStep", "discountCurrencySymbol", "questionNumber", "isIncreasingPercentDiscount"]), {
                    getDiscountIcon: function() {
                        return this.isIncreasingPercentDiscount ? "%" : this.discountCurrencySymbol
                    }
                }),
                watch: {
                    questionNumber: function(t, e) {
                        this.showBubble = t > e
                    }
                }
            },
            Rn = Ln,
            En = (s("b56b"), Object(Oe["a"])(Rn, qn, zn, !1, null, null, null)),
            Fn = En.exports,
            Tn = s("0089"),
            jn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "result-loader"
                }, [s("div", {
                    staticClass: "result-loader__loader"
                }, [s("SvgLoader"), s("div", {
                    staticClass: "result-loader__percent"
                }, [t._v(t._s(t.percent) + "%")])], 1), s("div", {
                    staticClass: "result-loader__text"
                }, [t._v("👌 " + t._s(t.$t("Подсчёт результатов")) + "...")])])
            },
            Pn = [],
            Mn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 212.477 189.295",
                        height: "170",
                        width: "170"
                    }
                }, [s("linearGradient", {
                    attrs: {
                        id: "gradient",
                        x1: "0.5",
                        x2: "0.5",
                        y2: "1",
                        gradientUnits: "objectBoundingBox"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "var(--color)"
                    }
                }), s("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "var(--color-darken10)"
                    }
                })], 1), s("filter", {
                    attrs: {
                        id: "innershadow",
                        x0: "-50%",
                        y0: "-50%",
                        width: "200%",
                        height: "200%"
                    }
                }, [s("feGaussianBlur", {
                    attrs: { in : "SourceAlpha", stdDeviation: "3", result: "blur"
                    }
                }), s("feOffset", {
                    attrs: {
                        dy: "2",
                        dx: "3"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "SourceAlpha",
                        operator: "arithmetic",
                        k2: "-1",
                        k3: "1",
                        result: "shadowDiff"
                    }
                }), s("feFlood", {
                    attrs: {
                        "flood-color": "#444444",
                        "flood-opacity": "0.15"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "shadowDiff",
                        operator: "in"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "SourceGraphic",
                        operator: "over",
                        result: "firstfilter"
                    }
                }), s("feGaussianBlur", {
                    attrs: { in : "firstfilter", stdDeviation: "3", result: "blur2"
                    }
                }), s("feOffset", {
                    attrs: {
                        dy: "-2",
                        dx: "-3"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "firstfilter",
                        operator: "arithmetic",
                        k2: "-1",
                        k3: "1",
                        result: "shadowDiff"
                    }
                }), s("feFlood", {
                    attrs: {
                        "flood-color": "#444444",
                        "flood-opacity": "0.15"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "shadowDiff",
                        operator: "in"
                    }
                }), s("feComposite", {
                    attrs: {
                        in2: "firstfilter",
                        operator: "over"
                    }
                })], 1), s("circle", {
                    staticClass: "circle",
                    attrs: {
                        cx: "100",
                        cy: "100",
                        r: "90",
                        stroke: "url(#gradient)",
                        filter: "url(#innershadow)",
                        "stroke-width": "17",
                        "fill-opacity": "0",
                        transform: "rotate(270 100 100)"
                    }
                }), s("div", {
                    staticClass: "subcircle"
                })], 1)
            },
            Qn = [],
            Bn = (s("3ebb"), {}),
            Vn = Object(Oe["a"])(Bn, Mn, Qn, !1, null, "5de68756", null),
            Nn = Vn.exports,
            Hn = {
                components: {
                    SvgLoader: Nn
                },
                mounted: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                        var e, s = this;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    e = setInterval(function() {
                                        s.percent < 100 ? s.percent += 1 : clearInterval(e)
                                    }, 20);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        percent: 0
                    }
                }
            },
            Un = Hn,
            Wn = (s("534a"), Object(Oe["a"])(Un, jn, Pn, !1, null, null, null)),
            Gn = Wn.exports,
            Jn = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "result",
                    class: {
                        result_has_image: t.hasImage
                    }
                }, [!t.result || t.result.type && "content" !== t.result.type ? t._e() : s("div", {
                    staticClass: "result__container"
                }, [t.hasImage ? s("div", {
                    staticClass: "result__image",
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }, [t.result.cost ? s("PriceLabel", {
                    staticClass: "result__cost result__cost_in-bg",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), s("div", {
                    staticClass: "result__bg"
                })], 1) : t._e(), s("div", {
                    staticClass: "result__content"
                }, [t.result.title ? s("h2", {
                    staticClass: "result__title"
                }, [t._v(t._s(t.result.title))]) : t._e(), t.result.cost && !t.hasImage ? s("PriceLabel", {
                    staticClass: "result__cost result__cost_in-text",
                    attrs: {
                        result: t.result
                    }
                }) : t._e(), t.result.text ? s("div", {
                    staticClass: "result__text",
                    domProps: {
                        innerHTML: t._s(t.$format.markdown(t.result.text))
                    }
                }) : t._e(), t.bonuses.length ? s("div", {
                    staticClass: "result__bonuses"
                }, ["afterForm" === t.results.view ? s("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.$t("Ваши бонусы")))]) : t._e(), "beforeForm" === t.results.view ? s("div", {
                    staticClass: "result__bonuses-title"
                }, [t._v(t._s(t.$t("Получите ваши бонусы далее")))]) : t._e(), s("Bonuses", {
                    attrs: {
                        direction: "row"
                    }
                })], 1) : t._e(), t.results.retry && ("beforeForm" === t.results.view || t.leadFormDisabled) ? s("button", {
                    staticClass: "button result__retry",
                    on: {
                        click: function(e) {
                            return t.$store.commit("quiz/startQuiz")
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "reload"
                    }
                }), t._v(t._s(t.$t("Пройти тест заново")))], 1) : t._e(), t.results.share ? s("Share", {
                    attrs: {
                        networks: t.shareNetworks,
                        url: t.shareUrl,
                        title: t.result.title,
                        description: t.result.text,
                        image: t.bgUrl
                    }
                }) : t._e()], 1), s("div", {
                    staticClass: "result__navpad-place"
                }, [s("div", {
                    staticClass: "result__whitelabel"
                }, [s("WhiteLabel")], 1)]), t.hasButton || t.selectedResult ? s("div", {
                    staticClass: "result__navpad",
                    class: {
                        result__navpad_align_left: t.selectedResult && !t.hasButton
                    }
                }, [t.selectedResult ? s("button", {
                    staticClass: "button is-outlined result__back-button",
                    on: {
                        click: t.back
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "arrow-left"
                    }
                })], 1) : t._e(), t.hasButton ? s("button", {
                    staticClass: "button is-primary has-shadow result__button",
                    on: {
                        click: t.action
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText))], 1) : t._e(), s("div", {
                    staticClass: "result__whitelabel"
                }, [s("WhiteLabel")], 1)]) : t._e()]), t.result && "redirect" === t.result.type ? s("div", {
                    staticClass: "result__container"
                }, [t.result.link ? s("div", [t._v(t._s(t.$t("Идёт переадресация на {-url}", {
                    url: t.result.link
                }))), s("span", {
                    staticClass: "u-points"
                })]) : t._e()]) : t._e()])
            },
            Kn = [],
            Yn = s("fb21"),
            Zn = {
                components: {
                    PriceLabel: Yn["a"],
                    Bonuses: ps["a"],
                    WhiteLabel: Tn["a"],
                    Share: function() {
                        return s.e("chunk-16ac490e").then(s.bind(null, "17a4"))
                    }
                },
                data: function() {
                    return {
                        shareNetworks: [{
                            name: "vk",
                            desc: this.$t("ВКонтакте")
                        }, {
                            name: "telegram",
                            desc: "Telegram"
                        }, {
                            name: "facebook",
                            desc: "Facebook"
                        }]
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["results", "selectedResult", "leadFormDisabled", "domain"]), Object(o["d"])("form", ["contacts"]), Object(o["d"])("quiz", {
                    bonuses: function(t) {
                        return Q()(t, "info.marketing.bonuses", [])
                    }
                }), Object(o["c"])("quiz", ["result"]), {
                    bgUrl: function() {
                        return this.result.image ? this.$image.url(this.result.image, {
                            width: 750
                        }) : null
                    },
                    shareUrl: function() {
                        return this.domain || this.$route.query.href
                    },
                    hasButton: function() {
                        return "beforeForm" === this.results.view || "afterForm" === this.results.view && !!this.result.link
                    },
                    hasImage: function() {
                        return !A()(this.result.image)
                    },
                    buttonText: function() {
                        return this.result.buttonText ? this.result.buttonText : this.$t("Узнать подробнее")
                    }
                }),
                methods: {
                    action: function() {
                        "beforeForm" === this.results.view && this.$store.dispatch("quiz/showLeadForm"), "afterForm" === this.results.view && this.redirect()
                    },
                    redirect: function() {
                        this.result.link && this.$redirect(this.result.link, {
                            contacts: this.contacts,
                            result: this.result
                        })
                    },
                    back: function() {
                        this.$store.commit("quiz/selectResult", null), this.$store.commit("quiz/showResults")
                    }
                }
            },
            Xn = Zn,
            ti = (s("8eb6"), Object(Oe["a"])(Xn, Jn, Kn, !1, null, null, null)),
            ei = ti.exports,
            si = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "sidebar-mobile",
                    class: {
                        "is-expanded": t.expandedDiscount || t.expandedBonuses
                    }
                }, [t.discount ? s("div", {
                    staticClass: "sidebar-mobile__discount",
                    class: t.isExpandedDiscount,
                    on: {
                        click: function(e) {
                            t.expandedDiscount = !0
                        }
                    }
                }, [s("div", {
                    staticClass: "sidebar-mobile__discount-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedDiscount = !1
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), s("Discount", {
                    staticClass: "sidebar-mobile__discount-component",
                    attrs: {
                        unexpanded: !t.expandedDiscount,
                        countQuestions: t.countQuestions
                    }
                })], 1) : t._e(), t.bonuses.length ? s("div", {
                    staticClass: "sidebar-mobile__bonuses",
                    class: t.isExpandedBonuses
                }, [s("div", {
                    staticClass: "sidebar-mobile__bonuses-close",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.expandedBonuses = !1
                        }
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close-circle"
                    }
                })], 1), s("div", {
                    staticClass: "sidebar-mobile__bonuses-block",
                    on: {
                        click: function(e) {
                            t.expandedBonuses = !0
                        }
                    }
                }, [s("div", {
                    staticClass: "sidebar-mobile__bonuses-title",
                    class: t.isExpandedBonuses
                }, [s("b-icon", {
                    staticClass: "sidebar-mobile__bonuses-icon",
                    class: t.isExpandedBonuses,
                    attrs: {
                        icon: "gift",
                        "custom-size": "mdi-18px"
                    }
                }), s("div", {
                    staticClass: "sidebar-mobile__bonuses-text"
                }, [t._v(t._s(t.$t("Ваши бонусы")) + ":")])], 1), t.expandedBonuses ? s("div", {
                    staticClass: "sidebar-mobile__bonuses-list",
                    class: t.isExpandedBonuses
                }, [s("Bonuses", {
                    attrs: {
                        direction: "column",
                        height: 64
                    }
                })], 1) : t._e()])]) : t._e()])
            },
            ni = [],
            ii = {
                name: "MobileSidebar",
                components: {
                    Bonuses: ps["a"],
                    Discount: Fn
                },
                props: {
                    bonuses: Array,
                    countQuestions: Number,
                    discount: [Number, String],
                    autoshow: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        expandedDiscount: !1,
                        expandedBonuses: !1
                    }
                },
                computed: {
                    isExpandedDiscount: function() {
                        return {
                            "is-expanded": this.expandedDiscount
                        }
                    },
                    isExpandedBonuses: function() {
                        return {
                            "is-expanded": this.expandedBonuses
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.autoshow && (this.expandedDiscount = !0, this.expandedBonuses = !0, setTimeout(function() {
                        t.expandedDiscount = !1
                    }, 2e3), setTimeout(function() {
                        t.expandedBonuses = !1
                    }, 3500))
                }
            },
            ai = ii,
            oi = (s("ba97"), Object(Oe["a"])(ai, si, ni, !1, null, "da615d68", null)),
            ri = oi.exports,
            ci = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "quiz-buttons"
                }, [s("ProgressBar", {
                    staticClass: "quiz-buttons__progress",
                    attrs: {
                        percent: Math.round(t.passedPercent)
                    }
                }), s("ProgressBar", {
                    staticClass: "quiz-buttons__progress-mobile",
                    attrs: {
                        percent: Math.round(t.passedPercent),
                        mobile: ""
                    }
                }), t.whiteLabel ? s("WhiteLabel", {
                    staticClass: "quiz-buttons__whitelabel"
                }) : t._e(), s("button", {
                    staticClass: "button is-link quiz-buttons__button quiz-buttons__button_prev",
                    attrs: {
                        disabled: 0 === t.activeQuestion
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("previous")
                        }
                    }
                }, [s("div", {
                    staticClass: "quiz-buttons__arrow"
                }, [s("Arrow", {
                    attrs: {
                        back: ""
                    }
                })], 1), s("span", {
                    staticClass: "quiz-buttons__button_prev_text"
                })]), t.isLast ? t._e() : s("button", {
                    staticClass: "button quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("next")
                        }
                    }
                }, [s("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))]), s("div", {
                    staticClass: "quiz-buttons__next-icon"
                }, [s("Arrow", {
                    attrs: {
                        color: "#fff"
                    }
                })], 1)]), t.isLast ? s("button", {
                    staticClass: "button button_color_theme quiz-buttons__button quiz-buttons__button_next",
                    class: {
                        "is-blicked": t.filled
                    },
                    attrs: {
                        disabled: !t.filled && !t.notRequired
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("show-lead")
                        }
                    }
                }, [s("span", {
                    staticClass: "is-hidden-mobile"
                }, [t._v(t._s(t.$t("Последний шаг")))]), s("span", {
                    staticClass: "is-hidden-tablet"
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), s("span", {
                    staticClass: "quiz-buttons__button_next-text"
                }, [t._v(t._s(t.$t("Далее")))])], 1)]) : t._e()], 1)
            },
            ui = [],
            li = s("b6b4"),
            di = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    class: {
                        "is-back": t.back
                    },
                    staticStyle: {
                        "enable-background": "new 0 0 31.49 31.49"
                    },
                    attrs: {
                        fill: t.color,
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 31.49 31.49",
                        "xml:space": "preserve"
                    }
                }, [s("path", {
                    attrs: {
                        d: "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.05A1A98A3B"
                    }
                })])
            },
            hi = [],
            fi = {
                name: "Arrow",
                props: {
                    back: Boolean,
                    color: {
                        type: String,
                        default: "#4a505e"
                    }
                }
            },
            mi = fi,
            pi = (s("6299"), Object(Oe["a"])(mi, di, hi, !1, null, "f63d6478", null)),
            gi = pi.exports,
            vi = {
                name: "QuizButtons",
                props: {
                    passedPercent: Number,
                    activeQuestion: Number,
                    isLast: Boolean,
                    filled: Boolean,
                    notRequired: Boolean,
                    whiteLabel: Boolean
                },
                components: {
                    ProgressBar: li["a"],
                    Arrow: gi,
                    WhiteLabel: Tn["a"]
                }
            },
            bi = vi,
            _i = (s("8e33"), Object(Oe["a"])(bi, ci, ui, !1, null, null, null)),
            wi = _i.exports,
            yi = {
                components: {
                    ResultLoader: Gn,
                    FinalPage: function() {
                        return s.e("final-page").then(s.bind(null, "f125"))
                    },
                    FinalPageV2: function() {
                        return s.e("final-page").then(s.bind(null, "c252"))
                    },
                    QuizButtons: wi,
                    Assistant: os,
                    AssistantMobile: ms,
                    Discount: Fn,
                    Question: Cn,
                    Bonuses: ps["a"],
                    WhiteLabel: Tn["a"],
                    SidebarMobile: ri,
                    Results: function() {
                        return s.e("swiper").then(s.bind(null, "8169"))
                    },
                    Result: ei
                },
                mounted: function() {
                    this.$refs.quiz && this.changeHeight()
                },
                data: function() {
                    return {
                        animationType: "forward",
                        frameHeight: null,
                        heightAfterShowAssistant: null,
                        heightBeforeShowAssistant: null,
                        slideDuration: .4
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["questions", "activeQuestion", "info", "leadForm", "id", "isResultsShow", "isResultShow", "isResultLoaderShow", "hint"]), Object(o["c"])("quiz", ["countAllQuestions", "getPassedPercent", "getAnswerValue", "getIsFilled", "getLastStep", "getQuestion", "isLastStep", "isWhiteLabelActive", "result"]), {
                    discount: function() {
                        return Q()(this.info, "marketing.discount.value") || Q()(this.info, "marketing.discount.percent")
                    },
                    showRightSidebar: function() {
                        return this.discount || this.getQuestion && this.getQuestion.text || this.bonuses.length
                    },
                    bonuses: function() {
                        return Q()(this.info, "marketing.bonuses", [])
                    },
                    getNotRequired: function() {
                        return Q()(this.getQuestion, "notRequired", !1)
                    },
                    getCanMany: function() {
                        var t = ["variants", "images", "select", "file"];
                        return "many" === Q()(this.getQuestion, "select") && ge()(t, Q()(this.getQuestion, "type"))
                    },
                    questionType: function() {
                        return Q()(this.getQuestion, "type")
                    }
                }),
                methods: Object(u["a"])({
                    get: Q.a,
                    isEmpty: A.a
                }, Object(o["b"])("quiz", ["prevQuestion", "nextQuestion", "showLeadForm"]), {
                    beforeLeave: function(t) {
                        t.style.opacity = 1
                    },
                    leave: function(t) {
                        t.style.transition = "all ".concat(this.slideDuration / 2, "s ease"), t.style.transform = "back" === this.animationType ? "translateX(10%)" : "translateX(-10%)", t.style.opacity = 0
                    },
                    beforeEnter: function(t) {
                        t.style.transform = "translateX(0)"
                    },
                    enter: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            t.style.transform = "back" === e.animationType ? "translateX(-10%)" : "translateX(10%)", t.style.opacity = 0
                        })
                    },
                    afterEnter: function(t) {
                        t.style.transition = "all ".concat(this.slideDuration / 2, "s ease"), t.style.transform = "translateX(0)", t.style.opacity = 1, this.changeHeight()
                    },
                    changeHeight: function() {
                        var t = this;
                        this.$nextTick(function() {
                            var e, s = t.$refs.quiz.clientHeight;
                            if ("images" === t.questionType) {
                                var n = Q()(t.$refs, "question.0.$el");
                                if (!n) return;
                                e = s - n.clientHeight + n.scrollHeight + 15, e > 650 && (e = 650), e < s && (e = s), e && t.$quizFrame.changeHeight(t.id, e)
                            }
                        })
                    }
                }),
                watch: {
                    activeQuestion: function(t, e) {
                        this.animationType = t < e ? "back" : "forward"
                    }
                }
            },
            ki = yi,
            xi = (s("9eb9"), Object(Oe["a"])(ki, Ue, We, !1, null, null, null)),
            Ci = xi.exports,
            qi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "install"
                }, [t.quizId && !t.edit ? s("div", {
                    staticClass: "install__edit"
                }, [s("div", [t._v(t._s(t.$t('К этой группе привязан квиз "{title}"', {
                    title: t.quizTitle
                })))]), s("div", [s("a", {
                    staticClass: "button is-text",
                    attrs: {
                        href: "../https@panel.marquiz.ru/quizzes/edit/" + t.quizId,
                        target: "_blank"
                    }
                }, [s("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Редактировать квиз")))]), s("button", {
                    staticClass: "button is-text",
                    on: {
                        click: function(e) {
                            t.edit = !0
                        }
                    }
                }, [s("i", {
                    staticClass: "icon-pencil"
                }), t._v(t._s(t.$t("Привязать другой квиз")))])])]) : t._e(), !t.quizId || t.edit ? [s("p", [t._v(t._s(t.$t('Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"')))]), s("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.setGroup(e)
                        }
                    }
                }, [s("section", {
                    staticClass: "mb-1"
                }, [s("b-field", {
                    attrs: {
                        label: t.$t("Введите id квиза")
                    }
                }), s("b-input", {
                    ref: "quizId",
                    attrs: {
                        placeholder: "5aa7c2bb23fc0f00e7b75a49"
                    },
                    model: {
                        value: t.id,
                        callback: function(e) {
                            t.id = "string" === typeof e ? e.trim() : e
                        },
                        expression: "id"
                    }
                })], 1), s("button", {
                    staticClass: "install__attach-btn button is-danger",
                    attrs: {
                        type: "submit",
                        disabled: !t.id
                    }
                }, [t._v(t._s(t.$t("Привязать")))])])] : t._e()], 2)
            },
            zi = [],
            Ai = {
                mounted: function() {
                    this.$refs.quizId && Q()(this.$refs, "quizId.$refs.input") && this.$focusInput(this.$refs.quizId.$refs.input)
                },
                props: {
                    quizId: String,
                    request: Object,
                    quizTitle: String
                },
                data: function() {
                    return {
                        id: null,
                        edit: !1
                    }
                },
                methods: {
                    setGroup: function() {
                        var t = this;
                        this.$axios.post("v1/vkGroups/setGroup", {
                            request: this.request,
                            quizId: this.id
                        }).then(function() {
                            t.$emit("changed")
                        }).catch(function(e) {
                            t.$toast.open({
                                message: e.message,
                                type: "is-danger"
                            })
                        })
                    }
                },
                watch: {
                    edit: function(t) {
                        var e = this;
                        t && (this.id = this.quizId, this.$nextTick(function() {
                            e.$focusInput(e.$refs.quizId.$refs.input)
                        }))
                    }
                }
            },
            Si = Ai,
            Ii = Object(Oe["a"])(Si, qi, zi, !1, null, null, null),
            Oi = Ii.exports,
            $i = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Di = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "welcome"
                }, [s("div", {
                    staticClass: "hero is-fullheight"
                }, [s("div", {
                    staticClass: "hero-body"
                }, [s("div", {
                    staticClass: "columns"
                }, [s("div", {
                    staticClass: "welcome__info column is-6"
                }, [s("div", [s("h1", {
                    staticClass: "title"
                }, [t._v("Marquiz - конструктор маркетинговых квизов")]), s("h2", {
                    staticClass: "subtitle"
                }, [t._v("Получайте в разы больше заявок")]), s("div", {
                    staticClass: "welcome__text"
                }, [s("p", [t._v("Квиз - это виджет опроса, который задаёт вопросы посетителю, а в конце предлагает оставить контакты.")]), s("p", [t._v("Задавая нужные вопросы, он помогает определиться с выбором человеку. Поэтому квиз работает на более холодную аудиторию, за счёт чего вы получаете в разы больше заявок")])]), s("div", {
                    staticClass: "welcome__buttons"
                }, [s("a", {
                    staticClass: "button is-primary",
                    attrs: {
                        href: "../https@panel.marquiz.ru/signup",
                        target: "_blank"
                    }
                }, [t._v("Создать квиз")]), s("a", {
                    staticClass: "button",
                    attrs: {
                        href: "../https@www.marquiz.ru/#section-steps",
                        target: "_blank"
                    }
                }, [t._v("Подробнее")])])])]), s("div", {
                    staticClass: "welcome__image column"
                }, [s("img", {
                    attrs: {
                        src: "static/perspective.png"
                    }
                })])])])])])
            }],
            Li = (s("4a1b"), {}),
            Ri = Object(Oe["a"])(Li, $i, Di, !1, null, null, null),
            Ei = Ri.exports,
            Fi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "start-page columns is-desktop-modal",
                    class: t.classes
                }, [t.bgUrl ? s("div", {
                    staticClass: "start-page__bg column is-7",
                    style: {
                        backgroundImage: "url(" + t.bgUrl + ")"
                    }
                }, [t._v(" ")]) : t._e(), s("div", {
                    staticClass: "start-page__content column",
                    class: {
                        "is-5": !!t.bgUrl
                    }
                }, ["landing" === t.mode && (t.logo && t.logo.url || t.name) ? s("div", {
                    staticClass: "start-page__top"
                }, [t.logo && t.logo.url ? s("img", {
                    staticClass: "start-page__logo",
                    attrs: {
                        src: t.$image.url(t.logo, {
                            height: "37"
                        })
                    }
                }) : t._e(), t.name ? s("div", {
                    staticClass: "start-page__name"
                }, [t._v(t._s(t.name))]) : t._e()]) : t._e(), s("div", {
                    staticClass: "start-page__body"
                }, [t.logo && t.logo.url ? t._e() : s("div", {
                    staticClass: "start-page__line"
                }), s("h1", {
                    staticClass: "start-page__header"
                }, [t._v(t._s(t.title))]), s("h2", {
                    staticClass: "start-page__subheader"
                }, [t._v(t._s(t.subtitle))]), s("button", {
                    staticClass: "start-page__button button is-primary is-blicked has-light-shadow",
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), t._v(" \n" + t._s(t.buttonText || t.$t("Пройти тест")))], 1), t.bonuses.length ? s("div", {
                    staticClass: "start-page__bonuses"
                }, [s("div", {
                    staticClass: "start-page__bonuses-title"
                }, [t._v(t._s(t.$t("Бонусы после прохождения теста")))]), s("Bonuses", {
                    attrs: {
                        direction: "row",
                        height: 64
                    }
                })], 1) : t._e()]), s("div", {
                    staticClass: "start-page__footer"
                }, ["landing" === t.mode && (t.phone || t.legal) ? s("div", {
                    staticClass: "start-page__contact"
                }, [t.phone ? s("div", {
                    staticClass: "start-page__phone"
                }, [t._v(t._s(t.phone))]) : t._e(), t.legal ? s("div", {
                    staticClass: "start-page__legal"
                }, [t._v(t._s(t.legal))]) : t._e()]) : t._e(), t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                    staticClass: "start-page__white-label"
                })], 1)]), s("div", {
                    staticClass: "start-page__layer"
                })])
            },
            Ti = [],
            ji = s("7bae"),
            Pi = s.n(ji),
            Mi = {
                components: {
                    WhiteLabel: Tn["a"],
                    Bonuses: ps["a"]
                },
                data: function() {
                    return {
                        icons: {
                            check: Pi.a
                        },
                        closing: !1
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", {
                    bonuses: function(t) {
                        return Q()(t, "info.marketing.bonuses", [])
                    },
                    title: function(t) {
                        return Q()(t, "info.startPage.title")
                    },
                    subtitle: function(t) {
                        return Q()(t, "info.startPage.subtitle")
                    },
                    buttonText: function(t) {
                        return Q()(t, "info.startPage.buttonText")
                    },
                    mode: function(t) {
                        return Q()(t, "info.startPage.mode", "start")
                    },
                    name: function(t) {
                        return Q()(t, "info.startPage.name")
                    },
                    phone: function(t) {
                        return Q()(t, "info.startPage.phone")
                    },
                    legal: function(t) {
                        return Q()(t, "info.startPage.legal")
                    },
                    bg: function(t) {
                        return Q()(t, "info.startPage.bg", {})
                    },
                    logo: function(t) {
                        return Q()(t, "info.startPage.logo", {})
                    }
                }), Object(o["c"])("quiz", ["isWhiteLabelActive"]), {
                    bgUrl: function() {
                        if (!this.bg.url) return null;
                        var t = {
                            cloud_name: "hgwipn3sa",
                            secure: "https:" === window.location.protocol,
                            dpr: ne()() ? "2.0" : "1.0",
                            fetch_format: "auto",
                            source: "upload"
                        };
                        return window.innerHeight <= 650 && window.innerWidth >= 768 && (t.height = 650), window.innerWidth < 768 && (t.width = 767), ee()(this.bg.name, t)
                    },
                    classes: function() {
                        var t = {
                            "start-page_closing": this.closing,
                            "start-page_has_bg": !!this.bgUrl
                        };
                        return t["start-page_mode_".concat(this.mode)] = !0, t
                    }
                }),
                methods: {
                    close: function() {
                        var t = this;
                        this.closing = !0, setTimeout(function() {
                            t.$store.commit("quiz/startQuiz"), t.$store.dispatch("quiz/analyticEvent", "marquiz-startquiz")
                        }, 1e3)
                    }
                }
            },
            Qi = Mi,
            Bi = (s("5f78"), Object(Oe["a"])(Qi, Fi, Ti, !1, null, null, null)),
            Vi = Bi.exports,
            Ni = {
                render: function() {
                    return ""
                },
                mounted: function() {
                    var t = this;
                    window.addEventListener("message", function(e) {
                        t.$store.commit("quiz/resetState"), t.$nextTick(function() {
                            t.commit(e.data)
                        })
                    })
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["questions", "results"]), Object(o["c"])("quiz", ["resultsPosition", "isMultipleResults"])),
                methods: {
                    commit: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.$store.commit("quiz/resetState"), this.$store.commit("form/resetState"), t.quiz && this.$store.dispatch("quiz/get", {
                            quiz: t.quiz
                        });
                        var e = t.page;
                        if (e) switch (e) {
                            case "leadform":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/hideMessengers"), t.formStep && (1 === t.formStep && this.$store.commit("form/showStep1"), 2 === t.formStep && this.$store.commit("form/showStep2"));
                                break;
                            case "messengers":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showMessengers");
                                break;
                            case "start_page":
                                this.$store.commit("quiz/showStartPage");
                                break;
                            case "questions":
                                this.$store.commit("quiz/startQuiz"), t.questionId && this.$store.commit("quiz/setActiveQuestion", V()(this.questions, {
                                    id: t.questionId
                                }));
                                break;
                            case "results":
                                if (!this.resultsPosition) break;
                                if (t.resultId) {
                                    this.$store.commit("quiz/showResult", I()(this.results.items, {
                                        id: t.resultId
                                    }));
                                    break
                                }
                                this.isMultipleResults ? this.$store.commit("quiz/showResults") : this.$store.commit("quiz/showResult");
                                break;
                            case "thanks":
                                this.$store.dispatch("quiz/showLeadForm"), this.$store.commit("form/showThankPage");
                                break;
                            default:
                                break
                        }
                    }
                }
            },
            Hi = Ni,
            Ui = Object(Oe["a"])(Hi, he, fe, !1, null, null, null),
            Wi = Ui.exports,
            Gi = {
                components: {
                    Layout: He,
                    Quiz: Ci,
                    Install: Oi,
                    Welcome: Ei,
                    StartPage: Vi,
                    PreviewController: Wi
                },
                beforeMount: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (window.document.title = "".concat(this.$t("Загрузка"), "..."), "agreement" !== this.$route.path) {
                                        t.next = 4;
                                        break
                                    }
                                    return this.isLoading = !1, t.abrupt("return");
                                case 4:
                                    if (e = window.location.hostname, this.setDomain(e), !this.showWelcomePage()) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return t.next = 10, this.load();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                data: function() {
                    return {
                        isLoading: !0,
                        notFound: !1,
                        loadingError: !1,
                        isEditMode: !1,
                        groupId: this.$route.query.group_id,
                        quizId: this.$route.params.id,
                        request: this.$route.query,
                        isModal: !!Q()(this.$route, "query.isModal", !0),
                        isShowWelcomePage: !1,
                        domain: null
                    }
                },
                computed: Object(u["a"])({}, Object(o["d"])("quiz", ["quizStarted", "loaded", "info", "id", "settings", "mode"]), Object(o["c"])("quiz", ["colors"]), {
                    isVkGroupAdmin: function() {
                        return this.groupId && "4" === this.$route.query.viewer_type
                    },
                    styles: function() {
                        return {
                            "--color": this.colors.main,
                            "--color-lighten": this.colors.lighten,
                            "--color-lighten10": this.colors.lighten10,
                            "--color-lighten2": this.colors.lighten2,
                            "--color-darken": this.colors.darken,
                            "--color-darken10": this.colors.darken10,
                            "--color-alpha": this.colors.alpha,
                            "--color-alpha2": this.colors.alpha2,
                            "--color-text": this.colors.text,
                            "--color-text2": this.colors.text2,
                            "--gradient-main": this.colors.gradientMain
                        }
                    }
                }),
                methods: {
                    load: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                            var e = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.$store.dispatch("quiz/get", {
                                            id: this.quizId,
                                            groupId: this.groupId,
                                            domain: this.domain
                                        }).then(function() {
                                            e.isLoading = !1;
                                            var t = Q()(e.info, "startPage.pageTitle") || Q()(e.info, "startPage.title") || Q()(e.info, "title"),
                                                s = Q()(e.info, "startPage.favicon");
                                            s && s.secureUrl ? e.setFavicon(s.secureUrl) : e.setFavicon("static/favicon.png"), window.document.title = t || "Marquiz"
                                        }).catch(function(t) {
                                            window.document.title = "Marquiz", e.isLoading = !1, e.groupId ? e.isShowWelcomePage = !0 : t.response && 404 === t.response.status ? e.notFound = !0 : e.loadingError = !0
                                        }), this.initSession(this.quizId);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    initSession: function(t) {
                        var e = Me["a"].get("answerId");
                        1 === this.$route.query.test && (e = null), Me["a"].init(t), this.$store.commit("form/setSession", {
                            answerId: e,
                            uuid: Me["a"].get("uuid")
                        })
                    },
                    closeAndReload: function() {
                        var t = Object(c["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.isEditMode = !1, this.quizId = null, t.next = 4, this.load();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    showWelcomePage: function() {
                        return !this.quizId && (!this.groupId && (!this.domain && (!("default.htm" !== this.$route.path && (!this.$route.query.viewer_id || this.groupId)) && (this.isShowWelcomePage = !0, window.document.title = "Marquiz", !0))))
                    },
                    setFavicon: function(t) {
                        var e = document.querySelector("link[rel*='icon']") || document.createElement("link");
                        e.type = "image/x-icon", e.rel = "shortcut icon", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
                    },
                    setDomain: function(t) {
                        !this.quizId && !this.groupId && P()(["quiz.marquiz.ru", "mrqz.me", "localhost"], t) < 0 && (this.domain = Pe()(t))
                    }
                },
                watch: {
                    loaded: function(t) {
                        t && this.$quizFrame.postMessage({
                            id: this.quizId,
                            action: "loaded"
                        })
                    }
                },
                name: "app"
            },
            Ji = Gi,
            Ki = (s("7faf"), Object(Oe["a"])(Ji, Fe, Te, !1, null, null, null)),
            Yi = Ki.exports,
            Zi = s("8c4f"),
            Xi = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "agreement"
                }, [s("div", {
                    staticClass: "agreement__close",
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "close"
                    }
                })], 1), s("div", {
                    staticClass: "agreement__title"
                }, [t._v(t._s(t.$t("Пользовательское соглашение")))]), s("div", {
                    staticClass: "agreement__text"
                }, [s("p", [t._v(t._s(t.$t("Я, субъект персональных данных, в соответствии с Федеральным законом от 27 июля 2006 года № 152 «О персональных данных» предоставляю согласие на обработку персональных данных, указанных мной в форме на сайте в сети «Интернет», владельцем которого является Оператор.")))]), s("p", [t._v(t._s(t.$t("Под персональными данными субъекта персональных данных понимается нижеуказанная общая информация: ФИО, адрес электронной почты и номер телефона, контакт социальной сети или мессенджера.")))]), s("p", [t._v(t._s(t.$t("Принимая настоящее Соглашение, я выражаю свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, осуществляемых как с использованием средств автоматизации (автоматизированная обработка), так и без использования таких средств (неавтоматизированная обработка).")))]), s("p", [t._v(t._s(t.$t("Я понимаю и соглашаюсь с тем, что предоставленная информация, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена мною в отношении себя лично; информация не относится к государственной, банковской и/или коммерческой тайне, информация не относится к информации о расовой и/или национальной принадлежности, политических взглядах, религиозных или философских убеждениях, не относится к информации о состоянии здоровья и интимной жизни.")))]), s("p", [t._v(t._s(t.$t("Я понимаю и соглашаюсь с тем, что Оператор не проверяет достоверность персональных данных, предоставляемых мной, и не имеет возможности оценивать мою дееспособность и исходит из того, что я предоставляю достоверные персональные данные и поддерживаю такие данные в актуальном состоянии.")))]), s("p", [t._v(t._s(t.$t("Я подтверждаю, что не являюсь резидентом стран ЕС.")))]), s("p", [t._v(t._s(t.$t("Согласие действует по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.")))]), s("p", [t._v(t._s(t.$t("Согласие может быть отозвано мною в любое время на основании моего письменного заявления.")))])]), s("button", {
                    staticClass: "agreement__button button button_color_theme is-medium button_rounded",
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: t.close
                    }
                }, [s("b-icon", {
                    attrs: {
                        icon: "checkbox-marked-circle-outline"
                    }
                }), s("span", [t._v(t._s(t.$t("Закрыть")))])], 1)])
            },
            ta = [],
            ea = {
                methods: {
                    close: function() {
                        window.close()
                    }
                }
            },
            sa = ea,
            na = (s("de74"), Object(Oe["a"])(sa, Xi, ta, !1, null, null, null)),
            ia = na.exports;
        n["default"].use(Zi["a"]);
        var aa = new Zi["a"]({
            mode: "history",
            routes: [{
                path: "/default/:id",
                name: "Default",
                component: Ci
            }, {
                path: "agreement",
                name: "Agreement",
                component: ia
            }, {
                path: "/:id",
                name: "ID",
                component: Ci
            }]
        });
        qe();
        var oa = G.a.parse(window.location.search);
        n["default"].use(a.a, {
            defaultIconComponent: Le["a"]
        }), n["default"].use(Pt), n["default"].use(Ee.a), n["default"].use(Mt), n["default"].use(Yt), n["default"].use(ie), n["default"].use(ue), n["default"].use(me, {
            disabled: "preview" === oa.mode
        }), n["default"].use(Kt, {}), n["default"].use(Xt, {
            translations: Ce.a,
            lang: $t.state.lang
        }), n["default"].use(ke, {
            dummy: "preview" === oa.mode
        }), n["default"].component("SvgIcon", De), n["default"].config.productionTip = !1, oa.debug || Lt.a.config("https://sentry.io/305073").addPlugin(Et.a, n["default"]).install(), new n["default"]({
            router: aa,
            store: $t,
            render: function(t) {
                return t(Yi)
            }
        }).$mount("#app")
    },
    "57d9": function(t, e, s) {},
    5967: function(t, e, s) {
        "use strict";
        var n = s("9a81"),
            i = s.n(n);
        i.a
    },
    "5ad8": function(t, e, s) {
        "use strict";
        var n = s("5fd8"),
            i = s.n(n);
        i.a
    },
    "5f64": function(t, e, s) {},
    "5f78": function(t, e, s) {
        "use strict";
        var n = s("45d5"),
            i = s.n(n);
        i.a
    },
    "5fd8": function(t, e, s) {},
    6299: function(t, e, s) {
        "use strict";
        var n = s("f809"),
            i = s.n(n);
        i.a
    },
    6345: function(t, e, s) {},
    "64ea": function(t, e, s) {
        "use strict";
        var n = s("4eee"),
            i = s.n(n);
        i.a
    },
    "65a0": function(t, e, s) {},
    "65ee": function(t, e, s) {},
    6617: function(t, e, s) {},
    6629: function(t, e, s) {
        "use strict";
        var n = s("65ee"),
            i = s.n(n);
        i.a
    },
    6711: function(t, e, s) {},
    "71ac": function(t, e, s) {},
    "72fa": function(t, e, s) {},
    7452: function(t, e, s) {},
    "7bae": function(t, e, s) {
        t.exports = s.p + "img/check.7c08bf55.svg"
    },
    "7faf": function(t, e, s) {
        "use strict";
        var n = s("8fba"),
            i = s.n(n);
        i.a
    },
    "83b4": function(t, e, s) {
        "use strict";
        var n = s("ba5a"),
            i = s.n(n);
        i.a
    },
    "86a7": function(t, e, s) {
        "use strict";
        var n = s("65a0"),
            i = s.n(n);
        i.a
    },
    "895a": function(t, e, s) {
        "use strict";
        var n = s("6711"),
            i = s.n(n);
        i.a
    },
    "896a": function(t, e, s) {
        t.exports = s.p + "img/arrow-down.9ca25267.svg"
    },
    "8b38": function(t, e, s) {
        "use strict";
        var n = s("9b68"),
            i = s.n(n);
        i.a
    },
    "8e33": function(t, e, s) {
        "use strict";
        var n = s("c481"),
            i = s.n(n);
        i.a
    },
    "8ea7": function(t, e, s) {},
    "8eb6": function(t, e, s) {
        "use strict";
        var n = s("8ea7"),
            i = s.n(n);
        i.a
    },
    "8fba": function(t, e, s) {},
    "98f9": function(t, e, s) {},
    "9a81": function(t, e, s) {},
    "9b68": function(t, e, s) {},
    "9eb9": function(t, e, s) {
        "use strict";
        var n = s("ccaf"),
            i = s.n(n);
        i.a
    },
    a335: function(t, e, s) {},
    aa5f: function(t, e, s) {},
    afb2: function(t, e, s) {},
    b56b: function(t, e, s) {
        "use strict";
        var n = s("6345"),
            i = s.n(n);
        i.a
    },
    b6b4: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "progress-bar",
                    class: {
                        "progress-bar_mobile": t.mobile
                    }
                }, [t.finish ? t._e() : s("div", {
                    staticClass: "progress-bar__label",
                    class: {
                        "is-finish": t.finish
                    }
                }, [t._v(t._s(t.$t("Готово")) + ":"), s("span", [t._v(t._s(t.percent) + "%")])]), s("div", {
                    staticClass: "progress-bar__field"
                }, [s("span", {
                    style: "width: " + t.percent + "%"
                }), t.finish ? s("div", {
                    staticClass: "progress-bar__field-mark"
                }) : t._e(), t.finish ? s("p", {
                    staticClass: "progress-bar__field-label"
                }, [t._v("95%")]) : t._e()])])
            },
            i = [],
            a = (s("c5f6"), {
                name: "ProgressBar",
                props: {
                    percent: Number,
                    finish: Boolean,
                    mobile: Boolean
                }
            }),
            o = a,
            r = (s("e720"), s("2877")),
            c = Object(r["a"])(o, n, i, !1, null, null, null);
        e["a"] = c.exports
    },
    b9a3: function(t, e, s) {},
    ba5a: function(t, e, s) {},
    ba97: function(t, e, s) {
        "use strict";
        var n = s("fe34"),
            i = s.n(n);
        i.a
    },
    bf0f: function(t, e) {
        t.exports = {
            be: {
                translation: {
                    "Ваша скидка": "Ваша зніжка",
                    "Отлично. Последний шаг!": "Выдатна. Апошні крок!",
                    "Итоговая скидка": "Выніковая зніжка",
                    "Дополнительно": "Дадаткова",
                    "Получить результаты": "Атрымаць вынікі",
                    "Спасибо": "Дзякуй",
                    "Готово": "Зроблена",
                    "Назад": "Назад",
                    "Далее": "Далей",
                    "Последний шаг": "Апошні крок",
                    "Сделано с помощью": "Зроблена з дапамогай",
                    Email: "Email",
                    "Имя": "Імя",
                    "Телефон": "Тэлефон",
                    "За каждый ответ": "За кожны адказ",
                    "Скидка": "Зніжка",
                    "Другое": "Іншае",
                    "Выберите вариант ответа слева": "Выберыце варыянт адказу злева",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Падаючы вашы кантактныя дадзеныя, вы згаджаецеся на апрацоўку персанальнай інфармацыі ў адпаведнасці з",
                    "пользовательским соглашением": "карыстацкай дамовай",
                    "Выберите вариант ответа снизу": "Выберыце варыянт адказу знізу",
                    "От": "Ад",
                    "До": "Да",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Студзень",
                    "Февраль": "Лютага",
                    "Март": "Сакавік",
                    "Апрель": "Красавік",
                    "Май": "Май",
                    "Июнь": "Чэрвень",
                    "Июль": "Ліпеня",
                    "Август": "Жнівень",
                    "Сентябрь": "Верасень",
                    "Октябрь": "Кастрычніка",
                    "Ноябрь": "Лістапада",
                    "Декабрь": "Снежні",
                    "У меня нет email": "У мяне няма email",
                    "Введите имя": "Калі ласка, увядзіце імя",
                    "Введите телефон": "увядзіце тэлефон",
                    "Введите email": "Калі ласка, увядзіце email",
                    "mail_40mail.ru": "mail_40mail.by",
                    "Игорь": "Ігар",
                    "+7 (900) 000-00-00": "+375 (11) 111-11-11",
                    "Сейчас": "Зараз",
                    "Сброс": "Скід",
                    "Действует еще": "Дзейнічае яшчэ",
                    "Каталог в подарок": "Каталог у падарунак",
                    "Прайс-лист": "Прайс ліст",
                    "Отлично. Остался последний шаг!": "Выдатна. Застаўся апошні крок!",
                    "С": "З",
                    "политикой конфиденциальности": "палітыкай прыватнасці",
                    "ознакомлен": "азнаёмлены",
                    'К этой группе привязан квиз "{title}"': 'Да гэтай групы прывязаны квіз "{title}"',
                    "Редактировать квиз": "Рэдагаваць квіз",
                    "Привязать другой квиз": "Прывязаць іншы квіз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Каб прывязаць квіз да групы vk, увядзiце яго id і націсніце "Прывязаць"',
                    "Введите id квиза": "Увядзіце id квіз",
                    "Привязать": "Прывязаць",
                    "Использовать мессенджер": "Выкарыстоўваць мессенджер",
                    "Куда присылать результаты?": "Куды дасылаць вынікі?",
                    "Вернуться к вводу контактов": "Вярнуцца да ўводу кантактаў",
                    "Выбрать другой мессенджер": "Выбраць іншы мессенджер",
                    "Введите логин": "Увядзіце лагін",
                    "Ваши бонусы": "Вашыя бонусы",
                    "Введите логин или id": "Калі ласка, увядзіце нумар ці лагін",
                    "Введите номер": "Калі ласка, увядзіце нумар",
                    "Введите номер или логин": "Калі ласка, увядзіце нумар ці лагін",
                    "Каталог": "Каталог",
                    "Сделано в": "Зроблена ў",
                    "Скачать": "Спампаваць",
                    "Пройти тест": "Прайсці тэст",
                    "Бонусы после прохождения теста": "Бонусы пасля праходжання тэсту",
                    "такой квиз не существует": "такой квіз не існуе",
                    "не удалось загрузить тест": "не ўдалося загрузіць тэст",
                    "выберите один или несколько": "абярыце адзін або некалькі",
                    "можно пропустить": "можна прапусціць",
                    "Мы не смогли рассчитать для вас результат": "Мы не змаглі разлічыць для вас вынік",
                    "Попробовать ещё раз": "Паспрабаваць яшчэ раз",
                    "Получите ваши бонусы далее": "Атрымаеце вашыя бонусы далей",
                    "Узнать подробнее": "Даведацца больш падрабязна",
                    "Подсчёт результатов": "Падлік вынікаў",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "да {cost} {currency}",
                    "от {cost} {currency}": "ад {cost} {currency}",
                    "Пройти тест заново": "Прайсці тэст зноўку",
                    "Не знаю, что выбрать": "Не ведаю, што выбраць",
                    "или": "або",
                    "Ваши результаты": "Вашы вынікі",
                    "Выберите интересующий вас вариант": "Выберыце цікавіць вас варыянт",
                    "Идёт переадресация в мессенджер": "Ідзе пераадрасацыя ў мессенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Націсніце [тут](#), калі гэтага не здарылася",
                    "Загрузка": "Загрузка",
                    "Страна": "Краіна",
                    "Нужно выбрать страну": "Трэба выбраць краіну",
                    "Например": "Напрыклад",
                    "Идёт загрузка файлов": "Ідзе загрузка файлаў",
                    "Не закрывайте страницу": "Не зачыняйце старонку",
                    "Нажмите, чтобы загрузить файл": "Націсніце, каб загрузіць файл",
                    "Или перетяните его из папки в это поле": "Або перацягні яго з тэчкі ў гэтае поле",
                    "Файл {name} слишком большой": "Файл {name} занадта вялікі",
                    "Идёт переадресация на {-url}": "Ідзе пераадрасацыя на {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            de: {
                translation: {
                    "Ваша скидка": "Ihr Rabatt",
                    "Отлично. Последний шаг!": "Gut! Letzter Schritt!",
                    "Итоговая скидка": "Ganzer Rabatt",
                    "Дополнительно": "Fortgeschritten",
                    "Получить результаты": "Ergebnisse erhalten",
                    "Спасибо": "Danke",
                    "Готово": "Ist fertig",
                    "Назад": "Zurück",
                    "Далее": "Weiter",
                    "Последний шаг": "Letzter Schritt",
                    "Сделано с помощью": "Hergestellt von",
                    Email: "Email",
                    "Имя": "Name",
                    "Телефон": "Telefon",
                    "За каждый ответ": "Für jede Antwort",
                    "Скидка": "Rabatt",
                    "Другое": "Andere",
                    "Выберите вариант ответа слева": "Wählen Sie die Antwort auf der linken Seite",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Mit der Übermittlung Ihrer Kontaktdaten stimmen Sie der Verarbeitung personenbezogener Daten gemäß ",
                    "пользовательским соглашением": "Benutzervereinbarung",
                    "Выберите вариант ответа снизу": "Wähle eine Antwort von unten aus",
                    "От": "Von",
                    "До": "Bis",
                    "Пн": "MO ",
                    "Вт": "DI",
                    "Ср": "MI",
                    "Чт": "DO",
                    "Пт": "FR",
                    "Сб": "SA",
                    "Вс": "SO",
                    "Январь": "Januar",
                    "Февраль": "Februar",
                    "Март": "März",
                    "Апрель": "April",
                    "Май": "Mai",
                    "Июнь": "Juni",
                    "Июль": "Juli",
                    "Август": "August",
                    "Сентябрь": "September",
                    "Октябрь": "Oktober",
                    "Ноябрь": "November",
                    "Декабрь": "Dezember",
                    "У меня нет email": "Ich habe keine E-Mail",
                    "Введите имя": "Schreibe den Namen",
                    "Введите телефон": "Schreibe ein Telefon",
                    "Введите email": "E-Mail schreiben",
                    "mail_40mail.ru": "mail_40mail.de",
                    "Игорь": "Georg",
                    "+7 (900) 000-00-00": "(+49) 1111111111 ",
                    "Сейчас": "Jetzt",
                    "Сброс": "Zurücksetzen",
                    "Действует еще": "Noch gültig",
                    "Каталог в подарок": "Katalog als Geschenk",
                    "Прайс-лист": "Preisliste",
                    "Отлично. Остался последний шаг!": "Super. Ich war letzten Schritt!",
                    "С": "mit",
                    "ознакомлен": "bekannt",
                    "политикой конфиденциальности": "Datenschutzrichtlinie",
                    'К этой группе привязан квиз "{title}"': 'Ein Quiz "{title}" ist an diese Gruppe gebunden.',
                    "Редактировать квиз": "Quiz bearbeiten",
                    "Привязать другой квиз": "Schnappen Sie ein weiteres Quiz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Um ein Quiz an die vk-Gruppe zu binden, geben Sie seine ID ein und klicken Sie auf "Snap"',
                    "Введите id квиза": "Geben Sie die Quiz-ID",
                    "Привязать": "Zu binden",
                    "Ваши бонусы": "Deine Boni",
                    "Использовать мессенджер": "Verwenden Sie Instant Messenger",
                    "Куда присылать результаты?": "Wohin mit den Ergebnissen?",
                    "Вернуться к вводу контактов": "Zurück zur Kontakteingabe",
                    "Выбрать другой мессенджер": "Wähle einen anderen Messenger",
                    "Введите логин": "Geben Sie Login",
                    "Введите логин или id": "Geben Sie Login oder ID",
                    "Введите номер": "Geben Sie Nummer",
                    "Введите номер или логин": "Geben Sie Nummer oder Login",
                    "Каталог": "Katalog",
                    "Сделано в": "Made in",
                    "Скачать": "Herunterladen",
                    "Пройти тест": "Bestehe den Test",
                    "Бонусы после прохождения теста": "Boni nach Bestehen des Tests",
                    "такой квиз не существует": "Dieses Quiz existiert nicht",
                    "не удалось загрузить тест": "Test konnte nicht geladen werden",
                    "выберите один или несколько": "Wählen Sie eine oder mehrere aus",
                    "можно пропустить": "kann überspringen",
                    "Мы не смогли рассчитать для вас результат": "Wir konnten das Ergebnis für Sie nicht berechnen.",
                    "Попробовать ещё раз": "Versuchen Sie es erneut",
                    "Получите ваши бонусы далее": "Holen Sie sich Ihre Boni weiter",
                    "Узнать подробнее": "Erfahren Sie mehr",
                    "Подсчёт результатов": "Ergebnisse zählen",
                    "Идёт загрузка файлов": "Dateien laden",
                    "Не закрывайте страницу": "Schließen Sie die Seite nicht",
                    "Идёт переадресация в мессенджер": "Es gibt eine Weiterleitung zum Boten",
                    "Нажмите [здесь](#), если этого не случилось": "Klicken Sie auf [hier](#), falls dies nicht der Fall ist",
                    "Страна": "Land",
                    "Нужно выбрать страну": "Sie müssen ein Land auswählen",
                    "Например": "Zum Beispiel",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "bis zu {cost} {currency}",
                    "от {cost} {currency}": "von {cost} {currency}",
                    "Пройти тест заново": "Machen Sie den Test erneut",
                    "Не знаю, что выбрать": "Ich weiß nicht, was ich wählen soll",
                    "или": "oder",
                    "Ваши результаты": "Ihre Ergebnisse",
                    "Выберите интересующий вас вариант": "Wählen Sie die Option, die Sie interessiert",
                    "Нажмите, чтобы загрузить файл": "Klicken Sie hier, um die Datei herunterzuladen",
                    "Или перетяните его из папки в это поле": "Oder ziehen Sie es aus dem Ordner in dieses Feld.",
                    "Файл {name} слишком большой": "{name} ist zu groß",
                    "Загрузка": "Laden",
                    "Идёт переадресация на {-url}": "Weiterleiten an {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            en: {
                translation: {
                    "Ваша скидка": "Your discount",
                    "Отлично. Последний шаг!": "Excellent. Last step!",
                    "Итоговая скидка": "Final discount",
                    "Дополнительно": "Additionally",
                    "Получить результаты": "Get results",
                    "Спасибо": "Thank you",
                    "Готово": "Done",
                    "Назад": "Back",
                    "Далее": "Next",
                    "Последний шаг": "Last step",
                    "Сделано с помощью": "Powered by",
                    Email: "Email",
                    "Имя": "Name",
                    "Телефон": "Phone",
                    "За каждый ответ": "For each answer",
                    "Скидка": "Discount",
                    "Другое": "Other",
                    "Выберите вариант ответа слева": "Select answer option on the left",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "By providing your contact information, you agree to the processing of personal information in accordance with the",
                    "пользовательским соглашением": "user agreement",
                    "Выберите вариант ответа снизу": "Choose the answer from below",
                    "От": "From",
                    "До": "To",
                    "Пн": "M",
                    "Вт": "Tu",
                    "Ср": "W",
                    "Чт": "Th",
                    "Пт": "F",
                    "Сб": "S",
                    "Вс": "Su",
                    "Январь": "January",
                    "Февраль": "February",
                    "Март": "March",
                    "Апрель": "April",
                    "Май": "May",
                    "Июнь": "June",
                    "Июль": "July",
                    "Август": "August",
                    "Сентябрь": "September",
                    "Октябрь": "October",
                    "Ноябрь": "November",
                    "Декабрь": "December",
                    "У меня нет email": "I don't have email",
                    "Введите имя": "Enter your name",
                    "Введите телефон": "Enter your phone",
                    "Введите email": "Enter your email",
                    "mail_40mail.ru": "mail_40google.com",
                    "Игорь": "Benny",
                    "+7 (900) 000-00-00": "+1-202-555-0105",
                    "Сейчас": "Now",
                    "Сброс": "Reset",
                    "Действует еще": "Expires in",
                    "Каталог в подарок": "Gift catalog",
                    "Прайс-лист": "Price list",
                    "Отлично. Остался последний шаг!": "Excellent. The last step is left!",
                    "С": "I agree to the",
                    "политикой конфиденциальности": "Privacy policy",
                    "ознакомлен": "",
                    'К этой группе привязан квиз "{title}"': 'This group was attached to quiz "{title}"',
                    "Редактировать квиз": "Edit quiz",
                    "Привязать другой квиз": "Attach another quiz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Enter quiz id and click "Attach" to attach quiz to vk group',
                    "Введите id квиза": "Enter quiz id",
                    "Использовать мессенджер": "Use instant messenger",
                    "Куда присылать результаты?": "Where to send the results?",
                    "Вернуться к вводу контактов": "Back to contacts",
                    "Выбрать другой мессенджер": "Select another messenger",
                    "Введите логин": "Enter your login",
                    "Привязать": "Attach",
                    "Ваши бонусы": "Your bonuses",
                    "Введите логин или id": "Enter your login or id",
                    "Введите номер": "Enter your number",
                    "Введите номер или логин": "Enter your number or login",
                    "Каталог": "Catalog",
                    "Сделано в": "Made in",
                    "Скачать": "Download",
                    "Пройти тест": "Take the test",
                    "Бонусы после прохождения теста": "Bonus after passing the test",
                    "такой квиз не существует": "this quiz does not exists",
                    "не удалось загрузить тест": "failed to load test",
                    "выберите один или несколько": "select one or more",
                    "можно пропустить": "can skip",
                    "Мы не смогли рассчитать для вас результат": "We could not calculate the result for you",
                    "Попробовать ещё раз": "Try again",
                    "Получите ваши бонусы далее": "Get your bonuses next step",
                    "Узнать подробнее": "More",
                    "Подсчёт результатов": "Results calculation running",
                    "{cost} {currency}": "{currency} {cost}",
                    "до {cost} {currency}": "up to {currency} {cost}",
                    "от {cost} {currency}": "from {currency} {cost}",
                    "Пройти тест заново": "Take the quiz again",
                    "Не знаю, что выбрать": "I do not know what to choose",
                    "или": "or",
                    "Ваши результаты": "Your results",
                    "Выберите интересующий вас вариант": "Choose the option you are interested in",
                    "Идёт переадресация в мессенджер": "Redirecting to messenger",
                    "Нажмите [здесь](#), если этого не случилось": "Click [here](#) if it does not happen",
                    "Загрузка": "Loading",
                    "Страна": "Country",
                    "Нужно выбрать страну": "You need to choose a country",
                    "Например": "For example",
                    "Идёт загрузка файлов": "File uploading",
                    "Не закрывайте страницу": "Do not close a page",
                    "Нажмите, чтобы загрузить файл": "Click for upload file",
                    "Или перетяните его из папки в это поле": "Or move it from a folder",
                    "Файл {name} слишком большой": "File {name} is too large",
                    "Идёт переадресация на {-url}": "Redirecting to {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            es: {
                translation: {
                    "Ваша скидка": "Su oferta",
                    "Отлично. Последний шаг!": "Perfecto! Último paso!",
                    "Итоговая скидка": "Oferta final",
                    "Дополнительно": "Adicionalmente",
                    "Получить результаты": "Obtener resultados",
                    "Спасибо": "Gracias",
                    "Готово": "Listo",
                    "Назад": "Atras",
                    "Далее": "Continuar",
                    "Последний шаг": "Último paso",
                    "Сделано с помощью": "Hecho con ayuda de",
                    Email: "Correo electrónico",
                    "Имя": "Nombre",
                    "Телефон": "Teléfono",
                    "За каждый ответ": "Por cada respuesta",
                    "Скидка": "Oferta",
                    "Другое": "Otro",
                    "Выберите вариант ответа слева": "Elige la opción de respuesta izquierda",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Presentando sus datos de contacto, está de acuerdo con el procesamiento de información personal de acuerdo con",
                    "пользовательским соглашением": "Condiciones de usuario",
                    "Выберите вариант ответа снизу": "Elige la opción de respuesta de abajo",
                    "От": "De",
                    "До": "Hasta",
                    "Пн": "L",
                    "Вт": "M",
                    "Ср": "X",
                    "Чт": "J",
                    "Пт": "V",
                    "Сб": "S",
                    "Вс": "D",
                    "Январь": "Enero",
                    "Февраль": "Febrero",
                    "Март": "Marzo",
                    "Апрель": "Abril",
                    "Май": "Mayo",
                    "Июнь": "Junio",
                    "Июль": "Julio",
                    "Август": "Agosto",
                    "Сентябрь": "Septiembre",
                    "Октябрь": "Octubre",
                    "Ноябрь": "Noviembre",
                    "Декабрь": "Diciembre",
                    "У меня нет email": "No tengo correo electrónico",
                    "Введите имя": "Introduzca el nombre",
                    "Введите телефон": "Introduzca el teléfono",
                    "Введите email": "Introduzca el correo electrónico",
                    "mail_40mail.ru": "mail_40gmail.com",
                    "Игорь": "Jorge",
                    "+7 (900) 000-00-00": "(+34) 1111111111",
                    "Сейчас": "Ahora",
                    "Сброс": "Descarga",
                    "Действует еще": "Activo aún",
                    "Каталог в подарок": "Catalogo de regalo",
                    "Прайс-лист": "Lista de precios",
                    "Отлично. Остался последний шаг!": "Perfecto. Queda el último paso!",
                    "С": "Con",
                    "ознакомлен": "Familiarizado",
                    "политикой конфиденциальности": "Política de privacidad",
                    'К этой группе привязан квиз "{title}"': "A éste grupo está vinculado.",
                    "Редактировать квиз": "Redactar kviz",
                    "Привязать другой квиз": "Vincular otro kviz",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Para vincular kviz con el grupo VK introduzca su ID y seleccione "Vincular":',
                    "Введите id квиза": "Introduzca el ID",
                    "Привязать": "Vincular",
                    "Ваши бонусы": "Sus bonos",
                    "Использовать мессенджер": "Utilizar Messenger",
                    "Куда присылать результаты?": "Dónde mandar los resultados?",
                    "Вернуться к вводу контактов": "Volver a introducir el contacto",
                    "Выбрать другой мессенджер": "Elegir otro Messenger",
                    "Введите логин": "Introduzca el nombre de usuario",
                    "Введите логин или id": "Introduzca el nombre de usuario o el ID",
                    "Введите номер": "Introduzca el número",
                    "Введите номер или логин": "Introduzca el número o el nombre de usuario",
                    "Каталог": "Catálogo",
                    "Сделано в": "Hecho en",
                    "Скачать": "Descargar",
                    "Пройти тест": "Pasar el Test",
                    "Бонусы после прохождения теста": "Bonos después de pasar el test",
                    "такой квиз не существует": "Tal kviz no existe",
                    "не удалось загрузить тест": "No a sido posible descargar el test",
                    "выберите один или несколько": "Seleccione uno o varios",
                    "можно пропустить": "Se puede saltar",
                    "Мы не смогли рассчитать для вас результат": "No hemos podido calcular su resultado.",
                    "Попробовать ещё раз": "Intentar otra vez",
                    "Получите ваши бонусы далее": "Reciba su bonificación a continuación",
                    "Узнать подробнее": "Saber más",
                    "Подсчёт результатов": "Anunciar resultados",
                    "Пройти тест заново": "Pasar el test de nuevo",
                    "Не знаю, что выбрать": "No sé qué escoger",
                    "или": "O",
                    "Ваши результаты": "Sus resultados",
                    "Выберите интересующий вас вариант": "Escoja la opción que os interesa",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "hasta {cost} {currency}",
                    "от {cost} {currency}": "de {cost} {currency}",
                    "Идёт переадресация в мессенджер": "Hay un redireccionamiento al mensajero",
                    "Нажмите [здесь](#), если этого не случилось": "Haga clic [aquí](#) si esto no sucede",
                    "Загрузка": "Cargando",
                    "Страна": "País",
                    "Нужно выбрать страну": "Necesito elegir un país",
                    "Например": "Por ejemplo",
                    "Идёт загрузка файлов": "Cargando archivos",
                    "Не закрывайте страницу": "No cerrar la pagina",
                    "Нажмите, чтобы загрузить файл": "Haga clic para descargar el archivo",
                    "Или перетяните его из папки в это поле": "O arrástrelo desde la carpeta a este campo.",
                    "Файл {name} слишком большой": "{Nombre} es demasiado grande",
                    "Идёт переадресация на {-url}": "Redirigiendo a {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            hy: {
                translation: {
                    "Ваша скидка": "Ձեր զեղչը",
                    "Отлично. Последний шаг!": "Հիանալի է. Վերջին քայլ!",
                    "Итоговая скидка": "Վերջնական զեղչ",
                    "Дополнительно": "Ավելին",
                    "Получить результаты": "Ստանալ արդյունքները",
                    "Спасибо": "Շնորհակալություն",
                    "Готово": "Պատրաստ է",
                    "Назад": "Հետ",
                    "Далее": "Հաջորդը",
                    "Последний шаг": "Վերջին քայլ",
                    "Сделано с помощью": "Powered by",
                    Email: "Email",
                    "Имя": "Անուն",
                    "Телефон": "Հեռախոսահամր",
                    "За каждый ответ": "Ամեն պատասխանի համար",
                    "Скидка": "Զեղչ",
                    "Другое": "Այլ",
                    "Выберите вариант ответа слева": "Ընտրեք պատասխանի տարբերակը ձախ կողմում",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": " Ձեր կոնտակտային տվյալները տրամադրելով, դուք համաձայնվում եք անձնական տվյալների վերամշակմանը ",
                    "пользовательским соглашением": "Օգտատիրոջ համաձայնությամբ",
                    "Выберите вариант ответа снизу": "Ընտրեք պատասխանի տարբերակը ներքևում",
                    "От": "From",
                    "До": "To",
                    "Пн": "Ե",
                    "Вт": "Ե",
                    "Ср": "Չ",
                    "Чт": "Հ",
                    "Пт": "ՈՒ",
                    "Сб": "Շ",
                    "Вс": "Կ",
                    "Январь": "Հունվար",
                    "Февраль": "Փետրվար",
                    "Март": "Մարտ",
                    "Апрель": "Ապրիլ",
                    "Май": "Մայիս",
                    "Июнь": "Հունիս",
                    "Июль": "Հուլիս",
                    "Август": "Օգոստոս",
                    "Сентябрь": "Սեպտեմբեր",
                    "Октябрь": "Հոկտեմբեր",
                    "Ноябрь": "Նոյեմբեր",
                    "Декабрь": "Դեկտեմբեր",
                    "У меня нет email": "Էլփոստ չունեմ",
                    "Введите имя": "Մուտքագրեք անուն",
                    "Введите телефон": "Մուտքագրեք հեռախոսը",
                    "Введите email": "Մուտքագրեք էլփոստը",
                    "mail_40mail.ru": "mail_40mail.am",
                    "Игорь": "Իգոր",
                    "+7 (900) 000-00-00": "(+374 95) 111 111",
                    "Сейчас": "Այժմ",
                    "Сброс": "Վերագործարկեք",
                    "Действует еще": "Ավելին կան",
                    "Каталог в подарок": "Նվերների կատալոգ",
                    "Прайс-лист": "Գնացուցակ",
                    "Отлично. Остался последний шаг!": "Մեծը: Վերջին քայլն է մնացել:",
                    "С": "գ",
                    "ознакомлен": "ծանոթացնում է",
                    "политикой конфиденциальности": "Գաղտնիության քաղաքականություն",
                    'К этой группе привязан квиз "{title}"': "Այս խմբին կցված է «{title}» վիկտորինան",
                    "Редактировать квиз": "Խմբագրել վիկտորինան",
                    "Привязать другой квиз": "Հղում այլ վիկտորինային",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Տոմսը vk խմբի հետ կապելու համար մուտքագրեք իր id եւ սեղմեք "Snap":',
                    "Введите id квиза": "Մուտքագրեք Quiz ID- ն",
                    "Привязать": "ճաքել",
                    "Ваши бонусы": "ձեր բոնուսները",
                    "Использовать мессенджер": "օգտագործել փեյջերը",
                    "Куда присылать результаты?": "Որտեղ ուղարկել արդյունքները.",
                    "Вернуться к вводу контактов": "Վերադառնալ շփումների գրառումների",
                    "Выбрать другой мессенджер": "Ընտրել այլ պատգամաբերին",
                    "Введите логин": "մուտքագրեք ձեր օգտանունը",
                    "Введите логин или id": "Մուտքագրեք մուտքի կամ id",
                    "Введите номер": "Մուտքագրեք համարը",
                    "Введите номер или логин": "Մուտքագրեք համարը կամ մուտքագրեք",
                    "Каталог": "Կատալոգ",
                    "Сделано в": "Պատրաստված է",
                    "Скачать": "Բեռնել",
                    "Пройти тест": "Վերցրեք քննությունը",
                    "Бонусы после прохождения теста": "Բոնուս `փորձարկումից հետո",
                    "такой квиз не существует": "նման վիկտորինա գոյություն չունի",
                    "не удалось загрузить тест": "չհաջողվեց բեռնել փորձարկում",
                    "выберите один или несколько": "ընտրեք մեկ կամ ավելի",
                    "можно пропустить": "կարող եք բաց թողնել",
                    "Мы не смогли рассчитать для вас результат": "Մենք չկարողացանք հաշվարկել այդ արդյունքը",
                    "Попробовать ещё раз": "Կրկին փորձեք",
                    "Получите ваши бонусы далее": "Ստացեք ձեր բոնուսները",
                    "Узнать подробнее": "Իմացեք ավելին",
                    "Подсчёт результатов": "Հաշվարկման արդյունքներ",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "մինչեւ {cost} {currency}",
                    "от {cost} {currency}": "սկսած {cost} {currency}",
                    "Пройти тест заново": "Վերցրեք կրկին փորձությունը",
                    "Не знаю, что выбрать": "Ես չգիտեմ, թե ինչ պետք է ընտրի",
                    "или": "կամ",
                    "Ваши результаты": "Ձեր արդյունքները",
                    "Выберите интересующий вас вариант": "Ընտրեք այն տարբերակը, որը հետաքրքրում է ձեզ",
                    "Идёт переадресация в мессенджер": "Ուղղիչ հղում կա",
                    "Нажмите [здесь](#), если этого не случилось": "Սեղմեք [այստեղ](#), եթե դա տեղի չի ունենում",
                    "Загрузка": "բեռնում",
                    "Страна": "Երկիրը",
                    "Нужно выбрать страну": "Պետք է ընտրել երկիր",
                    "Например": "Օրինակ",
                    "Идёт загрузка файлов": "Ֆայլեր բեռնելիս",
                    "Не закрывайте страницу": "Մի փակեք էջը",
                    "Нажмите, чтобы загрузить файл": "Սեղմեք ֆայլը ներբեռնելու համար",
                    "Или перетяните его из папки в это поле": "Կամ տեղափոխեք այն թղթապանակից այս դաշտում:",
                    "Файл {name} слишком большой": "{name}- ը չափազանց մեծ է",
                    "Идёт переадресация на {-url}": "Վերահղման համար {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            kk: {
                translation: {
                    "Ваша скидка": "Сіздің жеңілдігіңіз",
                    "Отлично. Последний шаг!": "Тамаша. Соңғы қадам!",
                    "Итоговая скидка": "Қорытынды жеңілдік",
                    "Дополнительно": "Қосымша",
                    "Получить результаты": "Нәтижесін алу",
                    "Спасибо": "Рахмет",
                    "Готово": "Дайын",
                    "Назад": "Артқа",
                    "Далее": "Алға",
                    "Последний шаг": "Соңғы қадам",
                    "Сделано с помощью": "Көмегімен жасалған",
                    Email: "Email",
                    "Имя": "Аты-жөні",
                    "Телефон": "Телефон",
                    "За каждый ответ": "Әрбір жауабы бар",
                    "Скидка": "Жеңілдікпен",
                    "Другое": "Басқа",
                    "Выберите вариант ответа слева": "Сол жақтағы жауап опциясын таңдаңыз",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Сіздің байланыс ақпаратын беру арқылы сіз жеке ақпаратты өңдеу туралы келісімге",
                    "пользовательским соглашением": "сәйкес келісесіз",
                    "Выберите вариант ответа снизу": "Төменде берілген жауапты таңдаңыз",
                    "От": "Қайдан",
                    "До": "Бұған дейін",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Қаңтар",
                    "Февраль": "Ақпан",
                    "Март": "Наурыз",
                    "Апрель": "Сәуір",
                    "Май": "Мамыр",
                    "Июнь": "Маусым",
                    "Июль": "Шілде",
                    "Август": "Тамыз",
                    "Сентябрь": "Қыркүйек",
                    "Октябрь": "Қазан",
                    "Ноябрь": "Қараша",
                    "Декабрь": "Желтоқсан",
                    "У меня нет email": "Менде электрондық пошта жоқ",
                    "Введите имя": "Атын енгізіңіз",
                    "Введите телефон": "Телефонға кіріңіз",
                    "Введите email": "Электрондық поштаны енгізіңіз",
                    "mail_40mail.ru": "mail_40mail.kz",
                    "Игорь": "Игорь",
                    "+7 (900) 000-00-00": "+7 (701) 111-11-11",
                    "Сейчас": "Қазір",
                    "Сброс": "Қалпына келтіру",
                    "Действует еще": "Көп нәрсе бар",
                    "Каталог в подарок": "Сыйлық каталогы",
                    "Прайс-лист": "Бағалар тізімі",
                    "Отлично. Остался последний шаг!": "Тамаша. Соңғы қадам қалдырылды!",
                    "С": "",
                    "ознакомлен": "таныстырылған",
                    "политикой конфиденциальности": "Құпиялылық саясаты",
                    'К этой группе привязан квиз "{title}"': 'Осы топқа "{title}" атты викторина қосылды',
                    "Редактировать квиз": "Викторинаны өңдеу",
                    "Привязать другой квиз": "Басқа викторина байланыстырыңыз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Vk тобына билетті байластыру үшін оның идентификаторын енгізіңіз және "байланыстыру" түймесін басыңыз',
                    "Введите id квиза": "Викторина идентификаторын енгізіңіз",
                    "Привязать": "Соққы",
                    "Ваши бонусы": "Сіздің ұсыныстарыңыз",
                    "Использовать мессенджер": "Жедел хабар алмасуды қолданыңыз",
                    "Куда присылать результаты?": "Куда присылать результаты?",
                    "Вернуться к вводу контактов": "Нәтижелерді қайда жіберемін?",
                    "Выбрать другой мессенджер": "Басқа хабаршыны таңдаңыз",
                    "Введите логин": "Кіруді енгізіңіз",
                    "Введите логин или id": "Кіру немесе идентификаторды енгізіңіз",
                    "Введите номер": "Нөмірді енгізіңіз",
                    "Введите номер или логин": "Нөмірді немесе логинді енгізіңіз",
                    "Каталог": "Каталогы",
                    "Сделано в": "Жасалды",
                    "Скачать": "Жүктеу",
                    "Пройти тест": "Сынақты алыңыз",
                    "Бонусы после прохождения теста": "Сынақтан өткеннен кейінгі бонус",
                    "такой квиз не существует": "мұндай викторина жоқ",
                    "не удалось загрузить тест": "сынақты жүктей алмады",
                    "выберите один или несколько": "біреуін немесе бірнешеуін таңдаңыз",
                    "можно пропустить": "сіз өткізіп жібере аласыз",
                    "Мы не смогли рассчитать для вас результат": "Біз сіз үшін нәтижені есептей алмадық",
                    "Попробовать ещё раз": "Әрекетті қайталаңыз",
                    "Получите ваши бонусы далее": "Бонустарыңызды одан әрі алыңыз",
                    "Узнать подробнее": "Көбірек біліңіз",
                    "Подсчёт результатов": "Нәтижелерді есептеу",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "{cost} {currency} дейін",
                    "от {cost} {currency}": "{cost} {currency} бастап",
                    "Пройти тест заново": "Сынақты қайтадан алыңыз",
                    "Не знаю, что выбрать": "Мен нені таңдау керектігін білмеймін",
                    "или": "немесе",
                    "Ваши результаты": "Сіздің нәтижелеріңіз",
                    "Выберите интересующий вас вариант": "Қызығушылық танытқан параметрді таңдаңыз",
                    "Идёт переадресация в мессенджер": "Хабаршыға бағыттау бар",
                    "Нажмите [здесь](#), если этого не случилось": "Егер бұл болмаса, [мында](#) басыңыз",
                    "Загрузка": "Жүктеу",
                    "Страна": "Ел",
                    "Нужно выбрать страну": "Елді таңдау керек",
                    "Например": "Мысалы",
                    "Идёт загрузка файлов": "Файлдарды жүктеу",
                    "Не закрывайте страницу": "Бетті жаппаңыз",
                    "Нажмите, чтобы загрузить файл": "Файлды жүктеу үшін басыңыз",
                    "Или перетяните его из папки в это поле": "Немесе қалтаны осы өріске апарыңыз.",
                    "Файл {name} слишком большой": "Файл {name} тым үлкен",
                    "Идёт переадресация на {-url}": "Қайта бағыттау {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            ru: {
                translation: {
                    "Ваша скидка": "Ваша скидка",
                    "Отлично. Последний шаг!": "Отлично. Последний шаг!",
                    "Итоговая скидка": "Итоговая скидка",
                    "Дополнительно": "Дополнительно",
                    "Получить результаты": "Получить результаты",
                    "Спасибо": "Спасибо",
                    "Готово": "Готово",
                    "Назад": "Назад",
                    "Далее": "Далее",
                    "Последний шаг": "Последний шаг",
                    "Сделано с помощью": "Сделано с помощью",
                    Email: "Email",
                    "Имя": "Имя",
                    "Телефон": "Телефон",
                    "За каждый ответ": "За каждый ответ",
                    "Скидка": "Скидка",
                    "Другое": "Другое",
                    "Выберите вариант ответа слева": "Выберите вариант ответа слева",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с",
                    "пользовательским соглашением": "пользовательским соглашением",
                    "Выберите вариант ответа снизу": "Выберите вариант ответа снизу",
                    "От": "От",
                    "До": "До",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Вс",
                    "Январь": "Январь",
                    "Февраль": "Февраль",
                    "Март": "Март",
                    "Апрель": "Апрель",
                    "Май": "Май",
                    "Июнь": "Июнь",
                    "Июль": "Июль",
                    "Август": "Август",
                    "Сентябрь": "Сентябрь",
                    "Октябрь": "Октябрь",
                    "Ноябрь": "Ноябрь",
                    "Декабрь": "Декабрь",
                    "У меня нет email": "У меня нет email",
                    "Введите имя": "Введите имя",
                    "Введите телефон": "Введите телефон",
                    "Введите email": "Введите email",
                    "mail_40mail.ru": "mail_40mail.ru",
                    "Игорь": "Игорь",
                    "+7 (900) 000-00-00": "+7 (900) 000-00-00",
                    "Сейчас": "Сейчас",
                    "Сброс": "Сброс",
                    "Действует еще": "Действует еще",
                    "Каталог в подарок": "Каталог в подарок",
                    "Прайс-лист": "Прайс-лист",
                    "Отлично. Остался последний шаг!": "Отлично. Остался последний шаг!",
                    "С": "С",
                    "ознакомлен": "ознакомлен",
                    "политикой конфиденциальности": "политикой конфиденциальности",
                    'К этой группе привязан квиз "{title}"': 'К этой группе привязан квиз "{title}"',
                    "Редактировать квиз": "Редактировать квиз",
                    "Привязать другой квиз": "Привязать другой квиз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': 'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"',
                    "Введите id квиза": "Введите id квиза",
                    "Привязать": "Привязать",
                    "Ваши бонусы": "Ваши бонусы",
                    "Использовать мессенджер": "Использовать мессенджер",
                    "Куда присылать результаты?": "Куда присылать результаты?",
                    "Вернуться к вводу контактов": "Вернуться к вводу контактов",
                    "Выбрать другой мессенджер": "Выбрать другой мессенджер",
                    "Введите логин": "Введите логин",
                    "Введите логин или id": "Введите логин или id",
                    "Введите номер": "Введите номер",
                    "Введите номер или логин": "Введите номер или логин",
                    "Каталог": "Каталог",
                    "Сделано в": "Сделано в",
                    "Скачать": "Скачать",
                    "Пройти тест": "Пройти тест",
                    "Бонусы после прохождения теста": "Бонусы после прохождения теста",
                    "такой квиз не существует": "такой квиз не существует",
                    "не удалось загрузить тест": "не удалось загрузить тест",
                    "Выберите один или несколько": "Выберите один или несколько",
                    "выберите один или несколько": "выберите один или несколько",
                    "можно пропустить": "можно пропустить",
                    "Мы не смогли рассчитать для вас результат": "Мы не смогли рассчитать для вас результат",
                    "Попробовать ещё раз": "Попробовать ещё раз",
                    "Получите ваши бонусы далее": "Получите ваши бонусы далее",
                    "Узнать подробнее": "Узнать подробнее",
                    "Подсчёт результатов": "Подсчёт результатов",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "до {cost} {currency}",
                    "от {cost} {currency}": "от {cost} {currency}",
                    "Пройти тест заново": "Пройти тест заново",
                    "Не знаю, что выбрать": "Не знаю, что выбрать",
                    "или": "или",
                    "Ваши результаты": "Ваши результаты",
                    "Выберите интересующий вас вариант": "Выберите интересующий вас вариант",
                    "Идёт переадресация в мессенджер": "Идёт переадресация в мессенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Нажмите [здесь](#), если этого не случилось",
                    "Загрузка": "Загрузка",
                    "Страна": "Страна",
                    "Нужно выбрать страну": "Нужно выбрать страну",
                    "Например": "Например",
                    "Идёт загрузка файлов": "Идёт загрузка файлов",
                    "Не закрывайте страницу": "Не закрывайте страницу",
                    "Нажмите, чтобы загрузить файл": "Нажмите, чтобы загрузить файл",
                    "Или перетяните его из папки в это поле": "Или перетяните его из папки в это поле",
                    "Файл {name} слишком большой": "Файл {name} слишком большой",
                    "Идёт переадресация на {-url}": "Идёт переадресация на {-url}",
                    "ВКонтакте": "ВКонтакте",
                    "поделиться": "поделиться"
                }
            },
            uk: {
                translation: {
                    "Ваша скидка": "Ваша знижка",
                    "Отлично. Последний шаг!": "Добре, останній крок!",
                    "Итоговая скидка": "Підсумкова знижка",
                    "Дополнительно": "Додатково",
                    "Получить результаты": "Отримати результати",
                    "Спасибо": "Дякуємо",
                    "Готово": "Готово",
                    "Назад": "Назад",
                    "Далее": "Далі",
                    "Последний шаг": "Останній крок",
                    "Сделано с помощью": "Зроблено задопомогою",
                    Email: "Email",
                    "Имя": "Ім‘я",
                    "Телефон": "Телефон",
                    "За каждый ответ": "За кожен відповідь",
                    "Скидка": "Знижка",
                    "Другое": "Інше",
                    "Выберите вариант ответа слева": "Виберіть варіант відповіді зліва",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "Надаючи ваші контактні дані, ви погоджуєтеся на обробку персональних даних відповідно до призначеним для",
                    "пользовательским соглашением": "користувача угодою",
                    "Выберите вариант ответа снизу": "Виберіть варіант відповіді знизу",
                    "От": "Від",
                    "До": "До",
                    "Пн": "Пн",
                    "Вт": "Вт",
                    "Ср": "Ср",
                    "Чт": "Чт",
                    "Пт": "Пт",
                    "Сб": "Сб",
                    "Вс": "Нд",
                    "Январь": "Січень",
                    "Февраль": "Лютий",
                    "Март": "Березень",
                    "Апрель": "Квітень",
                    "Май": "Травень",
                    "Июнь": "Червень",
                    "Июль": "Липень",
                    "Август": "Серпень",
                    "Сентябрь": "Вересень",
                    "Октябрь": "Жовтень",
                    "Ноябрь": "Листопад",
                    "Декабрь": "Грудень",
                    "У меня нет email": "У мене немає email",
                    "Введите имя": "Введіть ім'я",
                    "Введите телефон": "Введіть телефон",
                    "Введите email": "Введіть email",
                    "mail_40mail.ru": "mail_40mail.ua",
                    "Игорь": "Ігор",
                    "+7 (900) 000-00-00": "+38 (000) 00 00 00",
                    "Сейчас": "Зараз",
                    "Сброс": "Скидання",
                    "Действует еще": "Діє ще",
                    "Каталог в подарок": "Каталог в подарунок",
                    "Прайс-лист": "Прайс-лист",
                    "Отлично. Остался последний шаг!": "Відмінно. Залишився останній крок!",
                    "С": "С",
                    "политикой конфиденциальности": "політикою конфіденційності",
                    "ознакомлен": "ознайомлений",
                    'К этой группе привязан квиз "{title}"': 'До цієї групи прив\'язаний квіз "{title}"',
                    "Редактировать квиз": "Редагувати квіз",
                    "Привязать другой квиз": "Прив'язати інший квіз",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': "Щоб прив'язати квіз до групи vk, введіть його id і натисніть \"Прив'язати\"",
                    "Введите id квиза": "Введіть id квіза",
                    "Привязать": "Прив'язати",
                    "Ваши бонусы": "Ваші бонуси",
                    "Использовать мессенджер": "Використовувати месенджер",
                    "Куда присылать результаты?": "Куди надсилати результати?",
                    "Вернуться к вводу контактов": "Повернутися до введення контактів",
                    "Выбрать другой мессенджер": "Вибрати інше месенджер",
                    "Введите логин": "Введіть логін",
                    "Введите логин или id": "Введіть логін або id",
                    "Введите номер": "Введіть номер",
                    "Введите номер или логин": "Введіть номер або логін",
                    "Каталог": "Каталог",
                    "Сделано в": "Зроблено в",
                    "Скачать": "Завантажити",
                    "Пройти тест": "Пройти тест",
                    "Бонусы после прохождения теста": "Бонуси після проходження тесту",
                    "такой квиз не существует": "такий квіз не існує",
                    "не удалось загрузить тест": "не вдалося завантажити тест",
                    "выберите один или несколько": "виберіть один або декілька",
                    "можно пропустить": "можна пропустити",
                    "Мы не смогли рассчитать для вас результат": "Ми не змогли розрахувати для вас результат",
                    "Попробовать ещё раз": "Спробувати ще раз",
                    "Получите ваши бонусы далее": "Отримайте ваші бонуси далі",
                    "Узнать подробнее": "Дізнатись детальніше",
                    "Подсчёт результатов": "Підрахунок результатів",
                    "{cost} {currency}": "{cost} {currency}",
                    "до {cost} {currency}": "до {cost} {currency}",
                    "от {cost} {currency}": "від {cost} {currency}",
                    "Пройти тест заново": "Пройти тест заново",
                    "Не знаю, что выбрать": "Не знаю, що вибрати",
                    "или": "або",
                    "Ваши результаты": "Ваші результати",
                    "Выберите интересующий вас вариант": "Виберіть цікавий для вас варіант",
                    "Идёт переадресация в мессенджер": "Йде переадресація в месенджер",
                    "Нажмите [здесь](#), если этого не случилось": "Натисніть [тут](#), якщо цього не сталося",
                    "Загрузка": "Завантаження",
                    "Страна": "Країна",
                    "Нужно выбрать страну": "Потрібно вибрати країну",
                    "Например": "Наприклад",
                    "Идёт загрузка файлов": "Триває завантаження файлів",
                    "Не закрывайте страницу": "Чи не закривайте сторінку",
                    "Нажмите, чтобы загрузить файл": "Натисніть, щоб завантажити файл",
                    "Или перетяните его из папки в это поле": "Або перетягніть його з папки в це поле",
                    "Файл {name} слишком большой": "Файл {name} занадто великий",
                    "Идёт переадресация на {-url}": "Йде переадресація на {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            },
            zh: {
                translation: {
                    "Ваша скидка": "折扣优惠",
                    "Отлично. Последний шаг!": "好的，最后一步",
                    "Итоговая скидка": "最终折扣",
                    "Дополнительно": "附加",
                    "Получить результаты": "结果",
                    "Спасибо": "谢谢",
                    "Готово": "完成",
                    "Назад": "返回",
                    "Далее": "下一步",
                    "Последний шаг": "最后一步",
                    "Сделано с помощью": "协助设计",
                    Email: "电子邮件",
                    "Имя": "名字",
                    "Телефон": "电话",
                    "За каждый ответ": "每一个答案",
                    "Скидка": "折扣优惠",
                    "Другое": "其他",
                    "Начните отвечать для подбора вариантов": "开始回答多重选择",
                    "Выберите вариант ответа слева": "选择左侧的答案选项",
                    "Предоставляя ваши контактные данные, вы соглашаетесь на обработку персональной информации в соответствии с": "通过提供您的联系信息，您同意按照以下方式处理个人信息",
                    "пользовательским соглашением": "用户协议",
                    "Выберите вариант ответа снизу": "从下面选择答案",
                    "От": "从",
                    "До": "至",
                    "Пн": "周一",
                    "Вт": "周二",
                    "Ср": "周三",
                    "Чт": "周四",
                    "Пт": "周五",
                    "Сб": "周六",
                    "Вс": "周七",
                    "Январь": "一月",
                    "Февраль": "二月",
                    "Март": "三月",
                    "Апрель": "四月",
                    "Май": "五月",
                    "Июнь": "六月",
                    "Июль": "七月",
                    "Август": "八月",
                    "Сентябрь": "九月",
                    "Октябрь": "十月",
                    "Ноябрь": "十一月",
                    "Декабрь": "十二月",
                    "У меня нет email": "我没有电子邮件",
                    "Введите имя": "输入名称",
                    "Введите телефон": "输入电话",
                    "Введите email": "输入邮箱",
                    "mail_40mail.ru": "mail_40mail.com",
                    "Игорь": "伊戈尔",
                    "+7 (900) 000-00-00": "021 00000000",
                    "Сейчас": "现在",
                    "Сброс": "重置",
                    "Действует еще": "还有更多",
                    "Каталог в подарок": "礼品目录",
                    "Прайс-лист": "价目表",
                    "Отлично. Остался последний шаг!": "优秀的。最后一步了！",
                    "С": "",
                    "политикой конфиденциальности": "我已阅读隐私",
                    "ознакомлен": "政策",
                    'К этой группе привязан квиз "{title}"': '对这个小组附上了测验"{title}"',
                    "Редактировать квиз": "编辑测验",
                    "Привязать другой квиз": "链接另一个测验",
                    'Чтобы привязать квиз к группе vk, введите его id и нажмите "Привязать"': "要将测验链接到vk组，请输入其ID并单击“绑定”",
                    "Введите id квиза": "输入测验ID",
                    "Привязать": "快照",
                    "Ваши бонусы": "你的奖金",
                    "Использовать мессенджер": "使用即时通讯工具",
                    "Куда присылать результаты?": "我在哪里发送结果？",
                    "Вернуться к вводу контактов": "返回进入联系人",
                    "Выбрать другой мессенджер": "选择另一个信使",
                    "Введите логин": "输入登录名",
                    "Введите логин или id": "输入登录名或ID",
                    "Введите номер": "输入数字",
                    "Введите номер или логин": "输入号码或登录",
                    "Каталог": "目录",
                    "Сделано в": "制造",
                    "Скачать": "下载",
                    "Пройти тест": "参加考试",
                    "Бонусы после прохождения теста": "通过测试后的奖金",
                    "такой квиз не существует": "这样的测验不存在",
                    "не удалось загрузить тест": "未能加载测试",
                    "выберите один или несколько": "选择一个或多个",
                    "можно пропустить": "你可以跳过",
                    "Мы не смогли рассчитать для вас результат": "我们无法为您计算结果。",
                    "Попробовать ещё раз": "再试一次",
                    "Получите ваши бонусы далее": "进一步获得奖金",
                    "Узнать подробнее": "了解更多",
                    "Подсчёт результатов": "计算结果",
                    "{cost} {currency}": "{cost}{currency}",
                    "до {cost} {currency}": "高达{cost}{currency}",
                    "от {cost} {currency}": "从{cost}{currency}",
                    "Пройти тест заново": "再次参加考试",
                    "Не знаю, что выбрать": "我不知道该选择什么",
                    "или": "或",
                    "Ваши результаты": "你的结果",
                    "Выберите интересующий вас вариант": "选择您感兴趣的选项。",
                    "Идёт переадресация в мессенджер": "有一个重定向到信使",
                    "Нажмите [здесь](#), если этого не случилось": "如果没有[发生](#)，请单击此处。",
                    "Загрузка": "装载",
                    "Страна": "国家",
                    "Нужно выбрать страну": "需要选择一个国家",
                    "Например": "例如",
                    "Идёт загрузка файлов": "加載文件",
                    "Не закрывайте страницу": "不要关闭页面",
                    "Нажмите, чтобы загрузить файл": "点击下载文件",
                    "Или перетяните его из папки в это поле": "或者将其从文件夹拖到此字段。",
                    "Файл {name} слишком большой": "{name}太大了",
                    "Идёт переадресация на {-url}": "重定向到 {-url}",
                    "ВКонтакте": "vk.com",
                    "поделиться": "share"
                }
            }
        }
    },
    c06f: function(t, e, s) {
        "use strict";
        var n = s("c39c"),
            i = s.n(n);
        i.a
    },
    c39c: function(t, e, s) {},
    c481: function(t, e, s) {},
    cb5b: function(t, e, s) {},
    cc8c: function(t, e, s) {
        "use strict";
        var n = s("72fa"),
            i = s.n(n);
        i.a
    },
    ccaf: function(t, e, s) {},
    cdae: function(t, e, s) {
        "use strict";
        var n, i, a = s("9b02"),
            o = s.n(a),
            r = s("bba4"),
            c = s.n(r),
            u = s("94ed"),
            l = {
                mdiAccount: u["a"],
                mdiCheckboxMarkedCircleOutline: u["g"],
                mdiCheckCircleOutline: u["g"],
                mdiReload: u["u"],
                mdiArrowLeft: u["c"],
                mdiArrowRight: u["d"],
                mdiChevronLeft: u["i"],
                mdiChevronRight: u["j"],
                mdiClock: u["k"],
                mdiClose: u["l"],
                mdiCloseCircle: u["m"],
                mdiGift: u["p"],
                mdiCheckboxMultipleMarkedCircle: u["h"],
                mdiPencil: u["s"],
                mdiCalendarToday: u["e"],
                mdiAlertCircle: u["b"],
                mdiEmail: u["n"],
                mdiFileDocumentBoxOutline: u["o"],
                mdiPhone: u["t"],
                mdiLoading: u["r"],
                mdiCheckCircle: u["f"],
                mdiInformation: u["q"],
                mdiFileDocumentBoxCheckOutline: "M17,21L14.25,18L15.41,16.84L17,18.43L20.59,14.84L21.75,16.25M12.8,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3H19C20.11,3 21,3.89 21,5V12.8C20.39,12.45 19.72,12.2 19,12.08V5H5V19H12.08C12.2,19.72 12.45,20.39 12.8,21M12,17H7V15H12M14.68,13H7V11H17V12.08C16.15,12.22 15.37,12.54 14.68,13M17,9H7V7H17"
            },
            d = {
                functional: !0,
                name: "icon",
                props: {
                    icon: Array,
                    size: String
                },
                render: function(t, e) {
                    var s = o()(e, "props.icon.1");
                    return t("svg", {
                        class: ["mdi-icon", e.props.size],
                        attrs: {
                            viewBox: "0 0 24 24"
                        }
                    }, [t("title", e.props.icon[1]), t("path", {
                        attrs: {
                            d: l[c()(s)]
                        }
                    })])
                }
            },
            h = d,
            f = (s("83b4"), s("2877")),
            m = Object(f["a"])(h, n, i, !1, null, null, null);
        e["a"] = m.exports
    },
    d6d0: function(t, e, s) {},
    d847: function(t, e, s) {
        "use strict";
        var n = s("71ac"),
            i = s.n(n);
        i.a
    },
    de74: function(t, e, s) {
        "use strict";
        var n = s("31f0"),
            i = s.n(n);
        i.a
    },
    dfbf: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "bonuses",
                    class: ["bonuses_direction_" + t.direction, "bonuses_count_" + t.bonuses.length],
                    style: {
                        "--bonus-height": t.height + "px"
                    }
                }, t._l(t.bonuses, function(e, n) {
                    return s("Bonus", {
                        key: "bonus_" + n,
                        staticClass: "bonuses__bonus",
                        attrs: {
                            bonus: e,
                            isLocked: t.isLock(e)
                        }
                    })
                }), 1)
            },
            i = [],
            a = s("cebc"),
            o = (s("c5f6"), s("9b02")),
            r = s.n(o),
            c = s("2f62"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "bonus",
                    class: ["bonus_type_" + t.type, {
                        bonus_locked: t.isLocked,
                        bonus_unlocked: !t.isLocked
                    }]
                }, [s("div", {
                    staticClass: "bonus__wrapper",
                    style: {
                        backgroundImage: "url(" + t.imageUrl + ")"
                    },
                    on: {
                        click: t.download
                    }
                }, [s("div", {
                    staticClass: "bonus__layer"
                }), s("span", {
                    staticClass: "bonus__text"
                }, [t._v(t._s(t.text))]), !t.isLocked && t.bonus.link ? s("div", {
                    staticClass: "bonus__unlock",
                    attrs: {
                        title: t.$t("Скачать")
                    }
                }, [s("DownArrowIcon")], 1) : t._e()]), t.isLocked ? [s("LockIcon", {
                    staticClass: "bonus__lock-icon"
                }), s("div", {
                    staticClass: "bonus__lock"
                })] : t._e()], 2)
            },
            l = [],
            d = (s("4917"), s("b54a"), s("7f7f"), s("8a30")),
            h = s.n(d),
            f = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 299.995 299.995"
                    },
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 299.995 299.995",
                        "xml:space": "preserve"
                    }
                }, [s("g", [s("g", [s("g", [s("path", {
                    attrs: {
                        d: "M149.997,161.485c-8.613,0-15.598,6.982-15.598,15.598c0,5.776,3.149,10.807,7.817,13.505v17.341h15.56206F26BDAA1"
                    }
                }), s("path", {
                    attrs: {
                        d: "M150.003,85.849c-13.111,0-23.775,10.665-23.775,23.775v25.319h47.548v-25.319/n          C173.775,96.516,163.111,85.849,150.003,85.849z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M149.995,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.995,149.997s150-67.161,150521D4DA30"
                    }
                })])])])])
            },
            m = [],
            p = (s("cc8c"), s("2877")),
            g = {},
            v = Object(p["a"])(g, f, m, !1, null, "6d74ce7d", null),
            b = v.exports,
            _ = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("svg", {
                    staticStyle: {
                        "enable-background": "new 0 0 512.171 512.171"
                    },
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.171 512.171",
                        "xml:space": "preserve"
                    }
                }, [s("g", [s("g", [s("path", {
                    attrs: {
                        d: "M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.6380E160F7AED"
                    }
                })])])])
            },
            w = [],
            y = (s("3f6f"), {}),
            k = Object(p["a"])(y, _, w, !1, null, "d187c184", null),
            x = k.exports,
            C = s("4dbf"),
            q = s.n(C),
            z = s("ede0"),
            A = s.n(z),
            S = s("741a"),
            I = s.n(S),
            O = s("c54a"),
            $ = s.n(O),
            D = {
                components: {
                    DownArrowIcon: x,
                    LockIcon: b
                },
                props: {
                    bonus: Object,
                    isLocked: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        images: {
                            catalog: q.a,
                            price: A.a
                        }
                    }
                },
                computed: {
                    templates: function() {
                        return ["catalog", "price"]
                    },
                    type: function() {
                        var t = r()(this.bonus, "image.id");
                        return h()(this.templates, t) || (t = "custom"), t
                    },
                    text: function() {
                        return this.bonus.name ? this.bonus.name : "catalog" === this.type ? this.$t("Каталог") : "price" === this.type ? this.$t("Прайс-лист") : ""
                    },
                    imageUrl: function() {
                        if ("custom" === this.type) {
                            var t = r()(this.bonus, "image", {});
                            return I()(t.name, {
                                cloud_name: "hgwipn3sa",
                                source: "cloudinary" === t.provider ? "upload" : "fetch",
                                secure: "https:" === window.location.protocol,
                                width: 250,
                                dpr: $()() ? "2.0" : "1.0",
                                fetch_format: "auto"
                            })
                        }
                        return this.images[this.type]
                    }
                },
                methods: {
                    download: function() {
                        this.isLocked || this.bonus.link && (this.bonus.link.match(/^(http|https):\/\//) ? window.open(this.bonus.link, "_blank") : window.open("//".concat(this.bonus.link), "_blank"))
                    }
                }
            },
            L = D,
            R = (s("5967"), Object(p["a"])(L, u, l, !1, null, null, null)),
            E = R.exports,
            F = {
                components: {
                    Bonus: E
                },
                props: {
                    direction: {
                        type: String,
                        default: "column"
                    },
                    height: {
                        type: Number,
                        default: 64
                    }
                },
                computed: Object(a["a"])({}, Object(c["d"])("quiz", {
                    bonuses: function(t) {
                        return r()(t, "info.marketing.bonuses", [])
                    }
                }), Object(c["d"])("quiz", ["isResultShow"]), Object(c["c"])("quiz", ["resultsPosition"]), Object(c["d"])("form", ["isStep2", "isThanksPage"])),
                methods: {
                    isLock: function(t) {
                        return (!this.isResultShow || "afterForm" !== this.resultsPosition) && (!this.isThanksPage && (!this.isThanksPage && !this.isStep2 || this.isStep2 && "finish" === t.step))
                    }
                }
            },
            T = F,
            j = (s("6629"), Object(p["a"])(T, n, i, !1, null, null, null));
        e["a"] = j.exports
    },
    e0d4: function(t, e, s) {},
    e1d3: function(t, e, s) {
        "use strict";
        var n = s("b9a3"),
            i = s.n(n);
        i.a
    },
    e720: function(t, e, s) {
        "use strict";
        var n = s("0378"),
            i = s.n(n);
        i.a
    },
    e7f0: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEVBhAUUjb3DwAABwdJREFUSMd9lmuMXVUVx39r7/O4r5l7p52hj2mgtYh9MDYQ7BdjUrQKptRHKtG2FhRCiCYYhUDBRPhgxKoQGgwKxkBBWlFIa4WaSBopbVFIBvqQUFJbagc7Q9uZdjpz75177zl7Lz/ce2kLna5v56x19n+v/1rrf5ZwEfvNF55gtJxijCCGvHesAb4DXNEKOQQ8bQxPO0/ZeyWfMfxo5/cmPVMmczy+5HFGag4jghGKzvOANMEygG+FGaCu8AeBB1Q57VXJZQx3TgJqL/Ry3epNVMsJYg3Wa9F5fiZwKxAAek6oAoHAVQrTxPCaiNTqibJsznJeHtj2sbPNx8BWbQRVTD7EBFJ0ngcFbm6xoRe4nwIisFqVX4iYLtEawxNn2DHvvotnuG7VxrMPubBIYH9MJfkuStACbMcnLVptM+t2ZbRP1c1w2tg9K6nVgrTO6p7P8cfh3R+v4bqVG8+taBFYi3KdDpYvpeYKCO8BOxHeFDgGeIXpKItcWlni3cRC1IWq3nf4dMOiurunbORUihJLwA0HHjwLeF5mUALWAl8CnI7UsozWXjRWnizk7XujY84b0yRSVdlU/j7ftGtneewqhTtAZpW8JrNTv0HhXoVTHiWD5YZ3f458CKaAUALuBb7Yomxcna4v7Dj6YuUTXRoGlqHR/ag2SykCMwufpFI9yeBEhemZ/LUeHi2oLpyb+Algk8BahVOghGKxS/tWtMk9F8y16vQIlXSr685zfGQPJyuD5IIoSNWXgJwV44aqH7iUhMuy3dRd+l+MHAiUz0/xWjCwUGGGwG6QCYf/sEtLwH0tsLTVDC8DL0pnxMmhflKfMVbk2rGk/vu6T//e8OnLVZc8G4j5Wig2fL9+nI5MjuVDIztyyqOtS4vAtxR+KTDFINilfSsKwN3AdS0wAcaAh4ATEwd2sfKqubJ38MQtHn4bSvDZ2MQzQwlnCLLQ4ZfVfSodUfyvsbTss3GRLmVAmpefBqhAn0K3RXYZ4Ebg+hZYe1TeAf4DQtUpz+459JlMYO6fGhamlmyn7zB5X7B5X7Kdvmg7OwIJ7hlv1JadrlXpJuAV98Ex4NVzp0BglUdvNcDyC4jBQSBxx95h6O1xDOYbJZufXgoztYyVBIFW3xCZyHfaQofFru7JZaNX4jJLzCUI7GvR2m7JCFhjgF7OamPbOQwwPjZC15VxJm+yC2ITKSixJc0F1APT/EZVCSUgb3NzqklSqKQNBAHkOJBoK8vI69iUJI2DC0gVqt5YE5IzERkTalbidm0BCARvA+qpx6YemyomInJF26kiICko3lglCVUrWefPZL0vG1QNMMD5miqJq/fOKn4a290FjbBukH49q6O2iYkNDWQDGvmQRiGU/dPjrrHuqIPeWkrOVbt7kmRwapK8n/duTFBRGDLAlo9Q6pxP5r96+He546GjGMeIyJ9R3gWMwj5tNsRO4HUgERgMhA0TruxMepAfzH/dJCR9VtWBiCICosCWNuDWtjAL4oB5maC4yKbww8wCqo3GQYS1quwX+CnoV4Gvi8jNLfD7r+ie8VocxUR1w5qB2XNRrpYWuaAWeAnkebu0b0UKvAV0A/OacyNxI6lMNdXyK/9IB5OZQYFKkhwOrNl5JqgM53zmhAhJFNiyV301DsN/nqyWKY4fRY2YyMkdPS57daw2BbHA30AeBiptaUuAfmAqMN+YIHX16lx34ng4M9E3BtOyHuo9xq9uf2IkPNRpj+ZO1PZ2vKcLKpeqVx1PsZQqRxkdHSeKwhs7fXRLj8u2FEu2NUVExgHs0itXtPvvHFCZH2IlHT153ZhPTGDM3vxoJrnmzUWMZqtFFQg1bLxbOMZjO55iZWk2iIRhFH47Unt3b1oIIrXaBNOHgPF2g9jtb29m+78389FMjZhPxePlnoarLUm9X2iQkbzPDB/sOl1vWDdl80vTzrzd2WBZcQGdEiNITlWv7HGZ4S4X71P0L8AzQLmZkbD4yPrzl6hz/ot54M7wf0fvcJXRjjE3YeuajInqnpK6/kDKlVFf3VerlbddHk33sVqMMaSp47bebbx+5CbMR/azxUfWtyXufFu3aiOIIS125fL7+3+SK5dvC1UbJqk18BNOSLziGGainoh/bKZ0PJOoq1gxRJHl8rFOjMqHQ7v4yCPnnX/BNXHdmj8x8+gAMwYGch0S3GXRr7TGhQRvnCipePtBUI0qJn0D4TmBt+JscMqlyk37nmIyu+CauH3/C9weLCS0Nsl6+lWYqrBAQQ2GAEOk1pdcnBhkTiLuyw4dLc0u7W2UE7YM7ZkU0EzmuP7wegoOvFAFHgZ5geYUWwVRFEHsJWm2OqfR+VzGB8/XD4zrNXct4WIWXNR7dg2tAutBDrdU5rLW+/cV/pr34dYOH06csQ32/HrXRU/8PzhfOSNpOeLlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTIxVDA2OjE2OjIwKzAwOjAwV/TrJgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0yMVQwNjoxNjoyMCswMDowMCapU5oAAAAASUVORK5CYII="
    },
    ede0: function(t, e, s) {
        t.exports = s.p + "img/price.f1900f4f.png"
    },
    f1ad: function(t, e, s) {
        "use strict";
        var n = s("2c90"),
            i = s.n(n);
        i.a
    },
    f809: function(t, e, s) {},
    fb21: function(t, e, s) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "price-label"
                }, [t.oldPrice ? s("div", {
                    staticClass: "price-label__old"
                }, [t._v(t._s(t.priceLabel(t.oldPrice)))]) : t._e(), s("div", {
                    staticClass: "price-label__container"
                }, [s("div", {
                    staticClass: "price-label__number"
                }, [t._v(t._s(t.priceLabel(t.totalPrice)))]), t.oldPrice ? s("DiscountLabel", {
                    staticClass: "price-label__discount"
                }, [t._v("-" + t._s(t.$format.number(t.discount)) + " " + t._s(t.discountCurrencySymbol))]) : t._e()], 1)])
            },
            i = [],
            a = s("cebc"),
            o = s("9b02"),
            r = s.n(o),
            c = s("2f62"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "discount-label"
                }, [s("span", [t._t("default", [t._v(t._s(t.value))])], 2)])
            },
            l = [],
            d = (s("c5f6"), {
                props: {
                    value: [String, Number]
                }
            }),
            h = d,
            f = (s("8b38"), s("2877")),
            m = Object(f["a"])(h, u, l, !1, null, null, null),
            p = m.exports,
            g = {
                components: {
                    DiscountLabel: p
                },
                props: {
                    result: Object
                },
                computed: Object(a["a"])({}, Object(c["d"])("quiz", {
                    discount: function(t) {
                        return t.fixedDiscount
                    }
                }), Object(c["c"])("quiz", ["currencySymbol", "discountCurrencySymbol", "isIncreasingPercentDiscount"]), {
                    oldPrice: function() {
                        return this.discount ? this.result.cost : null
                    },
                    totalPrice: function() {
                        var t = this.result.cost;
                        return this.discount ? this.isIncreasingPercentDiscount ? t - t * this.discount / 100 : t - this.discount : t
                    }
                }),
                methods: {
                    priceLabel: function(t) {
                        if (!t) return "";
                        var e = r()(this.result, "costType", "exact"),
                            s = {
                                cost: this.$format.number(t),
                                currency: this.currencySymbol
                            };
                        return "exact" === e ? this.$t("{cost} {currency}", s) : "up" === e ? this.$t("до {cost} {currency}", s) : "from" === e ? this.$t("от {cost} {currency}", s) : void 0
                    }
                }
            },
            v = g,
            b = (s("e1d3"), Object(f["a"])(v, n, i, !1, null, null, null));
        e["a"] = b.exports
    },
    fbb3: function(t, e, s) {
        "use strict";
        var n = s("afb2"),
            i = s.n(n);
        i.a
    },
    fe34: function(t, e, s) {}
});