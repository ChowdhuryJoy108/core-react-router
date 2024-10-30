import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"

export default function Posts(){
    const posts = useLoaderData()
    return(
        <div>
            <h2>Post: {posts.length}</h2>
            <div className="users-container">
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    )
}