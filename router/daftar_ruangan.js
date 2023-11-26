const express = require("express");
const router = express.Router();
const ruanganController = require("../controllers/daftar_ruangan");

router.get("/daftar_ruangan", ruanganController.index);

router.get("/ruangan/:id", ruanganController.show);

router.post("/ruangan", ruanganController.store);

router.put("/ruangan/:id", ruanganController.update);

router.delete("/ruangan/:id", ruanganController.delete);

module.exports = router;
