import { useEffect } from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { PiLightningLight } from 'react-icons/pi';
import { RiFileList2Line } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export default function ProfileSidebar({ isOpen, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { icon: <FaRegUser />, label: 'Profile', path: '/profile' },
    { icon: <RiFileList2Line />, label: 'Lists', path: '/lists' },
    { icon: <BiMessageRoundedDetail />, label: 'Topics', path: '/topics' },
    { icon: <HiOutlineBookmark />, label: 'Bookmarks', path: '/bookmarks' },
    { icon: <PiLightningLight />, label: 'Moments', path: '/moments' },
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
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">{user?.username?.charAt(0).toUpperCase() || 'U'}</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {user?.username?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">1</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm grayscale">
                  U
                </div>
                <button className="text-accent ml-1"><FiMoreHorizontal size={24}/></button>
            </div>
          </div>

          <h2 className="text-lg font-bold text-text leading-tight">{user?.username || 'User'}</h2>
          <p className="text-text-secondary text-sm">@{user?.username || 'user'}</p>

          <div className="flex gap-4 mt-4 text-sm">
            <p><span className="font-bold text-text">{user?.following || 0}</span> <span className="text-text-secondary">Following</span></p>
            <p><span className="font-bold text-text">{user?.followers || 0}</span> <span className="text-text-secondary">Followers</span></p>
          </div>
        </div>

        {/* Navigation links */}
        <nav className='my-4 flex-1'>
          {navItems.map((item) =>(
            <NavLink 
              key={item.label} 
              to={item.path}
              className={({ isActive }) => 
                `w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors ${
                  isActive ? 'text-accent' : 'text-gray-700'
                }`
              }
            >
              <span className={({ isActive }) => isActive ? 'text-accent' : 'text-gray-500'}>
                {item.icon}
              </span>
              <span className="text-base font-medium">{item.label}</span>
            </NavLink>
          ))}
          <hr className="my-4 border-primary-line" />

          <NavLink 
            to="/settings"
            className={({ isActive }) => 
              `w-full text-left block px-4 py-3 font-medium hover:bg-gray-50 ${
                isActive ? 'text-accent' : 'text-gray-900'
              }`
            }
          >
            Settings and privacy
          </NavLink>
          <button className="w-full text-left px-4 py-3 text-gray-900 font-medium hover:bg-gray-50">
            Help Center
          </button>
        </nav>

        {/* Logout button at bottom */}
        <div className="p-4 border-t border-primary-line mt-auto">
          <button 
            onClick={() => {
              logout();
              onClose();
              navigate('/login');
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-text hover:bg-bg-hover rounded-lg transition-colors"
          >
            <FiLogOut size={20} />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </div>
    </>
  );
}
