(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/FeatureGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductFilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductFilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/methods.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProductCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "71f593cdb9d858ba232f1927098e5dd4404b656cd4ac8ca4e226946f3538e710") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "71f593cdb9d858ba232f1927098e5dd4404b656cd4ac8ca4e226946f3538e710";
    }
    const { product, index } = t0;
    const shopHref = product.link ?? `/product/${product.id}`;
    const isExternalShop = Boolean(product.link);
    const isAvailable = product.available !== false;
    const t1 = `w-full h-full object-cover transition-transform duration-500 ${isAvailable ? "hover:scale-105" : "opacity-90"}`;
    let t2;
    if ($[1] !== product.image_url || $[2] !== product.name || $[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: product.image_url,
            alt: product.name,
            fill: true,
            sizes: "(max-width: 640px) 100vw, 33vw",
            className: t1
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = product.image_url;
        $[2] = product.name;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isAvailable) {
        t3 = !isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center bg-white/50",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "-rotate-12 text-3xl font-bold uppercase tracking-[0.2em] text-gray-500 drop-shadow-sm",
                children: "Coming Soon"
            }, void 0, false, {
                fileName: "[project]/components/FeatureGrid.tsx",
                lineNumber: 44,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 44,
            columnNumber: 26
        }, this);
        $[5] = isAvailable;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[4/3] overflow-hidden",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const imageBlock = t4;
    let t5;
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            y: 20
        };
        t6 = {
            opacity: 1,
            y: 0
        };
        t7 = {
            once: true
        };
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    const t8 = index * 0.08;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            0.2,
            1,
            0.3,
            1
        ];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8) {
        t10 = {
            duration: 0.6,
            delay: t8,
            ease: t9
        };
        $[14] = t8;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== imageBlock || $[17] !== isAvailable || $[18] !== product.id) {
        t11 = isAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/product/${product.id}`,
            className: "block",
            children: imageBlock
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 105,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block",
            children: imageBlock
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 105,
            columnNumber: 103
        }, this);
        $[16] = imageBlock;
        $[17] = isAvailable;
        $[18] = product.id;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== isAvailable || $[21] !== product.id || $[22] !== product.name || $[23] !== product.price_range) {
        t12 = isAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/product/${product.id}`,
            className: "min-w-0 flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-foreground leading-snug",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 115,
                    columnNumber: 90
                }, this),
                product.price_range && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-foreground/70 mt-0.5",
                    children: product.price_range
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 115,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 115,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-foreground leading-snug",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 115,
                    columnNumber: 313
                }, this),
                product.price_range && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-foreground/70 mt-0.5",
                    children: product.price_range
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 115,
                    columnNumber: 419
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 115,
            columnNumber: 281
        }, this);
        $[20] = isAvailable;
        $[21] = product.id;
        $[22] = product.name;
        $[23] = product.price_range;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== isAvailable || $[26] !== isExternalShop || $[27] !== shopHref) {
        t13 = isAvailable ? isExternalShop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: shopHref,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-xs font-semibold tracking-[0.12em] uppercase text-[#38BDF8] flex items-center gap-1 whitespace-nowrap ml-4 shrink-0 hover:opacity-80",
            children: [
                "Shop Now ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 126,
                    columnNumber: 262
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 126,
            columnNumber: 42
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: shopHref,
            className: "text-xs font-semibold tracking-[0.12em] uppercase text-[#38BDF8] flex items-center gap-1 whitespace-nowrap ml-4 shrink-0 hover:opacity-80",
            children: [
                "Shop Now ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/components/FeatureGrid.tsx",
                    lineNumber: 126,
                    columnNumber: 484
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 126,
            columnNumber: 303
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 whitespace-nowrap ml-4 shrink-0",
            children: "Coming Soon"
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 126,
            columnNumber: 528
        }, this);
        $[25] = isAvailable;
        $[26] = isExternalShop;
        $[27] = shopHref;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t12 || $[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white px-4 py-4 flex items-center justify-between",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t10 || $[33] !== t11 || $[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t5,
            whileInView: t6,
            viewport: t7,
            transition: t10,
            className: "bg-[#F1F5F9] rounded-xl overflow-hidden border border-gray-200",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t11;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    return t15;
}
_c = ProductCard;
const DEFAULT_FILTERS = {
    category: 'all',
    store: 'all',
    sort: 'newest'
};
function FeaturedGrid(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "71f593cdb9d858ba232f1927098e5dd4404b656cd4ac8ca4e226946f3538e710") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "71f593cdb9d858ba232f1927098e5dd4404b656cd4ac8ca4e226946f3538e710";
    }
    const { products } = t0;
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_FILTERS);
    let t1;
    if ($[1] !== products) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterOptions"])(products);
        $[1] = products;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { categories, stores } = t1;
    let t2;
    if ($[3] !== filters || $[4] !== products) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterAndSortProducts"])(products, filters);
        $[3] = filters;
        $[4] = products;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const filteredProducts = t2;
    if (!products || products.length === 0) {
        return null;
    }
    let t3;
    if ($[6] !== categories || $[7] !== filteredProducts.length || $[8] !== filters || $[9] !== stores) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductFilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            filters: filters,
            onChange: setFilters,
            categories: categories,
            stores: stores,
            resultCount: filteredProducts.length
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[6] = categories;
        $[7] = filteredProducts.length;
        $[8] = filters;
        $[9] = stores;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== filteredProducts) {
        t4 = filteredProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
            children: filteredProducts.map(_FeaturedGridFilteredProductsMap)
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 213,
            columnNumber: 40
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "rounded-xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center text-sm text-gray-500",
            children: "No products match these filters. Try adjusting category or store."
        }, void 0, false, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 213,
            columnNumber: 160
        }, this);
        $[11] = filteredProducts;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-5xl mx-auto px-6 mt-12 pb-16",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/FeatureGrid.tsx",
            lineNumber: 221,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
}
_s(FeaturedGrid, "sxiVoqZn6uDWUmWVYwWDLMyoKPg=");
_c1 = FeaturedGrid;
function _FeaturedGridFilteredProductsMap(product, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
        product: product,
        index: i
    }, product.id, false, {
        fileName: "[project]/components/FeatureGrid.tsx",
        lineNumber: 231,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard");
__turbopack_context__.k.register(_c1, "FeaturedGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function HeroSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "06cfa2d454ecb84a88bfb3e335053809c2ec0e9efdd58a3eba50d09d5564f8de") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06cfa2d454ecb84a88bfb3e335053809c2ec0e9efdd58a3eba50d09d5564f8de";
    }
    const scrollToShop = _HeroSectionScrollToShop;
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "fnc-headline",
            children: [
                "Original work.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 18,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: "One-of-a-kind"
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 18,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 18,
                    columnNumber: 81
                }, this),
                "pieces."
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fnc-bar"
        }, void 0, false, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "fnc-sub",
            children: "Handmade art and crafts, designed with intention. Every item in the FNC Shoppe is an original design — thoughtful gifts and everyday essentials."
        }, void 0, false, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fnc-hero-text loaded",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fnc-cta-row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "fnc-btn-primary",
                        onClick: scrollToShop,
                        children: "Browse the shop"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 31,
                        columnNumber: 89
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 31,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/hero.png",
            alt: "Handmade crafts by FNC Shoppe",
            fill: true,
            priority: true,
            sizes: "(max-width: 768px) 100vw, 420px",
            className: "fnc-img-inner"
        }, void 0, false, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fnc-hero-grid loaded grid grid-cols-1 bg-gray-50 md:grid-cols-2",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fnc-hero-image loaded",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fnc-tag",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fnc-tag-label",
                                    children: "Every piece"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 163
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fnc-tag-value",
                                    children: "An original design"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 213
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 45,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 45,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "data-fnc-hero": true,
            className: "mx-auto max-w-5xl px-6",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "shoppe",
                    className: "fnc-hero-scroll mt-auto flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px flex-1 bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 52,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] uppercase tracking-[0.3em] text-gray-400",
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 52,
                            columnNumber: 199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px flex-1 bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 52,
                            columnNumber: 283
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 52,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = HeroSection;
function _HeroSectionScrollToShop() {
    document.getElementById("shoppe")?.scrollIntoView({
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductFilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductFilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/methods.ts [app-client] (ecmascript)");
"use client";
;
;
;
function FilterSelect(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "5dc664b37cf50cea372cdca22d6840b0b85c2949df7b5293d18b4f5d8d8539dd") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5dc664b37cf50cea372cdca22d6840b0b85c2949df7b5293d18b4f5d8d8539dd";
    }
    const { label, value, onChange, options } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-400",
            children: label
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== onChange) {
        t2 = ({
            "FilterSelect[<select>.onChange]": (event)=>onChange(event.target.value)
        })["FilterSelect[<select>.onChange]"];
        $[3] = onChange;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== options) {
        t3 = options.map(_FilterSelectOptionsMap);
        $[5] = options;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3 || $[9] !== value) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: value,
            onChange: t2,
            className: "w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-8 text-sm text-gray-800 shadow-sm transition-colors hover:border-gray-300 focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = value;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
            "aria-hidden": true,
            children: "▾"
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t1 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-none sm:min-w-[140px]",
            children: [
                t1,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_c = FilterSelect;
function _FilterSelectOptionsMap(option) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: option.value,
        children: option.label
    }, option.value, false, {
        fileName: "[project]/components/ProductFilterBar.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
function ProductFilterBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "5dc664b37cf50cea372cdca22d6840b0b85c2949df7b5293d18b4f5d8d8539dd") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5dc664b37cf50cea372cdca22d6840b0b85c2949df7b5293d18b4f5d8d8539dd";
    }
    const { filters, onChange, categories, stores, resultCount } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            value: "all",
            label: "All categories"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== categories) {
        t2 = [
            t1,
            ...categories.map(_ProductFilterBarCategoriesMap)
        ];
        $[2] = categories;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const categoryOptions = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            value: "all",
            label: "All stores"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== stores) {
        t4 = [
            t3,
            ...stores.map(_ProductFilterBarStoresMap)
        ];
        $[5] = stores;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const storeOptions = t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                value: "newest",
                label: "Latest"
            },
            {
                value: "oldest",
                label: "Oldest"
            }
        ];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const sortOptions = t5;
    let t6;
    if ($[8] !== filters || $[9] !== onChange) {
        t6 = ({
            "ProductFilterBar[<FilterSelect>.onChange]": (category_0)=>onChange({
                    ...filters,
                    category: category_0
                })
        })["ProductFilterBar[<FilterSelect>.onChange]"];
        $[8] = filters;
        $[9] = onChange;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== categoryOptions || $[12] !== filters.category || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
            label: "Category",
            value: filters.category,
            onChange: t6,
            options: categoryOptions
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[11] = categoryOptions;
        $[12] = filters.category;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== filters || $[16] !== onChange) {
        t8 = ({
            "ProductFilterBar[<FilterSelect>.onChange]": (store_0)=>onChange({
                    ...filters,
                    store: store_0
                })
        })["ProductFilterBar[<FilterSelect>.onChange]"];
        $[15] = filters;
        $[16] = onChange;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== filters.store || $[19] !== storeOptions || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
            label: "Store",
            value: filters.store,
            onChange: t8,
            options: storeOptions
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[18] = filters.store;
        $[19] = storeOptions;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== filters || $[23] !== onChange) {
        t10 = ({
            "ProductFilterBar[<FilterSelect>.onChange]": (sort)=>onChange({
                    ...filters,
                    sort: sort
                })
        })["ProductFilterBar[<FilterSelect>.onChange]"];
        $[22] = filters;
        $[23] = onChange;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== filters.sort || $[26] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
            label: "Sort by",
            value: filters.sort,
            onChange: t10,
            options: sortOptions
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[25] = filters.sort;
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t7 || $[30] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-3",
            children: [
                t7,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t7;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const t13 = resultCount === 1 ? "item" : "items";
    let t14;
    if ($[32] !== resultCount || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "shrink-0 text-xs text-gray-500 lg:pb-2.5",
            children: [
                resultCount,
                " ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[32] = resultCount;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t12 || $[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 shadow-sm sm:px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
                children: [
                    t12,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductFilterBar.tsx",
                lineNumber: 261,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductFilterBar.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[35] = t12;
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    return t15;
}
_c1 = ProductFilterBar;
function _ProductFilterBarStoresMap(store) {
    return {
        value: store,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLabel"])(store)
    };
}
function _ProductFilterBarCategoriesMap(category) {
    return {
        value: category,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$methods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLabel"])(category)
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterSelect");
__turbopack_context__.k.register(_c1, "ProductFilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shared/methods.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterAndSortProducts",
    ()=>filterAndSortProducts,
    "formatLabel",
    ()=>formatLabel,
    "getFilterOptions",
    ()=>getFilterOptions
]);
function filterAndSortProducts(products, filters) {
    const filtered = products.filter((product)=>{
        const matchesCategory = filters.category === "all" || product.type === filters.category;
        const matchesStore = filters.store === "all" || product.store === filters.store;
        return matchesCategory && matchesStore;
    });
    return [
        ...filtered
    ].sort((a, b)=>{
        const nameOrder = a.name.localeCompare(b.name);
        const dateA = new Date(a.date_added).getTime();
        const dateB = new Date(b.date_added).getTime();
        const dateOrder = filters.sort === "oldest" ? dateA - dateB : dateB - dateA;
        return dateOrder !== 0 ? dateOrder : nameOrder;
    });
}
function getFilterOptions(products) {
    const categories = [
        ...new Set(products.map((p)=>p.type).filter(Boolean))
    ];
    const stores = [
        ...new Set(products.map((p)=>p.store).filter(Boolean))
    ];
    categories.sort((a, b)=>formatLabel(a).localeCompare(formatLabel(b)));
    stores.sort((a, b)=>formatLabel(a).localeCompare(formatLabel(b)));
    return {
        categories,
        stores
    };
}
function formatLabel(value) {
    return value.split(/[- ]/).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_01js05b._.js.map