import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class Input extends React.Component {
    state = {
        newuser: ''
    }

    handleChangeValue = (event) => {
            const typeduser = event.target.value;
            this.setState({newuser: typeduser})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.newuser.length>0) {
        this.props.OnAddUser(this.state.newuser)
        this.setState({newuser: ''});
    }};

    render () {
    return (
        <div >
            <form onSubmit={this.handleSubmit}>
                <label className='InputForma'>GitHub Username:</label>
                <br></br>
                <input 
                    value={this.state.newuser}
                    onChange={this.handleChangeValue}
                    type='text'
                    />
                <br></br>
                <button className='button'>GO</button>
            </form>
        </div>
    )
}};

Input.propTypes={
    OnAddUser: PropTypes.func
}