package com.example.controller;

import com.example.common.ServerResponse;
import com.example.pojo.TodoItem;
import com.example.service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ApiController {
    @Autowired
    private ITodoService iTodoService;

    @RequestMapping(method = RequestMethod.GET, value = "todoList")
    public ServerResponse<List<TodoItem>> findTodoList() {
        return iTodoService.findTodoList();
    }

    @RequestMapping(method = RequestMethod.POST, value = "todoItem")
    public ServerResponse addItem(TodoItem todoItem) {
        return iTodoService.addTodoItem(todoItem);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "todoItem/{id}")
    public ServerResponse removeItemById(@PathVariable Integer id) {
        return iTodoService.removeTodoItemById(id);
    }
}
