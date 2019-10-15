const router = require("express").Router();

const Users = require("./users-model.js");
const mw = require("../auth/restricted-middleware.js");

router.get("/", mw.restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
