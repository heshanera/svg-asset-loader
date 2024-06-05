import { LoaderContext } from 'webpack';
import { LoaderOptions, SymbolMeta } from '../types';
import { getSymbolMeta } from '../utils/svgUtils';

const SVG_CONTAINER = 'svg-asset-loader';
const svgSymbol: SymbolMeta = {
  id: '',
  viewBox: '',
  icon: '',
};

const createSymbolElement = () => {
  const { id, viewBox, icon } = svgSymbol;
  const symbolElement = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
  symbolElement.id = id;
  symbolElement.setAttribute('viewBox', viewBox);
  symbolElement.innerHTML = icon;

  return symbolElement;
};

const addSpriteSymbol = () => {
  let spriteSheet = document.getElementById(SVG_CONTAINER);
  if (!spriteSheet) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = SVG_CONTAINER;
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svg.style.display = 'none';

    const { firstChild } = document.body;
    document.body.insertBefore(svg, firstChild);

    spriteSheet = document.getElementById(SVG_CONTAINER);
  }

  if (spriteSheet) {
    spriteSheet.appendChild(createSymbolElement());
  }
};

const domElementLoader = () => {
  if (document.body) {
    addSpriteSymbol();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      addSpriteSymbol();
    });
  }
};

const browserLoader = (loaderContext: LoaderContext<LoaderOptions>, symbol: string) => {
  const { resourcePath } = loaderContext;
  const { id, viewBox, icon } = getSymbolMeta(resourcePath, symbol);

  const loaderScript = `
    (function () {
        'use strict';

        const SVG_CONTAINER = "${SVG_CONTAINER}";
        const svgSymbol = ${JSON.stringify({ id, viewBox, icon })};
        
        const createSymbolElement = ${createSymbolElement.toString()}
        const addSpriteSymbol = ${addSpriteSymbol.toString()}
        (${domElementLoader.toString()})()
        return ${JSON.stringify({ id, viewBox })};
    })()
  `;

  return loaderScript;
};

export default browserLoader;
