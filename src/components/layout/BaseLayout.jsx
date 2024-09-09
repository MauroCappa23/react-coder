import Navbar from "../Navbar"
import Footer from "../containers/Footer";

const BaseLayout = ({ children }) => {
    return (
        <>
        <header>
            <Navbar/>
        </header>
        { children }
        <Footer/>
        </>
    )
}
export default BaseLayout;