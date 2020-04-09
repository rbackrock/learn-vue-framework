import Vue from 'vue'
import Vuex from 'vuex'
import * as actionTypes from '@/store/mutation-types';
import * as todoService from '@/service/todo'

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
    [actionTypes.TODOLIST_REQUEST](context) {
      todoService.queryTodoList()
      .then(rsp => context.commit(actionTypes.TODOLIST_SUCCESS, {
        todoList: rsp.data.data
      }), err => context.commit(actionTypes.TODOLIST_FAILURE))
    },
    [actionTypes.TODOLIST_ADD](context, payload) {
      todoService.addTodoItem(payload.form)
      .then(rsp => context.dispatch(actionTypes.TODOLIST_REQUEST), err => context.commit(actionTypes.TODOLIST_FAILURE))
    },
    [actionTypes.TODOLIST_DELETE](context, payload) {
      todoService.deleteTodoItem(payload.id)
      .then(rsp => context.dispatch(actionTypes.TODOLIST_REQUEST), err => context.commit(actionTypes.TODOLIST_FAILURE))
    }
  },
  modules: {
  }
})
