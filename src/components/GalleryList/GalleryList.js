import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <ul>
                <GalleryItem />
            </ul>
        );
    }
}

export default GalleryList;