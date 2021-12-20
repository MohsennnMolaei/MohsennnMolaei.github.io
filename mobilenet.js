/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
!function (e, a) {
    "object" == typeof exports && "undefined" != typeof module ? a(exports, require("@tensorflow/tfjs-converter"), require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-converter", "@tensorflow/tfjs-core"], a) : a(e.mobilenet = {}, e.tf, e.tf)
}(this, function (e, a, r) {
    "use strict";
    function o(e, a, r, o) {
        return new (r || (r = Promise))(function (i, t) {
            function n(e) {
                try {
                    s(o.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function l(e) {
                try {
                    s(o.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function s(e) {
                e.done ? i(e.value) : new r(function (a) {
                    a(e.value)
                }
                ).then(n, l)
            }
            s((o = o.apply(e, a || [])).next())
        }
        )
    }
    function i(e, a) {
        var r, o, i, t, n = {
            label: 0,
            sent: function () {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: l(0),
            throw: l(1),
            return: l(2)
        },
            "function" == typeof Symbol && (t[Symbol.iterator] = function () {
                return this
            }
            ),
            t;
        function l(t) {
            return function (l) {
                return function (t) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; n;)
                        try {
                            if (r = 1,
                                o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o),
                                    0) : o.next) && !(i = i.call(o, t[1])).done)
                                return i;
                            switch (o = 0,
                            i && (t = [2 & t[0], i.value]),
                            t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return n.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    n.label++,
                                        o = t[1],
                                        t = [0];
                                    continue;
                                case 7:
                                    t = n.ops.pop(),
                                        n.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = n.trys).length > 0 && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        n = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        n.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && n.label < i[1]) {
                                        n.label = i[1],
                                            i = t;
                                        break
                                    }
                                    if (i && n.label < i[2]) {
                                        n.label = i[2],
                                            n.ops.push(t);
                                        break
                                    }
                                    i[2] && n.ops.pop(),
                                        n.trys.pop();
                                    continue
                            }
                            t = a.call(e, n)
                        } catch (e) {
                            t = [6, e],
                                o = 0
                        } finally {
                            r = i = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, l])
            }
        }
    }


    var t = {
        0: "AUT_P_2006",
        1: "D_A_2011_BACK",
        2: "D_A_2011_FRONT",
        3: "D_A_2019_BACK",
        4: "D_A_2019_FRONT",
        5: "D_D_1999_BACK",
        6: "D_D_1999_FRONT",
        7: "D_D_2013_BACK",
        8: "D_D_2013_FRONT",
        9: "D_I_2010_BACK",
        10: "D_I_2010_FRONT",
        11: "D_P_2007",
        12: "D_P_2017",
        13: "FRA_I_1994_BACK",
        14: "FRA_I_1994_FRONT",
        15: "GRC_P_2020",
        16: "ROU_I_2017_FRONT",
        17: "TUR_P_2018"
    }
        , n = {
            "1.00": "module_apply_default/MobilenetV1/Logits/global_pool",
            "2.00": "module_apply_default/MobilenetV2/Logits/AvgPool"
        }
        , l = {
            "1.00": {
                .25: {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                },
                "0.50": {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                },
                .75: {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                },
                "1.00": {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                }
            },
            "2.00": {
                "0.50": {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                },
                .75: {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                },
                "1.00": {
                    url: "tfjs_model_mobilenetv3",
                    inputRange: [0, 1]
                }
            }
        };
    var s = function () {
        function e(e, a, r, o, i) {
            void 0 === o && (o = -1),
                void 0 === i && (i = 1),
                this.version = e,
                this.alpha = a,
                this.modelUrl = r,
                this.inputMin = o,
                this.inputMax = i,
                this.normalizationConstant = (i - o) / 255
        }
        return e.prototype.load = function () {
            return o(this, void 0, void 0, function () {
                var e, o, t, n, s = this;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return this.modelUrl ? (e = this,
                                [4, a.loadGraphModel(this.modelUrl)]) : [3, 2];
                        case 1:
                            return e.model = i.sent(),
                                [3, 4];
                        case 2:
                            return o = l[this.version][this.alpha].url,
                                t = this,
                                [4, a.loadGraphModel(o, {
                                    fromTFHub: !0
                                })];
                        case 3:
                            t.model = i.sent(),
                                i.label = 4;
                        case 4:
                            return [4, (n = r.tidy(function () {
                                return s.model.predict(r.zeros([1, 224, 224, 3]))
                            })).data()];
                        case 5:
                            return i.sent(),
                                n.dispose(),
                                [2]
                    }
                })
            })
        }
            ,
            e.prototype.infer = function (e, a) {
                var o = this;
                return void 0 === a && (a = !1),
                    r.tidy(function () {
                        e instanceof r.Tensor || (e = r.browser.fromPixels(e));
                        var i = r.cast(e, "float32") //r.add(r.mul(r.cast(e, "float32"), o.normalizationConstant), o.inputMin)
                            , t = i;
                        if (224 !== e.shape[0] || 224 !== e.shape[1]) {
                            t = r.image.resizeBilinear(i, [224, 224], !0)
                        }
                        var l, s = r.reshape(t, [-1, 224, 224, 3]);
                        if (a) {
                            var c = n[o.version]
                                , u = o.model.execute(s, c);
                            l = r.squeeze(u, [1, 2])
                        } else {
                            var h = o.model.predict(s);
                            l = r.slice(h, [0, 1], [-1, 17])
                        }
                        return l
                    })
            }
            ,
            e.prototype.classify = function (e, a) {
                return void 0 === a && (a = 3),
                    o(this, void 0, void 0, function () {
                        var n, l;
                        return i(this, function (s) {
                            switch (s.label) {
                                case 0:
                                    return [4, function (e, a) {
                                        return o(this, void 0, void 0, function () {
                                            var o, n, l, s, c, u, h;
                                            return i(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, (o = r.softmax(e)).data()];
                                                    case 1:
                                                        for (n = i.sent(),
                                                            o.dispose(),
                                                            l = [],
                                                            h = 0; h < n.length; h++)
                                                            l.push({
                                                                value: n[h],
                                                                index: h
                                                            });
                                                        for (l.sort(function (e, a) {
                                                            return a.value - e.value
                                                        }),
                                                            s = new Float32Array(a),
                                                            c = new Int32Array(a),
                                                            h = 0; h < a; h++)
                                                            s[h] = l[h].value,
                                                                c[h] = l[h].index;
                                                        for (u = [],
                                                            h = 0; h < c.length; h++)
                                                            u.push({
                                                                className: t[c[h]],
                                                                probability: s[h]
                                                            });
                                                        return [2, u]
                                                }
                                            })
                                        })
                                    }(n = this.infer(e), a)];
                                case 1:
                                    return l = s.sent(),
                                        n.dispose(),
                                        [2, l]
                            }
                        })
                    })
            }
            ,
            e
    }();
    e.load = function (e) {
        return void 0 === e && (e = {
            version: 1,
            alpha: 1
        }),
            o(this, void 0, void 0, function () {
                var a, o, t, n, c, u, h;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            if (null == r)
                                throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");
                            if (t = e.version.toFixed(2),
                                n = e.alpha ? e.alpha.toFixed(2) : "",
                                c = -1,
                                u = 1,
                                null == e.modelUrl) {
                                if (!(t in l))
                                    throw new Error("Invalid version of MobileNet. Valid versions are: " + Object.keys(l));
                                if (!(n in l[t]))
                                    throw new Error("MobileNet constructed with invalid alpha " + e.alpha + ". Valid multipliers for this version are: " + Object.keys(l[t]) + ".");
                                a = l[t][n].inputRange,
                                    c = a[0],
                                    u = a[1]
                            }
                            return null != e.inputRange && (o = e.inputRange,
                                c = o[0],
                                u = o[1]),
                                [4, (h = new s(t, n, e.modelUrl, c, u)).load()];
                        case 1:
                            return i.sent(),
                                [2, h]
                    }
                })
            })
    }
        ,
        e.version = "2.1.0",
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
});
