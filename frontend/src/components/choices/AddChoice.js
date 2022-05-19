import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddChoice() {
    const [name, setName] = useState("");
    const [idquestion, setidquestion] = useState("");
    const {id, idtopic, idquis, idques} = useParams();
    const navigate = useNavigate();

    const saveTopic= async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/choice/${idquis}`,{
                idquestion,
                name
            });
            navigate(`/${id}/v/${idtopic}/v/${idquis}/v/${idques}`);
        } catch (err){
            console.log(err)
        }
    }

    useEffect(()=>{
        setidquestion(idques)
    })

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Jawaban</h1>
            <form onSubmit={saveTopic}>
            <div className="field">
                
            <label htmlFor="" className='label'>Id question</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={idques}
                        placeholder='name'
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Isi Jawaban</label>
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

export default AddChoice