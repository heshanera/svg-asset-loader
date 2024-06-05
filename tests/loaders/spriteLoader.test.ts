import { LoaderContext } from 'webpack';
import spriteLoader from '../../src/loaders/spriteLoader';
import { LoaderOptions } from '../../src/types';
import { generateSVGFile } from '../../src/utils/fileUtils';

jest.mock('../../src/utils/fileUtils', () => ({
  generateSVGFile: jest.fn(),
}));

describe('spriteLoader', () => {
  let mockLoaderContext: LoaderContext<LoaderOptions>;

  beforeEach(() => {
    mockLoaderContext = {
      resourcePath: 'path/to/icon.svg',
      getOptions: jest.fn(),
      _compilation: {
        fileDependencies: new Set(['path/to/icon.svg', 'path/to/icon2.svg', 'path/to/icon3.svg', 'path/to/icon4.svg']),
      },
    } as unknown as LoaderContext<LoaderOptions>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('return stringified data with href and viewBox for a symbol', () => {
    mockLoaderContext.getOptions = jest.fn().mockReturnValue({ prefix: '/path/sprite.svg', outFile: 'sprite.svg' });
    const mockSymbol = '<svg viewBox="0 0 100 100"><path d="M..." /></svg>';

    const sprite = spriteLoader(mockLoaderContext, mockSymbol);

    expect(sprite).toEqual(JSON.stringify({ href: '/path/sprite.svg#icon', viewBox: '0 0 100 100' }));
  });

  it('return data with default values when options not provided', () => {
    mockLoaderContext.getOptions = jest.fn().mockReturnValue({});
    const mockSymbol = '<svg viewBox="0 0 100 100"><path d="M..." /></svg>';

    const sprite = spriteLoader(mockLoaderContext, mockSymbol);

    expect(sprite).toEqual(JSON.stringify({ href: 'sprite.svg#icon', viewBox: '0 0 100 100' }));
  });

  it('generate sprite on processing all symbols', () => {
    const mockSymbol3 = '<svg viewBox="0 0 100 100"><path d="M..." /></svg>';
    const mockSymbol4 = '<svg viewBox="0 0 100 100"><path d="M..." /></svg>';

    mockLoaderContext.getOptions = jest.fn().mockReturnValue({});

    mockLoaderContext.resourcePath = 'path/to/icon3.svg';

    spriteLoader(mockLoaderContext, mockSymbol3);

    mockLoaderContext.resourcePath = 'path/to/icon4.svg';
    spriteLoader(mockLoaderContext, mockSymbol4);

    expect(generateSVGFile).toHaveBeenCalledWith(
      [expect.any(Object), expect.any(Object), expect.any(Object), expect.any(Object)],
      'sprite.svg',
    );
    expect(generateSVGFile).toHaveBeenCalledTimes(1);
  });
});
