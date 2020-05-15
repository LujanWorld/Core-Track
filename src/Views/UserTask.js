import React from "react";
import items from "./items";

export default function UserTask(props) {
  console.log(items);

  items.forEach((element) => console.log(element));

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <div>{item.name}</div>
          <div>{item.id.firstname}</div>
          <div>{item.lastname}</div>
        </li>
      ))}
    </ul>
  );
}
