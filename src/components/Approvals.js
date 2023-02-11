import React from 'react'
import Footer from './Footer'
import Headers from './Header'
import EventCards from './EventCards'
import ApprovalCard from './ApprovalCard'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Approvals = () => {
  const [Data,setData] =useState([""])
  useEffect( () =>{
    const fetchdata=async ()=>{
      let res=await axios.get('/api/schedule');
      let  resdata=await res.data;
      
      // console.log(resdata)
      setData(resdata)
      // console.log(Data)
      
    }
    fetchdata();
  }, []);
  return (
    <div>
         <div>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Pending</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Accepted</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Declined</button>
            </li>
          </ul>

          <div className="collapse show active" id="ex1">
        {
            Data.map((e,i)=>{
          if(e.permission==="null"){    return(
                <ApprovalCard jo={e} key={i}/>
                 )}
            })
        }
            {/* <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-2</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-3</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>         */}
          </div>
          <div className="collapse" id="ex2">
          {
            Data.map((e,i)=>{
          if(e.permission==="Accept"){    return(
                <ApprovalCard jo={e} key={i}/>
                 )}
            })
        }
          </div>
          <div className="collapse" id="ex3">
          {
            Data.map((e,i)=>{
          if(e.permission==="Decline"){    return(
                <ApprovalCard jo={e} key={i}/>
                 )}
            })
        }
          </div>
        </div>
<Footer/>
      </div>   
    </div>
  )
}

export default Approvals
