import React , { useState } from 'react';
import IssuesBasicData from './IssuesBasicData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSearch);

import '../../Styles/IssuesComponentStyles.css';
import FilterFun from '../../HelperFun/FilterFun';
import GetDataFromApi from '../../HelperFun/GetDataFromApi';


const IssuesComponent=({resdata})=> {

    const [searchTerm,setSearchTerm]=useState("");
    const [resData,setResData]=useState(resdata);

    const changeHandler=(e)=>{
        setSearchTerm(e.target.value);
        setResData(FilterFun(resdata,e.target.value));

    }

    const NextPageHandler=()=>{
       GetDataFromApi(`https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page${2}`).then((res)=>{
        setResData(res)
        resdata=res
    })
    }

    return ( 
        <>
        <p id="top" className="repo-name">Repo Name :- PHP-FFMpeg/PHPFFMpeg</p>
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
        <div className="next-page-btn">
             <a href="#top"  onClick={NextPageHandler}>Next Page</a>
        </div>
           
        </>
     );
}

export default IssuesComponent;