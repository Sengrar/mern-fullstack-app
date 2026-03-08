import { useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tutorials from './pages/Tutorials';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [data, setdata] = useState("");

  useEffect(()=>{
    axios.get("/api/users")
    .then((res)=>{
      setdata(res.data.message)
    })
  },[])

  return (
    <>
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <BrowserRouter>
        <Nav></Nav>

        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/tutorials' element={<Tutorials></Tutorials>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

        </Routes>
      </BrowserRouter>

      
      <Footer></Footer>
      {/* <h1 className='bg-black h-14 text-red-500 text-xl'>{data}</h1> */}
      </div>
    </>
  )
}

export default App
