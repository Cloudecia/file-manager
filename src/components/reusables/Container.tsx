import React from 'react'

const Container = ({ className, ...props }) => {
    return (
        <div className={`px-8 py-4 ${className}`} {...props} />
    )
}

export default Container