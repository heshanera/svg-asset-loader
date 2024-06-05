import { getViewBox } from '../../src/utils/dimensionUtils';

describe('getViewBox', () => {
  it('return the viewBox if it is present', () => {
    const svgString = '<svg viewBox="0 0 100 100" width="200" height="200"><path ... /></svg>';
    const viewBox = getViewBox(svgString);
    expect(viewBox).toBe('0 0 100 100');
  });

  it('return dimensions if viewBox is not present but width and height are', () => {
    let svgString = '<svg width="200" height="150"><path ... /></svg>';
    let viewBox = getViewBox(svgString);
    expect(viewBox).toBe('0 0 200 150');

    svgString = '<svg height="100" width="200"><path ... /></svg>';
    viewBox = getViewBox(svgString);
    expect(viewBox).toBe('0 0 200 100');

    svgString = '<svg height="100" test="300" width="200"><path ... /></svg>';
    viewBox = getViewBox(svgString);
    expect(viewBox).toBe('0 0 200 100');
  });
});
