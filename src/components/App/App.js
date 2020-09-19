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

  onLike = (galleryId) => {
    axios({
      method: 'PUT',
      url: `/gallery/${galleryId}`,
      data: {
        likes: galleryId
      }
    }).then(response => {
      console.log('Inside of axios PUT');
      this.getGallery();
    }).catch(err => {
      console.error('Error inside of axios PUT:', err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Programming Memes!!!</h1>
        </header>
        <br/>
        <GalleryList 
          gallery={this.state.gallery}
          onLike={this.onLike}
        />
      </div>
    );
  }
}

export default App;