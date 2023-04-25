import './index.css';
import Navbar from '../Navbar';
import SideNav from '../components/SideNav';
import MainSection from '../components/MainSection';
import {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

export default function Home(props) {
  const [active, setActive] = useState("INBOX")
  const navigate = useNavigate()
  useEffect(()=>{
    if(!props.name){
      navigate("/")
    }
  })
  return (
    <div id='main'>
      <Navbar appName={'ToDoList2.0'} name={props.name} email={props.email} signout={props.signout}/>
    <header>
      <div className="row">
        <div className="col-md-2" style={{borderRight:'1px solid rgba(177, 171, 171, 0.5)',height:'100vh'}}>
          <SideNav change = {setActive}/>
        </div>
        <div className="col-md-10">
          <MainSection active = {active}/>
        </div>
      </div>
    </header>
  </div>
  );
}
