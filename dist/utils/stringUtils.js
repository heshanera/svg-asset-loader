"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8ToBase64 = void 0;
const utf8ToBase64 = (utf8String) => {
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(utf8String);
    return Buffer.from(utf8Bytes).toString('base64');
};
exports.utf8ToBase64 = utf8ToBase64;
