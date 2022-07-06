import { createContext, useState, useEffect, useContext } from 'react'
import axios from '@/lib/axios'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        axios
            .get('/api/user')
            .then(res => setUser(res.data))
            .catch(error => {
                if (error.response.status !== 409) console.log(error)
            })
    }, [])

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
