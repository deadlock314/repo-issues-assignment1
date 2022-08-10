import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from '../unitComponent/Spinner';
import IssuesComponent from './IssuesComponent';

const MainIssuesComponent=()=> {

    const getData=async()=>{
        try {
            const res = await fetch("https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues");
            const resjson= await res.json();
            return resjson;
        } catch (error) {
            console.error(error);
             return [];
        }
   }

    const [data,setData]=useState([]);

    useEffect(()=>{
        getData().then((res)=>setData(res)).catch((err)=>setData([]));
    },[])


    return ( 
        (data.length)?<IssuesComponent resdata={data} />:<Spinner/>
    );
}

export default MainIssuesComponent;