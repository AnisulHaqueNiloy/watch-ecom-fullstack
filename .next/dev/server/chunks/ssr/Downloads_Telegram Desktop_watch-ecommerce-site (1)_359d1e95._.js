module.exports = [
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar({ isLoggedIn, userRole, userName }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST"
            });
            if (response.ok) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                router.push("/");
                setIsOpen(false);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-serif text-2xl font-bold text-primary animate-pulse-soft hover:opacity-80 transition-opacity",
                            children: "TIMEKEEPER"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex gap-6 items-center",
                            children: [
                                isLoggedIn && userName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Welcome, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-foreground",
                                                    children: userName
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1 h-4 bg-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "text-foreground hover:text-primary transition-colors font-medium",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        userRole === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/admin",
                                            className: "text-foreground hover:text-primary transition-colors font-medium",
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        userRole === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            className: "text-foreground hover:text-primary transition-colors font-medium",
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            className: "px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium",
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signin",
                                            className: "text-foreground hover:text-primary transition-colors font-medium",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signup",
                                            className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium",
                                            children: "Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden border-t border-border bg-card/95 backdrop-blur-sm animate-slide-down",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "block text-foreground hover:text-primary transition-colors font-medium py-2",
                                onClick: ()=>setIsOpen(false),
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    userRole === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "block text-foreground hover:text-primary transition-colors font-medium py-2",
                                        onClick: ()=>setIsOpen(false),
                                        children: "Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 21
                                    }, this),
                                    userRole === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: "block text-foreground hover:text-primary transition-colors font-medium py-2",
                                        onClick: ()=>setIsOpen(false),
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "w-full text-left px-4 py-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors font-medium",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signin",
                                        className: "block text-foreground hover:text-primary transition-colors font-medium py-2",
                                        onClick: ()=>setIsOpen(false),
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        className: "block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium",
                                        onClick: ()=>setIsOpen(false),
                                        children: "Sign Up"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DashboardPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedOrder, setExpandedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("/api/auth/me");
                if (!response.ok) {
                    router.push("/signin");
                    return;
                }
                const userData = await response.json();
                setUser(userData);
                const ordersResponse = await fetch("/api/orders/user");
                const ordersData = await ordersResponse.json();
                setOrders(ordersData.orders || []);
            } catch (error) {
                console.error("Auth check failed:", error);
                router.push("/signin");
            } finally{
                setLoading(false);
            }
        };
        checkAuth();
    }, [
        router
    ]);
    const handleLogout = async ()=>{
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST"
            });
            if (response.ok) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                router.push("/");
            } else {
                console.error("Logout failed with status:", response.status);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                isLoggedIn: true,
                userRole: "user",
                userName: user?.name
            }, void 0, false, {
                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-5xl font-bold mb-2",
                                children: "My Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg",
                                children: "Track your orders and purchases"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6 mb-12 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm font-medium",
                                        children: "Total Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-serif text-4xl font-bold text-primary mt-2",
                                        children: orders.length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm font-medium",
                                        children: "Pending Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-serif text-4xl font-bold text-accent mt-2",
                                        children: orders.filter((o)=>o.status === "pending").length
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm font-medium",
                                        children: "Total Spent"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-serif text-4xl font-bold text-primary mt-2",
                                        children: [
                                            "$",
                                            orders.reduce((sum, o)=>sum + o.totalPrice, 0).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "animate-slide-up",
                        style: {
                            animationDelay: "0.2s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-3xl font-bold mb-6",
                                children: "Order History"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border p-12 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-6 text-lg",
                                        children: "You haven't placed any orders yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold",
                                        children: "Start Shopping"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: orders.map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in",
                                        style: {
                                            animationDelay: `${idx * 0.1}s`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setExpandedOrder(expandedOrder === order._id ? null : order._id),
                                                className: "w-full p-6 flex justify-between items-center text-left hover:bg-muted/30 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground font-medium",
                                                                children: [
                                                                    "Order #",
                                                                    String(order._id).slice(-8)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-foreground mt-1",
                                                                children: new Date(order.createdAt).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground font-medium",
                                                                children: "Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-foreground",
                                                                children: [
                                                                    order.items.length,
                                                                    " items"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground font-medium",
                                                                children: "Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-serif text-lg font-bold text-accent",
                                                                children: [
                                                                    "$",
                                                                    order.totalPrice.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground font-medium",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-semibold mt-1 ${order.status === "confirmed" ? "text-green-600" : order.status === "pending" ? "text-yellow-600" : "text-red-600"}`,
                                                                children: order.status.charAt(0).toUpperCase() + order.status.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-muted-foreground ml-4",
                                                        children: expandedOrder === order._id ? "▼" : "▶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            expandedOrder === order._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-border p-6 bg-muted/20 space-y-6 animate-slide-down",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-serif font-bold text-lg mb-4",
                                                                children: "Delivery Information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground font-medium",
                                                                                children: "Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 159,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-foreground font-semibold",
                                                                                children: order.userName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 160,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground font-medium",
                                                                                children: "Phone"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 163,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-foreground font-semibold",
                                                                                children: order.userPhone
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 164,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground font-medium",
                                                                                children: "Email"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-foreground font-semibold",
                                                                                children: order.userEmail
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground font-medium",
                                                                                children: "Address"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-foreground font-semibold",
                                                                                children: order.userAddress
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 172,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-serif font-bold text-lg mb-4",
                                                                children: "Order Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3 bg-background rounded-lg p-4",
                                                                children: order.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold text-foreground",
                                                                                        children: item.productName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                        lineNumber: 186,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-muted-foreground",
                                                                                        children: [
                                                                                            "Quantity: ",
                                                                                            item.quantity
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                        lineNumber: 187,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 185,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-accent",
                                                                                children: [
                                                                                    "$",
                                                                                    (item.quantity * item.price).toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                                lineNumber: 189,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 pt-4 border-t border-border flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-lg",
                                                                        children: "Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-serif text-2xl font-bold text-primary",
                                                                        children: [
                                                                            "$",
                                                                            order.totalPrice.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, order._id, true, {
                                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/dashboard/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Telegram%20Desktop_watch-ecommerce-site%20%281%29_359d1e95._.js.map