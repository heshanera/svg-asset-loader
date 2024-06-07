import { LoaderContext } from 'webpack';
import { LoaderOptions } from './types';
declare function loader(this: LoaderContext<LoaderOptions>, content: string): string;
export default loader;
