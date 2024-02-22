import React, { useState, useEffect } from 'react'
import './ImageLoad.scss'

const ImageLoad = ({ url }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      setLoading(false)
    }
  }, [url])

  return (
    <>
      {loading ? (
        <div className="image--loading image-container"></div>
      ) : (
        <div
          className="image--finish image-container"
          style={{
            backgroundImage: `url(${url})`,
          }}></div>
      )}
    </>
  )
}

export default ImageLoad
