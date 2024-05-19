"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = require("express");
require("express-async-errors");
const cors_1 = require("cors");
const router_1 = require("./router");
exports.app = (0, express_1.default)();
exports.app.use((req, res, next) => {
    express_1.default.json()(req, res, next);
});
exports.app.use((0, cors_1.default)());
exports.app.use(router_1.route);
exports.app.get('/', (req, res) => {
    res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
});
exports.app.listen(5000, () => console.log('online'));
//# sourceMappingURL=main.js.map