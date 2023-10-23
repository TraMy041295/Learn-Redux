import { createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name:"count",
    initialState: {
        count1 : 0,
        count2 :0
    },
    reducers:{
        countIncrement:(state,action)=>{
            state[`count${action.payload.number}`] += parseInt(action.payload.value)
        },
        countDecrement:(state,action)=>{
            state[`count${action.payload.number}`] -= parseInt(action.payload.value)
        }
    }
})