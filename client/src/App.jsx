import { useState, useEffect} from 'react';
import axios from 'axios';
// import './App.css'

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
      <h1 className='bg-black h-14 text-red-500 text-xl'>{data}</h1>
    </>
  )
}

export default App
