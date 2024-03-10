import React from 'react'

function ImgThumbnail({imgSrc, imgAlt}) {
    const imgStyle={
        padding:"5px",
        borderRadius:"5px",
        width:"70%",
        border:"5px solid #777000",
        boxSizing:"border-box",
        marginLeft:"50px",
        marginBottom:"20px",
        

    }

  return (
    <>
    <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    
    </>
  )
}

export default ImgThumbnail