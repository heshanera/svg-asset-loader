import { SVG_H_PATTERN, SVG_W_PATTERN, VIEW_BOX_PATTERN } from '../constants';
import { getMatch } from './regexUtil';

export const getViewBox = (symbol: string) => {
  const viewBox = getMatch(symbol.match(VIEW_BOX_PATTERN));
  if (viewBox) {
    return viewBox;
  }
  return `0 0 ${getMatch(symbol.match(SVG_W_PATTERN))} ${getMatch(symbol.match(SVG_H_PATTERN))}`;
};
