import { createContext, useState, useEffect } from 'react'
import axios from '@/lib/axios'

const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {
    const [searchString, setSearchString] = useState('')
    const [data, setData] = useState([])
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`, {
                params: { searchString: searchString },
            })
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }, [searchString])

    const handleSearch = e => {
        setSearchString(e.target.value)
    }
    // const handleSearch = e => {
    //     setSearchString(prev => {
    //         return { ...prev, [e.target.name]: e.target.value }
    //     })
    // }

    // const search = e => {
    //     e.preventDefault()

    //     const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`
    //     const { data, fetchError, isLoading, setData } = useAxiosGet(URL, {
    //         params: {
    //             searchString: 'laptop',
    //         },
    //     })
    // }

    return (
        <SearchContext.Provider
            value={{
                searchString,
                setSearchString,
                handleSearch,
                data,
                setData,
                errors,
            }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext
