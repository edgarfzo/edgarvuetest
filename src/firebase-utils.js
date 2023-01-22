import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import{ getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAppStore } from '@/store/app'

export const getBalance = () => {
  useAppStore().$patch({isLoadingBalance: true})
 if(!useAppStore().isLoggedIn){
  useAppStore().$patch({isLoadingBalance: false})
  return ''
}
 else{
  useAppStore().$patch({isLoadingBalance: true})
    const db = getDatabase()
    var data = []
    const balanceChange = ref(db, 'transactions')
    onValue( balanceChange, (snapshot) => {
    const transactions = snapshot.val()
    let keys = Object.keys(transactions)
    keys.forEach(el => {
      if(transactions[el].name===useAppStore().currentUser.displayName)
       {data.push(transactions[el].amount)}
      })
    data = data.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log('data', data)
    useAppStore().$patch({currentBalance: data})
    useAppStore().$patch({isLoadingBalance: false})
    })}
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = getAuth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject);
  })
}