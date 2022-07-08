import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaBuffer, FaMoneyBill } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-80">
            <div className="absolute bg-green-500 opacity-70 px-2 py-1 rounded-tl-lg">
                <span className="text-white">{product?.user?.username}</span>
            </div>
            <img
                className="object-cover object-center w-full h-56"
                src={`${process.env.NEXT_PUBLIC_S3_URL}/images/${product.img_path}`}
            />
            {/* <img
                    className="object-cover object-center w-full h-56"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${product.img_path}`}
                /> */}
            <div className="flex items-center px-6 py-3 bg-indigo-900">
                <FaMoneyBill color="#22c560" fontSize="1.2rem" />

                <h1 className="mx-3 text-lg font-semibold text-white">
                    <span className="text-green-500">$</span>
                    {product.price}
                </h1>
            </div>

            <div className="px-6 py-4 relative">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {product.prod_nm}
                </h1>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <FaBuffer fontSize="1.3rem" />

                    <h1 className="px-2 text-sm">{product.condition}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <GrLocation fontSize="1.3rem" />
                    <h1 className="px-2 text-sm">California</h1>
                </div>
                <div className="absolute bottom-4 right-2">
                    <BsFillChatDotsFill fontSize="2rem" color="#22c560" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
