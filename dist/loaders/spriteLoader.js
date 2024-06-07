"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const fileUtils_1 = require("../utils/fileUtils");
const svgUtils_1 = require("../utils/svgUtils");
const symbols = [];
let totalFiles = null;
let counter = 0;
const spriteLoader = (loaderContext, symbol) => {
    const { resourcePath, getOptions, _compilation: compilation } = loaderContext;
    const { prefix = constants_1.DEFAULT_OUT_FILE, outFile = constants_1.DEFAULT_OUT_FILE } = getOptions();
    const { id, viewBox, icon } = (0, svgUtils_1.getSymbolMeta)(resourcePath, symbol);
    symbols.push({ id, viewBox, icon });
    counter += 1;
    if (!totalFiles && compilation) {
        const svgFiles = Array.from(compilation.fileDependencies).filter((file) => file.endsWith('.svg'));
        totalFiles = svgFiles.length || 0;
    }
    if (totalFiles === counter) {
        (0, fileUtils_1.generateSVGFile)(symbols, outFile);
    }
    return JSON.stringify({ href: `${prefix}#${id}`, viewBox });
};
exports.default = spriteLoader;
