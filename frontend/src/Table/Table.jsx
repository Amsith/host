import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {

  const [table, setTable] = useState([])


  function show() {
    axios.get('http://localhost:8000/todos')
      .then((res) => { setTable(res.data) })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  useEffect(() => {
    show()
  }, [])


////Delete Function
function HandleDelete(id){
  axios.delete(`http://localhost:8000/todos/${id}`)
  .then(()=>{
    show()
  })
}


  return (

    <>
    <div><Link to={'/'}>Form</Link></div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {table.map((todo, index) => (
            <tr key={index}>
              {/* <td>{todo._id}</td> */}
              <td>{index + 1}</td>
              <td>{todo.name}</td>
              <td>{todo.age}</td>
              <td>
                <Link to={'/edit/' + todo._id}><button>Edit</button></Link>
              </td>
              <td><button onClick={()=>HandleDelete(todo._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table