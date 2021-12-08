import {
  getRemainingMonths,
  convertMonthsToYears,
  convertToPlural,
  hasAtLeastOneYear
} from '.'

describe('# getRemainingMonths', () => {
  it('Should return 1 remaining month given 13 months', () => {
    const result = getRemainingMonths(13)
    expect(result).toBe(`1 month`)
  })

  it('Should return 2 remaining months given 14 months', () => {
    const result = getRemainingMonths(14)
    expect(result).toBe(`2 months`)
  })

  it('Should return null given 12 months', () => {
    const result = getRemainingMonths(12)
    expect(result).toBe(null)
  })
})

describe('# hasAtLeastOneYear', () => {
  it('Should return false if monthsPerYear is less than 1', () => {
    const result = hasAtLeastOneYear(0.9)
    expect(result).toBe(false)
  })

  it('Should return true if monthsPerYear is equal to 1', () => {
    const result = hasAtLeastOneYear(1)
    expect(result).toBe(true)
  })

  it('Should return true if monthsPerYear is greater than 1', () => {
    const result = hasAtLeastOneYear(2)
    expect(result).toBe(true)
  })
})

describe('# convertMonthsToYears', () => {
  it('Should return just 1 year', () => {
    const hasAtLeastOneYearMock = jest.fn(() => true)
    const getRemainingMonthsMock = jest.fn(() => null)
    const result = convertMonthsToYears(
      12,
      hasAtLeastOneYearMock,
      getRemainingMonthsMock
    )
    expect(result).toBe(`1 year`)
  })

  it('Should return 2 years', () => {
    const hasAtLeastOneYearMock = jest.fn(() => true)
    const getRemainingMonthsMock = jest.fn(() => null)
    const result = convertMonthsToYears(
      24,
      hasAtLeastOneYearMock,
      getRemainingMonthsMock
    )
    expect(result).toBe(`2 years`)
  })

  it('Should return 1 year and 2 months', () => {
    const hasAtLeastOneYearMock = jest.fn(() => true)
    const getRemainingMonthsMock = jest.fn(() => `2 months`)
    const result = convertMonthsToYears(
      14,
      hasAtLeastOneYearMock,
      getRemainingMonthsMock
    )
    expect(result).toBe(`1 year + 2 months`)
  })

  it('Should return 2 years and 2 months', () => {
    const hasAtLeastOneYearMock = jest.fn(() => true)
    const getRemainingMonthsMock = jest.fn(() => `2 months`)
    const result = convertMonthsToYears(
      26,
      hasAtLeastOneYearMock,
      getRemainingMonthsMock
    )
    expect(result).toBe(`2 years + 2 months`)
  })

  it('Should return just months', () => {
    const hasAtLeastOneYearMock = jest.fn(() => false)
    const getRemainingMonthsMock = jest.fn(() => `2 months`)
    const result = convertMonthsToYears(
      2,
      hasAtLeastOneYearMock,
      getRemainingMonthsMock
    )
    expect(result).toBe(`2 months`)
  })
})

describe('# convertToPlural', () => {
  it('Should convert to plural by adding "s"', () => {
    const result = convertToPlural(2, 'foo')
    expect(result).toBe(`foos`)
  })

  it('Should not convert to plural', () => {
    const result = convertToPlural(1, 'foo')
    expect(result).toBe(`foo`)
  })
})
