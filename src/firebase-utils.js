import { getDatabase, ref, set, onValue, push  } from "firebase/database"
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