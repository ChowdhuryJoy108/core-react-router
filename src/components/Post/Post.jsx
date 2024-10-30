import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function Post({post}){
    const {id,title, body} = post 
    const postStyle ={
        border:'1px solid red',
        borderRadius:'10px',
        padding:'15px',
        textAlign:'center'
    }
    return(
        <div style={postStyle}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
        </div>
    )
}