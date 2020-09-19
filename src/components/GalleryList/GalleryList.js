import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.gallery.map(galleryItem => <GalleryItem galleryItem={galleryItem}/>)}
            </div>
        );
    }
}

export default GalleryList;