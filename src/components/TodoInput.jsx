import { useState } from "react"

export default function TodoInput(props) {
  const { handleAddTodoListObject, newTodoValue, setNewTodoValue} = props

  return (
    <header>
      <input value={newTodoValue} placeholder="Enter todo..." onChange={(e) => {
        setNewTodoValue(e.target.value)
      }}></input>
      <button onClick={() => {
        handleAddTodoListObject(newTodoValue)
        setNewTodoValue('')
      }}>Add</button>
    </header>
  )
}
