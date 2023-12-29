import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

export default function Form() {
  const { todo, success, handleSubmit, setTodo, setSuccess } =
    useGlobalContext();

  return (
    <div>
      {!success && (
        <>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              placeholder="Input a task..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button>Add Task</button>
          </form>
          <Link to="/list">
            <button>View All Task</button>
          </Link>
        </>
      )}
      {success && (
        <>
          <h1>Successfully added to tasks</h1>
          <div className="success-btnn">
            <button onClick={() => setSuccess(false)}>Add More</button>
            <Link to="/list">
              <button>View Tasks</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
