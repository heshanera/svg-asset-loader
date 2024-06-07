"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserLoader_1 = __importDefault(require("./loaders/browserLoader"));
const inlineLoader_1 = __importDefault(require("./loaders/inlineLoader"));
const spriteLoader_1 = __importDefault(require("./loaders/spriteLoader"));
function loader(content) {
    const { cacheable, getOptions } = this;
    if (cacheable)
        cacheable();
    const { strategy } = getOptions();
    const symbol = content.toString();
    let loaderStrategy = (0, browserLoader_1.default)(this, symbol);
    if (strategy === 'inline') {
        loaderStrategy = (0, inlineLoader_1.default)(symbol);
    }
    else if (strategy === 'extract') {
        loaderStrategy = (0, spriteLoader_1.default)(this, symbol);
    }
    return `module.exports = ${loaderStrategy}`;
}
exports.default = loader;
