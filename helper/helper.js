function hasGeolocation() {
    return "geolocation" in window.navigator
}

export { hasGeolocation }