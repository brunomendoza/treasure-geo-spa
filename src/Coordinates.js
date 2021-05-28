import React from "react"

function Coordinate(props) {
    return (
        <div className="clue__coordinates">
            <p>Latitud: {props.latitude}</p>
            <p>Longitud: {props.logitude}</p>
        </div>
    )
}

export default Coordinate