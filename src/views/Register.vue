<template>
    <h1>Create an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register"> Submit </button></p>
    <p><button @click="signInWithGoogle"> Sign In With Google </button></p>


</template>

<script>
import { ref } from 'vue'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {useRouter} from 'vue-router'

export default {
    name: 'Register',
    data(){ 
    return {
        email: '',
        password: '',
        router: useRouter()
    }
    },
    components: {
    },
    methods: {
        register(){
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data)=>{console.log('successfully registerd!')})
                this.$router.push('/')
                .catch((error)=> {console.log(error.code)
            })

        },
        signInwithGoogle(){
            const provider = new GoogleAuthProvider
            signInWithPopup(getAuth(), provider)
            .then((result) =>{
                console.log(result.user)
                this.$router.push('/')
            })
            .catch((error)=>{

            })

        }

    }

}

</script>