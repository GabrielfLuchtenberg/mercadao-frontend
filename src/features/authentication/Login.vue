<script>
import { mapActions } from 'vuex';
import { required, minLength,email } from 'vuelidate/lib/validators'
export default {
    methods:{
        ...mapActions('authentication',['sendLogin']),
        submitLogin(){
            this.$v.$touch()
            if(this.$v.form.$invalid){
                console.log('Submit invalid')
                this.$v.$touch()
            }else{
                this.sendLogin({username: this.form.username, password:this.form.password})
            }
        },
        reset(){
            this.form = {
                password: '',
                username: ''
            }
            this.$v.$reset()
        }
    },
    data(){
        return {
            form:{
                password: '',
                username: ''
            }
        }
    },
    validations:{
        form : {
            username :{
                required,
                minLength: minLength(4),
                email,
            },
            password:{
                required,
                minLength: minLength(4)
            }
            
        }
    }
}
</script>

<template>
    <section>
        <b-form @submit.prevent="submitLogin">
            <div :class=" { invalid: $v.form.username.$dirty && $v.form.username.$invalid } ">
                <label for="email" clasl="sr-only">E-mail</label>
                <b-input 
                    id="email" 
                    name="email" 
                    placeholder="email" 
                    v-model="form.username" 
                    @input="$v.form.username.$touch()" />
            </div>
            <div :class=" { invalid: $v.form.password.$dirty && $v.form.password.$invalid } ">
                <label for="password" clasl="sr-only">Senha</label>
                <b-input 
                    id="password" 
                    type="password" 
                    name="password"
                    placeholder="senha" 
                    v-model="form.password" 
                    @input="$v.form.password.$touch()" />
            </div>
            <button type="submit">Entrar</button>
        </b-form>
    </section>
</template>

