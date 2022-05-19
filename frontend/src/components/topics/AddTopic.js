import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddTopic() {
    const [name, setName] = useState("");
    const [idcourse, setidcourse] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const saveTopic= async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/topics/${id}`,{
                idcourse,
                name
            });
            navigate(`/${id}`);
        } catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        setidcourse(id);
        console.log(idcourse)
    })


  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Topik</h1>
            <form onSubmit={saveTopic}>
            <div className="field">
                    <label htmlFor="" className='label'>Nama topik</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='name'/>   
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTopic