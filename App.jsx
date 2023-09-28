import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Početna from "./pages/Početna"
import Glavna from './pages/Glavna'
import NotFound from './pages/NotFound'

function App() {
  
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Početna</Link>
            </li>
          <li>
          <Link to="/glavna">Glavna</Link>
            </li>
        </ul>
      </nav>
    </header>
    <Routes>
     <Route path="*" element={<NotFound/>}/>
     <Route path="/" element={<Početna/>}/>
     <Route path="add-user" element={<Glavna/>}/>
     </Routes>
    </>
  )
}

export default App