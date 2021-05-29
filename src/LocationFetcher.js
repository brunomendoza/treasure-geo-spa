import React, { Component } from "react"

class LocationFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isEnabled: false,
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})

        if ("geolocation" in window.navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    isEnabled: true,
                    isLoading: false
                })
            })
        }
    }

    render = () => (this.state.isLoading ? <div>Loading...</div> : <div>{this.state.latitude}</div> )
}

export default LocationFetcher