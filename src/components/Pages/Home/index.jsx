import Accordion from "../../Accordion";
import ControlledCarousel from "../../Carousel";

const Home = () => {
    return(
        <main className="mt-4">
            <div>
                <ControlledCarousel/>
            </div>
            <div>
            <Accordion/>
            </div>
        </main>
    )
}

export default Home;