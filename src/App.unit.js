import App from './App'
import { shallowMount } from '@vue/test-utils';

describe('Mount of app.vue', () => {
    it('Renders my layout', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})