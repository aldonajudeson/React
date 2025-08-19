import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { Routes,Route,Navigate} from "react-router-dom";
import Counter from './pages/Counter'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/error'element={<Error />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<Navigate to='/error'/>} />
    </Routes>
    </>
  )
}

export default App
