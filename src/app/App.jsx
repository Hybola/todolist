import "./App.scss"; // Global
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
//import allTodoMock from "../data/todos.json";
import { getSevenDayRange } from "../utils/DateUtils";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/todos",
    })
      .then((response) => {
        console.log("i run first render only");
        console.log(response.status);
        console.log(response.data.todos); //เรียก todos จาก server
        let todoList = response.data.todos;
        setTodos(todoList);
        setFilterList(todoList);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }, []);

  // Filter Todo

  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange();
    // let returnValue = getSevenDayRange() // ["2023-04-26", "2023-05-03"]
    // const nowStr = returnValue[0]
    // const nextSevenStr = returnValue[1]

    let filteredTodo = [...todos];
    if (index == 0) {
      setFilterList(todos);
    }
    // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
    else if (index === 1) {
      filteredTodo = todos.filter((todoObj) => todoObj.date === nowStr);
      setFilterList(filteredTodo);
    } else if (index === 2) {
      filteredTodo = todos.filter(
        (todoObj) => todoObj.date >= nowStr && todoObj.date <= nextSevenStr
      );

      // setTodos(filteredTodo);
      setFilterList(filteredTodo);
    }
  };
  // Search Todo
  const handleSearch = (searchText) => {
    const newTodo = todos.filter((todoObj) =>
      todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setFilterList(newTodo);
  };
  ///// To be continue later.... this function
  const searchByDate = (searchText) => {
    const newTodo = filterList.filter((todoObj) =>
      todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setTodos(newTodo);
  };

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={filterList} setTodos={setTodos} />
    </div>
  );
}

export default App;