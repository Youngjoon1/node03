const express= require("express");
const router = express.Router();
const ctrl = require("../../controller/cookie/cookie_ctrl");

router.get("/",ctrl.index);
router.get("/popup",ctrl.popup);
router.get("/quiz",ctrl.quiz);
router.get("/quiz_popup",ctrl.quizPopup);
router.get("/makeCookie",ctrl.makeCookie);


module.exports = router;