module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthCookie",
    ()=>clearAuthCookie,
    "generateToken",
    ()=>generateToken,
    "getAuthToken",
    ()=>getAuthToken,
    "hashPassword",
    ()=>hashPassword,
    "parseToken",
    ()=>parseToken,
    "setAuthCookie",
    ()=>setAuthCookie
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const TOKEN_SECRET = process.env.TOKEN_SECRET || "your-secret-key-change-in-production";
function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(password).digest("hex");
}
function generateToken(userId, role) {
    const payload = {
        userId,
        role,
        iat: Date.now()
    };
    return Buffer.from(JSON.stringify(payload)).toString("base64");
}
async function setAuthCookie(token) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60
    });
}
async function getAuthToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return cookieStore.get("auth-token")?.value;
}
async function clearAuthCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("auth-token");
}
function parseToken(token) {
    try {
        const decoded = Buffer.from(token, "base64").toString("utf-8");
        return JSON.parse(decoded);
    } catch (error) {
        return null;
    }
}
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeDB",
    ()=>closeDB,
    "connectDB",
    ()=>connectDB,
    "getDB",
    ()=>getDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const mongoUri = process.env.MONGODB_URI || "mongodb+srv://watch-database:qFZWfCPdn3rWnao9@cluster0.djtn37n.mongodb.net/watch-database?appName=Cluster0";
// "mongodb+srv://e-commerce-watch:GHCSSPUwcdjxGEJB@cluster0.3zxuw.mongodb.net/ecom-collection?retryWrites=true&w=majority"
let client = null;
let db = null;
async function connectDB() {
    if (db) return db;
    try {
        client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](mongoUri, {
            maxPoolSize: 10
        });
        await client.connect();
        db = client.db("ecom-collection");
        console.log("MongoDB connected");
        return db;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}
async function getDB() {
    if (db) return db;
    return connectDB();
}
async function closeDB() {
    if (client) {
        await client.close();
        client = null;
        db = null;
    }
}
}),
"[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/app/api/orders/user/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Telegram Desktop/watch-ecommerce-site (1)/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthToken"])();
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Not authenticated"
            }, {
                status: 401
            });
        }
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseToken"])(token);
        if (!decoded) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid token"
            }, {
                status: 401
            });
        }
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const ordersCollection = db.collection("orders");
        const orders = await ordersCollection.find({
            userId: decoded.userId
        }).sort({
            createdAt: -1
        }).toArray();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            orders
        });
    } catch (error) {
        console.error("Get user orders error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Telegram__Desktop$2f$watch$2d$ecommerce$2d$site__$28$1$292f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch orders"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a830d03._.js.map