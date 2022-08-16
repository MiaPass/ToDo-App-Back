const router = require("express").Router();
const ToDoCRUD = require("../controllers/TodoCM");

var todo = new ToDoCRUD();

router.get("/all", async (req, res) => {
  try {
    const all = await todo.getAll();
    // console.log( all);
    res.status(200).json(all);
  } catch (error) {
    console.log("Get all failed, error: ", error);
  }
});

router.post("/modify/", async (req, res) => {
  const form = req.body;

  try {
    const result = await todo.modify(form);
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log("Modify failed, error: ", error);
  }
});

router.post("/create", async (req, res) => {
  // console.log(req.body);
  const { title, description, status } = req.body;

  try {
    const created = await todo.create(title, description, status);
    // console.log(created);
    res.status(200).json(created);
  } catch (error) {
    console.log("Create failed, error: ", error);
  }
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;
  try {
    const none = await todo.delete(id);
    // console.log(none);
    res.status(200).json(none);
  } catch (error) {
    console.log("Delete failed, error: ", error);
  }
});

module.exports = router;
