export default class Pencil {
  handleMouseDown(canvas, color, point) {
    this.colorCanvas(canvas, color, point);
  }

  handleMouseMove(canvas, color, point) {
    if (canvas.isMouseClicked()) {
      this.colorCanvas(canvas, color, point);
    }
  }

  handleMouseUp(canvas, color, point) {
    return; // Not needed
  }

  colorCanvas(canvas, color, { x, y }) {
    canvas.drawPixel(x, y, color);
  }
}
