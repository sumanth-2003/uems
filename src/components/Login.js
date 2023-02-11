import React,{useState} from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({test, setTest}) => {

 const  navigate=useNavigate()

 const [Post, setPost] = useState({
  username:"",
  password:""
 })
 const changeHandler=(e)=>{
  const {name,value}=e.target;
  setPost((prev)=>{
    return{
      ...prev,
      [name]:value
    }
  })
 }

 const handleClick=(e)=>{
e.preventDefault();
axios.post('/api/login',Post).then(async (res)=>{
  alert(res.data.message)
  setTest(res.data.role)
  localStorage.setItem("role",res.data.role)
  if(res.data.found){
    navigate('/events')
  }
  
}).catch((err)=>{console.log(err)})


 }
  return (
    <div>
      <div>

<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong card-body" style={{ borderRadius: "1rem",border:"1px dashed black" }}>
          <div className="card-body p-5 text-center" style={{backgroundColor:"white"}}>
            <h3 className="mb-5">Sign in</h3>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="typeEmailX-2"
                className="form-control form-control-lg"
                name='username'
                onChange={changeHandler}
                value={Post.username}
              />
              <label className="form-label" htmlFor="typeEmailX-2">
                username
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="typePasswordX-2"
                className="form-control form-control-lg"
                name='password'
                onChange={changeHandler}
                value={Post.password}
              />
              <label className="form-label" htmlFor="typePasswordX-2">
                Password
              </label>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleClick}>
              Login
            </button>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
      </div>

    </div>
  )
}

export default Login