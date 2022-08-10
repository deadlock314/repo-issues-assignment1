import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from '../unitComponent/Spinner';
import IssuesComponent from './IssuesComponent';
import GetDataFromAPI from '../../HelperFun/GetDataFromApi';


const MainIssuesComponent=()=> {

    const [data,setData]=useState([]);

    useEffect(()=>{
        GetDataFromAPI("https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues").then((res)=>setData(res)).catch((err)=>setData([]));
    },[])


    return ( 
        (data.length)?<IssuesComponent resdata={data} />:<Spinner/>
    );
}

export default MainIssuesComponent;