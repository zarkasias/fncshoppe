(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProductInteriorGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductInteriorGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function ProductInteriorGallery(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "854eb39c2b383ac554a799961cc5c4f6fb15c0311918b4e0706b8737b53fcd11") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "854eb39c2b383ac554a799961cc5c4f6fb15c0311918b4e0706b8737b53fcd11";
    }
    const { images, title: t1 } = t0;
    const title = t1 === undefined ? "Inside the journal" : t1;
    if (!images.length) {
        return null;
    }
    let t2;
    if ($[1] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs uppercase tracking-[0.2em] text-gray-400",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/ProductInteriorGallery.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-gray-500",
            children: "Preview pages from this edition."
        }, void 0, false, {
            fileName: "[project]/components/ProductInteriorGallery.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== images) {
        t4 = images.map(_ProductInteriorGalleryImagesMap);
        $[4] = images;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/ProductInteriorGallery.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t2 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-16 border-t border-gray-100 pt-10",
            children: [
                t2,
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductInteriorGallery.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
}
_c = ProductInteriorGallery;
function _ProductInteriorGalleryImagesMap(image, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "overflow-hidden rounded-xl bg-[#F1F5F9] shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[3/4]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image.src,
                fill: true,
                sizes: "(max-width: 640px) 100vw, 33vw",
                alt: image.alt ?? `Interior page ${index + 1}`,
                className: "h-full w-full object-cover",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/components/ProductInteriorGallery.tsx",
                lineNumber: 67,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductInteriorGallery.tsx",
            lineNumber: 67,
            columnNumber: 106
        }, this)
    }, `${image.src}-${index}`, false, {
        fileName: "[project]/components/ProductInteriorGallery.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProductInteriorGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductInteriorGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductInteriorGallery.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function formatCategory(type) {
    if (!type) return null;
    return type.replace(/-/g, " ");
}
function interiorGalleryTitle(type) {
    if (type === "journal") return "Inside the journal";
    return "Gallery";
}
function ProductPage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "a9a0271beebdb14d4cec651917ea50160c47067893ecacb99a5ab9efe2b90e7f") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a0271beebdb14d4cec651917ea50160c47067893ecacb99a5ab9efe2b90e7f";
    }
    const { product } = t0;
    const isAvailable = product.available !== false;
    let t1;
    if ($[1] !== product.interiorImages) {
        t1 = product.interiorImages ?? [];
        $[1] = product.interiorImages;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const interiorImages = t1;
    const store = product.link?.includes("amazon") ? "Amazon" : "Etsy";
    let t2;
    if ($[3] !== product.type) {
        t2 = formatCategory(product.type);
        $[3] = product.type;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const categoryLabel = t2;
    let t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            x: -10
        };
        t4 = {
            opacity: 1,
            x: 0
        };
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t3,
            animate: t4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 68,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium uppercase tracking-[0.1em]",
                        children: "Back to shop"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 68,
                        columnNumber: 205
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 68,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            y: 20
        };
        t7 = {
            opacity: 1,
            y: 0
        };
        t8 = {
            duration: 0.7
        };
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] !== product.image_url || $[12] !== product.name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t6,
            animate: t7,
            transition: t8,
            className: "relative aspect-square overflow-hidden rounded-xl bg-[#F1F5F9]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: product.image_url,
                fill: true,
                priority: true,
                sizes: "(max-width: 1024px) 100vw, 50vw",
                alt: product.name,
                className: "h-full w-full object-cover"
            }, void 0, false, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 98,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[11] = product.image_url;
        $[12] = product.name;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    let t11;
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0,
            y: 20
        };
        t11 = {
            opacity: 1,
            y: 0
        };
        t12 = {
            duration: 0.7,
            delay: 0.15
        };
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
    } else {
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
    }
    let t13;
    if ($[17] !== categoryLabel) {
        t13 = categoryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400",
            children: categoryLabel
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 131,
            columnNumber: 28
        }, this);
        $[17] = categoryLabel;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== product.name) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-cinzel text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 md:text-5xl",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[19] = product.name;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== product.price_range) {
        t15 = product.price_range && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-5 mt-4 text-xl text-gray-600",
            children: product.price_range
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 147,
            columnNumber: 34
        }, this);
        $[21] = product.price_range;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== product.description) {
        t16 = product.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-8 text-base leading-relaxed text-gray-500",
            children: product.description
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 155,
            columnNumber: 34
        }, this);
        $[23] = product.description;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== isAvailable) {
        t17 = !isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-8 inline-flex w-fit rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600",
            children: "Coming soon"
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 163,
            columnNumber: 27
        }, this);
        $[25] = isAvailable;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== isAvailable) {
        t18 = isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex items-center gap-3 rounded-lg bg-[#F1F5F9] px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "h-4 w-4 shrink-0 text-[#38BDF8]"
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 171,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-gray-900",
                            children: "Verified Selection"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 171,
                            columnNumber: 165
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: "Designed by FNC Shoppe"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 171,
                            columnNumber: 236
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 171,
                    columnNumber: 160
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 171,
            columnNumber: 26
        }, this);
        $[27] = isAvailable;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== isAvailable || $[30] !== product.link || $[31] !== store) {
        t19 = isAvailable && product.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: product.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex w-full items-center justify-center gap-2 rounded bg-[#38BDF8] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0ea5e9]",
            children: [
                "Buy on ",
                store,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 179,
                    columnNumber: 302
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 179,
            columnNumber: 42
        }, this);
        $[29] = isAvailable;
        $[30] = product.link;
        $[31] = store;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== isAvailable || $[34] !== product.etsy_url) {
        t20 = isAvailable && product.etsy_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: product.etsy_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-gray-900 transition-colors hover:bg-gray-50",
            children: [
                "Secure on Etsy ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 189,
                    columnNumber: 330
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 189,
            columnNumber: 46
        }, this);
        $[33] = isAvailable;
        $[34] = product.etsy_url;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t19 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== product.story) {
        t22 = product.story && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 border-t border-gray-100 pt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-xs uppercase tracking-[0.2em] text-gray-400",
                    children: "The Story"
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 207,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base leading-relaxed text-gray-500",
                    children: product.story
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 207,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 207,
            columnNumber: 28
        }, this);
        $[39] = product.story;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t13 || $[42] !== t14 || $[43] !== t15 || $[44] !== t16 || $[45] !== t17 || $[46] !== t18 || $[47] !== t21 || $[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t10,
            animate: t11,
            transition: t12,
            className: "flex flex-col justify-center",
            children: [
                t13,
                t14,
                t15,
                t16,
                t17,
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[41] = t13;
        $[42] = t14;
        $[43] = t15;
        $[44] = t16;
        $[45] = t17;
        $[46] = t18;
        $[47] = t21;
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== t23 || $[51] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-10 lg:grid-cols-2",
            children: [
                t9,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[50] = t23;
        $[51] = t9;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== interiorImages || $[54] !== product.type) {
        t25 = interiorImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductInteriorGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            images: interiorImages,
            title: interiorGalleryTitle(product.type)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 239,
            columnNumber: 40
        }, this);
        $[53] = interiorImages;
        $[54] = product.type;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t24 || $[57] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white pb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-5xl px-6",
                children: [
                    t5,
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 248,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[56] = t24;
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    return t26;
}
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1x313as._.js.map