<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 20px;">
      <el-col :span="16">
        <el-input placeholder="请输入 Todo" v-model="todoItem">
            <template slot="prepend">待办事项</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-button v-on:click="handleAddTodoItem" type="primary">添加</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header">
            <span>事项列表</span>
          </div>
          <div v-if="todoList.length">
            <el-row v-for="todo in todoList" :key="todo.id" :gutter="20">
              <el-col :span="24">
                <el-row>
                  <el-col :span="20">
                    <span class="todo-text">{{ todo.content }}</span>
                  </el-col>
                  <el-col :span="4">
                    <el-button v-on:click="handleRemoveTodoItem(todo)" type="danger" icon="el-icon-delete" circle></el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24"><el-divider></el-divider></el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <p v-else>待办事项列表为空</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"> <el-button type="primary">我要改变 header 文本</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import * as actionTypes from '@/store/mutation-types';

export default {
  data() {
    return {
      todoItem: ''
    }
  },
  methods: {
    handleRemoveTodoItem(todo) {
      if (todo.id) {
        this.$store.dispatch(actionTypes.TODOLIST_DELETE, {
          id: todo.id
        })
      }
    },
    handleAddTodoItem() {
      const todoItemText = this.$data.todoItem;
      if (todoItemText) {
        const todoItemFormData = new FormData();
        todoItemFormData.append('content', todoItemText)
        
        this.$store.dispatch(actionTypes.TODOLIST_ADD, {
          form: todoItemFormData
        }).then(() => this.$data.todoItem = '')
      } else {
        this.$message({
          message: '代办事项不能为空',
          type: 'warning'
        })
      }
    },
    queryAllTodoList() {
      this.$store.dispatch(actionTypes.TODOLIST_REQUEST)
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
  created() {
    this.queryAllTodoList()
  }
}
</script>

<style lang="scss" scoped>
  .todo-text {
    height: 40px;
    line-height: 40px;
  }
</style>