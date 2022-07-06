import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import SearchContext from '@/contexts/searchContext'
import { useContext } from 'react'

export default function Buy() {
    const { data, setData } = useContext(SearchContext)

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {data?.data?.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {/* <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {isLoading && (
                        <p className="statusMsg">Loading services...</p>
                    )}
                    {!isLoading && fetchError && (
                        <p className="statusMsg" style={{ color: 'red' }}>
                            {fetchError}
                        </p>
                    )}
                    {!isLoading &&
                        !fetchError &&
                        data?.data?.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div> */}
            {<Pagination links={data?.links} setData={setData} />}
        </div>
    )
}
