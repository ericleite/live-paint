export default class Pencil {
  constructor(store) {
    this.store = store;
  }

  handleClickDown(canvas, x, y) {
    this.colorCanvas(canvas, x, y);
  }

  handleMouseDrag(canvas, x, y) {
    if (canvas.isMouseClicked()) {
      this.colorCanvas(canvas, x, y);
    }
  }

  handleClickUp(canvas, x, y) {
    return; // Not needed
  }

  colorCanvas(canvas, x, y) {
    const color = this.store.getState().color.activeColor;
    canvas.drawPixel(x, y, color);
  }
}
