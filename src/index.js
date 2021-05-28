import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./style.scss"
import {hasGeolocation} from "../helper/helper.js"

if (hasGeolocation()) {
    ReactDOM.render(<App />, document.getElementById("root"))
} else {
    ReactDOM.render(<h2>Damn it</h2>, document.getElementById("root"))
}
