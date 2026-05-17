import React, { useState, useEffect } from "react";

type ProfileCardProps = {
    name: string;
    currentRole: string;
    shortBio: string;
    skills: string[];
    userImage: string;
};

const ProfileCard = ({ name, currentRole, shortBio, skills, userImage }: ProfileCardProps) => {
    const [likeCount, setLikeCount] = useState<number>(() => {
        const savedLikes = localStorage.getItem('likes');
        return savedLikes ? parseInt(savedLikes, 10) : 0;
    });

    const handleLikeCount = () => { setLikeCount((prev) => prev + 1); };

    useEffect(() => {
        localStorage.setItem('likes', likeCount.toString())
    }, [likeCount]);

    return (
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-sm text-center border border-slate-400 flex flex-col justify-start">
            <img 
                src={userImage} 
                alt={`Profile picture of ${name}`} 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 object-cover" 
            />
            <p className="text-5xl font-bold text-white mb-1">{name}</p>
            <p className="text-md font-medium text-emerald-400 mb-1">{currentRole}</p>
            <p className="text-slate-300 mb-7 leading-relaxed">{shortBio}</p>
            
            <div className="flex flex-wrap justify-center gap-1">
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full font-semibold"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700 flex items-center justify-between">
                <button 
                    onClick={handleLikeCount} 
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-colors"
                >
                    👍 Like Profile
                </button>
                <p className="text-slate-300 font-medium">
                    Likes: <span className="text-emerald-400 font-bold">{likeCount}</span>
                </p>    
            </div>
        </div>
    );
};

export default ProfileCard;