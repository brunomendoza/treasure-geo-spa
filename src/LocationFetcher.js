import React, { Component } from "react"
import { getCurrentPosition } from "./helper/helper"

class LocationFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            position: null,
            error: null,
        }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})

        getCurrentPosition({
            enableHighAccuracy: true,
            setTimeout: 10000,
            maximumAge: 0
        })
        .then(position => this.setState({
            position,
            isLoading: false
        }))
        .catch(error => {
            this.setState({
                error,
                isLoading: false
            })
        })
    }

    render = () => {
        const {isLoading, position, error} = this.state
        return (
            this.props.render(isLoading, position, error)
        )

        // const {isLoading, position} = this.state

        // if(isLoading) {
        //     return(<p>Loading...</p>)
        // } else {
        //     if(position === null) {
        //         return (<p>No data</p>)
        //     }
         
        //     return (<p>{position.coords.latitude}</p>)
        // }
    }
}

export default LocationFetcher