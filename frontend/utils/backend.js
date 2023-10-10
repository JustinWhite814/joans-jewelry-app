import axios from 'axios'

export async function createJewels(jewel){
    const data = await axios.post('/api/jewels', jewel)
    return data
}