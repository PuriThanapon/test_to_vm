import { House } from 'lucide-react'
import React from 'react'

const HeaderNav = () => {
  return (
    <div className='bg-primary h-20 fixed top-0 z-40 w-full shadow flex flex-row items-center justify-center pl-60'>
      {/* title */}
      <div className='flex gap-2 items-center justify-center'>
        <House size={28} className='text-primary-foreground'/>
        <div className='text-2xl font-bold text-primary-foreground'>หน้าหลัก</div>
      </div>
      
    </div>
  )
}

export default HeaderNav
