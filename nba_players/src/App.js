import './App.css';
import axios from 'axios';
import {useState , useEffect} from 'react'

function App() {
  const [playerName,setPlayerName]=useState([])
  const [playerPic,setPlayerPic]=useState([])

const fetchData= ()=>{
  const playerApi='https://www.balldontlie.io/api/v1/players/237'
  const playerPic='https://nba-players.herokuapp.com/players/james/lebron'
}


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
