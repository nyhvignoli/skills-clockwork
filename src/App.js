import './App.css'
import skills from './data/skills.json'

function App() {
  const getExperienceTime = (startDate, endDate) => {
    const months = calculateExperienceTime(startDate, endDate)
    return convertMonthsToYear(months)
  }

  const calculateExperienceTime = (startDate, endDate) => {
    const currentDate = endDate ? new Date(endDate) : new Date()
    const givenDate = new Date(startDate)

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const startYear = givenDate.getFullYear()
    const startMonth = givenDate.getMonth()

    return currentMonth + 12 * currentYear - (startMonth + 12 * startYear)
  }

  const convertMonthsToYear = (months) => {
    const monthsPerYear = months / 12
    const monthsPerYearRounded = Math.round(monthsPerYear)
    if (
      hasAtLeastOneYear(monthsPerYear) &&
      addRemainingMonths(months) === null
    ) {
      return `${monthsPerYearRounded} year${
        monthsPerYearRounded > 1 ? `s` : ''
      }`
    }

    if (hasAtLeastOneYear(monthsPerYear)) {
      return `${monthsPerYearRounded} year${
        monthsPerYearRounded > 1 ? `s` : ''
      } + ${addRemainingMonths(months)}`
    }

    return addRemainingMonths(months)
  }

  const hasAtLeastOneYear = (monthsPerYear) => {
    if (monthsPerYear < 1) return false
    return true
  }

  const addRemainingMonths = (months) => {
    const module = months % 12
    if (module !== 0) {
      return `${module} month${module > 1 ? `s` : ''}`
    }

    return null
  }

  return (
    <div className="App">
      <h1>Hard Skills Clockwork</h1>
      <span>Experience time separate by skill</span>
      <div className="Skills-wrapper">
        {skills.map(({ name, startDate, endDate }) => {
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
