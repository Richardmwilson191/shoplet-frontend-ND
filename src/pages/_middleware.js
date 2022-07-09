import { NextResponse } from 'next/server'
// import { aes, enc } from 'crypto-js'
import CryptoJS from 'crypto-js'

export default function middleware(req) {
    // check if the role is superadmin:1 or admin:2
    if (
        req.cookies.role != 1 &&
        req.url.includes('dashboard') &&
        req.cookies.role != 2
    ) {
        return NextResponse.redirect(new URL('/404', req.url))
    }
}
