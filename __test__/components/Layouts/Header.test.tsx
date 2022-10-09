import { render } from '@testing-library/react'
import Header from 'components/Layouts/Header'

describe('Headerコンポーネントが', () => {
  it('機能すること', () => {
    const { getByText } = render(<Header />)
    expect(getByText('MarkBlog')).toBeTruthy()
  })
})
