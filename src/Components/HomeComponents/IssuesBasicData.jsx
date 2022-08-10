import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Styles/IssuesBasicDataStyles.css';

const IssuesBasicData=({issueData})=>{

    const redirect=useNavigate();
    const clickHandler=()=>redirect(`/issues/:${issueData.id}`,{state:issueData});

    return ( 

        <div className="issues-basic-data-div" onClick={clickHandler}>
            <h2 className="issues-basic-data-title">{issueData.title}</h2>
           <p><span className="issues-user">created by {issueData.user.login}</span>
            <span>created_at :  {issueData.created_at.substring(11,16)} {issueData.created_at.substring(0,10)+" "} 
             ::  last updated_at :  {issueData.updated_at.substring(11,16)} {issueData.updated_at.substring(0,10)}</span></p> 
        </div>


    );
}

export default IssuesBasicData;