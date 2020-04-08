import Vue from 'vue'
import Vuex from 'vuex'
import { TODOLIST_REQUEST, TODOLIST_SUCCESS, TODOLIST_FAILURE } from './mutation-types'
import * as todoService from '@/service/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    [TODOLIST_SUCCESS](state, payload) {
      state.todoList = payload.todoList
    },
    [TODOLIST_FAILURE](state) {
      state.todoList = []
    }
  },
  actions: {
    [TODOLIST_REQUEST](context) {
      todoService.queryTodoList()
      .then(rsp => context.commit(TODOLIST_SUCCESS, {
        todoList: rsp.data.data
      }))
      .catch(err => context.commit(TODOLIST_FAILURE))
    }
  },
  modules: {
  }
})
