package com.example.service.impl;

import com.example.common.ServerResponse;
import com.example.dao.TodoItemMapper;
import com.example.pojo.TodoItem;
import com.example.service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("iTodoService")
public class TodoServiceImpl implements ITodoService {
    @Autowired
    private TodoItemMapper todoItemMapper;

    @Override
    public ServerResponse<List<TodoItem>> findTodoList() {
        return ServerResponse.createBySuccess(todoItemMapper.selectAll());
    }

    @Override
    public ServerResponse addTodoItem(TodoItem todoItem) {
        if (todoItemMapper.insertSelective(todoItem) > 0) {
            return ServerResponse.createBySuccessMessage("添加待办列表成功");
        }

        return ServerResponse.createByErrorMessage("添加失败");
    }

    @Override
    public ServerResponse removeTodoItemById(Integer id) {
        if (todoItemMapper.removeTodoItemById(id) > 0) {
            return ServerResponse.createBySuccessMessage("删除待办列表成功");
        }

        return ServerResponse.createByErrorMessage("删除待办列表失败");
    }
}
