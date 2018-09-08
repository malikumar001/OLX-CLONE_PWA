import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom';
import './ShowImages.css';
import ImageGallery from 'react-image-gallery';

class ShowImages extends Component {
    render() {
        const { data } = this.props;
        

        const images = [
            {
                original: `/${data.image1}`,
                thumbnail: `/${data.image1}`
            },
            {
                original: `/${data.image2}`,
                thumbnail: `/${data.image2}`
            },
            {
                original: `/${data.image3}`,
                thumbnail: `/${data.image3}`
            },
            {
                original: `/${data.image4}`,
                thumbnail: `/${data.image4}`
            }
        ]
    console.log(images)
       
        return (
            <ImageGallery items={images} />
        );
    }
}

export default ShowImages;