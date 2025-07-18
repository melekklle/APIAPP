const router = require("express").Router()

const auth = require("./auth.routher")

router.use(auth)

module.exports= router  