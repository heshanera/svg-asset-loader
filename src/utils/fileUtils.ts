import fs from 'fs';
import { SymbolMeta } from '../types';
import { DEFAULT_OUT_FILE } from '../constants';

export const generateSVGFile = (symbols: SymbolMeta[], outFile: string = DEFAULT_OUT_FILE) => {
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${symbols
        .map((symbol: SymbolMeta) => `<symbol id="${symbol.id}" viewBox="${symbol.viewBox}">${symbol.icon}</symbol>`)
        .join('\n')}
    </svg>
  `;
  fs.writeFileSync(outFile, svgContent);
};
