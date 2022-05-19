import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditChoice() {
    const [name, setName] = useState("");
    const [idquestion, setidquestion] = useState("");
    const {id, idtopic, idquis, idques, idch} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        setidquestion(idques);
        getDataById();
    },[]) 

    const getDataById = async () => {
        const response = await axios.get(`http://localhost:5000/choice/${idques}/${idch}`);
        setName(response.data.name);
    }

    const updateTopic = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/choice/${idques}/${idch}`,{
                idquestion,
                name
            });
            navigate(`/${id}/v/${idtopic}/v/${idquis}/v/${idques}`);
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Answer</h1>
            <form onSubmit={updateTopic}>
            <div className="field">

                    <label htmlFor="" className='label'>ID answer</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={idch}
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Answer terbaru</label>
                    <div className="control">
                    <input type="text" className='input' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}   
                        placeholder='teacher'/>    
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

export default EditChoice