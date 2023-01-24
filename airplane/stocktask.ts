const axios = require('axios')

async function postData (key:string, object:Object){
	const response = await axios.put(`https://test-e4100-default-rtdb.europe-west1.firebasedatabase.app/IBM/${key}.json`,
	object
	)
}

function resultHandling (object:Object, interval:string){
	const value = object[`Time Series (${interval})`]
	var key = Object.keys(value)[0]
	const lastValue = value[key]
	Object.keys(lastValue).forEach(el => {
		lastValue[el.slice(3)] = lastValue[el]
		delete lastValue[el]
		})
	key = key.toString().replace(/ /g,"_")
	return {key,lastValue}
}

export default async function getStockData () {
	try {
		const interval = '30min'
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.get(
		  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=${interval}&apikey=UNTV74N295P1JUJJ`,
		  {
			headers: {
			  Accept: 'application/json',
			},
		  },
		)
		//console.log(JSON.stringify(data['Time Series (30min)'], null, 4))

		const {key, lastValue} = resultHandling(data, interval)
		postData(key, lastValue)
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