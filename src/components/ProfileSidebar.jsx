import { useEffect } from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { PiLightningLight } from 'react-icons/pi';
import { RiFileList2Line } from 'react-icons/ri';

export default function ProfileSidebar({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { icon: <FaRegUser />, label: 'Profile' },
    { icon: <RiFileList2Line />, label: 'Lists' },
    { icon: <BiMessageRoundedDetail />, label: 'Topics' },
    { icon: <HiOutlineBookmark />, label: 'Bookmarks' },
    { icon: <PiLightningLight />, label: 'Moments' },

  ]

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-bg z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full border border-white" alt="user1" />
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">1</span>
                </div>
                <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full grayscale" alt="user2" />
                <button className="text-blue-500 ml-1"><FiMoreHorizontal size={24}/></button>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 leading-tight">Pixsellz</h2>
          <p className="text-gray-500 text-sm">@pixsellz</p>

          <div className="flex gap-4 mt-4 text-sm">
            <p><span className="font-bold text-gray-900">216</span> <span className="text-gray-500">Following</span></p>
            <p><span className="font-bold text-gray-900">117</span> <span className="text-gray-500">Followers</span></p>
          </div>
        </div>


        {/* Navigation link */}
        <nav className='my-4 flex-1'>
          {navItems.map((item) =>(
            <button key={item.label} className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700">
              <span className="text-gray-500">{item.icon}</span>
              <span className="text-base font-medium">{item.label}</span>
            </button>
          ))}
          <hr className="my-4 border-primary-line" />

          <button className="w-full text-left px-4 py-3 text-gray-900 font-medium hover:bg-gray-50">
            Settings and privacy
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-900 font-medium hover:bg-gray-50">
            Help Center
          </button>
        </nav>
      </div>
    </>
  );
}
