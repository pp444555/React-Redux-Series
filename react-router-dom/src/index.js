import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useParams, NavLink, useFetcher } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json()).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {posts && posts.length > 0 ? (
          posts.map((post) => <NavLink style={{display: "block"}} to={`/post/${post.id}`} key={post.id}>{post.title}</NavLink>)
        ) : (
          "No posts available"
        )}

      </div>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>This is my about page</h1>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <h1>this is my profile page</h1>
    </div>
  )
}

const Settings = () => {
  return (
    <div>
      <h1>this is my Settings page</h1>
    </div>
  )
}

const Sayuser = () => {
  const params = useParams();

  console.log("params", params);
  return (
    <div>
      <h1>Your name is {params.userName}</h1>
    </div>
  )
}

const Postpage =()=>{
  const params = useParams();
  const [data,setData] = useState(null);
  console.log("params",params)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then((data) => data.json()).then((data) => setData(data));
   
  },[])

   if(data == null)
    return <p>...Loading</p>
  return(
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userName" element={<Sayuser />} />
        <Route path="/post/:postId" element={<Postpage/>}/>
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
