import { LoaderContext } from 'webpack';
import { LoaderOptions } from './types';
import browserLoader from './loaders/browserLoader';
import inlineLoader from './loaders/inlineLoader';
import spriteLoader from './loaders/spriteLoader';

function loader(this: LoaderContext<LoaderOptions>, content: string) {
  const { cacheable, getOptions } = this;

  if (cacheable) cacheable();
  const { strategy } = getOptions();

  const symbol = content.toString();
  let loaderStrategy = browserLoader(this, symbol);

  if (strategy === 'inline') {
    loaderStrategy = inlineLoader(symbol);
  } else if (strategy === 'extract') {
    loaderStrategy = spriteLoader(this, symbol);
  }

  return `module.exports = ${loaderStrategy}`;
}

export default loader;
