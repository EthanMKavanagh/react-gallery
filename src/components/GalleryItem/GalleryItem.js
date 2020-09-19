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

    render() {
        return (
            <div key={this.props.id}>
                {
                    this.state.isDescription ?
                        <div>{this.props.description}</div> :
                        <div>{this.props.path}</div>
                        
                }
                <button onClick={this.toggleDescription}>
                    {
                        this.state.isDescription ?
                            `Show Image` :
                            `Show Description`
                    }
                </button>
            </div>
        );
    }
}

export default GalleryItem;