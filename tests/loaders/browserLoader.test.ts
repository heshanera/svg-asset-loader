import { LoaderContext } from 'webpack';
import { LoaderOptions } from '../../src/types';
import browserLoader from '../../src/loaders/browserLoader';

const SVG_CONTAINER = 'svg-asset-loader';

describe('browserLoader', () => {
  it('generates script with symbol data', () => {
    const loaderContext = { resourcePath: 'path/to/symbol.svg' } as LoaderContext<LoaderOptions>;
    const symbol = '<svg viewBox="0 0 100 100"><path d="M..." /></svg>';

    const script = browserLoader(loaderContext, symbol);

    expect(script).toContain(`const SVG_CONTAINER = "${SVG_CONTAINER}"`);
    expect(script).toContain(JSON.stringify({ id: 'symbol', viewBox: '0 0 100 100' }));
    expect(script).toContain('document.addEventListener');
  });
});
