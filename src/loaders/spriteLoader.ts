import { LoaderContext } from 'webpack';
import { DEFAULT_OUT_FILE } from '../constants';
import { LoaderOptions, SymbolMeta } from '../types';
import { generateSVGFile } from '../utils/fileUtils';
import { getSymbolMeta } from '../utils/svgUtils';

const symbols: SymbolMeta[] = [];
let totalFiles: number | null = null;
let counter = 0;

const spriteLoader = (loaderContext: LoaderContext<LoaderOptions>, symbol: string) => {
  const { resourcePath, getOptions, _compilation: compilation } = loaderContext;
  const { prefix = DEFAULT_OUT_FILE, outFile = DEFAULT_OUT_FILE } = getOptions();

  const { id, viewBox, icon } = getSymbolMeta(resourcePath, symbol);

  symbols.push({ id, viewBox, icon });
  counter += 1;

  if (!totalFiles && compilation) {
    const svgFiles = Array.from(compilation.fileDependencies).filter((file: string) => file.endsWith('.svg'));
    totalFiles = svgFiles.length || 0;
  }

  if (totalFiles === counter) {
    generateSVGFile(symbols, outFile);
  }

  return JSON.stringify({ href: `${prefix}#${id}`, viewBox });
};

export default spriteLoader;
