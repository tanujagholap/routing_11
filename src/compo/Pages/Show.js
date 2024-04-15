import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <>
    <center>
        <table>
            <thead>
                <tr>
                    <th>PRODUCT ID</th>
                    <th>PRODUCT NAME</th>
                    <th>PRODUCT PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.pid}</td>
                                <td>{obj.name}</td>
                                <td>{obj.price}</td>
                                <td>
                                    <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </center>    
    </>
  )
}

export default Show