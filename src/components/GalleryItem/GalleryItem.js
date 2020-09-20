import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state = {
        isDescription: false
    }

    toggleDescription = () => {
        console.log('Toggling description');
        this.setState({
            isDescription: !this.state.isDescription
        });
    }

    render() {
        return (
            <div className='item'>
                <div key={this.props.id} onClick={this.toggleDescription}>
                    {
                        this.state.isDescription ?
                            <div className='descriptionDisplay'>{this.props.description}</div> :
                            <img className='imageDisplay' alt={this.props.description} src={this.props.path}/>
                            
                    }
                </div>
                <button onClick={() => this.props.onLike(this.props.id)}>Like</button>
                <p>Likes: {this.props.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;