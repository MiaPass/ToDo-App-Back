const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const todos = require("./TodosR.js");
const user = require("./UserR.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/todos", todos);
router.use("/user", user);

module.exports = router;
