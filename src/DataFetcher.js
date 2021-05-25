import react from "React"

class DataFetcher {
    constructor(props) {
        super(props)
        state = {
            isLoading: false,
            data: null
        }
    }

    componentDidUnmount() {
        this.setState(state => {isLoading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(this.setState(state => ({
                isLoading: false,
                data: data
            })))
    }

    render() {
        
    }
}