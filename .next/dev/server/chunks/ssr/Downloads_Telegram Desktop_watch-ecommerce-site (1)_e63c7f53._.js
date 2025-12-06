module.exports = [
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/hooks/use-cart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useCart() {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load cart from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                setCart(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart from localStorage:", e);
            }
        }
        setLoaded(true);
    }, []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [
        cart,
        loaded
    ]);
    const addToCart = (product, quantity = 1)=>{
        setCart((prev)=>{
            const existing = prev.find((item)=>item._id === product._id);
            if (existing) {
                return prev.map((item)=>item._id === product._id ? {
                        ...item,
                        quantity: item.quantity + quantity
                    } : item);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity
                }
            ];
        });
    };
    const removeFromCart = (productId)=>{
        setCart((prev)=>prev.filter((item)=>item._id !== productId));
    };
    const updateQuantity = (productId, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart((prev)=>prev.map((item)=>item._id === productId ? {
                        ...item,
                        quantity
                    } : item));
        }
    };
    const clearCart = ()=>{
        setCart([]);
    };
    const total = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    const count = cart.reduce((sum, item)=>sum + item.quantity, 0);
    return {
        cart,
        count,
        total: total.toFixed(2),
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        loaded
    };
}
}),
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/hooks/use-cart.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ShopPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { cart, count, addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredProducts, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("watches");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("/api/auth/me");
                if (response.ok) {
                    const data = await response.json();
                    setUserRole(data.role);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
            }
        };
        checkAuth();
        fetchProducts();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filtered = products.filter((p)=>p.category === selectedCategory);
        setFilteredProducts(filtered);
    }, [
        selectedCategory,
        products
    ]);
    const fetchProducts = async ()=>{
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleAddToCart = (product)=>{
        addToCart(product, 1);
    };
    const handleCartClick = ()=>{
        if (cart.length > 0) {
            sessionStorage.setItem("checkout-items", JSON.stringify(cart));
            router.push("/checkout");
        }
    };
    const categories = [
        "watches",
        "headphones"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-card border-b border-border sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-serif text-2xl font-bold text-primary hover:opacity-80 transition-opacity",
                            children: "TimeKeeper"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-foreground hover:text-primary",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                userRole === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "text-foreground hover:text-primary",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                userRole === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCartClick,
                                    className: "relative bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 cursor-pointer",
                                    children: [
                                        "Cart ",
                                        count > 0 && `(${count})`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl font-bold mb-2",
                                children: "Our Collection"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Explore our premium watches and accessories"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-4 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border p-6 rounded-lg sticky top-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-4",
                                            children: "Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedCategory(cat),
                                                    className: `block w-full text-left px-4 py-2 rounded transition ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`,
                                                    children: cat.charAt(0).toUpperCase() + cat.slice(1)
                                                }, cat, false, {
                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-muted-foreground",
                                    children: "Loading products..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this) : filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-muted-foreground",
                                    children: "No products in this category"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-muted h-48 flex items-center justify-center",
                                                    children: product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: product.image || "/placeholder.svg",
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: "No image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold mb-1 line-clamp-2",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mb-3 line-clamp-2",
                                                            children: product.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-serif text-lg font-bold text-accent",
                                                                    children: [
                                                                        "$",
                                                                        product.price
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`,
                                                                    children: product.inStock ? "In Stock" : "Out of Stock"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/products/${product._id}`,
                                                                    className: "flex-1 bg-foreground/10 text-foreground hover:bg-foreground/20 px-3 py-2 rounded text-sm font-medium transition text-center",
                                                                    children: "View Details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 25
                                                                }, this),
                                                                userRole === "user" && product.inStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleAddToCart(product),
                                                                    className: "flex-1 bg-primary text-primary-foreground hover:opacity-90 px-3 py-2 rounded text-sm font-medium transition",
                                                                    children: "Add to Cart"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, product._id, true, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/shop/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Telegram%20Desktop_watch-ecommerce-site%20%281%29_e63c7f53._.js.map