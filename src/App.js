import './App.css'
import skills from './data/skills.json'
import profileImg from './assets/profile.jpg'

export const getExperienceTime = (startDate, endDate) => {
  const months = calculateExperienceTimeInMonths(startDate, endDate)
  return convertMonthsToYears(months)
}

export const calculateExperienceTimeInMonths = (startDate, endDate) => {
  const currentDate = endDate ? new Date(endDate) : new Date()
  const givenDate = new Date(startDate)

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const startYear = givenDate.getFullYear()
  const startMonth = givenDate.getMonth()

  return currentMonth + 12 * currentYear - (startMonth + 12 * startYear)
}

export const convertMonthsToYears = (months) => {
  const monthsPerYear = months / 12
  const monthsPerYearRounded = Math.floor(monthsPerYear)
  if (hasAtLeastOneYear(monthsPerYear) && addRemainingMonths(months) === null) {
    return `${monthsPerYearRounded} year${monthsPerYearRounded > 1 ? `s` : ''}`
  }

  if (hasAtLeastOneYear(monthsPerYear)) {
    return `${monthsPerYearRounded} year${
      monthsPerYearRounded > 1 ? `s` : ''
    } + ${addRemainingMonths(months)}`
  }

  return addRemainingMonths(months)
}

export const hasAtLeastOneYear = (monthsPerYear) => {
  if (monthsPerYear < 1) return false
  return true
}

export const addRemainingMonths = (months) => {
  const module = months % 12
  if (module !== 0) {
    return `${module} month${module > 1 ? `s` : ''}`
  }

  return null
}

function App() {
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
    </div>
  )
}

export default App
