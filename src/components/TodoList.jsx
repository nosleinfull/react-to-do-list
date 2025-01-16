import TodoCard from "./TodoCard"

export default function TodoList(props) {
  const { todoListObject } = props;

  return (
    <ul className="main">
      {todoListObject.map( (todoValue, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todoValue}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
