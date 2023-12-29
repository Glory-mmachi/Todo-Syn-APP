import  { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) {
      alert("Input a task");
    } else {
      const newTask = { id: new Date().getTime().toString(), name: todo };
      setList([...list, newTask]);
      setTodo("");
      setSuccess(true);
    }
  }
  return (
    <AppContext.Provider
      value={{
        todo,
        setTodo,
        list,
        success,
        setSuccess,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
