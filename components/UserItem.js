import Component from "./Component.js";

class UserItem extends Component {
  constructor(user) {
    super();
    this.user = user;
  }
  render() {
    return `
       <div class="table-row" id=${this.id}>
          <div class="table-cell col-15">${this.user.fullName}</div>
          <div class="table-cell col-20">${this.user.email}</div>
          <div class="table-cell col-5">${this.user.city}</div>
          <div class="table-cell col-20">${this.user.getRideInGroupString()}</div>
          <div class="table-cell col-20">${this.user.getDaysOfWeekString()}</div>
          <div class="table-cell col-15">${this.user.registrationDay.toLocaleDateString()} <span class="table-cell__time">${this.user.registrationDay.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span></div>
          <div class="table-cell col-5"><i class="fas fa-trash"></i></div>
      </div>
       `;
  }
  afterRender() {
    const element = document.getElementById(this.id);

    element
      .querySelector(".fa-trash")
      .parentElement.addEventListener("click", e => {
        this.store.updateData(
          "users",
          this.store.data.users.filter(user => user.email !== this.user.email)
        );
      });
  }
}

export default UserItem;
