import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('# Header', () => {
  it('Should render correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('Should render as a header tag', () => {
    render(<Header />)
    const header = screen.getByLabelText('header')
    expect(header).toBeInTheDocument()
    expect(header.nodeName.toLowerCase()).toBe('header')
  })

  it('Should render with custom title', () => {
    render(<Header title="foo" />)
    const title = screen.getByText(/foo/i)
    expect(title).toBeInTheDocument()
  })

  it('Should render with custom dev name', () => {
    render(<Header name="Nyh" />)
    const name = screen.getByText(/nyh/i)
    expect(name).toBeInTheDocument()
  })

  it('Should render with custom profession', () => {
    render(<Header profession="Dev" />)
    const profession = screen.getByText(/dev/i)
    expect(profession).toBeInTheDocument()
  })

  it('Should render with custom experience time', () => {
    render(<Header experienceTime="2 years" />)
    const experienceTime = screen.getByText(/2 years/i)
    expect(experienceTime).toBeInTheDocument()
  })

  it('Should render with custom profile image', () => {
    const image = {
      src: 'https://i.ibb.co/y54rg3Z/skills-clockwork-thumbnail.png',
      alt: 'image description'
    }

    render(<Header profileImg={image} />)
    const profileImg = screen.getByRole('img')
    expect(profileImg).toBeInTheDocument()
    expect(profileImg).toHaveAttribute('src', image.src)
    expect(profileImg).toHaveAttribute('alt', image.alt)
  })
})
