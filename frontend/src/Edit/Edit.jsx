import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams,useNavigate } from 'react-router-dom';

const Edit = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('')
    const {id} =useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/todos/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setAge(res.data.age)
        })
    },[id])

    const submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/todos/${id}`, { name, age })
            .then(()=>{
                navigate('/table')
            })
            .catch((err) => {
                setMessage("Can't Able to Edit the Task");
                setTimeout(()=>{
                    setMessage('')
                },3000)
            });

    };

    return (
        <div>
            <div><Link to={'/table'}>Table</Link></div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Update</button>
                </div>
                {message && <div>{message}</div>}
            </form>
        </div>
    );
};

export default Edit;
