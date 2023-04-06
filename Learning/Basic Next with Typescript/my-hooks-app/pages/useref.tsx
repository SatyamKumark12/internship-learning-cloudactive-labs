import React , { useState , useRef } from 'react';



const HookUseRef = () => {

    const[data , setData] = useState<string>("");

    const refElement = useRef<HTMLInputElement>(null);

    const handleColor = () =>{
        if(refElement.current){
            refElement.current.style.color="blue";
        }
    }
  return (
    <>
    <div>
        <input ref={refElement} type="text" name='name' id='id' value={data} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setData(e.target.value)} />

        <button onClick={handleColor}>Change Color</button>
    </div>
    </>
  )
}

export default HookUseRef;