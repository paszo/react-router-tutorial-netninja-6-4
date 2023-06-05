import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
           <h2>Page not found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa ea eligendi harum nam sed! Debitis dolores enim excepturi exercitationem minima minus natus necessitatibus, nobis rem repellat vitae voluptatibus, voluptatum!</p>
            <p>Go to the <Link to="/">Home</Link>.</p>
        </div>
    );
};

export default NotFound;