import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditQuis() {
    const [name, setName] = useState("");
    const [idTemp1, setidTemp1] = useState("");
    const [idtemp2, setidTemp2] = useState("");
    const {id, idtopic, idquis} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getById();
    },[1]) 

    const getById = async () => {
        const response = await axios.get(`http://localhost:5000/quis/${idtopic}/${idquis}`);
        setName(response.data.name);
    }

    const updateTopic = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/quis/${idtopic}/${idquis}`,{
                idquis,
                name
            });
            navigate(`/${id}/v/${idtopic}`);
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Quis</h1>
            <form onSubmit={updateTopic}>
            <div className="field">

                    <label htmlFor="" className='label'>ID Quis</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={idquis}
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Nama Quis</label>
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

export default EditQuis