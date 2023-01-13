import Vue from 'vue'
import axios from 'axios'

const baseURL = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=${process.env.VUE_APP_API_KEY}`

const config = { baseURL }

const _axios = axios.create(config)

_axios.interceptors.request.use(
    function (config){
        return config
    },
    function (error){
        console.log(error)
        return Promise.reject(error)
    }
)

_axios.interceptors.request.use(
    function (response){
        return response
    },
    function (error){
        console.log(error)
        return Promise.reject(error)
    }
)

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

Vue.use(Plugin)

export default Plugin