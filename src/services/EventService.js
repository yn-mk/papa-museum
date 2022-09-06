import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/yn-mk/papamuseum',
    withCredentials: false,
    headers: {
        Accept: 'application/jason',
        'Content-Type': 'application/jason'
    }
})

export default{
    getEvents() {
        return apiClient.get('/items')
    },
    getEvent(id) {
        return apiClient.get('/items/' + id)
    }
}