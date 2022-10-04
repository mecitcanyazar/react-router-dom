import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { Link, useParams } from 'react-router-dom'



const User = () => {
    const {id} = useParams()
    // console.log(typeof id) // id:string

    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState([]);

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .finally(()=>setLoading(false)) 
    },[id])

  return (
    <div>
        <h1>User Details</h1>
        {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(user)}</code>}
        
        <br /><br />

        <Link to={`/users/${Number(id) + 1}`}>Next User ({Number(id) + 1})</Link>
      
    </div>
  )
}

export default User