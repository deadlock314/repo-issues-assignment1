import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './Styles/globalStyles.css'
import NavBar from './Components/unitComponent/NavBar';
import Footer from './Components/unitComponent/Footer';
import MainIssuesComponent from './Components/HomeComponents/MainIssueComponent';
import IssuesDetails from './Components/IssuesBodyComponents/IssuesDetails';



const App=()=> {

  return (

<>
<BrowserRouter>
 <NavBar/> 
<Routes>
  <Route path='/' element={<MainIssuesComponent/>} />
  <Route path='/issues/:id' element={<IssuesDetails/>} />
</Routes>
 <Footer/>
 </BrowserRouter>
</>

 

  )
   
};




export default App;