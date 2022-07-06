import { createContext, useEffect, useState } from 'react'
import useAxiosGet from '@/hooks/useAxiosGet'

const ServiceCategoryContext = createContext({})

export const ServiceCategoryProvider = ({ children }) => {
    const [serviceCategories, setServiceCategories] = useState([])

    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

    const { data, fetchError, isLoading } = useAxiosGet(
        `${baseURL}/api/service/category`,
    )

    useEffect(() => {
        setServiceCategories(data)
    }, [data])

    return (
        <ServiceCategoryContext.Provider
            value={{
                serviceCategories,
                setServiceCategories,
                fetchError,
                isLoading,
            }}>
            {children}
        </ServiceCategoryContext.Provider>
    )
}

export default ServiceCategoryContext
