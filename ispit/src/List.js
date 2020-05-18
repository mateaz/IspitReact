import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

export default function List ({ userrepos}) {
    
    return (
            <li className='border'>{userrepos}</li>
    )
}

List.propTypes={
    userrepos: PropTypes.string
}