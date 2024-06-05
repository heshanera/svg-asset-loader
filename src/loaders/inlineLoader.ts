import { utf8ToBase64 } from '../utils/stringUtils';

const inlineLoader = (symbol: string) => {
  const inlineIcon = `data:image/svg+xml;base64,${utf8ToBase64(symbol)}`;

  return JSON.stringify(inlineIcon);
};

export default inlineLoader;
