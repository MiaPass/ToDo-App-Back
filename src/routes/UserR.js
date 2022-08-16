const router = require("express").Router();
const UserCRUD = require("../controllers/userCM");

var user = new UserCRUD();

router.get("/all", async (req, res) => {
  try {
    const all = await user.getAll();
    // console.log( all);
    res.status(200).json(all);
  } catch (error) {
    console.log("Get all failed, error: ", error);
  }
});

router.post("/modify/", async (req, res) => {
  const form = req.body;

  try {
    const result = await user.modify(form);
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log("Modify failed, error: ", error);
  }
});

router.post("/create", async (req, res) => {
  const form = req.body;

  try {
    const created = await user.create(form);
    // console.log(created);
    res.status(200).json(created);
  } catch (error) {
    console.log("Create failed, error: ", error);
  }
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;
  try {
    const none = await user.delete(id);
    // console.log(none);
    res.status(200).json(none);
  } catch (error) {
    console.log("Delete failed, error: ", error);
  }
});

module.exports = router;
