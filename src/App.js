
import './App.css';
import ListTodos from './ListTodos';
import TodoDetails from './TodoDetails'
import {Routes , Route} from 'react-router-dom'
 

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<ListTodos />} />

        <Route path='/todo/:id' element={<TodoDetails />} />
      </Routes>
    </div>
    
  );
}

export default App;
