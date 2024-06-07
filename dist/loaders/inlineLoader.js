"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("../utils/stringUtils");
const inlineLoader = (symbol) => {
    const inlineIcon = `data:image/svg+xml;base64,${(0, stringUtils_1.utf8ToBase64)(symbol)}`;
    return JSON.stringify(inlineIcon);
};
exports.default = inlineLoader;
