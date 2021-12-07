import './App.css'
import skills from './data/skills.json'
import profileImg from './assets/profile.jpg'
import {
  calculateExperienceTimeInMonths,
  getExperienceTime
} from './helpers/helpers'

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
      <header className="Header">
        <div className="Avatar-wrapper">
          <a
            href="http://nyhdevignoli.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Profile"
              src={profileImg}
              alt="Nyh Vignoli profile"
            />
          </a>
          <div className="Total-xp-wrapper">
            <h5>Total Experience</h5>
            <span>{getExperienceTime('2020-03-15')}</span>
          </div>
        </div>
        <div className="Titles-wrapper">
          <h2>Nyh Vignoli - Full Stack Developer</h2>
          <h1>Hard Skills Clockwork</h1>
          <span>Experience time for each skill</span>
        </div>
      </header>
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
