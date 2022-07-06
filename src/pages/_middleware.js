import { useAuth } from '@/hooks/auth'
import { NextResponse } from 'next/server'

export default function middleware(req) {
    const { cookies } = req
    const url = req.url
    const guest = ['/login', '/register', '/buy', '/sell']

    if (!cookies.laravel_session && guest.some(item => url.includes(item))) {
        // return NextResponse.redirect(`http://localhost:3000/login`)
    }
}
