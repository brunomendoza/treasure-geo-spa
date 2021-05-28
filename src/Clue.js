import React from "react"
import DataFetcher from "./DataFetcher.js"
import Coordinates from "./Coordinates.js"

function Clue(props) {
    return (
        <DataFetcher url="./clues.json" render={(isLoading, data) => {
            if (isLoading) {
                return (
                    <p>Cargando</p>
                )
            } else {
                console.log(data)
                return (
                    <div className="clue">
                        {/* <img className="clue__image--top" src={data.graphicUrl} alt={data.graphicAlt} />
                        <div className="clue__body">
                            <h2 className="clue__title">{data.title}</h2>
                            <p className="clue__description">{props.description}</p>
                            <Coordinates latitude={props.coordinates.latitude} longitude={props.coordinates.logitude} />
                        </div> */}
                    </div>
                )
            }
        }} />
    )
}

export default Clue