import React, { Component } from 'react';

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

    onLike = () => {
        console.log('Inside of onLike');
        
    }

    render() {
        return (
            <div>
                <div key={this.props.id} onClick={this.toggleDescription}>
                    {
                        this.state.isDescription ?
                            <div>{this.props.description}</div> :
                            <img src={this.props.path} />
                            
                    }
                </div>
                <button onClick={() => this.props.onLike(this.props.id)}>Like</button>
                <p>Likes: {this.props.likes}</p>
            </div>
        );
    }
}

export default GalleryItem;