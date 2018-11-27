import User from "./models/User.js";

const INITIAL_DATA = {
  users: [
    new User(
      "James Isacc Neutron",
      "neutron@example.com",
      "City",
      0,
      ["sun", "mon", "tue", "wed", "thr", "fri", "sat"],
      new Date()
    ),
    new User(
      "Carl Wheezer",
      "carl@example.com",
      "City",
      1,
      ["mon", "tue", "wed", "thr"],
      new Date()
    )
  ]
};

export default INITIAL_DATA;
