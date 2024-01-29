import React from 'react'

export default function Paragraph({ className, title }) {
    return (
        <div>
            <h1 className={className}>
                {title}
            </h1>
        </div>
    )
}
