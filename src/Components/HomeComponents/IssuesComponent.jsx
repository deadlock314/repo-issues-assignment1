import React from 'react';
import IssuesBasicData from './IssuesBasicData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSearch);

import '../../Styles/IssuesComponentStyles.css';
import { useState } from 'react';
import { useEffect } from 'react';

const IssuesComponent=({resdata})=> {

    const [searchTerm,setSearchTerm]=useState("");
    const [resData,setResData]=useState(resdata);

    const changeHandler=(e)=>{
        setSearchTerm(e.target.value);
        setResData(resdata);
        console.log(resdata)
    }

    return ( 
        <>
        <div className="issue-component-search">
         <i><FontAwesomeIcon  icon={faSearch} /></i>  
         <input id="input-box" className="issue-component-search-input" 
          type="text" placeholder="search here" onChange={changeHandler} />
        </div>

       {
       (resData.length)?<>

       { 
             resData.map((res)=>{
                return (
                <IssuesBasicData key={res.id} issueData={res}/> 
                )
             })
        }
       </>:<></>

        }
        </>
     );
}

export default IssuesComponent;