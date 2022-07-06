import axios from '@/lib/axios'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Button from './Button'

const Pagination = ({ links, setData }) => {
    const handlePagination = url => {
        axios.get(url).then(response => {
            setData(response.data)
        })
    }

    return (
        <div className="flex px-6 my-4">
            {links?.map((link, index) => (
                <button
                    onClick={() => handlePagination(link.url)}
                    key={index}
                    className={`flex px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-green-500 hover:text-white dark:hover:text-gray-200 ${
                        link.active
                            ? 'bg-gray-500'
                            : 'bg-gray-200 hover:bg-green-500'
                    }`}>
                    <span className="pr-2 flex items-center">
                        {link.label === 'Previous' ? <BsArrowLeft /> : ''}
                    </span>
                    <span>{link.label}</span>
                    <span className="pl-2 flex items-center">
                        {link.label === 'Next' ? <BsArrowRight /> : ''}
                    </span>
                </button>
            ))}
        </div>
    )
}

export default Pagination
