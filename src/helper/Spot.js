class Spot {
    constructor(opts) {
        this.observers = []
        this.opts = opts
    }

    subscribe = fn => {
        this.observers.push(fn)
    }

    unsubscribe = fn => {
        this.observers.filter(_fn => _fn != fn)
    }

    notify = () => {
        this.observers.forEach(fn => {
            fn(this.coordinates)
        });
    }

    watchPosition = () => {
        this.id = navigator.geolocation.watchPosition(
            pos => {
                this.coordinates = {
                    lon: pos.coords.longitude,
                    lat: pos.coords.latitude
                }
                this.notify()
            },
            console.warn,
            this.opts
        )
    }

    clearWatch = () => {
        navigator.geolocation.clearWatch(this.id)
    }
}

export default Spot