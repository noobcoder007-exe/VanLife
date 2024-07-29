import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
       <div className="container-hm">
            <div className="home-container">
                <h1>You got the travel plans, we got the travel vans.</h1> 
            <div className="container2">
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <div className="vans">
                <Link to="vans">Find your van</Link>
            </div>
            </div>
       </div>
    )
};