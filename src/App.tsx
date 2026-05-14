
import './App.css'
import ProfileCard from './components/ProfileCard'

<link href="/src/style.css" rel="stylesheet"></link>

function App() {
  const mySkills = ['Html','CSS', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'SQL', 'React'];
  return (
    <div className="h-dvh w-screen flex items-center justify-center">
      <ProfileCard
        name='Quoc Bao Le'
        currentRole='Full-Stack Web Developer'
        shortBio='A Computer Science Graduate based inGeorgia focusing in Full-Stack Web Development.'
        skills={mySkills}
      />
    </div>
  )
}

export default App
