import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const TodoDetails = () => {

    const [todo, setTodo] = useState({})
    
    const params = useParams ()
    
   
    

    useEffect(() => {
        const getTodoById = async() => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
                setTodo(res.data)
        } 
        catch (error) {
        console.log(error)}
        } 
    
        getTodoById()
    }, [params]);
    
    return (
        <div>
          
          <h3> {todo.title} </h3>
         <h5> {todo.id} </h5> 
        </div>

    )
    
     
    
     }
    
export default TodoDetails 