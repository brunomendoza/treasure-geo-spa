import React, { Component } from "react"

class Recording extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false
        }
    }

    componentDidMount() {
        let elem = document.getElementById("audio-recording")
        
        elem.addEventListener("play", ev => this.setState({isPlaying: true}))
        elem.addEventListener("pause", ev => this.setState({isPlaying: false}))
        elem.addEventListener("ended", ev => this.setState({isPlaying: false}))
    }

    handleClick = event => {
        let elem = document.getElementById("audio-recording")

        if(this.state.isPlaying) {
            console.log("pausing...")
            elem.pause()
        } else {
            console.log("playing...")
            elem.load()
            elem.play()
        }
    }

    render() {
        return (
            <div className="clue__speaker">
                <span onClick={this.handleClick} className="material-icons">volume_up</span>
                <audio id="audio-recording" src={this.props.url}>
                    Your browser does not support <code>audio</code> element
                </audio>
            </div>
        )
    }
}

export default Recording