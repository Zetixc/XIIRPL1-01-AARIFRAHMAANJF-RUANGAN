const mongoose = require("mongoose");

const RuanganSchema = new mongoose.Schema({
  nama_ruangan: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    unique: true,
  },
  mapel: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    unique: true,
  },
  waktu: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    unique: true,
  },
  kelas: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    unique: true,
  },
  fasilitas: {
    type: String,
    required: [true, "Silahkan isikan nama"],
    unique: true,
  },
});

module.exports = mongoose.model("Ruangan", RuanganSchema);
