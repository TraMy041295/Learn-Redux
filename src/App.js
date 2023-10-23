import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Count from './components/Count/Count';
import ShowCount from './components/Count/ShowCount';
import Todolist from './components/Todolist'
import BookList from './components/BookList';
import InputForm from './components/InputForm/InputForm';

function App() {

  return (
    <>
    {/* <Count number={1}/>
    <Count number={2}/>
    <ShowCount />
    <Todolist /> */}
    <InputForm/>
    <BookList/>
    </>
  );
}

export default App;
