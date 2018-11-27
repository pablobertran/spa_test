import Store from "../store.js";
import Helper from "../helpers/shared.js";

class Component {
  constructor() {
    this.id = Helper.generateRandomUID();
    this.childrenComponents = [];
    this.store = new Store();
  }

  render() {}

  afterRender() {
    this.childrenComponents.forEach(item => item.afterRender());
  }

  addChildrenComponent(childrenComponent) {
    this.childrenComponents.push(childrenComponent);
    return childrenComponent;
  }
}

export default Component;
