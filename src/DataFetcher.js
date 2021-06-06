import React, { Component } from "react"
import Loading from "./loading/Loading"

class DataFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch(this.props.url)
        .then(res => res.json())
        .then(clues => {
            this.setState({
                isLoading: false,
                clues
            })
        })
        .catch(error => this.setState({
            isLoading: false,
            error
        }))
    }

    componentDidUpdate() {
        console.log("Updated!")
    }

    // handleWatch = position => {
    //     if (!this.state.isFinished) {
    //         this.setState({isLoading: true})

    //         if (this.state.id > 4) {
    //             console.log("Greater than 4")
    //             this.setState({
    //                 isFinished: true,
    //                 isLoading: false
    //             })
                
    //             navigator.geolocation.clearWatch(this.watchId)
    //         } else {
    //             console.log("Less than 4")
    //             const clueCoords = new Coordinate(this.position.coords.longitude, this.position.coords.latitude)
    //             const currentCoords = new Coordinate(position.coords.longitude, position.coords.latitude)

    //             if (clueCoords.isNearOf(currentCoords)) {
    //                 this.setState(state => ({
    //                     id: state.id + 1
    //                 }))
            
    //                 fetch(this.props.url)
    //                     .then(res => res.json())
    //                     .then(clues => {
    //                         for (const clue of clues) {
    //                             if (clue.id === this.state.id) {
    //                                 this.setState({
    //                                     isLoading: false,
    //                                     clue
    //                                 })
    //                             }
    //                         }
    //                     })
    //                     .catch(error => this.setState({
    //                         isLoading: false,
    //                         error
    //                     }))
    //             }
    //         }
    //     }
    // }

    render() {
        const {isLoading, clues, error} = this.state

        return (
            isLoading ? <Loading title="Data" /> : error ? <p>{error.message}</p> : this.props.render(clues)
        )
    }
}

export default DataFetcher