package com.example.controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/backend")
public class PageController {
    @RequestMapping("/example")
    public String homePage(Model model) {
        model.addAttribute("msg", "我是服务器端渲染方式的首页");
        return "backend-example.html";
    }

    @RequestMapping("/why-thymeleaf")
    public String whyThymeleaf(Model model) {
        class Todo {
            @Setter @Getter private String content;
        }

        List<Todo> todoList = new ArrayList<>();
        Todo todo1 = new Todo();
        Todo todo2 = new Todo();
        Todo todo3 = new Todo();

        todo1.setContent("吃饭");
        todo2.setContent("睡觉");
        todo3.setContent("写代码");

        todoList.add(todo1);
        todoList.add(todo2);
        todoList.add(todo3);

        model.addAttribute("todoList", todoList);
        return "why-thymeleaf.html";
    }
}
