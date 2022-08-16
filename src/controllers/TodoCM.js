const ToDo = require("../modules/TodoM");

class ToDoCRUD {
  constructor() {
    this.model = ToDo;
  }
  //metodos

  async getAll() {
    try {
      const all = await ToDo.find();

      //   console.log(all);
      return all;
    } catch (err) {
      console.log(err);
    }
  }

  async create(title, description, status) {
    try {
      var todo = new ToDo({
        title: title,
        description: description,
        status: "incomplete",
      });
      var result = await todo.save();
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
        creator: form.user,
        title: form.title,
        description: form.description,
        status: form.status,
      };
      const result = await ToDo.findByIdAndUpdate(filter, changes, {
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
      const result = await ToDo.deleteOne({ _id: id });
      console.log(result);
      //   return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ToDoCRUD;
