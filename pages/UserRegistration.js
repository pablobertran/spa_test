import HelpInfo from "../components/HelpInfo.js";
import UserRegistrationForm from "../components/UserRegistrationForm.js";
import UserList from "../components/UserList.js";
import Component from "../components/Component.js";

class UserRegistration extends Component {
  constructor() {
    super();

    let users = [];
    if (this.store.data.users) {
      users = this.store.data.users;
    }
    this.userForm = this.addChildrenComponent(new UserRegistrationForm());
    this.userList = this.addChildrenComponent(new UserList(users));
    this.helpInfo = this.addChildrenComponent(new HelpInfo());
  }
  render() {
    return `
          ${this.helpInfo.render()}
          <div class="content">
            <h1>User Registration</h1>
            ${this.userForm.render()}
            ${this.userList.render()}
          </div>
        `;
  }
}

export default UserRegistration;
