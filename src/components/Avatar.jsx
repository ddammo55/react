import React from 'react';

export default function Avatar({image, isNew}) {
    return (
        <div>
           <img
            className='photo' 
            src={image} alt="avatar" />
            {isNew && <span className='new'>New</span>} {/* isNew가 True일때만 요소를 보여준다. */} 
        </div>
    );
}

