import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import Button from '../Button'

export default function Table({ data, headings, handleDelete, handleEdit }) {
    const keys = Object.keys(headings)

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {keys.map(key => (
                                        <th
                                            key={key}
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {key}
                                        </th>
                                    ))}

                                    <th
                                        scope="col"
                                        className="relative px-6 py-3">
                                        <span className="sr-only">Options</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map(item => (
                                    <tr key={item.id}>
                                        {keys.map(key => (
                                            <td
                                                key={key}
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {key === 'role'
                                                    ? item[key][headings[key]]
                                                    : item[headings[key]]}
                                            </td>
                                        ))}

                                        <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                                            <Button
                                                className="bg-gradient-r to-gray-500 from-gray-600 px-3 py-2 mr-4 hover:from-gray-600 hover:to-gray-700"
                                                onClick={() =>
                                                    handleEdit(item)
                                                }>
                                                <FaEdit color="white" />
                                            </Button>
                                            <Button
                                                className="bg-gradient-r to-red-500 from-red-600 px-3 py-2 hover:from-red-600 hover:to-red-700"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }>
                                                <FaTrashAlt color="white" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
