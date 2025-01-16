import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todoListObject, setTodoListObject] = useState([
    'Study React JS',
    'Deploy the Application',
    'Create the connect four game using React JS '
  ])

  function handleAddTodoListObject(newTodoObject) {
    const newTodoListObject = [...todoListObject, newTodoObject]
    setTodoListObject(newTodoListObject)
  }

  return (
    <>
      <TodoInput handleAddTodoListObject={handleAddTodoListObject} />
      <TodoList todoListObject={todoListObject} />
    </>
  )
}

export default App
