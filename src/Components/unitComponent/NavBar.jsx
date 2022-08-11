import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';




export default function NavBar() {


  return (
   
      <nav>
        <div>
          <Link to="/"><label className="logo">GithubRepoIssues</label></Link>
        </div>
  
      </nav>

  )
}
