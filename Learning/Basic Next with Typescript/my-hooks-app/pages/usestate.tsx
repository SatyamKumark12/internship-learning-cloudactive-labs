import React , { useState } from 'react';

const HookUseState : React.FC = () => {

    const [data , setData] = useState(0);

    const handleAdd = () =>{
        setData(data + 1);
        console.log(data);
        
    }
  


  return (
    <>
    <h1>{data}</h1>

    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default HookUseState;