import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TodoList() {
  const { list, setSuccess } = useGlobalContext();
  const [newData, setNewData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function mod(res) {
    const sing = list.find(({ id }) => id === res);
    setNewData(sing);
    setShowModal(true);
  }

  return (
    <div className="todoList-container">
      {list.map(({ id, name }) => {
        return (
          <div key={id} className="todoList-cont">
            <h2>{name}</h2>
            <button onClick={() => mod(id)}>View</button>
          </div>
        );
      })}
      <Link to="/">
        <button onClick={() => setSuccess(false)}>Add New Task</button>
      </Link>
      {showModal && (
        <div className="todo-detail">
          <h1>{newData.name}</h1>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
