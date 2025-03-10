const BASE = "https://resource-ghibli-api.onrender.com"

export function gettingMoviess() {
    return fetch(`${BASE}/films`).then((res) => res.json())
}

export function gettingPeople() {
    return fetch(`${BASE}/people`).then((res) => res.json())
}

export function gettingLocation() {
    return fetch(`${BASE}/locations`).then((res) => res.json())
}