import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import MyComp from "./MyComp";
import Timer from './timer';

function App() {
   const [isVisible,setVisible] = useState(true);
   useEffect(() => {
    console.log("App componenet is Mounting....");
   }, []);
  return (    
    <div className="App">   
    <Timer/>
      {/* {isVisible ? <MyComp/> : <></>}
      <button onClick={()=> setVisible(!isVisible)}>Toggle</button> */}
    </div>
  );
}

export default App;
