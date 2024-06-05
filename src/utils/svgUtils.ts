import path from 'path';
import { SVG_TAG_PATTERN } from '../constants';
import { SymbolMeta } from '../types';
import { getMatch } from './regexUtil';
import { getViewBox } from './dimensionUtils';

export const getSymbolMeta = (resourcePath: string, symbol: string): SymbolMeta => {
  const id = path.basename(resourcePath, '.svg');
  const icon = getMatch(symbol.match(SVG_TAG_PATTERN));
  const viewBox = getViewBox(symbol);

  return { id, icon, viewBox };
};
