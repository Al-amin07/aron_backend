"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const route_1 = require("./route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
}));
app.get('/', (req, res) => {
    res.send('Hello World from aronn');
});
app.use('/api', route_1.route);
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
