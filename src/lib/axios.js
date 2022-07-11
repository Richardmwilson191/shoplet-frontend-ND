import Axios from 'axios'

// function getCookie(cookieName) {
//     let cookie = {}
//     document.cookie.split(';').forEach(function (el) {
//         let [key, value] = el.split('=')
//         cookie[key.trim()] = value
//     })
//     return cookie[cookieName]
// }

// let xsrf

// if (
//     typeof document !== 'undefined' &&
//     typeof getCookie('XSRF-TOKEN') !== 'undefined'
// ) {
//     xsrf = getCookie('XSRF-TOKEN').slice(0, -3)
// }

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        // 'X-XSRF-TOKEN': xsrf ? xsrf : '',
    },
    withCredentials: true,
})

export default axios
