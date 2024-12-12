import Todo from "../components/Todo"

const todos = ["todo 1", "todo 2", "todo 3"];

function TodosPage(){
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} info={todo} />
            ))}
        </ul>
    )
}

export default TodosPage