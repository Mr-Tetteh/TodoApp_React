import '../css/styles.css'
export default  function Footer({completedTodos, totalTodos}){
    return <div className='footer'>
        <span className='todo_item'> Completed Todos: {completedTodos} </span>
        <span className='total_item'>  Total Todos: {totalTodos} </span>

    </div>
}