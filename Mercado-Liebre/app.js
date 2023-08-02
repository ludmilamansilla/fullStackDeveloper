const express = require("express")
let app = express()
const PORT = 3000
let path = require("path")


app.use(express.static("public"))


// RUTAS
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})


app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))