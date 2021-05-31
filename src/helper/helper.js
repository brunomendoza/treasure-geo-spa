function hasGeolocation() {
    return "geolocation" in window.navigator
}

function getCurrentPosition(opts) {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(resolve, reject, opts)
    })
}

function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

export { hasGeolocation, getCurrentPosition, sleep }