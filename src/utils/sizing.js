export function getInnerDimensions(element) {
  const style = window.getComputedStyle(element);
  const borderBottomWidth = style.borderBottomWidth.length > 0 ? parseInt(style.borderBottomWidth, 10) : 0;
  const borderLeftWidth = style.borderLeftWidth.length > 0 ? parseInt(style.borderLeftWidth, 10) : 0;
  const borderRightWidth = style.borderRightWidth.length > 0 ? parseInt(style.borderRightWidth, 10) : 0;
  const borderTopWidth = style.borderTopWidth.length > 0 ? parseInt(style.borderTopWidth, 10) : 0;
  const height = style.height.length > 0 ? parseInt(style.height, 10) : 0;
  const paddingBottom = style.paddingBottom.length > 0 ? parseInt(style.paddingBottom, 10) : 0;
  const paddingLeft = style.paddingLeft.length > 0 ? parseInt(style.paddingLeft, 10) : 0;
  const paddingRight = style.paddingRight.length > 0 ? parseInt(style.paddingRight, 10) : 0;
  const paddingTop = style.paddingTop.length > 0 ? parseInt(style.paddingTop, 10) : 0;
  const width = style.width.length > 0 ? parseInt(style.width, 10) : 0;
  return {
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    height,
    innerHeight: height - paddingTop - paddingBottom - borderTopWidth - borderBottomWidth,
    innerWidth: width - paddingLeft - paddingRight - borderLeftWidth - borderRightWidth,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width
  };
}
