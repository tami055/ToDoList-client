import axios from 'axios';

const apiUrl = process.env.REACT_APP_API
const apiClient = axios.create({
  baseURL:process.env.REACT_APP_API,
});

axios.defaults.baseURL = apiUrl;

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/todoitems`)    
    return result.data;
  },

  addTask: async(newtodo)=>{
    const result = await axios.post(`${apiUrl}/todoitems`,{name:newtodo,isComplete:false}) 
    return result.data;
  },

  setCompleted: async(id, IsComplete)=>{
    console.log('setCompleted', {id, IsComplete})
    const result = await axios.put(`${apiUrl}/todoitems/${id}`,{IsComplete:IsComplete}) 
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`${apiUrl}/todoitems/${id}`) 
    return result.data;
  }
};
