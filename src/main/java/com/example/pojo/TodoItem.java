package com.example.pojo;

public class TodoItem {
    private Integer id;

    private Integer status;

    private String content;

    public TodoItem(Integer id, Integer status) {
        this.id = id;
        this.status = status;
    }

    public TodoItem(Integer id, Integer status, String content) {
        this.id = id;
        this.status = status;
        this.content = content;
    }

    public TodoItem() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}