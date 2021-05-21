import React, { useState } from "react"

function App() {
    const [message, sayHello] = useState("Hello!")
    function handleGreeting() {
        sayHello("Good Bye!")
    }

    return (
        <div>
            <p>{message}</p>
            <button onClick={handleGreeting}>Comenzar</button>
        </div>
    )
}

export default App