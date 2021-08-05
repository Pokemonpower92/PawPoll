import axios from 'axios';


const api = axios.create({
    baseURL: '',
})

export const createPoll  = payload => api.post('/api/poll', payload);
export const getPolls    = () => api.get('/api/polls');
export const updatePoll  = (id, payload) => api.put(`/api/poll/${id}`, payload);
export const getPollById = (id) => api.get(`/api/poll/${id}`);
export const deletePoll  = (id) => api.delete(`/api/poll/${id}`);

const apis = {
    createPoll,
    getPolls,
    updatePoll,
    getPollById,
    deletePoll,
}

export default apis;