import React, { Fragment, useState } from 'react'

const InputTodo = (props) => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const inputData = async() => {
        // console.log("i am input data");
        // console.log(props.todos.length)
        let sno
        if(props.todos.length === 0){
            sno = 1;
        }
        else{
            sno = props.todos[props.todos.length-1].sno + 1
        }
        const body = {sno,title,description}
        const response = await fetch("http://localhost:5000/todos",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        // console.log(response);
        setTitle("")
        setDescription("")
    }

    return (
        <Fragment>
            <div className="container my-3">
                <h1 className="text-center">Add Todos</h1>
                <div className="container my-3 d-flex">
                    <input 
                    className="form-control mx-3" 
                    type="text" 
                    placeholder="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <input 
                    className="form-control mx-3" 
                    type="text" 
                    placeholder="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={inputData}>Add</button>
                </div>
            </div>
        </Fragment>
    )
}

export default InputTodo
