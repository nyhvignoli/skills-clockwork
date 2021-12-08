export const getExperienceTime = (startDate, endDate) => {
  const months = calculateExperienceTimeInMonths(startDate, endDate)
  return convertMonthsToYears(months, hasAtLeastOneYear, getRemainingMonths)
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
  getRemainingMonths
) => {
  const monthsPerYear = months / 12
  const monthsPerYearRounded = Math.floor(monthsPerYear)
  const yearOrYears = convertToPlural(monthsPerYearRounded, 'year')
  const hasOneYearMinimum = hasAtLeastOneYear(monthsPerYear)
  const remainingMonths = getRemainingMonths(months)
  const shouldAddMonths = remainingMonths !== null

  if (hasOneYearMinimum && shouldAddMonths) {
    return `${monthsPerYearRounded} ${yearOrYears} + ${remainingMonths}`
  }

  if (hasOneYearMinimum) {
    return `${monthsPerYearRounded} ${yearOrYears}`
  }

  return remainingMonths
}

export const hasAtLeastOneYear = (monthsPerYear) => monthsPerYear >= 1

export const getRemainingMonths = (months) => {
  const module = months % 12
  const shouldAddMonths = module !== 0
  const monthOrMonths = convertToPlural(module, 'month')

  if (shouldAddMonths) {
    return `${module} ${monthOrMonths}`
  }

  return null
}

export const convertToPlural = (itemQuantity, item) =>
  itemQuantity > 1 ? `${item}s` : item
