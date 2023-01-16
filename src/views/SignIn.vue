<template>
    <h1>Sign In to an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register"> Submit </button></p>
    <p><button @click="signInWithGoogle"> Sign In With Google </button></p>


</template>

<script>
import { ref } from 'vue'
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {useRouter} from 'vue-router'

export default {
    name: 'Register',
    data(){ 
    return {
        email: '',
        password: '',
        errMsg : '',
        router: useRouter()
    }
    },
    components: {
    },
    methods: {
        register(){
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data)=>{console.log('successfully signed!')})
                this.$router.push('/')
                .catch((error)=> {console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errMsg = "Invalid email"
                    break
                    case "auth/user-not-found":
                        this.errMsg = "No account with that email was found"
                    break
                    case "auth/wrong-password":
                        this.errMsg = "Incorrect password"
                    break
                    default:
                        this.errMsg = "Email or password was incorrect"
                    break
                }
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