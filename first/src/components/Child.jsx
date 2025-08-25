import { useState } from "react"
import { useEffect } from "react"
function Child(x) {
  const [childC,setChildC]=useState(-10)
    useEffect(()=>{
        alert("hi from useEffect")
    },[childC]) //Dependency array []
    






  return (
    <>
        <h1>Child Component</h1>
        <h1>Parent Counter val:{x.data}</h1>
        <h1>Child Counter val:{childC}</h1>
        <button onClick={()=>setChildC(childC+1)}>+</button>
        <h1>{x.name?x.name:'no name'}</h1>
    </>
  )
}

export default Child