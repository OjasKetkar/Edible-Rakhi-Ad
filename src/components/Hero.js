import React from "react";
import { ReactDOM } from "react";
import image from '../Main Collage.jpeg'
function Hero() {
    return(
        <div>
            <div className="hero">
                
                <img src={image} alt="image-cluster" className="cluster"/>

            </div>
            <div className="online">
            <div className="online-experiences">
                <p className="exp-header"><span>Rakhi</span> Collection</p>
                <h4>What if,  the Joy of Chocolate Rakhi goes to the Mind ... through your wrist, tongue and stomach? 😍
                😋 Yummy, isn't it?
                <br />
                Rakhi strap still remains on the wrist              throughout the Rakhi Paurnima day as                auspicious love of your sister ❤️
                <br />
                Introducing Chocolate Rakhis for Brother and                cute Chocolates for Sister... 😍😍
                                </h4>
                            </div>
                    
                            </div>
        </div>
    )
}

export default Hero;