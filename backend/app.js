require("dotenv").config()

// framework do backend
const express = require("express")
//  para determinar o diretorio das imagens - node
const path = require("path")
// acessar o projeto na propria aplicação front-end
const cors = require("cors")

const port = process.env.PORT;

//inciando a aplicação frameword
const app = express()

// config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// solve cors - quando executa as requisições pelo mesmo dominio
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js");

// router
const router = require("./routes/Router.js")

app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)

})