import React from "react";
import Homenav from "./homenav";
import Footer from "./footer";
export default function Home()
{
    return(
        <div className="home">
            <Homenav/>
            <div className="homeDes">
            <p className="glitter">"Capture the Perfect Moment, Connect with Ease. Your One-Stop Destination for Photography Services and Equipment Rentals. Explore, Connect, Create with Capture Connect. Simplifying Photography, One Click at a Time."</p>
            </div>
            <Footer/>
        </div>
    )
}