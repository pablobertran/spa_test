import Component from "./Component.js";
import UserItem from "./UserItem.js";

class UserList extends Component {
  constructor(users) {
    super();
    this.userComponents = users.map(item =>
      this.addChildrenComponent(new UserItem(item))
    );
  }
  render() {
    return `
        <h1>Bikers</h1>
        <div class="table">
            <div class="table-row table-header">
                <div class="table-cell col-15">Full Name</div>
                <div class="table-cell col-20">E-mail</div>
                <div class="table-cell col-5">City</div>
                <div class="table-cell col-20">Ride in group</div>
                <div class="table-cell col-20">Days of the week</div>
                <div class="table-cell col-15">Registration day</div>
                <div class="table-cell col-5"></div>
            </div>
            ${this.userComponents.map(component => component.render()).join("")}
        </div>
        `;
  }
}

export default UserList;
