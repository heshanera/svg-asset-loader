import { LoaderContext } from 'webpack';
import loader from '../src';
import browserLoader from '../src/loaders/browserLoader';
import inlineLoader from '../src/loaders/inlineLoader';
import spriteLoader from '../src/loaders/spriteLoader';
import { LoaderOptions } from '../src/types';

jest.mock('../src/loaders/browserLoader');
jest.mock('../src/loaders/inlineLoader');
jest.mock('../src/loaders/spriteLoader');

describe('loader', () => {
  const context = {
    cacheable: jest.fn(),
    getOptions: jest.fn(),
    async: jest.fn(),
  } as unknown as LoaderContext<LoaderOptions>;

  const mockBrowserLoader = browserLoader as jest.Mock;
  const mockInlineLoader = inlineLoader as jest.Mock;
  const mockSpriteLoader = spriteLoader as jest.Mock;

  it('use browserLoader by default', () => {
    jest.spyOn(context, 'getOptions').mockReturnValue({} as LoaderOptions);
    mockBrowserLoader.mockReturnValue('browserLoaderResult');
    const result = loader.call(context, 'content');

    expect(mockBrowserLoader).toHaveBeenCalledWith(context, 'content');
    expect(result).toBe('module.exports = browserLoaderResult');
  });

  it('use inlineLoader if strategy is "inline"', () => {
    jest.spyOn(context, 'getOptions').mockReturnValue({ strategy: 'inline' } as LoaderOptions);
    mockInlineLoader.mockReturnValue('inlineLoaderResult');

    const result = loader.call(context, 'content');

    expect(mockInlineLoader).toHaveBeenCalledWith('content');
    expect(result).toBe('module.exports = inlineLoaderResult');
  });

  it('use spriteLoader if strategy is "extract"', () => {
    jest.spyOn(context, 'getOptions').mockReturnValue({ strategy: 'extract' } as LoaderOptions);
    mockSpriteLoader.mockReturnValue('spriteLoaderResult');

    const result = loader.call(context, 'content');

    expect(mockSpriteLoader).toHaveBeenCalledWith(context, 'content');
    expect(result).toBe('module.exports = spriteLoaderResult');
  });
});
