import React, { useState, useReducer } from "react"
import { initialState, aReducer} from "../reducers/aReducer"

export default function TodoComp(){

    const [ newTodo, setNewTodo ] = useState("")
    const [ state, dispatch ] = useReducer(aReducer, initialState)
   
    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    return(
        <div className= "container">
        <h1>CheckList</h1>
        <div className = "form-div">
            <input 
                className = "title-input"
                type = "text"
                name = "newTitleText"
                placeholder = "add something"
                value = {newTodo}
                onChange = {handleChanges}         
                />
            <button onClick = {() => {
                dispatch({type: "ADD", payload: newTodo})
                setNewTodo("")
                 }}>
                    Add
            </button>

            <button onClick = {()=>{
                dispatch({type: "CLEAR"})
                setNewTodo("")
                }}>
                    Clear 
            </button>
        </div>
        {state.todos.map(todo =>(
            <div
            className = {todo.completed ? "todo-item complete": "todo-item"}
            onClick = {() => dispatch({type: "TOGGLE", payload: todo.id})}
            >
            {" "}
            {todo.item}{" "}
            </div>
        ))}{" "}
     
        </div>
    )
}


