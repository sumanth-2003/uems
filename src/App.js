import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Approvals from './components/Approvals';
import Report from './components/Report';
import Schedule_event from './components/Schedule_event';
import Login from './components/Login';
import Error from './components/Error'
import Header from './components/Header';
const App = () => {
  const [role, setRole] = useState(localStorage.getItem("role")||0)
  const[token,setToken]=useState("")
  useEffect(()=> {
    let r =localStorage.getItem("role") || 0;
    console.log(r, "Ji")
    setRole(r)
    // console.log(role)
  }, [])
  
  useEffect(()=>{
    console.log(role, "HIIIIII")
  }, [role])
  
  return (
    <div>
      <Router>
        <Header role={role} setRole={setRole} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/approvals' element={<Approvals token={token} />} />
          <Route path='/report' element={<Report token={token} />} />
          <Route path='/schedule_event' element={<Schedule_event token={token}/>} />
          <Route path='/login' element={<Login role={role} setRole={setRole} token={token} setToken={setToken} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App













