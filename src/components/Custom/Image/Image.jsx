import React from 'react'

export default function Image({image,className}) {
  return (
    <div>
      <img src={image} alt="" className={className} />
    </div>
  )
}
