import React, { Component } from "react"

class LocationFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isAvailable: false,
            position: null,
            err: null
        }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})

        if ("geolocation" in window.navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState({
                    position: pos,
                    isAvailable: true,
                    isLoading: false,
                })
            }, err => {
                this.setState({
                    isLoading: false,
                    err: err
                })
            })
        }
    }

    render = () => {
        if (!this.state.isLoading) {
            if (this.state.isAvailable) {
                return (this.state.isLoading ? <div>Loading...</div> : <div>{this.state.position.coords.latitude}</div> )
            }
            
            return (
                <p>Gelocation not available</p>
            )
        }

        return (<p>Loading...</p>)
    }
}

export default LocationFetcher