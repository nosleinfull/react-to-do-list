import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todoListObject, setTodoListObject] = useState([])
  const [newTodoValue, setNewTodoValue] = useState('')

  function persistData(newTodoList) {
    localStorage.setItem('todoList', JSON.stringify({ todoList: newTodoList }))
  }

  function handleAddTodoListObject(newTodoObject) {
    const newTodoListObject = [...todoListObject, newTodoObject]
    setTodoListObject(newTodoListObject)
    persistData(newTodoListObject)
  }

  function handleDeleteTodoObject(deletedIndex) {
    const newTodoListObject = todoListObject.filter((todoObject, todoIndex) => {
      return todoIndex != deletedIndex
    })
    setTodoListObject(newTodoListObject);
    persistData(newTodoListObject)
  }

  function handleEditTodoObject(index) {
    const valueToBeEdit = todoListObject[index]
    setNewTodoValue(valueToBeEdit)
    handleDeleteTodoObject(index)
    persistData(newTodoListObject)
  }

  useEffect(()=> {
    if(!localStorage) {
      return
    }

    let localTodoListObject = localStorage.getItem('todoList')
    if (!localTodoListObject) {
      return
    }

    setTodoListObject(JSON.parse(localTodoListObject).todoList)
  }, [])

  return (
    <>
      <TodoInput
        newTodoValue={newTodoValue}
        setNewTodoValue={setNewTodoValue}
        handleAddTodoListObject={handleAddTodoListObject}
      />
      <TodoList
        todoListObject={todoListObject}
        handleDeleteTodoObject={handleDeleteTodoObject}
        handleEditTodoObject={handleEditTodoObject}
      />
    </>
  )
}

export default App
