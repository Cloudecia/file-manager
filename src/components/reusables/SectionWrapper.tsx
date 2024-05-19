import React from 'react'
import SectionHeading from './SectionHeading';
import { cn } from '@/utils/shadcn-helper';

const SectionWrapper = ({ heading, children, styles, classes, noDivider, headerClasses }) => {
    return (
        <>
            <section className={cn(`flex flex-col mx-2 sm:mx-8 xl:mx-14 gap-6 pb-10`, `${!noDivider && 'border-blue border-b-2'}`, classes)} style={{ boxShadow: !noDivider ? "0px 2px 0px 0px rgba(151, 196, 221,1)" : null, ...styles }}>
                {heading && <SectionHeading classes={headerClasses}>{heading}</SectionHeading>}
                {children}
            </section>
        </>
    )
}

export default SectionWrapper;