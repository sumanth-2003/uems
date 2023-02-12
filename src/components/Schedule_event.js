import React from 'react'
import Footer from './Footer'
import Headers from './Header'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Schedule_event = () => {
	const BACKEND_URL = process.env.NODE_ENV=="development"?"":"https://uems-21.onrender.com"
  const navigate=useNavigate();
  const [Data,setData]=useState({name:"",type:"",description:"",date:"",time:"",venue:"",eattendes:"",item1:0,item2:0,item3:0,permission:"null"})
  const [step, setStep] = useState(1)
  const changeHandler=(e)=>{
    setData((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(Data);
    axios.post(BACKEND_URL+'/api/schedule',Data).then(async (res)=>{
    console.log(Data);
    await alert("request send sucessfully!!")
      navigate('/');
  }).catch(err=>console.log(err))
  }
  return (
    <div>
             <div>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className={"nav-link "+(step===1?'active':'')} type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Step-1</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={"nav-link "+(step===2?'active':'')} type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Step-2</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={"nav-link "+(step===3?'active':'')} type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-3</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={"nav-link "+(step===4?'active':'')} type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-4</button>
            </li>
          </ul>
          {step===1 && <div className="container" id="ex1">
            <h3>EVENT DETAILS</h3>
            <label htmlFor="name" className="form-label">Event name</label>
            <input type="text" id="name" className="form-control" onChange={changeHandler} name='name' value={Data.name} />
            <label htmlFor="EventType" className="form-label">Event Type</label>
            <select id="EventType" className="form-select" name='type' value={Data.type} onChange={changeHandler}>
              <option selected value="">...</option>
              <option value="Dance">Dance</option>
              <option value="Coding">Coding</option>
              <option value="Drawing">Drawing</option>
              <option value="Speech">Speech</option>
            </select>
            <label htmlFor="name" className="form-label">Event description</label>
            <input type="text" id="name" className="form-control" name='description' value={Data.description} onChange={changeHandler}/>
            <div className="form-floating mt-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={()=>setStep(2)}>next</button>
          </div>}
          {step===2 && <div className="container" id="ex2">
            <h3>SLOT DETAILS</h3>
            <label htmlFor="birthday">Date:</label>
            <input type="date" id="birthday" name="date" value={Data.date} onChange={changeHandler} /><br />
            <div className="mt-3">
              <label htmlFor="appt">time:</label>
              <input type="time" id="appt" name="time" value={Data.time} onChange={changeHandler}/>
            </div>
            <label htmlFor="EventType" className="form-label mt-3">Venue</label>
            <select id="EventType" className="form-select" name='venue' value={Data.venue} onChange={changeHandler}>
              <option selected value="">...</option>
              <option value="Auditorium">Auditorium</option>
              <option value="ground">ground</option>
              <option value="mini-auditorium">mini-auditorium</option>
              <option value="canteen">canteen</option>
            </select>
            <div className="mt-3">
              <label htmlFor="name" className="form-label">Estimated Atendes</label>
              <input type="number" id="name" defaultValue={0} value={Data.eattendes} name='eattendes' onChange={changeHandler}/><br />
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={()=>setStep(1)}>Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5" onClick={()=>setStep(3)}>Next</button>
          </div>}
          {step===3 && <div className="container" id="ex3">
            <h3>REFRESHMENT'S</h3>
            <label htmlFor="name" className="form-label">item-1</label>
            <input type="number" id="name" defaultValue={0} name="item1" value={Data.item1} onChange={changeHandler} /><br />
            <label htmlFor="name" className="form-label">item-2</label>
            <input type="number" id="name" defaultValue={0} name="item2" value={Data.item2} onChange={changeHandler}/><br />
            <label htmlFor="name" className="form-label">item-3</label>
            <input type="number" id="name" defaultValue={0} name="item3" value={Data.item3} onChange={changeHandler}/><br />
            <button type="button" className="btn btn-primary mt-3" onClick={()=>setStep(2)}>Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5" onClick={()=>setStep(4)}>Next</button>
          </div>}
          {step===4 && <div className="container" id="ex4">
            <h3>PREVIEW</h3>
            <div className="d-flex justify-content-between">
              <div className="container border" style={{minHeight: '7cm', maxWidth: '33%'}}>
                <h3>EVENT DETAILS</h3>
                <ul>
                  <li><h4>Name : </h4>{Data.name}</li>
                  <li><h4>Type : </h4>{Data.type}</li>
                  <li><h4>Description : </h4>{Data.description}</li>
                </ul>
              </div>
              <div className="container border" style={{minHeight: '7cm', maxWidth: '33%'}}>
                <h3>SLOT DETAILS</h3>
                <ul>
                <li><h4>Date : </h4>{Data.date}</li>
                <li><h4>Time : </h4>{Data.time}</li>
                <li><h4>Venue : </h4>{Data.venue}</li>
                <li><h4>Estimated Atendes : </h4>{Data.eattendes}</li>
                </ul>
              </div>
              <div className="container border" style={{minHeight: '7cm', maxWidth: '33%'}}>
                <h3>REFRESHMENT'S</h3>
                <ul>
                <li><h4>item-1 : </h4>{Data.item1}</li>
                <li><h4>item-2 : </h4>{Data.item2}</li>
                <li><h4>item-3 : </h4>{Data.item3}</li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={()=>setStep(3)}>Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5" onClick={submitHandler}>Request</button> 
          </div>}
        </div>
<Footer/>
</div>
    </div>
  )
}

export default Schedule_event