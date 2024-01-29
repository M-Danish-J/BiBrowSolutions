import React from 'react'

export default function Button({ text, className }) {
    return (
        <div>
            <button className={className}>
                {text}
            </button>
        </div>
    )
}
