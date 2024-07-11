import '../css/styles.css'
import  styles from './todoitem.module.css'

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(item) {
        console.log('deleted' + item)
        setTodos(todos.filter((todo) => todo != item));
    }

    function handleClick(name) {
        setTodos(  todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo))
    }

    const className = item.done ? styles.completed : ''

    return <div className='item'>
        <div className='itemName'>
            <span className={className} onClick={()=> handleClick(item.name)}>{item.name}</span>

            <span><button onClick={() => handleDelete(item)}
                          className='deletebutton'>x</button></span></div>
        <hr className='line'/>
    </div>

}