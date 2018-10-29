<script>
import { mapActions } from 'vuex';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
    methods: {
        ...mapActions('authentication', ['sendRegister']),
        submitRegister () {
            this.$v.$touch()
            if (this.$v.form.$invalid) {
                this.$v.$touch()
            } else {
                this.sendRegister(this.form)
                    .then(() => {
                        this.$router.push('/login')
                    })
                    .catch(e => {
                        if (e.status == 422) {
                            console.log(e)

                            this.registerFails = e.data.errors;
                            
                        }
                        console.log('error', e.status)
                    })
            }
        },
        reset () {
            this.form = {
                name: '',
                password: '',
                username: '',
                password_confirmation: '',
                birthdate: '',
            }
            this.$v.$reset()
        }
    },
    data () {
        return {
            form: {
                name: '',
                username: '',
                password: '',
                password_confirmation: '',
                birthdate: '',
            },
            registerFails: false,
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(3)
            },
            username: {
                required,
                minLength: minLength(4),
                email,
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs('password')
            },
            password: {
                required,
                minLength: minLength(4)
            },
            birthdate: {
                required,

            }

        }
    }
}
</script>

<template>
    <section>
        <b-container>
            <b-row>
                <b-col offset="6" cols="6">
                    <b-alert :show="!!registerFails" variant="danger">
                        <ul>
                            <li v-for="(item,key) in registerFails" :key="key"> 
                                {{key}} <span v-for="(i,k) in item" :key="k">- {{i}}</span> 
                            </li>
                        </ul>
                    </b-alert>
                    <b-form @submit.prevent="submitRegister">
                        <div :class=" { invalid: $v.form.name.$dirty && $v.form.name.$invalid } ">
                            <label for="name" >Name</label>
                            <b-input id="name" name="name" placeholder="name" v-model="form.name" @input="$v.form.name.$touch()" />
                            <div class="error-message">
                                Invalid name
                            </div>
                        </div>
                        <div :class=" { invalid: $v.form.username.$dirty && $v.form.username.$invalid } ">
                            <label for="email" >E-mail</label>
                            <b-input id="email" name="email" placeholder="email" v-model="form.username" @input="$v.form.username.$touch()" />
                            <div class="error-message">
                                Invalid email
                            </div>
                        </div>
                        <div :class=" { invalid: $v.form.password.$dirty && $v.form.password.$invalid } ">
                            <label for="password" >Password</label>
                            <b-input id="password" type="password" name="password" placeholder="*****" v-model="form.password" @input="$v.form.password.$touch()" />
                            <div class="error-message">
                                Invalid password
                            </div>
                        </div>
                        <div :class=" { invalid: $v.form.password_confirmation.$dirty && $v.form.password_confirmation.$invalid } ">
                            <label for="password_confirmation" >Password confirmation</label>
                            <b-input id="password_confirmation" type="password" name="password_confirmation" placeholder="*****" v-model="form.password_confirmation" @input="$v.form.password_confirmation.$touch()" />
                            <div class="error-message">
                                Invalid password
                            </div>
                        </div>
                        <div :class=" { invalid: $v.form.birthdate.$dirty && $v.form.birthdate.$invalid } ">
                            <label for="birthDate" >Birth date</label>
                            <b-input id="birthDate" name="birthdate" max="2018-01-01" min="1900-01-01" type="date" class="form-control" placeholder="1996-09-21" v-model="form.birthdate" @input="$v.form.birthdate.$touch()" />
                            <div class="error-message">
                                Invalid birthdate
                            </div>
                        </div>
                        <hr/>
                        <div class="pull-right">
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

