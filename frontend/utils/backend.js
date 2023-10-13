import axios from 'axios'

export async function createJewels(jewel){
    const data = await axios.post('/api/jewels', jewel)
    return data
}

export async function updateJewels(jewel, id){
    const data = await axios.put(`/api/jewels/${id}`, jewel)
    return data
}