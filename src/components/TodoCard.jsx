export default function TodoCard(props) {
  const {children, handleDeleteTodoObject, handleEditTodoObject, index} = props;

  return (
    <li className='todoItem'>
    {children}
    <div className="actionsContainer">
      <button onClick={() => {
        handleEditTodoObject(index)
      }}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button onClick={() => {
        handleDeleteTodoObject(index)
      }}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  </li>
  )
}
