import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Page from './page'
import Home from './home';
import { io } from 'socket.io-client';

function App() {
  const socket=io("http://localhost:5173");
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
