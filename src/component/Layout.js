import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ViewUserAction } from '../app/action/ViewUserAction'

const Layout = ({children}) => {
  const {users} = useSelector((state)=> state.userapp)
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(ViewUserAction()) 
  },[])
 
  return (
    <>
    <div className='headertop'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/view">View ({users.length})</Link></li>

        </ul>
    </div>
    <div className='clear'></div>
    {children}
    </>
  )
}

export default Layout