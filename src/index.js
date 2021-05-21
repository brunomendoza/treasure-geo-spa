import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./style.scss"

ReactDOM.render(<App />, document.getElementById("root"))

const geo = navigator.geolocation

if (!geo) {
    console.log("geolocation no available!")
} else {
    console.log(geo.getCurrentPosition(() => console.log("It's done!")))
}