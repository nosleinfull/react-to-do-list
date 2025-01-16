import { useState } from "react"

export default function TodoInput(props) {
  const { handleAddTodoListObject } = props

  const [newTodoValue, setNewTodoValue] = useState('')

  return (
    <header>
      <input value={newTodoValue} placeholder="Enter todo..." onChange={(e) => {
        setNewTodoValue(e.target.value)
      }}></input>
      <button onClick={() => {
        handleAddTodoListObject(newTodoValue);
      }}>Add</button>
    </header>
  )
}
