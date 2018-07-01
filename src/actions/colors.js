export const SELECT_COLOR = 'SELECT_COLOR';

export function selectColor(color = { r: 0, g: 0, b: 0, a: 0 }) {
  return {
    type: SELECT_COLOR,
    color
  };
}
