import { FaCheckCircle, FaTimes } from 'react-icons/fa'

const Toast = ({ handleClick, toast }) => {
    return (
        <div className="sticky z-50 flex max-w-xs w-full mt-4 mr-4 top-2 right-0 bg-white rounded shadow p-4 float-right">
            <div className="mr-2">
                <FaCheckCircle className="text-green-500 h-6 w-6" />
            </div>
            <div className="flex-1 text-gray-700">{toast}</div>
            <div className="ml-2">
                <button
                    onClick={handleClick}
                    className="align-top text-gray-500 hover:text-blue-700 focus:outline-none focus:text-gray-600">
                    <FaTimes className="text-gray-400 h-6 w-6 hover:text-gray-700" />
                </button>
            </div>
        </div>
    )
}

export default Toast
