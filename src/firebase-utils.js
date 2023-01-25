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
    if (!data.length==0) {
    data = data.reduce((accumulator, currentValue) => accumulator + currentValue)
    useAppStore().$patch({currentBalance: data})
    useAppStore().$patch({isLoadingBalance: false})}
    else {
      data = 0
      useAppStore().$patch({currentBalance: data})
      useAppStore().$patch({isLoadingBalance: false})
    }
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

export const getStockData = (symbol) => {
  useAppStore().$patch({isLoadingStockData: true})
 if(!useAppStore().isLoggedIn){
  useAppStore().$patch({isLoadingStockData: false})
  return ''
}
 else{
  useAppStore().$patch({isLoadingStockData: true})
    const db = getDatabase()
    var data = [[],[]]
    const balanceChange = ref(db, symbol)
    onValue( balanceChange, (snapshot) => {
    const transactions = snapshot.val()
    let keys = Object.keys(transactions)
    keys.forEach(el => {
      data[0].push(el)
      data[1].push(transactions[el].close)
      })
      
    if (!data.length==0) {
    console.log(data)
    useAppStore().$patch({stockData: data})
    useAppStore().$patch({isLoadingStockData: false})}
    else {
      data = 0
      useAppStore().$patch({isLoadingStockData: false})
    }
    })}
}

export const getStocksAvailable = () => {
  useAppStore().$patch({isLoadingStocksAvailable: true})
 if(!useAppStore().isLoggedIn){
  useAppStore().$patch({isLoadingStockData: false})
  return ''
}
 else{
  useAppStore().$patch({isLoadingStocksAvailable: true})
    const db = getDatabase()
    var data = []
    const balanceChange = ref(db, '/')
    onValue( balanceChange, (snapshot) => {
    const transactions = snapshot.val()
    let keys = Object.keys(transactions)
    keys.forEach(el => {
      data.push(el)
      })
    if (!data.length==0) {
    console.log(data)
    useAppStore().$patch({stocksAvailable: data})
    useAppStore().$patch({isLoadingStocksAvailable: false})}
    else {
      data = 0
      useAppStore().$patch({isLoadingStocksAvailable: false})
    }
    })}
}