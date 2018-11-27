const RIDE_IN_GROUPS_TYPES = ["Always", "Sometimes", "Never"];

class User {
  constructor(fullName, email, city, rideInGroup, daysOfWeek, registrationDay) {
    this._fullName = fullName;
    this._email = email;
    this._city = city;
    this._rideInGroup = rideInGroup;
    this._daysOfWeek = daysOfWeek;
    this._registrationDay = registrationDay;
  }

  static fromLocalStorage(rawObject) {
    const {
      _fullName,
      _email,
      _city,
      _daysOfWeek,
      _rideInGroup,
      _registrationDay
    } = rawObject;

    return new User(
      _fullName,
      _email,
      _city,
      _rideInGroup,
      _daysOfWeek,
      new Date(_registrationDay)
    );
  }

  set fullName(value) {
    this._fullName = value;
  }

  get fullName() {
    return this._fullName;
  }

  set email(value) {
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set city(value) {
    this._city = value;
  }

  get city() {
    return this._city;
  }

  set rideInGruop(value) {
    this._rideInGroup = value;
  }

  get rideInGroup() {
    return this._rideInGroup;
  }

  set daysOfWeek(value) {
    this._daysOfWeek = value;
  }

  get daysOfWeek() {
    return this._daysOfWeek;
  }

  set registrationDay(value) {
    this._registrationDay = value;
  }

  get registrationDay() {
    return this._registrationDay;
  }

  getRideInGroupString() {
    return RIDE_IN_GROUPS_TYPES[this._rideInGroup];
  }

  getDaysOfWeekString() {
    const everyday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const weekDays = ["mon", "tue", "wed", "thu", "fri"];
    const weekend = ["sun", "sat"];

    if (everyday.every(item => this._daysOfWeek.includes(item))) {
      return "Every day";
    } else if (weekDays.every(item => this._daysOfWeek.includes(item))) {
      return "Week days";
    } else if (weekend.every(item => this._daysOfWeek.includes(item))) {
      return "Weekends";
    } else {
      return this._daysOfWeek
        .map(item => item.replace(/^\w/, c => c.toUpperCase()))
        .join(", ");
    }
  }
}

export default User;
