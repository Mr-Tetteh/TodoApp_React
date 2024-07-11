import {useState} from "react";
import '../css/styles.css'

export default function Form({todos, setTodos}) {
    // const [todo, setTodo] = useState('')
    const [todo, setTodo] = useState({name: "", done: false})

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name: "", done: false})
    }

    return <form className='todoform' onSubmit={handleSubmit}>
        <div className='inputContainer'>
            <input className='modernInput' onChange={(e) => setTodo({name:e.target.value, done: false})} placeholder="Enter Todo item"
                   type="text" value={todo.name}/>
            <button className='modernButton' type='submit'>Add</button>
        </div>
    </form>


}