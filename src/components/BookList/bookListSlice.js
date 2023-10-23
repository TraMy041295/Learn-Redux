import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { API , token } from "../../constant"
import toastr from "toastr"
const bookListSlice = createSlice({
    name:"booklist",
    initialState:{booklist:[],selectedBook:null},
    reducers:{
        // setBookList:(state,action)=>{
        //     state.booklist = action.payload
        // },
        selectBook:(state,action)=>{
            state.selectedBook = action.payload
        }
    },
    extraReducers:(buider) => {
        buider.addCase(callAPI.pending,(state,action)=>{
            console.log(action)
        })
        .addCase(callAPI.fulfilled,(state,action)=>{
            state.booklist = action.payload
        })
        .addCase(callAPI.rejected,(state,action) =>{
            toastr.error("call API thất bại","lỗi")
        })
        .addCase(addWatch.fulfilled,(state,action)=>{
            state.booklist.push(action.payload)

        })
        .addCase(deleteWatch.fulfilled,(state,action)=>{
            state.booklist = state.booklist.filter(item=>item.id !== action.payload)
            
        })
    }
})
 
// const callAPI = ()=>{
//     return ( dispatch , getState)=>{
//         axios.get(`${API}?token=${token}`)
//         .then((res)=>{
//             dispatch(bookListSlice.actions.setBookList(res.data))
//         })
//     }
// }

const callAPI = createAsyncThunk(
    "book/getBook",
    async () => {
        const res = await axios.get(`${API}?token=${token}`)
        return res.data
    }
)
const addWatch = createAsyncThunk(
    "book/addbook",
    async(form)=>{
        const res = await axios.post(`${API}?token=${token}`,form)
        return res.data

    }
)
const deleteWatch = createAsyncThunk(
    "book/deletebook",
    async(id)=>{
        const res = await axios.delete(`${API}/${id}`)
        return res.data.id
    }
)
      
export default bookListSlice
export { callAPI , addWatch ,deleteWatch }