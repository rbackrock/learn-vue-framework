package com.example.dao;

import com.example.pojo.TodoItem;

public interface TodoItemMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TodoItem record);

    int insertSelective(TodoItem record);

    TodoItem selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TodoItem record);

    int updateByPrimaryKeyWithBLOBs(TodoItem record);

    int updateByPrimaryKey(TodoItem record);
}