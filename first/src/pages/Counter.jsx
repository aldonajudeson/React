import React, { useState } from 'react'
import Child from '../components/Child';

function Counter() {
    // let count=0;
    const [count,setCount]=useState(0)
    function inc(){
        setCount(count+1)
        console.log(count);
        
        
    }
    function dec(){
        setCount(count-1)
        console.log(count);
        

    }

  return (
    <>
    <h2>Counter</h2>
    <h3>{count}</h3>
    <button onClick={dec} >-</button>
    <button onClick={inc} >+</button>
    {count>5 && count<10 ?<Child data={count} name=""/>:<></>}
    </>
  )
}

export default Counter