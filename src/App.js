import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoTable from './components/TodoTable';

function App() {
  return (
    <div className="App">
    <Todo></Todo>
    <TodoTable/>
    </div>
  );
}

export default App;
