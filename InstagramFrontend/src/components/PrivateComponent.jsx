import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
export default function PrivateComponent() {
    const auth=JSON.parse(localStorage.getItem('user'))
  return (
    <>
    {auth?<Outlet/>:<Navigate to="/login"/>}
    </>
  )
}
