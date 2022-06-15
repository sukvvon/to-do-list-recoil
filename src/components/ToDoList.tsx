import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import Category from "./Category";
import CreateToDo from "./CreateToDo";
import CustomCategory from "./CustomCategory";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <>
      <h1>To Do list</h1>
      <br />
      <CustomCategory />
      <Category />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
