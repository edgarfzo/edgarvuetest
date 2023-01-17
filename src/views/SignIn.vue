<template>
    <h1>Sign In to an account</h1>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signInWithGoogle"> Sign In With Google </button></p>


</template>

<script>
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useAppStore } from '@/store/app'

export default {
    name: 'Register',
    data(){ 
    return {
        email: '',
        password: '',
        errMsg : '',
    }
    },
    components: {
    },
    methods: {
        register(){
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data)=>{console.log('successfully signed!')})
                this.$router.push('/home')
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
        signInWithGoogle(){
            const provider = new GoogleAuthProvider
            signInWithPopup(getAuth(), provider)
            .then((result) =>{
                useAppStore().setCurrentUser(result.user)
                this.$router.push('/home')
            })
            .catch((error)=>{

            })

        }

    }

}

</script>