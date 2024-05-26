import express from 'express'
import routsApp from './routes/routesComentarios';
import routerUsuarios from './routes/routesUsuarios';
const actions = ["GET", "POST", "PUT", "DELETE", "PATCH"]
const app = express();
app.use(express.json());
app.get("/responses", (req:any, res:any) => {
    res.json({
        hola:"hola",
    })
})
app.use("/comentarios", routsApp)
app.use("/usuarios",routerUsuarios)
app.use((req:any, res:any,next) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","*")
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization")
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})