import axios from 'axios'

export async function sendContactMessage(payload) {
    // Dummy API endpoint (JSONPlaceholder simulates POST)
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' }
    })
    return response.data
}


