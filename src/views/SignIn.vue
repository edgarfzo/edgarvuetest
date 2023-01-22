<template>
    <h1>Sign In to an account</h1>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signInWithGoogle"> Sign In With Google </button></p>


</template>

<script>
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useAppStore } from '@/store/app'
import { getBalance } from '@/firebase-utils'

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
        signInWithGoogle(){
            const provider = new GoogleAuthProvider
            signInWithPopup(getAuth(), provider)
            .then((result) =>{
                getBalance()
                useAppStore().$patch({isLoggedIn: true})
                useAppStore().$patch({currentUser: result.user})
                this.$router.push('/home')
            })
            .catch((error)=>{

            })

        }

    }

}

</script>