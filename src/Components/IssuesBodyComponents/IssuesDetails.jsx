import React from 'react';
import { useLocation } from 'react-router-dom';

import '../../Styles/IssuesDetailsStyles.css';

const IssuesDetails=()=> {

    const paramData =useLocation()
   


    return ( 
        <div className="issues-details-div">
        <h2 className="issues-details-title" >{paramData.state.title}</h2>
        <p className="issues-details-body" >{paramData.state.body}</p>
        </div>
    );
}

export default IssuesDetails;