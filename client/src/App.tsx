import { Route, Routes } from 'react-router';
import './App.css'
import Page from './page'
import { nanoid } from 'nanoid';
import Home from './home';
function App() {
  let nanoidValue=nanoid()
  return (
    <>
        {/* <Link  to={<Page/>} ><button>Create a new room</button></Link> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={nanoidValue} element={<Page/>}/>
        </Routes>

    </>
  )
}

export default App;
