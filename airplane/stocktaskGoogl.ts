const axios = require('axios')

async function postData (key:string, object:Object){
	const response = await axios.put(`https://test-e4100-default-rtdb.europe-west1.firebasedatabase.app/GOOGL/${key}.json`,
	object
	)
	console.log(response.data)
}

function resultHandling (object:Object, interval:string){
	const value = object[`Time Series (${interval})`]
	var key = Object.keys(value)
	key.forEach(element => {
		const lastValue = value[element]
		Object.keys(lastValue).forEach(el => {
		lastValue[el.slice(3)] = lastValue[el]
		delete lastValue[el]
		})
		const keytoUse = element.toString().replace(/ /g,"_")
		postData(keytoUse, lastValue)
	})
	
	
}

export default async function getStockDataFromAPI () {
	try {
		const interval = '30min'
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.get(
		  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=${interval}&apikey=UNTV74N295P1JUJJ`,
		  {
			headers: {
			  Accept: 'application/json',
			},
		  },
		)
		resultHandling(data, interval)
		
		// 👇️ "response status is: 200"
		console.log('response status is: ', status)
	  } catch (error:any) {
		if (axios.isAxiosError(error)) {
		  console.log('error message: ', error.message)
		  return error.message;
		} else {
		  console.log('unexpected error: ', error)
		  //return 'An unexpected error occurred'
		}
	  }
	}