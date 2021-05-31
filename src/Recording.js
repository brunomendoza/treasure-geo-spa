import React, { Component } from "react"

class Recording extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false
        }
    }

    handleClick = event => {
        console.log(this.state.isPlaying)
        this.setState(state => ({isPlaying: !state.isPlaying}))
    }

    render() {
        return (
            <div className="clue__speaker">
                <span onClick={this.handleClick} className="material-icons">volume_up</span>
                <audio src={this.props.url}>
                    Your browser does not support <code>audio</code> element
                </audio>
            </div>
        )
    }
}

export default Recording