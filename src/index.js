import app from "./app.js";
import { initSocketIo } from "./socket.js";


const appServer = app.listen(3000, ()=> {
    console.log("Server on port: 3000" )
})

initSocketIo(appServer).listen(3001, ()=> {
    console.log("Socket on port: 3001")
})
