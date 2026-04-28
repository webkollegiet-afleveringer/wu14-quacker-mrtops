import { useEffect } from 'react';

export default function ProfileSidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      <div className={`fixed top-0 left-0 h-full w-80 bg-bg z-50 shadow-xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text mb-4"
          >
            ✕
          </button>

          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-text-secondary mt-2">This is where the user's profile information would be displayed.</p>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-accent/10 rounded-xl">
              <p className="font-semibold">User Info</p>
              <p className="text-sm text-text-secondary">Details coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
