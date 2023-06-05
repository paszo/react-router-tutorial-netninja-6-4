import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function About() {

    const [user, setUser] = useState('mario');

    if (!user){
        return <Navigate to="/" replace="true"/>
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aspernatur consequuntur cum dolorem ea eaque, facere id illo inventore maxime, placeat quibusdam quo ullam veniam. At eius hic necessitatibus.</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}