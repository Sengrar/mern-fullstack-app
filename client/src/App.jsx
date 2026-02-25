import { useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [data, setdata] = useState("");

  useEffect(()=>{
    axios.get("/api/test")
    .then((res)=>{
      setdata(res.data.message)
    })
  },[])

  return (
    <>
      <Nav></Nav>
      <h1 className='bg-black h-14 text-red-500 text-xl'>{data}</h1>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
