import { Eraser, PencilSimpleLine } from "phosphor-react";
import { useState } from "react";
import { Item } from "../types/Item";
import * as C from "./style";

type Props = {
  item: Item;
};

export function Task({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);
  const [list, setList] = useState<Item[]>([]);

  const handleRemoveTask = () => {
    let newList = [...list];
    console.log(newList);
  };

  return (
    <C.Container done={isChecked}>
      <div className="input">
        <input
          className="check"
          type="checkbox"
          checked={isChecked}
          onChange={(e) =>
            setIsChecked(e.target.checked && e.target.checked === !isChecked)
          }
        />
        <label>{item.name}</label>
      </div>

      <div className="options">
        <Eraser className="eraser" size={20} onClick={handleRemoveTask} />
        <PencilSimpleLine className="pencilsimpleline" size={20} />
      </div>
    </C.Container>
  );
}
