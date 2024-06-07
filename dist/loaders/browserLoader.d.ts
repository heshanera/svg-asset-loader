import { LoaderContext } from 'webpack';
import { LoaderOptions } from '../types';
declare const browserLoader: (loaderContext: LoaderContext<LoaderOptions>, symbol: string) => string;
export default browserLoader;
