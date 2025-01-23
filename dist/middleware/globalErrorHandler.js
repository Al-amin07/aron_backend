"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const globalErrorHandler = (err, req, res, next) => {
    let message = 'Something went wrong';
    let status = 500;
    return res.status(status).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.message) || message,
        statusCode: (err === null || err === void 0 ? void 0 : err.statusCode) || status,
        stack: config_1.config.NODE_ENV === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandler;
