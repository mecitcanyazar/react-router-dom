import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,Outlet } from 'react-router-dom';

const Users = () => {
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .finally(()=>setLoading(false))
    },[])
    
  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading....</div>}
        <ul>
            {
                users.map((user)=>{
                    return (
                        <li key={user.id}>
                            {/* <Link to={`/users/${user.id}`}>{user.name}</Link> */}
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <Outlet />
        {/* Users,User'ı kapsadığı için Outlet kullanmamız gerekli. */}
    </div>
  )
}

export default Users
