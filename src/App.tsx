
import './App.css'
import ProfileCard from './components/ProfileCard'

<link href="/src/style.css" rel="stylesheet"></link>

function App() {
  const mySkills = ['Html','CSS', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'SQL', 'React'];
  return (
    <div className="h-dvh w-screen flex items-center justify-center">
      <ProfileCard
        name='A'
        currentRole='B'
        shortBio='C'
        skills={mySkills}
      />
    </div>
  )
}

export default App
