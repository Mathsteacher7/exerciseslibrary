import react from 'react'
import App from '../app'

describe.skip('Render app page', () => {
    it('should render the page', () => {
        wrapper = <App/>
        expect(wrapper).toMatchSnapshot();
    })
})