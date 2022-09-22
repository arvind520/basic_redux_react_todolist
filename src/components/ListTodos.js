import React from 'react'
import { connect } from "react-redux";
import { removeTodo } from '../js/actions';
import { AiOutlineDelete } from 'react-icons/ai';

const mapStateToProps = state => {
  return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: idx => dispatch(removeTodo(idx))
  };
}


const ListTodos = (props) => {
  function handleRemove(idx){
      props.removeTodo(idx)
  }
  return (
    <div>
        <ul>
            {props.todos.map((ele, idx) => {
                return (
                    <li className='todoItem' key={idx}>{ele} <span className='removeBtn' onClick={() => handleRemove(idx)}><AiOutlineDelete /></span></li>
                )
            })}
        </ul>
    </div>
  )
}

const List = connect(mapStateToProps, mapDispatchToProps)(ListTodos);

export default List;