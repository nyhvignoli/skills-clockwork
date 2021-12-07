import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('# Footer', () => {
  it('Should render correctly', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('Should render as a footer tag', () => {
    const { container } = render(<Footer />)
    const footer = container.firstChild
    expect(footer).toBeInTheDocument()
    expect(footer.nodeName.toLowerCase()).toBe('footer')
  })

  it('Should render with custom text', () => {
    render(<Footer text="foo" />)
    const text = screen.getByText(/foo/i)
    expect(text).toBeInTheDocument()
  })
})
