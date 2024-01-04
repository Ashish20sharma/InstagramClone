import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [login, setLogin] = useState([])
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleLogin = (e) => {
            axios.post("http://127.0.0.1:5000/user/login", login).then((data, err) => {
                if (data.status === 200) {
                    localStorage.setItem('user',JSON.stringify(data.data.result))
                    navigate('/')
                } else {
                    setError(true)
                }
            }) 
    }
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white py-5 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4 px-4">
                    <img className="w-1/2" src="/images/logo.png" alt="" />
                    <form onSubmit={(e)=>e.preventDefault()} className="w-full">
                        <input onInput={(e) => setLogin({ ...login, username: e.target.value })} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder="username" name="username" />
                        <input onInput={(e) => setLogin({ ...login, password: e.target.value })} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="password" placeholder="password" name="password" />
                        <input onClick={(e) => handleLogin(e)} className="w-full bg-blue-500 px-3 py-2 rounded-md mt-2" type="submit" value="Log In" />
                    </form>
                    {error && <h5 style={{ color: "red" }}>Please provide valid information</h5>}
                    <span>Don't have an account ? <Link to="/register" className="text-blue-500">Sign Up</Link></span>
                </div>
            </div>
        </>
    )
}
