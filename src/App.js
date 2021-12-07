import './App.css'
import { skills, totalExperience } from './data'
import profileImg from './assets/profile.jpg'
import { getExperienceTime } from './helpers'
import { Header, Content } from './components'

const App = () => {
  return (
    <div className="App">
      <Header
        title="Hard Skills Clockworks"
        name="Nyh Vignoli"
        profession="Full Stack Developer"
        profileImg={{ src: profileImg, alt: 'Nyh Vignoli profile' }}
        experienceTime={getExperienceTime(totalExperience.startDate)}
      />
      <Content title="Experience time for each skill" skills={skills} />
      <footer>© 2021 ~ Developed with ♥ by Aline "Nyh" Vignoli</footer>
    </div>
  )
}

export default App
