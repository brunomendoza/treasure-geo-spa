import React, { Component } from "react"

class DataFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            clue: null,
            error: null,
            id: 0
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})

        fetch(this.props.url)
            .then(res => res.json())
            .then(data => {
                for (const clue of data) {
                    if (clue.id === this.state.id) {
                        this.setState({
                            isLoading: false,
                            clue
                        })
                    }
                }
            })
            .catch(error => this.setState({
                isLoading: false,
                error
            }))
    }

    handleClick = (event) => {
        this.setState({isLoading: true})
        this.setState(state => ({
            id: state.id + 1
        }))

        fetch(this.props.url)
            .then(res => res.json())
            .then(clues => {
                for (const clue of clues) {
                    if (clue.id === this.state.id) {
                        this.setState({
                            isLoading: false,
                            clue
                        })
                    }
                }
            })
            .catch(error => this.setState({
                isLoading: false,
                error
            }))
    }

    render() {
        const {isLoading, clue} = this.state

        return (
            this.props.render(isLoading, clue, this.handleClick)
        )
    }
}

export default DataFetcher