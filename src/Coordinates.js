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
                        <h4>Current Location</h4>
                        <p>Latitude: {position.coords.latitude}</p>
                        <p>Longitude: {position.coords.longitude}</p>
                    </div>
                )
            }
        }} />
    )
}

export default Coordinates