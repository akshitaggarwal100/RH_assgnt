import React from 'react'
import '../App.css'
import defaultImg from './default.jpg'

function Card({ data }) {

    function handleError(e) {
        // e.target.src = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        e.target.src = defaultImg
    }

    return (
        <div className='card'>
            <img src={data.image} className='prodImg' onError={handleError} />
            <div className="prodInfo">
                <h1>{data.name}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default Card