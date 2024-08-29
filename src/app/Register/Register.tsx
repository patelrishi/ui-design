"use client"
import { createPostponedAbortSignal } from 'next/dist/server/app-render/dynamic-rendering'
import { constrainedMemory } from 'process'
import React from 'react'

export const Register = () => {
    const [data,setData]=React.useState({})

    const fnRegister = async () => {
        try {
            var dataObj = { "data": data}
             const res = await fetch('http://ui-design-server.vercel.app/students/register',{
             method:'post',
             headers:{'Content-type':'application/json',
                     //sending json
                    //add any headers you needs
             },
             body:JSON.stringify(dataObj),
            })
            const result = await res.json();
            const {acknowledged,insertedId}=result;
            if(acknowledged && insertedId){
                alert("success")
            } else{
                alert("failure")
            }
        
        } catch(ex:any){
           console.error(ex);
           alert(ex.message);
        }
    }
    const handleChange=(eve:any)=>{
        const {name,value}=eve.target;
        setData({...data,[name]:value})
    }
  return <div>
    <h3>Register Form</h3>
    <p>
        <b>Name:</b> <input name="name" onChange={handleChange}/>
    </p>
    <p>
        <b>RollNo:</b> <input name="rno" type="number" onChange={handleChange}/>
    </p>
    <p>
        <b>Loc:</b> <textarea name="loc" />
    </p>
    <p>
        <button onClick={fnRegister}>Registration</button>
    </p>
    </div>
}

