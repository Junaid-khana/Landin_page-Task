import React from 'react'
import Triangle from '../icons/triangle'
import Circle from '../icons/circle'
import Square from '../icons/square'
import CompanyLogo from '../icons/company-logo'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-[16px] ' >
          {/* <div className='text-[#231F20] flex gap-[2px] ' >
              <span className='flex gap-[2px] ' > <Square /> LATIN</span>
              <span className='flex gap-[2px] ' > <Circle /> REMOTE</span>
              <span className='flex gap-[2px]' ><Triangle /> WORKERS</span>
          </div> */}
          <CompanyLogo />
          <div className='flex items-center gap-[32px]' >
              <span> How it works</span>
              <span>Pricing</span>
              <span>Roles</span>
              <span>
                Our promise
              </span>
              <button className='text-white px-[20px] py-[8px] rounded-[10px] bg-[#231F20] ' >
                  Start Hiring
              </button>
          </div>
          
    </div>
  )
}

export default Header
