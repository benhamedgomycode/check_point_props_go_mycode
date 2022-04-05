import './App.css';
import './Components/Navbar/Navbar.css';
import N from './Components/Navbar/Navbar';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
   const handleName  = fullname => alert(fullname);
  return (
    <div>
     <N/>
     <div className="aboutme">
     { <P  fullname="Mehdi BEN SALEM" bio="Degree from IHEC of Carthage" profession="Mediterranea Investment | Founder and CEO"  handleName={handleName}>CVPIC.JPG</P> }
     <A fullname="Mehdi Ben Salem" location="Tunis,Tunisia" degree="Master degree" phone="50159014" email="mehdibensalemm@gmail.com" dateOfBirth="20/06/1990" experience="8 Years" careerLevel="Mid-Level"/>
     </div>
    </div>
  );
}

export default App;
