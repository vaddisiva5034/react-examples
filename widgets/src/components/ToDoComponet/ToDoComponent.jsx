import React, { useState } from "react";
import "./Todo.css";
export const ToDoComponent = () => {
  const [inputText, setInputText] = useState("");
  const [buttonText, setButtonText] = useState("Add");
  const [currentIndex, setCurrentIndex] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleClick = (e) => {
    if (inputText) {
      const tempArray = [...todoList];
      if (buttonText === "Update") {
        tempArray[currentIndex] = inputText;
      } else {
        tempArray.push(inputText);
        setCurrentIndex(tempArray.length - 1);
      }
      setTodoList(tempArray);
      setInputText("");
      setButtonText("Add");
    }
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDelete = (index) => {
    if (index === currentIndex) {
      setInputText("");

      setButtonText("Add");
    }
    let tempArray = todoList;
    tempArray = tempArray.filter((todo, _index) => index !== _index);
    setTodoList(tempArray);
    setCurrentIndex(0);
  };

  const handleEdit = (index) => {
    setCurrentIndex(index);
    setInputText(todoList[index]);
    setButtonText("Update");
  };

  const handleChnage = (e) => {
    setInputText(e?.target?.value);
  };

  const handleRowClick = (index) => {
    setCurrentIndex(index);
  };

  const arraymove = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  };
  const hnaldeKeyDown = (e) => {
    if (e.ctrlKey) {
      if (e.key === "r" || e.key === "R") {
        setTodoList([]);
      } else if (e.key === "e" || e.key === "E") {
        if (currentIndex >= 0) {
          handleEdit(currentIndex);
        }
      } else if (e.key === "D" || e.key === "d") {
        if (currentIndex >= 0) {
          handleDelete(currentIndex);
        }
      }
      e.preventDefault();
      e.stopPropagation();
    }
    //key up
    if (e.keyCode === 38) {
      if (currentIndex !== 0) {
        if (e.ctrlKey) {
          const tempArray = [...todoList];
          setTodoList(arraymove(tempArray, currentIndex, currentIndex - 1));
        }

        setCurrentIndex(currentIndex - 1);
      }
    }
    //key down
    if (e.keyCode === 40) {
      if (currentIndex !== todoList.length - 1) {
        if (e.ctrlKey) {
          const tempArray = [...todoList];
          setTodoList(arraymove(tempArray, currentIndex, currentIndex + 1));
        }

        setCurrentIndex(currentIndex + 1);
      }
    }
  };
  return (
    <div className="card" onKeyDown={hnaldeKeyDown} tabIndex="0">
      <div className="row mt4">
        <div className="col-md-2"></div>
        <form onSubmit={handleClick}>
          <input
            type="text"
            className="col-md-4"
            value={inputText}
            onChange={handleChnage}
          />
          <button type="submit" className="col-md-1 btn btn-primary mr4">
            {buttonText}
          </button>
        </form>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className=" list-group">
            {todoList.map((todo, index) => (
              <div
                className="row "
                onClick={() => handleRowClick(index)}
                key={index}
              >
                <div
                  className={`col-md-12 list-group-item ${
                    currentIndex === index ? "active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-md-8">
                      <span style={{ color: "black" }}>{index + 1})</span>{" "}
                      {todo}
                    </div>
                    <div className="col-md-4">
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => handleDelete(index)}
                      ></i>
                      <i
                        className="fas fa-edit"
                        onClick={() => handleEdit(index)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};
