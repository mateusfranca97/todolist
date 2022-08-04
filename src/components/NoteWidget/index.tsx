import { useState } from "react";
import { AddArea } from "../AddArea";
import { Task } from "../Task";
import { Item } from "../types/Item";
import * as C from "./style";

export function NoteWidget() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Estudar", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
    console.log(newList);
  };

  return (
    <C.Container>
      <header>
        <h1 className="title">To Do List</h1>
        <AddArea onEnter={handleAddTask} />
      </header>
      <main>
        {list.map((item, index) => (
          <Task key={index} item={item} />
        ))}
      </main>
    </C.Container>
  );
}
