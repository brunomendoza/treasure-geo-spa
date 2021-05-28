import React, { Component } from "react"

class DataFetcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            data: null
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.setState(state => {isLoading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState(state => ({
                isLoading: false,
                data: data
            })))
            .catch(err => console.error(err.message))
    }

    render() {
        return (
            this.props.render(this.state.isLoading, this.state.data)
        )
    }
}

export default DataFetcher