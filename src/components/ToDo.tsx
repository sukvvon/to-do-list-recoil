import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categories, customCategoryState, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const customCategory = useRecoilValue(customCategoryState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDelete = (id: IToDo["id"]) =>
    setToDos((oldToDo) => oldToDo.filter((toDo) => toDo.id !== id));
  return (
    <li>
      <span>{text}</span>
      {category !== categories.DOING && (
        <button name={categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.TO_DO && (
        <button name={categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      {customCategory !== [] &&
        // eslint-disable-next-line
        customCategory.map((eachCategory, index) => {
          if (eachCategory !== category) {
            return (
              <button name={eachCategory} onClick={onClick} key={index}>
                {eachCategory}
              </button>
            );
          }
        })}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default ToDo;
