import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function EditTopic() {
    const [name, setName] = useState("");
    const [idcourse, setidcourse] = useState("");
    const [topicid, settopicid] = useState("");
    const {id, idtopic} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        setidcourse(id);
        settopicid(idtopic);
        getTopicById();
    },[]) 

    const getTopicById = async () => {
        const response = await axios.get(`http://localhost:5000/topics/${id}/${idtopic}`);
        setName(response.data.name);
    }

    const updateTopic = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/topics/${id}/${idtopic}`,{
                idcourse,
                name
            });
            navigate(`/${id}`);
        } catch (err){
            console.log(err)
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <h1 className='is-size-1'>Edit Topik</h1>
            <form onSubmit={updateTopic}>
            <div className="field">

                    <label htmlFor="" className='label'>ID Topik</label>
                    <div className="control">
                        <input type="text" className='input'
                        value={topicid}
                        disabled
                        />   
                    </div>
                    <label htmlFor="" className='label'>Nama topik</label>
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

export default EditTopic