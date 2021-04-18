import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createPoll  = payload => api.post('/polls', payload);
export const getPolls    = () => api.get('/polls');
export const updatePoll  = (id, payload) => api.put(`/polls/${id}`, payload);
export const getPollById = (id) => api.get(`/polls/${id}`);
export const deletePoll  = (id) => api.delete(`/polls/${id}`);

const apis = {
    createPoll,
    getPolls,
    updatePoll,
    getPollById,
    deletePoll,
}

export default apis;