import axios from 'axios';
import React from 'react'

const ApprovalCard = (props) => {
  const clickHandler=(e)=>{
    let permission="Decline";
    if(e.target.name=="Accept"){
      permission="Accept"
    }
    axios.put('/api/approval',{
      id:props.jo._id,
      permission:permission
    }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    window.location.reload();
  }
  return (
    <div>
         <div className="card">
              <div className="card-body">
                <h3 className="card-title">{props.jo.name}</h3>
                <p>type : {props.jo.type}</p>
                <p>Date : {props.jo.date}</p>
                <p>time : {props.jo.time}</p>
                <p>Venue : {props.jo.venue}</p>
                <p>Estimates attendes : {props.jo.eattendes}</p>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4"  name="Accept" onClick={clickHandler}>Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4" name="Decline" onClick={clickHandler}>Decline</a>
              </div>
            </div>
    </div>
  )
}

export default ApprovalCard