import { useState, useEffect } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

type RandomUserData = {
  firstName: string;
  lastName: string;
  userImage: string;
};

function App() {
  const mySkills = ['HTML','CSS', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'SQL', 'React'];
  const [randomUserData, setRandomUserData] = useState<RandomUserData | null>(null);

  useEffect(() => {
    const fetchRandomUserData = async () => {
      try {
          const response = await fetch('https://randomuser.me/api/');
          const data = await response.json();
          const user = data.results[0]; 
          setRandomUserData({
            firstName: user.name.first, 
            lastName: user.name.last, 
            userImage: user.picture.large
          });
        } catch (error) {
          console.error("Failed to fetch user", error);
        }  
      };
      
    fetchRandomUserData();
  }, []);

  if (!randomUserData) {
    return (
      <div className="h-dvh w-screen flex items-center justify-center bg-slate-900">
        <div className="text-white font-bold text-xl">Loading user data...</div>
      </div>
    );
  }

  return (
    <div className="h-dvh w-screen flex items-center justify-center bg-slate-900">
      <ProfileCard
        userImage={randomUserData.userImage}
        name={`${randomUserData.firstName} ${randomUserData.lastName}`}
        currentRole="Full Stack Developer"
        shortBio="Passionate about building scalable and beautiful web applications using React and Tailwind."
        skills={mySkills}
      />
    </div>
  );
}

export default App;