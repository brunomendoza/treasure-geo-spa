import React, { useState } from "react"
import DataFetcher from "./DataFetcher.js"
import Coordinates from "./Coordinates.js"

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
                        <img className="clue__image--top" src={clue.graphicUrl} alt={clue.graphicAlt} />
                        <div className="clue__body">
                            <h2 className="clue__title">{clue.title}</h2>
                            <p className="clue__description">{clue.description}</p>
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