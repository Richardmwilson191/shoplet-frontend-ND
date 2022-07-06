import { useRouter } from 'next/router'
import { useUser } from '@/contexts/userContext'
import { useEffect } from 'react'

const useAuthorization = () => {
    const { user } = useUser()
    const router = useRouter()
    const adminRoutes = ['dashboard']

    const path = router.pathname
    // console.log(user['role'])
    useEffect(() => {
        if (
            user?.role?.title === 'user' &&
            adminRoutes.some(route => path.includes(route))
        ) {
            return router.push('/')
        }
    }, [])

    return { user }
}

export default useAuthorization
