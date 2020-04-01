package com.example.service.impl;

import com.example.common.ServerResponse;
import com.example.dao.TodoItemMapper;
import com.example.pojo.TodoItem;
import com.example.service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("iTodoService")
public class TodoServiceImpl implements ITodoService {
    @Autowired
    private TodoItemMapper todoItemMapper;

    @Override
    public ServerResponse<TodoItem> findTodoItemById(int id) {
        TodoItem todoItem = todoItemMapper.selectByPrimaryKey(id);
        return ServerResponse.createBySuccess("test success", todoItem);
    }
}
