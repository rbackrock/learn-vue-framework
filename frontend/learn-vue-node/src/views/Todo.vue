<template>
  <el-row>
      <el-col :span="24">
          <el-card class="box-card">
              <div slot="header">
                  <span>待办事项列表</span>
              </div>
              <div v-if="todoList.length">
                  <el-row v-for="todo in todoList" :key="todo.id" :gutter="20">
                      <el-col :span="24">
                        <span>{{ todo.content }}</span>
                        <el-divider></el-divider>
                      </el-col>
                  </el-row>
              </div>
              <p v-else>待办事项列表为空</p>
          </el-card>
      </el-col>
  </el-row>
</template>

<script>
import * as actionTypes from '@/store/mutation-types';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
  created() {
    this.$store.dispatch(actionTypes.TODOLIST_REQUEST)
  }
}
</script>