export function getColorIndicesForCoord(x, y, width) {
  var red = y * (width * 4) + x * 4;
  return {
    rIndex: red,
    gIndex: red + 1,
    bIndex: red + 2,
    aIndex: red + 3
  };
}
