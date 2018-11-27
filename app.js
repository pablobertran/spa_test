import UserRegistration from "./pages/UserRegistration.js";
import Store from "./store.js";
import User from "./models/User.js";
import INITIAL_DATA from "./initialData.js";

let content = {};

const app = {
  update: () => {
    const userRegistration = new UserRegistration();
    content.innerHTML = userRegistration.render();
    userRegistration.afterRender();
  }
};

const getInitialData = () => {
  const storage = JSON.parse(localStorage.getItem("users"));

  if (!storage) {
    localStorage.setItem("users", JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }

  return {
    users: storage.users.map(item => User.fromLocalStorage(item))
  };
};

const main = () => {
  new Store(app, getInitialData());
  content = document.getElementById("page_container");
  app.update();
};

window.addEventListener("load", main);
