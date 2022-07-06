import { useState } from 'react'

import AppLayout from '@/components/Layouts/AppLayout'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import useAxiosGet from '@/hooks/useAxiosGet'
import Button from '@/components/Button'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Sell() {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sell`
    const { data, fetchError, isLoading, setData } = useAxiosGet(URL)
    const [isVisibleSold, setIsVisibleSold] = useState(false)
    const { user } = useAuth({ middleware: 'guest' })

    const showForSale = () => {
        setIsVisibleSold(false)
    }

    const showSold = () => {
        setIsVisibleSold(true)
    }
    console.log(user)

    return (
        <AppLayout>
            {user ? (
                <>
                    {' '}
                    <Button
                        onClick={showForSale}
                        className={`${
                            !isVisibleSold
                                ? 'bg-green-500 hover:bg-green-500'
                                : ''
                        } w-1/2 rounded-none bg-white text-center justify-center`}>
                        <h2 className="">For Sale</h2>
                    </Button>
                    <Button
                        onClick={showSold}
                        className={`${
                            isVisibleSold
                                ? 'bg-green-500 hover:bg-green-500'
                                : ''
                        } w-1/2 rounded-none bg-white text-center justify-center`}>
                        <h2 className="">Sold</h2>
                    </Button>
                    <div className="flex justify-end mt-4 mx-24">
                        <Link href="/sell/create">
                            <a className="bg-orange-500 py-2 px-4 text-white inline-flex items-center border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-orange-400 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Add Item To Sell
                            </a>
                        </Link>
                    </div>
                    {isVisibleSold ? (
                        data?.sold?.data.length === 0 ? (
                            <p className="text-2xl text-center pt-24">
                                You haven't sold anything as yet
                            </p>
                        ) : (
                            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mb-4">
                                    {isLoading && (
                                        <p className="statusMsg">Loading...</p>
                                    )}
                                    {!isLoading && fetchError && (
                                        <p
                                            className="statusMsg"
                                            style={{ color: 'red' }}>
                                            {fetchError}
                                        </p>
                                    )}
                                    {!isLoading &&
                                        !fetchError &&
                                        data?.sold?.data?.map(product => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                            />
                                        ))}
                                </div>
                                {
                                    <Pagination
                                        links={data?.sold?.links}
                                        setData={setData}
                                    />
                                }
                            </div>
                        )
                    ) : data?.forSale?.data.length === 0 ? (
                        <p className="text-2xl text-center pt-24">
                            You have no items up for sale
                        </p>
                    ) : (
                        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mb-4">
                                {isLoading && (
                                    <p className="statusMsg">Loading...</p>
                                )}
                                {!isLoading && fetchError && (
                                    <p
                                        className="statusMsg"
                                        style={{ color: 'red' }}>
                                        {fetchError}
                                    </p>
                                )}
                                {!isLoading &&
                                    !fetchError &&
                                    data?.forSale?.data?.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                            </div>
                            {
                                <Pagination
                                    links={data?.forSale?.links}
                                    setData={setData}
                                />
                            }
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col justify-center place-items-center pt-44">
                    <div className="bg-white flex flex-col justify-center place-items-center h-60 px-8 shadow-lg">
                        <p className="text-xl mb-2">
                            You must login to be able to post items for sale
                        </p>
                        <Link href="/login">
                            <a className="bg-indigo-500 py-2 px-4 text-white inline-flex items-center border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-indigo-400 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Login
                            </a>
                        </Link>
                        <p className="text-xl my-2">
                            Don't have an account yet? You can create one for
                            free by clicking the button below
                        </p>
                        <Link href="/register">
                            <a className="bg-green-500 py-2 px-4 text-white inline-flex items-center border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-green-400 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Register here
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </AppLayout>
    )
}
