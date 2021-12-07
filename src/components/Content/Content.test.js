import { render, screen } from '@testing-library/react'
import { Content } from './Content'

describe('# Content', () => {
  it('Should render correctly', () => {
    const { container } = render(<Content />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('Should render with custom title', () => {
    render(<Content title="foo" />)
    const title = screen.getByText(/foo/i)
    expect(title).toBeInTheDocument()
  })

  it('Should order the skills by month descending', () => {
    const skills = [
      { name: 'Java', startDate: '2021-11-20' },
      { name: 'Typescript', startDate: '2021-06-20' },
      { name: 'Javascript', startDate: '2020-12-20' }
    ]

    render(<Content skills={skills} />)
    const skillsWrapper = screen.getByLabelText('skills-wrapper')
    const skillCards = screen.getAllByLabelText('skill-card')

    const firstSkill = skillCards[0]
    const secondSkill = skillCards[1]
    const thirdSkill = skillCards[2]

    expect(skillsWrapper).toBeInTheDocument()
    expect(skillCards).toHaveLength(3)
    expect(firstSkill.firstChild).toHaveTextContent(/javascript/i)
    expect(secondSkill.firstChild).toHaveTextContent(/typescript/i)
    expect(thirdSkill.firstChild).toHaveTextContent(/java/i)
  })
})
