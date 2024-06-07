"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSymbolMeta = void 0;
const path_1 = __importDefault(require("path"));
const constants_1 = require("../constants");
const regexUtil_1 = require("./regexUtil");
const dimensionUtils_1 = require("./dimensionUtils");
const getSymbolMeta = (resourcePath, symbol) => {
    const id = path_1.default.basename(resourcePath, '.svg');
    const icon = (0, regexUtil_1.getMatch)(symbol.match(constants_1.SVG_TAG_PATTERN));
    const viewBox = (0, dimensionUtils_1.getViewBox)(symbol);
    return { id, icon, viewBox };
};
exports.getSymbolMeta = getSymbolMeta;
