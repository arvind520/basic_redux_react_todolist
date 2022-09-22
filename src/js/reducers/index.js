import { ADD_TODO, REMOVE_TODO } from "../contants";

const initialState = {
    todos: []
};
  
function rootReducer(state = initialState, action) {
    if(action.type == ADD_TODO){
        // state.todos.push(action.payload);  //immutablity rules breaks
        // return Object.assign({}, state, {
        //     todos: state.todos.concat(action.payload)
        // })
        return {
            todos: [...state.todos, action.payload]
        }
    }
    if(action.type == REMOVE_TODO){
        const newTodos = state.todos.filter((ele,idx) => idx != action.payload);
        return {
            todos: newTodos
        };
    }
    return state;
};
  
export default rootReducer;