import { useState } from 'react'
import img1 from '../../img/landingpagebrgr1.jpg'
import img2 from '../../img/landingpagebrgr2.jpg'
import img3 from '../../img/landingpagebrgr3.jpg'
import img4 from '../../img/landingpagebrgr4.jpg'



function Carousel(){


    const [displayImg, setDisplayImg] = useState(0)
    const images = [img1, img2, img3, img4]
    function imageNextHandler(){
        if(displayImg < 3){
            setDisplayImg(img => img + 1)
        } else {
            setDisplayImg(0)
        }
    }
    function imagePrevHandler(){
        if(displayImg > 0){
            setDisplayImg(img => img - 1)
        } else {
            setDisplayImg(3)
        }
    }


    return (
        <div className="carousel">
            <div>
                <button onClick={imagePrevHandler}><i className="fas fa-chevron-left"></i></button>
                <button onClick={imageNextHandler}><i className="fas fa-chevron-right"></i></button>
            </div>
            <img src={images[displayImg]} alt="failed to load img"/>
        </div>
    )
}

export default Carousel