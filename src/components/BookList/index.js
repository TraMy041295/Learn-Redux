import { useDispatch , useSelector } from "react-redux"
import {booklistSelector} from '../../redux/selector'
import { callAPI , deleteWatch } from "./bookListSlice"
import { useEffect } from "react"
import bookListSlice from "./bookListSlice"


export default function(props) {
    const booklist = useSelector(booklistSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(callAPI())
    },[])
    return <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Giới tính</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {booklist.map(item => {
               return <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.gender}</td>
                    <td><button onClick={()=>{dispatch(bookListSlice.actions.selectBook(item))}}>Sửa</button></td>
                    <td><button onClick={()=>{dispatch(deleteWatch(item.id))}} >Xoá</button></td>
                </tr>
            })
            }
        </tbody>
    </table>
}