import react,{useEffect, useState} from 'react'
import './AppCont.css'



const UseState=()=>{

  
  const[count,setCount] = useState(0)
  console.log(count);


  
  useEffect(()=>{

    alert("Your Count Is Now: "+ count);

  },[count])

 
  

    
    const handleIncrement=()=>{
      if (count<100) {
        
        setCount(count+1);
      }
    }
    
    const handleDecrement=()=>{
  if (count>0) {
    
  setCount(count-1);
  
  }
}

// Hooks allow function components to have access to state and other React features.

    return(
      <div className='bg'>
    <div className='outerbox'>
       <div className="box">
        <div className="text">
      <h1 className='screen'>Count: <div className="boxcount">{count}</div> </h1><br />
<div className="gap">
<button className='countbutton' onClick={handleIncrement}>Increment </button>
<button className='countbutton' onClick={handleDecrement}>Decrement </button>
</div>
    </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default UseState




// syntax
// const[count,setCount]=userstate(0)
        //     |       |              |
        // Current    Update          value initilisation
        //   state     The Current
        //             state


