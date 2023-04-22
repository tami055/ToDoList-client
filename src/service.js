import axios from 'axios';

const apiUrl = "http://localhost:27310"
const apiClient = axios.create({
  baseURL: "http://localhost:27310",
});

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
