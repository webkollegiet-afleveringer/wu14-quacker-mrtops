import { useState } from 'react';
import { useNavigate } from 'react-router';
import ProfileSidebar from './ProfileSidebar';
import { FaChevronLeft, FaXmark, FaGear } from 'react-icons/fa6';
import { BsTwitter } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SearchTool from './Search';

const Header = ({
  title,
  subtitle,
  showLogo,
  search,
  searchPlaceholder = "Search Quacker",
  back,
  onBack,
  rightAction,
  tabs,
  settings
}) => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <>
       <header className={`flex flex-col bg-bg sticky top-0 z-50 ${search !== 'inline' ? 'border-b border-primary-line' : ''}`}>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 h-14">
          
          {/* Left Slot */}
          <div className="flex items-center justify-start gap-2">
            {back && (
              <button onClick={handleBack} className="text-accent p-1 -ml-1">
                <FaChevronLeft size={20} />
              </button>
            )}
            <button onClick={() => setProfileMenuOpen(true)} className="rounded-full hover:bg-accent/10 p-1 -ml-1">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                U
              </div>
            </button>
          </div>

          {/* Center Slot */}
          <div className="flex flex-col items-center text-center">
            {showLogo && <BsTwitter className="text-accent text-2xl" />}
            {title && (
              <h1 className="font-bold text-lg leading-tight truncate max-w-50">
                {title}
              </h1>
            )}
            {subtitle && <span className="text-[11px] text-text-secondary leading-none">{subtitle}</span>}
            {search === 'center' && (
              <div className="mt-1 w-full max-w-75">
                <SearchTool inline placeholder={searchPlaceholder} />
              </div>
            )}
          </div>

          {/* Right Slot */}
          <div className="flex gap-4 items-center justify-end">
            {settings && (
              <button className="text-text-secondary hover:text-accent transition-colors">
                <FaGear size={20} />
              </button>
            )}
            {search === true && (
              <button onClick={() => setSearchOpen(prev => !prev)} className="text-accent">
                {searchOpen ? <FaXmark size={20}/> : <FaMagnifyingGlass size={18} />}
              </button>
            )}
            {rightAction && (
              <button 
                onClick={rightAction.onClick} 
                className="bg-accent text-white px-4 py-1.5 rounded-full font-bold text-sm"
              >
                {rightAction.label}
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        {tabs && (
          <div className="flex border-b border-primary-line">
            {tabs.map((tab, i) => (
              <button 
                key={tab} 
                className={`flex-1 py-3 text-sm font-bold transition-colors ${
                  i === 0 ? 'border-b-2 border-accent text-accent' : 'text-text-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {searchOpen && <SearchTool />}
        
         {/* Full-width inline search bar (below header) */}
         {search === 'inline' && (
           <div className="px-4 py-2 border-b border-primary-line">
             <SearchTool inline placeholder={searchPlaceholder} />
           </div>
         )}
      </header>

      <ProfileSidebar isOpen={profileMenuOpen} onClose={() => setProfileMenuOpen(false)} />
    </>
  );
};

export default Header;
