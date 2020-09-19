import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList />
        <img src="images/bill-gates-meme-your-mama-is-so-fat.png"/>
        <img src="images/Meme.jpg"/>
        <img src="images/programming-meme-2.png" />
        <img src="images/react-meme.png" />
        <img src="images/Thor-compiling-meme.png" />
      </div>
    );
  }
}

export default App;
