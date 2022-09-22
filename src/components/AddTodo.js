import React, { useState } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
    return {
      addTodo: todo => dispatch(addTodo(todo))
    };
}

const AddTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleOnChange = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo('')
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="addTodo">Add Your Todo Here</label>
            <br/>
            <input className='addTodo' type="text" id='addTodo' value={todo} onChange={handleOnChange}/>
            <button className='addBtn'>➕</button>
        </form>
    </div>
  )
}

const Form = connect(null, mapDispatchToProps)(AddTodo);

export default Form