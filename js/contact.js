"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [194], {
8504: function(e, s, i) {
    var l = i(4924),
        a = i(6042),
        c = i(9396),
        n = i(5893),
        d = i(9101),
        r = i(7294),
        t = function() {
            var e = (0, r.useState)({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                }),
                s = e[0],
                i = e[1],
                t = s.name,
                o = s.email,
                m = s.message,
                h = s.subject,
                x = (0, r.useState)(null),
                j = x[0],
                u = x[1],
                p = function(e) {
                    return i((0, c.Z)((0, a.Z)({}, s), (0, l.Z)({}, e.target.name, e.target.value)))
                },
                g = function(e) {
                    e.preventDefault(), 0 === t.length || 0 === o.length || 0 === m.length || 0 === h.length ? (u(!0), v()) : d.ZP.send("service_seruhwu", "template_21aw58z", s, "Q3pccdLZhU-mZT7tQ").then(function(e) {
                        u(!1), v(), i({
                            name: "",
                            email: "",
                            message: "",
                            subject: ""
                        })
                    }, function(e) {
                        console.log(e.text)
                    })
                },
                v = function() {
                    setTimeout(function() {
                        u(null)
                    }, 2e3)
                };
            return (0, n.jsx)("section", {
                id: "contactus",
                "data-nav-tooltip": "Contact Me",
                className: "pp-section pp-scrollable section dark-bg",
                children: (0, n.jsxs)("div", {
                    className: "container",
                    children: [(0, n.jsx)("div", {
                        className: "title",
                        children: (0, n.jsx)("h3", {
                            children: "Get in touch."
                        })
                    }), (0, n.jsxs)("div", {
                        className: "row",
                        children: [(0, n.jsx)("div", {
                            className: "col-lg-5 col-xl-4 m-15px-tb",
                            children: (0, n.jsxs)("div", {
                                className: "contact-info",
                                children: [(0, n.jsx)("h4", {
                                    children: "What’s your story? Get in touch"
                                }), (0, n.jsx)("p", {
                                    children: "Always available for freelancing if the right project comes along, Feel free to contact me."
                                }), (0, n.jsxs)("ul", {
                                    children: [(0, n.jsxs)("li", {
                                        className: "media",
                                        children: [(0, n.jsx)("i", {
                                            className: "ti-map"
                                        }), (0, n.jsx)("span", {
                                            className: "media-body",
                                            children: "123 Street Kigali City , Rwanda 4600762."
                                        })]
                                    }), (0, n.jsxs)("li", {
                                        className: "media",
                                        children: [(0, n.jsx)("i", {
                                            className: "ti-email"
                                        }), (0, n.jsx)("span", {
                                            className: "media-body",
                                            children: "gdushimimana6@gmail.com"
                                        })]
                                    }), (0, n.jsxs)("li", {
                                        className: "media",
                                        children: [(0, n.jsx)("i", {
                                            className: "ti-mobile"
                                        }), (0, n.jsx)("span", {
                                            className: "media-body",
                                            children: "+250784600762"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "col-lg-7 col-xl-8 m-15px-tb",
                            children: (0, n.jsxs)("div", {
                                className: "contact-form",
                                children: [(0, n.jsx)("h4", {
                                    children: "Say Something"
                                }), (0, n.jsx)("form", {
                                    id: "contact-form",
                                    onSubmit: function(e) {
                                        return g(e)
                                    },
                                    children: (0, n.jsxs)("div", {
                                        className: "row",
                                        children: [(0, n.jsx)("div", {
                                            className: "col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "form-group",
                                                children: (0, n.jsx)("input", {
                                                    name: "name",
                                                    onChange: function(e) {
                                                        return p(e)
                                                    },
                                                    value: t,
                                                    id: "name",
                                                    placeholder: "Name *",
                                                    className: "form-control ".concat(j ? t ? "" : "invalid" : ""),
                                                    type: "text"
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "form-group",
                                                children: (0, n.jsx)("input", {
                                                    name: "email",
                                                    onChange: function(e) {
                                                        return p(e)
                                                    },
                                                    value: o,
                                                    id: "email",
                                                    placeholder: "Email *",
                                                    className: "form-control ".concat(j ? o ? "" : "invalid" : ""),
                                                    type: "email"
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "col-12",
                                            children: (0, n.jsx)("div", {
                                                className: "form-group",
                                                children: (0, n.jsx)("input", {
                                                    name: "subject",
                                                    onChange: function(e) {
                                                        return p(e)
                                                    },
                                                    value: h,
                                                    id: "subject",
                                                    placeholder: "Subject *",
                                                    className: "form-control ".concat(j ? h ? "" : "invalid" : ""),
                                                    type: "text"
                                                })
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "col-md-12",
                                            children: (0, n.jsx)("div", {
                                                className: "form-group",
                                                children: (0, n.jsx)("textarea", {
                                                    name: "message",
                                                    onChange: function(e) {
                                                        return p(e)
                                                    },
                                                    value: m,
                                                    id: "message",
                                                    placeholder: "Your message *",
                                                    rows: 5,
                                                    className: "form-control ".concat(j ? m ? "" : "invalid" : "")
                                                })
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "col-md-12",
                                            children: [(0, n.jsx)("div", {
                                                className: "send",
                                                children: (0, n.jsx)("input", {
                                                    className: "px-btn px-btn-theme",
                                                    type: "submit",
                                                    value: "send message"
                                                })
                                            }), (0, n.jsx)("span", {
                                                id: "suce_message",
                                                className: "text-success",
                                                style: {
                                                    display: null !== j ? j ? "none" : "block" : "none"
                                                },
                                                children: "Message Sent Successfully"
                                            }), (0, n.jsx)("span", {
                                                id: "err_message",
                                                className: "text-danger",
                                                style: {
                                                    display: "none"
                                                },
                                                children: "Message Sending Failed"
                                            })]
                                        })]
                                    })
                                })]
                            })
                         }), 
                    ]
                    })]
                })
            })
        };
    s.Z = t
}
}
]);