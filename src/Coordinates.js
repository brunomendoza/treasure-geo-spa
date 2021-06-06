import React from "react"

function Coordinates(props) {
    const {lat, lon} = props.coords

    return (
        <div className="clue__coordinates">
            <h3><span className="material-icons">location_on</span>Your Location</h3>
            <p><span className="label">Latitude</span>{lat}</p>
            <p><span className="label">Longitude</span>{lon}</p>
        </div>
    )
}

export default Coordinates