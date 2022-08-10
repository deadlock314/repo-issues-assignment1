import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Styles/IssuesBasicDataStyles.css';

const IssuesBasicData=({issueData})=>{

    const redirect=useNavigate();
    const clickHandler=()=>redirect(`/issues/:${issueData.id}`,{state:issueData});

    return ( 

        <div className="issues-basic-data-div" onClick={clickHandler}>
            <h2 className="issues-basic-data-title">{issueData.title}</h2>
            <span>{issueData.user.login}</span>
            <span>{issueData.created_at} {issueData.updated_at}</span>
        </div>


    );
}

export default IssuesBasicData;