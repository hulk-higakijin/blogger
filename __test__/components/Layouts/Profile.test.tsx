import { render } from '@testing-library/react'
import ProfileComponent from 'components/Layouts/Profile'

describe('Profileコンポーネントが', () => {
  it('機能すること', () => {
    const { getByText } = render(<ProfileComponent />)
    expect(getByText('ライター： 真庭治久')).toBeTruthy()
  })
})
