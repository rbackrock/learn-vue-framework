import Vue from 'vue'
import Vuex from 'vuex'
import * as actionTypes from '@/store/mutation-types';
import * as api from '@/api/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    headerText: '我是 header'
  },
  getters: {
    handleTodoList(state) {
      return state.todoList.map(todo => {
        todo.content = `${todo.content} - ${todo.content.length}个字`
        return todo
      })
    }
  },
  mutations: {
    [actionTypes.TODOLIST_SUCCESS](state, payload) {
      state.todoList = payload.todoList
    },
    [actionTypes.TODOLIST_FAILURE](state) {
      state.todoList = []
    },
    [actionTypes.HEADER_TEXT_CHANGE](state, text) {
      state.headerText = text + new Date().toLocaleTimeString()
    }
  },
  actions: {
    [actionTypes.TODOLIST_REQUEST]({commit}) {
      api.queryTodoList()
      .then(rsp => void commit(actionTypes.TODOLIST_SUCCESS, {
        todoList: rsp.data.data
      }), err => void commit(actionTypes.TODOLIST_FAILURE))
    },
    [actionTypes.TODOLIST_ADD]({dispatch, commit}, payload) {
      api.addTodoItem(payload.form)
      .then(rsp => void dispatch(actionTypes.TODOLIST_REQUEST), err => void commit(actionTypes.TODOLIST_FAILURE))
    },
    [actionTypes.TODOLIST_DELETE]({dispatch, commit}, payload) {
      api.deleteTodoItem(payload.id)
      .then(rsp => void dispatch(actionTypes.TODOLIST_REQUEST), err => void commit(actionTypes.TODOLIST_FAILURE))
    }
  },
  modules: {
  }
})
