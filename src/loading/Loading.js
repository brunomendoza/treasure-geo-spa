import React from "react"

export default function Loading(props) {
    const {title} = props
    return (
        <div className="spinner__wrapper">
            <div className="spinner"></div>
            {/* <div className="spinner">{`Loading ${title}...`}</div> */}
        </div>
    )
}