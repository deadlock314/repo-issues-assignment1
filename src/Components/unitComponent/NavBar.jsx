
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';


library.add(faBars, faXmark, faSearch);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

 

  return (
    <div id="nav-container">
      <nav>
        <div>
          <Link to="/"><label className="logo">GithubAPI-Issues</label></Link>
        </div>
  
      </nav>
    </div>

  )
}
