<template>
  <div class="container">
    <label for="todo-item">待办列表：</label><input type="text" v-model="todoItem"><button @click="handleAddTodoItem" style="margin: 0 10px;">添加</button><br>
    <div class="list-container">
      <div v-if="todoList.length">
        <ul>
          <li v-for="todoItem of todoList" :key="todoItem.id">{{ todoItem.content }}<span @click="handleRemoveTodoItem(todoItem)" class="btn-delete">删除</span></li>
        </ul>
      </div>
      <div v-else>没有待办列表</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as mutationTypes from '@/store/mutation-types'

const baseReqUrl = 'http://localhost:8081/api'
const HTTP_SUCCESS_STATUS = 200;

export default {
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
  data() {
    return {
      todoItem: ''
    }
  },
  methods: {
    queryTodoList() {
      // axios.get(`${baseReqUrl}/todoList`)
      // .then(rsp => {
      //   if (rsp.status === HTTP_SUCCESS_STATUS) {
      //     this.$data.todoList = rsp.data.data
      //   }
      // }, err => console.error(err))

      this.$store.dispatch(mutationTypes.FETCH_TODOLIST_REQUEST)
    },
    handleAddTodoItem() {
      if (this.$data.todoItem) {
        const formData = new FormData()
        formData.append('content', this.$data.todoItem)

        axios.post(`${baseReqUrl}/todoItem`, formData)
        .then(rsp => {
          if (rsp.status === HTTP_SUCCESS_STATUS) {
            this.$data.todoItem = ''
            this.queryTodoList()
          }
        }, err => void console.error(err))
      } else {
        alert('请输入待办事项')
      }
    },
    handleRemoveTodoItem(todoItem) {
      axios.delete(`${baseReqUrl}/todoItem/${todoItem.id}`)
      .then(rsp => {
        if (rsp.status === HTTP_SUCCESS_STATUS) {
          this.queryTodoList()
        }
      }, err => void console.error(err))
    }
  },
  created() {
    this.queryTodoList()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    .list-container
      padding: 20px 0

      .btn-delete
        padding 0 20px
        color: #569cd6
        cursor pointer
</style>
  