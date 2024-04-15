import axios from 'axios';
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Delete() {

    const navi = useNavigate();

    const {id} = useParams();

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${id}`)
        navi('/show')
    }

  return (
    <center>
        <h2>ARE YOU SURE?</h2>
        <button onClick={()=>deleteUser()}>YSE</button>
        <NavLink to={`/show`}><button>NO</button></NavLink>
    </center>
  )
}

export default Delete