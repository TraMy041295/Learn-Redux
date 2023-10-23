
const selectCount = (number)=>(state)=>state.count[`count${number}`]

const todolistSelector = (state)=>state.todolist

const booklistSelector = (state) => state.booklist.booklist

const selectBook = (state) => state.booklist.selectedBook


export {selectCount ,todolistSelector,booklistSelector,selectBook}