import Carousel from "../Components/Carousel/Carousel";
import Description from "../Components/Description/Description";
import NavBar from "../Components/NavBar/NavBar";
import Details from "../Components/Outlet Details/Details";




function FrontPage(){
    return (
        <div className="homePage">
            <NavBar/>
            <div className="homepageContent">
                <Description />
                <Carousel />
                <Details />
            </div>
        </div>
    )
}

export default FrontPage