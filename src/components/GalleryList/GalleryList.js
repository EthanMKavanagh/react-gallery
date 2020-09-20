import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.gallery.map(galleryItem =>
                    <GalleryItem
                        id={galleryItem.id}
                        path={galleryItem.path}
                        description={galleryItem.description}
                        likes={galleryItem.likes}
                        onLike={this.props.onLike}
                    />
                )}
            </div>
        );
    }
}

export default GalleryList;