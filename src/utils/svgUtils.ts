import path from 'path';
import { ID_PATTERN, SVG_TAG_PATTERN, URL_REF_PATTERN, XLINK_HREF_PATTERN } from '../constants';
import { SymbolMeta } from '../types';
import { getMatch } from './regexUtil';
import { getViewBox } from './dimensionUtils';

const processElementIds = (id: string, content: string) =>
  content
    .replace(ID_PATTERN, (_, prev) => `id="${id}-${prev}"`)
    .replace(XLINK_HREF_PATTERN, (_, prev) => `xlink:href="#${id}-${prev}"`)
    .replace(URL_REF_PATTERN, (_, attr, prev) => `${attr}="url(#${id}-${prev})"`);

export const getSymbolMeta = (resourcePath: string, symbol: string): SymbolMeta => {
  const id = path.basename(resourcePath, '.svg');
  const icon = processElementIds(id, getMatch(symbol.match(SVG_TAG_PATTERN)));
  const viewBox = getViewBox(symbol);

  return { id, icon, viewBox };
};
