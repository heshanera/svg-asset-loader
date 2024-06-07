"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSVGFile = void 0;
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
const generateSVGFile = (symbols, outFile = constants_1.DEFAULT_OUT_FILE) => {
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${symbols
        .map((symbol) => `<symbol id="${symbol.id}" viewBox="${symbol.viewBox}">${symbol.icon}</symbol>`)
        .join('\n')}
    </svg>
  `;
    fs_1.default.writeFileSync(outFile, svgContent);
};
exports.generateSVGFile = generateSVGFile;
