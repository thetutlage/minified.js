!/^u/.test(typeof define) && define.b || function(a) {
    var b = this.require = function(b) {
        return a[b]
    };
    this.define = function(c, d) {
        a[c] = a[c] || d(b)
    }
}({}), module.exports = (function() {
    function a(a) {
        return a.substr(0, 3)
    }

    function b(a) {
        return a != Fa ? "" + a : ""
    }

    function c(a) {
        return "string" == typeof a
    }

    function d(a) {
        return !!a && "object" == typeof a
    }

    function e(a) {
        return a && a.nodeType
    }

    function f(a) {
        return "number" == typeof a
    }

    function g(a) {
        return d(a) && !!a.getDay
    }

    function h(a) {
        return !0 === a || !1 === a
    }

    function i(a) {
        var b = typeof a;
        return "object" == b ? !(!a || !a.getDay) : "string" == b || "number" == b || h(a)
    }

    function j(a) {
        return a
    }

    function k(a) {
        return a + 1
    }

    function l(a, c, d) {
        return b(a).replace(c, d != Fa ? d : "")
    }

    function m(a) {
        return l(a, /[\\\[\]\/{}()*+?.$|^-]/g, "\\$&")
    }

    function n(a) {
        return l(a, /^\s+|\s+$/g)
    }

    function o(a, b, c) {
        for (var d in a) a.hasOwnProperty(d) && b.call(c || a, d, a[d]);
        return a
    }

    function p(a, b, c) {
        if (a)
            for (var d = 0; d < a.length; d++) b.call(c || a, a[d], d);
        return a
    }

    function q(a, b, c) {
        var d = [],
            e = ea(b) ? b : function(a) {
                return b != a
            };
        return p(a, function(b, f) {
            e.call(c || a, b, f) && d.push(b)
        }), d
    }

    function r(a, b, c, d) {
        var e = [];
        return a(b, function(a, f) {
            fa(a = c.call(d || b, a, f)) ? p(a, function(a) {
                e.push(a)
            }) : a != Fa && e.push(a)
        }), e
    }

    function s(a, b, c) {
        return r(p, a, b, c)
    }

    function t(a) {
        var b = 0;
        return o(a, function() {
            b++
        }), b
    }

    function u(a) {
        var b = [];
        return o(a, function(a) {
            b.push(a)
        }), b
    }

    function v(a, b, c) {
        var d = [];
        return p(a, function(e, f) {
            d.push(b.call(c || a, e, f))
        }), d
    }

    function w(a, b) {
        if (fa(a)) {
            var c = wa(b);
            return M(G(a, 0, c.length), c)
        }
        return b != Fa && a.substr(0, b.length) == b
    }

    function x(a, b) {
        if (fa(a)) {
            var c = wa(b);
            return M(G(a, -c.length), c) || !c.length
        }
        return b != Fa && a.substr(a.length - b.length) == b
    }

    function y(a) {
        var b = a.length;
        return fa(a) ? new va(v(a, function() {
            return a[--b]
        })) : l(a, /[\s\S]/g, function() {
            return a.charAt(--b)
        })
    }

    function z(a, b) {
        var c = {};
        return p(a, function(a) {
            c[a] = b
        }), c
    }

    function A(a, b) {
        var c, d = b || {};
        for (c in a) d[c] = a[c];
        return d
    }

    function B(a, b) {
        for (var c = b, d = 0; d < a.length; d++) c = A(a[d], c);
        return c
    }

    function C(a) {
        return ea(a) ? a : function(b, c) {
            return a === b ? c : void 0
        }
    }

    function D(a, b, c) {
        return b == Fa ? c : 0 > b ? Math.max(a.length + b, 0) : Math.min(a.length, b)
    }

    function E(a, b, c, d) {
        b = C(b), d = D(a, d, a.length);
        for (var e = D(a, c, 0); d > e; e++)
            if ((c = b.call(a, a[e], e)) != Fa) return c
    }

    function F(a, b, c, d) {
        b = C(b), d = D(a, d, -1);
        for (var e = D(a, c, a.length - 1); e > d; e--)
            if ((c = b.call(a, a[e], e)) != Fa) return c
    }

    function G(a, b, c) {
        var d = [];
        if (a)
            for (c = D(a, c, a.length), b = D(a, b, 0); c > b; b++) d.push(a[b]);
        return d
    }

    function H(a) {
        return v(a, j)
    }

    function I(a) {
        return function() {
            return new va(O(a, arguments))
        }
    }

    function J(a) {
        var b = {};
        return q(a, function(a) {
            return b[a] ? !1 : b[a] = 1
        })
    }

    function K(a, b) {
        var c = z(b, 1);
        return q(a, function(a) {
            var b = c[a];
            return c[a] = 0, b
        })
    }

    function L(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function M(a, b) {
        var c, d = ea(a) ? a() : a,
            e = ea(b) ? b() : b;
        return d == e ? !0 : d == Fa || e == Fa ? !1 : i(d) || i(e) ? g(d) && g(e) && +d == +e : fa(d) ? d.length == e.length && !E(d, function(a, b) {
            return M(a, e[b]) ? void 0 : !0
        }) : !fa(e) && (c = u(d)).length == t(e) && !E(c, function(a) {
            return M(d[a], e[a]) ? void 0 : !0
        })
    }

    function N(a, b, c) {
        return ea(a) ? a.apply(c && b, v(c || b, j)) : void 0
    }

    function O(a, b, c) {
        return v(a, function(a) {
            return N(a, b, c)
        })
    }

    function P(a, b, c, d) {
        return function() {
            return N(a, b, s([c, arguments, d], j))
        }
    }

    function Q(a, b) {
        for (var c = 0 > b ? "-" : "", d = (c ? -b : b).toFixed(0); d.length < a;) d = "0" + d;
        return c + d
    }

    function R(a, b, c) {
        var d, e = 0,
            f = c ? b : y(b);
        return a = (c ? a : y(a)).replace(/./g, function(a) {
            return "0" == a ? (d = !1, f.charAt(e++) || "0") : "#" == a ? (d = !0, f.charAt(e++) || "") : d && !f.charAt(e) ? "" : a
        }), c ? a : b.substr(0, b.length - e) + y(a)
    }

    function S(a, b, c) {
        return b != Fa && a ? 60 * parseFloat(a[b] + a[b + 1]) + parseFloat(a[b] + a[b + 2]) + c.getTimezoneOffset() : 0
    }

    function T(a) {
        return new Date(+a)
    }

    function U(a, b, c) {
        return a["set" + b](a["get" + b]() + c), a
    }

    function V(a, b, c) {
        return c == Fa ? V(new Date, a, b) : U(T(a), b.charAt(0).toUpperCase() + b.substr(1), c)
    }

    function W(a, b, c) {
        var d = +b,
            e = +c,
            f = e - d;
        if (0 > f) return -W(a, c, b);
        if (b = {
                milliseconds: 1,
                seconds: 1e3,
                minutes: 6e4,
                hours: 36e5
            }[a]) return f / b;
        for (b = a.charAt(0).toUpperCase() + a.substr(1), a = Math.floor(f / {
                fullYear: 31536e6,
                month: 2628e6,
                date: 864e5
            }[a] - 2), d = U(new Date(d), b, a), f = a; 1.2 * a + 4 > f; f++)
            if (+U(d, b, 1) > e) return f
    }

    function X(a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }

    function Y(a) {
        return l(a, /[\x00-\x1f'"\u2028\u2029]/g, X)
    }

    function Z(a, b) {
        return a.split(b)
    }

    function $(a, b) {
        function c(a, c) {
            var d = [];
            return e.call(c || a, a, function(a, b) {
                fa(a) ? p(a, function(a, c) {
                    b.call(a, a, c)
                }) : o(a, function(a, c) {
                    b.call(c, a, c)
                })
            }, b || j, function() {
                N(d.push, d, arguments)
            }, wa), d.join("")
        }
        if (Ma[a]) return Ma[a];
        var d = "with(_.isObject(obj)?obj:{}){" + v(Z(a, /{{|}}}?/g), function(a, b) {
                var c, d = n(a),
                    e = l(d, /^{/),
                    d = d == e ? "esc(" : "";
                return b % 2 ? (c = /^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(e)) ? "each(" + (n(c[4]) ? c[4] : "this") + ", function(" + c[2] + "){" : (c = /^if\b(.*)/.exec(e)) ? "if(" + c[1] + "){" : (c = /^else\b\s*(if\b(.*))?/.exec(e)) ? "}else " + (c[1] ? "if(" + c[2] + ")" : "") + "{" : (c = /^\/(if)?/.exec(e)) ? c[1] ? "}\n" : "});\n" : (c = /^(var\s.*)/.exec(e)) ? c[1] + ";" : (c = /^#(.*)/.exec(e)) ? c[1] : (c = /(.*)::\s*(.*)/.exec(e)) ? "print(" + d + '_.formatValue("' + Y(c[2]) + '",' + (n(c[1]) ? c[1] : "this") + (d && ")") + "));\n" : "print(" + d + (n(e) ? e : "this") + (d && ")") + ");\n" : a ? 'print("' + Y(a) + '");\n' : void 0
            }).join("") + "}",
            e = Function("obj", "each", "esc", "print", "_", d);
        return 99 < Na.push(c) && delete Ma[Na.shift()], Ma[a] = c
    }

    function _(a) {
        return l(a, /[<>'"&]/g, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        })
    }

    function aa(a, b) {
        return $(a, _)(b)
    }

    function ba(a) {
        return function(b, c) {
            return new va(a(this, b, c))
        }
    }

    function ca(a) {
        return function(b, c, d) {
            return a(this, b, c, d)
        }
    }

    function da(a) {
        return function(b, c, d) {
            return new va(a(b, c, d))
        }
    }

    function ea(a) {
        return "function" == typeof a && !a.item
    }

    function fa(a) {
        return a && a.length != Fa && !c(a) && !e(a) && !ea(a) && a !== ya
    }

    function ga(a) {
        return parseFloat(l(a, /^[^\d-]+/))
    }

    function ha(a) {
        return a.Nia = a.Nia || ++Ba
    }

    function ia(a, b) {
        var c, d = [],
            e = {};
        return sa(a, function(a) {
            sa(b(a), function(a) {
                e[c = ha(a)] || (d.push(a), e[c] = !0)
            })
        }), d
    }

    function ja(a, b) {
        var c = {
                $position: "absolute",
                $visibility: "hidden",
                $display: "block",
                $height: Fa
            },
            d = a.get(c),
            c = a.set(c).get("clientHeight");
        return a.set(d), c * b + "px"
    }

    function ka(a) {
        Ca ? Ca.push(a) : setTimeout(a, 0)
    }

    function la(a, b, c) {
        return pa(a, b, c)[0]
    }

    function ma(a, b, c) {
        return a = oa(document.createElement(a)), fa(b) || b != Fa && !d(b) ? a.add(b) : a.set(b).add(c)
    }

    function na(a) {
        return r(sa, a, function(a) {
            return fa(a) ? na(a) : (e(a) && (a = a.cloneNode(!0), a.removeAttribute && a.removeAttribute("id")), a)
        })
    }

    function oa(a, b, c) {
        return ea(a) ? ka(a) : new va(pa(a, b, c))
    }

    function pa(a, b, d) {
        function f(a) {
            return fa(a) ? r(sa, a, f) : a
        }

        function g(a) {
            return q(r(sa, a, f), function(a) {
                for (; a = a.parentNode;)
                    if (a == b[0] || d) return a == b[0]
            })
        }
        return b ? 1 != (b = pa(b)).length ? ia(b, function(b) {
            return pa(a, b, d)
        }) : c(a) ? 1 != e(b[0]) ? [] : d ? g(b[0].querySelectorAll(a)) : b[0].querySelectorAll(a) : g(a) : c(a) ? document.querySelectorAll(a) : r(sa, a, f)
    }

    function qa(a, b) {
        function d(a, b) {
            var c = RegExp("(^|\\s+)" + a + "(?=$|\\s)", "i");
            return function(d) {
                return a ? c.test(d[b]) : !0
            }
        }
        var g, h, i = {},
            j = i;
        return ea(a) ? a : f(a) ? function(b, c) {
            return c == a
        } : !a || "*" == a || c(a) && (j = /^([\w-]*)\.?([\w-]*)$/.exec(a)) ? (g = d(j[1], "tagName"), h = d(j[2], "className"), function(a) {
            return 1 == e(a) && g(a) && h(a)
        }) : b ? function(c) {
            return oa(a, b).find(c) != Fa
        } : (oa(a).each(function(a) {
            i[ha(a)] = !0
        }), function(a) {
            return i[ha(a)]
        })
    }

    function ra(a) {
        var b = qa(a);
        return function(a) {
            return b(a) ? Fa : !0
        }
    }

    function sa(a, b) {
        return fa(a) ? p(a, b) : a != Fa && b(a, 0), a
    }

    function ta() {
        this.state = null, this.values = [], this.parent = null
    }

    function ua() {
        var a, b, c = [],
            e = arguments,
            f = e.length,
            g = 0,
            h = 0,
            i = new ta;
        return i.errHandled = function() {
            h++, i.parent && i.parent.errHandled()
        }, a = i.fire = function(a, b) {
            return null == i.state && null != a && (i.state = !!a, i.values = fa(b) ? b : [b], setTimeout(function() {
                p(c, function(a) {
                    a()
                })
            }, 0)), i
        }, p(e, function j(b, c) {
            try {
                b.then ? b.then(function(b) {
                    (d(b) || ea(b)) && ea(b.then) ? j(b, c) : (i.values[c] = H(arguments), ++g == f && a(!0, 2 > f ? i.values[c] : i.values))
                }, function() {
                    i.values[c] = H(arguments), a(!1, 2 > f ? i.values[c] : [i.values[c][0], i.values, c])
                }) : b(function() {
                    a(!0, H(arguments))
                }, function() {
                    a(!1, H(arguments))
                })
            } catch (e) {
                a(!1, [e, i.values, c])
            }
        }), i.stop = function() {
            return p(e, function(a) {
                a.stop && a.stop()
            }), i.stop0 && N(i.stop0)
        }, b = i.then = function(a, b) {
            function e() {
                try {
                    var c = i.state ? a : b;
                    ea(c) ? function g(a) {
                        try {
                            var b, c = 0;
                            if ((d(a) || ea(a)) && ea(b = a.then)) {
                                if (a === f) throw new TypeError;
                                b.call(a, function(a) {
                                    c++ || g(a)
                                }, function(a) {
                                    c++ || f.fire(!1, [a])
                                }), f.stop0 = a.stop
                            } else f.fire(!0, [a])
                        } catch (e) {
                            if (!c++ && (f.fire(!1, [e]), !h)) throw e
                        }
                    }(N(c, xa, i.values)) : f.fire(i.state, i.values)
                } catch (e) {
                    if (f.fire(!1, [e]), !h) throw e
                }
            }
            var f = ua();
            return ea(b) && i.errHandled(), f.stop0 = i.stop, f.parent = i, null != i.state ? setTimeout(e, 0) : c.push(e), f
        }, i.always = function(a) {
            return b(a, a)
        }, i["catch"] = i.error = function(a) {
            return b(0, a)
        }, i
    }

    function va(a, b) {
        var c, d, e, f, g, h = 0;
        if (a)
            for (c = 0, d = a.length; d > c; c++)
                if (e = a[c], b && fa(e))
                    for (f = 0, g = e.length; g > f; f++) this[h++] = e[f];
                else this[h++] = e;
        else this[h++] = b;
        this.length = h, this._ = !0
    }

    function wa() {
        return new va(arguments, !0)
    }
    var xa, ya = window,
        za = {},
        Aa = {},
        Ba = 1,
        Ca = /^[ic]/.test(document.readyState) ? Fa : [],
        Da = {},
        Ea = 0,
        Fa = null,
        Ga = Z("January,February,March,April,May,June,July,August,September,October,November,December", /,/g),
        Ha = v(Ga, a),
        Ia = Z("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", /,/g),
        Ja = v(Ia, a),
        Ka = {
            y: ["FullYear", j],
            Y: ["FullYear", function(a) {
                return a % 100
            }],
            M: ["Month", k],
            n: ["Month", Ha],
            N: ["Month", Ga],
            d: ["Date", j],
            m: ["Minutes", j],
            H: ["Hours", j],
            h: ["Hours", function(a) {
                return a % 12 || 12
            }],
            k: ["Hours", k],
            K: ["Hours", function(a) {
                return a % 12
            }],
            s: ["Seconds", j],
            S: ["Milliseconds", j],
            a: ["Hours", Z("am,am,am,am,am,am,am,am,am,am,am,am,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm", /,/g)],
            w: ["Day", Ja],
            W: ["Day", Ia],
            z: ["TimezoneOffset", function(a, b, c) {
                return c ? c : (b = 0 > a ? -a : a, (a > 0 ? "-" : "+") + Q(2, Math.floor(b / 60)) + Q(2, b % 60))
            }]
        },
        La = {
            y: 0,
            Y: [0, -2e3],
            M: [1, 1],
            n: [1, Ha],
            N: [1, Ga],
            d: 2,
            m: 4,
            H: 3,
            h: 3,
            K: [3, 1],
            k: [3, 1],
            s: 5,
            S: 6,
            a: [3, Z("am,pm", /,/g)]
        },
        Ma = {},
        Na = [];
    return A({
        each: ca(p),
        filter: ba(q),
        collect: ba(s),
        map: ba(v),
        toObject: ca(z),
        equals: ca(M),
        sub: ba(G),
        reverse: ca(y),
        find: ca(E),
        findLast: ca(F),
        startsWith: ca(w),
        endsWith: ca(x),
        contains: ca(L),
        call: ba(O),
        array: ca(H),
        unite: ca(I),
        merge: ca(B),
        uniq: ba(J),
        intersection: ba(K),
        join: function(a) {
            return v(this, j).join(a)
        },
        reduce: function(a, b) {
            return p(this, function(c, d) {
                b = a.call(this, b, c, d)
            }), b
        },
        sort: function(a) {
            return new va(v(this, j).sort(a))
        },
        remove: function() {
            sa(this, function(a) {
                a.parentNode.removeChild(a)
            })
        },
        text: function() {
            return r(sa, this, function(a) {
                return a.textContent
            }).join("")
        },
        trav: function(a, b, c) {
            var d = f(b),
                e = qa(d ? Fa : b),
                g = d ? b : c;
            return new va(ia(this, function(b) {
                for (var c = [];
                    (b = b[a]) && c.length != g;) e(b) && c.push(b);
                return c
            }))
        },
        next: function(a, b) {
            return this.trav("nextSibling", a, b || 1)
        },
        up: function(a, b) {
            return this.trav("parentNode", a, b || 1)
        },
        select: function(a, b) {
            return oa(a, this, b)
        },
        is: function(a) {
            return !this.find(ra(a))
        },
        only: function(a) {
            return new va(q(this, qa(a)))
        },
        not: function(a) {
            return new va(q(this, ra(a)))
        },
        get: function(a, b) {
            var d, e, f, g, h = this,
                i = h[0];
            return i ? c(a) ? (d = /^(\W*)(.*)/.exec(l(a, /^%/, "@data-")), e = d[1], f = Aa[e] ? Aa[e](this, d[2]) : "$" == a ? h.get("className") : "$$" == a ? h.get("@style") : "$$slide" == a ? h.get("$height") : "$$fade" == a || "$$show" == a ? "hidden" == h.get("$visibility") || "none" == h.get("$display") ? 0 : "$$fade" == a ? isNaN(h.get("$opacity", !0)) ? 1 : h.get("$opacity", !0) : 1 : "$" == e ? ya.getComputedStyle(i, Fa).getPropertyValue(l(d[2], /[A-Z]/g, function(a) {
                return "-" + a.toLowerCase()
            })) : "@" == e ? i.getAttribute(d[2]) : i[d[2]], b ? ga(f) : f) : (g = {}, (fa(a) ? sa : o)(a, function(a) {
                g[a] = h.get(a, b)
            }), g) : void 0
        },
        set: function(a, b) {
            var d, e, f = this;
            return b !== xa ? (d = /^(\W*)(.*)/.exec(l(l(a, /^\$float$/, "cssFloat"), /^%/, "@data-")), e = d[1], za[e] ? za[e](this, d[2], b) : "$$fade" == a ? this.set({
                $visibility: b ? "visible" : "hidden",
                $opacity: b
            }) : "$$slide" == a ? f.set({
                $visibility: b ? "visible" : "hidden",
                $overflow: "hidden",
                $height: /px/.test(b) ? b : function(a, c, d) {
                    return ja(oa(d), b)
                }
            }) : "$$show" == a ? b ? f.set({
                $visibility: b ? "visible" : "hidden",
                $display: ""
            }).set({
                $display: function(a) {
                    return "none" == a ? "block" : a
                }
            }) : f.set({
                $display: "none"
            }) : "$$" == a ? f.set("@style", b) : sa(this, function(c, f) {
                var g = ea(b) ? b(oa(c).get(a), f, c) : b;
                "$" == e ? d[2] ? c.style[d[2]] = g : sa(g && g.split(/\s+/), function(a) {
                    var b = l(a, /^[+-]/),
                        d = c.className || "",
                        e = l(d, RegExp("(^|\\s+)" + b + "(?=$|\\s)"));
                    (/^\+/.test(a) || b == a && d == e) && (e += " " + b), c.className = n(e)
                }) : "$$scrollX" == a ? c.scroll(g, oa(c).get("$$scrollY")) : "$$scrollY" == a ? c.scroll(oa(c).get("$$scrollX"), g) : "@" == e ? g == Fa ? c.removeAttribute(d[2]) : c.setAttribute(d[2], g) : c[d[2]] = g
            })) : c(a) || ea(a) ? f.set("$", a) : o(a, function(a, b) {
                f.set(a, b)
            }), f
        },
        show: function() {
            return this.set("$$show", 1)
        },
        hide: function() {
            return this.set("$$show", 0)
        },
        add: function(a, b) {
            return this.each(function(c, d) {
                function f(a) {
                    fa(a) ? sa(a, f) : ea(a) ? f(a(c, d)) : a != Fa && (a = e(a) ? a : document.createTextNode(a), g ? g.parentNode.insertBefore(a, g.nextSibling) : b ? b(a, c, c.parentNode) : c.appendChild(a), g = a)
                }
                var g;
                f(d && !ea(a) ? na(a) : a)
            })
        },
        fill: function(a) {
            return this.each(function(a) {
                oa(a.childNodes).remove()
            }).add(a)
        },
        addAfter: function(a) {
            return this.add(a, function(a, b, c) {
                c.insertBefore(a, b.nextSibling)
            })
        },
        addBefore: function(a) {
            return this.add(a, function(a, b, c) {
                c.insertBefore(a, b)
            })
        },
        addFront: function(a) {
            return this.add(a, function(a, b) {
                b.insertBefore(a, b.firstChild)
            })
        },
        replace: function(a) {
            return this.add(a, function(a, b, c) {
                c.replaceChild(a, b)
            })
        },
        clone: ba(na),
        animate: function(a, b, c) {
            var d, e = ua(),
                f = this,
                g = r(sa, this, function(b, d) {
                    var e, f = oa(b),
                        g = {};
                    return o(e = f.get(a), function(c, e) {
                        var h = a[c];
                        g[c] = ea(h) ? h(e, d, b) : "$$slide" == c ? ja(f, h) : h
                    }), f.dial(e, g, c)
                }),
                h = b || 500;
            return e.stop0 = function() {
                return e.fire(!1), d()
            }, d = oa.loop(function(a) {
                O(g, [a / h]), a >= h && (d(), e.fire(!0, [f]))
            }), e
        },
        dial: function(a, c, d) {
            function e(a, b) {
                return /^#/.test(a) ? parseInt(6 < a.length ? a.substr(2 * b + 1, 2) : (a = a.charAt(b + 1)) + a, 16) : ga(a.split(",")[b])
            }
            var f = this,
                g = d || 0,
                h = ea(g) ? g : function(a, b, c) {
                    return c * (b - a) * (g + (1 - g) * c * (3 - 2 * c)) + a
                };
            return function(d) {
                o(a, function(a, g) {
                    var i = c[a],
                        j = 0;
                    f.set(a, 0 >= d ? g : d >= 1 ? i : /^#|rgb\(/.test(i) ? "rgb(" + Math.round(h(e(g, j), e(i, j++), d)) + "," + Math.round(h(e(g, j), e(i, j++), d)) + "," + Math.round(h(e(g, j), e(i, j++), d)) + ")" : l(i, /-?[\d.]+/, b(h(ga(g), ga(i), d))))
                })
            }
        },
        toggle: function(a, b, c, d) {
            var e, f, g = this,
                h = !1;
            return b ? (g.set(a), function(i) {
                i !== h && (f = (h = !0 === i || !1 === i ? i : !h) ? b : a, c ? (e = g.animate(f, e ? e.stop() : c, d)).then(function() {
                    e = Fa
                }) : g.set(f))
            }) : g.toggle(l(a, /\b(?=\w)/g, "-"), l(a, /\b(?=\w)/g, "+"))
        },
        values: function(a) {
            var c = a || {};
            return this.each(function(a) {
                var d = a.name || a.id,
                    e = b(a.value);
                if (/form/i.test(a.tagName))
                    for (d = 0; d < a.elements.length; d++) oa(a.elements[d]).values(c);
                else !d || /ox|io/i.test(a.type) && !a.checked || (c[d] = c[d] == Fa ? e : r(sa, [c[d], e], j))
            }), c
        },
        offset: function() {
            for (var a = this[0], b = {
                    x: 0,
                    y: 0
                }; a;) b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent;
            return b
        },
        on: function(a, d, e, f, g) {
            return ea(d) ? this.on(Fa, a, d, e, f) : c(f) ? this.on(a, d, e, Fa, f) : this.each(function(c, h) {
                sa(a ? pa(a, c) : c, function(a) {
                    sa(b(d).split(/\s/), function(b) {
                        function c(b, c, d) {
                            var j, l = !g;
                            if (d = g ? d : a, g)
                                for (j = qa(g, a); d && d != a && !(l = j(d));) d = d.parentNode;
                            return !l || i != b || e.apply(oa(d), f || [c, h]) && "?" == k || "|" == k
                        }

                        function d(a) {
                            c(i, a, a.target) || (a.preventDefault(), a.stopPropagation())
                        }
                        var i = l(b, /[?|]/g),
                            k = l(b, /[^?|]/g),
                            m = ("blur" == i || "focus" == i) && !!g,
                            n = Ba++;
                        a.addEventListener(i, d, m), a.M || (a.M = {}), a.M[n] = c, e.M = r(sa, [e.M, function() {
                            a.removeEventListener(i, d, m), delete a.M[n]
                        }], j)
                    })
                })
            })
        },
        onOver: function(a, b) {
            var c = this,
                d = [];
            return ea(b) ? this.on(a, "|mouseover |mouseout", function(a, e) {
                var f = a.relatedTarget || a.toElement,
                    g = "mouseout" != a.type;
                d[e] === g || !g && f && (f == c[e] || oa(f).up(c[e]).length) || (d[e] = g, b.call(this, g, a))
            }) : this.onOver(Fa, a)
        },
        onFocus: function(a, b, c) {
            return ea(b) ? this.on(a, "|blur", b, [!1], c).on(a, "|focus", b, [!0], c) : this.onFocus(Fa, a, b)
        },
        onChange: function(a, b, c) {
            return ea(b) ? this.on(a, "|input |change |click", function(a, c) {
                var d = this[0],
                    e = /ox|io/i.test(d.type) ? d.checked : d.value;
                d.NiaP != e && b.call(this, d.NiaP = e, c)
            }, c) : this.onChange(Fa, a, b)
        },
        onClick: function(a, b, c, d) {
            return ea(b) ? this.on(a, "click", b, c, d) : this.onClick(Fa, a, b, c)
        },
        trigger: function(a, b) {
            return this.each(function(c) {
                for (var d = !0, e = c; e && d;) o(e.M, function(e, f) {
                    d = d && f(a, b, c)
                }), e = e.parentNode
            })
        },
        per: function(a, b) {
            if (ea(a))
                for (var c = this.length, d = 0; c > d; d++) a.call(this, new va(Fa, this[d]), d);
            else oa(a, this).per(b);
            return this
        },
        ht: function(a, b) {
            var c = 2 < arguments.length ? B(G(arguments, 1)) : b;
            return this.set("innerHTML", ea(a) ? a(c) : /{{/.test(a) ? aa(a, c) : /^#\S+$/.test(a) ? aa(la(a).text, c) : a)
        }
    }, va.prototype), A({
        request: function(a, c, d, e) {
            e = e || {};
            var f, g = 0,
                h = ua(),
                i = d && d.constructor == e.constructor,
                j = /post|put/i.test(a);
            try {
                h.xhr = f = new XMLHttpRequest, h.stop0 = function() {
                    f.abort()
                }, i && (d = r(o, d, function(a, b) {
                    return r(sa, b, function(b) {
                        return encodeURIComponent(a) + (b != Fa ? "=" + encodeURIComponent(b) : "")
                    })
                }).join("&")), d == Fa || j || (c += "?" + d, d = Fa), f.open(a, c, !0, e.user, e.pass), i && j && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o(e.headers, function(a, b) {
                    f.setRequestHeader(a, b)
                }), o(e.xhr, function(a, b) {
                    f[a] = b
                }), e.overrideMimeType && f.overrideMimeType(e.overrideMimeType), f.onreadystatechange = function() {
                    4 != f.readyState || g++ || (200 <= f.status && 300 > f.status ? h.fire(!0, [f.responseText, f]) : h.fire(!1, [f.status, f.responseText, f]))
                }, f.send(d)
            } catch (k) {
                g || h.fire(!1, [0, Fa, b(k)])
            }
            return h
        },
        toJSON: JSON.stringify,
        parseJSON: JSON.parse,
        ready: ka,
        loop: function(a) {
            function b(a) {
                o(Da, function(b, c) {
                    c(a)
                }), Ea && g(b)
            }

            function c() {
                return Da[f] && (delete Da[f], Ea--), e
            }
            var d, e = 0,
                f = Ba++,
                g = ya.requestAnimationFrame || function(a) {
                    setTimeout(function() {
                        a(+new Date)
                    }, 33)
                };
            return Da[f] = function(b) {
                d = d || b, a(e = b - d, c)
            }, Ea++ || g(b), c
        },
        off: function(a) {
            O(a.M), a.M = Fa
        },
        setCookie: function(a, b, c, e) {
            document.cookie = a + "=" + (e ? b : escape(b)) + (c ? "; expires=" + (d(c) ? c : new Date(+new Date + 864e5 * c)).toUTCString() : "")
        },
        getCookie: function(a, b) {
            var c, d = (c = RegExp("(^|;)\\s*" + a + "=([^;]*)").exec(document.cookie)) && c[2];
            return b ? d : d && unescape(d)
        },
        wait: function(a, b) {
            var c = ua(),
                d = setTimeout(function() {
                    c.fire(!0, b)
                }, a);
            return c.stop0 = function() {
                c.fire(!1), clearTimeout(d)
            }, c
        }
    }, oa), A({
        filter: da(q),
        collect: da(s),
        map: da(v),
        sub: da(G),
        reverse: y,
        each: p,
        toObject: z,
        find: E,
        findLast: F,
        contains: L,
        startsWith: w,
        endsWith: x,
        equals: M,
        call: da(O),
        array: H,
        unite: I,
        merge: B,
        uniq: da(J),
        intersection: da(K),
        keys: da(u),
        values: da(function(a, b) {
            var c = [];
            return b ? p(b, function(b) {
                c.push(a[b])
            }) : o(a, function(a, b) {
                c.push(b)
            }), c
        }),
        copyObj: A,
        extend: function(a) {
            return B(G(arguments, 1), a)
        },
        range: function(a, b) {
            for (var c = [], d = b == Fa ? a : b, e = b != Fa ? a : 0; d > e; e++) c.push(e);
            return new va(c)
        },
        bind: P,
        partial: function(a, b, c) {
            return P(a, this, b, c)
        },
        eachObj: o,
        mapObj: function(a, b, c) {
            var d = {};
            return o(a, function(e, f) {
                d[e] = b.call(c || a, e, f)
            }), d
        },
        filterObj: function(a, b, c) {
            var d = {};
            return o(a, function(e, f) {
                b.call(c || a, e, f) && (d[e] = f)
            }), d
        },
        isList: fa,
        isFunction: ea,
        isObject: d,
        isNumber: f,
        isBool: h,
        isDate: g,
        isValue: i,
        isString: c,
        toString: b,
        dateClone: T,
        dateAdd: V,
        dateDiff: W,
        dateMidnight: function(a) {
            return a = a || new Date, new Date(a.getFullYear(), a.getMonth(), a.getDate())
        },
        pad: Q,
        formatValue: function(a, d) {
            var e, h, i = l(a, /^\?/);
            return g(d) ? ((h = /^\[(([+-])(\d\d)(\d\d))\]\s*(.*)/.exec(i)) && (e = h[1], d = V(d, "minutes", S(h, 2, d)), i = h[5]), l(i, /(\w)(\1*)(?:\[([^\]]+)\])?/g, function(a, b, f, g) {
                return (b = Ka[b]) && (a = d["get" + b[0]](), g = g && g.split(","), a = fa(b[1]) ? (g || b[1])[a] : b[1](a, g, e), a == Fa || c(a) || (a = Q(f.length + 1, a))), a
            })) : E(i.split(/\s*\|\s*/), function(a) {
                var c, e;
                if (c = /^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)) {
                    if (a = d, e = +c[3], (isNaN(e) || !f(a)) && (a = a == Fa ? "null" : b(a), e = c[3]), c[1]) {
                        if (!c[2] && a == e || "<" == c[1] && a > e || ">" == c[1] && e > a) return Fa
                    } else if (a != e) return Fa;
                    c = c[4]
                } else c = a;
                return f(d) ? c.replace(/[0#](.*[0#])?/, function(a) {
                    var b, c = /^([^.]+)(\.)([^.]+)$/.exec(a) || /^([^,]+)(,)([^,]+)$/.exec(a),
                        e = 0 > d ? "-" : "",
                        f = /(\d+)(\.(\d+))?/.exec((e ? -d : d).toFixed(c ? c[3].length : 0));
                    return a = c ? c[1] : a, b = c ? R(c[3], l(f[3], /0+$/), !0) : "", (e ? "-" : "") + ("#" == a ? f[1] : R(a, f[1])) + (b.length ? c[2] : "") + b
                }) : c
            })
        },
        parseDate: function(a, b) {
            var c, d, e, f, g, h, i, j, k, o = {},
                p = 1,
                q = l(a, /^\?/);
            if (q != a && !n(b)) return Fa;
            if ((e = /^\[([+-])(\d\d)(\d\d)\]\s*(.*)/.exec(q)) && (c = e, q = e[4]), !(e = RegExp(q.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g, function(a, b, c, e) {
                    return /[dmhkyhs]/i.test(b) ? (o[p++] = b, a = c.length + 1, "(\\d" + (2 > a ? "+" : "{1," + a + "}") + ")") : "z" == b ? (d = p, p += 3, "([+-])(\\d\\d)(\\d\\d)") : /[Nna]/.test(b) ? (o[p++] = [b, e && e.split(",")], "([a-zA-Z\\u0080-\\u1fff]+)") : /w/i.test(b) ? "[a-zA-Z\\u0080-\\u1fff]+" : /\s/.test(b) ? "\\s+" : m(a)
                })).exec(b))) return xa;
            for (q = [0, 0, 0, 0, 0, 0, 0], f = 1; p > f; f++)
                if (g = e[f], h = o[f], fa(h)) {
                    if (i = h[0], j = La[i], k = j[0], h = E(h[1] || j[1], function(a, b) {
                            return w(g.toLowerCase(), a.toLowerCase()) ? b : void 0
                        }), h == Fa) return xa;
                    q[k] = "a" == i ? q[k] + 12 * h : h
                } else h && (i = parseFloat(g), j = La[h], fa(j) ? q[j[0]] += i - j[1] : q[j] += i);
            return q = new Date(q[0], q[1], q[2], q[3], q[4], q[5], q[6]), V(q, "minutes", -S(c, 1, q) - S(e, d, q))
        },
        parseNumber: function(a, b) {
            var c = l(a, /^\?/);
            return c == a || n(b) ? (c = /(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(c) ? "," : ".", c = parseFloat(l(l(l(b, "," == c ? /\./g : /,/g), c, "."), /^[^\d-]*(-?\d)/, "$1")), isNaN(c) ? xa : c) : Fa
        },
        trim: n,
        isEmpty: function(a, b) {
            return a == Fa || !a.length || b && /^\s*$/.test(a)
        },
        escapeRegExp: m,
        escapeHtml: _,
        format: function(a, b, c) {
            return $(a, c)(b)
        },
        template: $,
        formatHtml: aa,
        promise: ua
    }, wa), document.addEventListener("DOMContentLoaded", function() {
        O(Ca), Ca = Fa
    }, !1), {
        HTML: function() {
            var a = ma("div");
            return wa(N(a.ht, a, arguments)[0].childNodes)
        },
        _: wa,
        $: oa,
        $$: la,
        EE: ma,
        M: va,
        getter: Aa,
        setter: za
    }
})();
