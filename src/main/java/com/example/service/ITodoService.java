package com.example.service;

import com.example.common.ServerResponse;
import com.example.pojo.TodoItem;

public interface ITodoService {
    public ServerResponse<TodoItem> findTodoItemById(int id);
}
