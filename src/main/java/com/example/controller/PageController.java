package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/backend")
public class PageController {
    @RequestMapping("/example")
    public String homePage(Model model) {
        model.addAttribute("msg", "我是服务器端渲染方式的首页");
        return "backend-example.html";
    }
}
