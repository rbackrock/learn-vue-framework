package com.example.service;

import com.example.common.ServerResponse;
import com.example.pojo.TodoItem;

import java.util.List;

public interface ITodoService {
    ServerResponse<List<TodoItem>> findTodoList();

    ServerResponse addTodoItem(TodoItem todoItem);

    ServerResponse removeTodoItemById(Integer id);
}
