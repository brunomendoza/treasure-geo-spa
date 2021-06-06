import React, { useState } from "react"
import DataFetcher from "./DataFetcher.js"
import Coordinates from "./Coordinates.js"
import Recording from "./Recording.js"
import LocationFetcher from "./LocationFetcher.js"
import { areNear } from "./helper/helper.js"

function Clue(props) {
    const [id, setId] = useState(0)

    return (
        <DataFetcher url="./clues.json" render={clues => {
            return (
                <LocationFetcher clues={clues} render={(clues, coords) => {
                    if (!clues) {
                        return (
                            <p>Data not available</p>
                        )
                    }

                    const clue = clues[id]
                    if (areNear(clue.coords, coords)) setId(id + 1)

                    return (
                        <div className="clue">
                            <div className="clue__heading">
                                <Recording url={clue.audioUrl}/>
                                <h2 className="clue__title">{clue.title}</h2>
                                <img className="clue__image--top" src={clue.graphicUrl} alt={clue.graphicAlt} />
                            </div>
                            <div className="clue__body">
                                <div className="clue__description">
                                    <h3><span className="material-icons">info</span>Description</h3>
                                    <p>{clue.description}</p>
                                </div>
                                <Coordinates coords={coords} />
                            </div>
                        </div>
                    )
                }} />
            )
        }} />
    )
}

export default Clue