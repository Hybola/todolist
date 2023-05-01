import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";
export const getTodosAPI = () => axios.get(`/todos`);
export const deleteTodoAPI = (todoId) => axios.delete(`/todos/${todoId}`);
export const createTodoAPI = (todoObj) => axios.post(`/todos`, todoObj);
export const updateTodoAPI = (oldTodo, updateObj) => {
  let updateRequestObj = { ...oldTodo, ...updateObj };
  return axios.put(`/todos/${oldTodo.id}`, updateRequestObj);
};
