"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG_CONTAINER_ID = exports.DEFAULT_OUT_FILE = exports.VIEW_BOX_PATTERN = exports.SVG_H_PATTERN = exports.SVG_W_PATTERN = exports.SVG_TAG_PATTERN = void 0;
exports.SVG_TAG_PATTERN = /<svg[^>]*>(.*?)<\/svg>/s;
exports.SVG_W_PATTERN = /width="([^"]+)"/i;
exports.SVG_H_PATTERN = /height="([^"]+)"/i;
exports.VIEW_BOX_PATTERN = /viewBox="([^"]+)"/i;
exports.DEFAULT_OUT_FILE = 'sprite.svg';
exports.SVG_CONTAINER_ID = 'svg-asset-loader';
