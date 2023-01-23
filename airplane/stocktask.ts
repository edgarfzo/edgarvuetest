const axios = require('axios')

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
	
		console.log(JSON.stringify(data, null, 4))
	
		// 👇️ "response status is: 200"
		console.log('response status is: ', status)
	
		return data
	  } catch (error) {
		if (axios.isAxiosError(error)) {
		  console.log('error message: ', error.message)
		  return error.message;
		} else {
		  console.log('unexpected error: ', error)
		  return 'An unexpected error occurred'
		}
	  }
	}