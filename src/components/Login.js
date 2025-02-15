import React, { useState } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
const Login = ({ role, setRole, token, setToken }) => {

    const BACKEND_URL = process.env.NODE_ENV == "development" ? "" : "https://uems-21.onrender.com"
    const navigate = useNavigate()

    const [Post, setPost] = useState({
        username: "",
        password: ""
    })
    const changeHandler = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setPost((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // useEffect(() => {
    //     let r = localStorage.getItem("role") || 0
    //     let k=localStorage.getItem("token")||""
    //     console.log(r,k, "From login");
    //     setRole(r);
    //     setToken(k);
    // }, []);


    const handleClick = (e) => {
        e.preventDefault();
        axios.post(BACKEND_URL + '/api/login', Post).then(async (res) => {
            console.log(res.data.message)
            setRole(res.data.role)
            setToken(res.data.token)
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("token", res.data.token)
            console.log(res.data.role)
            if (res.data.found) {
                navigate('/events')
            }

        }).catch((err) => { console.log(err) })


    }
    return (
        <div>
            <div>

                <section>
                    <div className="container">
                        <div className="row justify-content-center align-items-center" style={{ minHeight: '650px' }}>
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong card-body" style={{ borderRadius: "1rem", border: "1px dashed black" }}>
                                    <div className="card-body p-5" style={{ backgroundColor: "white" }}>
                                        <h3 className="mb-5 text-center">Sign in</h3>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="typeEmailX-2">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                id="typeEmailX-2"
                                                className="form-control form-control"
                                                name='username'
                                                onChange={changeHandler}
                                                value={Post.username}
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="typePasswordX-2"
                                                className="form-control form-control"
                                                name='password'
                                                onChange={changeHandler}
                                                value={Post.password}
                                            />
                                        </div>
                                        <div className="text-center"><button className="btn btn-primary btn-block" type="submit" onClick={handleClick}>
                                            Login
                                        </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        </div>
    )
}

export default Login