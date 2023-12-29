import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="app-container">
      <Router>
        <h1>TODO APP</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
