import { todolistSelector } from "../../redux/selector"
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'
// import { addTask } from "../../redux/action"
import todoSlice from "./todoSlice"

function Todolist() {
    const list = useSelector(todolistSelector)
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    return (<>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => {
            setInput("")
            dispatch(todoSlice.actions.addTask({name:input,completed:false}))
        }} >Add Task</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item =>
                    <tr>
                        <td onClick={() => {
                        dispatch(todoSlice.actions.completeTask(item.id))}} style={{textDecoration:(item.completed)?"line-through":""}} > {item.name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>)
}

export default Todolist