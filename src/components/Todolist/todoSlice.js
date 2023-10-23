import { createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export default createSlice({
    name:"todolist",
    initialState:[{id: 1,name : "học JS",completed:false}],
    reducers:{
        addTask:(state,action)=>{
            const value = action.payload
            state.push({
                ...value,
                id:uuidv4()
            })
        },
        completeTask:(state,action)=>{
            const index = state.findIndex(item=>item.id===action.payload)
            state[index].completed = !state[index].completed
        }
    }
})


