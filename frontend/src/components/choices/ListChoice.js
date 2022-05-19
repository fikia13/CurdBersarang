import React, { useEffect, useState } from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';

function ListQues() {

    const [data, setData] = useState([]);
    const {id, idtopic, idquis, idques} = useParams();

    useEffect(() =>{
        getTopic();
    },[1]);
    
    const getTopic = async () =>{
        const response = await axios.get(`http://localhost:5000/choice/${idques}`)
        setData(response.data)
    }

    const deleteData = async(id1, id2) => {
        try{
            await axios.delete(`http://localhost:5000/choice/${id1}/${id2}`);
            getTopic();
        }catch(err){
            console.log(err);
        }
    }



  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <Link to={'add'} className="button is-success">Tambah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Answer</th>
                        <th>Id Answer</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((tp,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            {/* <td><a href={`${tp.id}`}>{tp.name}</a></td> */}
                            <td>{tp.name}
                            </td>
                            <td>{tp.id}</td>
                            <td>
                                <Link to={`edit/${tp.id}`} className='button is-small is-info'>Edit</Link>
                                <button className='button is-small is-danger' onClick={()=> deleteData( idques,tp.id)}>
                                    Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListQues;