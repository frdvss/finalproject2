import React from 'react'
import ImgThumbnail from '../components/ImgThumbnail';

function Card({imgSrc, imgAlt, title,content}) {
  const cardStyle={
    padding:"5px",
    margin:"10px",
    border:"3px solid black",
    borderRadius:"10px",
    boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)",
    borderColor:"rgba(55,25,100,0)",
    width:"100%"
    

  }

  return (
    <div style={cardStyle}>
        <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt} />
        <h2>{title}</h2>
        <p>{content}</p>
        

    </div>
  )
}

export default Card