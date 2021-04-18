import React, { Fragment, useEffect, useState } from 'react'
import InputTodo from './InputTodo';
import Navbar from './Navbar'
import TodoList from './TodoList'

const Todos = () => {

    const [todos,setTodos] = useState([]);

    const gettodos = async() => {
        try {

            const response = await fetch("http://localhost:5000/todos");
            const tododata  =await response.json()
            // console.log(tododata)
            setTodos(tododata)
            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        gettodos()
    },[todos])




    return (
        <Fragment>
            <Navbar/>
            <InputTodo todos={todos}/>
            <TodoList todos={todos}/>
        </Fragment>
    )
}

export default Todos
