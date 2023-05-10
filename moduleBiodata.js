exports.nama = function () {
  return 'nama : kurnia surya utama'
};
exports.tempatLahir = function () {
  return 'tempat lahir : Karawang'
};
exports.tanggalLahir = function () {
  return 'tanggal lahir : 12 mei 2004'
};
exports.alamat = function () {
  return 'alamat : perum puri angggrek H1/3'
};

var biodata = require('./moduleBiodata.js')

biodata =
  this.nama() +
  "\n" +
  this.tempatLahir() +
  "\n" +
  this.tanggalLahir() +
  "\n" +
  this.alamat();

console.log(biodata)
