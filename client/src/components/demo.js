import React, { Component } from 'react';
// import ImagesUploader from 'react-images-uploader';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
 
export default class demo extends Component {
    render() {
        return (
            <div>

            </div>
            // <ImagesUploader
            //     url="http://localhost:9090/multiple"
            //     optimisticPreviews
            //     onLoadEnd={(err) => {
            //         if (err) {
            //             console.error(err);
            //         }
            //     }}
            //     label="Upload multiple images"
            //     />
        );
    }
}

//server side

// app.post('/multiple', imagesUpload(
//     './server/static/multipleFiles',
//     'http://localhost:9090/static/multipleFiles',
//     true
// ));