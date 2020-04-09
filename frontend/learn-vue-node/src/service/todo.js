import axios from '@/http'

export const queryTodoList = () => axios.get('/todoList')

export const addTodoItem = (todoItemFormData) => axios.put('/todoItem', todoItemFormData)

export const deleteTodoItem = (id) => axios.delete('/todoItem/' + id)