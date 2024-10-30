import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export default function PostDetails(){
    const {postId} = useParams()
    const postDetails = useLoaderData()
    const navigate = useNavigate()
    const {title} = postDetails
    const handleGoBack = () =>{
        navigate(-1)
    }
    return(
        <div>
            <p>{postId}</p>
            <h2>Post Title : {title}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}