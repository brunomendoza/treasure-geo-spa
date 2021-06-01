import React from "react"
import LocationFetcher from "./LocationFetcher.js"

function Coordinates() {
    return (
        <LocationFetcher render={(isLoading, position, error) => {
            if (isLoading) {
                return (<p>Loading...</p>)
            } else {
                if (error != null) {
                    console.warn(error.message)
                    return (
                        <p>No data available</p>
                    )
                }
                
                if (position === null) {
                    return (<p>No data</p>) 
                }

                return (
                    <div className="clue__coordinates">
                        <h3><span className="material-icons">location_on</span>&nbsp;Your Location</h3>
                        <p>lat: {position.coords.latitude}</p>
                        <p>lon: {position.coords.longitude}</p>
                    </div>
                )
            }
        }} />
    )
}

export default Coordinates