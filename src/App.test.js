import { addRemainingMonths } from './App'

describe('# addRemainingMonths', () => {
  it('Should add 1 remaining month given 13 months', () => {
    const result = addRemainingMonths(13)
    expect(result).toBe(`1 month`)
  })

  it('Should add 2 remaining months given 14 months', () => {
    const result = addRemainingMonths(14)
    expect(result).toBe(`2 months`)
  })

  it('Should return null given 12 months', () => {
    const result = addRemainingMonths(12)
    expect(result).toBe(null)
  })
})
