import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
// axios.defaults.baseURL=process.env.REACT_APP_API_URL;
const apiClient=axios.create({
  baseURL:process.env.REACT_APP_API_URL
})
console.log('process.env.API_URL', process.env.REACT_APP_API_URL)

apiClient.interceptors.response.use(
  function(response) {
    console.log("response",response)
    return response;
  },
  function(error) {
    console.log('mistake: ',error)
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    const result = await apiClient.get(``) 
    console.log("response get",result.data)
    return result.data;
  },

  addTask: async(name)=>{
    const result=await apiClient.post(``,{Name:name,IsComplete:false})
    // return result.data;
    console.log('addTask', name)
    //TODO
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    const result=await apiClient.put(``,{id,isComplete})
    // return result.data;
    console.log('setCompleted', {id, isComplete})
    //TODO
    return {};
  },

  deleteTask:async(id)=>{
    await apiClient.delete(`/${id}`)
    console.log('deleteTask')
  }
};
