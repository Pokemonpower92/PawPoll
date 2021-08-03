import axios from 'axios';


const api = axios.create({
    baseURL: '',
})

export const createPoll  = payload => api.post('/poll', payload);
export const getPolls    = () => api.get('/polls');
export const updatePoll  = (id, payload) => api.put(`/poll/${id}`, payload);
export const getPollById = (id) => api.get(`/poll/${id}`);
export const deletePoll  = (id) => api.delete(`/poll/${id}`);

const apis = {
    createPoll,
    getPolls,
    updatePoll,
    getPollById,
    deletePoll,
}

export default apis;