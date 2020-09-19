import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  }

  componentDidMount = () => {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      console.log('Inside of axios GET');
      this.setState({
        gallery: response.data
      });
    }).catch(err => {
      console.error('Error in axios GET:', err)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Programming Memes!!!</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;