import React, { useEffect, useState } from 'react'

const TodoTable = () => {
    const [show,setshow]=useState([])
  useEffect(()=>
  {
    getdata()
  },[])
  const getdata =async ()=>{
      let res = await fetch("http://localhost:8080/data") 
      let data = await res.json()
      setshow(data)

  }
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Month</th>
                <th>Caeser</th>
            </thead>
            {show.map((e)=>(   <tbody>
              
                <td>{e.name}</td>
                <td>{e.month}</td>
              <td>{e.ceiper}</td>
            </tbody>
             ))} 
        </table>
    </div>
  )
}

export default TodoTable