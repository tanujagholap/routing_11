import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {

    const {id} = useParams();
    
    const {register, handleSubmit} = useForm({defaultValues:
        async ()=>(await axios.get(`http://localhost:5000/users/${id}`)).data
    });

    const navi = useNavigate();
        
    function saveData(data){
        axios.put(`http://localhost:5000/users/${id}`, data)
        navi('/show')
    }

  return (
    <>
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
    </>
  )
}

export default Update