import Pencil from './Pencil';

class ToolFactory {
  constructor(tools) {
    this.tools = tools;
  }

  getTool(name) {
    return this.tools[name];
  }
}

export default new ToolFactory({
  pencil: new Pencil()
});
