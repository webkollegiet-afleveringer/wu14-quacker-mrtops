import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState("Quacks");
    const tabs = ['Quacks', 'Quacks & replies', 'Media', 'Likes'];

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen w-full">
            {/* Header */}
            <div className="h-32 bg-zinc-900 flex items-start p-4">
                <button onClick={handleBack} className="bg-black/50 p-2 rounded-full">
                    <FaChevronLeft size={20} className="text-bg" />
                </button>
            </div>

            {/* Profile Info */}
            <div className="px-4 pb-4">
                <div className="relative flex justify-between items-end mb-4">
                    <div className="w-20 h-20 bg-accent rounded-full border-4 border-white -mt-10 flex items-center justify-center overflow-hidden">
                        <span className="text-white font-bold text-xl">{user?.username?.charAt(0).toUpperCase() || 'U'}</span>
                    </div>
                    <button className="border border-accent text-accent px-4 py-1.5 rounded-full text-sm">
                        Edit Profile
                    </button>
                </div>

                <h2 className="text-xl font-bold text-text leading-tight">{user?.username || 'User'}</h2>
                <p className="text-text-secondary text-sm">@{user?.username || 'user'}</p>
                <p className="mt-3 text-sm leading-relaxed">
                    Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations
                </p>
                <div className="flex gap-4 mt-4 text-sm">
                    <p><span className="font-bold text-text">{user?.following || 0}</span> <span className="text-text-secondary">Following</span></p>
                    <p><span className="font-bold text-text">{user?.followers || 0}</span> <span className="text-text-secondary">Followers</span></p>
                </div>
            </div>

            {/* Tabs */}
            <nav className="sticky top-0 bg-white border-b border-primary-line z-10">
                <div className="flex justify-around">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-4 text-sm font-semibold transition-colors relative ${activeTab === tab ? 'text-accent' : 'text-text-secondary'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full mx-auto w-1/2" />
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="p-4">
                {activeTab === 'Quacks' && <div>List of Quacks...</div>}
                {activeTab === 'Media' && <div>Media Grid...</div>}
                
            </div>
        </div>
    );
}