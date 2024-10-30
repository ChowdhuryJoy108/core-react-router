
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

export default function Home(){
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Header />
            <h1>Lets Learn React-Router</h1>

            {/* thats where to add loader spiner */}
            {
                navigation.state === 'loading' 
                ? <p>Loading....</p>
                : <Outlet />
            }
            <Footer />
        
        </div>
    )
}