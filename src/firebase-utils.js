import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import{ getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { useAppStore } from '@/store/app'

export const getBalance = () => {
    const db = getDatabase()
    var data = []
    const balanceChange = ref(db, 'transactions')
    onValue( balanceChange, (snapshot) => {
    const transactions = snapshot.val()
    let keys = Object.keys(transactions)
    keys.forEach(el => data.push(transactions[el].amount))
    data = data.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log('data', data)
    useAppStore().$patch({currentBalance: data})
    })
}

export const checkAuth = () => {
    let auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if (!user){
        useAppStore().$patch({isLoggedIn: false})
        return false
        
      }
      else {
        useAppStore().$patch({isLoggedIn: true})
        return true
      }
    })
}