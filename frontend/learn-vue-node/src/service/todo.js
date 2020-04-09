import axios from '@/http'

export const queryTodoList = () => axios.get('/todoList')

export const addTodoItem = todoItemFormData => axios.post('/todoItem', todoItemFormData)

export const deleteTodoItem = id => axios.delete('/todoItem/' + id)