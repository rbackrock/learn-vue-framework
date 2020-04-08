import axios from '@/config/axios-config'

export const queryTodoList = () => axios.get('/todoList')