import React, { useState, useEffect } from "react";

type ProfileCardProps = {
    name: string;
    currentRole: string;
    shortBio: string;
    skills: string[];
};

const ProfileCard = ({ name, currentRole, shortBio, skills }: ProfileCardProps) => {
    const [likeCount, setLikeCount] = useState(() => {
        const savedLikes = localStorage.getItem('likes');
        return savedLikes ? JSON.parse(savedLikes) : 0;
    })
    const handleLikeCount = () => { setLikeCount((prev: number) => prev + 1); };
    useEffect(() => {
        localStorage.setItem('likes', likeCount.toString())
    },[likeCount])
    return (
        // Added Tailwind classes for a sleek, dark-mode card look
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-sm text-center border border-slate-400 flex flex-col justify-start">
            <p className="text-5xl font-bold text-white mb-1">{name}</p>
            <p className="text-md font-medium text-emerald-400 mb-1">{currentRole}</p>
            <p className="text-slate-300 mb-7 leading-relaxed">{shortBio}</p>
            
            {/* Flexbox container for the badges */}
            <div className="flex flex-wrap justify-center gap-1">
                {/* Using .map() to loop through the skills array.
                  React requires a unique "key" prop when mapping elements!
                */}
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