export const utf8ToBase64 = (utf8String: string) => {
  const utf8Encoder = new TextEncoder();
  const utf8Bytes = utf8Encoder.encode(utf8String);
  return Buffer.from(utf8Bytes).toString('base64');
};
