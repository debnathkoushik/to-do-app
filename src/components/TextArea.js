import { useState } from "react";

export default function TextArea() {
  //for a readymade array
  const [itemList, setItemList] = useState([]);

  const [item, setItem] = useState("");

  const onDelete = (indexKey, e) => {
    console.log("delete called: index: ", indexKey);
    // const newList = itemList.filter((item, idx) => {
    //   if (idx !== indexKey) {
    //     return item;
    //   }
    //   return null;
    // });
    // setItemList(newList);
    setItemList((pervState) =>
      pervState.filter((item, idx) => {
        if (idx !== indexKey) {
          return item;
        }
        return null;
      })
    );
  };

  const onAddtoList = (event) => {
    event.preventDefault();
    setItemList((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  return (
    <>
      <h1>A to-do app</h1>
      <form onSubmit={onAddtoList}>
        <input
          type="text"
          id="lname"
          value={item}
          name="lname"
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
        <button type="button" className="btn btn-primary" onClick={onAddtoList}>
          Add to the list
        </button>
      </form>

      <div className="container my-3">
        <ul>
          {itemList.map((item, indexKey) => {
            return (
              <li key={indexKey}>
                {item}{" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onDelete.bind(this, indexKey)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
