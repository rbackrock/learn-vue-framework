package com.example.controller;

import com.example.common.ServerResponse;
import com.example.pojo.TodoItem;
import com.example.service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class ApiController {
    @Autowired
    private ITodoService iTodoService;

    @RequestMapping(method = RequestMethod.GET, value = "test/{id}")
    public ServerResponse<TodoItem> findItem(@PathVariable Integer id) {
        return iTodoService.findTodoItemById(id);
    }
}
