import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


export default function Data ({ avatar, name, location, bio}) {
    
    return (
        <div>
            <img src={avatar} width={150} alt={name} />
            <h2><b>{name}</b></h2>
            <p><b>BIO:</b>{bio}</p>
             <p><b>LOCATION:</b> {location}</p>
            <p><b>REPOSITORIES</b></p>
        </div>
    )
}

Data.propTypes={
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    location: PropTypes.string, 
    bio: PropTypes.string
}