import React,{useState,useEffect} from 'react'

function Counter(props){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('mounting---');
        
            console.log('unMounting---');
        
    },[count])
    
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <h1>hello world: {count}</h1>
        </div>
    )
}
export default Counter