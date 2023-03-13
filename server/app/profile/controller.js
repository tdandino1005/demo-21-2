import Profile from "./index.js";

const controller = {
  create(newProfileName) {
    return Profile.create({ name: newProfileName });
  },
  index() {
    return Profile.find({});
  },
  delete(profileId) {
    return Profile.findByIdAndDelete(profileId);
  },
};

export default controller;
