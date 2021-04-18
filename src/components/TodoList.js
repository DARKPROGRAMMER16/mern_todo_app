import React, { Fragment } from 'react'
import EditTodo from './EditTodo'

const TodoList = (props) => {

    const deletetodo = async(sno) => {
        // console.log(sno);
        const response = await fetch(`http://localhost:5000/todos/${sno}`,{
            method:"DELETE"
        })
        // console.log(response);
    }

    // const todos = props.todos
    // console.log(todos)
    return (
       <Fragment>
           <div className="container my-3">
                <h1 className="text-center">Todo List</h1>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                    <tbody>
                        {props.todos.length === 0 ? "nothing to display" :
                            props.todos.map((todo) => (
                            <tr key={todo.sno}>
                                <th scope="row">{todo.sno}</th>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td><EditTodo todo={todo}/></td>
                                <td><button className="btn btn-danger" onClick={() => deletetodo(todo.sno)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
       </Fragment>
    )
}

export default TodoList
