import React from 'react'
import { Link } from 'react-router-dom'

const CopyrightFooter = ({ className }) => {
    return (
        <>
            <div className={`bg-brand-100 dark:bg-zinc-800/10 dark:border-t-zinc-500/20 border-t-2 ${className}`}>
                <div className='flex flex-col items-center text-sm text-zinc-500 py-2'>

                    <p className='font-semibold'>Copyright &copy; 2023 Cloudecia. All rights reserved.</p>

                    <div><Link to={"/"}>Privacy Policy</Link> | <Link to={"/"}>Terms & Conditions</Link> | <Link to={"/"}>Help</Link>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CopyrightFooter