const User = require("../modules/UserM");

class UserCRUD {
  constructor() {
    this.model = User;
  }
  //metodos

  async getAll() {
    try {
      const all = await User.find();

      //   console.log(all);
      return all;
    } catch (err) {
      console.log(err);
    }
  }

  async create(form) {
    try {
      var user = new User({
        profilephoto: form.profilephoto,
        username: form.username,
        email: form.email,
        password: form.password,
        theme: "dayTheme",
      });
      var result = await user.save();
      //   console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async modify(form) {
    try {
      const filter = form.id;
      const changes = {
        profilephoto: form.profilephoto,
        username: form.username,
        email: form.email,
        password: form.password,
        theme: form.theme,
      };
      const result = await User.findByIdAndUpdate(filter, changes, {
        new: true,
      });
      //   console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const result = await User.deleteOne({ _id: id });
      //   console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserCRUD;
