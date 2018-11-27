import Component from "./Component.js";
import User from "../models/User.js";

class UserRegistrationForm extends Component {
  render() {
    return `
    <form class="form" id="${this.id}" name="${this.id}">
        <div class="form__row">
            <div class="form__col">
                <div class="form__element">
                    <label for="input__fullname"> Full Name</label>
                    <input type="text" name="fullname" required id="input__fullname">
                    <span class="form__element-onfocus"> Please enter your full name</span>
                </div>
            </div>
            <div class="form__col">
                <div class="form__element">
                    <label> Ride in group?</label>
                    <div class="form__element__radio-group">
                        <div class="form__element__radio-item">
                            <input class="styled-radio" id="styled-radio-1" required name="rideInGroup" type="radio" value="1">
                            <label for="styled-radio-1">Always</label>
                        </div>

                        <div class="form__element__radio-item">
                            <input class="styled-radio" id="styled-radio-2" required name="rideInGroup" type="radio" value="2">
                            <label for="styled-radio-2">Sometimes</label>
                        </div>

                        <div class="form__element__radio-item">
                            <input class="styled-radio" id="styled-radio-3" required name="rideInGroup" type="radio" value="3">
                            <label for="styled-radio-3">Never</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form__row">
            <div class="form__col">
                <div class="form__element">
                    <label for="input__email"> E-mail</label>
                    <input type="email" name="email" required id="input__email">
                    <span class="form__element-onfocus">Please enter a valid email</span>
                </div>
            </div>
            <div class="form__col">
                <div class="form__element">
                    <label> Days of the week</label>
                    <div class="form__element__radio-group">
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" name="days"
                                    value="sun">
                            <label for="styled-checkbox-1">Sun</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" name="days"
                                    value="mon">
                            <label for="styled-checkbox-2">Mon</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" name="days"
                                    value="tue">
                            <label for="styled-checkbox-3">Tue</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" name="days"
                                    value="wed">
                            <label for="styled-checkbox-4">Wed</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-5" type="checkbox" name="days"
                                    value="thu">
                            <label for="styled-checkbox-5">Thu</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-6" type="checkbox" name="days"
                                    value="fri">
                            <label for="styled-checkbox-6">Fri</label>
                        </div>
                        <div class="form__element__radio-item">
                            <input class="styled-checkbox" id="styled-checkbox-7" type="checkbox" name="days"
                                    value="sat">
                            <label for="styled-checkbox-7">Sat</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form__row">
            <div class="form__col">
                <div class="form__element">
                    <label for="input__city" class="optional"> City</label>
                    <input type="text" name="city" id="input__city">
                    <span class="form__element-onfocus">Please enter your City</span>
                </div>
            </div>
            <div class="form__col">
                <input type="submit" value="Save" class="btn btn-green pull-right"/>
                <input type="reset" value="Cancel" class="btn btn-grey pull-right"/>
            </div>
        </div>
    </form>
        `;
  }
  afterRender() {
    const element = document.getElementById(this.id);
    element.addEventListener("submit", e => {
      console.log("Adding User");
      e.preventDefault();
      const form = document[this.id];

      const rideInGroup = element.querySelector(
        'input[name="rideInGroup"]:checked'
      )
        ? element.querySelector('input[name="rideInGroup"]:checked').value
        : null;

      const daysOfWeek = Array.from(
        element.querySelectorAll('input[name="days"]:checked')
      ).map(item => item.value);
      const user = new User(
        form.fullname.value,
        form.email.value,
        form.city.value,
        rideInGroup,
        daysOfWeek,
        new Date()
      );

      let users = [user];
      if (this.store.data.users) {
        users = [...this.store.data.users, ...users];
      }
      this.store.updateData("users", users);
    });
  }
}

export default UserRegistrationForm;
