import react from 'react';

const Usercard = ({data,onRefresh}) =>{
    console.log("hey",data)
    return(
        <div className= "user-card">
            <div className = "user-img">
                <h3>{data.name.first}</h3>
                <p>{data.phone}</p>
                <p>{data.location.city},{data.location.state},{data.location.country}</p>
                <button onClick={onRefresh}>Refresh Data</button>
            </div>
        </div>
    )
}

export default Usercard;