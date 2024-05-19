import React from 'react'

function SectionHeading({ children, classes }) {
    return (
        <>
            <h3 className={`text-2xl dark:text-zinc-300 ${classes}`}>{children}</h3>
        </>
    )
}

export default SectionHeading