import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage(){

    const error = useRouteError()
    return(
        <div>
            <h3>Oops!!!</h3>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page is {error.statusText} !</h3>
                    <p>Go Where you from</p>
                    <Link to={'/'}>Home</Link>
                </div>
            }
        </div>
    )
}