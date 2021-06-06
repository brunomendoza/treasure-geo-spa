import React, { Component } from "react"
import Spot from "./helper/Spot"
import Loading from "./loading/Loading"

class LocationFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
        this.spot = new Spot
    }

    componentDidMount = () => {
        this.spot.subscribe(this.handlePosition)
        this.spot.watchPosition()
    }

    handlePosition = coords => {
        const {lon, lat}  = coords
         
        this.setState({
            isLoading: false,
            coords: {
                lat,
                lon
            }
        })
    }

    render = () => {
        const {isLoading, coords} = this.state
        const { clues } = this.props
        
        return (
            isLoading ? <Loading title="Location" /> : this.props.render(clues, coords)
        )
    }
}

export default LocationFetcher