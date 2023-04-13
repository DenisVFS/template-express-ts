"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/**
 * Consulte o seguinte link para aprender sobre Typescript https://blog.logrocket.com/how-to-set-up-node-typescript-express/
 */
const app = (0, express_1.default)();
app.listen(3000, () => console.log('Your app with ts is woking fine. Go ahead.'));
app.get('/', (req, res) => {
    req.accepts();
    res.send('Your app with ts is woking fine. Go ahead.');
});
