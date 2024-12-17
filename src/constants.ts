export const SVG_TAG_PATTERN = /<svg[^>]*>(.*?)<\/svg>/s;
export const SVG_W_PATTERN = /width="([^"]+)"/i;
export const SVG_H_PATTERN = /height="([^"]+)"/i;
export const VIEW_BOX_PATTERN = /viewBox="([^"]+)"/i;
export const ID_PATTERN = /id="([^"]+)"/g;
export const XLINK_HREF_PATTERN = /xlink:href="#([^"]+)"/g;
export const URL_REF_PATTERN = /(\b(?:mask|clip-path|filter|fill|stroke)\b)="url\(#([^"]+)\)"/g;

export const DEFAULT_OUT_FILE = 'sprite.svg';
export const SVG_CONTAINER_ID = 'svg-asset-loader';
