import './App.css'
import skills from './data/skills.json'
import profileImg from './assets/profile.jpg'
import {
  calculateExperienceTimeInMonths,
  getExperienceTime
} from './helpers/helpers'
import { Header } from './components/Header'

const App = () => {
  const skillsOrderedByExperienceTime = skills
    .map((skill) => {
      return {
        ...skill,
        experienceTimeInMonths: calculateExperienceTimeInMonths(
          skill.startDate,
          skill.endDate
        )
      }
    })
    .sort((a, b) => {
      return b.experienceTimeInMonths - a.experienceTimeInMonths
    })

  return (
    <div className="App">
      <Header
        title="Hard Skills Clockworks"
        name="Nyh Vignoli"
        profession="Full Stack Developer"
        profileImg={{ src: profileImg, alt: 'Nyh Vignoli profile' }}
        experienceTime={getExperienceTime('2020-03-15')}
      />
      <div className="Skills-wrapper">
        {skillsOrderedByExperienceTime.map(({ name, startDate, endDate }) => {
          return (
            <div key={name} className="Skills">
              <h5>{name}</h5>
              <p>{getExperienceTime(startDate, endDate)}</p>
            </div>
          )
        })}
      </div>
      <footer>© 2021 ~ Developed with ♥ by Aline "Nyh" Vignoli</footer>
    </div>
  )
}

export default App
