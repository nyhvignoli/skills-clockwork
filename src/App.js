import './App.css'
import { skills, totalExperience } from './data'
import profileImg from './assets/profile.jpg'
import { getExperienceTime } from './helpers'
import { Header, Content, Footer } from './components'

const App = () => {
  return (
    <div className="App">
      <Header
        title="Hard Skills Clockworks"
        name="Nyh Vignoli"
        profession="Full Stack Developer"
        websiteUrl="http://nyhdevignoli.surge.sh/"
        profileImg={{ src: profileImg, alt: 'Nyh Vignoli profile' }}
        experienceTime={getExperienceTime(totalExperience.startDate)}
      />
      <Content title="Experience time by skill" skills={skills} />
      <Footer text='© 2021 ~ Developed with ♥ by Aline "Nyh" Vignoli' />
    </div>
  )
}

export default App
