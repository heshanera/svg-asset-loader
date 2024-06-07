import { LoaderContext } from 'webpack';
import { LoaderOptions } from '../types';
declare const spriteLoader: (loaderContext: LoaderContext<LoaderOptions>, symbol: string) => string;
export default spriteLoader;
