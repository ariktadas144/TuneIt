import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="relative w-full h-[47px] sm:h-[70px] md:h-[94px]">
        <div className="flex flex-col justify-start items-start w-full">
          <div className="px-2 sm:px-4 md:px-[8px] bg-[linear-gradient(90deg,#9f84f1_0%,#6083ee_50%,#da99bf_100%)] flex flex-row justify-between items-center w-full">
            {/* Logo */}
            <img 
              src="/images/img_streamline_free.svg" 
              className="w-[17px] h-[17px] sm:w-[25px] sm:h-[25px] md:w-[34px] md:h-[34px] mb-[7px] sm:mb-[10px] md:mb-[14px] self-end" 
              alt="TuneIt Logo" 
            />
            
            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block md:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6 text-header-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row justify-between items-center w-[40%] mr-[12px]">
              <nav className="flex flex-row gap-[24px] lg:gap-[48px] justify-center items-center w-auto">
                <button 
                  role="menuitem"
                  className="text-[18px] lg:text-[36px] font-inria font-normal leading-[22px] lg:leading-[44px] text-left text-header-2 hover:opacity-80 transition-opacity"
                >
                  Team
                </button>
                <button 
                  role="menuitem"
                  className="text-[18px] lg:text-[36px] font-inria font-normal leading-[22px] lg:leading-[44px] text-left text-header-2 hover:opacity-80 transition-opacity"
                >
                  About us
                </button>
                <button 
                  role="menuitem"
                  className="text-[18px] lg:text-[36px] font-inria font-normal leading-[22px] lg:leading-[44px] text-left text-header-2 hover:opacity-80 transition-opacity"
                >
                  Features
                </button>
              </nav>
              <img 
                src="/images/img_frame.svg" 
                className="w-[34px] h-[34px] lg:w-[68px] lg:h-[68px]" 
                alt="Profile" 
              />
            </div>

            {/* Mobile Navigation Menu */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-[linear-gradient(90deg,#9f84f1_0%,#6083ee_50%,#da99bf_100%)] z-50`}>
              <div className="flex flex-col p-4 space-y-4">
                <button 
                  role="menuitem"
                  className="text-lg font-inria font-normal text-left text-header-2 hover:opacity-80 transition-opacity py-2"
                >
                  Team
                </button>
                <button 
                  role="menuitem"
                  className="text-lg font-inria font-normal text-left text-header-2 hover:opacity-80 transition-opacity py-2"
                >
                  About us
                </button>
                <button 
                  role="menuitem"
                  className="text-lg font-inria font-normal text-left text-header-2 hover:opacity-80 transition-opacity py-2"
                >
                  Features
                </button>
                <div className="pt-2">
                  <img 
                    src="/images/img_frame.svg" 
                    className="w-[34px] h-[34px]" 
                    alt="Profile" 
                  />
                </div>
              </div>
            </nav>
          </div>
          
          {/* TuneIt Brand Text */}
          <h1 className="text-[20px] sm:text-[30px] md:text-[40px] font-inknut font-normal leading-[52px] sm:leading-[78px] md:leading-[104px] text-left text-header-1 w-auto -mt-[38px] sm:-mt-[57px] md:-mt-[76px] ml-[21px] sm:ml-[31px] md:ml-[42px]">
            Tu  eIt
          </h1>
        </div>
        
        {/* Navigation Icon */}
        <img 
          src="/images/img_group.svg" 
          className="absolute w-[12px] h-[13px] sm:w-[18px] sm:h-[19px] md:w-[24px] md:h-[26px] ml-[49px] sm:ml-[73px] md:ml-[98px] top-[16px] sm:top-[24px] md:top-[32px]" 
          alt="Navigation" 
        />
      </div>
    </header>
  );
};

export default Header;