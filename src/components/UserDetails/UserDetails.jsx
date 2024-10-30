import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const {userId} = useParams()
    const userDetails = useLoaderData()
    const navigate = useNavigate()
    // console.log(userDetails)
    const {name, website } = userDetails

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <p><small>{userId}</small></p>
            <h2>Details about user : {name}</h2>
            <p>Website:{website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;