import Footer from "../Component/Footer/Footer";
import NavigationBar from "../Component/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <>
        <NavigationBar />
        <Outlet />
        <Footer />
        
        </>
    );
};

export default Layout;