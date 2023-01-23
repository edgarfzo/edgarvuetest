const axios = require('axios')

async function postData (object){
	const response = await axios.post('https://test-e4100-default-rtdb.europe-west1.firebasedatabase.app/IBM.json',
	object
	)
	// console.log(response)
	// console.log(response.data)

}

export default async function getStockData () {
	try {
		// 👇️ const data: GetUsersResponse
		const { data, status } = await axios.get(
		  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=UNTV74N295P1JUJJ`,
		  {
			headers: {
			  Accept: 'application/json',
			},
		  },
		)
	
		console.log(JSON.stringify(data['Time Series (5min)'], null, 4))
	
		// 👇️ "response status is: 200"
		console.log('response status is: ', status)
		for (let i = 0;JSON.stringify(data['Time Series (5min)']).length ; i++) {
			const date = Object.keys(data['Time Series (5min)'])[i]
			const value = data['Time Series (5min)'][Object.keys(data['Time Series (5min)'])[i]]['4. close']
			const object = {date, value}
			postData(object)
		}




	  } catch (error) {
		if (axios.isAxiosError(error)) {
		  console.log('error message: ', error.message)
		  return error.message;
		} else {
		  console.log('unexpected error: ', error)
		  //return 'An unexpected error occurred'
		}
	  }
	}