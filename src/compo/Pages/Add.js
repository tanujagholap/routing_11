import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add() {
    const {register, handleSubmit} = useForm()

    const navi = useNavigate();
        
    function saveData(data){
    axios.post('http://localhost:5000/users', data)
        navi('/show')
    }

  return (
    <center>
        <h3>REGISTRATION FORM</h3>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='i'>PRODUCT ID:</label>
            <input type='number' id='i' {...register('pid')}/>
            <br/> <br/>
            <label htmlFor='n'>PRODUCT NAME:</label>
            <input type='text' id='n' {...register('name')}/>
            <br/> <br/>
            <label htmlFor='p'>PRODUCT PRICE:</label>
            <input type='number' id='p' {...register('price')}/>
            <br/> <br/>
            <input type='submit' value='SUBMIT'/>
            <br/>
            <input type='reset' value='RESET'/>
        </form>
    </center>
  )
}

export default Add