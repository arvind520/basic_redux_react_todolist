import { ADD_TODO, REMOVE_TODO } from "../contants";

export function addTodo(todo){
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo(idx){
    return{
        type: REMOVE_TODO,
        payload: idx
    }
}