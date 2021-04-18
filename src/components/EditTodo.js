import React, { Fragment, useState } from 'react'

const EditTodo = (props) => {

    const [tl,setTL] = useState(props.todo.title);
    const [desc,setDesc] = useState(props.todo.description);


    const updateTodo = async() => {
        // e.preventDefault();
        try {

            const body = {
                title:tl,
                description:desc
            }
            const response = await fetch(`http://localhost:5000/todos/${props.todo.sno}`,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

        } catch (err) {
            console.error(err.message);
        }

    }
    return (
        <Fragment>

            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${props.todo.sno}`}>
            EDIT
            </button>


            <div class="modal fade" id={`id${props.todo.sno}`}>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">EDIT Todo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input className="form-control" type="text" placeholder="title" value={tl} onChange={e => setTL(e.target.value)}/>
                        <input className="form-control" type="text" placeholder="description" value={desc} onChange={e => setDesc(e.target.value)}/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                            setTL(props.todo.title)
                            setDesc(props.todo.description)
                        }}>Close</button>
                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={updateTodo}>EDIT</button>
                    </div>
                    </div>
                </div>
            </div>
           
        </Fragment>
    )
}

export default EditTodo
