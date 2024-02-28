import React from 'react';
  import imageSrc from './mainImage.png'; // Import your image file

export default function DefaultPage() {
  return (
    <div className='default-page'>
      <div className="default-content">
        <img src={imageSrc} alt="Your Image" className="center-image" />
        <h1 className="line">Pocket Notes</h1>
        <p className="line">
          Send and receive messages without keeping your phone online.
        <br></br>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
    </div>
  )
}
