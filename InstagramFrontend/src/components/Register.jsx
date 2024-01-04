import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
    const [user, setUser] = useState([])
    const [error,setError]=useState(false)
    const navigate = useNavigate()
    const handleregister = () => {
            axios.post("http://127.0.0.1:5000/user/register", user).then((data, err) => {
                if (data.status === 200) {
                    navigate('/login')
                } else {
                    navigate('/register')
                    setError(true)
                }
            })
        }
    
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-900 text-white py-5 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4 px-4">
                    <img className="w-1/2" src="/images/logo.png" alt="" />
                    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                        <input onInput={(e) => setUser({ ...user, username: e.target.value })} value={user.username} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder="username" name="username" />
                        <input onInput={(e) => setUser({ ...user, email: e.target.value })} value={user.email} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="email" placeholder="email" name="email" />
                        <input onInput={(e) => setUser({ ...user, name: e.target.value })} value={user.name} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="text" placeholder="name" name="name" />
                        <input onInput={(e) => setUser({ ...user, password: e.target.value })} value={user.password} className="px-3 mt-2 py-2 border-2 border-zinc-800 rounded-md block w-full bg-zinc-900" type="password" placeholder="password" name="password" />
                        <input onClick={(e) => handleregister(e)} className="w-full bg-blue-500 px-2 py-2 rounded-md mt-2" type="submit" value="Make New Account" />
                    </form>
                    {error&&<h5 style={{color:"red"}}>Plrase provide valid information</h5>}
                    <span>Already have an account ? <Link to="/login" className="text-blue-500">Log In</Link></span>
                </div>
            </div>
        </>
    )
}
