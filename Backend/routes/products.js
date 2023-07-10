// importation des fonctions installées
const express = require("express");
const router = express.Router();

// importation des routes
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const productsCtrl = require("../controllers/products");

// Mise en place des router pour chaque type de requête
router.get("/", auth, productsCtrl.getAllProducts);
// router.post("/", auth, multer, productsCtrl.createPost);
// router.put("/:id", auth, multer, productsCtrl.modifyPost);
// router.delete("/:id", auth, productsCtrl.deletePost);
// // Route like
// router.post("/:id/like", auth, productsCtrl.likePost);

module.exports = router;
