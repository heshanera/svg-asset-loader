"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewBox = void 0;
const constants_1 = require("../constants");
const regexUtil_1 = require("./regexUtil");
const getViewBox = (symbol) => {
    const viewBox = (0, regexUtil_1.getMatch)(symbol.match(constants_1.VIEW_BOX_PATTERN));
    if (viewBox) {
        return viewBox;
    }
    return `0 0 ${(0, regexUtil_1.getMatch)(symbol.match(constants_1.SVG_W_PATTERN))} ${(0, regexUtil_1.getMatch)(symbol.match(constants_1.SVG_H_PATTERN))}`;
};
exports.getViewBox = getViewBox;
