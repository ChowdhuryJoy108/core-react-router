/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    
    const navigate = useNavigate()
    const  { id, name,  email, phone} = user

    const handleDetails = ()=>{
        navigate(`/user/${id}`)
    }

    const userStyle ={
        border:'1px solid red',
        borderRadius:'10px',
        padding:'15px',
        textAlign:'center'
    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>{email}</p>
            <p><small>{phone}</small></p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleDetails}>View Details</button>
        </div>
    );
};

export default User;