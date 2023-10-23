import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState} from 'react'
import {countIncrement,countDecrement} from "../../redux/action"
import { selectCount} from '../../redux/selector'
import countSlice from './countSlice'

function Count(props) {
  const { number } = props
   const count = useSelector(selectCount(number)) 
  const [input , setInput] = useState("1")
  const dispatch = useDispatch()

  return (
    <>
      <div>
        {count}
        <button onClick={() => {
          dispatch(countSlice.actions.countIncrement({number:number,value:input}))

        }}>Tăng{input}</button>
        <button onClick={() => {
          dispatch(countSlice.actions.countDecrement({number:number,value:input}))
        }}>Giảm{input}</button>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
    </>
  );
}

export default Count;
