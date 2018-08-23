import Login from './Login'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

describe('Login', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallowMount(Login)
    })
    it('Renders my layout', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    it('se o estádo de $invalid == true no load do componente', () => {
        resetData(wrapper)
        expect(wrapper.vm.$v.form.$invalid).toBeTruthy()
    });
    it('se o estado de $invalid == false quando todos os campos estão preenchidos corretamente ', () => {
        setData(wrapper)
        expect(wrapper.vm.$v.form.$invalid).toBeFalsy()
    });
    const setData = wrapper => wrapper.setData({
        form: {
            username: 'gabriel@example.com',
            password: 'secret'
        }
    })
    const resetData = wrapper => wrapper.setData({
        form: {
            username: '',
            password: ''
        }
    })
})