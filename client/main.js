let ws = new WebSocket("ws://localhost:8008")
const version = 0.1

ws.addEventListener("open", _ => {
    console.log("connected!")

    ws.send("This is where you send data to server (string, Object, whatever type you want)")
})

ws.addEventListener("message", event => {
    console.log("Message arrived from server: %s", event.data)
})
