import React from 'react';

import './App.css';
import Input from './Input';
import List from './List';
import Data from './Data';

import {url1, url2} from './Konstante';

export default class App extends React.Component{
  state = {

    user: '',
    data: [],
    datadesc: [],
  }

  handleUserAppi = (a) => {

    this.setState({user:a})
    this.setState({isLoading: true})

    fetch (url1+a)
      .then (response => response.json())
      .then (newdata =>{this.setState({data: newdata, isLoading:false})

      console.log(this.state.data.name)})

   fetch (url1+a+url2)
      .then (response => response.json())
      .then (datamore =>{this.setState({datadesc: datamore, isLoading:false})
         console.log(datamore)})
    console.log(this.state.user)
  }

  handleReset = () => {
    this.setState({user:'', data:[], datadesc:[]})
  }
  render() {
    let a;

    if (this.state.datadesc.length>0) {
      a = (
        <div>
        <Data 
            avatar={this.state.data.avatar_url}
            name={this.state.data.name}
            location={this.state.data.location}
            bio={this.state.data.bio}
        />
          <ul className ='lista'>
              {this.state.datadesc.map((podaci) => (
              <List
                key={podaci.id}
                userrepos={podaci.name} 
              />
            ))}
          </ul>
          <button classname="button" onClick={this.handleReset}>Reset</button>
      </div>)
    }

    return (
      <div className='App'>
          <Input OnAddUser={this.handleUserAppi}
          />
          <br></br>
          {a}
          
       </div>
      )
}
}

