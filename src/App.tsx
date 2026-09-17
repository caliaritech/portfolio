import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'

export default function App() {
  return (
    <div className="grid-bg min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Education />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
