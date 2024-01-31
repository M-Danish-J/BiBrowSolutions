import React from 'react'

export default function Paragraph({ className, title }) {
    return (
        <div>
            <p className={className}>
                {title}
            </p>
        </div>
    )
}
