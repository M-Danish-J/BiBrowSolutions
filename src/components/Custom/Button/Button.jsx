import React from 'react'

export default function Button({Text,className}) {
  return (
    <div>
      <button className={className}>
        {Text}
      </button>
    </div>
  )
}
