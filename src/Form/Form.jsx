import React, { useState } from "react";
import './AppForm.css'

const Form = () => {
  const[name,setName] = useState("")
  const[apply,setApply] = useState("")
  const[rating,setRating] = useState("")
  const[data, setData] = useState([]);
  

  const handleChange = (e) => {

    const {name,value} =  e.target;
    if(name==="fullname"){
        setName(value)
    }
    else if(name === "apply"){
        setApply(value)
    }
    else if(name === "rating"){
        setRating(value)
    }
  };
  const handelClick=()=>{
    const obj = {
        name:name,
        apply:apply,
        rating:rating,
    }
    setData([...data,obj])
  }

  return (
    <div className="form">
      
      <header><span><u>FEEDBACK FORM</u></span></header>
      <div className="box1">
      Name: <input type="search" name="fullname" value={name} onChange={handleChange} placeholder="Enter Your Name"/></div>
      <div className="box2">
      Department: <input type="search" name="apply" value={apply} onChange={handleChange} placeholder="Apply For"/></div>
      <div className="box3">
      Rating: <input type="search" name="rating" value={rating} onChange={handleChange} placeholder="Rating"/></div>
   
      <button className="formbutton" onClick={handelClick}><formsubmit>Submit</formsubmit></button>
      
     
      
    <div className="array">
    {data.map((item,index)=>(
        <h1 className="arraybox" key={index}>Name:{item.name} || Apply:{item.apply} || Rating:{item.rating}</h1>
    ))}
    </div>


    </div>


  );
};

export default Form;
