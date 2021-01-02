const express = require("express");
const routers = express.Router();
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { fileURLToPath } = require("url");

//uji coba penggunaan router tahap awal
// routers.get("/", (req, rest) => rest.send("Hello Daus"));
// routers.get("/halaman/:id", (req, res) => {
//   if (req.params.id) res.send("artikle-" + req.params.id);
// });

//uji coba penggunaan body parser pada router
// routers.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.send(`Anda login dengan username ${username} dan password ${password}`);
// });

//uji coba file preview (res.sendFile())
// routers.get("/download", function (req, res) {
//   const filename = "logo.png";
//   res.sendFile(__dirname + "/" + filename);
// });

//uji coba file preview (res.sendFile()) dengan lebih aman menggunakan path dan berhasil
// link uji coba http://localhost:3000/download
// routers.get("/download", function (req, res) {
//   const filename = "logo.png";
//   res.sendFile(path.join(__dirname, filename));
// });

//uji coba file preview (res.sendFile()) dengan lebih aman menggunakan path dan berhasil
// link uji coba http://localhost:3000/download
//uji coba pengubahan nama file terdownload dengan nama file di server side
// routers.get("/download", (req, res) => {
//   const filename = "logo.png";
//   res.sendFile(path.join(__dirname, filename), {
//     headers: {
//       "Content-Disposition": 'attachment; filename="logo-utama.png"',
//     },
//   });
// });

//uji coba pengubahan nama file terdownload dengan nama file di server side dengan lebih singkat dan berhasil
// link uji coba http://localhost:3000/download
//uji coba pengubahan nama file terdownload dengan nama file di server side
// routers.get("/download", (req, res) => {
//   const filename = "logo.png";
//   res.download(path.join(__dirname, filename), "logo-utama.png");
// });

//uji coba menampilkan gambar pada browser menggunakan (Content-Type)
// link uji coba http://localhost:3000/view
// routers.get("/view", (req, res) => {
//   const filename = "logo.png";
//   res.sendFile(path.join(__dirname, filename), {
//     headers: {
//       "Content-Type": "image/png",
//     },
//   });
// });

//uji coba menampilkan gambar pada browser menggunakan (Content-Type) di folder public
// link uji coba http://localhost:3000/view
// routers.get("/view", (req, res) => {
//   const __dirname = "public";
//   const filename = "logo.png";
//   res.download(path.join(__dirname, filename), "logo-utama.png");
// });

//uji coba file upload menggunakan multer
// const upload = multer({ dest: "public" });
// routers.post("/upload", upload.single("file"), (req, res) => {
//   res.send(req.file);
// });

// uji coba upload.array('files') menjadi hash dan berhasil
// const upload = multer({ dest: "public" });
// routers.post("/upload", upload.single("file"), (req, res) => {
//   res.send(req.file);
// });

// uji coba upload.array('files') dengan menggunakan nama asli fs.renameSync(oldPath, newPath) dan berhasil
// const upload = multer({ dest: "public" });
// routers.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   if (file) {
//     const target = path.join(__dirname, "public", file.originalname);
//     fs.renameSync(file.path, target);
//     res.send("file berhasil diupload");
//   } else {
//     res.send("file gagal diupload");
//   }
// });

//uji coba upload khusus images dan menggunakan nama asli
// const imageFilter = (req, file, cb) => {
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     return cb(null, false);
//   }
//   cb(null, true);
// };
// const upload = multer({ dest: "public", fileFilter: imageFilter });
// routers.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   if (file) {
//     const target = path.join(__dirname, "public", file.originalname);
//     fs.renameSync(file.path, target);
//     res.send("file berhasil diupload");
//   } else {
//     res.send("file gagal diupload");
//   }
// });

//uji coba upload 2 jenis yang berbeda 1 string 1 file dan berhasil
// const upload = multer({ dest: "public" });
// routers.post("/", upload.single("avatar"), (req, res) => {
//   const name = req.body.name;
//   const avatar = req.file;
//   res.send({ name: name, avatar: avatar });
// });

//uji coba upload menggunakan banyak file upload sekaligus
// upload.aray(NAMA_FIELD,JUMLAH_MAX_FILE) key menggunakan (photos)
// const upload = multer({ dest: "public" });
// routers.post("/", upload.array("photos", 12), (req, res) => {
//   const avatar = req.files;
//   res.send({ avatar: avatar });
// });

//uji coba upload beberapa fild bertipe file satu form upload dan berhasil
// const upload = multer({ dest: "public" });
// var cpUpload = upload.fields([
//   { name: "avatar", maxCount: 1 },
//   { name: "gallery", maxCount: 4 },
// ]);
// routers.post("/", cpUpload, (req, res, next) => {
//   const data = req.files["avatar"][0]; <------ hanya bisa digunakan satu persatu
//   const data2 = req.files["gallery"];
//   res.send({ avatar: data2 });
// });

//uji coba upload file hanya bertipe text saja dan berhasil
//menggunakan multer().none
// routers.post("/", multer().none(), (req, res, next) => {
//   const name = req.body.name;
//   res.send({ nama: name });
// });
module.exports = routers;
