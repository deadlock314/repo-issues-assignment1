import React, { useState } from 'react';
import IssuesBasicData from './IssuesBasicData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSearch);

import '../../Styles/IssuesComponentStyles.css';
import FilterFun from '../../HelperFun/FilterFun';
import GetDataFromApi from '../../HelperFun/GetDataFromApi';
import Spinner from '../unitComponent/Spinner';


const IssuesComponent = ({ resdata }) => {

    const arr = [1, 2, 3, 4, 5, 6,7,8,9,10];
    const [searchTerm, setSearchTerm] = useState("");
    const [resData, setResData] = useState(resdata);
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setSearchTerm(e.target.value);
        setResData(FilterFun(resdata, e.target.value));

    }

    const NextPageHandler = (e) => {
        console.log(e.target.textContent)
        setLoading(true);
        GetDataFromApi(`https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?page=${e.target.textContent}`).then((res) => {
            setResData(res);
            setLoading(false);
            resdata = res;
        })
    }

    return (
        (loading) ?   <Spinner /> :
         <>
            <p id="top" className="repo-name">Repo Name :- PHP-FFMpeg/PHPFFMpeg</p>
            <div className="issue-component-search">
                <i className="search-icon"><FontAwesomeIcon icon={faSearch} /></i>
                <input id="input-box" className="issue-component-search-input"
                    type="text" placeholder="search here" onChange={changeHandler} />
            </div>

            {
                (resData.length) ? <>

                    {
                        resData.map((res) => {
                            return (
                                <IssuesBasicData key={res.id} issueData={res} />
                            )
                        })
                    }
                </> : <></>

            }
            <div className="next-page">
                {
                    arr.map((x) => {
                        return <a href="#top" className="page-num" key={x} onClick={NextPageHandler}>{x}</a>
                    })
                }
            </div>

        </>
    );
}

export default IssuesComponent;