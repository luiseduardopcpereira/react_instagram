const multer = require("multer")
const path = require("path")

// Destination to store image
const imageStore = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = ""

        if (req.baseUrl.includes("users")) {
            folder = "users"
        } else if (req.baseUrl.includes("photo")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}/`)
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage: imageStore,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {


            // upload only png and jpg formats
            return cb(new Error("Por favor, envie apenas pg ou jpg"))
        }
        cb(undefined, true)
    }
})

module.exports = { imageUpload }