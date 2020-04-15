import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as mutationTypes from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerText: '我是初始的标题',
    todoList: [],
    todoListTotal: 0
  },
  mutations: {
    [mutationTypes.CHANGE_HEADER](state) {
      state.headerText = '我是header我被修改了'
    },
    [mutationTypes.FETCH_TODOLIST_SUCCESS](state, playload) {
      state.todoList = playload.todoList
      state.todoListTotal = playload.todoList.length
    },
    [mutationTypes.FETCH_TODOLIST_FAILURE](state) {
      state.todoList = []
      state.todoListTotal = 0
    }
  },
  actions: {
    [mutationTypes.FETCH_TODOLIST_REQUEST](context) {
      const baseReqUrl = 'http://localhost:8081/api'
      const HTTP_SUCCESS_STATUS = 200;

      axios.get(`${baseReqUrl}/todoList`)
      .then(rsp => {
        if (rsp.status === HTTP_SUCCESS_STATUS) {
          context.commit(mutationTypes.FETCH_TODOLIST_SUCCESS, {
            todoList: rsp.data.data
          })
        }
      }, err => context.commit(mutationTypes.FETCH_TODOLIST_FAILURE))
    }
  },
  modules: {
  }
})
