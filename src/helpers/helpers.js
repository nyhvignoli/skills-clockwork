export const getExperienceTime = (startDate, endDate) => {
  const months = calculateExperienceTimeInMonths(startDate, endDate)
  return convertMonthsToYears(months, hasAtLeastOneYear, addRemainingMonths)
}

export const calculateExperienceTimeInMonths = (startDate, endDate) => {
  const lastDate = endDate ? new Date(endDate) : new Date()
  const givenDate = new Date(startDate)

  const lastYear = lastDate.getFullYear()
  const lastMonth = lastDate.getMonth()
  const startYear = givenDate.getFullYear()
  const startMonth = givenDate.getMonth()

  return lastMonth + 12 * lastYear - (startMonth + 12 * startYear)
}

export const convertMonthsToYears = (
  months,
  hasAtLeastOneYear,
  addRemainingMonths
) => {
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

export const hasAtLeastOneYear = (monthsPerYear) =>
  monthsPerYear >= 1 ? true : false

export const addRemainingMonths = (months) => {
  const module = months % 12
  const shouldAddMonths = module !== 0
  const isPlural = module > 1

  if (shouldAddMonths) {
    return `${module} month${isPlural ? `s` : ''}`
  }

  return null
}
