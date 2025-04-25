import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Page from './page'
import Home from './home';
function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:roomId" element={<Page/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
