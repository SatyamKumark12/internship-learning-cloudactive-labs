import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


const About = () => {

    const router = useRouter()

    // console.log(router.asPath);
    
  return (
    <>
    <h1>About</h1>
    
    {/* <button onClick={()=>router.back()}>About</button> */}

    <button onClick={()=>router.reload()}>About</button>
    
    </>
  )
}

export default About;