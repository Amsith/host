import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('')

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/todos', { name, age }, {
            headers:{
                name:name
            }
        })
            .then((res) => {
                console.log(name,age)
                setMessage("Task Created Successfully")
                setName('');
                setAge('');
                setTimeout(() => {
                    setMessage('')
                }, 3000)
            })
            .catch((err) => {
                setMessage("Can't Able to Create the Task");
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
                    <button type="submit">Create</button>
                </div>
                {message && <div>{message}</div>}
            </form>
        </div>
    );
};

export default Form;
