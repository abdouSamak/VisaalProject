"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get('/api', async (req, res) => {
    return res.send('coucou promo 4');
});
app.listen(3015, function () {
    console.log('API listening on http://localhost:3015/api/ !');
});
//# sourceMappingURL=server.js.map