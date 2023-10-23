import {useState , useEffect} from "react"
import { useDispatch } from 'react-redux'
import {addWatch} from '../../components/BookList/bookListSlice'
import bookListSlice from "../../components/BookList/bookListSlice"
import { useSelector} from "react-redux"
import {selectBook} from "../../redux/selector"

function InputForm(){
    const [form , setForm] = useState({})
    const selectedBook = useSelector(selectBook)
    console.log(selectedBook)
    useEffect(()=>{
        if (selectedBook===null){
            setForm({
                gender : "",
                name :"",
                image:"",
                price:"",
                quantity:"",
                introduce:""
            })
        }else setForm(selectedBook)
    },[selectedBook])

    const dispatch = useDispatch()
    function submitWatch(e){
        e.preventDefault()
        dispatch(addWatch(form))
        setForm({
            ...form,
            gender : "",
            name :"",
            image:"",
            price:"",
            quantity:"",
            introduce:""
        })
    }
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return <>
        <form onSubmit={submitWatch} >
           
           <div className="mb-3">
               <label for="exampleInputPassword1" className="form-label">Giới tính</label>
               <input type="text"  value={form.gender} name="gender" onChange={handleChange} placeholder='Giới tính' className="form-control border-new"  />
           </div>
           <div className="mb-3 ">
               <label for="exampleInputPassword1" className="form-label">Name</label>
               <input type="text" value={form.name} name="name" onChange={handleChange} placeholder='Name' className="form-control border-new"  />
           </div>
           <div className="mb-3 ">
               <label for="exampleInputPassword1" className="form-label">Image</label>
               <input type="text" value={form.image} name="image" onChange={handleChange} placeholder='Image' className="form-control border-new"  />
           </div>
           <div className="mb-3 ">
               <label for="exampleInputPassword1" className="form-label">Price</label>
               <input type="text" value={form.price} name="price" onChange={handleChange} placeholder='Price' className="form-control border-new" />
           </div>
           <div className="mb-3 ">
               <label for="exampleInputPassword1" className="form-label">Số Lượng</label>
               <input type="text" value={form.quantity} name="quantity" onChange={handleChange} placeholder='Số Lượng' className="form-control border-new" />
           </div>
           <div className="mb-3 ">
               <label for="exampleInputPassword1" className="form-label">Giới thiệu Sản Phẩm</label>
               <textarea type="text" value={form.introduce} name="introduce" onChange={handleChange} placeholder='Giới thiệu sản phẩm' className="form-control border-new" />
           </div>
           <button type="submit" className="btn btn-primary">Thêm mới</button>
       </form>

    </>
}

export default InputForm