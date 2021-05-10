// import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { About } from "./myComponents/About";
import React, { useEffect, useState } from 'react'
import { AddTodo } from './myComponents/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }


  const onDelete = (todo) => {
    // console.log();
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.getItem("todos")
  }



  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);

  }


  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Router>

        <Header title="Todos List" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
