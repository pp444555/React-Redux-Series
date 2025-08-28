import React from 'react';
import ReactDOM from 'react-dom/client';


function Add(x,y){
    const link = "www.google.com"
    return <a href = {link}>click me</a>;
}
function MyComponent(){
    const name = 'Prasad Patil';
    const x = 2 + 3;
    return <h1>Hello {Add(2,3)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent/>);