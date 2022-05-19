import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AddQues() {
    const [name, setName] = useState("");
    const {id, idtopic, idquis} = useParams();
    const navigate = useNavigate();

    const saveTopic= async(e) => {
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/ques/${idquis}`,{
                idquis,
                name
            });
            navigate(`/${id}/v/${idtopic}/v/${idquis}`);
        } catch (err){
            console.log(err)
        }
    }


  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Tambah Pertanyaan</h1>
            <form onSubmit={saveTopic}>
            <div className="field">
                
            <label htmlFor="" className='label'>Id topik</label>
                    <div className="control">
                        <input type="text" className='input' 
                        value={idquis}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='name'
                        disabled
                        />   
                    </div>

                    <label htmlFor="" className='label'>Isi Pertanyaan</label>
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

export default AddQues