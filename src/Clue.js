import React, { useState } from "react"
import DataFetcher from "./DataFetcher.js"
import Coordinates from "./Coordinates.js"
import Recording from "./Recording.js"

function Clue(props) {
    return (
        <DataFetcher url="./clues.json" render={(isLoading, clue, handleClick) => {
            if (isLoading) {
                return (
                    <p>Loading data...</p>
                )
            } else {
                if (clue === null) {
                    return (
                        <p>Data not available</p>
                    )
                }
                return (
                    <div className="clue">
                        <div className="clue__heading">
                            <Recording url={clue.audioUrl}/>
                            <h2 className="clue__title">{clue.title}</h2>
                            <img className="clue__image--top" src={clue.graphicUrl} alt={clue.graphicAlt} />
                        </div>
                        <div className="clue__body">
                            <div className="clue__description">
                                <h3>Description</h3>
                                <p>{clue.description}</p>
                            </div>
                            <Coordinates />
                            <button onClick={handleClick}>Test</button>
                        </div>
                    </div>
                )
            }
        }} />
    )
}

export default Clue