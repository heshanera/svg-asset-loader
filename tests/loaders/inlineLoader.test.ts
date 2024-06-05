import inlineLoader from '../../src/loaders/inlineLoader';

describe('inlineLoader', () => {
  it('return inline SVG data URI with base64 encoded symbol', () => {
    const symbol = '<svg>...</svg>';
    const expectedResult = '"data:image/svg+xml;base64,PHN2Zz4uLi48L3N2Zz4="';

    expect(inlineLoader(symbol)).toEqual(expectedResult);
  });

  it('handle empty symbol', () => {
    const emptySymbol = '';
    const expectedResult = '"data:image/svg+xml;base64,"';

    expect(inlineLoader(emptySymbol)).toEqual(expectedResult);
  });
});
