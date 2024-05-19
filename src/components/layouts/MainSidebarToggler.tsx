import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
// import useMainSidebar from '../../../../hooks/useMainSidebar'
import useDashboardSidebar from '@/hooks/useDashboardSidebar'

const MainSidebarToggler = ({ className }) => {

    const { onToggle, isCollapsed } = useDashboardSidebar()

    return (
        <div className={`${className} absolute -right-5 grid place-content-center p-2 bg-white rounded-full ${isCollapsed ? 'rotate-0' : 'rotate-180'} duration-300 cursor-pointer`} onClick={onToggle}>
            <FaChevronRight className='text-brand-500' size={12} />
        </div>
    )
}

export default MainSidebarToggler