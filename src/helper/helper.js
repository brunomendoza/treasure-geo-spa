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

function areNear(a, b, threshold) {
    return Math.abs(a.lon - b.lon) < threshold
    && Math.abs(a.lat - b.lat) < threshold
}

export { hasGeolocation, getCurrentPosition, sleep, areNear }