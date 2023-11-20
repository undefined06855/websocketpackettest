import { WebSocketServer } from "ws"

const wss = new WebSocketServer({
    port: 8008 // set this to 80 or something
})

wss.on("error", data => {
    console.error(data)
})

wss.on("connection", client => {
    console.log("websocket open!")

    client.on("message", data => {
        data = JSON.parse(data)
        console.log("received: %s", data)

        client.send("Response goes here (can be string, Object, Blob, whatever)")
    })

    client.send("You can send stuff to clients whenever as well")
})
