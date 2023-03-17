import User from "./index.js";

// Using controller pattern to separate business logic from routes
const controller = {
  create(username, password) {
    // using bracket notation to access the function
    return User.create({ username, password });
  },
  //   using asycn/await to handle promises
  async show(username, password) {
    const user = await User.findOne({ username });

    const correctPassword = await user?.isCorrectPassword(password);

    if (!correctPassword) {
      throw new Error("Incorrect password");
    }

    return user;
  },
};

// Exporting controller to be used in routes
export default controller;
