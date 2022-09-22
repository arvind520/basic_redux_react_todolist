import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Redux TodoList</h1>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
