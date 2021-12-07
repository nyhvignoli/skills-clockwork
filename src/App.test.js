import { render } from '@testing-library/react'
import App from './App'

describe('# App', () => {
  it('Should render correctly', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
