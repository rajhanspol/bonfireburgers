import {Link} from "react-router-dom"

function Description(){
    return(
        <div className="description">
            
                <h1>Juicy Burgers Delivered Fresh & Hot!</h1>
                <p>Along with crispy fries, shakes and more...</p>
                
                <Link to="/orderonline">
                    <button>Order Now</button>
                </Link>
        
        </div>
    )
}

export default Description