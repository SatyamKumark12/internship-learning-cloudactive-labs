import React , { useState , useEffect } from 'react';
import axios from 'axios';

interface UserData{
    id : number;
    title : string;
    body : string;
}

const HookUseEffect : React.FC = () => {

    const [data , setData] = useState<UserData[]>([]);

    useEffect(()=>{
       const fetchFun = async () =>{
        try{

            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const userData = res.data;
            setData(userData);
            
        } catch(error){
            console.error(error);
        }
       }

       fetchFun();
    } , []);

  return (
   <>
   <div>
    {
        data.map((user)=>(
            <div key={user.id}>
                <h1>{user.id}</h1>
                <h1>{user.title}</h1>
                <h1>{user.body}</h1>
            </div>
        ))
    }
   </div>
   </>
  )
}

export default HookUseEffect;