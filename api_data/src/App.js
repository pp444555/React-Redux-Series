import logo from './logo.svg';
import './App.css';
import { getPosts, getRandomUser } from './API/index.js';
import Postcard from './components/Postcard.jsx';
import Usercard from './components/Usercard.jsx';
import react,{useState,useEffect} from 'react';

function App() {
  const [data,setData] = useState(null);
  const [userData,setUserData] = useState(null);
  useEffect(() =>{
    getPosts().then((posts) => setData(posts));
},[]);

  const fetchUser = async () =>{
    const user = await getRandomUser();
    setUserData(user.results[0]);
  }

  useEffect(()=>{
    fetchUser();
  },[]);

  console.log(userData)

  return (
    <div className="App">
      {userData && <Usercard data={userData} onRefresh = {fetchUser} />}
      {
        data ? data.map((e) => <Postcard title={e.title} body={e.body} />): <p>No data</p>
      }
    </div>
  );
}

export default App;
